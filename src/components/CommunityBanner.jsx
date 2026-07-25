import React from 'react';
import { Send, MessageSquare, ShieldCheck, Tag } from 'lucide-react';

export default function CommunityBanner() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12 glass-card glow-emerald">

        {/* Subtle glow blob */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-4">
              <Tag className="w-3.5 h-3.5" />
              Instant Push Notifications
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-['Outfit']">
              Join 55,000+ Smart Shoppers on Telegram & WhatsApp
            </h2>

            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              Don't miss flash loot deals that sell out in under 2 minutes. Get instant price drop alerts directly to your phone.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                100% Verified Deals Only
              </span>
              <span className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-lg">
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                Instant Price Drop Alerts
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href="https://t.me/shoppingenie"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-emerald-500/25"
            >
              <Send className="w-4 h-4" />
              Join Telegram Channel
            </a>
            <a
              href="https://t.me/shoppingenie"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl glass-card text-slate-300 hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Join WhatsApp Group
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
