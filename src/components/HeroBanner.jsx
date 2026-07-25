import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, TrendingDown, ShieldCheck } from 'lucide-react';
import { MOCK_DEALS } from '../data/mockDeals';

const WORDS = ['Best deals.', 'Verified drops.', 'Coupons.', 'Price history.', 'Cashback.', 'Shopping insights.'];
const PREVIEW_DEALS = MOCK_DEALS.slice(0, 3);

export default function HeroBanner({ searchQuery, onSearch }) {
  const [idx, setIdx] = useState(0);
  const [animClass, setAnimClass] = useState('word-enter');

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimClass('word-exit');
      setTimeout(() => {
        setIdx(i => (i + 1) % WORDS.length);
        setAnimClass('word-enter');
      }, 320);
    }, 2200);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative border-b border-[#1f1f2e] overflow-hidden">

      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #a78bfa, transparent 70%)' }} />
        <div className="absolute top-10 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #818cf8, transparent 65%)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] opacity-[0.04]"
          style={{ background: 'radial-gradient(ellipse, #c4b5fd, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 sm:pt-28 pb-16">

        {/* Top: headline left, cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">

          {/* LEFT */}
          <div>
            <p className="label mb-6">India · Price Drop Intelligence</p>
            <h1
              className="text-[3rem] sm:text-[4rem] lg:text-[5rem] font-bold leading-[1.0] tracking-[-0.04em]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              <span className="block text-[#f0f0f0]">Everything you need.</span>
              <span
                key={idx}
                className={`block ${animClass}`}
                style={{ background: 'linear-gradient(180deg, #4ade80 0%, #16a34a 50%, #052e16 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
              >
                {WORDS[idx]}
              </span>
            </h1>
            <p className="mt-6 text-[14px] text-[#555] leading-relaxed max-w-sm">
              Real-time price tracking across Amazon, Flipkart, Myntra & 7 more platforms. Trusted by 55,000+ shoppers.
            </p>
          </div>

          {/* RIGHT — deal preview cards */}
          <div className="hidden lg:flex flex-col gap-3 relative">
            <div className="absolute inset-0 -m-8 rounded-3xl opacity-20 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, #4f4f7a, transparent 70%)' }} />

            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f0f0f0] animate-pulse" />
              <span className="label">Live price drops</span>
            </div>

            {PREVIEW_DEALS.map((deal, i) => (
              <div
                key={deal.id}
                className="card rounded-lg p-3.5 flex items-center gap-3.5"
                style={{ opacity: 1 - i * 0.12, transform: `scale(${1 - i * 0.02})`, transformOrigin: 'top center' }}
              >
                <div className="w-12 h-12 rounded-md bg-[#0d0d12] border border-[#1f1f2e] flex items-center justify-center shrink-0 overflow-hidden">
                  <img src={deal.imageUrl} alt={deal.title} className="w-full h-full object-contain p-1" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[12px] font-medium text-[#ccc] truncate">{deal.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="label">{deal.storeName}</span>
                    <span className="w-px h-2.5 bg-[#1f1f2e]" />
                    <span className="flex items-center gap-1 text-[11px] text-[#666]">
                      <TrendingDown className="w-3 h-3" />
                      {deal.discountPercent}% off
                    </span>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="mono text-[13px] font-medium text-[#f0f0f0]">₹{deal.dealPrice.toLocaleString()}</div>
                  <div className="mono text-[10px] text-[#333] line-through">₹{deal.originalPrice.toLocaleString()}</div>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2 mt-1 px-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#333]" />
              <span className="label">All deals verified before listing</span>
            </div>
          </div>

        </div>

        {/* Bottom: search + stats — full width, centered */}
        <div className="mt-16 pt-12 border-t border-[#1f1f2e] flex flex-col items-center gap-8">

          {/* Search bar */}
          <div className="flex items-center gap-2 w-full max-w-xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#333]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search deals, products, stores..."
                className="w-full pl-9 pr-4 py-2.5 text-[13px] rounded-md site-input"
              />
            </div>
            <button
              onClick={() => document.getElementById('deals-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary shrink-0"
            >
              Browse <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-12">
            {[
              { n: '55K+', l: 'Active shoppers' },
              { n: '10+',  l: 'Platforms tracked' },
              { n: '100%', l: 'Verified deals' },
            ].map(({ n, l }, i) => (
              <React.Fragment key={l}>
                {i > 0 && <div className="w-px h-8 bg-[#1f1f2e]" />}
                <div className="text-center">
                  <div className="mono text-[1.4rem] font-medium text-[#f0f0f0] leading-none">{n}</div>
                  <div className="label mt-1.5">{l}</div>
                </div>
              </React.Fragment>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
