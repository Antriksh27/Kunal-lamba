import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope, Caveat } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTA from '@/components/layout/MobileCTA';

const cormorant = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const manrope = Manrope({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const caveat = Caveat({
  variable: '--font-script',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Kunal Lamba | Singer, Culinary Consultant & Kabab Culture Innovator',
  description:
    'Official portfolio of Kunal Lamba. Offering live singing performances, bespoke catering services, culinary consulting, and Kabab Culture experiences.',
  keywords: [
    'Kunal Lamba',
    'Singer',
    'Catering',
    'Culinary Consultant',
    'Kabab Culture',
    'Live Music',
    'Food Consultant',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${manrope.variable} ${caveat.variable} h-full antialiased overflow-x-hidden scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-alabaster text-onyx selection:bg-champagne selection:text-onyx overflow-x-hidden">
        <SmoothScrollProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MobileCTA />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
