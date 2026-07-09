'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';

export default function InquiryForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'singing',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send formData to the backend or CMS database.
    // For now, redirect to the booking page with query parameters.
    const queryParams = new URLSearchParams(formData).toString();
    router.push(`/book?${queryParams}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-onyx/80 backdrop-blur-sm border border-alabaster/10 p-8 rounded-sm shadow-2xl">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        {/* Name Input */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full bg-alabaster/5 border border-alabaster/10 rounded-sm px-4 py-3 text-sm text-alabaster font-body placeholder-alabaster/30 focus:outline-none focus:border-[#BFFF00] transition-colors"
          />
        </div>

        {/* Email Input */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="font-body text-xs font-semibold uppercase tracking-wider text-alabaster/70">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            className="w-full bg-alabaster/5 border border-alabaster/10 rounded-sm px-4 py-3 text-sm text-alabaster font-body placeholder-alabaster/30 focus:outline-none focus:border-[#BFFF00] transition-colors"
          />
        </div>

        {/* Event Type Dropdown */}
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
              <option value="singing" className="bg-onyx text-alabaster">Live Singing</option>
              <option value="catering" className="bg-onyx text-alabaster">Boutique Catering</option>
              <option value="consulting" className="bg-onyx text-alabaster">Restaurant Consulting</option>
              <option value="kabab-culture" className="bg-onyx text-alabaster">Kabab Culture Event</option>
              <option value="media" className="bg-onyx text-alabaster">TV & Media Project</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-alabaster/50">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button 
            type="submit" 
            className="w-full px-6 py-3 border border-[#BFFF00]/50 rounded-sm font-body text-xs font-semibold uppercase tracking-[0.2em] text-[#BFFF00] hover:bg-[#BFFF00] hover:text-onyx transition-all duration-300 backdrop-blur-sm"
          >
            Let's Talk
          </button>
        </div>
      </form>
    </div>
  );
}
