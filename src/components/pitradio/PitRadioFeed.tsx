'use client';

import { useEffect, useState, useCallback } from 'react';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { Message } from '@/lib/supabase/types';

interface PitRadioFeedProps {
  newOptimisticMessage?: Message | null;
}

const SAMPLE_TRANSMISSIONS: Message[] = [
  {
    id: 'sample-1',
    created_at: new Date(Date.now() - 1000 * 60 * 12).toISOString(),
    callsign: 'RACE CONTROL',
    message: 'Track clear. Sector 1, 2, and 3 green. Deploying DRS.',
  },
  {
    id: 'sample-2',
    created_at: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
    callsign: 'BOX-BOX',
    message: 'Optimal strategy confirmed. Telemetry nominal across all power units.',
  },
];

export function PitRadioFeed({ newOptimisticMessage }: PitRadioFeedProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = useCallback(async () => {
    if (!isSupabaseConfigured()) {
      setMessages(SAMPLE_TRANSMISSIONS);
      setLoading(false);
      return;
    }

    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

      if (!error && data && data.length > 0) {
        setMessages(data as Message[]);
      } else {
        setMessages(SAMPLE_TRANSMISSIONS);
      }
    } catch {
      setMessages(SAMPLE_TRANSMISSIONS);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchMessages();

    if (!isSupabaseConfigured()) return;

    try {
      const supabase = createClient();
      const channel = supabase
        .channel('messages_changes')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
          const newMessage = payload.new as Message;
          setMessages((prev) => {
            if (prev.some(m => m.callsign === newMessage.callsign && m.message === newMessage.message && Math.abs(new Date(m.created_at).getTime() - new Date(newMessage.created_at).getTime()) < 5000)) {
              return prev;
            }
            return [newMessage, ...prev].slice(0, 20);
          });
        })
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    } catch {
      // Graceful fallback if realtime fails
    }
  }, [fetchMessages]);

  useEffect(() => {
    if (newOptimisticMessage) {
      setMessages((prev) => [newOptimisticMessage, ...prev].slice(0, 20));
    }
  }, [newOptimisticMessage]);

  function getRelativeTime(dateString: string) {
    const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
    const diff = new Date().getTime() - new Date(dateString).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'just now';
    if (minutes < 60) return rtf.format(-minutes, 'minute');
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return rtf.format(-hours, 'hour');
    const days = Math.floor(hours / 24);
    return rtf.format(-days, 'day');
  }

  if (loading) {
    return <div className="text-[#8899aa] font-mono text-sm animate-pulse">SCANNING FREQUENCIES...</div>;
  }

  return (
    <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
      {!isSupabaseConfigured() && (
        <div className="p-2 border border-[#f2e529]/30 bg-[#f2e529]/5 text-[#f2e529] font-mono text-[11px] tracking-wider mb-3">
          DEMO FEED ACTIVE // CONNECT SUPABASE IN .env.local FOR LIVE DB
        </div>
      )}
      {messages.map((msg) => (
        <div key={msg.id} className="bg-[#0a1628] border-l-2 border-[#f2e529] p-4 flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[#f2e529] font-mono font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              <svg className="w-3 h-3 animate-pulse text-[#f2e529]" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="5" /></svg>
              {msg.callsign}
            </span>
            <span className="text-[#8899aa] text-xs font-mono">{getRelativeTime(msg.created_at)}</span>
          </div>
          <p className="text-[#f0f0f0] font-sans text-sm">{msg.message}</p>
        </div>
      ))}
    </div>
  );
}
