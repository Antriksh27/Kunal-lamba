import Link from 'next/link';
import { FaInstagram, FaTiktok, FaYoutube, FaThreads } from 'react-icons/fa6';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Singing', href: '/singing' },
    { name: 'Catering', href: '/catering' },
    { name: 'Consulting', href: '/consulting' },
    { name: 'Kabab Culture', href: '/kabab-culture' },
    { name: 'TV', href: '/tv' },
    { name: 'About', href: '/#about' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: FaInstagram, href: '#' },
    { name: 'TikTok', icon: FaTiktok, href: '#' },
    { name: 'YouTube', icon: FaYoutube, href: '#' },
    { name: 'Threads', icon: FaThreads, href: '#' },
  ];

  return (
    <footer className="w-full bg-onyx border-t border-alabaster/10 text-alabaster">
      {/* Main Footer Links & Socials */}
      <div className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Column 1: Brand Info */}
            <div className="flex flex-col space-y-4">
              <Link href="/" className="font-display text-2xl font-black italic tracking-wider text-alabaster hover:text-[#BFFF00] transition-colors duration-300">
                KUNAL LAMBA
              </Link>
              <p className="font-body text-sm text-alabaster/60 max-w-sm leading-relaxed">
                Singer, Culinary Consultant, and Kabab Culture Innovator. Transforming cultural and culinary spaces through performance and culinary arts.
              </p>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-display text-lg font-bold tracking-wider text-[#BFFF00]">NAVIGATION</h3>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-alabaster/70 hover:text-[#BFFF00] transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Social & Contacts */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-display text-lg font-bold tracking-wider text-[#BFFF00]">CONNECT</h3>
              <p className="font-body text-sm text-alabaster/60">Follow Kunal Lamba on social media channels.</p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="p-2.5 rounded-full border border-alabaster/20 hover:border-[#BFFF00] hover:text-[#BFFF00] transition-all duration-300"
                      aria-label={`Follow on ${social.name}`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Copyright Divider */}
          <div className="mt-12 md:mt-20 pt-8 border-t border-alabaster/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-alabaster/40">
              &copy; {currentYear} Kunal Lamba. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#privacy" className="font-body text-xs text-alabaster/40 hover:text-[#BFFF00] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="font-body text-xs text-alabaster/40 hover:text-[#BFFF00] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
