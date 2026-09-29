'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData, CertificationItem } from '@/data/certifications';
import { Award, ShieldCheck, FileCheck, ExternalLink, FileText } from 'lucide-react';
import { playSwitchClick } from '@/lib/audio/soundEffects';

export default function CertificationsSection() {
  return (
    <section id="certifications" className="relative min-h-screen py-16 sm:py-24 px-4 sm:px-8 md:px-12 lg:px-24 bg-[#040d1a] text-[#f0f0f0] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e10600]/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="border-b-2 border-[#334155] pb-6 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f2e529]/10 border border-[#f2e529] text-[#f2e529] font-mono text-xs tracking-widest uppercase mb-3">
            <Award size={14} />
            <span>VERIFIED CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black italic tracking-tighter uppercase">
            ACCREDITATIONS & <span className="text-[#f2e529]">LICENCES</span>
          </h2>
          <p className="text-[#8899aa] font-mono text-xs sm:text-sm mt-2 max-w-xl font-light">
            Verified technical competencies, deep learning certifications, and industry engineering credentials. Click any card to inspect the official PDF certificate.
          </p>
        </div>

        {/* Licence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {certificationsData.map((cert: CertificationItem, idx: number) => (
            <motion.a
              key={cert.id}
              href={cert.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playSwitchClick}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 4) * 0.08, duration: 0.4 }}
              className="bg-[#0a1628] border-2 border-[#334155] hover:border-[#f2e529] p-5 sm:p-7 transition-all duration-300 relative group flex flex-col justify-between hover:shadow-[0_0_30px_rgba(242,229,41,0.18)] cursor-pointer"
              style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
              title={`Click to view certificate for ${cert.title}`}
            >
              {/* Corner Watermark */}
              <div className="absolute top-4 right-4 text-[#334155]/25 font-black font-mono text-5xl select-none pointer-events-none group-hover:text-[#f2e529]/15 transition-colors">
                #0{idx + 1}
              </div>

              <div>
                {/* Header Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#334155]/60 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="text-[#00ff00]" size={16} />
                    <span className="font-mono text-[11px] font-bold text-[#00ff00] bg-[#00ff00]/10 border border-[#00ff00]/30 px-2 py-0.5 tracking-wider uppercase">
                      {cert.status}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-[#8899aa] tracking-widest">
                    ID: {cert.serialNumber}
                  </span>
                </div>

                {/* Certificate Visual Thumbnail Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#030914] border border-[#334155] group-hover:border-[#f2e529]/70 transition-all duration-300 mb-4 rounded-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.thumbnailUrl}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Glass Overlay with Telemetry Trigger */}
                  <div className="absolute inset-0 bg-[#030914]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
                    <div className="bg-[#f2e529] text-[#030914] font-mono text-xs font-black tracking-wider uppercase px-4 py-2 flex items-center gap-2 shadow-[0_0_15px_rgba(242,229,41,0.5)]"
                         style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}>
                      <FileText size={14} />
                      <span>VIEW OFFICIAL PDF</span>
                      <ExternalLink size={13} />
                    </div>
                  </div>
                </div>

                {/* Issuer & Year */}
                <div className="text-xs font-mono text-[#f2e529] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <FileCheck size={14} />
                  <span>{cert.issuer} • {cert.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#f0f0f0] group-hover:text-[#f2e529] transition-colors mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm font-sans text-[#cbd5e1] leading-relaxed mb-4 sm:mb-5 font-light">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Footer: Skills Tags & Action Prompt */}
              <div className="pt-3 sm:pt-4 border-t border-[#334155]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono text-[#cbd5e1] bg-[#040d1a] border border-[#334155] px-2 py-0.5 group-hover:border-[#f2e529]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#8899aa] group-hover:text-[#f2e529] transition-colors shrink-0">
                  <span>PDF TELEMETRY</span>
                  <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
