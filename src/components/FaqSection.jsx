import React, { useState } from 'react';
import { OFFICIAL_FAQS } from '../data/mockDeals';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ShoppinGenie Knowledge Base</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-['Outfit']">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Everything you need to know about ShoppinGenie deal alerts & price drops
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {OFFICIAL_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="luxe-card rounded-2xl overflow-hidden border border-slate-200/80 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-700 font-black">Q.</span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-700' : 'text-slate-400'}`} />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 mt-1">
                    <p className="pt-2">{faq.a}</p>
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
