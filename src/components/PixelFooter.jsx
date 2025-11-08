import React from 'react';
import { Github, Twitter, Heart } from 'lucide-react';

const PixelFooter = () => {
  return (
    <footer className="mt-16 border-t-4 border-black bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2 select-none">
            <span className="text-2xl leading-none">🟪</span>
            <span className="font-black text-lg tracking-tight">PixelMart</span>
          </div>
          <p className="text-sm text-gray-600">
            A tiny store with a big love for chonky pixels and retro vibes.
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-extrabold mb-2">Support</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
            <li><a href="#" className="hover:underline">Warranty</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-extrabold mb-2">Follow</h4>
          <div className="flex gap-3">
            <a href="#" className="inline-flex items-center gap-2 border-4 border-black bg-white px-3 py-2 hover:bg-gray-100 active:translate-y-0.5 transition-transform">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href="#" className="inline-flex items-center gap-2 border-4 border-black bg-blue-200 px-3 py-2 hover:bg-blue-300 active:translate-y-0.5 transition-transform">
              <Twitter className="w-4 h-4" /> Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="border-t-4 border-black bg-yellow-200 py-3 text-center text-sm">
        Built with <Heart className="w-4 h-4 inline mx-1" /> for the pixel people.
      </div>
    </footer>
  );
};

export default PixelFooter;
