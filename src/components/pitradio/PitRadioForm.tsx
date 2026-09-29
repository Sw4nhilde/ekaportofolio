'use client';

import { useState } from 'react';
import { createClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { Message } from '@/lib/supabase/types';
import { Radio, CheckCircle, AlertTriangle, Send } from 'lucide-react';
import { playWalkieTalkieCambio, playConfirmBeep } from '@/lib/audio/soundEffects';

interface PitRadioFormProps {
  onOptimisticSubmit: (msg: Message) => void;
}

export function PitRadioForm({ onOptimisticSubmit }: PitRadioFormProps) {
  const [callsign, setCallsign] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!callsign.trim() || !message.trim()) return;

    setStatus('loading');
    playWalkieTalkieCambio();

    const tempMsg: Message = {
      id: `local-${Date.now()}`,
      created_at: new Date().toISOString(),
      callsign: callsign.trim(),
      message: message.trim(),
    };
    onOptimisticSubmit(tempMsg);

    if (!isSupabaseConfigured()) {
      // Offline/local demo mode
      setTimeout(() => {
        setStatus('success');
        playConfirmBeep();
        setCallsign('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3500);
      }, 700);
      return;
    }

    try {
      const supabase = createClient();
      const { error } = await supabase
        .from('messages')
        .insert({ callsign: tempMsg.callsign, message: tempMsg.message });

      if (error) {
        setStatus('error');
        setErrorMessage(error.message || 'TELEMETRY LOST - RETRY');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('success');
        playConfirmBeep();
        setCallsign('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 3500);
      }
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'TELEMETRY LOST - RETRY');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-[#081426] p-6 flex flex-col space-y-6 font-mono relative overflow-hidden border-2 transition-all duration-300 ${
        status === 'success'
          ? 'border-[#00ff00] shadow-[0_0_30px_rgba(0,255,0,0.3)]'
          : status === 'error'
          ? 'border-[#e10600] shadow-[0_0_30px_rgba(225,6,0,0.3)]'
          : 'border-[#334155]'
      }`}
      style={{
        clipPath:
          'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
      }}
    >
      {/* Carbon Panel Corner Cut */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-[#030914] -rotate-45 translate-x-8 -translate-y-8 border-b border-[#334155]" />

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="callsign"
          className="text-[#8899aa] text-xs font-bold tracking-widest uppercase flex items-center justify-between"
        >
          <span>CALLSIGN // IDENTIFIER</span>
          <span className="text-[10px] text-[#f2e529]">FREQ 142.85 MHz</span>
        </label>
        <input
          id="callsign"
          type="text"
          value={callsign}
          onChange={(e) => setCallsign(e.target.value)}
          maxLength={50}
          className="bg-[#030914] text-[#f0f0f0] border-b-2 border-[#334155] focus:border-[#f2e529] outline-none px-3 py-2 text-sm transition-colors uppercase font-mono"
          placeholder="ENTER CALLSIGN (E.G. HAMILTON #44)..."
          disabled={status === 'loading' || status === 'success'}
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label
          htmlFor="message"
          className="text-[#8899aa] text-xs font-bold tracking-widest uppercase"
        >
          RADIO TRANSMISSION // VOICE-TO-TEXT
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          rows={4}
          className="bg-[#030914] text-[#f0f0f0] border-b-2 border-[#334155] focus:border-[#f2e529] outline-none px-3 py-2 text-sm transition-colors resize-none font-mono"
          placeholder="TRANSMIT MESSAGE TO PIT WALL..."
          disabled={status === 'loading' || status === 'success'}
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={
            status === 'loading' ||
            status === 'success' ||
            !callsign.trim() ||
            !message.trim()
          }
          className={`w-full py-3.5 px-4 font-mono font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 border select-none disabled:opacity-50 disabled:cursor-not-allowed ${
            status === 'idle'
              ? 'bg-[#f2e529] text-[#030914] border-[#f2e529] hover:bg-white shadow-[0_0_15px_rgba(242,229,41,0.3)]'
              : status === 'loading'
              ? 'bg-[#081426] text-[#f2e529] border-[#f2e529] animate-pulse shadow-[0_0_20px_rgba(242,229,41,0.4)]'
              : status === 'success'
              ? 'bg-[#00ff00] text-[#030914] border-[#00ff00] shadow-[0_0_25px_#00ff00]'
              : 'bg-[#e10600] text-white border-[#e10600]'
          }`}
          style={{
            clipPath:
              'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)',
          }}
        >
          {status === 'idle' && (
            <>
              <Send size={15} />
              <span>TRANSMIT TO PIT WALL</span>
            </>
          )}

          {status === 'loading' && (
            <div className="flex items-center gap-2">
              <Radio size={16} className="animate-spin text-[#f2e529]" />
              <span>TRANSMITTING... [RADIO SQUELCH]</span>
            </div>
          )}

          {status === 'success' && (
            <div className="flex items-center gap-2">
              <CheckCircle size={16} />
              <span>COPY THAT, BOX THIS LAP // RECEIVED</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} />
              <span>{errorMessage || 'TELEMETRY LOST - RETRY'}</span>
            </div>
          )}
        </button>

        {status === 'error' && (
          <p className="text-[#e10600] text-[11px] font-mono mt-2 text-center uppercase tracking-wider">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
