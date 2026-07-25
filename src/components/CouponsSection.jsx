import React, { useState } from 'react';
import { MOCK_COUPONS } from '../data/mockDeals';
import { Ticket, Copy, Check, ShieldCheck, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CouponsSection() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (coupon) => {
    navigator.clipboard.writeText(coupon.code);
    setCopiedId(coupon.id);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-12 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Ticket className="w-4 h-4" />
              <span>Exclusive Savings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Outfit']">
              Verified Coupon Codes & Vouchers
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Copy and apply these active promo codes at checkout for extra savings
            </p>
          </div>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {MOCK_COUPONS.map((coupon) => {
            const isCopied = copiedId === coupon.id;
            return (
              <div
                key={coupon.id}
                className="glass-card p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden border border-slate-800 hover:border-amber-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-amber-400 font-bold">
                      {coupon.store}
                    </span>
                    <span className="text-[11px] text-slate-400">{coupon.expires}</span>
                  </div>

                  <h3 className="font-bold text-sm text-white line-clamp-2 leading-snug">
                    {coupon.title}
                  </h3>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
                    <span>Discount: <strong className="text-emerald-400 font-bold">{coupon.discount}</strong></span>
                    <span className="text-[11px] text-slate-400">Min: {coupon.minOrder}</span>
                  </div>
                </div>

                {/* Coupon Code & Copy Action */}
                <div className="mt-4 pt-3 border-t border-dashed border-slate-700/80 flex items-center justify-between">
                  <div className="font-mono text-xs font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/30">
                    {coupon.code}
                  </div>

                  <button
                    onClick={() => handleCopy(coupon)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${
                      isCopied
                        ? 'bg-emerald-500 text-slate-950 shadow'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
