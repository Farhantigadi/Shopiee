import React from 'react';
import { Search, ShieldCheck, Flame, TrendingDown, ArrowDownRight } from 'lucide-react';

export default function HeroBanner({ searchQuery, onSearch }) {
  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden bg-grid">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Live Price Drop Alerts — Updated in Real Time</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] max-w-4xl mx-auto font-['Outfit']">
          Today's Best{' '}
          <span className="gradient-text-emerald">Price Drop Deals</span>
          <br className="hidden sm:inline" />
          {' '}& Verified Loot Offers
        </h1>

        <p className="mt-5 text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
          Real-time price drops across Amazon, Flipkart, Myntra & more. Trusted by 55,000+ smart shoppers in India.
        </p>

        {/* Search Bar */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="flex items-center glass-card rounded-2xl p-1.5 focus-within:border-emerald-500/50 focus-within:glow-emerald transition-all">
            <Search className="w-4 h-4 text-slate-500 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search deals, products, or stores..."
              className="w-full bg-transparent py-2.5 px-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
            />
            {searchQuery ? (
              <button
                onClick={() => onSearch('')}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-white font-bold"
              >
                Clear
              </button>
            ) : (
              <button
                onClick={() => document.getElementById('deals-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow whitespace-nowrap transition-colors flex items-center gap-1"
              >
                Browse <ArrowDownRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Feature Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-400">
          <span className="flex items-center gap-1.5 glass-card px-3.5 py-1.5 rounded-xl">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            100% Verified Deals
          </span>
          <span className="flex items-center gap-1.5 glass-card px-3.5 py-1.5 rounded-xl">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            50%+ OFF Loot Offers
          </span>
          <span className="flex items-center gap-1.5 glass-card px-3.5 py-1.5 rounded-xl">
            <TrendingDown className="w-3.5 h-3.5 text-emerald-500" />
            Live Price Drop Alerts
          </span>
        </div>

      </div>
    </section>
  );
}
