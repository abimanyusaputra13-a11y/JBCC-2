import React, { useState, useMemo } from 'react';
import SegmentedBar from '../components/SegmentedBar';
import Pill from '../components/Pill';
import OpportunityDetailDrawer from '../components/OpportunityDetailDrawer';
import FloatingBar from '../components/FloatingBar';
import { TIMEFRAME_OPTIONS, GAP_CATEGORIES, getOpportunityTrendForTimeframe, getInfluencersForOpportunity } from '../data/mockData';
import {
  Search,
  Filter,
  ArrowUpDown,
  LayoutGrid,
  List,
  MoreVertical,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  TrendingUp,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Users,
  Flame
} from 'lucide-react';

const CATEGORY_STYLES = {
  Harga: {
    color: '#b45309',
    bg: '#fef3c7',
    border: '#fde68a'
  },
  Produk: {
    color: '#3449a1',
    bg: '#eff3fc',
    border: '#dbeafe'
  },
  Kemasan: {
    color: '#0f766e',
    bg: '#ccfbf1',
    border: '#99f6e4'
  },
  Pengiriman: {
    color: '#15803d',
    bg: '#dcfce7',
    border: '#bbf7d0'
  }
};

function DeltaBadge({ delta, style = {} }) {
  if (!delta) return null;
  const isUp = delta.startsWith('+');
  const isDown = delta.startsWith('-');
  const color = isUp ? 'var(--success)' : isDown ? 'var(--danger)' : 'var(--text-secondary)';
  const bg = isUp ? 'var(--success-bg)' : isDown ? 'var(--danger-bg)' : 'var(--tint-hover)';

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '2px',
        fontSize: '11px',
        fontWeight: 600,
        color,
        backgroundColor: bg,
        padding: '1px 6px',
        borderRadius: 'var(--radius-pill)',
        lineHeight: 1.2,
        ...style
      }}
    >
      {isUp && <ArrowUpRight size={11} />}
      {isDown && <ArrowDownRight size={11} />}
      {!isUp && !isDown && <Minus size={11} />}
      <span>{delta}</span>
    </span>
  );
}

