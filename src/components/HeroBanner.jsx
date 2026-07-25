import React from 'react';
import { Search, ShieldCheck, Flame, TrendingDown, ArrowDownRight } from 'lucide-react';

export default function HeroBanner({ searchQuery, onSearch }) {
  return (
    <section className="relative pt-10 pb-12 sm:pt-16 sm:pb-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Magic Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-5 shadow-xs">
          <span>Your Genie is Doing Magic</span>
          <span className="inline-flex items-center gap-0.5">✨ 🧞‍♂️</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping ml-1" />
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto font-['Outfit']">
          Today's Best <span className="gradient-text-emerald">Price Drop Deals</span> <br className="hidden sm:inline" />
          & Verified Loot Offers
        </h1>

        <p className="mt-4 text-xs sm:text-base text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
          Real-time price drop tracking across Amazon, Flipkart, Myntra, Shopsy, AJIO, Nykaa & Tata CLiQ. Trusted by 55,000+ smart shoppers in India.
        </p>

        {/* Search Bar */}
        <div className="mt-7 max-w-xl mx-auto">
          <div className="flex items-center bg-slate-50 rounded-2xl p-1.5 border border-slate-300 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search deals, products, or stores..."
              className="w-full bg-transparent py-2.5 px-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {searchQuery ? (
              <button
                onClick={() => onSearch('')}
                className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-900 font-bold"
              >
                Clear
              </button>
            ) : (
              <button
                onClick={() => {
                  const el = document.getElementById('deals-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-bold text-xs shadow whitespace-nowrap transition-colors flex items-center gap-1"
              >
                <span>Browse</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-700">
          <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            100% Verified Deals
          </span>
          <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200">
            <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            50%+ OFF Loot Offers
          </span>
          <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-1.5 rounded-xl border border-slate-200">
            <TrendingDown className="w-4 h-4 text-emerald-600" />
            Live Price Drop Alerts
          </span>
        </div>

      </div>
    </section>
  );
}
