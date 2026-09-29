'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import dynamic from 'next/dynamic';
import MagneticButton from '@/components/ui/MagneticButton';
import TachometerCounter from '@/components/telemetry/TachometerCounter';
import CopyTarget from '@/components/telemetry/CopyTarget';
import { Download, Flag, Terminal } from 'lucide-react';

// Dynamically import canvas to prevent hydration issues
const HeroCanvas = dynamic(() => import('./HeroCanvas'), { ssr: false });

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!leftContentRef.current) return;

      const elements = leftContentRef.current.children;

      gsap.from(elements, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100dvh] w-full bg-[#030914] text-[#f0f0f0] overflow-hidden flex flex-col md:flex-row items-center pt-24 pb-16 md:py-0 px-4 sm:px-8 md:px-12 lg:px-24"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#e10600] rounded-full blur-[160px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f2e529] rounded-full blur-[160px] opacity-10 pointer-events-none" />

      {/* Left Content (54%) */}
      <div
        ref={leftContentRef}
        className="w-full md:w-[54%] z-10 flex flex-col justify-center space-y-5 md:space-y-6 md:pr-8"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#f2e529] bg-[#f2e529]/10 text-[#f2e529] font-mono text-xs md:text-sm tracking-widest w-max mb-1">
          <Terminal size={13} />
          <span>AI SPECIALIST</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.95] md:leading-[0.9] tracking-tight">
          <span className="block">MUHAMMAD</span>
          <span className="block text-[#f2e529]">EKA MANDIRI</span>
          <span className="block">SUJANTO</span>
        </h1>

        <p className="text-[#8899aa] text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed mt-2">
          Informatics Engineering @ UIN Sunan Gunung Djati Bandung. Building intelligent systems at the intersection of AI, ML, NLP, and full-stack development.
        </p>

        {/* Tachometer RPM Stat Counters */}
        <div className="flex flex-wrap gap-2.5 sm:gap-4 mt-4 sm:mt-6 w-full max-w-lg">
          <TachometerCounter targetNumber={3} label="YEARS CODING" revLimit={9500} delay={0.2} />
          <TachometerCounter targetNumber={10} label="PROJECTS DEPLOYED" revLimit={13500} delay={0.35} />
          <TachometerCounter targetNumber={8} label="CERTIFICATIONS" revLimit={15000} delay={0.5} />
        </div>

        {/* Magnetic CTAs */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-6 pt-2 w-full sm:w-auto">
          <MagneticButton asAnchor href="#garage" variant="primary" className="w-full sm:w-auto text-center justify-center">
            <Flag size={15} />
            <span>EXPLORE GARAGE</span>
          </MagneticButton>

          <MagneticButton asAnchor href="/files/CV%20MUHAMMAD%20EKA%20MANDIRI%20SUJANTO_OPTIMIZED.pdf" target="_blank" rel="noopener noreferrer" variant="secondary" className="w-full sm:w-auto text-center justify-center">
            <Download size={15} />
            <span>DOWNLOAD CV</span>
          </MagneticButton>
        </div>

        {/* One-Click Copy Pit Wall Email */}
        <div className="pt-2 w-full max-w-md">
          <CopyTarget
            textToCopy="ekasoe4009@gmail.com"
            displayValue="ekasoe4009@gmail.com"
            label="PIT WALL DIRECT RADIO"
          />
        </div>
      </div>

      {/* Right Content - Borderless 3D Driver Viewport */}
      <div className="w-full md:w-[46%] h-[55vh] md:h-screen absolute md:relative right-0 bottom-0 md:bottom-auto opacity-35 md:opacity-100 pointer-events-none md:pointer-events-auto z-0 flex items-center justify-center">
        <HeroCanvas />
      </div>
    </section>
  );
}
