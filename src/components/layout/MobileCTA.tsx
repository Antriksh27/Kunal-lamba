'use client';

import { useState, useEffect } from 'react';
import Button from '../ui/Button';

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 p-4 bg-ivory/90 backdrop-blur-md border-t border-ink/10 md:hidden transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <Button variant="secondary" href="#book" className="w-full text-center py-3.5 font-bold">
        Book Kunal
      </Button>
    </div>
  );
}
