import React, { useState } from 'react';
import { Search, Send, Menu, X } from 'lucide-react';

export default function Navbar({ searchQuery, onSearch, onOpenInfoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { id: 'deals', label: 'Deals', action: () => window.scrollTo({ top: 350, behavior: 'smooth' }) },
    { id: 'about', label: 'About Us', action: () => onOpenInfoModal('about') },
    { id: 'what-we-do', label: 'What We Do', action: () => onOpenInfoModal('what-we-do') },
    { id: 'disclosure', label: 'Disclosure', action: () => onOpenInfoModal('disclosure') },
    { id: 'terms', label: 'Terms', action: () => onOpenInfoModal('terms') },
    { id: 'privacy', label: 'Privacy', action: () => onOpenInfoModal('privacy') },
    { id: 'contact', label: 'Contact', action: () => onOpenInfoModal('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 slate-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white p-0.5 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center">
                <span className="text-xl sm:text-2xl">🧞‍♂️</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-xl sm:text-2xl tracking-tight text-white font-['Outfit']">
                  Shoppin<span className="gradient-text-emerald">Genie</span>
                </span>
                <span className="hidden xs:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5" /> LIVE
                </span>
              </div>
              <p className="text-[10px] text-slate-300 font-medium hidden sm:block">India's Verified Price Drop & Loot Alerts</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md relative">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search deals across Amazon, Flipkart, Myntra..."
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full pl-10 pr-8 py-2 text-xs sm:text-sm rounded-xl slate-input placeholder-slate-400 text-white"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 text-xs font-bold text-slate-200">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="px-3 py-2 rounded-lg hover:text-white hover:bg-slate-800 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Telegram CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://t.me/shoppingenie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Join Telegram (55K+)</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://t.me/shoppingenie"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold flex items-center gap-1 sm:hidden"
            >
              <Send className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-3 pt-1">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search deals..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-10 pr-8 py-2 text-xs rounded-xl slate-input placeholder-slate-400 text-white"
            />
            {searchQuery && (
              <button
                onClick={() => onSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#0f172a] px-4 py-4 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => { setMobileMenuOpen(false); item.action(); }}
                className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 text-center hover:text-white hover:border-emerald-500"
              >
                {item.label}
              </button>
            ))}
          </div>
          <a
            href="https://t.me/shoppingenie"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 mt-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Join Telegram Channel (55K+ Shoppers)</span>
          </a>
        </div>
      )}
    </header>
  );
}
