import React, { useMemo } from 'react';
import DealCard from './DealCard';
import { MOCK_DEALS } from '../data/mockDeals';
import { SearchX } from 'lucide-react';

export default function DealsGrid({ searchQuery, selectedCategory, selectedStore, sortBy, onResetFilters }) {
  const filteredDeals = useMemo(() => {
    return MOCK_DEALS.filter((deal) => {
      if (selectedCategory === 'loot' && !deal.isLoot) return false;
      if (selectedCategory !== 'all' && selectedCategory !== 'loot' && deal.category !== selectedCategory) return false;
      if (selectedStore !== 'all' && deal.store !== selectedStore) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        if (!deal.title.toLowerCase().includes(q) && !deal.storeName.toLowerCase().includes(q) && !deal.category.toLowerCase().includes(q)) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'discount') return b.discountPercent - a.discountPercent;
      if (sortBy === 'price_low') return a.dealPrice - b.dealPrice;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedStore, sortBy]);

  return (
    <section className="py-10 max-w-7xl mx-auto px-6 lg:px-8">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm font-semibold text-[#f0f0f0]" style={{ fontFamily: 'Syne, sans-serif' }}>
          Price Drop Alerts
        </h2>
        <button onClick={onResetFilters} className="text-[11px] text-[#333] hover:text-[#888] transition-colors">
          Reset filters
        </button>
      </div>

      {filteredDeals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {filteredDeals.map((deal) => <DealCard key={deal.id} deal={deal} />)}
        </div>
      ) : (
        <div className="card rounded-lg p-12 text-center max-w-sm mx-auto my-8">
          <SearchX className="w-7 h-7 text-[#333] mx-auto mb-3" />
          <h3 className="text-sm font-medium text-[#f0f0f0] mb-1">No deals matched</h3>
          <p className="text-[12px] text-[#444] mb-5">Try adjusting your search or filters.</p>
          <button
            onClick={onResetFilters}
            className="px-4 py-2 rounded-md bg-[#f0f0f0] text-[#0c0c0c] font-semibold text-xs hover:bg-white transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
