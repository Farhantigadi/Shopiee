import React, { useState } from 'react';
import { OFFICIAL_FAQS } from '../data/mockDeals';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="border-t border-[#1a1a1a] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div>
            <p className="label mb-4">Support</p>
            <h2 className="text-2xl font-bold text-[#f0f0f0] leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Frequently<br />Asked Questions
            </h2>
            <p className="mt-4 text-[13px] text-[#444] leading-relaxed">
              Everything you need to know about ShoppinGenie deal alerts and price tracking.
            </p>
          </div>

          <div className="lg:col-span-2 divide-y divide-[#1a1a1a]">
            {OFFICIAL_FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-4 flex items-center justify-between gap-4 text-left group"
                  >
                    <span className={`text-[13px] font-medium transition-colors ${isOpen ? 'text-[#f0f0f0]' : 'text-[#888] group-hover:text-[#ccc]'}`}>
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-4 h-4 shrink-0 text-[#333] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#888]' : ''}`} />
                  </button>
                  {isOpen && (
                    <p className="pb-4 text-[13px] text-[#555] leading-relaxed">{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
