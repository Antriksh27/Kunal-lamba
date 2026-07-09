'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

type InquiryType = 'wedding' | 'consulting' | 'media' | 'kabab';

function BookForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [inquiryType, setInquiryType] = useState<InquiryType | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Form State Payloads
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Conditional Fields
  const [weddingDetails, setWeddingDetails] = useState({
    date: '',
    eventType: 'Wedding',
    location: '',
    guestCount: '',
    message: '',
  });

  const [consultingDetails, setConsultingDetails] = useState({
    restaurantName: '',
    currentStage: 'Pre-opening',
    primaryNeed: 'Concept & menu development',
    timeline: '',
    message: '',
  });

  const [mediaDetails, setMediaDetails] = useState({
    outlet: '',
    deadline: '',
    message: '',
  });

  // Pre-select type from query params (e.g. from /catering page link)
  useEffect(() => {
    const typeParam = searchParams.get('eventType');
    if (typeParam === 'catering') {
      setInquiryType('wedding'); // We group catering into wedding/event form
      setWeddingDetails((prev) => ({ ...prev, eventType: 'Catering' }));
    } else if (typeParam === 'consulting') {
      setInquiryType('consulting');
    }
  }, [searchParams]);

  // Handle immediate Kabab Culture redirection on selection
  const handleTypeSelect = (type: InquiryType) => {
    if (type === 'kabab') {
      window.open('https://kababculture.com', '_blank', 'noopener,noreferrer');
      return;
    }
    setInquiryType(type);
    setErrorMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    let payload = {};
    if (inquiryType === 'wedding') payload = weddingDetails;
    if (inquiryType === 'consulting') payload = consultingDetails;
    if (inquiryType === 'media') payload = mediaDetails;

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          inquiryType,
          payload,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full bg-ivory min-h-[80vh] flex items-center justify-center py-20 text-ink">
        <Container className="max-w-2xl text-center">
          <div className="w-20 h-20 bg-saffron/10 border border-saffron rounded-full flex items-center justify-center mx-auto mb-8 text-saffron text-3xl font-bold">
            ✓
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black italic tracking-wide uppercase mb-6">
            Inquiry Submitted
          </h1>
          <p className="font-body text-ink/80 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-8">
            Thanks — Kunal&apos;s team will be in touch within 48 hours.
          </p>
          <Button variant="secondary" onClick={() => { setIsSuccess(false); setInquiryType(null); setName(''); setEmail(''); }}>
            Submit Another Request
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full bg-ivory min-h-screen py-20 text-ink">
      <Container className="max-w-4xl">
        <div className="text-center mb-16">
          <span className="font-body text-saffron uppercase tracking-widest font-semibold mb-3 block">
            Booking & Contact
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black italic tracking-wide uppercase">
            Let&apos;s Make It Happen.
          </h1>
        </div>

        {/* STEP 1: Inquiry Type Selector */}
        {!inquiryType ? (
          <div className="space-y-6">
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-ink/60 text-center mb-8">
              Select what you are planning:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Type: Wedding/Event */}
              <button
                onClick={() => handleTypeSelect('wedding')}
                className="flex flex-col items-center justify-center p-8 rounded border border-ink/15 bg-ink/[0.02] hover:border-saffron/60 hover:bg-saffron/5 transition-all duration-300 min-h-[160px] cursor-pointer group"
              >
                <span className="font-display text-2xl font-black italic text-ink group-hover:text-saffron transition-colors">
                  Wedding / Event
                </span>
                <span className="font-body text-xs text-ink/50 mt-2 text-center">
                  Live singing, bespoke catering, and private dinners
                </span>
              </button>

              {/* Type: Restaurant Consulting */}
              <button
                onClick={() => handleTypeSelect('consulting')}
                className="flex flex-col items-center justify-center p-8 rounded border border-ink/15 bg-ink/[0.02] hover:border-saffron/60 hover:bg-saffron/5 transition-all duration-300 min-h-[160px] cursor-pointer group"
              >
                <span className="font-display text-2xl font-black italic text-ink group-hover:text-saffron transition-colors">
                  Restaurant Consulting
                </span>
                <span className="font-body text-xs text-ink/50 mt-2 text-center">
                  Menu engineering, brand refreshes, and operations
                </span>
              </button>

              {/* Type: Media/Press */}
              <button
                onClick={() => handleTypeSelect('media')}
                className="flex flex-col items-center justify-center p-8 rounded border border-ink/15 bg-ink/[0.02] hover:border-saffron/60 hover:bg-saffron/5 transition-all duration-300 min-h-[160px] cursor-pointer group"
              >
                <span className="font-display text-2xl font-black italic text-ink group-hover:text-saffron transition-colors">
                  Media / Press
                </span>
                <span className="font-body text-xs text-ink/50 mt-2 text-center">
                  Broadcast interviews, TV hosting, and emcee inquiries
                </span>
              </button>

              {/* Type: Kabab Culture */}
              <button
                onClick={() => handleTypeSelect('kabab')}
                className="flex flex-col items-center justify-center p-8 rounded border border-ink/15 bg-ink/[0.02] hover:border-chili/60 hover:bg-chili/5 transition-all duration-300 min-h-[160px] cursor-pointer group"
              >
                <span className="font-display text-2xl font-black italic text-ink group-hover:text-chili transition-colors">
                  Kabab Culture
                </span>
                <span className="font-body text-xs text-ink/50 mt-2 text-center">
                  [Redirects directly to Kabab Culture NJ site]
                </span>
              </button>
            </div>
          </div>
        ) : (
          /* STEP 2: Conditional Forms */
          <div className="max-w-2xl mx-auto bg-bone/20 border border-ink/10 p-8 rounded-lg">
            
            {/* Header info */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-bone/5">
              <span className="font-display text-lg font-bold text-saffron uppercase">
                {inquiryType === 'wedding' && 'Wedding / Event Booking'}
                {inquiryType === 'consulting' && 'Restaurant Consulting'}
                {inquiryType === 'media' && 'Media & Press Inquiry'}
              </span>
              <button
                onClick={() => setInquiryType(null)}
                className="font-body text-xs text-ink/40 hover:text-saffron transition-colors cursor-pointer"
              >
                &larr; Change Type
              </button>
            </div>

            {errorMsg && (
              <div className="bg-red-900/20 border border-red-500/40 text-red-200 px-4 py-3 rounded text-sm mb-6 font-body">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Base Fields (Name, Email) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="baseName" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    id="baseName"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body placeholder-bone/30 focus:outline-none focus:border-saffron transition-colors"
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label htmlFor="baseEmail" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="baseEmail"
                    required
                    placeholder="john@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body placeholder-bone/30 focus:outline-none focus:border-saffron transition-colors"
                  />
                </div>
              </div>

              {/* Conditional Part: Wedding/Event */}
              {inquiryType === 'wedding' && (
                <div className="space-y-6 pt-4 border-t border-bone/5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="wDate" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                        Event Date
                      </label>
                      <input
                        type="date"
                        id="wDate"
                        required
                        value={weddingDetails.date}
                        onChange={(e) => setWeddingDetails(prev => ({ ...prev, date: e.target.value }))}
                        className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body focus:outline-none focus:border-saffron transition-colors"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="wType" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                        Event Type
                      </label>
                      <div className="relative">
                        <select
                          id="wType"
                          value={weddingDetails.eventType}
                          onChange={(e) => setWeddingDetails(prev => ({ ...prev, eventType: e.target.value }))}
                          className="w-full appearance-none bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body focus:outline-none focus:border-saffron transition-colors cursor-pointer"
                        >
                          <option value="Wedding">Wedding Performance</option>
                          <option value="Catering">Boutique Catering</option>
                          <option value="Wedding + Catering">Wedding Performance & Catering</option>
                          <option value="Corporate">Corporate Gala</option>
                          <option value="Private Dinner">Intimate Dinner (2-50 guests)</option>
                          <option value="Other">Other Private Event</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-bone/50">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="wLocation" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                        Location / Venue
                      </label>
                      <input
                        type="text"
                        id="wLocation"
                        required
                        placeholder="e.g. Manhattan, NY"
                        value={weddingDetails.location}
                        onChange={(e) => setWeddingDetails(prev => ({ ...prev, location: e.target.value }))}
                        className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body placeholder-bone/30 focus:outline-none focus:border-saffron transition-colors"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="wGuest" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                        Guest Count
                      </label>
                      <input
                        type="number"
                        id="wGuest"
                        required
                        placeholder="e.g. 120"
                        value={weddingDetails.guestCount}
                        onChange={(e) => setWeddingDetails(prev => ({ ...prev, guestCount: e.target.value }))}
                        className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body placeholder-bone/30 focus:outline-none focus:border-saffron transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="wMessage" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                      Message
                    </label>
                    <textarea
                      id="wMessage"
                      rows={4}
                      value={weddingDetails.message}
                      onChange={(e) => setWeddingDetails(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Please details timelines, specific food menu preferences, or singing requests..."
                      className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body placeholder-bone/30 focus:outline-none focus:border-saffron transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Conditional Part: Restaurant Consulting */}
              {inquiryType === 'consulting' && (
                <div className="space-y-6 pt-4 border-t border-bone/5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="cRestName" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                        Restaurant Name / Group
                      </label>
                      <input
                        type="text"
                        id="cRestName"
                        required
                        placeholder="e.g. Taj Bistro"
                        value={consultingDetails.restaurantName}
                        onChange={(e) => setConsultingDetails(prev => ({ ...prev, restaurantName: e.target.value }))}
                        className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body placeholder-bone/30 focus:outline-none focus:border-saffron transition-colors"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="cStage" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                        Current Stage
                      </label>
                      <div className="relative">
                        <select
                          id="cStage"
                          value={consultingDetails.currentStage}
                          onChange={(e) => setConsultingDetails(prev => ({ ...prev, currentStage: e.target.value }))}
                          className="w-full appearance-none bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body focus:outline-none focus:border-saffron transition-colors cursor-pointer"
                        >
                          <option value="Pre-opening">Pre-opening</option>
                          <option value="Refresh">Brand Refresh / Pivot</option>
                          <option value="Ongoing Operations">Ongoing Operations</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-bone/50">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="cNeed" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                        Primary Need
                      </label>
                      <div className="relative">
                        <select
                          id="cNeed"
                          value={consultingDetails.primaryNeed}
                          onChange={(e) => setConsultingDetails(prev => ({ ...prev, primaryNeed: e.target.value }))}
                          className="w-full appearance-none bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body focus:outline-none focus:border-saffron transition-colors cursor-pointer"
                        >
                          <option value="Concept & menu development">Concept & menu development</option>
                          <option value="Kitchen & interior design input">Kitchen & interior design input</option>
                          <option value="Staff recruitment">Staff recruitment</option>
                          <option value="Sales & marketing strategy">Sales & marketing strategy</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-bone/50">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="cTimeline" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                        Project Timeline
                      </label>
                      <input
                        type="text"
                        id="cTimeline"
                        required
                        placeholder="e.g. Immediate / Next 3 months"
                        value={consultingDetails.timeline}
                        onChange={(e) => setConsultingDetails(prev => ({ ...prev, timeline: e.target.value }))}
                        className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body placeholder-bone/30 focus:outline-none focus:border-saffron transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="cMessage" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                      Message
                    </label>
                    <textarea
                      id="cMessage"
                      rows={4}
                      value={consultingDetails.message}
                      onChange={(e) => setConsultingDetails(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Please details objectives, current seating/capacity, cuisine themes..."
                      className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body placeholder-bone/30 focus:outline-none focus:border-saffron transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Conditional Part: Media/Press */}
              {inquiryType === 'media' && (
                <div className="space-y-6 pt-4 border-t border-bone/5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="mOutlet" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                        Outlet / Publication
                      </label>
                      <input
                        type="text"
                        id="mOutlet"
                        required
                        placeholder="e.g. Jus Punjabi / Star Plus"
                        value={mediaDetails.outlet}
                        onChange={(e) => setMediaDetails(prev => ({ ...prev, outlet: e.target.value }))}
                        className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body placeholder-bone/30 focus:outline-none focus:border-saffron transition-colors"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="mDeadline" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                        Deadline
                      </label>
                      <input
                        type="text"
                        id="mDeadline"
                        required
                        placeholder="e.g. July 25th / Urgent"
                        value={mediaDetails.deadline}
                        onChange={(e) => setMediaDetails(prev => ({ ...prev, deadline: e.target.value }))}
                        className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body placeholder-bone/30 focus:outline-none focus:border-saffron transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="mMessage" className="font-body text-xs font-semibold uppercase tracking-wider text-bone/70">
                      Message
                    </label>
                    <textarea
                      id="mMessage"
                      rows={4}
                      value={mediaDetails.message}
                      onChange={(e) => setMediaDetails(prev => ({ ...prev, message: e.target.value }))}
                      placeholder="Please details media requirements, interview questions, or guest appearance schedules..."
                      className="w-full bg-ink/60 border border-bone/20 rounded px-4 py-3 text-sm text-bone font-body placeholder-bone/30 focus:outline-none focus:border-saffron transition-colors resize-none"
                    />
                  </div>
                </div>
              )}

              {/* Submit CTA - marigold active click */}
              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="primary"
                  className="w-full py-4 text-sm font-bold uppercase tracking-wider !bg-chili text-ivory disabled:bg-opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Check Availability'}
                </Button>
              </div>

            </form>
          </div>
        )}
      </Container>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-ivory text-ink flex items-center justify-center font-body text-sm tracking-wider">Loading...</div>}>
      <BookForm />
    </Suspense>
  );
}
