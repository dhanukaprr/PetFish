import React, { useState } from 'react';
import { fishProducts } from '../data';
import { FishProduct } from '../types';
import RevealOnScroll from '../components/RevealOnScroll';
import { Info, Plus } from 'lucide-react';

const Products: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Expert'>('All');

  const filteredProducts = filter === 'All' 
    ? fishProducts 
    : fishProducts.filter(p => p.difficulty === filter);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <RevealOnScroll>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Aquatic Collection</h1>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            Browse our hand-picked selection of premium fish. Each specimen is quarantined and health-checked before shipping.
          </p>

          {/* Filters */}
          <div className="inline-flex p-1 rounded-xl bg-slate-800/50 border border-white/10 backdrop-blur-sm">
            {(['All', 'Beginner', 'Intermediate', 'Expert'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setFilter(lvl)}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  filter === lvl
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((fish, index) => (
          <RevealOnScroll key={fish.id} delay={index * 100}>
            <ProductCard fish={fish} />
          </RevealOnScroll>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          No fish found for this difficulty level.
        </div>
      )}
    </div>
  );
};

interface ProductCardProps {
  fish: FishProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ fish }) => {
  return (
    <div className="group relative bg-slate-800/30 border border-white/5 rounded-2xl overflow-hidden hover:bg-slate-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20">
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={fish.image}
          alt={fish.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
          {fish.difficulty}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              {fish.name}
            </h3>
            <p className="text-xs text-slate-500 italic mb-2">{fish.scientificName}</p>
          </div>
          <span className="text-lg font-bold text-cyan-300">${fish.price.toFixed(2)}</span>
        </div>

        <p className="text-slate-400 text-sm line-clamp-2 mb-4 h-10">
          {fish.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {fish.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-white/10 hover:bg-white/20 text-white py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm border border-white/5">
            <Info size={16} /> Details
          </button>
          <button className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-white py-2.5 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-sm shadow-lg shadow-cyan-500/20">
            <Plus size={16} /> Add to Tank
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;