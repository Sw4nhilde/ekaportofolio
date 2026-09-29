'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences, ExperienceItem } from '@/data/experience';
import { Briefcase, GraduationCap, Flag, CheckCircle2, Clock } from 'lucide-react';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const filteredItems = experiences.filter((item) => item.type === activeTab);

  return (
    <section id="experience" className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#040d1a] text-[#f0f0f0] overflow-hidden">
      {/* Background Track Decal / Ambience */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#e10600]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-[#f2e529]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#334155] pb-6 mb-10 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f2e529]/10 border border-[#f2e529] text-[#f2e529] font-mono text-xs tracking-widest uppercase mb-3">
              <Flag size={14} />
              <span>CIRCUIT LOG // SECTOR TIMING</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black italic tracking-tighter uppercase">
              TRACK <span className="text-[#f2e529]">RECORD</span>
            </h2>
            <p className="text-[#8899aa] font-mono text-xs sm:text-sm mt-2 max-w-xl font-light">
              Career stints, team engineering operations, and academic telemetry milestones.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="w-full sm:w-auto flex items-center justify-between bg-[#0a1628] border border-[#334155] p-1 font-mono text-[11px] sm:text-xs">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex-1 sm:flex-none justify-center flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 transition-all uppercase tracking-wider font-bold ${
                activeTab === 'experience'
                  ? 'bg-[#f2e529] text-[#040d1a] shadow-[0_0_15px_rgba(242,229,41,0.3)]'
                  : 'text-[#8899aa] hover:text-[#f0f0f0]'
              }`}
            >
              <Briefcase size={14} />
              <span>EXPERIENCE ({experiences.filter(e => e.type === 'experience').length})</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 sm:flex-none justify-center flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 transition-all uppercase tracking-wider font-bold ${
                activeTab === 'education'
                  ? 'bg-[#f2e529] text-[#040d1a] shadow-[0_0_15px_rgba(242,229,41,0.3)]'
                  : 'text-[#8899aa] hover:text-[#f0f0f0]'
              }`}
            >
              <GraduationCap size={14} />
              <span>EDUCATION ({experiences.filter(e => e.type === 'education').length})</span>
            </button>
          </div>
        </div>

        {/* Timeline Circuit Grid */}
        <div className="relative">
          {/* Vertical Pit-Lane Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#f2e529] via-[#e10600] to-transparent opacity-40" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {filteredItems.map((item: ExperienceItem, idx: number) => {
                const isActive = item.telemetry.status === 'ACTIVE' || item.telemetry.status === 'IN_PROGRESS';
                return (
                  <div
                    key={item.id}
                    className="relative flex flex-col md:flex-row items-start gap-6 group"
                  >
                    {/* Lap Marker Indicator */}
                    <div className="hidden md:flex flex-col items-center z-10">
                      <div
                        className={`w-16 h-16 flex flex-col items-center justify-center font-mono border-2 transition-all duration-300 ${
                          isActive
                            ? 'border-[#f2e529] bg-[#0a1628] text-[#f2e529] shadow-[0_0_20px_rgba(242,229,41,0.3)]'
                            : 'border-[#334155] bg-[#071428] text-[#8899aa] group-hover:border-[#f2e529]'
                        }`}
                        style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                      >
                        <span className="text-[10px] tracking-tighter uppercase font-bold">LAP</span>
                        <span className="text-lg font-black leading-none">0{idx + 1}</span>
                      </div>
                    </div>

                    {/* Stint Card */}
                    <div
                      className="flex-1 w-full bg-[#0a1628] border border-[#334155] hover:border-[#f2e529] p-5 sm:p-6 md:p-8 transition-all duration-300 relative overflow-hidden group-hover:shadow-[0_10px_30px_rgba(4,13,26,0.8)]"
                      style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
                    >
                      {/* Top Bar Details */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#334155]/60 pb-3 sm:pb-4 mb-4">
                        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#040d1a] border border-[#334155] font-mono text-[11px] sm:text-xs text-[#f2e529] font-bold tracking-widest">
                            {item.telemetry.stint}
                          </span>
                          <span className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-mono text-[#8899aa]">
                            <Clock size={12} />
                            {item.period}
                          </span>
                        </div>

                        {isActive ? (
                          <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-bold text-[#00ff00] bg-[#00ff00]/10 border border-[#00ff00]/30 px-2 sm:px-2.5 py-0.5 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff00] animate-ping inline-block" />
                            CURRENT STINT
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-[#8899aa] bg-white/5 border border-white/10 px-2 py-0.5 uppercase tracking-wider">
                            <CheckCircle2 size={12} />
                            COMPLETED
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#f0f0f0] tracking-wide mb-1 group-hover:text-[#f2e529] transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-[#f2e529] font-mono text-sm mb-4">
                        {item.organization}
                      </p>
                      <p className="text-[#cbd5e1] font-sans text-sm md:text-base leading-relaxed mb-6 font-light">
                        {item.description}
                      </p>

                      {/* Engineering Tags */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-[#334155]/40">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono text-[#8899aa] bg-[#040d1a] border border-[#334155] px-2.5 py-1 hover:text-[#f0f0f0] transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