function formatTitleCase(str) {
  if (!str) return '';
  return str.replace(/\b\w+/g, (word) => {
    if (word.toUpperCase() === 'SPF') return 'SPF';
    if (word.toUpperCase() === 'EDP') return 'EDP';
    if (word.toUpperCase() === 'BPC') return 'BPC';
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}

export default function Peluang({ opportunities }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeframe, setTimeframe] = useState('30d'); // '30d' | '7d' | '90d' | '12m'
  const [categoryFilter, setCategoryFilter] = useState('all'); // 'all' | 'Harga' | 'Produk' | 'Kemasan' | 'Pengiriman'
  const [trendFilter, setTrendFilter] = useState('all'); // 'all' | 'Naik' | 'Stabil' | 'Melonjak'
  const [crowdingFilter, setCrowdingFilter] = useState('all'); // 'all' | 'Terbuka' | 'Mulai ramai' | 'Jenuh'
  const [confidenceFilter, setConfidenceFilter] = useState('all'); // 'all' | 'high' (>=8) | 'medium' (>=6)
  const [gapFilter, setGapFilter] = useState('all'); // 'all' | specific 2-word gap
  const [sortBy, setSortBy] = useState('volume'); // 'volume' | 'demand' | 'confidence'
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'cards'
  const [selectedIds, setSelectedIds] = useState([]);
  const [activeOpportunity, setActiveOpportunity] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null);

  // Calculate count for each gap category
  const categoryCounts = useMemo(() => {
    const counts = { all: opportunities.length, Harga: 0, Produk: 0, Kemasan: 0, Pengiriman: 0 };
    opportunities.forEach((o) => {
      if (o.gapCategory && counts[o.gapCategory] !== undefined) {
        counts[o.gapCategory]++;
      }
    });
    return counts;
  }, [opportunities]);

  // Extract unique 2-word gaps for easy grouping / filtering
  const availableGaps = useMemo(() => {
    const set = new Set();
    opportunities.forEach((o) => {
      if (categoryFilter === 'all' || o.gapCategory === categoryFilter) {
        if (o.gapType) set.add(o.gapType);
      }
    });
    return Array.from(set).sort();
  }, [opportunities, categoryFilter]);

  // Filter & Sort logic
  const filteredOpportunities = useMemo(() => {
    return opportunities
      .filter((opp) => {
        // Search filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchProduct = opp.productType.toLowerCase().includes(q);
          const matchCategory = opp.gapCategory && opp.gapCategory.toLowerCase().includes(q);
          const matchGap =
            opp.gapType.toLowerCase().includes(q) ||
            (opp.gapDetail && opp.gapDetail.toLowerCase().includes(q));
          if (!matchProduct && !matchGap && !matchCategory) return false;
        }

        // Category filter (Pengelompokan Celah: Harga, Produk, Kemasan, Pengiriman)
        if (categoryFilter !== 'all' && opp.gapCategory !== categoryFilter) {
          return false;
        }

        // Specific Gap filter
        if (gapFilter !== 'all' && opp.gapType !== gapFilter) {
          return false;
        }

        // Timeframe Trend filter
        if (trendFilter !== 'all') {
          const trendData = getOpportunityTrendForTimeframe(opp, timeframe);
          if (trendData.trend !== trendFilter) return false;
        }

        // Crowding status filter
        if (crowdingFilter !== 'all' && opp.crowdingStatus !== crowdingFilter) {
          return false;
        }

        // Confidence filter
        if (confidenceFilter === 'high' && opp.confidenceScore < 8) return false;
        if (confidenceFilter === 'medium' && opp.confidenceScore < 6) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'volume') {
          const trendA = getOpportunityTrendForTimeframe(a, timeframe);
          const trendB = getOpportunityTrendForTimeframe(b, timeframe);
          const numA = parseInt(trendA.searchVolume.replace(/\D/g, ''), 10) || 0;
          const numB = parseInt(trendB.searchVolume.replace(/\D/g, ''), 10) || 0;
          return numB - numA;
        }
        if (sortBy === 'demand') {
          return b.demandPerListing - a.demandPerListing;
        }
        if (sortBy === 'confidence') {
          return b.confidenceScore - a.confidenceScore;
        }
        return 0;
      });
  }, [opportunities, searchQuery, timeframe, categoryFilter, gapFilter, trendFilter, crowdingFilter, confidenceFilter, sortBy]);

  // Selection handlers
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(filteredOpportunities.map((o) => o.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectRow = (id, e) => {
    e.stopPropagation();
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div>
      {/* Page description banner */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
          padding: '12px 16px',
          backgroundColor: '#fafbfc',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Lightbulb size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <div style={{ fontSize: '13px', color: 'var(--navy)' }}>
            <strong>Celah Permintaan Pasar:</strong> Identifikasi produk dengan volume pencarian tinggi yang belum dipenuhi oleh penawaran seimbang di marketplace.
          </div>
        </div>
      </div>

      {/* Tab Strip Pengelompokan Kategori Celah (Harga, Produk, Kemasan, Pengiriman) */}
      <div className="tabs-nav" style={{ marginBottom: '16px' }}>
        {GAP_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`tab-btn ${categoryFilter === cat.id ? 'active' : ''}`}
            onClick={() => {
              setCategoryFilter(cat.id);
              setGapFilter('all');
            }}
          >
            <span>{cat.label}</span>
            <span className="tab-badge">{categoryCounts[cat.id] ?? 0}</span>
          </button>
        ))}
      </div>

      {/* Toolbar above the table */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          marginBottom: '16px',
          flexWrap: 'wrap'
        }}
      >
        {/* Left Toolbar: Search & Filters */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {/* Search */}
          <div style={{ position: 'relative', width: '220px' }}>
            <Search
              size={14}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)'
              }}
            />
            <input
              type="text"
              placeholder="Cari jenis produk atau celah..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '6px 12px 6px 30px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '13px',
                backgroundColor: '#ffffff'
              }}
            />
          </div>

          {/* Timeframe Filter (Rentang Waktu Tren) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Calendar size={13} style={{ color: 'var(--text-muted)' }} />
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              style={{
                padding: '6px 10px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '12px',
                backgroundColor: '#ffffff',
                color: 'var(--navy)',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              title="Pilih rentang waktu (timeframe) analisis tren"
            >
              {TIMEFRAME_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Trend Filter (Arah Pergerakan Tren) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingUp size={13} style={{ color: 'var(--text-muted)' }} />
            <select
              value={trendFilter}
              onChange={(e) => setTrendFilter(e.target.value)}
              style={{
                padding: '6px 10px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '12px',
                backgroundColor: '#ffffff',
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
              title="Filter tren berdasarkan pergerakan pada timeframe terpilih"
            >
              <option value="all">Semua Arah Tren</option>
              <option value="Naik">Tren Naik</option>
              <option value="Stabil">Tren Stabil</option>
              <option value="Melonjak">Tren Melonjak (Hati-hati)</option>
            </select>
          </div>

          {/* Jenis Celah filter (Pengelompokan 2 Kata) */}
          <select
            value={gapFilter}
            onChange={(e) => setGapFilter(e.target.value)}
            style={{
              padding: '6px 10px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px',
              backgroundColor: '#ffffff',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
            title="Kelompokkan dan filter berdasarkan jenis celah"
          >
            <option value="all">Semua Jenis Celah</option>
            {availableGaps.map((gap) => (
              <option key={gap} value={gap}>
                {gap}
              </option>
            ))}
          </select>

          {/* Crowding filter */}
          <select
            value={crowdingFilter}
            onChange={(e) => setCrowdingFilter(e.target.value)}
            style={{
              padding: '6px 10px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px',
              backgroundColor: '#ffffff',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            <option value="all">Semua Status Keramaian</option>
            <option value="Terbuka">Terbuka (Persaingan Rendah)</option>
            <option value="Mulai ramai">Mulai Ramai</option>
            <option value="Jenuh">Jenuh (Persaingan Padat)</option>
          </select>

          {/* Confidence filter */}
          <select
            value={confidenceFilter}
            onChange={(e) => setConfidenceFilter(e.target.value)}
            style={{
              padding: '6px 10px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              fontSize: '12px',
              backgroundColor: '#ffffff',
              color: 'var(--text-primary)',
              cursor: 'pointer'
            }}
          >
            <option value="all">Semua Keyakinan</option>
            <option value="high">Keyakinan Tinggi (≥ 8/10)</option>
            <option value="medium">Keyakinan Sedang (≥ 6/10)</option>
          </select>
        </div>

        {/* Right Toolbar: Sort & View Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Sort */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Urutkan:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '6px 10px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '12px',
                backgroundColor: '#ffffff',
                color: 'var(--text-primary)',
                cursor: 'pointer'
              }}
            >
              <option value="volume">Volume Pencarian</option>
              <option value="demand">Permintaan per Listing</option>
              <option value="confidence">Tingkat Keyakinan</option>
            </select>
          </div>

          {/* View Toggle */}
          <div
            style={{
              display: 'flex',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden'
            }}
          >
            <button
              type="button"
              onClick={() => setViewMode('table')}
              style={{
                padding: '6px 8px',
                backgroundColor: viewMode === 'table' ? 'var(--tint-hover)' : '#ffffff',
                color: viewMode === 'table' ? 'var(--primary)' : 'var(--text-secondary)',
                borderRight: '1px solid var(--border)'
              }}
              title="Tampilan Tabel"
            >
              <List size={14} />
            </button>
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              style={{
                padding: '6px 8px',
                backgroundColor: viewMode === 'cards' ? 'var(--tint-hover)' : '#ffffff',
                color: viewMode === 'cards' ? 'var(--primary)' : 'var(--text-secondary)'
              }}
              title="Tampilan Ringkas"
            >
              <LayoutGrid size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* VIEW: TABLE */}
      {viewMode === 'table' && (
        <div className="data-table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th style={{ width: '40px', textAlign: 'center' }}>
                  <input
                    type="checkbox"
                    className="custom-checkbox"
                    checked={
                      filteredOpportunities.length > 0 &&
                      selectedIds.length === filteredOpportunities.length
                    }
                    onChange={handleSelectAll}
                    title="Pilih semua"
                  />
                </th>
                <th style={{ minWidth: '220px' }}>Jenis Produk</th>
                <th style={{ whiteSpace: 'nowrap' }}>Volume Pencarian</th>
                <th style={{ whiteSpace: 'nowrap' }}>
                  Tren ({TIMEFRAME_OPTIONS.find((t) => t.value === timeframe)?.shortLabel || '30 Hari'})
                </th>
                <th style={{ minWidth: '140px', whiteSpace: 'nowrap' }}>Jenis Celah</th>
                <th style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>Listing Aktif</th>
                <th style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>Permintaan/Listing</th>
                <th style={{ whiteSpace: 'nowrap' }}>Status Keramaian</th>
                <th style={{ minWidth: '160px', whiteSpace: 'nowrap' }}>Keyakinan</th>
                <th style={{ width: '40px' }}></th>
              </tr>
            </thead>
            <tbody>
              {filteredOpportunities.map((opp) => {
                const isSelected = selectedIds.includes(opp.id);
                const currentTrend = getOpportunityTrendForTimeframe(opp, timeframe);
                const oppInfluencers = getInfluencersForOpportunity(opp.id, opp);
                const topInfluencerER = oppInfluencers.length > 0 ? Math.max(...oppInfluencers.map((i) => i.engagementRate)) : null;

                return (
                  <tr
                    key={opp.id}
                    className={isSelected ? 'row-selected' : ''}
                    onClick={() => setActiveOpportunity(opp)}
                  >
                    {/* Checkbox */}
                    <td
                      style={{ textAlign: 'center' }}
                      onClick={(e) => handleSelectRow(opp.id, e)}
                    >
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                      />
                    </td>

                    {/* Jenis Produk (Generic product types only, NO brand names) */}
                    <td style={{ minWidth: '230px' }}>
                      <div style={{ fontWeight: 600, color: 'var(--navy)' }}>
                        {formatTitleCase(opp.productType)}
                      </div>
                      {oppInfluencers.length > 0 && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveOpportunity(opp);
                            }}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '2px 8px',
                              borderRadius: 'var(--radius-pill)',
                              fontSize: '11px',
                              fontWeight: 600,
                              backgroundColor: 'var(--tint-hover)',
                              color: 'var(--primary)',
                              border: '1px solid color-mix(in srgb, var(--primary) 22%, transparent)',
                              cursor: 'pointer'
                            }}
                            title="Buka daftar rekomendasi influencer berdasarkan engagement rate"
                          >
                            <Users size={11} />
                            <span>{oppInfluencers.length} Influencer</span>
                            {topInfluencerER && (
                              <span style={{ color: 'var(--success)', fontWeight: 700 }}>• ER {topInfluencerER}%</span>
                            )}
                          </button>
                        </div>
                      )}
                    </td>

                    {/* Volume Pencarian */}
                    <td style={{ whiteSpace: 'nowrap', fontWeight: 500 }}>
                      {currentTrend.searchVolume}
                    </td>

                    {/* Tren (Naik / Stabil / Melonjak caution) */}
                    <td style={{ whiteSpace: 'nowrap' }}>
                      {currentTrend.trend === 'Melonjak' ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ color: 'var(--warning)', fontWeight: 600, fontSize: '12px' }}>
                            Melonjak {currentTrend.delta}
                          </span>
                          <span
                            style={{
                              fontSize: '11px',
                              color: 'var(--warning)',
                              backgroundColor: 'var(--warning-bg)',
                              padding: '1px 5px',
                              borderRadius: '3px'
                            }}
                            title={currentTrend.caution || 'Hati-hati lonjakan musiman'}
                          >
                            (hati-hati)
                          </span>
                        </div>
                      ) : currentTrend.trend === 'Naik' ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--success)', fontWeight: 600, fontSize: '12px' }}>
                          <TrendingUp size={13} />
                          <span>Naik {currentTrend.delta}</span>
                        </div>
                      ) : (
                        <span style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>
                          Stabil {currentTrend.delta}
                        </span>
                      )}
                    </td>

                    {/* Jenis Celah (Kategori + Celah Spesifik 2-Kata) */}
                    <td style={{ whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-start' }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '1px 6px',
                            borderRadius: '4px',
                            fontSize: '10px',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            color: CATEGORY_STYLES[opp.gapCategory]?.color || 'var(--primary)',
                            backgroundColor: CATEGORY_STYLES[opp.gapCategory]?.bg || '#eff3fc',
                            border: `1px solid ${CATEGORY_STYLES[opp.gapCategory]?.border || '#dbeafe'}`
                          }}
                        >
                          {opp.gapCategory}
                        </span>
                        <span
                          title={opp.gapDetail || opp.gapType}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: 600,
                            backgroundColor: '#f1f4fb',
                            color: 'var(--navy)',
                            border: '1px solid color-mix(in srgb, var(--primary) 18%, transparent)',
                            cursor: 'default'
                          }}
                        >
                          {opp.gapType}
                        </span>
                      </div>
                    </td>

                    {/* Listing Aktif */}
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                      <div style={{ fontWeight: 600, color: 'var(--navy)', fontSize: '13px' }}>
                        {opp.activeListings}
                      </div>
                      <div style={{ marginTop: '2px' }}>
                        <DeltaBadge delta={currentTrend.listingsDelta} />
                      </div>
                    </td>

                    {/* Permintaan per Listing */}
                    <td style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>
                      <div style={{ fontWeight: 700, color: 'var(--navy)', fontSize: '13px' }}>
                        {opp.demandPerListing.toLocaleString('id-ID')}
                      </div>
                      <div style={{ marginTop: '2px' }}>
                        <DeltaBadge delta={currentTrend.demandDelta} />
                      </div>
                    </td>

                    {/* Status Keramaian (Outlined small-caps pill) */}
                    <td>
                      <Pill
                        label={opp.crowdingStatus}
                        variant={
                          opp.crowdingStatus === 'Terbuka'
                            ? 'success'
                            : opp.crowdingStatus === 'Mulai ramai'
                            ? 'warning'
                            : 'danger'
                        }
                        dot
                        size="sm"
                      />
                    </td>

                    {/* Keyakinan (segmented bar next to x/10 badge) */}
                    <td style={{ minWidth: '160px', whiteSpace: 'nowrap' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <SegmentedBar total={10} filled={opp.confidenceScore} size="sm" />
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            color: 'var(--text-secondary)',
                            minWidth: '28px'
                          }}
                        >
                          {opp.confidenceScore}/10
                        </span>
                      </div>
                    </td>

                    {/* Row Menu */}
                    <td onClick={(e) => e.stopPropagation()}>
                      <div style={{ position: 'relative' }}>
                        <button
                          type="button"
                          className="btn-icon"
                          style={{ width: '28px', height: '28px' }}
                          onClick={() => setActiveMenuId(activeMenuId === opp.id ? null : opp.id)}
                        >
                          <MoreVertical size={14} />
                        </button>

                        {activeMenuId === opp.id && (
                          <div
                            style={{
                              position: 'absolute',
                              right: 0,
                              top: '30px',
                              width: '180px',
                              backgroundColor: '#ffffff',
                              border: '1px solid var(--border)',
                              borderRadius: 'var(--radius-sm)',
                              boxShadow: 'var(--shadow-menu)',
                              zIndex: 20,
                              padding: '4px'
                            }}
                          >
                            <button
                              type="button"
                              className="btn btn-ghost btn-sm"
                              style={{ width: '100%', textAlign: 'left', justifyContent: 'flex-start' }}
                              onClick={() => {
                                setActiveMenuId(null);
                                setActiveOpportunity(opp);
                              }}
                            >
                              Lihat bukti data
                            </button>
                            <button
                              type="button"
                              className="btn btn-ghost btn-sm"
                              style={{ width: '100%', textAlign: 'left', justifyContent: 'flex-start', color: 'var(--primary)', fontWeight: 600 }}
                              onClick={() => {
                                setActiveMenuId(null);
                                setActiveOpportunity(opp);
                              }}
                            >
                              <Users size={12} style={{ marginRight: '6px' }} />
                              Rekomendasi influencer
                            </button>
                            <button
                              type="button"
                              className="btn btn-ghost btn-sm"
                              style={{ width: '100%', textAlign: 'left', justifyContent: 'flex-start' }}
                              onClick={() => {
                                setActiveMenuId(null);
                                alert(`Tersimpan ke catatan eksplorasi: ${opp.productType}`);
                              }}
                            >
                              Simpan ke catatan
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filteredOpportunities.length === 0 && (
            <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
              Tidak ada peluang yang cocok dengan filter pencarian.
            </div>
          )}
        </div>
      )}

      {/* VIEW: CARDS (Grid View) */}
      {viewMode === 'cards' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {filteredOpportunities.map((opp) => {
            const currentTrend = getOpportunityTrendForTimeframe(opp, timeframe);
            const oppInfluencers = getInfluencersForOpportunity(opp.id, opp);
            const topInfluencerER = oppInfluencers.length > 0 ? Math.max(...oppInfluencers.map((i) => i.engagementRate)) : null;

            return (
              <div
                key={opp.id}
                onClick={() => setActiveOpportunity(opp)}
                style={{
                  padding: '16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  transition: 'border-color 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Pill
                    label={opp.crowdingStatus}
                    variant={
                      opp.crowdingStatus === 'Terbuka'
                        ? 'success'
                        : opp.crowdingStatus === 'Mulai ramai'
                        ? 'warning'
                        : 'danger'
                    }
                    dot
                    size="sm"
                  />
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color:
                        currentTrend.trend === 'Naik'
                          ? 'var(--success)'
                          : currentTrend.trend === 'Melonjak'
                          ? 'var(--warning)'
                          : 'var(--text-secondary)'
                    }}
                  >
                    {currentTrend.trend} {currentTrend.delta}
                  </span>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '1px 6px',
                        borderRadius: '4px',
                        fontSize: '10px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        color: CATEGORY_STYLES[opp.gapCategory]?.color || 'var(--primary)',
                        backgroundColor: CATEGORY_STYLES[opp.gapCategory]?.bg || '#eff3fc',
                        border: `1px solid ${CATEGORY_STYLES[opp.gapCategory]?.border || '#dbeafe'}`
                      }}
                    >
                      {opp.gapCategory}
                    </span>
                    <span
                      title={opp.gapDetail || opp.gapType}
                      style={{
                        display: 'inline-block',
                        padding: '1px 7px',
                        borderRadius: '10px',
                        fontSize: '11px',
                        fontWeight: 600,
                        backgroundColor: '#f1f4fb',
                        color: 'var(--navy)',
                        border: '1px solid color-mix(in srgb, var(--primary) 18%, transparent)'
                      }}
                    >
                      {opp.gapType}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy)', margin: 0 }}>
                    {formatTitleCase(opp.productType)}
                  </h3>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px',
                    backgroundColor: '#fafbfc',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '11px'
                  }}
                >
                  <div>
                    <div style={{ color: 'var(--text-muted)' }}>
                      Pencarian ({TIMEFRAME_OPTIONS.find((t) => t.value === timeframe)?.shortLabel || '30 Hari'})
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--navy)' }}>{currentTrend.searchVolume}</div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-muted)' }}>Listing Aktif</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{opp.activeListings}</span>
                      <DeltaBadge delta={currentTrend.listingsDelta} style={{ fontSize: '10px', padding: '0 4px' }} />
                    </div>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-muted)' }}>Permintaan/Listing</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <span style={{ fontWeight: 600, color: 'var(--navy)' }}>{opp.demandPerListing.toLocaleString('id-ID')}</span>
                      <DeltaBadge delta={currentTrend.demandDelta} style={{ fontSize: '10px', padding: '0 4px' }} />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Keyakinan:</span>
                    <SegmentedBar total={10} filled={opp.confidenceScore} size="sm" />
                    <span style={{ fontSize: '11px', fontWeight: 600 }}>{opp.confidenceScore}/10</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {oppInfluencers.length > 0 && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveOpportunity(opp);
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          padding: '2px 7px',
                          borderRadius: 'var(--radius-pill)',
                          fontSize: '11px',
                          fontWeight: 600,
                          backgroundColor: 'var(--tint-hover)',
                          color: 'var(--primary)',
                          border: '1px solid color-mix(in srgb, var(--primary) 22%, transparent)',
                          cursor: 'pointer'
                        }}
                        title="Lihat rekomendasi influencer"
                      >
                        <Users size={11} />
                        <span>{oppInfluencers.length} Kreator</span>
                        {topInfluencerER && (
                          <span style={{ color: 'var(--success)', fontWeight: 700 }}>• {topInfluencerER}%</span>
                        )}
                      </button>
                    )}
                    <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 500 }}>
                      Detail bukti →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Floating Dark Pill Bar for Bulk Selection */}
      <FloatingBar
        selectedCount={selectedIds.length}
        onClearSelection={() => setSelectedIds([])}
        onBulkViewSuggestions={() => {
          alert(`Meninjau rincian untuk ${selectedIds.length} peluang terpilih.`);
        }}
        onBulkRemindLater={() => {
          alert(`${selectedIds.length} peluang disimpan untuk pengingat minggu depan.`);
          setSelectedIds([]);
        }}
      />

      {/* Right Drawer for Opportunity Details */}
      <OpportunityDetailDrawer
        isOpen={Boolean(activeOpportunity)}
        opportunity={
          activeOpportunity
            ? opportunities.find((o) => o.id === activeOpportunity.id) || activeOpportunity
            : null
        }
        timeframe={timeframe}
        onClose={() => setActiveOpportunity(null)}
      />
    </div>
  );
}
