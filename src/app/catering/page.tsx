'use client';

import React from 'react';
import PhotoGrid from '@/components/catering/PhotoGrid';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function CateringPage() {
  return (
    <div className="w-full bg-onyx min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full py-28 bg-onyx border-b border-alabaster/10 overflow-hidden">
        <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <span className="font-body text-[#BFFF00] uppercase tracking-[0.2em] font-semibold mb-3 block px-4 py-1.5 bg-[#BFFF00]/10 border border-[#BFFF00]/20 rounded-sm">
            Gastronomy
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black italic tracking-wide text-alabaster uppercase mb-6 leading-tight">
            He Doesn&apos;t Cater.<br />He Curates.
          </h1>
          <p className="font-body text-alabaster/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Transcending the conventions of catering. We structure bespoke culinary experiences and private multi-cuisine dining events that tell a story through flavor, plating, and performance.
          </p>
        </Container>
      </section>

      {/* PHILOSOPHY SECTION */}
      <Section className="border-b border-alabaster/10 bg-onyx">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Philosophy text */}
            <div className="space-y-6">
              <span className="font-body text-[#BFFF00] uppercase tracking-widest font-bold block">
                The Culinary Model
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black italic tracking-wide text-alabaster uppercase leading-tight">
                Our Gastronomic Philosophy
              </h2>
              <p className="font-body text-alabaster/70 text-base leading-relaxed">
                Rather than working with rigid buffet configurations, our model is built on absolute customization. Every menu is designed directly with the client. Some select recipes are handcrafted in-house by Kunal Lamba&apos;s personal culinary brigade, while other regional specialties are sourced directly from our exclusive network of premium partner kitchens, including the clay-oven masters of <strong className="text-alabaster">Kabab Culture</strong>.
              </p>
              <div className="pt-4 border-t border-alabaster/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-body text-sm font-bold text-[#BFFF00] uppercase mb-1">Scale of Curation</h4>
                  <p className="font-body text-xs text-alabaster/60">
                    We scale to fit your guest list, from intimate, romantic chef-table dinners for 2 to elite private celebrations for up to 50 guests.
                  </p>
                </div>
                <div>
                  <h4 className="font-body text-sm font-bold text-[#BFFF00] uppercase mb-1">Custom Menu Planning</h4>
                  <p className="font-body text-xs text-alabaster/60">
                    Every dish is carefully designed around dietary requirements, custom flavor profiles, and theme alignments.
                  </p>
                </div>
              </div>
            </div>

            {/* Scale visual showcase card */}
            <div className="relative border border-alabaster/10 bg-alabaster/5 backdrop-blur-sm p-8 rounded-sm flex flex-col justify-between min-h-[350px] shadow-2xl transition-all hover:border-[#BFFF00]/30 hover:bg-alabaster/10">
              <div>
                <span className="font-body text-[10px] uppercase tracking-wider text-[#BFFF00] font-bold block mb-4">Service Scope</span>
                <h3 className="font-display text-2xl font-black italic text-alabaster uppercase mb-4">
                  Intimate scale. Absolute perfection.
                </h3>
                <p className="font-body text-sm text-alabaster/70 leading-relaxed mb-6">
                  By strictly capping our guest counts between 2 to 50 guests per event, we preserve the highest standards of preparation, plating elegance, and direct table-side interaction with Chef Lamba.
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-alabaster/10 pt-6 mt-4">
                <div className="text-center px-4 py-2 border border-alabaster/10 rounded-sm bg-onyx/60 backdrop-blur-sm">
                  <span className="block font-display text-lg font-bold text-[#BFFF00]">2</span>
                  <span className="block text-[8px] font-body uppercase text-alabaster/50">Min Guests</span>
                </div>
                <div className="text-center px-4 py-2 border border-alabaster/10 rounded-sm bg-onyx/60 backdrop-blur-sm">
                  <span className="block font-display text-lg font-bold text-[#BFFF00]">50</span>
                  <span className="block text-[8px] font-body uppercase text-alabaster/50">Max Guests</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* PHOTO GRID (Plated Dish Showcase) */}
      <Section className="border-b border-alabaster/10 bg-onyx">
        <Container>
          <PhotoGrid />
        </Container>
      </Section>

      {/* CTA SECTION */}
      <section className="relative w-full py-24 bg-onyx border-t border-alabaster/10 overflow-hidden">
        <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
        <Container className="relative z-10 text-center flex flex-col items-center">
          <h2 className="font-display text-4xl md:text-5xl font-black italic text-alabaster uppercase mb-6 max-w-2xl leading-tight">
            Ready to design your private dining event?
          </h2>
          <p className="font-body text-alabaster/80 text-sm md:text-base max-w-xl mb-10 leading-relaxed">
            Collaborate with Kunal Lamba to curate a custom multi-cuisine menu tailored to your preferences and guest profiles.
          </p>
          {/* CTA: Neon button */}
          <a 
            href="/book?eventType=catering" 
            className="font-body text-sm font-bold uppercase tracking-[0.2em] px-10 py-4 border border-[#BFFF00]/50 rounded-sm text-[#BFFF00] hover:bg-[#BFFF00] hover:text-onyx transition-all duration-300 backdrop-blur-sm"
          >
            Plan Your Menu
          </a>
        </Container>
      </section>
    </div>
  );
}
