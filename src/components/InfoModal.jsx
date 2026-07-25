import React from 'react';
import { X, Mail } from 'lucide-react';
import { FAQS } from '../data/mockDeals';

export default function InfoModal({ type, onClose }) {
  const titles = {
    'what-we-do': 'What We Do',
    'about': 'About ShoppinGenie',
    'disclosure': 'Affiliate & FTC Disclosure',
    'terms': 'Terms of Service',
    'privacy': 'Privacy Policy',
    'contact': 'Contact Support',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="glass-card w-full max-w-2xl max-h-[85vh] rounded-2xl p-6 sm:p-8 relative overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg glass-card text-slate-500 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <h2 className="text-xl font-black text-white font-['Outfit'] mb-5 flex items-center gap-2">
          {titles[type] || 'Information'}
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">ShoppinGenie</span>
        </h2>

        <div className="text-sm text-slate-400 space-y-4 leading-relaxed">

          {type === 'what-we-do' && (
            <>
              <p><strong className="text-slate-200">ShoppinGenie</strong> is India's premier price drop tracking & deal aggregation platform. Our scanners track price changes across Amazon India, Flipkart, Myntra, Shopsy, AJIO, Nykaa, Meesho, Tata CLiQ, and H&M.</p>
              <ul className="list-disc pl-5 space-y-1 text-slate-400">
                <li>Verified Real-Time Price Drop Alerts</li>
                <li>50%+ OFF Glitch & Verified Loot Deals</li>
                <li>Exclusive Store Coupons & Vouchers</li>
              </ul>
            </>
          )}

          {type === 'about' && (
            <>
              <p>Founded to combat pricing inflation during sales, <strong className="text-slate-200">ShoppinGenie</strong> empowers Indian shoppers to buy at the true lowest price.</p>
              <p>Trusted by over <strong className="text-slate-200">55,000+ active shoppers</strong> across India!</p>
            </>
          )}

          {type === 'disclosure' && (
            <p><strong className="text-slate-200">Affiliate Disclosure:</strong> ShoppinGenie is completely free for shoppers. When you click on links to Amazon, Flipkart, Myntra, or other stores and purchase, we may earn an affiliate commission at zero additional cost to you.</p>
          )}

          {type === 'terms' && (
            <p>By using ShoppinGenie (shoppingenie.in), you agree to use the platform for personal price comparison. Prices and deal availability are controlled by the respective e-commerce merchants.</p>
          )}

          {type === 'privacy' && (
            <p>We value your privacy. ShoppinGenie does not sell user data.</p>
          )}

          {type === 'contact' && (
            <>
              <p>Have questions or feedback?</p>
              <div className="p-4 rounded-xl glass-card">
                <div className="flex items-center gap-2 text-slate-200 font-semibold">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  contact@shoppingenie.in
                </div>
              </div>
            </>
          )}

          <div className="mt-6 pt-5 border-t border-white/5">
            <h3 className="text-sm font-bold text-slate-300 mb-3">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="p-3.5 rounded-xl glass-card">
                  <h4 className="font-bold text-slate-200 text-xs">{faq.q}</h4>
                  <p className="text-slate-500 text-xs mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
