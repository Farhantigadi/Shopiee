import React, { useMemo } from 'react';
import DealCard from './DealCard';
import { MOCK_DEALS } from '../data/mockDeals';
import { SearchX, RefreshCw } from 'lucide-react';

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
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-white font-['Outfit'] flex items-center gap-2.5">
            Verified Price Drop Alerts
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </h2>
          <p className="text-xs text-slate-500 mt-1">Real-time price drops across Amazon, Flipkart, Myntra & major stores</p>
        </div>
        <button
          onClick={onResetFilters}
          className="text-xs font-semibold text-slate-500 hover:text-emerald-400 flex items-center gap-1 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" /> Reset
        </button>
      </div>

      {filteredDeals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredDeals.map((deal, idx) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      ) : (
        <div className="glass-card rounded-2xl p-12 text-center max-w-md mx-auto my-8">
          <SearchX className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">No deals matched</h3>
          <p className="text-xs text-slate-500 mt-1 mb-5">Try adjusting your search or filters.</p>
          <button
            onClick={onResetFilters}
            className="px-5 py-2 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </section>
  );
}
