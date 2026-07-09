'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../ui/Container';

interface Pillar {
  id: string;
  title: string;
  hook: string;
  href: string;
}

const pillars: Pillar[] = [
  {
    id: 'singing',
    title: 'Live Singing',
    hook: 'Soulful classical melodies and high-energy modern tunes curated for bespoke events.',
    href: '/singing',
  },
  {
    id: 'catering',
    title: 'Boutique Catering',
    hook: 'Ultra-premium culinary experiences crafting custom menus for elite gatherings.',
    href: '/catering',
  },
  {
    id: 'consulting',
    title: 'Restaurant Consulting',
    hook: 'Operational blueprints, menu engineering, and branding for world-class hospitality.',
    href: '/consulting',
  },
  {
    id: 'kabab-culture',
    title: 'Kabab Culture',
    hook: 'A celebration of traditional open-fire clay oven cooking and signature marinades.',
    href: '/kabab-culture',
  },
  {
    id: 'media',
    title: 'TV & Media',
    hook: 'Presenting rich cultural gastronomy and live culinary arts on global broadcast channels.',
    href: '/tv',
  },
];

export default function PillarGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      rowsRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-onyx py-20 md:py-32 border-b border-alabaster/10 scroll-mt-20 overflow-hidden">
      {/* Subtle halftone/noise overlay to match hero */}
      <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="text-left mb-20 max-w-2xl">
          <span className="font-body text-[10px] tracking-widest uppercase text-[#BFFF00] block mb-4 font-bold">
            Core Expertise
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-alabaster uppercase leading-tight tracking-wide">
            WHAT KUNAL DOES
          </h2>
        </div>

        {/* Setlist/Menu-Index Rows */}
        <div className="flex flex-col w-full border-t border-alabaster/10">
          {pillars.map((pillar, idx) => {
            const num = `0${idx + 1}`;
            const isHighlight = pillar.id === 'singing' || pillar.id === 'consulting';

            return (
              <div
                key={pillar.id}
                ref={(el) => { rowsRef.current[idx] = el; }}
                className="w-full border-b border-alabaster/10"
              >
                <Link
                  href={pillar.href}
                  className="group flex flex-col md:flex-row md:items-center py-8 px-4 md:py-10 transition-all duration-500 hover:bg-alabaster/5 -mx-2 rounded-sm"
                >
                  {/* Row Number & Title */}
                  <div className="flex items-center gap-8 md:min-w-[360px]">
                    <span className="font-display text-2xl md:text-3xl font-light text-alabaster/20 group-hover:text-[#BFFF00] transition-colors duration-500">
                      {num}
                    </span>
                    <h3 className={`font-display text-2xl md:text-3xl font-medium transition-colors duration-500 ${
                      isHighlight ? 'text-[#BFFF00]' : 'text-alabaster/80 group-hover:text-alabaster'
                    }`}>
                      {pillar.title}
                    </h3>
                  </div>

                  {/* Hook description, leader line, tag */}
                  <div className="flex flex-grow items-center gap-6 mt-4 md:mt-0 overflow-hidden">
                    <p className="font-body text-sm text-alabaster/60 group-hover:text-alabaster/90 transition-colors duration-500 whitespace-nowrap overflow-hidden text-ellipsis max-w-md">
                      {pillar.hook}
                    </p>

                    {/* Dotted leader line */}
                    <div className="hidden md:block flex-grow border-b border-solid border-alabaster/10 group-hover:border-[#BFFF00]/40 transition-colors duration-500 h-px min-w-[20px]" />

                    {/* Small tag */}
                    {isHighlight && (
                      <span className="inline-block text-[9px] uppercase tracking-[0.2em] font-body font-bold text-[#BFFF00] border border-[#BFFF00]/40 px-3 py-1 rounded-sm flex-shrink-0 bg-[#BFFF00]/5">
                        Most booked
                      </span>
                    )}
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex items-center justify-end mt-4 md:mt-0 md:pl-8">
                    <span className="text-alabaster/20 group-hover:text-[#BFFF00] group-hover:translate-x-2 transition-all duration-500 font-body text-lg">
                      &rarr;
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
