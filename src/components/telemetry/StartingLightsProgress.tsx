'use client';

import React, { useEffect, useState } from 'react';
import { useScroll, motion, AnimatePresence } from 'framer-motion';

export default function StartingLightsProgress() {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);
  const [lightsOut, setLightsOut] = useState(false);

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setProgress(latest);
      if (latest >= 0.985) {
        setLightsOut(true);
      } else {
        setLightsOut(false);
      }
    });
  }, [scrollYProgress]);

  // Sequential 5-light threshold triggers
  const lights = [
    progress >= 0.20 && !lightsOut,
    progress >= 0.40 && !lightsOut,
    progress >= 0.60 && !lightsOut,
    progress >= 0.80 && !lightsOut,
    progress >= 0.98 && !lightsOut,
  ];

  const percentage = Math.min(100, Math.round(progress * 100));

  return (
    <div
      className="fixed top-20 right-6 z-40 hidden sm:flex items-center gap-3 bg-[#030914]/90 backdrop-blur-md border border-[#334155] px-3.5 py-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.6)] select-none"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))',
      }}
    >
      {/* Telemetry Status Label */}
      <div className="flex flex-col items-start leading-none pr-1">
        <span className="text-[9px] font-mono font-bold text-[#8899aa] tracking-widest uppercase">
          {lightsOut ? 'STATUS' : 'LAP DIST'}
        </span>
        <span className="text-xs font-mono font-black text-[#f2e529] tracking-tight">
          {lightsOut ? 'LIGHTS OUT' : `${percentage}%`}
        </span>
      </div>

      {/* The 5-Light FIA Starting Rig */}
      <div className="flex items-center gap-1.5 p-1 bg-[#081426] border border-[#334155]/80 rounded-[2px]">
        {lights.map((isLit, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            {/* Top Housing Bezel */}
            <div className="w-3.5 h-1 bg-[#1e293b] rounded-t-[1px] mb-[1px]" />

            {/* Light Bulb */}
            <div
              className={`w-3.5 h-3.5 rounded-full border transition-all duration-200 ${
                lightsOut
                  ? 'bg-[#00ff00] border-[#00ff00] shadow-[0_0_12px_#00ff00] animate-pulse'
                  : isLit
                  ? 'bg-[#e10600] border-[#ff3333] shadow-[0_0_12px_#e10600]'
                  : 'bg-[#1a0505] border-[#3f1212]'
              }`}
            >
              {/* Inner filament highlight */}
              <div
                className={`w-1 h-1 rounded-full m-0.5 ${
                  lightsOut ? 'bg-white' : isLit ? 'bg-[#ff9999]' : 'bg-transparent'
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Flashing message when hitting bottom */}
      <AnimatePresence>
        {lightsOut && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="text-[10px] font-mono font-black text-[#00ff00] tracking-wider uppercase pl-1"
          >
            AWAY WE GO!
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
