import React from 'react';
import { Send, MessageSquare } from 'lucide-react';

export default function CommunityBanner() {
  return (
    <section className="border-t border-[#1f1f2e] bg-[#0f0f15]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">

          <div className="max-w-lg">
            <p className="label mb-5">Community</p>
            <h2 className="text-3xl sm:text-[2.75rem] font-bold text-[#f0f0f0] leading-[1.1] tracking-[-0.03em]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Get alerts before<br />deals sell out.
            </h2>
            <p className="mt-5 text-[14px] text-[#555] leading-relaxed max-w-sm">
              Flash loot deals sell out in under 2 minutes. Join 55,000+ shoppers getting instant price drop alerts on Telegram and WhatsApp.
            </p>

            <div className="mt-10 pt-8 border-t border-[#1a1a1a] flex items-center gap-10">
              {[
                { n: '55K+',   l: 'Members' },
                { n: '< 2min', l: 'Alert speed' },
                { n: '10+',    l: 'Platforms' },
              ].map(({ n, l }) => (
                <div key={l}>
                  <div className="mono text-xl font-medium text-[#f0f0f0]">{n}</div>
                  <div className="label mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0">
            <a
              href="https://t.me/shoppingenie"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-telegram justify-center"
            >
              <Send className="w-3.5 h-3.5" />
              Join Telegram
            </a>
            <a
              href="https://t.me/shoppingenie"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp justify-center"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Join WhatsApp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
