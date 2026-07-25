import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Star, ShieldCheck, Clock, TrendingDown, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DealCard({ deal, isFeatured }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(deal.affiliateUrl);
    setCopied(true);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.8 }
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const savingsAmount = deal.originalPrice - deal.dealPrice;

  return (
    <div
      className={`luxe-card rounded-2xl overflow-hidden flex flex-col justify-between relative group ${
        isFeatured ? 'md:col-span-2 md:flex-row bg-white border-emerald-300 ring-1 ring-emerald-500/20' : ''
      }`}
    >
      
      {/* Product Image Section */}
      <div
        className={`relative bg-slate-50/80 p-4 flex items-center justify-center border-b border-slate-100 ${
          isFeatured ? 'md:w-5/12 md:border-b-0 md:border-r' : 'aspect-[4/3]'
        }`}
      >
        {/* Store Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-lg text-[11px] font-extrabold bg-slate-900 text-white shadow-xs">
            {deal.storeName}
          </span>
        </div>

        {/* Discount Badge */}
        <div className="absolute top-3 right-3 z-10">
          {deal.isLoot ? (
            <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-rose-50 text-rose-700 border border-rose-200 shadow-xs flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-rose-600 fill-rose-600 animate-bounce" />
              {deal.discountPercent}% OFF LOOT
            </span>
          ) : (
            <span className="px-2.5 py-1 rounded-lg text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
              {deal.discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Product Image */}
        <img
          src={deal.imageUrl}
          alt={deal.title}
          className="w-full h-full object-contain max-h-52 group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Time Overlay */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-slate-600 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200/80 shadow-xs">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-emerald-600" />
            {deal.timeAgo}
          </span>
          <span className="flex items-center gap-1 text-emerald-700 font-bold">
            <ShieldCheck className="w-3 h-3" />
            Verified Deal
          </span>
        </div>
      </div>

      {/* Card Details Body */}
      <div className={`p-5 flex-1 flex flex-col justify-between ${isFeatured ? 'md:w-7/12' : ''}`}>
        <div>
          {/* Title */}
          <h3 className="font-bold text-sm sm:text-base text-slate-900 line-clamp-2 leading-snug group-hover:text-emerald-600 transition-colors">
            {deal.title}
          </h3>

          {/* Rating & Stock */}
          <div className="flex items-center justify-between mt-2.5 text-xs text-slate-500 font-semibold">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold text-slate-900">{deal.rating}</span>
              <span>({deal.reviewsCount.toLocaleString()})</span>
            </div>
            <span className={`font-bold ${deal.stockStatus.includes('Loot') ? 'text-rose-600' : 'text-slate-600'}`}>
              {deal.stockStatus}
            </span>
          </div>

          {/* Price Box */}
          <div className="mt-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
                  ₹{deal.dealPrice.toLocaleString()}
                </span>
                <span className="ml-2 text-xs text-slate-400 line-through font-normal">
                  ₹{deal.originalPrice.toLocaleString()}
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-md border border-emerald-200">
                Save ₹{savingsAmount.toLocaleString()}
              </span>
            </div>

            <div className="mt-2 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
              <span className="flex items-center gap-1">
                <TrendingDown className="w-3 h-3 text-emerald-600" />
                30-Day Low: <strong className="text-slate-900">₹{deal.lowestPrice30Days.toLocaleString()}</strong>
              </span>
              <span className="text-emerald-700 font-bold">Lowest Price</span>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-4 flex items-center gap-2">
          <a
            href={deal.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5 transition-all hover:scale-[1.02]"
          >
            <span>Grab Deal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={handleCopyLink}
            title="Copy Deal Link"
            className={`p-2.5 rounded-xl border transition-all ${
              copied
                ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

      </div>

    </div>
  );
}
