import React, { useState } from 'react';
import { OFFICIAL_FAQS } from '../data/mockDeals';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Knowledge Base
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500 mt-2">Everything you need to know about ShoppinGenie</p>
        </div>

        <div className="space-y-2">
          {OFFICIAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`glass-card rounded-xl overflow-hidden transition-all ${isOpen ? 'border-emerald-500/25' : ''}`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-500 font-black text-xs">Q</span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : 'text-slate-600'}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 pt-0 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
