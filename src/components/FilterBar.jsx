import React from 'react';
import { CATEGORIES, STORES } from '../data/mockDeals';
import { ArrowUpDown, Tag } from 'lucide-react';

export default function FilterBar({
  selectedCategory,
  onSelectCategory,
  selectedStore,
  onSelectStore,
  sortBy,
  onSelectSort,
  totalResultsCount
}) {
  return (
    <div className="bg-white border-y border-slate-200 py-4 sticky top-16 sm:top-20 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category & Sort Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar scroll-smooth">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const isLoot = cat.id === 'loot';
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? isLoot
                        ? 'bg-rose-600 text-white shadow-md'
                        : 'bg-emerald-600 text-white shadow-md'
                      : isLoot
                      ? 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
                      : 'bg-slate-100 text-slate-700 border border-slate-200/80 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <Tag className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sort Selector & Deals Count */}
          <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-t-0 pt-2 md:pt-0 border-slate-200">
            <span className="text-xs font-semibold text-slate-500">
              Showing <strong className="text-emerald-700 font-bold">{totalResultsCount}</strong> Verified Deals
            </span>

            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => onSelectSort(e.target.value)}
                className="bg-slate-50 text-slate-900 border border-slate-300 rounded-xl px-2.5 py-1.5 text-xs font-bold focus:outline-none focus:border-emerald-500"
              >
                <option value="newest">Newest First</option>
                <option value="discount">Highest Discount</option>
                <option value="price_low">Price: Low to High</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Store Chips Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pt-1 no-scrollbar">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1">
            Store:
          </span>
          {STORES.map((store) => {
            const isActive = selectedStore === store.id;
            return (
              <button
                key={store.id}
                onClick={() => onSelectStore(store.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold shrink-0 transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow'
                    : 'bg-slate-100 text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-200'
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
