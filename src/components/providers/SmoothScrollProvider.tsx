'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      autoRaf: true, // In newer lenis versions this handles requestAnimationFrame automatically
    });

    // Connect GSAP ScrollTrigger to Lenis scroll event
    lenis.on('scroll', ScrollTrigger.update);

    setLenisInstance(lenis);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Force scroll to top on route change
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenisInstance]);

  return <>{children}</>;
}
