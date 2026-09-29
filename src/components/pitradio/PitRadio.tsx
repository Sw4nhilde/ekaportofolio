'use client';

import { useState } from 'react';
import { PitRadioForm } from './PitRadioForm';
import { PitRadioFeed } from './PitRadioFeed';
import { Message } from '@/lib/supabase/types';

export default function PitRadio() {
  const [newOptimisticMessage, setNewOptimisticMessage] = useState<Message | null>(null);

  const handleOptimisticSubmit = (msg: Message) => {
    setNewOptimisticMessage(msg);
  };

  return (
    <section id="pit-radio" className="bg-[#040d1a] py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 border-b-2 border-[#334155] pb-6 flex flex-col space-y-2">
          <span className="inline-block bg-[#e10600] text-white text-[10px] font-bold px-2 py-1 tracking-widest w-fit mb-2">OPEN FREQUENCY</span>
          <h2 className="text-[#f0f0f0] text-4xl font-black italic tracking-tighter uppercase">PIT RADIO</h2>
          <p className="text-[#8899aa] font-mono text-sm">Transmit a message to the pit wall. All frequencies are monitored.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <PitRadioForm onOptimisticSubmit={handleOptimisticSubmit} />
          </div>
          <div className="bg-[#0a1628]/50 p-6 border border-[#334155]">
            <h3 className="text-[#f2e529] font-mono text-sm tracking-widest uppercase mb-6 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              Recent Transmissions
            </h3>
            <PitRadioFeed newOptimisticMessage={newOptimisticMessage} />
          </div>
        </div>
      </div>
    </section>
  );
}
