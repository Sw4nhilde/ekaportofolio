'use client';

import { ReactNode, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function AnimationProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return <>{children}</>;
}
