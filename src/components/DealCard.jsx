import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Star, ShieldCheck, Clock, TrendingDown, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DealCard({ deal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(deal.affiliateUrl);
    setCopied(true);
    confetti({ particleCount: 25, spread: 50, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2000);
  };

  const savingsAmount = deal.originalPrice - deal.dealPrice;

  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col group">

      {/* Image area — fully clean */}
      <div className="bg-[#0d1424] flex items-center justify-center p-6 aspect-[4/3]">
        <img
          src={deal.imageUrl}
          alt={deal.title}
          className="w-full h-full object-contain max-h-40 group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Card body */}
      <div className="p-4 flex-1 flex flex-col gap-3">

        {/* Store + discount + verified row */}
        <div className="flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-400 uppercase tracking-wide">{deal.storeName}</span>
            {deal.isLoot ? (
              <span className="flex items-center gap-0.5 text-rose-400 font-black">
                <Flame className="w-3 h-3 fill-rose-400" />
                {deal.discountPercent}% OFF
              </span>
            ) : (
              <span className="text-emerald-400 font-black">{deal.discountPercent}% OFF</span>
            )}
          </div>
          <span className="flex items-center gap-1 text-emerald-400 font-semibold">
            <ShieldCheck className="w-3 h-3" />
            Verified
          </span>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-sm text-slate-100 line-clamp-2 leading-snug group-hover:text-emerald-400 transition-colors">
          {deal.title}
        </h3>

        {/* Price row */}
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-white font-['Outfit']">
              ₹{deal.dealPrice.toLocaleString()}
            </span>
            <span className="text-xs text-slate-600 line-through">
              ₹{deal.originalPrice.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-emerald-400 ml-auto">
              Save ₹{savingsAmount.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-[11px] text-slate-500">
            <TrendingDown className="w-3 h-3 text-emerald-500 shrink-0" />
            30-day low: <span className="text-slate-400 font-semibold ml-0.5">₹{deal.lowestPrice30Days.toLocaleString()}</span>
          </div>
        </div>

        {/* Rating + time */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-slate-300">{deal.rating}</span>
            <span>({deal.reviewsCount.toLocaleString()})</span>
          </div>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {deal.timeAgo}
          </span>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-2 mt-auto pt-1">
          <a
            href={deal.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
          >
            Grab Deal <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={handleCopyLink}
            className={`p-2.5 rounded-xl border transition-all ${
              copied
                ? 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
                : 'border-white/8 text-slate-500 hover:text-slate-300 hover:border-white/15'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </div>
  );
}
