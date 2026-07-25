import React from 'react';
import { Send, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenInfoModal }) {
  return (
    <footer className="border-t border-white/5 pt-12 pb-8 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center">
                <span className="text-slate-950 font-black text-xs font-['Outfit']">SG</span>
              </div>
              <span className="font-black text-xl text-white font-['Outfit']">
                Shoppin<span className="gradient-text-emerald">Genie</span>
              </span>
            </div>
            <p className="text-slate-500 leading-relaxed">
              India's #1 price drop alert & deals platform tracking Amazon, Flipkart, Myntra, AJIO, Shopsy, Nykaa, Meesho, Tata CLiQ & H&M.
            </p>
            <a
              href="https://t.me/shoppingenie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-4 p-2 rounded-lg glass-card text-sky-400 hover:text-sky-300 transition-colors"
              title="Telegram Channel"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-300 uppercase tracking-wider text-[11px] mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-emerald-400 transition-colors">Home & Deals</button></li>
              <li><button onClick={() => onOpenInfoModal('what-we-do')} className="hover:text-emerald-400 transition-colors">What We Do</button></li>
              <li><button onClick={() => onOpenInfoModal('about')} className="hover:text-emerald-400 transition-colors">About Us</button></li>
              <li><button onClick={() => onOpenInfoModal('contact')} className="hover:text-emerald-400 transition-colors">Contact Support</button></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-bold text-slate-300 uppercase tracking-wider text-[11px] mb-3">Policies</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onOpenInfoModal('disclosure')} className="hover:text-emerald-400 transition-colors">Affiliate Disclosure</button></li>
              <li><button onClick={() => onOpenInfoModal('terms')} className="hover:text-emerald-400 transition-colors">Terms of Service</button></li>
              <li><button onClick={() => onOpenInfoModal('privacy')} className="hover:text-emerald-400 transition-colors">Privacy Policy</button></li>
            </ul>
          </div>

          {/* Platforms */}
          <div>
            <h4 className="font-bold text-slate-300 uppercase tracking-wider text-[11px] mb-3">Tracked Platforms</h4>
            <p className="text-slate-500 leading-relaxed mb-3">
              Amazon India, Flipkart, Myntra, AJIO, Shopsy, Nykaa, Purplle, Meesho, Tata CLiQ & H&M.
            </p>
            <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Free for Shoppers
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-600">
          <p>© {new Date().getFullYear()} ShoppinGenie (shoppingenie.in). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Smart Shoppers in India
          </p>
        </div>

      </div>
    </footer>
  );
}
