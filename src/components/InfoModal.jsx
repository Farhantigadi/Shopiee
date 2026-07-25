import React from 'react';
import { X, Mail, ShieldCheck, Tag } from 'lucide-react';
import { FAQS } from '../data/mockDeals';

export default function InfoModal({ type, onClose }) {
  const getTitle = () => {
    switch (type) {
      case 'what-we-do': return 'What We Do';
      case 'about': return 'About ShoppinGenie';
      case 'disclosure': return 'Affiliate & FTC Disclosure';
      case 'terms': return 'Terms of Service';
      case 'privacy': return 'Privacy Policy';
      case 'contact': return 'Contact Support';
      default: return 'Information';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white w-full max-w-2xl max-h-[85vh] rounded-3xl p-6 sm:p-8 relative border border-slate-200 shadow-2xl overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-black text-slate-900 font-['Outfit'] mb-4 flex items-center gap-2">
          <span>{getTitle()}</span>
          <span className="text-xs font-sans font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">ShoppinGenie</span>
        </h2>

        <div className="text-xs sm:text-sm text-slate-700 font-medium space-y-4 leading-relaxed">
          
          {type === 'what-we-do' && (
            <>
              <p>
                <strong>ShoppinGenie</strong> is India’s premier price drop tracking & deal aggregation platform.
                Our scanners track price changes across Amazon India, Flipkart, Myntra, Shopsy, AJIO, Nykaa, Meesho, Tata CLiQ, and H&M.
              </p>
              <h3 className="text-sm font-bold text-slate-900 pt-2">Key Features:</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>Verified Real-Time Price Drop Alerts</li>
                <li>50%+ OFF Glitch & Verified Loot Deals</li>
                <li>Exclusive Store Coupons & Vouchers</li>
              </ul>
            </>
          )}

          {type === 'about' && (
            <>
              <p>
                Founded to combat pricing inflation during sales, <strong>ShoppinGenie</strong> empowers Indian shoppers to buy at the true lowest price.
              </p>
              <p>
                Trusted by over <strong>55,000+ active shoppers</strong> across India!
              </p>
            </>
          )}

          {type === 'disclosure' && (
            <>
              <p>
                <strong>Affiliate Disclosure:</strong> ShoppinGenie is completely free for shoppers.
                When you click on links to Amazon, Flipkart, Myntra, or other stores and purchase, we may earn an affiliate commission at zero additional cost to you.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                By using ShoppinGenie (shoppingenie.in), you agree to use the platform for personal price comparison. Prices and deal availability are controlled by the respective e-commerce merchants.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p>
                We value your privacy. ShoppinGenie does not sell user data.
              </p>
            </>
          )}

          {type === 'contact' && (
            <>
              <p>Have questions or feedback?</p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>Email Support: contact@shoppingenie.in</span>
                </div>
              </div>
            </>
          )}

          {/* FAQs Accordion */}
          <div className="mt-6 pt-4 border-t border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Frequently Asked Questions:</h3>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="font-bold text-slate-900 text-xs">{faq.q}</h4>
                  <p className="text-slate-600 text-xs mt-1 font-normal">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
