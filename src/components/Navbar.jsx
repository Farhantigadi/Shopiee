import React, { useState } from 'react';
import { Search, Send, Menu, X } from 'lucide-react';

export default function Navbar({ searchQuery, onSearch, onOpenInfoModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { id: 'deals',      label: 'Deals',      action: () => window.scrollTo({ top: 350, behavior: 'smooth' }) },
    { id: 'about',      label: 'About',      action: () => onOpenInfoModal('about') },
    { id: 'what-we-do', label: 'What We Do', action: () => onOpenInfoModal('what-we-do') },
    { id: 'disclosure', label: 'Disclosure', action: () => onOpenInfoModal('disclosure') },
    { id: 'terms',      label: 'Terms',      action: () => onOpenInfoModal('terms') },
    { id: 'privacy',    label: 'Privacy',    action: () => onOpenInfoModal('privacy') },
    { id: 'contact',    label: 'Contact',    action: () => onOpenInfoModal('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 site-nav">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-16 sm:h-[72px] gap-6">

          {/* Brand */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 shrink-0"
          >
            <div className="w-7 h-7 rounded bg-[#f0f0f0] flex items-center justify-center">
              <span className="text-[#0c0c0c] font-bold text-[11px] tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>SG</span>
            </div>
            <span className="text-[#f0f0f0] font-semibold text-[15px] tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              ShoppinGenie
            </span>
          </button>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xs relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#444]" />
            <input
              type="text"
              placeholder="Search deals, stores..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 text-[13px] rounded-md site-input"
            />
            {searchQuery && (
              <button onClick={() => onSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#444] hover:text-[#f0f0f0] text-xs">✕</button>
            )}
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center ml-auto">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} onClick={item.action} className="nav-link">
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="https://t.me/shoppingenie"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-telegram hidden sm:inline-flex shrink-0"
          >
            <Send className="w-3 h-3" />
            Telegram
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon lg:hidden ml-auto"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile search */}
        <div className="md:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#444]" />
            <input
              type="text"
              placeholder="Search deals..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-9 pr-8 py-1.5 text-[13px] rounded-md site-input"
            />
            {searchQuery && (
              <button onClick={() => onSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#444] hover:text-[#f0f0f0] text-xs">✕</button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#222] bg-[#0c0c0c] px-6 py-4">
          <div className="grid grid-cols-2 gap-1 mb-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => { setMobileMenuOpen(false); item.action(); }}
                className="px-3 py-2 text-left text-[13px] text-[#555] hover:text-[#f0f0f0] transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
          <a
            href="https://t.me/shoppingenie"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-telegram w-full justify-center"
          >
            <Send className="w-3.5 h-3.5" />
            Join Telegram
          </a>
        </div>
      )}
    </header>
  );
}
