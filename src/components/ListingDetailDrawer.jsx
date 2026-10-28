import React, { useState, useEffect } from 'react';
import {
  X,
  Check,
  CheckCircle2,
  XCircle,
  AlertCircle,
  AlertTriangle,
  TrendingUp,
  Tag,
  Star,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  Lightbulb,
  Copy
} from 'lucide-react';
import RangeBar from './RangeBar';
import Pill from './Pill';
import SegmentedBar from './SegmentedBar';
import { getIssueForListing } from '../data/mockData';

export default function ListingDetailDrawer({
  isOpen,
  listing,
  onClose,
  onUpdateListing
}) {
  const [checklistState, setChecklistState] = useState([]);
  const [searchTerms, setSearchTerms] = useState([]);
  const [removedComparablesLog, setRemovedComparablesLog] = useState([]);
  const [copiedSuggestion, setCopiedSuggestion] = useState(false);
  const [appliedFeedback, setAppliedFeedback] = useState(false);

  useEffect(() => {
    if (listing) {
      setChecklistState(listing.checklist || []);
      setSearchTerms(listing.suggestedSearchTerms || []);
      setRemovedComparablesLog([]);
    }
  }, [listing]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !listing) return null;

  // Toggle checklist item
  const handleToggleChecklist = (id) => {
    const updated = checklistState.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    setChecklistState(updated);
    if (onUpdateListing) {
      const completedCount = updated.filter((i) => i.complete).length;
      onUpdateListing({ ...listing, checklist: updated, completenessScore: completedCount });
    }
  };

  // Accept/reject search term
  const handleSearchTermAction = (termId, status) => {
    const updated = searchTerms.map((t) =>
      t.id === termId ? { ...t, status } : t
    );
    setSearchTerms(updated);
    if (onUpdateListing) {
      onUpdateListing({ ...listing, suggestedSearchTerms: updated });
    }
  };

  // Handle removing comparable
  const handleRemoveComparable = (item) => {
    setRemovedComparablesLog((prev) => [...prev, item.name]);
  };

  const issue = listing?.issue || (listing ? getIssueForListing(listing.id) : null);

  const handleCopySuggestion = () => {
    if (issue?.suggestion) {
      navigator.clipboard.writeText(`Masalah: ${issue.title}\nTemuan Data: ${issue.problem}\nSaran Perbaikan: ${issue.suggestion}`);
      setCopiedSuggestion(true);
      setTimeout(() => setCopiedSuggestion(false), 2200);
    }
  };

  const handleApplySuggestion = () => {
    setAppliedFeedback(true);
    setTimeout(() => {
      setAppliedFeedback(false);
    }, 2500);
  };

  const completedCount = checklistState.filter((i) => i.complete).length;
  const isLowTraffic = listing.lowTraffic || listing.impressions < 200;
  const hasEnoughReviews = (listing.reviewCount || 0) >= 10;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <aside
        className="drawer-panel"
        onClick={(e) => e.stopPropagation()}
        aria-label="Detail Listing"
      >
        {/* Drawer Header */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '12px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="label-upper">{listing.category}</span>
              <Pill
                label={listing.stockStatus}
                variant={
                  listing.stockStatus === 'Tersedia'
                    ? 'success'
                    : listing.stockStatus === 'Menipis'
                    ? 'warning'
                    : 'danger'
                }
                dot
                size="sm"
              />
            </div>
            <h2
              style={{
                fontSize: '15px',
                fontWeight: 700,
                color: 'var(--navy)',
                margin: 0,
                lineHeight: 1.3
              }}
            >
              {listing.name}
            </h2>
          </div>

          <button
            type="button"
            className="btn-icon"
            onClick={onClose}
            title="Tutup (Esc)"
          >
            <X size={16} />
          </button>
        </div>

        {/* Drawer Content */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
          {/* Low Traffic Edge Case Notice */}
          {isLowTraffic && (
            <div
              style={{
                padding: '12px 14px',
                backgroundColor: '#fafbfc',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '12px',
                color: 'var(--text-secondary)'
              }}
            >
              <AlertCircle size={15} style={{ color: 'var(--warning)', flexShrink: 0 }} />
              <span>
                <strong>Data belum cukup:</strong> Listing ini masih baru atau memiliki volume tayangan di bawah ambang batas minimal untuk analisis corong konversi yang andal.
              </span>
            </div>
          )}

          {/* 1. Analisis Masalah & Saran Perbaikan (Rich Problem & Actionable Suggestion Card) */}
          {issue ? (
            <div
              style={{
                marginBottom: '24px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                backgroundColor: '#ffffff',
                boxShadow: '0 2px 8px rgba(24, 32, 75, 0.05)',
                overflow: 'hidden'
              }}
            >
              {/* Card Header with Category and Severity Pill */}
              <div
                style={{
                  padding: '12px 16px',
                  backgroundColor:
                    issue.severity === 'danger'
                      ? 'var(--danger-bg)'
                      : issue.severity === 'warning'
                      ? 'var(--warning-bg)'
                      : 'var(--tint-hover)',
                  borderBottom: `1px solid color-mix(in srgb, ${
                    issue.severity === 'danger'
                      ? 'var(--danger)'
                      : issue.severity === 'warning'
                      ? 'var(--warning)'
                      : 'var(--primary)'
                  } 20%, transparent)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {issue.severity === 'danger' ? (
                    <AlertCircle size={16} style={{ color: 'var(--danger)' }} />
                  ) : issue.severity === 'warning' ? (
                    <AlertTriangle size={16} style={{ color: 'var(--warning)' }} />
                  ) : (
                    <Sparkles size={16} style={{ color: 'var(--primary)' }} />
                  )}
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color:
                        issue.severity === 'danger'
                          ? 'var(--danger)'
                          : issue.severity === 'warning'
                          ? 'var(--warning)'
                          : 'var(--primary)'
                    }}
                  >
                    Kategori: {issue.category}
                  </span>
                </div>

                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '11px',
                    fontWeight: 700,
                    backgroundColor: '#ffffff',
                    color:
                      issue.severity === 'danger'
                        ? 'var(--danger)'
                        : issue.severity === 'warning'
                        ? 'var(--warning)'
                        : 'var(--primary)',
                    border: '1px solid currentColor'
                  }}
                >
                  {issue.severity === 'danger'
                    ? 'Prioritas Tinggi'
                    : issue.severity === 'warning'
                    ? 'Prioritas Sedang'
                    : 'Peluang Optimasi'}
                </span>
              </div>

              {/* Problem Title & Body */}
              <div style={{ padding: '16px' }}>
                <h3
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--navy)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.35
                  }}
                >
                  {issue.title}
                </h3>

                {/* Box 1: Masalah Terdeteksi (Data) */}
                <div
                  style={{
                    padding: '12px 14px',
                    backgroundColor: '#fafbfc',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '12px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--text-secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      marginBottom: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <span>Temuan Masalah (Data Nyata):</span>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--text-primary)', lineHeight: 1.5, margin: 0 }}>
                    {issue.problem}
                  </p>
                </div>

                {/* Box 2: Saran Perbaikan (Actionable) */}
                <div
                  style={{
                    padding: '12px 14px',
                    backgroundColor: 'color-mix(in srgb, var(--primary) 7%, #ffffff)',
                    border: '1px solid color-mix(in srgb, var(--primary) 22%, transparent)',
                    borderRadius: 'var(--radius-sm)',
                    marginBottom: '12px'
                  }}
                >
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.03em',
                      marginBottom: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <Lightbulb size={13} />
                    <span>Saran Perbaikan yang Direkomendasikan:</span>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--navy)', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                    {issue.suggestion}
                  </p>
                </div>

                {/* Box 3: Proyeksi Dampak */}
                {issue.impact && (
                  <div
                    style={{
                      padding: '10px 14px',
                      backgroundColor: 'var(--success-bg)',
                      border: '1px solid color-mix(in srgb, var(--success) 30%, transparent)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '11px',
                      color: 'var(--success)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '14px'
                    }}
                  >
                    <TrendingUp size={14} style={{ flexShrink: 0 }} />
                    <span>
                      <strong>Estimasi Dampak:</strong> {issue.impact}
                    </span>
                  </div>
                )}

                {/* Quick Action Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', paddingTop: '4px' }}>
                  <button
                    type="button"
                    onClick={handleCopySuggestion}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '6px 12px',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '12px',
                      color: copiedSuggestion ? 'var(--success)' : 'var(--text-secondary)',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                  >
                    {copiedSuggestion ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedSuggestion ? 'Saran Tersalin!' : 'Salin Saran'}</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleApplySuggestion}
                    style={{
                      fontSize: '12px',
                      padding: '6px 14px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    {appliedFeedback ? <Check size={13} /> : <Sparkles size={13} />}
                    <span>{appliedFeedback ? 'Saran Ditandai Selesai!' : issue.actionLabel || 'Terapkan Saran'}</span>
                  </button>
                </div>
              </div>
            </div>
          ) : listing.weakestStep ? (
            /* Fallback to weakest step if no issue */
            <div
              style={{
                marginBottom: '24px',
                padding: '14px 16px',
                backgroundColor: 'var(--tint-hover)',
                border: '1px solid color-mix(in srgb, var(--primary) 20%, white)',
                borderRadius: 'var(--radius-sm)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                <span className="label-upper" style={{ color: 'var(--primary)' }}>
                  Langkah yang Memerlukan Perhatian:
                </span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--navy)' }}>
                  {listing.weakestStep.step}
                </span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--text-primary)', lineHeight: 1.45, margin: 0 }}>
                {listing.weakestStep.diagnosis}
              </p>
            </div>
          ) : null}

          {/* 2. Ringkasan Corong (Funnel Summary) */}
          <div style={{ marginBottom: '24px' }}>
            <div className="label-upper" style={{ marginBottom: '10px' }}>
              Ringkasan Corong Penjualan (4 Minggu Terakhir)
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '8px',
                backgroundColor: '#fafbfc',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                padding: '12px'
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Tayangan</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', marginTop: '2px' }}>
                  {listing.impressions.toLocaleString('id-ID')}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Serupa: {listing.funnelBenchmark?.impressions.toLocaleString('id-ID')}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Klik</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', marginTop: '2px' }}>
                  {listing.clicks.toLocaleString('id-ID')}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Serupa: {listing.funnelBenchmark?.clicks.toLocaleString('id-ID')}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Keranjang</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', marginTop: '2px' }}>
                  {listing.addToCart.toLocaleString('id-ID')}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Serupa: {listing.funnelBenchmark?.cart.toLocaleString('id-ID')}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Pembelian</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', marginTop: '2px' }}>
                  {listing.purchases.toLocaleString('id-ID')}
                </div>
                <div style={{ fontSize: '10px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Serupa: {listing.funnelBenchmark?.purchases.toLocaleString('id-ID')}
                </div>
              </div>
            </div>
          </div>

          {/* 3. Price Position (Horizontal Range Bar) */}
          <div style={{ marginBottom: '24px' }}>
            <RangeBar
              sellerPrice={listing.pricePosition?.sellerPrice || 89000}
              median={listing.pricePosition?.median || 84000}
              q1={listing.pricePosition?.q1 || 72000}
              q3={listing.pricePosition?.q3 || 95000}
              comparableCount={listing.pricePosition?.comparableCount || 28}
              comparables={listing.pricePosition?.comparables || []}
              onRemoveComparable={handleRemoveComparable}
            />
          </div>

          {/* 4. Daftar Periksa 9 Hal Dasar (Checklist) */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div>
                <span className="label-upper">Kelengkapan Informasi Dasar</span>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Informasi yang biasa dicari pembeli
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <SegmentedBar total={9} filled={completedCount} size="sm" />
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--navy)' }}>
                  {completedCount} dari 9
                </span>
              </div>
            </div>

            <div
              style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: '#ffffff',
                overflow: 'hidden'
              }}
            >
              {checklistState.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleToggleChecklist(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderBottom: '1px solid var(--border-light)',
                    fontSize: '12px',
                    cursor: 'pointer',
                    backgroundColor: item.complete ? '#ffffff' : '#fafbfc'
                  }}
                >
                  <span style={{ color: item.complete ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                    {item.label}
                  </span>
                  {item.complete ? (
                    <CheckCircle2 size={15} style={{ color: 'var(--success)' }} />
                  ) : (
                    <XCircle size={15} style={{ color: 'var(--text-muted)' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 5. Daya Temukan (Findability Search Terms) */}
          <div style={{ marginBottom: '24px' }}>
            <div className="label-upper" style={{ marginBottom: '4px' }}>
              Temuan Pencarian Pembeli
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
              Kata kunci yang sering diketik pembeli untuk produk kategori ini. Anda dapat menyetujui atau menolak:
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {searchTerms.map((term) => (
                <div
                  key={term.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    backgroundColor: '#fafbfc',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '12px'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 500, color: 'var(--navy)' }}>{term.term}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Volume: {term.volume}</div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {term.status === 'accepted' ? (
                      <span style={{ fontSize: '11px', color: 'var(--success)', fontWeight: 600 }}>Disetujui</span>
                    ) : term.status === 'rejected' ? (
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Ditolak</span>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          onClick={() => handleSearchTermAction(term.id, 'accepted')}
                          title="Gunakan kata kunci ini"
                          style={{ padding: '3px 8px', fontSize: '11px' }}
                        >
                          <Check size={12} style={{ color: 'var(--success)' }} />
                          Gunakan
                        </button>
                        <button
                          type="button"
                          className="btn btn-ghost btn-sm"
                          onClick={() => handleSearchTermAction(term.id, 'rejected')}
                          title="Abaikan kata kunci"
                          style={{ padding: '3px 8px', fontSize: '11px' }}
                        >
                          <X size={12} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Tema Ulasan Pembeli (Review Themes) */}
          <div style={{ marginBottom: '24px' }}>
            <div className="label-upper" style={{ marginBottom: '4px' }}>
              Tema Ulasan Pembeli ({listing.reviewCount || 0} Ulasan)
            </div>

            {!hasEnoughReviews ? (
              <div
                style={{
                  padding: '12px',
                  backgroundColor: '#fafbfc',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '12px',
                  color: 'var(--text-muted)'
                }}
              >
                Ulasan belum cukup untuk analisis tema (minimal 10 ulasan pembeli).
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {listing.reviewThemes?.map((theme, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '12px'
                    }}
                  >
                    <span style={{ color: 'var(--text-primary)' }}>{theme.theme}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        {theme.count} ulasan
                      </span>
                      <Pill label={theme.owner} size="sm" variant="neutral" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 7. "Sejak Anda Mengubah" Panel (wording strictly "sejak Anda mengubah") */}
          {!isLowTraffic && listing.beforeAfter && (
            <div
              style={{
                padding: '14px 16px',
                backgroundColor: '#fafbfc',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '16px'
              }}
            >
              <div className="label-upper" style={{ marginBottom: '6px' }}>
                Sejak Anda Mengubah
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '10px' }}>
                Periode: {listing.beforeAfter.dates}
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '6px',
                  fontSize: '11px',
                  marginBottom: '10px'
                }}
              >
                <div>
                  <div style={{ color: 'var(--text-muted)' }}>Tayangan</div>
                  <div style={{ fontWeight: 600, color: 'var(--navy)' }}>
                    {listing.beforeAfter.beforeFunnel.impressions.toLocaleString()} → {listing.beforeAfter.afterFunnel.impressions.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)' }}>Klik</div>
                  <div style={{ fontWeight: 600, color: 'var(--navy)' }}>
                    {listing.beforeAfter.beforeFunnel.clicks} → {listing.beforeAfter.afterFunnel.clicks}
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)' }}>Keranjang</div>
                  <div style={{ fontWeight: 600, color: 'var(--navy)' }}>
                    {listing.beforeAfter.beforeFunnel.cart} → {listing.beforeAfter.afterFunnel.cart}
                  </div>
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)' }}>Pembelian</div>
                  <div style={{ fontWeight: 600, color: 'var(--navy)' }}>
                    {listing.beforeAfter.beforeFunnel.purchases} → {listing.beforeAfter.afterFunnel.purchases}
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '11px', color: 'var(--text-secondary)', borderTop: '1px solid var(--border-light)', paddingTop: '6px' }}>
                Pembanding: {listing.beforeAfter.comparableChange}
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div
          style={{
            padding: '14px 20px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '8px',
            backgroundColor: '#ffffff'
          }}
        >
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onClose}
          >
            Tutup
          </button>
        </div>
      </aside>
    </div>
  );
}
