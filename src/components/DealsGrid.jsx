import React, { useMemo } from 'react';
import DealCard from './DealCard';
import { MOCK_DEALS } from '../data/mockDeals';
import { SearchX, RefreshCw } from 'lucide-react';

export default function DealsGrid({
  searchQuery,
  selectedCategory,
  selectedStore,
  sortBy,
  onResetFilters
}) {
  const filteredDeals = useMemo(() => {
    return MOCK_DEALS.filter((deal) => {
      if (selectedCategory === 'loot' && !deal.isLoot) return false;
      if (selectedCategory !== 'all' && selectedCategory !== 'loot' && deal.category !== selectedCategory) {
        return false;
      }

      if (selectedStore !== 'all' && deal.store !== selectedStore) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = deal.title.toLowerCase().includes(q);
        const matchesStore = deal.storeName.toLowerCase().includes(q);
        const matchesCategory = deal.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesStore && !matchesCategory) return false;
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
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Title */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-['Outfit'] flex items-center gap-2">
            <span>Verified Price Drop Alerts</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Real-time price drop ledger across Amazon, Flipkart, Myntra & major stores
          </p>
        </div>

        <button
          onClick={onResetFilters}
          className="text-xs font-bold text-slate-500 hover:text-emerald-700 flex items-center gap-1 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Filters</span>
        </button>
      </div>

      {/* Grid */}
      {filteredDeals.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredDeals.map((deal, idx) => {
            const isFeatured = idx === 0 && filteredDeals.length >= 3;
            return (
              <DealCard
                key={deal.id}
                deal={deal}
                isFeatured={isFeatured}
              />
            );
          })}
        </div>
      ) : (
        <div className="luxe-card rounded-2xl p-10 text-center max-w-md mx-auto my-8">
          <SearchX className="w-12 h-12 text-slate-400 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-slate-900">No deals matched your search</h3>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Try adjusting your search query or store/category filter selections.
          </p>
          <button
            onClick={onResetFilters}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow hover:bg-emerald-500 transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}

    </section>
  );
}
