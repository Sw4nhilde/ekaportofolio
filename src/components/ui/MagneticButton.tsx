'use client';

import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';
import { playSwitchClick } from '@/lib/audio/soundEffects';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
}

export default function MagneticButton({
  children,
  variant = 'primary',
  className = '',
  onClick,
  asAnchor = false,
  href,
  target,
  rel,
  download,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);

  // Spring physics for button chassis
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.1 });

  // Spring physics for parallax text (moves faster than chassis)
  const textX = useSpring(0, { stiffness: 220, damping: 12, mass: 0.1 });
  const textY = useSpring(0, { stiffness: 220, damping: 12, mass: 0.1 });

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Proximity dampening (within ~40px of boundaries)
    const pullFactor = 0.35;
    const textPullFactor = 0.55;

    x.set(distanceX * pullFactor);
    y.set(distanceY * pullFactor);
    textX.set(distanceX * textPullFactor);
    textY.set(distanceY * textPullFactor);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    playSwitchClick();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    textX.set(0);
    textY.set(0);
  };

  // Red Bull Racing variant themes
  const variantStyles = {
    primary:
      'bg-[#f2e529] text-[#030914] hover:bg-white hover:text-[#030914] border border-[#f2e529] shadow-[0_0_15px_rgba(242,229,41,0.25)]',
    secondary:
      'bg-[#081426] text-[#f0f0f0] border border-[#334155] hover:border-[#f2e529] hover:text-[#f2e529] shadow-[0_0_15px_rgba(0,0,0,0.5)]',
    danger:
      'bg-[#e10600] text-[#f0f0f0] hover:bg-[#ff1a1a] border border-[#e10600] shadow-[0_0_15px_rgba(225,6,0,0.3)]',
  };

  const baseClasses = `relative inline-flex items-center justify-center font-mono font-bold uppercase tracking-wider text-xs md:text-sm px-6 py-3.5 transition-colors duration-200 select-none ${variantStyles[variant]} ${className}`;

  const chamferClip = {
    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
  };

  const content = (
    <motion.div
      style={{ x: textX, y: textY }}
      className="relative z-10 flex items-center gap-2 pointer-events-none"
    >
      {children}
    </motion.div>
  );

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className="inline-block relative"
    >
      {asAnchor && href ? (
        <a
          href={href}
          target={target}
          rel={rel}
          download={download}
          className={baseClasses}
          style={chamferClip}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {content}
        </a>
      ) : (
        <button
          className={baseClasses}
          style={chamferClip}
          onClick={onClick}
          {...props}
        >
          {content}
        </button>
      )}

      {/* Subtle telemetry corner glow when hovered */}
      {isHovered && (
        <span className="absolute -inset-0.5 bg-gradient-to-r from-[#f2e529] via-[#e10600] to-[#b138dd] opacity-30 blur-sm pointer-events-none -z-10 rounded-sm" />
      )}
    </motion.div>
  );
}
