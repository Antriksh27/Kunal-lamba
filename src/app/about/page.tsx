'use client';

import React from 'react';
import AboutChapters from '@/components/about/AboutChapters';
import PressMarquee from '@/components/home/PressMarquee';
import Container from '@/components/ui/Container';

export default function AboutPage() {
  return (
    <div className="w-full bg-ivory min-h-screen text-ink">
      {/* HERO SECTION */}
      <section className="relative w-full py-28 bg-ivory border-b border-ink/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Headline and Short Intro */}
            <div className="space-y-6">
              <span className="font-body text-saffron uppercase tracking-widest font-semibold block">
                The Producer
              </span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black italic tracking-wide text-ink uppercase leading-none mb-6">
                Chef. Singer.<br />Same Person.
              </h1>
              <p className="font-body text-ink/80 text-base sm:text-lg leading-relaxed max-w-xl">
                Kunal Lamba does not see his career as a pivot from music to hospitality, but rather as one integrated creative journey. For Kunal, composing a menu and composing a melody are expressions of the same artistic throughline—requiring absolute discipline, cultural resonance, and stage-level execution.
              </p>
            </div>

            {/* Portrait Placeholder Card */}
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded border border-ink/10 bg-bone/30 flex flex-col items-center justify-center p-8 text-center overflow-hidden">
              {/* Decorative radial gradient */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,164,65,0.1)_0%,rgba(251,241,222,0)_70%)] pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <span className="font-body text-[10px] uppercase tracking-widest text-saffron font-bold block">Portrait Asset</span>
                <h3 className="font-display text-lg font-bold text-ink uppercase">
                  [KUNAL LAMBA PORTRAIT PHOTO]
                </h3>
                <p className="font-body text-xs text-ink/50 max-w-xs leading-relaxed">
                  Placeholder card representing Kunal&apos;s professional portrait photography. Asset to be mapped on final deploy.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FULL DEPTH BIOGRAPHICAL CHAPTERS SEQUENCE */}
      <AboutChapters />

      {/* PRESS / BRAND STRIP */}
      <PressMarquee />
    </div>
  );
}
