import React from 'react';
import { X, Mail } from 'lucide-react';
import { FAQS } from '../data/mockDeals';

export default function InfoModal({ type, onClose }) {
  const titles = {
    'what-we-do': 'What We Do',
    'about':      'About ShoppinGenie',
    'disclosure': 'Affiliate Disclosure',
    'terms':      'Terms of Service',
    'privacy':    'Privacy Policy',
    'contact':    'Contact',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="card rounded-lg w-full max-w-xl max-h-[85vh] overflow-y-auto">

        <div className="flex items-center justify-between px-5 py-4 border-b border-[#1a1a1a]">
          <h2 className="text-[13px] font-semibold text-[#f0f0f0]" style={{ fontFamily: 'Syne, sans-serif' }}>
            {titles[type] || 'Information'}
          </h2>
          <button onClick={onClose} className="text-[#333] hover:text-[#f0f0f0] transition-colors p-1">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 py-5 text-[13px] text-[#555] space-y-4 leading-relaxed">

          {type === 'what-we-do' && (
            <>
              <p><span className="text-[#ccc] font-medium">ShoppinGenie</span> is India's premier price drop tracking platform. Our scanners monitor price changes across Amazon India, Flipkart, Myntra, Shopsy, AJIO, Nykaa, Meesho, Tata CLiQ, and H&M.</p>
              <ul className="space-y-1.5 text-[12px] text-[#444]">
                {['Verified real-time price drop alerts', '50%+ OFF loot deals', 'Exclusive store coupons & vouchers'].map(t => (
                  <li key={t} className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#444] shrink-0" />{t}</li>
                ))}
              </ul>
            </>
          )}

          {type === 'about' && (
            <p>Founded to combat pricing inflation during sales, <span className="text-[#ccc] font-medium">ShoppinGenie</span> empowers Indian shoppers to buy at the true lowest price. Trusted by over 55,000+ active shoppers across India.</p>
          )}

          {type === 'disclosure' && (
            <p>ShoppinGenie is completely free for shoppers. When you click links to Amazon, Flipkart, Myntra, or other stores and make a purchase, we may earn an affiliate commission at zero additional cost to you.</p>
          )}

          {type === 'terms' && (
            <p>By using ShoppinGenie (shoppingenie.in), you agree to use the platform for personal price comparison. Prices and deal availability are controlled by the respective merchants.</p>
          )}

          {type === 'privacy' && (
            <p>We value your privacy. ShoppinGenie does not sell user data.</p>
          )}

          {type === 'contact' && (
            <div className="flex items-center gap-2 p-3 rounded-md border border-[#1a1a1a] text-[#888]">
              <Mail className="w-4 h-4 shrink-0 text-[#444]" />
              contact@shoppingenie.in
            </div>
          )}

          <div className="pt-4 border-t border-[#1a1a1a]">
            <p className="label mb-3">FAQ</p>
            <div className="space-y-2">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="p-3 rounded-md border border-[#1a1a1a]">
                  <p className="text-[12px] font-medium text-[#888] mb-1">{faq.q}</p>
                  <p className="text-[12px] text-[#444]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
