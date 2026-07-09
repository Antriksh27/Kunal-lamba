'use client';

import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function KababCulturePage() {
  return (
    <div className="w-full bg-onyx min-h-screen text-alabaster">
      {/* SINGLE FEATURE SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 bg-onyx overflow-hidden">
        
        {/* Gritty Noise Overlay */}
        <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />

        {/* Background Restaurant Photography */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 pointer-events-none mix-blend-luminosity"
          style={{
            backgroundImage: `url('/kabab-culture-bg-real.jpg')`,
          }}
        />

        <Container className="relative z-10 max-w-4xl flex flex-col items-center text-center">
          <span className="font-body text-[#BFFF00] uppercase tracking-widest font-semibold mb-4 block px-3 py-1 bg-[#BFFF00]/10 border border-[#BFFF00]/20 rounded-sm">
            The Restaurant
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black italic tracking-wide text-alabaster uppercase mb-8 leading-tight">
            Kabab Culture
          </h1>
          
          <span className="font-body text-xs md:text-sm font-semibold text-[#BFFF00] uppercase tracking-widest block mb-10">
            Franklin Township, NJ
          </span>

          {/* Story Block */}
          <div className="max-w-2xl bg-alabaster/5 backdrop-blur-sm border border-alabaster/10 p-8 rounded-sm mb-10 shadow-2xl">
            <p className="font-body text-alabaster/80 text-sm md:text-base leading-relaxed">
              Co-founded by Kunal Lamba alongside Sidhartha Rao under the <strong className="text-alabaster">Desi Gastronomy</strong> umbrella, Kabab Culture represents Kunal&apos;s very first restaurant concept as a co-owner. Celebrating the time-honored heritage of open-fire clay oven cooking, the brand specializes in masterfully spiced marinades, tender skewered meats, and authentic clay oven specialties.
            </p>
          </div>

          {/* Live Music Callout Box */}
          <div className="w-full max-w-2xl border border-[#BFFF00]/20 bg-[#BFFF00]/5 backdrop-blur-sm rounded-sm p-6 mb-12 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-[#BFFF00]/40 transition-all duration-300 shadow-lg">
            <div className="space-y-1">
              <h3 className="font-display text-lg font-bold text-alabaster uppercase">
                Live Music Thursdays
              </h3>
              <p className="font-body text-xs text-alabaster/70">
                Experience Kunal Lamba performing acoustic unplugged Sufi & Bollywood classics live at Kabab Culture.
              </p>
            </div>
            <Link 
              href="/singing" 
              className="font-body text-xs font-semibold uppercase tracking-wider text-[#BFFF00] hover:text-alabaster transition-colors flex-shrink-0"
            >
              Performance Schedule &rarr;
            </Link>
          </div>

          {/* Action CTA Button */}
          <div className="flex justify-center">
            {/* Outbound Link opens in new tab */}
            <a 
              href="https://kababculture.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center font-body font-bold transition-all duration-300 rounded-sm px-8 py-4 text-sm uppercase tracking-[0.2em] border border-[#BFFF00]/50 text-[#BFFF00] hover:bg-[#BFFF00] hover:text-onyx active:scale-95 cursor-pointer backdrop-blur-sm shadow-xl"
            >
              Visit Kabab Culture Website
            </a>
          </div>

        </Container>
      </section>
    </div>
  );
}
