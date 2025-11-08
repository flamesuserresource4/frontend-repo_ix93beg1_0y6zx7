import React from 'react';
import PixelNavbar from './components/PixelNavbar';
import PixelHero from './components/PixelHero';
import PixelProductCard from './components/PixelProductCard';
import PixelFooter from './components/PixelFooter';

const PRODUCTS = [
  {
    id: 1,
    title: '8-Bit Handheld Classic',
    description: 'Portable console with 300+ retro titles and a crispy IPS screen.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1661110442573-aba900bed41e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHw4LUJpdCUyMEhhbmRoZWxkJTIwQ2xhc3NpY3xlbnwwfDB8fHwxNzYyNjA5NzQ0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    badge: 'HOT',
  },
  {
    id: 2,
    title: 'Pixel Mechanical Keyboard',
    description: 'Hot-swappable switches, PBT keycaps, and a pixel-art LED matrix.',
    price: 129,
    image: 'https://images.unsplash.com/photo-1602098256221-18027495cf75?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQaXhlbCUyME1lY2hhbmljYWwlMjBLZXlib2FyZHxlbnwwfDB8fHwxNzYyNjA5NzQ0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    badge: 'NEW',
  },
  {
    id: 3,
    title: 'CRT-Inspired Monitor',
    description: 'Modern 120Hz panel with a chunky retro frame and scanline mode.',
    price: 399,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Pixel Art Poster Pack',
    description: 'Set of 5 archival-quality prints to decorate your command center.',
    price: 39,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Chiptune Headphones',
    description: 'Warm, nostalgic sound signature tuned for old-school bops.',
    price: 79,
    image: 'https://images.unsplash.com/photo-1704440278730-b420f5892700?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGlwdHVuZSUyMEhlYWRwaG9uZXN8ZW58MHwwfHx8MTc2MjYwOTc0NXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 6,
    title: 'Arcade Fight Stick',
    description: 'All-metal case with Sanwa parts and a pixel grid top plate.',
    price: 159,
    image: 'https://images.unsplash.com/photo-1721372261034-525a25737f5f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcmNhZGUlMjBGaWdodCUyMFN0aWNrfGVufDB8MHx8fDE3NjI2MDk3NDZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

function App() {
  const [cart, setCart] = React.useState([]);
  const [search, setSearch] = React.useState('');

  const addToCart = (product) => {
    setCart((c) => [...c, product]);
  };

  const handleSearch = (q) => setSearch(q);

  const filtered = PRODUCTS.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[url('https://i.imgur.com/2nCt3Sbl.png')] bg-repeat">
      <PixelNavbar cartCount={cart.length} onSearch={handleSearch} />
      <main>
        <PixelHero />

        <section id="featured" className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl md:text-3xl font-black">Featured goodies</h3>
            <div className="inline-block bg-yellow-200 border-4 border-black px-3 py-1 font-bold">{filtered.length} items</div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <PixelProductCard key={p.id} product={p} onAdd={addToCart} />
            ))}
          </div>
        </section>

        <section id="categories" className="max-w-6xl mx-auto px-4 pb-12">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Consoles', emoji: '🕹️', color: 'bg-pink-200' },
              { title: 'Keyboards', emoji: '⌨️', color: 'bg-green-200' },
              { title: 'Art & Decor', emoji: '🖼️', color: 'bg-blue-200' },
            ].map((cat) => (
              <a key={cat.title} href="#featured" className={`border-4 border-black ${cat.color} p-6 flex items-center justify-between shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] transition-shadow`}>
                <div>
                  <div className="text-4xl">{cat.emoji}</div>
                  <div className="font-black text-xl">{cat.title}</div>
                </div>
                <div className="text-sm font-bold">Browse →</div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <PixelFooter />
    </div>
  );
}

export default App;
