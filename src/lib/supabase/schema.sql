-- Pit Radio Messages Table (Idempotent / Safe to re-run)
create table if not exists public.messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  callsign text not null check (char_length(callsign) between 1 and 50),
  message text not null check (char_length(message) between 1 and 500)
);

-- Enable Row Level Security
alter table public.messages enable row level security;

-- Drop existing policies if they already exist to prevent 42710 error
drop policy if exists "Messages are viewable by everyone" on public.messages;
create policy "Messages are viewable by everyone" on public.messages
  for select using (true);

drop policy if exists "Anyone can insert messages" on public.messages;
create policy "Anyone can insert messages" on public.messages
  for insert with check (true);

-- Enable realtime safely without duplicate publication error
do $$
begin
  if not exists (
    select 1 from pg_publication_tables
    where pubname = 'supabase_realtime'
    and schemaname = 'public'
    and tablename = 'messages'
  ) then
    alter publication supabase_realtime add table public.messages;
  end if;
end $$;
