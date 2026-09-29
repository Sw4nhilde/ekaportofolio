'use client';

import { Github, Linkedin } from 'lucide-react';
import CopyTarget from '@/components/telemetry/CopyTarget';

export default function Footer() {
  return (
    <footer className="bg-[#030914] border-t-2 border-[#f2e529] py-8 text-[#f0f0f0] font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start space-y-1">
          <div className="text-xs font-bold text-[#f2e529] tracking-wider">
            MUHAMMAD EKA MANDIRI SUJANTO &copy; 2024
          </div>
          <div className="text-[10px] sm:text-[11px] text-[#8899aa] tracking-widest flex items-center justify-center md:justify-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff00] animate-ping shrink-0" />
            <span>ALL TELEMETRY SYSTEMS NOMINAL</span>
          </div>
        </div>

        {/* Copy Pit Wall Email */}
        <div className="w-full max-w-xs">
          <CopyTarget
            textToCopy="ekasoe4009@gmail.com"
            displayValue="ekasoe4009@gmail.com"
            label="QUICK COMMS"
          />
        </div>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/Sw4nhilde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8899aa] hover:text-[#f2e529] transition-colors p-2 bg-[#081426] border border-[#334155] hover:border-[#f2e529]"
            style={{
              clipPath:
                'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
            }}
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-eka-mandiri-sujanto/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8899aa] hover:text-[#f2e529] transition-colors p-2 bg-[#081426] border border-[#334155] hover:border-[#f2e529]"
            style={{
              clipPath:
                'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
            }}
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
