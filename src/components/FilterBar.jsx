import React from 'react';
import { CATEGORIES, STORES } from '../data/mockDeals';

export default function FilterBar({
  selectedCategory, onSelectCategory,
  selectedStore, onSelectStore,
  sortBy, onSelectSort,
  totalResultsCount
}) {
  return (
    <div className="sticky top-16 sm:top-[72px] z-40 bg-[#0c0c0c]/95 backdrop-blur-xl border-b border-[#222]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Categories */}
        <div className="flex items-center justify-between border-b border-[#1a1a1a]">
          <div className="flex items-center overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-3 text-[12px] font-medium whitespace-nowrap border-b-2 -mb-px transition-colors ${
                    isActive
                      ? 'border-[#f0f0f0] text-[#f0f0f0]'
                      : 'border-transparent text-[#444] hover:text-[#888]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-4 shrink-0 pl-4">
            <span className="label hidden sm:block">
              <span className="mono text-[#888]">{totalResultsCount}</span> deals
            </span>
            <select
              value={sortBy}
              onChange={(e) => onSelectSort(e.target.value)}
              className="bg-transparent text-[#444] text-[12px] border-0 focus:outline-none cursor-pointer hover:text-[#888] py-3"
            >
              <option value="newest"    className="bg-[#141414]">Newest</option>
              <option value="discount"  className="bg-[#141414]">Highest Discount</option>
              <option value="price_low" className="bg-[#141414]">Price: Low to High</option>
              <option value="rating"    className="bg-[#141414]">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Stores */}
        <div className="flex items-center gap-1 py-2 overflow-x-auto no-scrollbar">
          <span className="label shrink-0 mr-2">Store</span>
          {STORES.map((store) => {
            const isActive = selectedStore === store.id;
            return (
              <button
                key={store.id}
                onClick={() => onSelectStore(store.id)}
                className={`px-2.5 py-1 rounded text-[11px] font-medium shrink-0 transition-colors ${
                  isActive
                    ? 'bg-[#222] text-[#f0f0f0]'
                    : 'text-[#444] hover:text-[#888]'
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
