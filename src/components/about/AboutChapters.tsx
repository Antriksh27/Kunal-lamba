'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Container from '../ui/Container';

interface BiographyChapter {
  num: string;
  label: string;
  quote: string;
  paragraph: string;
  gradientClass: string;
  photoComment: string;
}

const bioChapters: BiographyChapter[] = [
  {
    num: '01',
    label: 'Delhi — Roots',
    quote: 'I grew up in the steam of commercial kitchens and the resonance of classical ragas.',
    paragraph: "My childhood was split between the rhythmic clatter of my family's restaurant kitchens in Delhi and the soulful melodies of local classical concerts. I didn't see these as separate paths, but as two forms of cultural performance. Watching my family curate regional flavors taught me that a menu is a script, and the table is a stage. This early exposure laid the foundation for everything I create today.",
    gradientClass: 'from-saffron/10 via-ink to-chili/10',
    photoComment: 'PHOTO: Portrait of a young Kunal in Delhi or classic Delhi street/family kitchen scenes, warm sepia tones.',
  },
  {
    num: '02',
    label: 'WGSHA Manipal — Academy',
    quote: 'Manipal is where my passion for food transformed into professional discipline.',
    paragraph: 'Attending the Welcomgroup Graduate School of Hotel Administration was a turning point. It was there that I realized creativity without operational structure is just chaos. I learned the strict science of food safety, menu engineering, and kitchen management. Manipal gave me the academic rigor to backup my culinary instincts.',
    gradientClass: 'from-ink via-zinc-950 to-saffron/15',
    photoComment: 'PHOTO: Academy days, culinary uniforms, black and white archival framing.',
  },
  {
    num: '03',
    label: 'ITC Maurya New Delhi — Clay Ovens',
    quote: 'Working at Maurya taught me that fire and clay have their own voice.',
    paragraph: 'Starting my professional career at the legendary ITC Maurya was a masterclass in elite Indian gastronomy. I stood beside legacy chefs who spent decades mastering the live clay ovens, learning the precise control of embers and marinades. It was a baptism of fire that showed me the true depth of traditional Kabab culture. I carried those lessons across oceans.',
    gradientClass: 'from-chili/15 via-ink to-saffron/10',
    photoComment: 'PHOTO: Action shot near smoking clay tandoors, high contrast flame light.',
  },
  {
    num: '04',
    label: 'The Gaylord London — Legacy',
    quote: 'In London, I learned how heritage survives in a modern metropolis.',
    paragraph: "Taking over operations at The Gaylord in London, established in 1966, was my first test running a historic brand abroad. London's dining scene is incredibly cutthroat, and preserving a legacy restaurant required strategic menu refreshes and strict brand consistency. It was here that I learned how to balance respect for heritage with modern presentation. We didn't just sell food; we sold history.",
    gradientClass: 'from-saffron/10 via-ink to-chili/20',
    photoComment: 'PHOTO: Sophisticated street view of London restaurant storefront, elegant evening lighting.',
  },
  {
    num: '05',
    label: 'Doubletree NYC — New York Landing',
    quote: 'Landing in Manhattan was a lesson in scale and corporate discipline.',
    paragraph: "Moving to New York City to join corporate hotel operations was a massive shift in scale. I had to manage high-volume banqueting, room service, and multiple outlets within a corporate framework. The experience sharpened my financial discipline and logistics planning. It showed me how to keep creativity alive even under corporate constraints.",
    gradientClass: 'from-ink via-zinc-900 to-saffron/10',
    photoComment: 'PHOTO: Classic Manhattan street view, corporate lobby or busy banquet hall vibe.',
  },
  {
    num: '06',
    label: 'Devi NYC — Landmark Achievement',
    quote: 'At Devi, we proved that Indian cuisine deserves the highest global honors.',
    paragraph: "Serving as the Culinary Director and General Manager at Devi was one of the most defining moments of my career. Devi was the very first Indian restaurant in the United States to earn a Michelin star, breaking the stereotype of cheap curry houses. My role was to orchestrate a dining room experience that matched the culinary genius in the kitchen. It was proof that our cuisine, when treated with reverence and precision, can stand at the pinnacle of global gastronomy.",
    gradientClass: 'from-chili/20 via-ink to-saffron/10',
    photoComment: "PHOTO: Archival print of Devi's rich, colorful interior or Michelin guide feature.",
  },
  {
    num: '07',
    label: 'The Mark NYC — Elite Standard',
    quote: 'Working with Jean Georges redefined my understanding of luxury hospitality.',
    paragraph: "Running the food and beverage program at The Mark Hotel in collaboration with Jean Georges was an education in absolute luxury. The clientele here demands perfection, and there is no room for error. I managed everything from high-profile celebrity events to daily room service for the world's most discerning guests. It reinforced the idea that hospitality is in the details.",
    gradientClass: 'from-zinc-950 via-ink to-chili/15',
    photoComment: 'PHOTO: The Mark Hotel exterior, sleek modern black and white luxury framing.',
  },
  {
    num: '08',
    label: 'Kabab Culture — The Signature',
    quote: 'Today, I put my own name on the door and my own soul on the plate.',
    paragraph: 'Kabab Culture is the culmination of my entire journey, located in Franklin Township, New Jersey. It is where I bring together the classical training of Delhi, the operational scale of New York, and my love for live performance. Here, we honor the ancient art of tandoor cooking while curating a space where music and food meet. It is my own kitchen, my own stage, and my own legacy.',
    gradientClass: 'from-saffron/10 via-ink to-chili/20',
    photoComment: 'PHOTO: Modern Kabab Culture interior, warm copper accents, close-up tandoori meats.',
  },
];

