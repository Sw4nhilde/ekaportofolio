'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Download, Menu, X } from 'lucide-react';
import { playSwitchClick, playF1RadioNotification } from '@/lib/audio/soundEffects';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'GARAGE', href: '#garage' },
  { label: 'TRACK RECORD', href: '#experience' },
  { label: 'ARSENAL', href: '#tools' },
  { label: 'LICENCES', href: '#certifications' },
  { label: 'PIT RADIO', href: '#pit-radio' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030914]/95 backdrop-blur-md border-b border-[#334155] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          onMouseEnter={playSwitchClick}
          className="flex items-center space-x-2 group"
        >
          <span className="text-[#f2e529] font-mono text-xl font-black tracking-tighter group-hover:text-white transition-colors">
            EKA
          </span>
          <span className="text-[#e10600] font-mono text-sm font-bold">#01</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex space-x-6 xl:space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                if (item.label === 'PIT RADIO') {
                  playF1RadioNotification();
                }
              }}
              onMouseEnter={playSwitchClick}
              className="text-[#cbd5e1] font-mono text-xs uppercase tracking-widest hover:text-[#f2e529] transition-colors relative py-1 group"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f2e529] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Action Controls & Socials */}
        <div className="hidden sm:flex items-center space-x-4">
          <a
            href="https://github.com/Sw4nhilde"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playSwitchClick}
            className="text-[#8899aa] hover:text-[#f2e529] transition-colors p-1"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-eka-mandiri-sujanto/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playSwitchClick}
            className="text-[#8899aa] hover:text-[#f2e529] transition-colors p-1"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>

          {/* CV Button */}
          <a
            href="/files/CV%20MUHAMMAD%20EKA%20MANDIRI%20SUJANTO_OPTIMIZED.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playSwitchClick}
            className="flex items-center space-x-1.5 bg-[#e10600] hover:bg-[#ff1a1a] text-[#f0f0f0] px-3.5 py-1.5 font-mono text-xs uppercase font-bold tracking-wider transition-colors shadow-[0_0_12px_rgba(225,6,0,0.3)]"
            style={{
              clipPath:
                'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
            }}
          >
            <Download size={13} />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center space-x-3">
          <a
            href="/files/CV%20MUHAMMAD%20EKA%20MANDIRI%20SUJANTO_OPTIMIZED.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden flex items-center space-x-1 bg-[#e10600] text-[#f0f0f0] px-2.5 py-1 font-mono text-[11px] font-bold"
          >
            <Download size={11} />
            <span>CV</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#f2e529] p-1"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#081426] border-b border-[#334155] px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    if (item.label === 'PIT RADIO') {
                      playF1RadioNotification();
                    }
                    setMobileMenuOpen(false);
                  }}
                  className="text-[#f0f0f0] font-mono text-sm uppercase tracking-widest hover:text-[#f2e529] transition-colors py-1 border-b border-[#334155]/40"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-6 pt-3">
                <a
                  href="https://github.com/Sw4nhilde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8899aa] hover:text-[#f2e529] flex items-center gap-2 text-xs font-mono"
                >
                  <Github size={16} />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-eka-mandiri-sujanto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8899aa] hover:text-[#f2e529] flex items-center gap-2 text-xs font-mono"
                >
                  <Linkedin size={16} />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
