'use client';

import React from 'react';

interface Credential {
  year: string;
  role: string;
  organization: string;
  description: string;
  wordmark: string;
  location: string;
}

const credentials: Credential[] = [
  {
    year: '2008 – 2014',
    organization: 'DEVI RESTAURANT',
    role: 'Culinary Director & General Manager',
    description: 'Managed operations and guided concept scaling for the first Indian restaurant in the United States to be awarded a Michelin Star.',
    wordmark: 'DEVI',
    location: 'New York, NY',
  },
  {
    year: '2014 – 2018',
    organization: 'THE MARK RESTAURANT BY JEAN GEORGES',
    role: 'Operational Lead & General Manager',
    description: 'Directed daily front-of-house operations, guest relations, and culinary standards in partnership with Chef Jean-Georges Vongerichten.',
    wordmark: 'THE MARK',
    location: 'New York, NY',
  },
  {
    year: 'Early Career',
    organization: 'ITC MAURYA',
    role: 'Food & Beverage Lead',
    description: 'Formative training grounds in luxury hospitality, working with the legendary Bukhara and Dum Pukht culinary concepts.',
    wordmark: 'ITC MAURYA',
    location: 'New Delhi, India',
  },
];

export default function CredentialStack() {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <span className="font-body text-[#BFFF00] uppercase tracking-widest font-semibold mb-3 block">
          Track Record
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-black italic tracking-wide text-alabaster uppercase">
          Proven Leadership
        </h2>
      </div>

      <div className="relative max-w-4xl mx-auto border-l border-alabaster/10 pl-6 md:pl-10 space-y-12">
        {credentials.map((cred, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-onyx border border-[#BFFF00] group-hover:bg-[#BFFF00] transition-colors duration-300" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Wordmark logo placeholder */}
              <div className="flex flex-col items-start bg-alabaster/5 border border-alabaster/10 rounded-sm p-6 text-center w-full justify-center min-h-[100px] hover:border-[#BFFF00]/30 transition-all duration-300">
                <span className="font-display text-xl font-black tracking-widest text-[#BFFF00] text-left block w-full">
                  {cred.wordmark}
                </span>
                <span className="font-body text-[10px] text-alabaster/40 tracking-wider text-left block w-full mt-1">
                  {cred.location}
                </span>
              </div>

              {/* Roles & Descriptions */}
              <div className="md:col-span-2 space-y-2">
                <span className="font-body text-xs font-semibold text-[#BFFF00]/70 block">
                  {cred.year}
                </span>
                <h3 className="font-display text-xl font-bold text-alabaster uppercase">
                  {cred.role}
                </h3>
                <h4 className="font-body text-xs font-semibold text-alabaster/50 uppercase tracking-wider">
                  {cred.organization}
                </h4>
                <p className="font-body text-sm text-alabaster/70 leading-relaxed pt-2">
                  {cred.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
