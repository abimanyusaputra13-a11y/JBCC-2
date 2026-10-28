import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  AlertTriangle,
  Users,
  ShieldCheck,
  ArrowRight,
  Flame,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from 'lucide-react';
import Pill from './Pill';
import SegmentedBar from './SegmentedBar';
import CollaborationModal from './CollaborationModal';
import {
  TIMEFRAME_OPTIONS,
  CATEGORY_STYLES,
  getOpportunityTrendForTimeframe,
  getInfluencersForOpportunity
} from '../data/mockData';

function formatTitleCase(str) {
  if (!str) return '';
  return str.replace(/\b\w+/g, (word) => {
    if (word.toUpperCase() === 'SPF') return 'SPF';
    if (word.toUpperCase() === 'EDP') return 'EDP';
    if (word.toUpperCase() === 'BPC') return 'BPC';
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
}

export default function OpportunityDetailDrawer({
  isOpen,
  opportunity,
  timeframe = '30d',
  onClose,
  onCreateAction
}) {
  const [selectedInfluencerForCollab, setSelectedInfluencerForCollab] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const influencers = useMemo(() => {
    if (!opportunity?.id) return [];
    return getInfluencersForOpportunity(opportunity.id, opportunity);
  }, [opportunity]);

  const maxEngagement = useMemo(() => {
    if (influencers.length === 0) return 0;
    return Math.max(...influencers.map((i) => i.engagementRate));
  }, [influencers]);

  if (!isOpen || !opportunity) return null;

  const currentTrend = getOpportunityTrendForTimeframe(opportunity, timeframe);
  const currentTimeframeLabel = TIMEFRAME_OPTIONS.find((t) => t.value === timeframe)?.shortLabel || '30 Hari';

  return (
    <>
      <div className="drawer-backdrop" onClick={onClose}>
        <aside
          className="drawer-panel"
          onClick={(e) => e.stopPropagation()}
          aria-label="Detail Peluang Pasar"
          style={{ maxWidth: '580px' }}
        >
          {/* Header (No tabs, clean and unified) */}
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '12px',
              backgroundColor: '#ffffff'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span className="label-upper">Peluang Pasar</span>
                <Pill
                  label={opportunity.crowdingStatus}
                  variant={
                    opportunity.crowdingStatus === 'Terbuka'
                      ? 'success'
                      : opportunity.crowdingStatus === 'Mulai ramai'
                      ? 'warning'
                      : 'danger'
                  }
                  dot
                  size="sm"
                />
              </div>
              <h2
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  margin: 0,
                  lineHeight: 1.3
                }}
              >
                {formatTitleCase(opportunity.productType)}
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

          {/* Content Body */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
            {/* Melonjak Caution Alert */}
            {currentTrend.caution && (
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: 'var(--warning-bg)',
                  border: '1px solid color-mix(in srgb, var(--warning) 30%, white)',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  fontSize: '12px',
                  color: 'var(--warning)'
                }}
              >
                <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Perhatian tren {currentTimeframeLabel.toLowerCase()}:</strong> {currentTrend.caution}. Lonjakan ini dapat dipicu oleh perbincangan sesaat. Pertimbangkan tingkat pasokan dengan bijak.
                </div>
              </div>
            )}

            {/* Quick Metrics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                backgroundColor: '#fafbfc',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                padding: '14px',
                marginBottom: '20px'
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Volume ({currentTimeframeLabel})
                </div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: 'var(--navy)', marginTop: '2px' }}>
                  {currentTrend.searchVolume}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  Arah Tren ({currentTimeframeLabel})
                </div>
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 700,
                    color:
                      currentTrend.trend === 'Naik'
                        ? 'var(--success)'
                        : currentTrend.trend === 'Melonjak'
                        ? 'var(--warning)'
                        : 'var(--navy)',
                    marginTop: '2px'
                  }}
                >
                  {currentTrend.trend} ({currentTrend.delta})
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Listing Aktif</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)' }}>
                    {opportunity.activeListings} listing
                  </span>
                  {currentTrend.listingsDelta && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: currentTrend.listingsDelta.startsWith('+')
                          ? 'var(--success)'
                          : currentTrend.listingsDelta.startsWith('-')
                          ? 'var(--danger)'
                          : 'var(--text-secondary)',
                        backgroundColor: currentTrend.listingsDelta.startsWith('+')
                          ? 'var(--success-bg)'
                          : currentTrend.listingsDelta.startsWith('-')
                          ? 'var(--danger-bg)'
                          : 'var(--tint-hover)',
                        padding: '1px 6px',
                        borderRadius: 'var(--radius-pill)'
                      }}
                    >
                      {currentTrend.listingsDelta.startsWith('+') && <ArrowUpRight size={11} />}
                      {currentTrend.listingsDelta.startsWith('-') && <ArrowDownRight size={11} />}
                      {!currentTrend.listingsDelta.startsWith('+') &&
                        !currentTrend.listingsDelta.startsWith('-') && <Minus size={11} />}
                      <span>{currentTrend.listingsDelta}</span>
                    </span>
                  )}
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Permintaan/Listing</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--navy)' }}>
                    {opportunity.demandPerListing.toLocaleString('id-ID')}
                  </span>
                  {currentTrend.demandDelta && (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '2px',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: currentTrend.demandDelta.startsWith('+')
                          ? 'var(--success)'
                          : currentTrend.demandDelta.startsWith('-')
                          ? 'var(--danger)'
                          : 'var(--text-secondary)',
                        backgroundColor: currentTrend.demandDelta.startsWith('+')
                          ? 'var(--success-bg)'
                          : currentTrend.demandDelta.startsWith('-')
                          ? 'var(--danger-bg)'
                          : 'var(--tint-hover)',
                        padding: '1px 6px',
                        borderRadius: 'var(--radius-pill)'
                      }}
                    >
                      {currentTrend.demandDelta.startsWith('+') && <ArrowUpRight size={11} />}
                      {currentTrend.demandDelta.startsWith('-') && <ArrowDownRight size={11} />}
                      {!currentTrend.demandDelta.startsWith('+') &&
                        !currentTrend.demandDelta.startsWith('-') && <Minus size={11} />}
                      <span>{currentTrend.demandDelta}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Kotak Rekomendasi Influencer dengan Engagement Tinggi (Inline Profiles & Metrics) */}
            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid color-mix(in srgb, var(--primary) 22%, var(--border))',
                borderRadius: 'var(--radius-md)',
                padding: '14px 16px',
                marginBottom: '20px',
                boxShadow: '0 2px 6px rgba(24, 32, 75, 0.04)'
              }}
            >
              {/* Header of the Box */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--tint-hover)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Users size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)' }}>
                      Rekomendasi Influencer dengan Engagement Tinggi
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                      Tersedia <strong>{influencers.length} kreator</strong> terverifikasi untuk produk tren ini
                    </div>
                  </div>
                </div>

                {maxEngagement > 0 && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '3px',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '11px',
                      fontWeight: 700,
                      backgroundColor: 'var(--success-bg)',
                      color: 'var(--success)'
                    }}
                  >
                    <Flame size={11} />
                    ER s/d {maxEngagement}%
                  </span>
                )}
              </div>

              {/* Influencers Profiles & Metrics Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {influencers.map((inf) => (
                  <div
                    key={inf.id}
                    onClick={() => setSelectedInfluencerForCollab(inf)}
                    style={{
                      padding: '12px 14px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f1f5f9';
                      e.currentTarget.style.borderColor = 'var(--primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                      e.currentTarget.style.borderColor = 'var(--border)';
                    }}
                    title="Klik untuk melihat profil lengkap & ajak kolaborasi"
                  >
                    {/* Top Row: Avatar, Name, Handle, and Engagement Badge */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '8px',
                        gap: '8px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ position: 'relative' }}>
                          <div
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '50%',
                              backgroundColor: inf.avatarColor || 'var(--primary)',
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '13px',
                              fontWeight: 700,
                              flexShrink: 0
                            }}
                          >
                            {inf.name.charAt(0)}
                          </div>
                          <span
                            style={{
                              position: 'absolute',
                              bottom: '-2px',
                              right: '-2px',
                              width: '15px',
                              height: '15px',
                              borderRadius: '50%',
                              backgroundColor: inf.platform === 'TikTok' ? '#000000' : '#e1306c',
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '8px',
                              fontWeight: 800,
                              border: '1.5px solid #ffffff'
                            }}
                          >
                            {inf.platform === 'TikTok' ? 'TK' : 'IG'}
                          </span>
                        </div>

                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--navy)' }}>
                              {inf.name}
                            </span>
                            <ShieldCheck size={13} style={{ color: 'var(--primary)' }} />
                          </div>
                          <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                            {inf.handle} • {inf.niche}
                          </div>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '3px',
                            padding: '2px 8px',
                            borderRadius: '10px',
                            fontSize: '11px',
                            fontWeight: 700,
                            backgroundColor: 'var(--success-bg)',
                            color: 'var(--success)'
                          }}
                        >
                          <Flame size={11} />
                          ER {inf.engagementRate}%
                        </span>
                      </div>
                    </div>

                    {/* 3 Metrics Row */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '6px',
                        backgroundColor: '#ffffff',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        padding: '6px 8px',
                        marginBottom: '8px',
                        fontSize: '11px',
                        textAlign: 'center'
                      }}
                    >
                      <div>
                        <span style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Engagement: </span>
                        <strong style={{ color: 'var(--success)' }}>{inf.engagementRate}%</strong>
                      </div>
                      <div style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
                        <span style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Pengikut: </span>
                        <strong style={{ color: 'var(--navy)' }}>{inf.followers}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--text-muted)', fontSize: '10px' }}>Rata-rata: </span>
                        <strong style={{ color: 'var(--navy)' }}>{inf.avgViews.split(' ')[0]}</strong>
                      </div>
                    </div>

                    {/* Kesesuaian Celah & Affordance to Click */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)', lineHeight: 1.35, flex: 1 }}>
                        <span style={{ fontWeight: 600, color: 'var(--navy)' }}>Kesesuaian: </span>
                        {inf.matchReason}
                      </div>

                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: 'var(--primary)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '2px',
                          whiteSpace: 'nowrap',
                          flexShrink: 0
                        }}
                      >
                        <span>Lihat Detail</span>
                        <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Karakteristik Celah Pasar */}
            <div style={{ marginBottom: '20px' }}>
              <div className="label-upper" style={{ marginBottom: '4px' }}>
                Karakteristik Celah Pasar
              </div>
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: 'var(--tint-hover)',
                  border: '1px solid color-mix(in srgb, var(--primary) 20%, white)',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: opportunity.gapDetail ? '6px' : 0
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: CATEGORY_STYLES[opportunity.gapCategory]?.color || 'var(--primary)',
                      backgroundColor: CATEGORY_STYLES[opportunity.gapCategory]?.bg || '#eff3fc',
                      border: `1px solid ${CATEGORY_STYLES[opportunity.gapCategory]?.border || '#dbeafe'}`
                    }}
                  >
                    {opportunity.gapCategory || 'Produk'}
                  </span>
                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--navy)'
                    }}
                  >
                    {opportunity.gapType}
                  </span>
                </div>
                {opportunity.gapDetail && (
                  <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    {opportunity.gapDetail}
                  </div>
                )}
              </div>
            </div>

            {/* Bukti & Pola Pencarian */}
            <div style={{ marginBottom: '20px' }}>
              <div className="label-upper" style={{ marginBottom: '4px' }}>
                Bukti & Pola Pencarian
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {opportunity.evidence}
              </p>
            </div>

            {/* Analisis Tingkat Keramaian */}
            <div style={{ marginBottom: '20px' }}>
              <div className="label-upper" style={{ marginBottom: '4px' }}>
                Analisis Tingkat Keramaian
              </div>
              <div
                style={{
                  padding: '12px 14px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '13px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.45
                }}
              >
                {opportunity.crowdingExplanation}
              </div>
            </div>

            {/* Tingkat Keyakinan Model */}
            <div
              style={{
                padding: '14px',
                backgroundColor: '#fafbfc',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '20px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="label-upper">Tingkat Keyakinan Model</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <SegmentedBar total={10} filled={opportunity.confidenceScore} size="sm" />
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--navy)' }}>
                    {opportunity.confidenceScore}/10
                  </span>
                </div>
              </div>
            </div>
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
              style={{ fontSize: '12px' }}
            >
              Tutup
            </button>
          </div>
        </aside>
      </div>

      {/* Collaboration Modal Triggered when Clicking an Influencer */}
      <CollaborationModal
        isOpen={Boolean(selectedInfluencerForCollab)}
        influencer={selectedInfluencerForCollab}
        productType={opportunity.productType}
        onClose={() => setSelectedInfluencerForCollab(null)}
      />
    </>
  );
}
