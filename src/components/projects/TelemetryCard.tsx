'use client';

import React from 'react';
import { Project } from '@/data/projects';
import { playSwitchClick } from '@/lib/audio/soundEffects';

export type { Project };

interface TelemetryCardProps {
  project: Project;
}

export default function TelemetryCard({ project }: TelemetryCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'P1': return 'bg-[#00ff00] text-black font-bold';
      case 'P2': return 'bg-[#f2e529] text-black font-bold';
      case 'P3': return 'bg-[#e10600] text-white font-bold';
      case 'WIP': return 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40 font-bold';
      default: return 'bg-gray-500 text-white font-bold';
    }
  };

  const getDeltaColor = (status: string) => {
    switch (status) {
      case 'P1': return 'text-[#00ff00]';
      case 'P2': return 'text-[#f2e529]';
      case 'P3': return 'text-[#e10600]';
      case 'WIP': return 'text-[#00f0ff]';
      default: return 'text-gray-400';
    }
  };

  return (
    <div 
      onMouseEnter={playSwitchClick}
      className="group relative bg-[#0a1628] border border-[#f2e529]/15 p-6 transition-all duration-300 hover:border-[#f2e529] hover:shadow-[0_0_20px_rgba(242,229,41,0.18)] flex flex-col h-full"
      style={{
        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))'
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="font-mono text-xs text-[#8899aa] tracking-widest uppercase">
          {project.sector}
        </span>
        <span className={`font-mono text-xs px-2.5 py-0.5 tracking-wider uppercase ${getStatusColor(project.status)}`}>
          {project.status === 'WIP' ? 'WIP // IN DEV' : project.status}
        </span>
      </div>

      <div className="mb-2 flex justify-between items-end">
        <h3 className="text-2xl font-bold text-[#f0f0f0] group-hover:text-[#f2e529] transition-colors tracking-tight">
          {project.name}
        </h3>
        <span className={`font-mono text-sm font-bold tracking-wider ${getDeltaColor(project.status)}`}>
          {project.delta}
        </span>
      </div>

      <p className="text-[#8899aa] text-sm mb-6 flex-grow leading-relaxed font-light">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span 
            key={t} 
            className="text-xs font-mono text-[#f0f0f0] border border-[#8899aa]/30 px-2 py-1 rounded-sm bg-[#040d1a]/60 group-hover:border-[#f2e529]/40 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playSwitchClick}
            className="flex-1 bg-[#e10600] text-white text-xs font-mono font-bold text-center py-2 px-3 transition-colors hover:bg-white hover:text-[#e10600]"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
            }}
          >
            LIVE TELEMETRY
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playSwitchClick}
            className="flex-1 bg-transparent border border-[#8899aa]/50 text-[#f0f0f0] text-xs font-mono font-bold text-center py-2 px-3 transition-colors hover:border-[#f2e529] hover:text-[#f2e529]"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
            }}
          >
            SOURCE CODE
          </a>
        )}
        {!project.liveUrl && !project.codeUrl && (
          <div
            className="w-full bg-[#030914] border border-[#00f0ff]/30 text-[#00f0ff] text-xs font-mono py-2.5 px-3 flex items-center justify-center gap-2"
            style={{
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))'
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
            <span className="font-bold tracking-wider uppercase">ACTIVE TELEMETRY DEVELOPMENT // WIP</span>
          </div>
        )}
      </div>
    </div>
  );
}
