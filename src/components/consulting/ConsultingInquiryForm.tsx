'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';

export default function ConsultingInquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    restaurantName: '',
    currentStage: 'Pre-opening',
    primaryNeed: 'Concept & menu development',
    timeline: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-2xl mx-auto text-center py-12 px-8 rounded-sm border border-[#BFFF00]/30 bg-onyx/40 backdrop-blur-md animate-in fade-in duration-500 shadow-2xl">
        <div className="w-16 h-16 bg-[#BFFF00]/10 border border-[#BFFF00] rounded-full flex items-center justify-center mx-auto mb-6 text-[#BFFF00] text-2xl font-bold">
          ✓
        </div>
        <h3 className="font-display text-2xl md:text-3xl font-black italic tracking-wide text-alabaster mb-4 uppercase">
          Inquiry Received!
        </h3>
        <p className="font-body text-alabaster/80 text-sm md:text-base max-w-md mx-auto leading-relaxed mb-6">
          Thank you for reaching out. Kunal Lamba will review your restaurant details and contact you within 48 hours to discuss potential collaboration.
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
    <div className="w-full max-w-2xl mx-auto bg-onyx/80 backdrop-blur-md p-8 rounded-sm border border-alabaster/10 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Restaurant Name */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="restaurantName" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
              Restaurant Name / Group
            </label>
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              required
              placeholder="e.g. Spice Table NYC"
              value={formData.restaurantName}
              onChange={handleChange}
              className="w-full bg-onyx/60 border border-alabaster/20 rounded-sm px-4 py-3 text-sm text-alabaster font-body placeholder-alabaster/30 focus:outline-none focus:border-[#BFFF00] transition-colors"
            />
          </div>

          {/* Current Stage */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="currentStage" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
              Current Stage
            </label>
            <div className="relative">
              <select
                id="currentStage"
                name="currentStage"
                value={formData.currentStage}
                onChange={handleChange}
                className="w-full appearance-none bg-onyx/60 border border-alabaster/20 rounded-sm px-4 py-3 text-sm text-alabaster font-body focus:outline-none focus:border-[#BFFF00] transition-colors cursor-pointer"
              >
                <option value="Pre-opening">Pre-opening</option>
                <option value="Refresh">Brand Refresh / Pivot</option>
                <option value="Ongoing Operations">Ongoing Operations</option>
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
          {/* Primary Need */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="primaryNeed" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
              Primary Need
            </label>
            <div className="relative">
              <select
                id="primaryNeed"
                name="primaryNeed"
                value={formData.primaryNeed}
                onChange={handleChange}
                className="w-full appearance-none bg-onyx/60 border border-alabaster/20 rounded-sm px-4 py-3 text-sm text-alabaster font-body focus:outline-none focus:border-[#BFFF00] transition-colors cursor-pointer"
              >
                <option value="Concept & menu development">Concept & menu development</option>
                <option value="Kitchen & interior design input">Kitchen & interior design input</option>
                <option value="Staff recruitment">Staff recruitment</option>
                <option value="Sales & marketing strategy">Sales & marketing strategy</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-alabaster/50">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="timeline" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
              Project Timeline
            </label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              required
              placeholder="e.g. Immediate / Next 3 Months"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full bg-onyx/60 border border-alabaster/20 rounded-sm px-4 py-3 text-sm text-alabaster font-body placeholder-alabaster/30 focus:outline-none focus:border-[#BFFF00] transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
            Tell Us About Your Project & Objectives
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please detail seating capacity, location, cuisine style, and scope of engagement..."
            className="w-full bg-onyx/60 border border-alabaster/20 rounded-sm px-4 py-3 text-sm text-alabaster font-body placeholder-alabaster/30 focus:outline-none focus:border-[#BFFF00] transition-colors resize-none"
          />
        </div>

        {/* Submit button (CTA = marigold) */}
        <div>
          <button 
            type="submit" 
            className="w-full py-4 text-sm font-bold uppercase tracking-[0.2em] border border-[#BFFF00]/50 rounded-sm text-[#BFFF00] hover:bg-[#BFFF00] hover:text-onyx transition-all duration-300 backdrop-blur-sm"
          >
            Start Conversation
          </button>
        </div>

      </form>
    </div>
  );
}
