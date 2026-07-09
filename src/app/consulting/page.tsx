'use client';

import React from 'react';
import CredentialStack from '@/components/consulting/CredentialStack';
import ConsultingInquiryForm from '@/components/consulting/ConsultingInquiryForm';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export default function ConsultingPage() {
  const services = [
    {
      title: 'Concept & Menu Development',
      description: 'Creating distinct culinary themes, designing recipe databases, sourcing ingredients, and engineering menus to balance culinary excellence with cost margins.',
    },
    {
      title: 'Kitchen & Interior Design Input',
      description: 'Consulting on line workflows, equipment placement, and layout designs to optimize cooking speed, service efficiency, and guest environment styling.',
    },
    {
      title: 'Staff Recruitment & Training',
      description: 'Assisting in headhunting culinary talent, structuring operational management roles, and conducting training to build elite hospitality service standards.',
    },
    {
      title: 'Sales & Marketing Strategy',
      description: 'Developing brand identity blueprints, pop-up events, media engagement plans, and promotional launch campaigns to maximize market positioning.',
    },
  ];

  return (
    <div className="w-full bg-onyx min-h-screen text-alabaster">
      {/* HERO SECTION */}
      <section className="relative w-full py-28 bg-onyx border-b border-alabaster/10 overflow-hidden">
        <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
        <Container className="relative z-10 flex flex-col items-center text-center">
          <span className="font-body text-[#BFFF00] uppercase tracking-[0.2em] font-semibold mb-3 block px-4 py-1.5 bg-[#BFFF00]/10 border border-[#BFFF00]/20 rounded-sm">
            Advisory & Operations
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-black italic tracking-wide text-alabaster uppercase mb-6 leading-tight max-w-4xl">
            Two Decades.<br />Three Continents.<br />One Michelin Star.
          </h1>
          <p className="font-body text-alabaster/80 text-base sm:text-lg max-w-2xl leading-relaxed">
            Uniquely positioning your restaurant brand for market success. Kunal Lamba provides practical operational advisory, leveraging two decades of direct experience as an elite restaurant builder, general manager, and concept director.
          </p>
        </Container>
      </section>

      {/* SERVICES LIST */}
      <Section className="border-b border-alabaster/10 bg-onyx">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <span className="font-body text-[#BFFF00] uppercase tracking-widest font-semibold block mb-3">
                Capabilities
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black italic text-alabaster uppercase leading-tight">
                Operational Services
              </h2>
              <p className="font-body text-sm text-alabaster/60 mt-4 leading-relaxed">
                A fast, factual framework designed to optimize your restaurant&apos;s bottom-line performance. No fluff, just operational results.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex gap-6 items-start pb-6 border-b border-alabaster/10 last:border-0 last:pb-0">
                  <span className="font-display text-xl font-bold text-[#BFFF00]/40">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-alabaster uppercase mb-2">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-alabaster/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CREDENTIAL STACK */}
      <Section className="border-b border-alabaster/10 bg-onyx">
        <Container>
          <CredentialStack />
        </Container>
      </Section>

      {/* CASE STUDY */}
      <Section className="border-b border-alabaster/10 bg-onyx">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Case study text */}
            <div className="space-y-6">
              <span className="font-body text-[#BFFF00] uppercase tracking-widest font-bold block">
                Proof of Concept
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-black italic tracking-wide text-alabaster uppercase leading-tight">
                Le Malt Lounge
              </h2>
              <p className="font-body text-alabaster/70 text-sm md:text-base leading-relaxed">
                <strong className="text-alabaster">Project Location:</strong> Colonia, NJ<br />
                <strong className="text-alabaster">Scope Summary:</strong> Operational concept refresh and comprehensive menu development. Kunal redesigned the upscale lounge culinary workflow, modernized classic recipe profiles, and introduced kitchen efficiency standards that reduced ticket times by 20% while maintaining premium flavor profiles.
              </p>
              <p className="font-body text-alabaster/50 text-xs">
                [PLACEHOLDER — Please confirm actual scope details and operational statistics with Kunal prior to publishing.]
              </p>
            </div>

            {/* Before/After visual placeholder */}
            <div className="space-y-4">
              <span className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/40 block">Visual Transformation</span>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] rounded-sm border border-alabaster/10 bg-alabaster/5 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center">
                  <span className="font-display text-sm font-bold text-alabaster/50 uppercase">Before</span>
                  <span className="font-body text-[10px] text-alabaster/30 mt-1">[PLACEHOLDER]</span>
                </div>
                <div className="aspect-[4/3] rounded-sm border border-[#BFFF00]/30 bg-[#BFFF00]/5 backdrop-blur-sm flex flex-col items-center justify-center p-4 text-center shadow-lg">
                  <span className="font-display text-sm font-bold text-[#BFFF00] uppercase">After</span>
                  <span className="font-body text-[10px] text-[#BFFF00]/60 mt-1">[PLACEHOLDER]</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA + FORM */}
      <section id="inquiry" className="relative w-full py-24 bg-onyx overflow-hidden">
        <div className="absolute inset-0 bg-onyx/40 mix-blend-multiply pointer-events-none" />
        <Container className="relative z-10 flex flex-col items-center">
          <div className="text-center mb-10 max-w-xl">
            <h2 className="font-display text-3xl md:text-4xl font-black italic text-alabaster uppercase mb-4">
              Start a Consulting Conversation
            </h2>
            <p className="font-body text-alabaster/80 text-sm">
              Ready to launch, refresh, or scale your hospitality brand? Provide details about your business and needs below to connect.
            </p>
          </div>

          <ConsultingInquiryForm />
        </Container>
      </section>
    </div>
  );
}
