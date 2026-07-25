import React from 'react';
import { CATEGORIES, STORES } from '../data/mockDeals';
import { ArrowUpDown } from 'lucide-react';

export default function FilterBar({
  selectedCategory, onSelectCategory,
  selectedStore, onSelectStore,
  sortBy, onSelectSort,
  totalResultsCount
}) {
  return (
    <div className="sticky top-16 sm:top-20 z-40 border-y border-white/5 bg-[#080c14]/90 backdrop-blur-xl py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const isLoot = cat.id === 'loot';
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? isLoot
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                      : 'text-slate-500 border border-white/5 hover:text-slate-300 hover:border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Sort & Count */}
          <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 pt-2 md:pt-0 border-white/5">
            <span className="text-xs text-slate-500">
              <strong className="text-emerald-400 font-bold">{totalResultsCount}</strong> Verified Deals
            </span>
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-600" />
              <select
                value={sortBy}
                onChange={(e) => onSelectSort(e.target.value)}
                className="bg-[#0f172a] text-slate-300 border border-white/8 rounded-lg px-2.5 py-1.5 text-xs font-semibold focus:outline-none focus:border-emerald-500"
              >
                <option value="newest">Newest First</option>
                <option value="discount">Highest Discount</option>
                <option value="price_low">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Store Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest shrink-0 mr-1">Store</span>
          {STORES.map((store) => {
            const isActive = selectedStore === store.id;
            return (
              <button
                key={store.id}
                onClick={() => onSelectStore(store.id)}
                className={`px-3 py-1 rounded-md text-xs font-semibold shrink-0 transition-all ${
                  isActive
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'text-slate-500 border border-white/5 hover:text-slate-300 hover:border-white/10'
                }`}
              >
                {store.name}
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
}
