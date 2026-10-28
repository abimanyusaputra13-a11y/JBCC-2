import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import OnboardingModal from './components/OnboardingModal';
import Beranda from './pages/Beranda';
import Peluang from './pages/Peluang';
import ListingSaya from './pages/ListingSaya';
import SinyalLayanan from './pages/SinyalLayanan';
import Panduan from './pages/Panduan';
import Pengaturan from './pages/Pengaturan';
import {
  initialFeedCards,
  initialOpportunities,
  initialListings,
  OPPORTUNITY_TIMEFRAME_MAP,
  OPPORTUNITY_INFLUENCERS
} from './data/mockData';
import {
  generateLiveOpportunities,
  generateLiveListings,
  generateLiveKpis,
  TICK_INTERVAL_MS,
  TOTAL_LOOP_TICKS
} from './utils/realtimeSimulator';
import { Plus, Search, Lightbulb, Package, RefreshCw } from 'lucide-react';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Core State
  const [feedCards, setFeedCards] = useState(initialFeedCards);
  const [opportunities, setOpportunities] = useState(initialOpportunities);
  const [listings, setListings] = useState(initialListings);
  const [sidebarSearch, setSidebarSearch] = useState('');

  // Realtime Looping Simulation State (cycles 24 steps every 2.5 seconds)
  const [isRealtimeActive, setIsRealtimeActive] = useState(true);
  const [currentTick, setCurrentTick] = useState(0);

  useEffect(() => {
    if (!isRealtimeActive) return;
    const interval = setInterval(() => {
      setCurrentTick((prev) => (prev + 1) % TOTAL_LOOP_TICKS);
    }, TICK_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [isRealtimeActive]);

  // Derived Live Simulated Data (looping smoothly up and down)
  const liveOpportunities = useMemo(() => {
    return generateLiveOpportunities(
      opportunities,
      currentTick,
      OPPORTUNITY_TIMEFRAME_MAP,
      OPPORTUNITY_INFLUENCERS
    );
  }, [opportunities, currentTick]);

  const liveListings = useMemo(() => {
    return generateLiveListings(listings, currentTick);
  }, [listings, currentTick]);

  const liveKpis = useMemo(() => {
    return generateLiveKpis(currentTick);
  }, [currentTick]);

  // Feature Flags & Modals
  const [showLabelCriteriaCard, setShowLabelCriteriaCard] = useState(true);
  const [isLoadingSkeleton, setIsLoadingSkeleton] = useState(false);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

  // Global card update handler
  const handleUpdateCard = (updatedCard) => {
    setFeedCards((prev) =>
      prev.map((c) => (c.id === updatedCard.id ? updatedCard : c))
    );
  };

  // Global listing update handler
  const handleUpdateListing = (updatedListing) => {
    setListings((prev) =>
      prev.map((l) => (l.id === updatedListing.id ? updatedListing : l))
    );
  };

  // Reset data handler
  const handleResetData = () => {
    setFeedCards(initialFeedCards);
    setOpportunities(initialOpportunities);
    setListings(initialListings);
    setCurrentTick(0);
    alert('Data contoh telah dikembalikan ke kondisi awal prototipe.');
  };

  // Determine current page header title & action
  const getHeaderProps = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'Beranda Insights',
          count: feedCards.filter((c) => c.state === 'new').length,
          primaryActionLabel: 'Tambah Listing',
          primaryActionIcon: Plus,
          onPrimaryAction: () => navigate('/listing-saya')
        };
      case '/peluang':
        return {
          title: 'Peluang Pasar',
          count: opportunities.length,
          primaryActionLabel: 'Cari Celah Baru',
          primaryActionIcon: Lightbulb,
          onPrimaryAction: () => {
            alert('Fitur pemindaian celah kategori baru sedang memproses data...');
          }
        };
      case '/listing-saya':
        return {
          title: 'Kesehatan Listing Saya',
          count: listings.length,
          primaryActionLabel: 'Tambah Listing Baru',
          primaryActionIcon: Plus,
          onPrimaryAction: () => {
            alert('Buka formulir pembuatan listing baru.');
          }
        };
      case '/sinyal-layanan':
        return {
          title: 'Sinyal Layanan & Pengiriman',
          count: null,
          primaryActionLabel: 'Unduh Rekap Layanan',
          primaryActionIcon: null,
          onPrimaryAction: () => {
            alert('Mengunduh rekap sinyal layanan...');
          }
        };
      case '/panduan':
        return {
          title: 'Panduan & Prinsip',
          count: null,
          primaryActionLabel: null,
          primaryActionIcon: null
        };
      case '/pengaturan':
        return {
          title: 'Pengaturan Prototipe',
          count: null,
          primaryActionLabel: null,
          primaryActionIcon: null
        };
      default:
        return {
          title: 'Lintas Seller Insights',
          count: null,
          primaryActionLabel: null,
          primaryActionIcon: null
        };
    }
  };

  const headerProps = getHeaderProps();

  return (
    <div className="app-shell">
      {/* 240px Left Sidebar */}
      <Sidebar
        searchQuery={sidebarSearch}
        onSearchChange={setSidebarSearch}
        opportunityCount={opportunities.length}
        listingCount={listings.length}
        feedCount={feedCards.filter((c) => c.state === 'new' && c.type === 'perbaikan').length}
      />

      {/* Main Frame (White, rounded, 1px border) */}
      <main className="main-frame">
        {/* Top Header */}
        <Header
          title={headerProps.title}
          count={headerProps.count}
          primaryActionLabel={headerProps.primaryActionLabel}
          primaryActionIcon={headerProps.primaryActionIcon}
          onPrimaryAction={headerProps.onPrimaryAction}
          onOpenOnboarding={() => setIsOnboardingOpen(true)}
          onRefresh={() => {
            setIsLoadingSkeleton(true);
            setTimeout(() => setIsLoadingSkeleton(false), 500);
          }}
          isRealtimeActive={isRealtimeActive}
          onToggleRealtime={() => setIsRealtimeActive((prev) => !prev)}
          tick={currentTick}
        />

        {/* Content Area */}
        <div className="main-content">
          {isLoadingSkeleton ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="skeleton" style={{ height: '110px', width: '100%' }} />
              <div className="skeleton" style={{ height: '40px', width: '300px' }} />
              <div className="skeleton" style={{ height: '180px', width: '100%' }} />
              <div className="skeleton" style={{ height: '180px', width: '100%' }} />
            </div>
          ) : (
            <Routes>
              <Route
                path="/"
                element={
                  <Beranda
                    feedCards={feedCards}
                    onUpdateCard={handleUpdateCard}
                    showLabelCriteriaCard={showLabelCriteriaCard}
                    isLoading={isLoadingSkeleton}
                    liveKpis={liveKpis}
                  />
                }
              />
              <Route
                path="/peluang"
                element={<Peluang opportunities={liveOpportunities} />}
              />
              <Route
                path="/listing-saya"
                element={
                  <ListingSaya
                    listings={liveListings}
                    onUpdateListing={handleUpdateListing}
                  />
                }
              />
              <Route
                path="/sinyal-layanan"
                element={<SinyalLayanan />}
              />
              <Route
                path="/panduan"
                element={<Panduan />}
              />
              <Route
                path="/pengaturan"
                element={
                  <Pengaturan
                    showLabelCriteriaCard={showLabelCriteriaCard}
                    onToggleLabelCriteriaCard={setShowLabelCriteriaCard}
                    isLoadingSkeleton={isLoadingSkeleton}
                    onToggleLoadingSkeleton={setIsLoadingSkeleton}
                    onResetData={handleResetData}
                  />
                }
              />
            </Routes>
          )}
        </div>

        {/* Prototype Footer Note - REQUIRED */}
        <footer className="app-footer-note">
          Data contoh untuk prototipe.
        </footer>
      </main>

      {/* Onboarding Modal Walkthrough */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
      />
    </div>
  );
}
