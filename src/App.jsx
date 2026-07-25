import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import FilterBar from './components/FilterBar';
import DealsGrid from './components/DealsGrid';
import FaqSection from './components/FaqSection';
import CommunityBanner from './components/CommunityBanner';
import Footer from './components/Footer';
import InfoModal from './components/InfoModal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStore, setSelectedStore] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Modal state for sitewide pages
  const [infoModalType, setInfoModalType] = useState(null);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedStore('all');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-[#0d0d12] text-[#888] flex flex-col antialiased">
      
      {/* Header Navigation */}
      <Navbar
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        onOpenInfoModal={setInfoModalType}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroBanner searchQuery={searchQuery} onSearch={setSearchQuery} />

        {/* Store & Category Filter Bar */}
        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedStore={selectedStore}
          onSelectStore={setSelectedStore}
          sortBy={sortBy}
          onSelectSort={setSortBy}
          totalResultsCount={8}
        />

        {/* Main Deals Grid */}
        <div id="deals-section">
          <DealsGrid
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            selectedStore={selectedStore}
            sortBy={sortBy}
            onResetFilters={handleResetFilters}
          />
        </div>

        {/* Official FAQs */}
        <FaqSection />

        {/* Telegram & WhatsApp Community Banner */}
        <CommunityBanner />
      </main>

      {/* Footer */}
      <Footer onOpenInfoModal={setInfoModalType} />

      {/* Page Modals (About, What We Do, Disclosure, Terms, Privacy, Contact) */}
      {infoModalType && (
        <InfoModal type={infoModalType} onClose={() => setInfoModalType(null)} />
      )}

    </div>
  );
}
