'use client';

import React from 'react';

// TODO: Swap these text wordmarks for actual brand logo SVGs once assets are available.

export default function PressMarquee() {
  const brands = [
    'RAMPUR SINGLE MALT',
    'JAISALMER GIN',
    'STAR PLUS',
    'JUS PUNJABI',
  ];

  // Repeat the array to ensure seamless infinite scroll
  const marqueeItems = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="w-full bg-onyx border-y border-[#BFFF00]/20 py-6 overflow-hidden select-none">
      <div 
        className="flex whitespace-nowrap gap-16 min-w-full"
        style={{
          animation: 'marqueeScroll 25s linear infinite',
        }}
      >
        {marqueeItems.map((brand, index) => (
          <div key={index} className="flex items-center gap-16">
            <span className="font-body text-xl md:text-2xl font-bold tracking-widest text-alabaster opacity-90 hover:opacity-100 hover:text-[#BFFF00] transition-colors duration-300">
              {brand}
            </span>
            <span className="text-[#BFFF00]/60 text-lg">·</span>
          </div>
        ))}
      </div>
    </div>
  );
}
