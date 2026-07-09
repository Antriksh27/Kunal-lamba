'use client';

import React from 'react';

// TODO: Swap this placeholder looping SVG waveform for an actual audio-reactive HTML5 Canvas component
// once Kunal's actual performance video and audio tracks are available.

export default function Waveform() {
  // Generate 40 bars with varying baseline heights
  const barsCount = 40;
  
  return (
    <div className="flex items-end justify-center gap-1.5 h-24 md:h-32 w-full max-w-2xl px-4 py-4">
      {Array.from({ length: barsCount }).map((_, index) => {
        // Create random-looking but static base heights for a nice wave shape
        const baseHeight = 15 + Math.sin((index / (barsCount - 1)) * Math.PI) * 70 + Math.cos((index / 5) * Math.PI) * 15;
        
        // Stagger the animation delays so it looks like a continuous moving wave
        const animationDelay = `${(index * 0.04).toFixed(2)}s`;
        const animationDuration = `${(1.0 + Math.sin(index) * 0.3).toFixed(2)}s`;

        return (
          <div
            key={index}
            className="w-1 md:w-1.5 bg-[#BFFF00] rounded-full origin-bottom"
            style={{
              height: `${baseHeight}%`,
              animation: `pulseWave ${animationDuration} ease-in-out ${animationDelay} infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
