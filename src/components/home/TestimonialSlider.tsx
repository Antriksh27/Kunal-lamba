'use client';

import React, { useState, useEffect, useRef } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

// [PLACEHOLDER TESTIMONIALS] - Replace these with real client testimonials when provided.
const couplesTestimonials: Testimonial[] = [
  {
    quote: "Kunal's performance at our reception was magical. His classical vocals combined with contemporary Hindi tunes set a beautiful, classy vibe. Everyone was talking about the music for weeks!",
    author: "Amit & Priya Sharma",
    role: "Wedding Couple (New York)",
  },
  {
    quote: "Not only did Kunal perform a spectacular acoustic set for our cocktail hour, but he also consulted on the menu. The pairing of his voice and his custom dishes was a total masterpiece.",
    author: "Rohan & Meera Patel",
    role: "Wedding Couple (Chicago)",
  },
  {
    quote: "He brought soul, energy, and elegance to our engagement party. Kunal is a true showman whose voice commands the room while making every guest feel uniquely welcomed.",
    author: "Sanjay & Divya Kapoor",
    role: "Engagement Party (Miami)",
  },
];

const partnersTestimonials: Testimonial[] = [
  {
    quote: "Kunal's consulting completely turned our menu around. His deep knowledge of spice profiles and operational design helped us increase cover counts by 30% within three months.",
    author: "Vikram Malhotra",
    role: "Owner, Taj Bistro (Houston)",
  },
  {
    quote: "Collaborating with Kunal on the Kabab Culture pop-up series was a huge success. His culinary artistry, vision, and marketing instinct packed our restaurant for five straight nights.",
    author: "Chef Marcus Vance",
    role: "Culinary Director, Feast Group",
  },
  {
    quote: "He is a rare talent who understands both the operational complexities of fine dining and the creative nuances of flavor curation. His advice is practical, strategic, and highly effective.",
    author: "Anjali Sen",
    role: "General Manager, Nirvana Group",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="w-full bg-onyx py-20 md:py-32 border-b border-alabaster/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left mb-20 max-w-2xl">
          <span className="font-body text-[10px] tracking-widest uppercase text-[#BFFF00] block mb-4 font-bold">
            Endorsements
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-alabaster uppercase leading-tight tracking-wide">
            WHAT THEY SAY
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Track 1: From Couples */}
          <div className="flex flex-col">
            <h3 className="font-display text-sm md:text-base font-semibold tracking-[0.15em] text-[#BFFF00] uppercase mb-8 border-b border-alabaster/10 pb-4">
              FROM COUPLES & PRIVATE CLIENTS
            </h3>
            <TrackSlider testimonials={couplesTestimonials} />
          </div>

          {/* Track 2: From Restaurant Partners */}
          <div className="flex flex-col">
            <h3 className="font-display text-sm md:text-base font-semibold tracking-[0.15em] text-[#BFFF00] uppercase mb-8 border-b border-alabaster/10 pb-4">
              FROM RESTAURANT & CORPORATE PARTNERS
            </h3>
            <TrackSlider testimonials={partnersTestimonials} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [isPaused, activeIndex]);

  return (
    <div 
      className="relative flex-grow flex flex-col justify-between p-10 rounded-sm border border-alabaster/10 bg-alabaster/5 min-h-[300px] transition-all hover:border-[#BFFF00]/30 hover:bg-alabaster/10 backdrop-blur-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Testimonial Quote */}
      <div className="flex-grow flex flex-col justify-center">
        <p className="font-body text-alabaster/90 text-lg md:text-xl font-light leading-relaxed mb-8">
          "{testimonials[activeIndex].quote}"
        </p>
      </div>

      {/* Subtle Divider line */}
      <div className="w-full border-t border-solid border-alabaster/10 my-6" />

      {/* Author Details & Controls */}
      <div className="flex items-center justify-between mt-auto">
        <div>
          <h4 className="font-body text-sm font-semibold tracking-wide text-alabaster uppercase">
            {testimonials[activeIndex].author}
          </h4>
          <p className="font-body text-xs text-alabaster/60 mt-1">
            {testimonials[activeIndex].role}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-alabaster/20 text-alabaster/50 hover:border-[#BFFF00] hover:text-[#BFFF00] transition-all focus:outline-none"
            aria-label="Previous testimonial"
          >
            <HiOutlineChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-alabaster/20 text-alabaster/50 hover:border-[#BFFF00] hover:text-[#BFFF00] transition-all focus:outline-none"
            aria-label="Next testimonial"
          >
            <HiOutlineChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
