'use client';

import React, { useState } from 'react';
import Waveform from '@/components/home/Waveform';
import VideoModal from '@/components/home/VideoModal';
import PillarGrid from '@/components/home/PillarGrid';
import Chapters from '@/components/home/Chapters';
import PressMarquee from '@/components/home/PressMarquee';
import TestimonialSlider from '@/components/home/TestimonialSlider';
import InquiryForm from '@/components/home/InquiryForm';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full bg-alabaster min-h-screen flex flex-col">
      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-onyx text-alabaster">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images.jpg)' }}
        />
        
        {/* Halftone / Gradient Overlay */}
        {/* Adds a slight noise/texture and darkens it so text pops, with a subtle green gradient at bottom like the screenshot */}
        <div className="absolute inset-0 bg-onyx/30 mix-blend-multiply" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#BFFF00]/20 via-onyx/40 to-transparent pointer-events-none mix-blend-overlay" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-onyx to-transparent pointer-events-none" />

        <div className="relative z-10 w-full flex flex-col items-center justify-center mt-12 md:mt-20 px-4">
          
          {/* Main bold text container */}
          <div className="relative flex items-center justify-center w-full max-w-[100vw] overflow-visible">
            {/* Signature overlay */}
            <h1 
              className="text-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] pointer-events-none"
              style={{
                fontFamily: "var(--font-script), cursive",
                fontSize: "clamp(5rem, 18vw, 22rem)",
                color: "#BFFF00", /* Bright neon green/yellow from screenshot */
                transform: "rotate(-3deg)",
                whiteSpace: "nowrap",
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Kunal Lamba
            </h1>
          </div>

          {/* Watch video CTA */}
          <div className="mt-24 sm:mt-32 z-20">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2.5 border border-[#BFFF00]/50 rounded font-body text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#BFFF00] hover:bg-[#BFFF00] hover:text-onyx transition-all duration-300 backdrop-blur-sm"
            >
              Watch Video
            </button>
          </div>
        </div>

        {/* Scroll indicator (Bottom Left) */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 flex items-center gap-3">
          <div className="flex flex-col items-center animate-bounce">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-alabaster"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </div>
          <span className="font-body text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-alabaster">Scroll</span>
        </div>
      </section>

      {/* FIVE-PILLAR GRID */}
      <PillarGrid />

      {/* BIOGRAPHICAL CHAPTERS SEQUENCE */}
      <Chapters />

      {/* PRESS MARQUEE */}
      <PressMarquee />

      {/* TESTIMONIAL STRIP */}
      <TestimonialSlider />

      {/* CONSOLIDATED INQUIRY SECTION */}
      <section id="inquiry" className="relative w-full bg-onyx py-20 scroll-mt-20 border-t border-alabaster/10 overflow-hidden">
        <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headline and Message */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <h2 className="font-display text-[28px] md:text-[42px] font-black italic text-alabaster uppercase leading-tight">
                Have an event?<br/><span className="text-[#BFFF00]">Let's talk.</span>
              </h2>
              <p className="font-body text-alabaster/80 text-sm md:text-base leading-relaxed">
                Share details about your upcoming gathering, and we'll get back to you with custom culinary and performance configurations.
              </p>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Video Modal Component */}
      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoId="nqIcHdptSWI" />
    </div>
  );
}
