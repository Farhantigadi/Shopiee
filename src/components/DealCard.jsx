import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Star, TrendingDown } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DealCard({ deal }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(deal.affiliateUrl);
    setCopied(true);
    confetti({ particleCount: 20, spread: 45, origin: { y: 0.8 } });
    setTimeout(() => setCopied(false), 2000);
  };

  const savings = deal.originalPrice - deal.dealPrice;

  return (
    <div className="card rounded-lg overflow-hidden flex flex-col group">

      {/* Image */}
      <div className="bg-[#111] flex items-center justify-center aspect-[4/3] p-6 border-b border-[#1a1a1a]">
        <img
          src={deal.imageUrl}
          alt={deal.title}
          className="w-full h-full object-contain max-h-36 group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col gap-2.5 flex-1">

        {/* Store · off */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="label">{deal.storeName}</span>
            <span className="w-px h-2.5 bg-[#222]" />
            <span className="mono text-[11px] text-[#888]">{deal.discountPercent}% off</span>
          </div>
          <span className="label">Verified</span>
        </div>

        {/* Title */}
        <h3 className="text-[13px] font-medium text-[#ccc] line-clamp-2 leading-snug group-hover:text-[#f0f0f0] transition-colors">
          {deal.title}
        </h3>

        {/* Price */}
        <div className="flex items-baseline gap-2 mt-0.5">
          <span className="mono text-[1.25rem] font-medium text-[#f0f0f0]">₹{deal.dealPrice.toLocaleString()}</span>
          <span className="mono text-xs text-[#333] line-through">₹{deal.originalPrice.toLocaleString()}</span>
          <span className="mono text-xs text-[#666] ml-auto">−₹{savings.toLocaleString()}</span>
        </div>

        {/* 30-day low */}
        <div className="flex items-center gap-1.5 text-[11px] text-[#333]">
          <TrendingDown className="w-3 h-3 shrink-0" />
          30-day low
          <span className="mono text-[#555]">₹{deal.lowestPrice30Days.toLocaleString()}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-[11px] text-[#333]">
          <Star className="w-3 h-3 fill-[#555] text-[#555]" />
          <span className="text-[#555]">{deal.rating}</span>
          <span>({deal.reviewsCount.toLocaleString()})</span>
          <span className="ml-auto">{deal.timeAgo}</span>
        </div>

        <div className="border-t border-[#1a1a1a] mt-0.5" />

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <a
            href={deal.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-1 justify-center"
          >
            Grab Deal <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={handleCopyLink}
            className={`btn-icon ${copied ? 'text-[#f0f0f0] border-[#444]' : ''}`}
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>
    </div>
  );
}