export default function AboutChapters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        pin: innerRef.current,
      },
    });

    bioChapters.forEach((_, idx) => {
      if (idx === 0) return;

      const incomingPanel = panelsRef.current[idx];
      const incomingContent = contentRefs.current[idx];
      const outgoingPanel = panelsRef.current[idx - 1];

      if (outgoingPanel) {
        tl.to(outgoingPanel, {
          autoAlpha: 0,
          duration: 0.4,
          ease: 'power2.inOut',
        });
      }

      if (incomingPanel) {
        tl.to(incomingPanel, {
          autoAlpha: 1,
          duration: 0.4,
          ease: 'power2.inOut',
        }, '-=0.1');
      }

      if (incomingContent) {
        tl.fromTo(
          incomingContent,
          { y: 50, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.4, ease: 'power2.out' },
          '<'
        );
      }

      tl.to({}, { duration: 0.6 });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative w-full h-[800vh] bg-onyx overflow-hidden">
      {/* Pinned Viewport Container */}
      <div ref={innerRef} className="absolute top-0 left-0 w-full h-screen overflow-hidden">
        {bioChapters.map((chapter, idx) => (
          <div
            key={chapter.num}
            ref={(el) => { panelsRef.current[idx] = el; }}
            className={`absolute inset-0 w-full h-full flex items-center bg-gradient-to-tr ${chapter.gradientClass} transition-colors duration-500`}
            style={{
              zIndex: (idx + 1) * 10,
              opacity: idx === 0 ? 1 : 0,
              visibility: idx === 0 ? 'visible' : 'hidden',
              pointerEvents: idx === 0 ? 'auto' : 'none',
            }}
          >
            {/* Visual Panel Placeholder Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.15),transparent_70%)]" />

            <Container className="relative z-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Side: Chapter Number & Factual Narrative */}
                <div
                  ref={(el) => { contentRefs.current[idx] = el; }}
                  className="lg:col-span-7 space-y-6 text-left max-w-2xl"
                  style={{
                    opacity: idx === 0 ? 1 : 0,
                    visibility: idx === 0 ? 'visible' : 'hidden',
                  }}
                >
                  <span className="font-body text-8xl md:text-[10rem] font-light italic text-saffron/30 leading-none block select-none">
                    {chapter.num}
                  </span>

                  <div className="space-y-4">
                    <span className="font-body text-xs md:text-sm tracking-[0.2em] text-saffron uppercase block">
                      {chapter.label}
                    </span>

                    {/* Pull-quote treatment using Fraunces italic at a distinct size */}
                    <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-medium italic text-saffron leading-tight border-l-2 border-saffron/40 pl-4 py-1">
                      &ldquo;{chapter.quote}&rdquo;
                    </blockquote>

                    {/* Full Editorial Paragraph */}
                    <p className="font-body text-bone/80 text-sm md:text-base leading-relaxed">
                      {chapter.paragraph}
                    </p>
                  </div>
                </div>

                {/* Right Side: Photo Placeholder Visual Panel */}
                <div className="hidden lg:block lg:col-span-5 h-[400px] relative">
                  {/* Styled like a poster mount */}
                  <div className="absolute inset-0 bg-ink/60 rounded border border-saffron/10 p-3 overflow-hidden flex items-center justify-center">
                    {/* Hairline border inset */}
                    <div className="absolute inset-3 border border-saffron/25 rounded pointer-events-none" />

                    {/* Era-Appropriate Comment Tag */}
                    <div className="text-center z-10 p-6 space-y-2">
                      <span className="font-body text-[10px] uppercase tracking-widest text-saffron/60 block">Photo Target</span>
                      <span className="font-display text-sm font-semibold italic text-bone/70 block uppercase">
                        [{chapter.label}]
                      </span>
                    </div>

                    {/* Developer Photo Sourcing Guide */}
                    <div className="absolute bottom-6 right-6 z-20 max-w-[200px] text-right">
                      <span className="font-body text-[8px] uppercase tracking-wider text-saffron/40 block leading-tight bg-ink/60 p-2 border border-saffron/15 rounded">
                        {/* {chapter.photoComment} */}
                        {chapter.photoComment}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
}
