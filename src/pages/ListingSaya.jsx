import React, { useState, useMemo } from 'react';
import Sparkline from '../components/Sparkline';
import Pill from '../components/Pill';
import SegmentedBar from '../components/SegmentedBar';
import FloatingBar from '../components/FloatingBar';
import ListingDetailDrawer from '../components/ListingDetailDrawer';
import { getIssueForListing } from '../data/mockData';
import {
  Search,
  Filter,
  Package,
  MoreVertical,
  AlertCircle,
  AlertTriangle,
  Sparkles,
  ArrowUpDown
} from 'lucide-react';

export default function ListingSaya({ listings, onUpdateListing }) {
  const [activeTab, setActiveTab] = useState('semua'); // 'semua' | 'perhatian' | 'habis' | 'kurang_data'
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('impressions'); // 'impressions' | 'clicks' | 'purchases' | 'stock'
  const [selectedIds, setSelectedIds] = useState([]);
  const [activeListing, setActiveListing] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null);

  // Tabs categorization
  const tabCounts = useMemo(() => {
    return {
      semua: listings.length,
      perhatian: listings.filter((l) => {
        const issue = l.issue || getIssueForListing(l.id);
        return (
          (issue && (issue.severity === 'danger' || issue.severity === 'warning')) ||
          l.stockStatus === 'Menipis' ||
          l.completenessScore < 7
        );
      }).length,
      habis: listings.filter((l) => l.stockStatus === 'Habis' || l.stockCount === 0).length,
      kurang_data: listings.filter((l) => l.lowTraffic || l.impressions < 200).length
    };
  }, [listings]);

  // Filtered & Sorted Listings
  const filteredListings = useMemo(() => {
    return listings
      .filter((item) => {
        // Tab filter
        if (activeTab === 'perhatian') {
          const issue = item.issue || getIssueForListing(item.id);
          const isUrgent =
            (issue && (issue.severity === 'danger' || issue.severity === 'warning')) ||
            item.stockStatus === 'Menipis' ||
            item.completenessScore < 7;
          if (!isUrgent) return false;
        } else if (activeTab === 'habis') {
          if (item.stockStatus !== 'Habis' && item.stockCount > 0) return false;
        } else if (activeTab === 'kurang_data') {
          if (!item.lowTraffic && item.impressions >= 200) return false;
        }

        // Search
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = item.name.toLowerCase().includes(q);
          const matchId = item.id.toLowerCase().includes(q);
          if (!matchName && !matchId) return false;
        }

        // Category filter
        if (categoryFilter !== 'all' && item.category !== categoryFilter) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'impressions') return b.impressions - a.impressions;
        if (sortBy === 'clicks') return b.clicks - a.clicks;
        if (sortBy === 'purchases') return b.purchases - a.purchases;
        if (sortBy === 'stock') return a.stockCount - b.stockCount;
        return 0;
      });
  }, [listings, activeTab, searchQuery, categoryFilter, sortBy]);

  // Selection logic
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(filteredListings.map((l) => l.id));
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
      {/* Tab Strip */}
      <div className="tabs-nav">
        <button
          type="button"
          className={`tab-btn ${activeTab === 'semua' ? 'active' : ''}`}
          onClick={() => setActiveTab('semua')}
        >
          <span>Semua Listing</span>
          <span className="tab-badge">{tabCounts.semua}</span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === 'perhatian' ? 'active' : ''}`}
          onClick={() => setActiveTab('perhatian')}
        >
          <span>Perlu Perhatian</span>
          <span className="tab-badge">{tabCounts.perhatian}</span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === 'habis' ? 'active' : ''}`}
          onClick={() => setActiveTab('habis')}
        >
          <span>Stok Habis</span>
          <span className="tab-badge">{tabCounts.habis}</span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === 'kurang_data' ? 'active' : ''}`}
          onClick={() => setActiveTab('kurang_data')}
        >
          <span>Data Belum Cukup</span>
          <span className="tab-badge">{tabCounts.kurang_data}</span>
        </button>
      </div>

      {/* Toolbar */}
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
        {/* Left Toolbar: Search & Sub-category Filter */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ position: 'relative', width: '260px' }}>
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
              placeholder="Cari judul produk atau ID..."
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

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
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
            <option value="all">Semua Sub-Kategori</option>
            <option value="Skincare Wajah">Skincare Wajah</option>
            <option value="Perawatan Tubuh">Perawatan Tubuh</option>
            <option value="Perawatan Rambut">Perawatan Rambut</option>
            <option value="Wewangian">Wewangian</option>
            <option value="Peralatan Kecantikan">Peralatan Kecantikan</option>
          </select>
        </div>

        {/* Right Toolbar: Sort */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
            <option value="impressions">Tayangan Tertinggi</option>
            <option value="clicks">Klik Tertinggi</option>
            <option value="purchases">Pembelian Tertinggi</option>
            <option value="stock">Stok Paling Menipis</option>
          </select>
        </div>
      </div>

      {/* Health Table */}
      <div className="data-table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th style={{ width: '40px', textAlign: 'center' }}>
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  checked={
                    filteredListings.length > 0 &&
                    selectedIds.length === filteredListings.length
                  }
                  onChange={handleSelectAll}
                  title="Pilih semua listing"
                />
              </th>
              <th>Produk</th>
              <th>Sub-Kategori</th>
              <th style={{ textAlign: 'right' }}>Tayangan</th>
              <th style={{ textAlign: 'right' }}>Klik</th>
              <th style={{ textAlign: 'right' }}>Keranjang</th>
              <th style={{ textAlign: 'right' }}>Pembelian</th>
              <th style={{ textAlign: 'center' }}>Tren 4 Minggu</th>
              <th>Stok</th>
              <th>Kelengkapan</th>
              <th style={{ textAlign: 'center' }}>Saran</th>
              <th style={{ width: '40px' }}></th>
            </tr>
          </thead>
          <tbody>
            {filteredListings.map((item) => {
              const isSelected = selectedIds.includes(item.id);
              const isLowTraffic = item.lowTraffic || item.impressions < 200;
              const issue = item.issue || getIssueForListing(item.id);

              return (
                <tr
                  key={item.id}
                  className={isSelected ? 'row-selected' : ''}
                  onClick={() => setActiveListing(item)}
                >
                  {/* Checkbox */}
                  <td
                    style={{ textAlign: 'center' }}
                    onClick={(e) => handleSelectRow(item.id, e)}
                  >
                    <input
                      type="checkbox"
                      className="custom-checkbox"
                      checked={isSelected}
                      onChange={() => {}}
                    />
                  </td>

                  {/* Produk */}
                  <td style={{ maxWidth: '280px' }}>
                    <div style={{ fontWeight: 600, color: 'var(--navy)', lineHeight: 1.3 }}>
                      {item.name}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        ID: {item.id}
                      </span>
                      {issue && (
                        <span
                          style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            color:
                              issue.severity === 'danger'
                                ? 'var(--danger)'
                                : issue.severity === 'warning'
                                ? 'var(--warning)'
                                : 'var(--text-secondary)'
                          }}
                        >
                          • {issue.category}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Sub-Kategori */}
                  <td style={{ whiteSpace: 'nowrap', color: 'var(--text-secondary)' }}>
                    {item.category}
                  </td>

                  {/* Funnel Metrics */}
                  {isLowTraffic ? (
                    <td colSpan={4} style={{ textAlign: 'center', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      Data belum cukup (tayangan &lt; 200)
                    </td>
                  ) : (
                    <>
                      <td style={{ textAlign: 'right', fontWeight: 500 }}>
                        {item.impressions.toLocaleString('id-ID')}
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 500 }}>
                        {item.clicks.toLocaleString('id-ID')}
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 500 }}>
                        {item.addToCart.toLocaleString('id-ID')}
                      </td>
                      <td style={{ textAlign: 'right', fontWeight: 600, color: 'var(--navy)' }}>
                        {item.purchases.toLocaleString('id-ID')}
                      </td>
                    </>
                  )}

                  {/* Sparkline (Tren 4 Minggu) */}
                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                    <Sparkline data={item.sparkline} width={56} height={18} strokeColor="var(--accent)" />
                  </td>

                  {/* Stok */}
                  <td style={{ whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Pill
                        label={item.stockStatus}
                        variant={
                          item.stockStatus === 'Tersedia'
                            ? 'success'
                            : item.stockStatus === 'Menipis'
                            ? 'warning'
                            : 'danger'
                        }
                        dot
                        size="sm"
                      />
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        ({item.stockCount})
                      </span>
                    </div>
                  </td>

                  {/* Kelengkapan (segmented bar plus "7 dari 9", NEVER a percentage score) */}
                  <td style={{ whiteSpace: 'nowrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <SegmentedBar total={9} filled={item.completenessScore} size="sm" />
                      <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        {item.completenessScore} dari 9
                      </span>
                    </div>
                  </td>

                  {/* Ada Saran (Informative badge with issue category & tooltip) */}
                  <td style={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
                    {issue ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveListing(item);
                        }}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          padding: '3px 9px',
                          borderRadius: 'var(--radius-pill)',
                          fontSize: '11px',
                          fontWeight: 600,
                          backgroundColor:
                            issue.severity === 'danger'
                              ? 'var(--danger-bg)'
                              : issue.severity === 'warning'
                              ? 'var(--warning-bg)'
                              : 'var(--tint-hover)',
                          color:
                            issue.severity === 'danger'
                              ? 'var(--danger)'
                              : issue.severity === 'warning'
                              ? 'var(--warning)'
                              : 'var(--primary)',
                          border: `1px solid color-mix(in srgb, ${
                            issue.severity === 'danger'
                              ? 'var(--danger)'
                              : issue.severity === 'warning'
                              ? 'var(--warning)'
                              : 'var(--primary)'
                          } 28%, transparent)`,
                          cursor: 'pointer',
                          transition: 'all 0.15s ease'
                        }}
                        title={`Masalah: ${issue.title}\n\nSaran: ${issue.suggestion}`}
                      >
                        {issue.severity === 'danger' ? (
                          <AlertCircle size={11} style={{ flexShrink: 0 }} />
                        ) : issue.severity === 'warning' ? (
                          <AlertTriangle size={11} style={{ flexShrink: 0 }} />
                        ) : (
                          <Sparkles size={11} style={{ flexShrink: 0 }} />
                        )}
                        <span>{issue.badge}</span>
                      </button>
                    ) : (
                      <span style={{ color: 'var(--text-muted)', fontSize: '11px' }}>-</span>
                    )}
                  </td>

                  {/* Action Menu */}
                  <td onClick={(e) => e.stopPropagation()}>
                    <div style={{ position: 'relative' }}>
                      <button
                        type="button"
                        className="btn-icon"
                        style={{ width: '28px', height: '28px' }}
                        onClick={() => setActiveMenuId(activeMenuId === item.id ? null : item.id)}
                      >
                        <MoreVertical size={14} />
                      </button>

                      {activeMenuId === item.id && (
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
                              setActiveListing(item);
                            }}
                          >
                            Buka detail listing
                          </button>
                          {issue && (
                            <button
                              type="button"
                              className="btn btn-ghost btn-sm"
                              style={{ width: '100%', textAlign: 'left', justifyContent: 'flex-start', color: 'var(--primary)', fontWeight: 600 }}
                              onClick={() => {
                                setActiveMenuId(null);
                                setActiveListing(item);
                              }}
                            >
                              <Sparkles size={12} style={{ marginRight: '6px' }} />
                              Lihat saran perbaikan
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredListings.length === 0 && (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
            Tidak ada listing yang sesuai dengan kriteria penyaringan.
          </div>
        )}
      </div>

      {/* Floating Dark Pill Bar for Bulk Selection */}
      <FloatingBar
        selectedCount={selectedIds.length}
        onClearSelection={() => setSelectedIds([])}
        onBulkViewSuggestions={() => {
          alert(`Membuka ringkasan saran untuk ${selectedIds.length} listing terpilih.`);
        }}
        onBulkRemindLater={() => {
          alert(`${selectedIds.length} listing disimpan untuk pengingat pemeriksaan minggu depan.`);
          setSelectedIds([]);
        }}
      />

      {/* Listing Detail Drawer */}
      <ListingDetailDrawer
        isOpen={Boolean(activeListing)}
        listing={
          activeListing
            ? listings.find((l) => l.id === activeListing.id) || activeListing
            : null
        }
        onClose={() => setActiveListing(null)}
        onUpdateListing={onUpdateListing}
      />
    </div>
  );
}
