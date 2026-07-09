'use client';

import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa6';
import VideoModal from '../home/VideoModal';

interface VideoItem {
  id: string;
  title: string;
  episode: string;
  bgGrad: string;
}

interface VideoGridProps {
  videos: VideoItem[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const handlePlayClick = (id: string) => {
    setActiveVideoId(id);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((vid) => (
          <div
            key={vid.id}
            onClick={() => handlePlayClick(vid.id)}
            className="group cursor-pointer flex flex-col space-y-3"
          >
            {/* Visual Thumbnail */}
            <div className="relative aspect-video w-full rounded-sm border border-alabaster/10 bg-gradient-to-b overflow-hidden flex items-center justify-center transition-all duration-500 hover:border-[#BFFF00]/50 shadow-lg bg-onyx">
              <div className={`absolute inset-0 bg-gradient-to-b ${vid.bgGrad} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
              
              {/* Play Overlay */}
              <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-[#BFFF00] text-onyx group-hover:scale-110 transition-all duration-300 shadow-md">
                <FaPlay className="h-3.5 w-3.5 ml-0.5" />
              </div>

              {/* Static Badge */}
              <span className="absolute bottom-3 right-3 font-body text-[9px] bg-onyx/60 px-2 py-0.5 rounded-sm text-alabaster/50 border border-alabaster/10">
                Placeholder Video
              </span>
            </div>

            {/* Video Meta Info */}
            <div>
              <span className="font-body text-[10px] font-semibold text-[#BFFF00] uppercase tracking-wider">
                {vid.episode}
              </span>
              <h4 className="font-body text-sm font-bold text-alabaster/90 group-hover:text-[#BFFF00] transition-colors duration-300">
                {vid.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
