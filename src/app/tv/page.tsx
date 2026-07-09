'use client';

import React from 'react';
import VideoGrid from '@/components/tv/VideoGrid';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

const khanaPeenaGaanaVideos = [
  { id: 'kpg1', title: 'Season 1 Premier: Classic Kebabs & Ghazals', episode: 'Episode 01', bgGrad: 'from-gold/25 to-black' },
  { id: 'kpg2', title: 'Fusion Curries with Live Keyboard Sets', episode: 'Episode 05', bgGrad: 'from-chili/25 to-ivory' },
  { id: 'kpg3', title: 'Special Guest: Ustad Zakir Tribute Night', episode: 'Episode 12', bgGrad: 'from-gold/25 to-black' },
];

const kawanVideos = [
  { id: 'kawan1', title: 'Leftover Chicken tikka into gourmet wraps', episode: 'Season 2 - Ep 04', bgGrad: 'from-chili/25 to-ivory' },
  { id: 'kawan2', title: 'Recreating traditional biryani from frozen rice', episode: 'Season 3 - Ep 09', bgGrad: 'from-gold/25 to-black' },
  { id: 'kawan3', title: 'Leftover vegetable stir-fry into kathi rolls', episode: 'Season 4 - Ep 11', bgGrad: 'from-chili/25 to-ivory' },
];

