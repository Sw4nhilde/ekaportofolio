'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TelemetryCard from './TelemetryCard';
import { projects } from '@/data/projects';

export default function TelemetryProjects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gridRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            y: 60,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="garage" 
      ref={sectionRef} 
      className="bg-[#040d1a] py-24 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-[#8899aa]/10 border border-[#8899aa]/30 text-[#8899aa] font-mono text-xs font-bold tracking-widest mb-4">
            SECTOR DATA
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#f0f0f0] mb-4 uppercase tracking-tighter">
            THE GARAGE
          </h2>
          <p className="text-[#8899aa] max-w-2xl text-lg border-l-2 border-[#e10600] pl-4">
            Project telemetry and performance data from the development pit wall.
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <div key={index} className="h-full">
              <TelemetryCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
