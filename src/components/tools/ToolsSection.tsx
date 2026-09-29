'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toolsData, ToolItem } from '@/data/tools';
import { Wrench, Cpu, Globe, Terminal, Server } from 'lucide-react';

type CategoryFilter = 'all' | 'ai' | 'web' | 'lang' | 'devops';

export default function ToolsSection() {
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filteredTools = toolsData.filter((tool) =>
    filter === 'all' ? true : tool.category === filter
  );

  const filterOptions: { id: CategoryFilter; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'ALL SYSTEMS', icon: <Wrench size={13} /> },
    { id: 'ai', label: 'AI & ML', icon: <Cpu size={13} /> },
    { id: 'web', label: 'WEB & FRAMEWORKS', icon: <Globe size={13} /> },
    { id: 'lang', label: 'LANGUAGES', icon: <Terminal size={13} /> },
    { id: 'devops', label: 'DEVOPS & CLOUD', icon: <Server size={13} /> },
  ];

  return (
    <section id="tools" className="relative min-h-screen py-24 px-6 md:px-12 lg:px-24 bg-[#040d1a] text-[#f0f0f0] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#f2e529]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#e10600]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#334155] pb-6 mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f2e529]/10 border border-[#f2e529] text-[#f2e529] font-mono text-xs tracking-widest uppercase mb-3">
              <Cpu size={14} />
              <span>PIT-WALL SPECIFICATIONS // HARDWARE & SOFTWARE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
              TECH <span className="text-[#f2e529]">ARSENAL</span>
            </h2>
            <p className="text-[#8899aa] font-mono text-sm mt-2 max-w-xl">
              Languages, neural architectures, frameworks, and deployment engines powering intelligent systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 font-mono text-xs transition-all uppercase tracking-wider font-bold ${
                  filter === opt.id
                    ? 'bg-[#f2e529] text-[#040d1a] shadow-[0_0_15px_rgba(242,229,41,0.3)]'
                    : 'bg-[#0a1628] text-[#8899aa] border border-[#334155] hover:border-[#f2e529] hover:text-[#f0f0f0]'
                }`}
                style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}
              >
                {opt.icon}
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tools Telemetry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredTools.map((tool: ToolItem) => (
              <motion.div
                layout
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0a1628] border border-[#334155] hover:border-[#f2e529] p-6 transition-all duration-300 relative group flex flex-col justify-between"
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))' }}
              >
                <div>
                  {/* Top Bar with Telemetry Code */}
                  <div className="flex items-center justify-between border-b border-[#334155]/60 pb-3 mb-3">
                    <span className="font-mono text-xs text-[#f2e529] font-bold tracking-widest bg-[#040d1a] px-2 py-0.5 border border-[#334155]">
                      {tool.telemetryCode}
                    </span>
                    <span className="text-[10px] font-mono text-[#8899aa] uppercase tracking-wider">
                      SPEC // {tool.category}
                    </span>
                  </div>

                  {/* Tool Title & Role */}
                  <h3 className="text-xl font-bold text-[#f0f0f0] group-hover:text-[#f2e529] transition-colors mb-1">
                    {tool.name}
                  </h3>
                  <div className="text-xs font-mono text-[#f2e529]/80 mb-3">
                    {tool.role}
                  </div>

                  {/* Description */}
                  <p className="text-sm font-sans text-[#cbd5e1] leading-relaxed mb-6 font-light">
                    {tool.description}
                  </p>
                </div>

                {/* Proficiency Gauge */}
                <div className="pt-3 border-t border-[#334155]/40">
                  <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                    <span className="text-[#8899aa]">SYSTEM CALIBRATION</span>
                    <span className="text-[#f2e529] font-bold">{tool.proficiency}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#040d1a] border border-[#334155] overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#e10600] to-[#f2e529] transition-all duration-500"
                      style={{ width: `${tool.proficiency}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
