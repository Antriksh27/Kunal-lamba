'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import Button from '../ui/Button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const leftLinks = [
    { name: 'Singing', href: '/singing' },
    { name: 'Catering', href: '/catering' },
    { name: 'Consulting', href: '/consulting' },
  ];
  
  const rightLinks = [
    { name: 'Kabab Culture', href: '/kabab-culture' },
    { name: 'TV', href: '/tv' },
    { name: 'Contact', href: '/contact' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-auto transition-all duration-300">
      <div className="flex items-center justify-between md:justify-center px-6 md:px-10 py-1 md:py-1.5 bg-onyx/85 backdrop-blur-md shadow-2xl rounded-full border border-alabaster/10">
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-alabaster/80 hover:text-alabaster p-1 focus:outline-none transition-colors"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Desktop Left Nav */}
        <nav className="hidden md:flex items-center justify-end space-x-6 pr-8">
          {leftLinks.map((link) => {
            const isActive = pathname === link.href || (link.href === '/#about' && pathname === '/' && false); // simplified
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group font-body text-xs lg:text-sm text-alabaster/80 hover:text-alabaster transition-colors duration-300 whitespace-nowrap"
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-alabaster/80" />
                )}
                {!isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-alabaster/50 transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Center Logo */}
        <div className="flex-shrink-0 flex flex-col items-center justify-center">
          <Link href="/" className="font-display text-lg md:text-xl font-black tracking-[0.2em] text-alabaster hover:text-champagne transition-colors duration-300 leading-none mb-0.5">
            KUNAL
          </Link>
          <span className="text-[6px] md:text-[8px] text-alabaster/60 uppercase tracking-[0.3em] font-body leading-none">
            Every Note Matters
          </span>
        </div>

        {/* Desktop Right Nav */}
        <nav className="hidden md:flex items-center justify-start space-x-6 pl-8">
          {rightLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group font-body text-xs lg:text-sm text-alabaster/80 hover:text-alabaster transition-colors duration-300 whitespace-nowrap"
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-alabaster/80" />
                )}
                {!isActive && (
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-alabaster/50 transition-all duration-300 group-hover:w-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Right CTA */}
        <div className="md:hidden flex-1 flex justify-end">
          <Link href="/#inquiry" className="text-[10px] font-body uppercase tracking-wider text-[#BFFF00] border border-[#BFFF00]/50 rounded-full px-3 py-1.5 hover:bg-[#BFFF00] hover:text-onyx transition-all">
            Book
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-[calc(100%+12px)] left-0 w-full transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="bg-onyx/90 backdrop-blur-lg border border-alabaster/10 rounded-2xl p-4 shadow-2xl flex flex-col space-y-4">
          {allLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-body text-sm font-semibold uppercase tracking-wider text-alabaster/80 hover:text-[#BFFF00] py-2 border-b border-alabaster/10 text-center transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
