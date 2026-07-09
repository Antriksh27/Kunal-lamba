'use client';

import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlay } from 'react-icons/fa6';
import VideoModal from '../home/VideoModal';

interface Reel {
  id: number;
  title: string;
  tag: 'Wedding' | 'Haldi' | 'Corporate' | 'Baar Baar NYC';
  duration: string;
  bgClass: string;
  youtubeId: string;
}

const reelsData: Reel[] = [
  { id: 1, title: "Classic Ghazal Tribute", tag: "Corporate", duration: "1:45", bgClass: "from-[#BFFF00]/10 to-black", youtubeId: "96m__9jBYvw" },
  { id: 2, title: "Unplugged Sufi Night", tag: "Baar Baar NYC", duration: "2:30", bgClass: "from-onyx to-[#BFFF00]/5", youtubeId: "6RhmkEHel74" },
  { id: 3, title: "Musical Pheras Entrance", tag: "Wedding", duration: "3:15", bgClass: "from-[#BFFF00]/10 to-black", youtubeId: "y1dusfmFvJY" },
  { id: 4, title: "Haldi Celebration Beats", tag: "Haldi", duration: "1:20", bgClass: "from-onyx to-[#BFFF00]/5", youtubeId: "fbG0H_a1AAU" },
  { id: 5, title: "Baar Baar NYC Residency Jam", tag: "Baar Baar NYC", duration: "2:10", bgClass: "from-[#BFFF00]/10 to-black", youtubeId: "96m__9jBYvw" },
  { id: 6, title: "Grand Reception Performance", tag: "Wedding", duration: "3:40", bgClass: "from-onyx to-[#BFFF00]/5", youtubeId: "6RhmkEHel74" },
  { id: 7, title: "Arijit Hits Medley", tag: "Corporate", duration: "2:05", bgClass: "from-[#BFFF00]/10 to-black", youtubeId: "y1dusfmFvJY" },
  { id: 8, title: "Haldi Dhol & Fusion Set", tag: "Haldi", duration: "1:55", bgClass: "from-onyx to-[#BFFF00]/5", youtubeId: "fbG0H_a1AAU" },
];

export default function ReelGallery() {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredReels = selectedTag === 'All' 
    ? reelsData 
    : reelsData.filter(reel => reel.tag === selectedTag);

  const tags = ['All', 'Wedding', 'Haldi', 'Corporate', 'Baar Baar NYC'];

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: containerRef });

  const handleCardClick = (youtubeId: string) => {
    setActiveVideoId(youtubeId);
    setIsModalOpen(true);
  };

  return (
    <div ref={containerRef} className="w-full bg-onyx relative border-y border-alabaster/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        
        {/* Title and Filter Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-body text-[#BFFF00] uppercase tracking-[0.2em] font-semibold mb-3 block">
              Watch & Listen
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-black italic tracking-wide text-alabaster uppercase">
              Performance Reels
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`font-body text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-sm transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-[#BFFF00] text-onyx border border-[#BFFF00]'
                    : 'bg-alabaster/5 text-alabaster/70 border border-alabaster/10 hover:border-[#BFFF00]/50 hover:text-[#BFFF00]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Container */}
        {/* Smooth horizontal scroll for all screens */}
        <div className="overflow-x-auto -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scrollbar-none">
          <div
            className="flex gap-6 pb-6 snap-x snap-mandatory"
          >
            {filteredReels.map((reel) => (
              <div
                key={reel.id}
                onClick={() => handleCardClick(reel.youtubeId)}
                className="flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[350px] snap-center snap-always cursor-pointer"
              >
                <div className="group relative aspect-video w-full rounded-sm border border-alabaster/10 overflow-hidden flex items-center justify-center transition-all duration-500 hover:border-[#BFFF00]/50 shadow-lg">
                  {/* YouTube Thumbnail */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('https://img.youtube.com/vi/${reel.youtubeId}/maxresdefault.jpg')` }}
                  />
                  
                  {/* Dark Overlay for contrast */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-onyx/10 opacity-70 group-hover:opacity-50 transition-opacity duration-500`} />
                  
                  {/* Tag Badge */}
                  <span className="absolute top-4 left-4 z-20 font-body text-[10px] font-bold uppercase tracking-wider bg-onyx/80 backdrop-blur-sm border border-alabaster/10 px-2.5 py-1 rounded-sm text-alabaster/90">
                    {reel.tag}
                  </span>

                  {/* Duration Badge */}
                  <span className="absolute bottom-4 right-4 z-20 font-body text-[10px] font-medium tracking-wide bg-onyx/80 backdrop-blur-sm px-2 py-0.5 rounded-sm text-alabaster/70 border border-alabaster/10">
                    {reel.duration}
                  </span>

                  {/* Play Button Icon */}
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#BFFF00]/90 text-onyx group-hover:bg-[#BFFF00] group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <FaPlay className="h-4 w-4 ml-0.5" />
                  </div>
                </div>
                <h3 className="font-body text-sm font-semibold tracking-wide text-alabaster/90 mt-4 group-hover:text-[#BFFF00] transition-colors duration-300">
                  {reel.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>

      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoId={activeVideoId || undefined} />
    </div>
  );
}
