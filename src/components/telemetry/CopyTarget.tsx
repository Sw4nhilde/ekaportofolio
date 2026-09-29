'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import { playF1RadioNotification } from '@/lib/audio/soundEffects';

interface CopyTargetProps {
  textToCopy: string;
  displayValue?: string;
  label?: string;
  className?: string;
}

export default function CopyTarget({
  textToCopy,
  displayValue,
  label = 'PIT WALL COMMS',
  className = '',
}: CopyTargetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      playF1RadioNotification();
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`group relative flex flex-col items-start p-3 font-mono transition-all duration-300 border text-left select-none ${
        copied
          ? 'bg-[#030914] border-[#b138dd] shadow-[0_0_20px_rgba(177,56,221,0.5)]' // Fastest-lap purple flash!
          : 'bg-[#081426] border-[#334155] hover:border-[#f2e529] hover:bg-[#0a1628]'
      } ${className}`}
      style={{
        clipPath:
          'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
      }}
      title="Click to copy to clipboard"
    >
      {/* Top Header Label */}
      <div className="flex items-center justify-between w-full text-[9px] text-[#8899aa] uppercase font-bold tracking-widest mb-1">
        <span className="flex items-center gap-1">
          {copied && <Sparkles size={10} className="text-[#b138dd] animate-spin" />}
          {copied ? 'FASTEST SECTOR CONFIRMED' : label}
        </span>
        <span className={copied ? 'text-[#b138dd]' : 'text-[#8899aa]'}>
          {copied ? 'PURPLE SECTOR' : 'ONE-CLICK COPY'}
        </span>
      </div>

      {/* Main Content Readout */}
      <div className="flex items-center justify-between w-full gap-2 sm:gap-3">
        <span
          className={`text-[11px] sm:text-xs md:text-sm font-black tracking-wide transition-colors truncate ${
            copied ? 'text-[#b138dd]' : 'text-[#f0f0f0] group-hover:text-[#f2e529]'
          }`}
        >
          {copied ? 'DELTA: 0.000s // COPIED TO CLIPBOARD' : displayValue || textToCopy}
        </span>

        <div
          className={`p-1 border transition-colors shrink-0 ${
            copied
              ? 'bg-[#b138dd]/20 border-[#b138dd] text-[#b138dd]'
              : 'bg-[#030914] border-[#334155] text-[#8899aa] group-hover:border-[#f2e529] group-hover:text-[#f2e529]'
          }`}
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
        </div>
      </div>
    </button>
  );
}
