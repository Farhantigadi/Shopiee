import React from 'react';
import { Sparkles, ShieldCheck, Flame, Zap, ArrowDownRight, TrendingDown } from 'lucide-react';
import { STATS } from '../data/mockDeals';

export default function HeroTracker({ searchQuery, onSearch }) {
  return (
    <section className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-16 bg-gradient-to-b from-slate-950 via-[#060a14] to-[#030712]">
      
      {/* Background Ambient Luxury Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-5 w-[300px] h-[250px] bg-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-6 backdrop-blur-md shadow-sm">
          <span className="text-sm">✨ 🧞‍♂️</span>
          <span>Your Genie is Doing Magic</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto font-['Outfit']">
          India's #1 Platform for <br className="hidden sm:inline" />
          <span className="gradient-text-emerald">Price Drop Alerts</span> & Verified Loot Deals
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Real-time price tracking across Amazon, Flipkart, Myntra, Shopsy, AJIO & Tata CLiQ. Trusted by 55,000+ smart shoppers in India.
        </p>

        {/* Quick Search & Category Banner Callout */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-45 transition duration-500" />
            <div className="relative flex items-center bg-slate-900/90 rounded-2xl p-2 border border-slate-700/60 shadow-2xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search products or stores (e.g. Sony, Headphones, Puma, Amazon)..."
                className="w-full bg-transparent py-2.5 px-3 text-sm text-white placeholder-slate-400 focus:outline-none"
              />
              <button
                onClick={() => {
                  const el = document.getElementById('deals-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 whitespace-nowrap transition-all flex items-center gap-1.5"
              >
                <span>Browse Deals</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {STATS.map((stat, index) => (
            <div key={index} className="glass-card-premium p-4 rounded-2xl text-center relative">
              <div className="text-xl mb-1">{stat.icon}</div>
              <div className="text-xl sm:text-2xl font-black text-white font-['Outfit']">{stat.value}</div>
              <div className="text-xs font-medium text-slate-400 mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
