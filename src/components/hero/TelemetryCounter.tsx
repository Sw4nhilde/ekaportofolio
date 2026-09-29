'use client';

import { motion } from 'framer-motion';

interface TelemetryCounterProps {
  value: string;
  label: string;
  delay?: number;
}

export default function TelemetryCounter({ value, label, delay = 0 }: TelemetryCounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="p-4 border border-[rgba(242,229,41,0.3)] bg-[#0a1628]/80 backdrop-blur-sm"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
      }}
    >
      <div className="text-3xl md:text-4xl font-mono font-bold text-[#f2e529] mb-1">
        {value}
      </div>
      <div className="text-xs md:text-sm font-mono uppercase text-[#8899aa] tracking-wider">
        {label}
      </div>
    </motion.div>
  );
}