export default function TVPage() {
  return (
    <div className="w-full bg-onyx min-h-screen text-alabaster">
      {/* HERO SECTION */}
      <section className="relative w-full py-16 md:py-28 bg-onyx border-b border-alabaster/10 overflow-hidden">
        <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <span className="font-body text-[#BFFF00] uppercase tracking-[0.2em] font-semibold mb-3 block px-4 py-1.5 bg-[#BFFF00]/10 border border-[#BFFF00]/20 rounded-sm">
            Broadcast
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black italic tracking-wide text-alabaster uppercase mb-6 leading-tight max-w-4xl">
            On Screen.
          </h1>
          <p className="font-body text-alabaster/70 text-base sm:text-lg max-w-2xl leading-relaxed">
            Connecting culture, culinary arts, and entertainment. Kunal Lamba is a seasoned TV host and culinary presenter, fronting major broadcast reality formats across the South Asian diaspora.
          </p>
        </Container>
      </section>

      {/* SHOW 1 — KHANA PEENA GAANA */}
      <Section className="border-b border-alabaster/10 bg-onyx">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="font-body text-[#BFFF00] uppercase tracking-widest font-semibold block mb-3">
                Talk Show
              </span>
              <h2 className="font-display text-3xl font-black italic text-alabaster uppercase leading-tight">
                Khana Peena Gaana
              </h2>
              <p className="font-body text-alabaster/70 text-sm mt-4 leading-relaxed">
                A highly popular, upbeat broadcast talk show celebrating food, craft cocktails, and live music. Kunal hosts guest musicians and chefs, combining conversational entertainment with live, real-time culinary cook-offs. Aired globally on <strong className="text-alabaster">Jus Punjabi</strong> and <strong className="text-alabaster">Jus Hindi</strong> broadcast networks.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <VideoGrid videos={khanaPeenaGaanaVideos} />
            </div>
          </div>
        </Container>
      </Section>

      {/* SHOW 2 — KAWAN KITCHENMATE */}
      <Section className="border-b border-alabaster/10 bg-onyx">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            <div>
              <span className="font-body text-[#BFFF00] uppercase tracking-widest font-semibold block mb-3">
                Reality TV
              </span>
              <h2 className="font-display text-3xl font-black italic text-alabaster uppercase leading-tight">
                Kawan Kitchenmate
              </h2>
              <p className="font-body text-alabaster/70 text-sm mt-4 leading-relaxed">
                A premier <strong className="text-alabaster">Star Plus</strong> broadcast reality show. Across 4 seasons and 52 episodes, Kunal travels directly into Indian-American homes, challenging himself to build gourmet five-star menus on the spot using only left-over ingredients found inside families&apos; refrigerators.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <VideoGrid videos={kawanVideos} />
            </div>
          </div>
        </Container>
      </Section>

      {/* EMCEE SECTION */}
      <Section className="border-b border-alabaster/10 bg-onyx">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Context & Description */}
            <div className="space-y-6">
              <span className="font-body text-[#BFFF00] uppercase tracking-widest font-semibold block">
                Live Hosting
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black italic tracking-wide text-alabaster uppercase leading-tight">
                Corporate Emcee & Gala Hosting
              </h2>
              <p className="font-body text-alabaster/70 text-sm md:text-base leading-relaxed">
                Beyond broadcast networks, Kunal Lamba is a highly sought-after live host and emcee for elite social and corporate galas. Fluent in English, Hindi, and Punjabi, he brings charismatic stage presence, cultural awareness, and high energy to key diaspora milestones.
              </p>
              
              <div className="pt-4 border-t border-alabaster/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-body text-sm font-bold text-[#BFFF00] uppercase mb-1">Punjabi Sikh Weddings</h4>
                  <p className="font-body text-xs text-alabaster/60">
                    Cultural advisory and fluent Punjabi-language hosting for elite multi-day Sikh wedding ceremonies.
                  </p>
                </div>
                <div>
                  <h4 className="font-body text-sm font-bold text-[#BFFF00] uppercase mb-1">Charity Galas</h4>
                  <p className="font-body text-xs text-alabaster/60">
                    Stage management and live auction hosting for premier diaspora organizations, including the American India Foundation (AIF).
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Callout Graphic */}
            <div className="border border-alabaster/10 bg-alabaster/5 backdrop-blur-sm p-8 rounded-sm flex flex-col justify-center text-center min-h-[300px] shadow-2xl">
              <span className="font-body text-[10px] uppercase tracking-widest text-[#BFFF00] font-bold mb-4">Gala Portfolio</span>
              <h3 className="font-display text-2xl font-black italic text-alabaster uppercase mb-4">
                Professional. Cultured. Charismatic.
              </h3>
              <p className="font-body text-xs text-alabaster/60 leading-relaxed max-w-sm mx-auto">
                Providing master of ceremony hosting for corporate galas, fund-raisers, luxury brand launches, and premium wedding receptions globally.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* PRESS CONTACT BLOCK */}
      <section className="relative bg-onyx py-24 overflow-hidden">
        <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
        <Container className="relative z-10 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className="font-display text-xl font-black italic text-alabaster uppercase mb-2">
                Media Inquiries
              </h3>
              <p className="font-body text-xs text-alabaster/50 mb-4 leading-relaxed">
                For press passes, broadcast bookings, interview coordinates, or public appearance schedules.
              </p>
              <a 
                href="mailto:kunal@kunallamba.com" 
                className="font-body text-sm font-bold text-[#BFFF00] hover:text-alabaster transition-colors underline"
              >
                kunal@kunallamba.com
              </a>
            </div>

            <div className="md:col-span-2 border-l border-alabaster/10 pl-0 md:pl-8 pt-6 md:pt-0">
              <h4 className="font-body text-xs font-semibold uppercase tracking-wider text-[#BFFF00] mb-3">Press Bio</h4>
              <div className="bg-alabaster/5 border border-alabaster/10 rounded-sm p-6 font-body text-sm text-alabaster/80 leading-relaxed select-all">
                Kunal Lamba is a prominent South Asian TV host, singer, culinary consultant, and operator based in the New York metropolitan area. Known for fronting &ldquo;Khana Peena Gaana&rdquo; on Jus Punjabi and the hit Star Plus leftover cooking reality show &ldquo;Kawan Kitchenmate&rdquo;, Kunal blends classical music training with michelin-level restaurant building experience to curate authentic, culturally rich entertainment across the globe.
              </div>
              <span className="font-body text-[10px] text-alabaster/30 mt-2 block text-right">Click block to highlight and copy</span>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
