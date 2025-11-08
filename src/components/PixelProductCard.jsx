import React from 'react';
import { Plus } from 'lucide-react';

const PixelProductCard = ({ product, onAdd }) => {
  return (
    <div className="group border-4 border-black bg-white p-4 flex flex-col shadow-[6px_6px_0_0_#000] hover:shadow-[10px_10px_0_0_#000] transition-shadow">
      <div className="aspect-square mb-3 relative overflow-hidden border-4 border-black">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full"
        />
        {product.badge && (
          <span className="absolute top-2 left-2 bg-yellow-300 border-2 border-black text-xs font-bold px-2 py-1">
            {product.badge}
          </span>
        )}
      </div>
      <h3 className="font-black text-lg mb-1 line-clamp-2 min-h-[3.5rem]">{product.title}</h3>
      <p className="text-sm text-gray-600 mb-2 line-clamp-2 min-h-[2.5rem]">{product.description}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="font-extrabold text-xl">${product.price}</span>
        <button
          onClick={() => onAdd?.(product)}
          className="inline-flex items-center gap-2 border-4 border-black bg-pink-300 px-3 py-2 font-bold hover:bg-pink-400 active:translate-y-0.5 transition-transform"
        >
          <Plus className="w-4 h-4" /> Add
        </button>
      </div>
    </div>
  );
};

export default PixelProductCard;
