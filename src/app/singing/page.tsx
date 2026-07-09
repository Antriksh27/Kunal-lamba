'use client';

import React from 'react';
import Waveform from '@/components/home/Waveform';
import ReelGallery from '@/components/singing/ReelGallery';
import SingingInquiryForm from '@/components/singing/SingingInquiryForm';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function SingingPage() {
  return (
    <div className="w-full bg-onyx min-h-screen">
      {/* HERO SECTION */}
      <section className="relative w-full py-20 bg-onyx border-b border-alabaster/10 overflow-hidden">
        <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
        <Container className="relative z-10 flex flex-col items-center text-center">
          {/* Waveform accent, smaller scale */}
          <div className="w-full max-w-sm mb-6 flex justify-center scale-75 opacity-90 text-[#BFFF00]">
            <Waveform />
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black italic tracking-wide text-alabaster uppercase mb-4">
            Live Bollywood. Every Era.
          </h1>
          <p className="font-body text-alabaster/70 text-base sm:text-lg max-w-2xl">
            From the golden melodies of Mohammad Rafi, Kishore Kumar, and Jagjit Singh to the high-energy contemporary hits of Arijit Singh, Sonu Nigam, and legacy pop.
          </p>
        </Container>
      </section>

      {/* SONG RANGE + BAND SECTION */}
      <Section className="border-b border-alabaster/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Context & Description */}
            <div className="space-y-6">
              <span className="font-body text-[#BFFF00] uppercase tracking-widest font-semibold block">
                The Ensemble
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black italic tracking-wide text-alabaster uppercase leading-tight">
                3-Piece Sufi & Bollywood Fusion
              </h2>
              <p className="font-body text-alabaster/70 text-base leading-relaxed">
                Kunal performs alongside a masterfully curated 3-piece acoustic/fusion band featuring live percussions (tabla & dholak), keyboard, and acoustic guitar. Together, they deliver rich live soundscapes ranging from unplugged classics to rhythmic Sufi-Qawwali sets.
              </p>
              
              <div className="pt-4 border-t border-alabaster/10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-body text-sm font-bold text-[#BFFF00] uppercase mb-1">Musical Pheras</h4>
                  <p className="font-body text-xs text-alabaster/60">Live ambient classical raagas and auspicious mantras arranged for Hindu wedding ceremonies.</p>
                </div>
                <div>
                  <h4 className="font-body text-sm font-bold text-[#BFFF00] uppercase mb-1">Haldi & Sangeet Sets</h4>
                  <p className="font-body text-xs text-alabaster/60">High-octane folk fusion, dhol-heavy beats, and interactive medleys to get guests dancing.</p>
                </div>
                <div>
                  <h4 className="font-body text-sm font-bold text-[#BFFF00] uppercase mb-1">Sufi & Ghazal Nights</h4>
                  <p className="font-body text-xs text-alabaster/60">Soulful poetry, ghazals, and qawwali tracks made famous by legendary artists.</p>
                </div>
                <div>
                  <h4 className="font-body text-sm font-bold text-[#BFFF00] uppercase mb-1">Weekly Residency</h4>
                  <p className="font-body text-xs text-alabaster/60">Catch Kunal live at his weekly residency at <strong className="text-alabaster">Baar Baar NYC</strong> in Manhattan.</p>
                </div>
              </div>
            </div>

            {/* Performance Graphic Placeholder */}
            <div className="group relative aspect-square w-full rounded-sm border border-alabaster/10 flex flex-col items-center justify-center p-8 text-center transition-all hover:border-[#BFFF00]/50 overflow-hidden shadow-2xl">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-[url('/singing.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Dark Overlay for readability */}
              <div className="absolute inset-0 bg-onyx/70 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent opacity-90" />
              
              <div className="relative z-10 w-16 h-16 border border-[#BFFF00]/40 rounded-full flex items-center justify-center text-[#BFFF00] mb-4 font-display text-xl font-bold bg-onyx/50 backdrop-blur-sm">
                B
              </div>
              <h3 className="relative z-10 font-display text-lg font-bold text-alabaster mb-2 drop-shadow-md">BAAR BAAR NYC</h3>
              <p className="relative z-10 font-body text-xs text-alabaster/70 max-w-xs mb-6 drop-shadow-md font-medium">
                Experience Kunal Lamba live in Manhattan. Check our socials for this week&apos;s schedule and table reservations.
              </p>
              <a 
                href="https://baarbaarnyc.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="relative z-10 font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#BFFF00] hover:text-alabaster transition-colors bg-onyx/50 backdrop-blur-sm px-4 py-2 rounded-sm border border-[#BFFF00]/20 hover:border-alabaster/50"
              >
                Visit Baar Baar &rarr;
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* REEL GALLERY (GSAP horizontal scroll-jack + filters) */}
      <ReelGallery />

      {/* INQUIRY FORM SECTION */}
      <section id="inquiry" className="relative w-full bg-onyx py-20 scroll-mt-20 border-t border-alabaster/10 overflow-hidden">
        <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
        <Container className="relative z-10 flex flex-col items-center">
          <div className="text-center mb-10 max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl font-black italic text-alabaster uppercase mb-4">
              Check Singing Availability
            </h2>
            <p className="font-body text-alabaster/80 text-sm">
              Complete the form below to inquire about booking Kunal and his band for your upcoming wedding, corporate gala, or private gathering.
            </p>
          </div>

          <SingingInquiryForm />
        </Container>
      </section>
    </div>
  );
}
