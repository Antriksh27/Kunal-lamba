'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../ui/Container';

interface Chapter {
  num: string;
  label: string;
  headline: string;
  detail: string;
  gradientClass: string;
}

const chapters: Chapter[] = [
  {
    num: '01',
    label: 'Delhi',
    headline: 'Where it started.',
    detail: 'Born into a restaurateur family in Delhi, absorbing the heritage of regional Indian cuisine and classic culinary hospitality.',
    gradientClass: 'from-[#BFFF00]/5 via-onyx to-black',
  },
  {
    num: '02',
    label: 'London, 2006',
    headline: 'The Gaylord.',
    detail: "Ran the family's legacy restaurant, established in 1966, refining operations in one of the world's most competitive culinary cities.",
    gradientClass: 'from-black via-zinc-950 to-[#BFFF00]/5',
  },
  {
    num: '03',
    label: 'New York, Devi',
    headline: "America's first Michelin star for Indian food.",
    detail: 'Served as Culinary Director/GM at the legendary restaurant that earned this landmark achievement, elevating Indian cuisine on the global stage.',
    gradientClass: 'from-[#BFFF00]/10 via-onyx to-black',
  },
  {
    num: '04',
    label: 'Kabab Culture, present day',
    headline: 'His own restaurant, his own name on the door.',
    detail: 'Directing operational blueprint and menu design at Kabab Culture in Franklin Township, NJ, bringing authentic live clay oven cooking to life.',
    gradientClass: 'from-black via-onyx to-[#BFFF00]/10',
  },
];

export default function Chapters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline for crossfading panels
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    // Panel 1 is visible by default.
    // Panel 2, 3, and 4 fade in and their contents transition upwards slightly.
    chapters.forEach((_, idx) => {
      if (idx === 0) return;

      const incomingPanel = panelsRef.current[idx];
      const incomingContent = contentRefs.current[idx];
      const outgoingPanel = panelsRef.current[idx - 1];

      if (outgoingPanel) {
        tl.to(outgoingPanel, {
          autoAlpha: 0,
          duration: 0.4,
          ease: 'power2.inOut',
        });
      }

      if (incomingPanel) {
        tl.to(incomingPanel, {
          autoAlpha: 1,
          duration: 0.4,
          ease: 'power2.inOut',
        }, '-=0.1'); // brief crossfade window
      }

      if (incomingContent) {
        tl.fromTo(
          incomingContent,
          { y: 40, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.4, ease: 'power2.out' },
          '<'
        );
      }
      
      // Pause slightly between chapters for readability during scroll
      tl.to({}, { duration: 0.6 });
    });
  }, { scope: containerRef });

  return (
    <div id="about" ref={containerRef} className="relative w-full h-[400vh] bg-onyx scroll-mt-20">
      {/* Pinned Scroll panels container via CSS sticky */}
      <div ref={innerRef} className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {chapters.map((chapter, idx) => (
          <div
            key={chapter.num}
            ref={(el) => { panelsRef.current[idx] = el; }}
            className={`absolute inset-0 w-full h-full flex items-center bg-gradient-to-tr ${chapter.gradientClass} transition-colors duration-500`}
            style={{
              zIndex: (idx + 1) * 10,
              opacity: idx === 0 ? 1 : 0,
              visibility: idx === 0 ? 'visible' : 'hidden',
              pointerEvents: idx === 0 ? 'auto' : 'none',
            }}
          >
            {/* Visual Panel Placeholder Grid & Noise */}
            <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(circle_at_bottom_right,rgba(191,255,0,0.05),transparent_70%)] mix-blend-screen" />
            <div className="absolute inset-0 bg-onyx/30 mix-blend-multiply pointer-events-none" />

            <Container className="relative z-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left side text column */}
                <div 
                  ref={(el) => { contentRefs.current[idx] = el; }}
                  className="lg:col-span-8 space-y-6 text-left max-w-3xl"
                  style={{
                    opacity: idx === 0 ? 1 : 0,
                    visibility: idx === 0 ? 'visible' : 'hidden',
                  }}
                >
                  <div className="mb-8">
                    {/* Script font chapter label - moved into document flow (no overlay) */}
                    <span 
                      className="block text-[4rem] md:text-[5rem] text-[#BFFF00]/50 whitespace-nowrap -rotate-2"
                      style={{ fontFamily: 'var(--font-script), cursive' }}
                    >
                      Chapter {chapter.num}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <span className="font-body text-xs md:text-sm tracking-[0.2em] text-[#BFFF00] uppercase block font-bold">
                      {chapter.label}
                    </span>
                    <h3 className="font-display text-[28px] sm:text-[38px] md:text-[48px] font-black italic text-alabaster leading-tight">
                      {chapter.headline}
                    </h3>
                    <p className="font-body text-alabaster/70 text-sm md:text-base leading-relaxed max-w-xl">
                      {chapter.detail}
                    </p>
                  </div>

                  {idx === chapters.length - 1 && (
                    <div className="pt-4 pointer-events-auto">
                      <Link 
                        href="/about" 
                        className="inline-flex items-center gap-1.5 font-body text-xs font-bold uppercase tracking-wider text-[#BFFF00] hover:text-alabaster transition-colors"
                      >
                        Read the full story &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
}
