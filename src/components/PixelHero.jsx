import React from 'react';
import { Star } from 'lucide-react';

const PixelHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-yellow-200 via-pink-200 to-blue-200 border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 border-4 border-black -skew-x-3 mb-4">
            <Star className="w-4 h-4" />
            <span className="font-bold text-sm tracking-tight">New Drop</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-none mb-4">
            Level up your setup with pixel-perfect gear
          </h2>
          <p className="text-lg md:text-xl text-black/80 max-w-xl mb-6">
            Retro consoles, mechanical keyboards, and art prints inspired by the 8-bit era. Crafted for nostalgia, built for today.
          </p>
          <div className="flex gap-3">
            <a href="#featured" className="border-4 border-black bg-green-300 px-5 py-3 font-bold hover:bg-green-400 active:translate-y-0.5 transition-transform shadow-[6px_6px_0_0_#000]">
              Shop featured
            </a>
            <a href="#categories" className="border-4 border-black bg-white px-5 py-3 font-bold hover:bg-gray-100 active:translate-y-0.5 transition-transform">
              Explore categories
            </a>
          </div>
        </div>
        <div className="relative aspect-square">
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-1">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="bg-black/10" />
            ))}
          </div>
          <div className="relative z-10 h-full w-full flex items-center justify-center">
            <div className="bg-white border-4 border-black p-6 shadow-[10px_10px_0_0_#000]">
              <div className="text-7xl">🎮</div>
              <p className="text-center font-bold mt-2">Retro Joy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PixelHero;
