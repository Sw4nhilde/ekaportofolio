'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface TachometerCounterProps {
  targetNumber: number;
  suffix?: string;
  label: string;
  delay?: number;
  revLimit?: number; // e.g. 15000 RPM
}

export default function TachometerCounter({
  targetNumber,
  suffix = '+',
  label,
  delay = 0,
  revLimit = 15000,
}: TachometerCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  const [count, setCount] = useState(0);
  const [rpm, setRpm] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1600; // ms

    const easeOutPower3 = (t: number): number => 1 - Math.pow(1 - t, 3);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      const easedProgress = easeOutPower3(progress);

      setCount(Math.round(easedProgress * targetNumber));
      setRpm(Math.round(easedProgress * revLimit));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(step);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, targetNumber, revLimit, delay]);

  // Tachometer LED Rev light segments (5 stages: 2 green, 1 yellow, 1 red, 1 purple rev limiter)
  const rpmRatio = rpm / revLimit;
  const leds = [
    { lit: rpmRatio >= 0.2, color: 'bg-[#00ff00]', shadow: 'shadow-[0_0_8px_#00ff00]' },
    { lit: rpmRatio >= 0.4, color: 'bg-[#00ff00]', shadow: 'shadow-[0_0_8px_#00ff00]' },
    { lit: rpmRatio >= 0.65, color: 'bg-[#f2e529]', shadow: 'shadow-[0_0_8px_#f2e529]' },
    { lit: rpmRatio >= 0.85, color: 'bg-[#e10600]', shadow: 'shadow-[0_0_8px_#e10600]' },
    { lit: rpmRatio >= 0.98, color: 'bg-[#b138dd]', shadow: 'shadow-[0_0_8px_#b138dd]' }, // Limiter purple!
  ];

  return (
    <div
      ref={containerRef}
      className="bg-[#081426]/90 border border-[#334155] p-3 sm:p-4 flex flex-col justify-between flex-1 min-w-[105px] sm:min-w-[140px] md:min-w-[160px] font-mono select-none group hover:border-[#f2e529] transition-all duration-300"
      style={{
        clipPath:
          'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
      }}
    >
      {/* Top Rev LED strip */}
      <div className="flex items-center justify-between pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 border-b border-[#334155]/60">
        <span className="text-[8px] sm:text-[9px] text-[#8899aa] uppercase font-bold tracking-tighter">
          {rpm} RPM
        </span>
        <div className="flex items-center gap-0.5 sm:gap-1">
          {leds.map((led, i) => (
            <div
              key={i}
              className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-[1px] transition-all duration-75 ${
                led.lit ? `${led.color} ${led.shadow}` : 'bg-[#1e293b]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Counter Digits */}
      <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f2e529] tracking-tight group-hover:scale-105 transition-transform duration-200">
        {String(count).padStart(2, '0')}
        <span className="text-[#f0f0f0] text-lg sm:text-xl ml-0.5">{suffix}</span>
      </div>

      {/* Label */}
      <div className="text-[9px] sm:text-[10px] md:text-[11px] text-[#8899aa] uppercase font-bold tracking-wider mt-1 sm:mt-1.5 line-clamp-1">
        {label}
      </div>
    </div>
  );
}
