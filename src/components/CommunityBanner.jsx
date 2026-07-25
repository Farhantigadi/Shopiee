import React from 'react';
import { Send, MessageSquare, ShieldCheck, Tag } from 'lucide-react';

export default function CommunityBanner() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 bg-slate-900 text-white border border-slate-800 shadow-xl">
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-3">
              <Tag className="w-3.5 h-3.5" />
              <span>Instant Push Notifications</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight font-['Outfit']">
              Join 55,000+ Smart Shoppers on Telegram & WhatsApp 🧞‍♂️
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Don't miss flash loot deals that sell out in under 2 minutes! Receive instant price drop alerts directly to your phone.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-xs font-bold text-slate-200">
              <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                100% Verified Deals Only
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
                <Tag className="w-4 h-4 text-amber-400" />
                Instant Price Drop Alerts
              </span>
            </div>
          </div>

          {/* Join Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href="https://t.me/shoppingenie"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Send className="w-4 h-4" />
              <span>Join Telegram Channel</span>
            </a>

            <a
              href="https://t.me/shoppingenie"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Join WhatsApp Group</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
