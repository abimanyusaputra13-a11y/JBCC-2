import React, { useState } from 'react';
import KpiCard from '../components/KpiCard';
import RecommendationCard from '../components/RecommendationCard';
import ModalEdit from '../components/ModalEdit';
import AllIssuesModal from '../components/AllIssuesModal';
import Pill from '../components/Pill';
import { starterCards } from '../data/mockData';
import { ChevronDown, ChevronUp, AlertCircle, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

export default function Beranda({
  feedCards,
  onUpdateCard,
  showLabelCriteriaCard = true,
  isLoading = false,
  liveKpis
}) {
  const [activeTab, setActiveTab] = useState('perbaikan'); // 'perbaikan' | 'peluang' | 'selesai' | 'ditunda'
  const [editingCard, setEditingCard] = useState(null);
  const [showAllIssuesModal, setShowAllIssuesModal] = useState(false);
  const [expandedStarterIds, setExpandedStarterIds] = useState([]);

  // Toggle inline "Cara melakukannya" for starter cards
  const toggleStarterExpand = (id) => {
    setExpandedStarterIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Card action handlers
  const handleFixNow = (card) => {
    setEditingCard(card);
  };

  const handleSaveFix = (card, values) => {
    onUpdateCard({
      ...card,
      state: 'done',
      savedValues: values
    });
    setEditingCard(null);
  };

  const handleRemindLater = (card) => {
    onUpdateCard({
      ...card,
      state: 'in_progress'
    });
  };

  const handleDismiss = (card, reason) => {
    onUpdateCard({
      ...card,
      state: 'dismissed',
      dismissReason: reason
    });
  };

  const handleRestore = (card) => {
    onUpdateCard({
      ...card,
      state: 'new',
      dismissReason: null
    });
  };

  // Filter cards based on tab
  // Perbaikan tab: show at most 3 cards at a time, ranked!
  const perbaikanCardsAll = feedCards.filter(
    (c) => c.type === 'perbaikan' && c.state !== 'dismissed' && c.state !== 'done'
  );
  const perbaikanCardsTop3 = perbaikanCardsAll.slice(0, 3);

  const peluangCards = feedCards.filter(
    (c) => c.type === 'peluang' && c.state !== 'dismissed'
  );

  const selesaiCards = feedCards.filter((c) => c.state === 'done');
  const ditundaCards = feedCards.filter((c) => c.state === 'in_progress');

  // Label criteria card
  const labelCriteriaCard = feedCards.find((c) => c.type === 'label_kriteria');

  return (
    <div>
      {/* 4 KPI Cards Strip */}
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <span className="label-upper">Ringkasan Kinerja Penjualan Toko</span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            4 minggu terakhir vs periode sebelumnya
          </span>
        </div>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <KpiCard
            label="Tayangan"
            value={liveKpis?.tayangan?.value || "142.850"}
            delta={liveKpis?.tayangan?.delta || "+12.4%"}
            deltaType="positive"
            sparklineData={liveKpis?.tayangan?.sparklineData || [110, 125, 134, 142]}
          />
          <KpiCard
            label="Tingkat Klik"
            value={liveKpis?.ctr?.value || "4.2%"}
            delta={liveKpis?.ctr?.delta || "+0.6%"}
            deltaType="positive"
            sparklineData={liveKpis?.ctr?.sparklineData || [3.5, 3.8, 4.0, 4.2]}
          />
          <KpiCard
            label="Tambah ke Keranjang"
            value={liveKpis?.keranjang?.value || "1.820"}
            delta={liveKpis?.keranjang?.delta || "+8.1%"}
            deltaType="positive"
            sparklineData={liveKpis?.keranjang?.sparklineData || [1520, 1610, 1700, 1820]}
          />
          <KpiCard
            label="Pembelian"
            value={liveKpis?.pembelian?.value || "640"}
            delta={liveKpis?.pembelian?.delta || "-1.2%"}
            deltaType="negative"
            sparklineData={liveKpis?.pembelian?.sparklineData || [680, 665, 650, 640]}
          />
        </div>
      </div>

      {/* Starter Cards (Onboarding Guides with Inline Expanders) */}
      <div
        style={{
          backgroundColor: '#fafbfc',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          padding: '16px 20px',
          marginBottom: '28px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Sparkles size={16} style={{ color: 'var(--primary)' }} />
          <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>
            Langkah Awal untuk Memaksimalkan Penjualan Toko
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {starterCards.map((item) => {
            const isExpanded = expandedStarterIds.includes(item.id);
            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '10px 14px',
                  fontSize: '13px'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 500, color: 'var(--navy)' }}>{item.title}</span>
                  <button
                    type="button"
                    onClick={() => toggleStarterExpand(item.id)}
                    style={{
                      fontSize: '12px',
                      color: 'var(--primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontWeight: 500
                    }}
                  >
                    <span>{isExpanded ? 'Tutup panduan' : 'Cara melakukannya'}</span>
                    {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>

                {isExpanded && (
                  <div
                    style={{
                      marginTop: '8px',
                      paddingTop: '8px',
                      borderTop: '1px solid var(--border-light)',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.45
                    }}
                  >
                    {item.howTo}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tab Strip under KPIs */}
      <div className="tabs-nav">
        <button
          type="button"
          className={`tab-btn ${activeTab === 'perbaikan' ? 'active' : ''}`}
          onClick={() => setActiveTab('perbaikan')}
        >
          <span>Perbaikan</span>
          <span className="tab-badge">{perbaikanCardsAll.length}</span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === 'peluang' ? 'active' : ''}`}
          onClick={() => setActiveTab('peluang')}
        >
          <span>Peluang</span>
          <span className="tab-badge">{peluangCards.length}</span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === 'selesai' ? 'active' : ''}`}
          onClick={() => setActiveTab('selesai')}
        >
          <span>Selesai</span>
          <span className="tab-badge">{selesaiCards.length}</span>
        </button>

        <button
          type="button"
          className={`tab-btn ${activeTab === 'ditunda' ? 'active' : ''}`}
          onClick={() => setActiveTab('ditunda')}
        >
          <span>Ditunda</span>
          <span className="tab-badge">{ditundaCards.length}</span>
        </button>
      </div>

      {/* TAB CONTENT */}

      {/* Tab 1: Perbaikan (Show at most 3 cards at a time, ranked, link 'Lihat semua masalah') */}
      {activeTab === 'perbaikan' && (
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px'
            }}
          >
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Menampilkan {perbaikanCardsTop3.length} rekomendasi paling mendesak berdasarkan potensi dampak.
            </div>

            {perbaikanCardsAll.length > 3 && (
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setShowAllIssuesModal(true)}
              >
                Lihat semua masalah ({perbaikanCardsAll.length})
              </button>
            )}
          </div>

          {/* List of 3 cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {perbaikanCardsTop3.map((card) => (
              <RecommendationCard
                key={card.id}
                card={card}
                onFixNow={handleFixNow}
                onRemindLater={handleRemindLater}
                onDismiss={handleDismiss}
                onRestore={handleRestore}
              />
            ))}

            {/* Path to Label placeholder card (rendered if mock flag is on) */}
            {showLabelCriteriaCard && labelCriteriaCard && labelCriteriaCard.state !== 'dismissed' && (
              <div style={{ marginTop: '8px' }}>
                <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span className="label-upper">Jalur Menuju Kriteria Label Toko</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>(Kriteria penilaian)</span>
                </div>
                <RecommendationCard
                  card={labelCriteriaCard}
                  onFixNow={handleFixNow}
                  onRemindLater={handleRemindLater}
                  onDismiss={handleDismiss}
                  onRestore={handleRestore}
                />
              </div>
            )}

            {perbaikanCardsTop3.length === 0 && (
              <div
                style={{
                  padding: '40px',
                  textAlign: 'center',
                  backgroundColor: '#fafbfc',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)'
                }}
              >
                <CheckCircle2 size={32} style={{ color: 'var(--success)', margin: '0 auto 12px' }} />
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
                  Semua perbaikan mendesak telah ditindaklanjuti
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                  Tidak ada masalah kritis pada listing toko Anda saat ini.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Peluang (same list for every seller, fit tags sort & highlight, never hide) */}
      {activeTab === 'peluang' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
            Daftar peluang celah pasar yang relevan untuk katalog toko Anda. Tag kecocokan memprioritaskan rekomendasi tanpa menyembunyikan peluang lainnya.
          </div>

          {peluangCards.map((card) => (
            <div key={card.id} style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '16px', right: '20px', zIndex: 2 }}>
                <Pill label="Cocok untuk Anda" variant="primary" dot size="sm" />
              </div>
              <RecommendationCard
                card={card}
                onFixNow={handleFixNow}
                onRemindLater={handleRemindLater}
                onDismiss={handleDismiss}
                onRestore={handleRestore}
              />
            </div>
          ))}

          {peluangCards.length === 0 && (
            <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)' }}>
              Tidak ada peluang aktif saat ini.
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Selesai */}
      {activeTab === 'selesai' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {selesaiCards.map((card) => (
            <RecommendationCard
              key={card.id}
              card={card}
              onFixNow={handleFixNow}
              onRemindLater={handleRemindLater}
              onDismiss={handleDismiss}
              onRestore={handleRestore}
            />
          ))}

          {selesaiCards.length === 0 && (
            <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)' }}>
              Belum ada rekomendasi yang diselesaikan.
            </div>
          )}
        </div>
      )}

      {/* Tab 4: Ditunda */}
      {activeTab === 'ditunda' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {ditundaCards.map((card) => (
            <RecommendationCard
              key={card.id}
              card={card}
              onFixNow={handleFixNow}
              onRemindLater={handleRemindLater}
              onDismiss={handleDismiss}
              onRestore={handleRestore}
            />
          ))}

          {ditundaCards.length === 0 && (
            <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)' }}>
              Tidak ada rekomendasi yang ditunda saat ini.
            </div>
          )}
        </div>
      )}

      {/* Modal Edit for Suggested Values */}
      <ModalEdit
        isOpen={Boolean(editingCard)}
        card={editingCard}
        onClose={() => setEditingCard(null)}
        onSave={handleSaveFix}
      />

      {/* Full Issues Modal */}
      <AllIssuesModal
        isOpen={showAllIssuesModal}
        cards={perbaikanCardsAll}
        onClose={() => setShowAllIssuesModal(false)}
        onSelectCard={(c) => {
          setShowAllIssuesModal(false);
          setEditingCard(c);
        }}
      />
    </div>
  );
}
