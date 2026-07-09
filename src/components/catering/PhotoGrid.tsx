'use client';

import React from 'react';

interface DishPhoto {
  id: number;
  title: string;
  description: string;
  aspectClass: string;
  imagePath: string;
}

const dishes: DishPhoto[] = [
  { id: 1, title: 'Smoked Galouti Kabab', description: 'Ultra-fine lamb patties smoked with cloves and ghee, served on saffron sheermal.', aspectClass: 'aspect-[3/4]', imagePath: '/dish1.png' },
  { id: 2, title: 'Tandoori Truffle Lobster', description: 'Fresh lobster tails marinated in lime, tandoori spices, and white truffle oil.', aspectClass: 'aspect-[4/3]', imagePath: '/dish2.png' },
  { id: 3, title: 'Deconstructed Shahi Tukda', description: 'Crispy ghee-fried bread rounds with rabri mousse, gold leaf, and pistachio dust.', aspectClass: 'aspect-square', imagePath: '/dish3.png' },
  { id: 4, title: 'Wild Mushroom Galette', description: 'Morels and chanterelles sauteed with ghee and garam masala, in a flaky pastry crust.', aspectClass: 'aspect-[3/4]', imagePath: '/dish4.png' },
  { id: 5, title: 'Saffron Cardamom Biryani', description: 'Fragrant long-grain basmati layered with marinated lamb, saffron threads, and rose water.', aspectClass: 'aspect-square', imagePath: '/dish4.png' },
  { id: 6, title: 'Beetroot & Goat Cheese Tikki', description: 'Crispy pan-seared beetroot patties stuffed with local spiced goat cheese.', aspectClass: 'aspect-[4/3]', imagePath: '/dish2.png' },
  { id: 7, title: 'Charred Octopus Tikka', description: 'Tender octopus tentacles marinated in Kashmiri chili paste and charcoal grilled.', aspectClass: 'aspect-[3/4]', imagePath: '/dish1.png' },
  { id: 8, title: 'Pistachio Rabri Kulfi', description: 'Traditional slow-churned Indian ice cream infused with cardamom and toasted pistachios.', aspectClass: 'aspect-[4/3]', imagePath: '/dish3.png' },
  { id: 9, title: 'Spiced Fig & Duck Samosa', description: 'Crisp pastry triangles stuffed with slow-roasted duck and sweet fig compote.', aspectClass: 'aspect-square', imagePath: '/dish3.png' },
];

export default function PhotoGrid() {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <span className="font-body text-[#BFFF00] uppercase tracking-[0.2em] font-semibold mb-3 block">
          Visual Curation
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-black italic tracking-wide text-alabaster uppercase">
          Plated Dish Showcase
        </h2>
        <p className="font-body text-alabaster/60 text-xs md:text-sm mt-3 max-w-lg mx-auto">
          [PLACEHOLDER — These representations stand in for Kunal&apos;s custom plated dish photography. Real assets will be loaded once available.]
        </p>
      </div>

      {/* Responsive Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className={`break-inside-avoid relative w-full ${dish.aspectClass} rounded-sm border border-alabaster/10 bg-onyx overflow-hidden group hover:border-[#BFFF00]/60 transition-all duration-500 shadow-xl`}
          >
            {/* Generated Food Photography Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${dish.imagePath}')` }}
            />
            {/* Overlay gradient for readability */}
            <div className={`absolute inset-0 bg-gradient-to-t from-onyx via-onyx/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
            
            {/* Ambient Inner border overlay on hover */}
            <div className="absolute inset-0 border border-[#BFFF00]/0 group-hover:border-[#BFFF00]/40 rounded-sm transition-all duration-500 m-2 pointer-events-none" />

            {/* Plated details overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-onyx via-onyx/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="font-display text-xl font-black italic text-alabaster mb-1 drop-shadow-md">
                {dish.title}
              </h3>
              <p className="font-body text-xs text-alabaster/80 leading-relaxed font-medium">
                {dish.description}
              </p>
            </div>

            {/* Static Card Badge for context */}
            <div className="absolute top-4 right-4 bg-onyx/80 backdrop-blur-sm border border-alabaster/10 px-2.5 py-0.5 rounded-sm text-[10px] uppercase font-body tracking-wider text-alabaster/70 group-hover:hidden">
              Plated Concept
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
