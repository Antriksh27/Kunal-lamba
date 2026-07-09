'use client';

import React, { useEffect } from 'react';
import { HiX } from 'react-icons/hi';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId?: string;
}

export default function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-onyx/90 backdrop-blur-md">
      {/* Backdrop click closer */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl aspect-video rounded-sm border border-alabaster/10 bg-onyx overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-onyx/60 text-alabaster hover:text-[#BFFF00] transition-colors focus:outline-none z-50"
        >
          <HiX className="h-6 w-6" />
        </button>

        {/* Dynamic YouTube Video */}
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId || 'dQw4w9WgXcQ'}?autoplay=1`}
          title="Kunal Lamba Performance Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
