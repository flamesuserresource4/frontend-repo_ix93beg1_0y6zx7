import React from 'react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';

const PixelNavbar = ({ cartCount = 0, onSearch }) => {
  const [query, setQuery] = React.useState('');

  const submit = (e) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <button className="md:hidden border-4 border-black bg-yellow-300 px-2 py-2 active:translate-y-0.5 transition-transform shadow-[4px_4px_0_0_#000]">
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 select-none">
              <span className="text-2xl leading-none">🟪</span>
              <h1 className="font-black text-xl tracking-tight">PixelMart</h1>
            </div>
          </div>

          <form onSubmit={submit} className="hidden md:flex items-stretch w-1/2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search retro goodies..."
              className="flex-1 border-4 border-black px-3 py-2 rounded-none focus:outline-none"
            />
            <button
              type="submit"
              className="border-4 border-black bg-green-300 px-4 py-2 -ml-1 hover:bg-green-400 active:translate-y-0.5 transition-transform shadow-[4px_4px_0_0_#000]"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>

          <div className="flex items-center gap-2">
            <button className="hidden md:inline-flex items-center gap-2 border-4 border-black bg-blue-300 px-3 py-2 hover:bg-blue-400 active:translate-y-0.5 transition-transform shadow-[4px_4px_0_0_#000]">
              <User className="w-5 h-5" />
              <span className="font-bold">Sign in</span>
            </button>
            <div className="relative">
              <button className="border-4 border-black bg-pink-300 px-3 py-2 hover:bg-pink-400 active:translate-y-0.5 transition-transform shadow-[4px_4px_0_0_#000]">
                <ShoppingCart className="w-5 h-5" />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-0.5 border-2 border-white">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="md:hidden pb-3">
          <div className="flex">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search retro goodies..."
              className="flex-1 border-4 border-black px-3 py-2 rounded-none focus:outline-none"
            />
            <button
              type="submit"
              className="border-4 border-black bg-green-300 px-4 py-2 -ml-1 hover:bg-green-400 active:translate-y-0.5 transition-transform shadow-[4px_4px_0_0_#000]"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default PixelNavbar;
