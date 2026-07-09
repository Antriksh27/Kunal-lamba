'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TimelineNode {
  id: number;
  year: string;
  location: string;
  title: string;
  description: string;
  bgGrad: string;
}

const timelineData: TimelineNode[] = [
  { id: 1, year: 'Early Years', location: 'Delhi, India', title: 'Restaurateur Heritage', description: 'Born and raised in a family of passionate food operators and music enthusiasts.', bgGrad: 'from-saffron/20 to-ivory' },
  { id: 2, year: 'Academic Foundation', location: 'WGSHA, Manipal', title: 'Hospitality Management', description: 'Earned a degree in hospitality, graduating ranked in the top-10 of the cohort.', bgGrad: 'from-chili/20 to-ivory' },
  { id: 3, year: 'Professional Launch', location: 'ITC Maurya, New Delhi', title: 'Luxury Hotel Debut', description: 'First major operational role at this legendary Luxury Collection property.', bgGrad: 'from-saffron/20 to-ivory' },
  { id: 4, year: '2006', location: 'The Gaylord, London', title: 'Heritage Operations', description: 'Managed the prestigious family legacy restaurant established in 1966.', bgGrad: 'from-chili/20 to-ivory' },
  { id: 5, year: '2008', location: 'Doubletree Metropolitan, NYC', title: 'Food & Beverage Manager', description: 'Crossed the Atlantic to lead operational teams in midtown Manhattan.', bgGrad: 'from-saffron/20 to-ivory' },
  { id: 6, year: '2010', location: 'Devi, NYC', title: 'Culinary Director & GM', description: 'Managed operations for the first Michelin-starred Indian restaurant in the US.', bgGrad: 'from-chili/20 to-ivory' },
  { id: 7, year: '2014', location: 'The Mark by Jean Georges', title: 'Elite F&B Operations', description: 'Directed front-of-house operations alongside the world-renowned chef group.', bgGrad: 'from-saffron/20 to-ivory' },
  { id: 8, year: 'Present Day', location: 'Kabab Culture, NJ', title: 'Concept Owner & Builder', description: 'Co-founded this premium clay oven dining space in Franklin Township.', bgGrad: 'from-chili/20 to-ivory' },
];

export default function CareerTimeline() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const setupTimelineTrigger = () => {
      if (!scrollRef.current || !triggerRef.current) return;

      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      const scrollDistance = scrollWidth - clientWidth;

      if (scrollDistance <= 0) return;

      // Pin the section and scroll cards horizontally
      gsap.to(scrollRef.current, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 0.5,
          start: 'top top',
          end: () => `+=${scrollDistance}`,
          invalidateOnRefresh: true,
        }
      });

      // Animate progress line growth
      if (progressLineRef.current) {
        gsap.fromTo(progressLineRef.current, 
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: 'none',
            transformOrigin: 'left center',
            scrollTrigger: {
              trigger: triggerRef.current,
              scrub: 0.5,
              start: 'top top',
              end: () => `+=${scrollDistance}`,
            }
          }
        );
      }
    };

    if (mediaQuery.matches) {
      setupTimelineTrigger();
    }

    const handleResize = () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (mediaQuery.matches) {
        setupTimelineTrigger();
      } else {
        if (scrollRef.current) {
          gsap.set(scrollRef.current, { x: 0 });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={triggerRef} className="w-full bg-ivory relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-body text-saffron uppercase tracking-widest font-semibold mb-3 block">
            The Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black italic tracking-wide text-ink uppercase">
            Career Timeline
          </h2>
        </div>

        {/* Central timeline line - visible on desktop */}
        <div className="hidden lg:block absolute left-0 right-0 top-[52%] h-0.5 bg-ink/10 z-0">
          {/* Animated fill line */}
          <div ref={progressLineRef} className="h-full bg-saffron origin-left w-full scale-x-0" />
        </div>

        {/* Timeline Horizontal Wrapper */}
        <div className="lg:overflow-hidden -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 relative z-10">
          <div
            ref={scrollRef}
            className="flex gap-8 lg:gap-16 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none pb-6 lg:pb-0"
          >
            {timelineData.map((node) => (
              <div
                key={node.id}
                className="flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[320px] snap-center snap-always flex flex-col items-center"
              >
                {/* Visual Connector Dot */}
                <div className="hidden lg:flex w-6 h-6 rounded-full border border-saffron bg-ivory items-center justify-center mb-12 relative z-20 group">
                  <div className="w-2.5 h-2.5 rounded-full bg-saffron scale-0 group-hover:scale-100 transition-transform duration-300" />
                </div>

                {/* Timeline Card */}
                <div className="w-full p-6 rounded border border-ink/10 bg-ink/[0.02] relative overflow-hidden group hover:border-saffron/50 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-b ${node.bgGrad} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                  
                  {/* Portrait/Photo Placeholder */}
                  <div className="aspect-video w-full rounded border border-ink/10 bg-bone/30 mb-5 flex items-center justify-center">
                    <span className="font-body text-[10px] text-ink/30 uppercase tracking-widest">[Placeholder Photo]</span>
                  </div>

                  <span className="font-body text-xs font-semibold text-saffron uppercase tracking-wider block mb-1">
                    {node.year}
                  </span>
                  <span className="font-body text-[10px] text-ink/40 uppercase tracking-wider block mb-3">
                    {node.location}
                  </span>
                  
                  <h3 className="font-display text-lg font-bold text-ink uppercase mb-2 group-hover:text-saffron transition-colors duration-300">
                    {node.title}
                  </h3>
                  
                  <p className="font-body text-xs text-ink/70 leading-relaxed">
                    {node.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
