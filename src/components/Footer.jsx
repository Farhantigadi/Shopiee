import React from 'react';

export default function Footer({ onOpenInfoModal }) {
  return (
    <footer className="border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-sm bg-[#f0f0f0] flex items-center justify-center">
                <span className="text-[#0c0c0c] font-bold text-[9px]" style={{ fontFamily: 'Syne, sans-serif' }}>SG</span>
              </div>
              <span className="text-[#f0f0f0] font-semibold text-[13px]" style={{ fontFamily: 'Syne, sans-serif' }}>ShoppinGenie</span>
            </div>
            <p className="text-[12px] text-[#333] leading-relaxed">
              India's price drop intelligence platform. Tracking Amazon, Flipkart, Myntra, AJIO, Shopsy, Nykaa, Meesho, Tata CLiQ & H&M.
            </p>
          </div>

          <div>
            <p className="label mb-3">Navigate</p>
            <ul className="space-y-2 text-[12px] text-[#444]">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#f0f0f0] transition-colors">Home</button></li>
              <li><button onClick={() => onOpenInfoModal('what-we-do')} className="hover:text-[#f0f0f0] transition-colors">What We Do</button></li>
              <li><button onClick={() => onOpenInfoModal('about')} className="hover:text-[#f0f0f0] transition-colors">About</button></li>
              <li><button onClick={() => onOpenInfoModal('contact')} className="hover:text-[#f0f0f0] transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <p className="label mb-3">Legal</p>
            <ul className="space-y-2 text-[12px] text-[#444]">
              <li><button onClick={() => onOpenInfoModal('disclosure')} className="hover:text-[#f0f0f0] transition-colors">Affiliate Disclosure</button></li>
              <li><button onClick={() => onOpenInfoModal('terms')} className="hover:text-[#f0f0f0] transition-colors">Terms of Service</button></li>
              <li><button onClick={() => onOpenInfoModal('privacy')} className="hover:text-[#f0f0f0] transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          <div>
            <p className="label mb-3">Platforms</p>
            <p className="text-[12px] text-[#333] leading-relaxed">
              Amazon · Flipkart · Myntra · AJIO · Shopsy · Nykaa · Purplle · Meesho · Tata CLiQ · H&M
            </p>
          </div>

        </div>

        <div className="pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#2a2a2a]">
          <p>© {new Date().getFullYear()} ShoppinGenie · shoppingenie.in · All rights reserved.</p>
          <p>Free for shoppers · Affiliate supported</p>
        </div>

      </div>
    </footer>
  );
}
