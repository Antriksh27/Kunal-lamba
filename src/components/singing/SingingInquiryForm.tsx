'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';

export default function SingingInquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    eventDate: '',
    eventType: 'Wedding',
    location: '',
    guestCount: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request or integration with Sanity
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center py-12 px-8 rounded-sm border border-[#BFFF00]/30 bg-onyx/40 backdrop-blur-md animate-in fade-in duration-500">
        <div className="w-16 h-16 bg-[#BFFF00]/10 border border-[#BFFF00] rounded-full flex items-center justify-center mx-auto mb-6 text-[#BFFF00] text-2xl font-bold">
          ✓
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-black italic tracking-wide text-alabaster mb-4 uppercase">
          Inquiry Received!
        </h3>
        <p className="font-body text-alabaster/80 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-6">
          Thank you for checking availability. Kunal&apos;s team will review your event details and follow up within 48 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="font-body text-xs font-semibold uppercase tracking-widest text-[#BFFF00] hover:text-alabaster transition-colors cursor-pointer"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-onyx/80 backdrop-blur-sm p-8 rounded-sm border border-alabaster/10 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Event Date */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="eventDate" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
              Event Date
            </label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              required
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full bg-alabaster/5 border border-alabaster/10 rounded-sm px-4 py-3 text-sm text-alabaster font-body focus:outline-none focus:border-[#BFFF00] transition-colors"
            />
          </div>

          {/* Event Type */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="eventType" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
              Event Type
            </label>
            <div className="relative">
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full appearance-none bg-alabaster/5 border border-alabaster/10 rounded-sm px-4 py-3 text-sm text-alabaster font-body focus:outline-none focus:border-[#BFFF00] transition-colors cursor-pointer"
              >
                <option value="Wedding" className="bg-onyx text-alabaster">Wedding</option>
                <option value="Corporate" className="bg-onyx text-alabaster">Corporate Event</option>
                <option value="Private Party" className="bg-onyx text-alabaster">Private Party</option>
                <option value="Other" className="bg-onyx text-alabaster">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-alabaster/50">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Location */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="location" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
              Event Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              placeholder="e.g. New York, NY"
              value={formData.location}
              onChange={handleChange}
              className="w-full bg-alabaster/5 border border-alabaster/10 rounded-sm px-4 py-3 text-sm text-alabaster font-body placeholder-alabaster/30 focus:outline-none focus:border-[#BFFF00] transition-colors"
            />
          </div>

          {/* Guest Count */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="guestCount" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
              Estimated Guest Count
            </label>
            <input
              type="number"
              id="guestCount"
              name="guestCount"
              required
              placeholder="e.g. 150"
              value={formData.guestCount}
              onChange={handleChange}
              className="w-full bg-alabaster/5 border border-alabaster/10 rounded-sm px-4 py-3 text-sm text-alabaster font-body placeholder-alabaster/30 focus:outline-none focus:border-[#BFFF00] transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
            Tell Us About Your Event
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail event timelines, song requests, or special requirements..."
            className="w-full bg-alabaster/5 border border-alabaster/10 rounded-sm px-4 py-3 text-sm text-alabaster font-body placeholder-alabaster/30 focus:outline-none focus:border-[#BFFF00] transition-colors resize-none"
          />
        </div>

        {/* Submit button */}
        <div>
          <button 
            type="submit" 
            className="w-full px-6 py-4 border border-[#BFFF00]/50 rounded-sm font-body text-sm font-bold uppercase tracking-wider text-[#BFFF00] hover:bg-[#BFFF00] hover:text-onyx transition-all duration-300 backdrop-blur-sm"
          >
            Check Availability
          </button>
        </div>

      </form>
    </div>
  );
}
