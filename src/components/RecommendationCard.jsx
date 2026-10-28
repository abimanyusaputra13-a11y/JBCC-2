import React, { useState } from 'react';
import SegmentedBar from './SegmentedBar';
import Pill from './Pill';
import { Clock, CheckCircle2, ChevronRight, X, AlertCircle } from 'lucide-react';

/**
 * Recommendation Card Anatomy:
 * 1. Apa yang kami temukan (one plain sentence)
 * 2. Bukti (numbers plus size of comparison set, e.g. "14 listing serupa")
 * 3. Tingkat keyakinan (3-segment bar plus label Rendah/Sedang/Tinggi and a one-line reason)
 * 4. Saran tindakan with an estimated effort chip (e.g. "sekitar 10 menit")
 * 5. Buttons: "Perbaiki sekarang" (primary), "Ingatkan nanti", "Tidak relevan" (menu of reason codes)
 */
export default function RecommendationCard({
  card,
  onFixNow,
  onRemindLater,
  onDismiss,
  onRestore
}) {
  const [showDismissMenu, setShowDismissMenu] = useState(false);

  const dismissReasons = [
    'Bukan strategi toko kami saat ini',
    'Karakteristik produk memang berbeda',
    'Sudah pernah dicoba sebelumnya',
    'Keterbatasan pasokan atau persediaan'
  ];

  const isDismissed = card.state === 'dismissed';
  const isDone = card.state === 'done';
  const isPostponed = card.state === 'in_progress';

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-md)',
        padding: '20px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        position: 'relative',
        opacity: isDismissed ? 0.75 : 1,
        transition: 'border-color 0.15s ease'
      }}
    >
      {/* Header bar of the card */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          {card.listingName && (
            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary)', marginBottom: '4px' }}>
              {card.listingName}
            </div>
          )}
          <h2
            style={{
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--navy)',
              margin: 0,
              lineHeight: 1.3
            }}
          >
            {card.title}
          </h2>
        </div>

        {/* State Badges if not normal */}
        {isDone && <Pill label="Selesai" variant="success" dot />}
        {isPostponed && <Pill label="Ditunda" variant="warning" dot />}
        {isDismissed && <Pill label="Dilewati" variant="neutral" />}
      </div>

      {/* 1. Apa yang kami temukan */}
      <div>
        <div className="label-upper" style={{ marginBottom: '4px' }}>
          Apa yang kami temukan
        </div>
        <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.45 }}>
          {card.finding}
        </p>
      </div>

      {/* 2. Bukti */}
      <div>
        <div className="label-upper" style={{ marginBottom: '4px' }}>
          Bukti data pembanding
        </div>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
          {card.evidence}
        </p>
      </div>

      {/* 3. Tingkat keyakinan */}
      <div
        style={{
          padding: '10px 14px',
          backgroundColor: '#fafbfc',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span className="label-upper">Tingkat keyakinan:</span>
          <SegmentedBar total={3} filled={card.confidence?.segments || 3} size="sm" />
          <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--navy)' }}>
            {card.confidence?.level || 'Tinggi'}
          </span>
        </div>
        <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
          {card.confidence?.reason}
        </div>
      </div>

      {/* 4. Saran tindakan with estimated effort chip */}
      <div>
        <div className="label-upper" style={{ marginBottom: '4px' }}>
          Saran tindakan
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: 1.45 }}>
            {card.action?.recommendation}
          </span>
          {card.action?.effort && (
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '11px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                backgroundColor: 'var(--border-light)',
                padding: '2px 8px',
                borderRadius: 'var(--radius-pill)',
                whiteSpace: 'nowrap'
              }}
            >
              <Clock size={12} />
              {card.action.effort}
            </span>
          )}
        </div>
      </div>

      {/* 5. Buttons */}
      {!isDismissed && !isDone && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '8px',
            borderTop: '1px solid var(--border-light)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onFixNow(card)}
            >
              Perbaiki sekarang
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onRemindLater(card)}
            >
              Ingatkan nanti
            </button>
          </div>

          <div style={{ position: 'relative' }}>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setShowDismissMenu(!showDismissMenu)}
              style={{ color: 'var(--text-muted)' }}
            >
              Tidak relevan
            </button>

            {/* Reason code menu */}
            {showDismissMenu && (
              <div
                style={{
                  position: 'absolute',
                  right: 0,
                  bottom: '36px',
                  width: '280px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-menu)',
                  padding: '8px',
                  zIndex: 30
                }}
              >
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', padding: '4px 8px 6px' }}>
                  PILIH ALASAN
                </div>
                {dismissReasons.map((reason, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setShowDismissMenu(false);
                      onDismiss(card, reason);
                    }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '6px 8px',
                      fontSize: '12px',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      lineHeight: 1.3
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--tint-hover)')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  >
                    {reason}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* If dismissed, allow restore */}
      {isDismissed && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '6px', borderTop: '1px solid var(--border-light)' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            Alasan: {card.dismissReason || 'Tidak relevan'}
          </span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => onRestore(card)}
          >
            Pulihkan ke daftar
          </button>
        </div>
      )}

      {/* If done */}
      {isDone && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingTop: '6px', borderTop: '1px solid var(--border-light)', color: 'var(--success)', fontSize: '12px', fontWeight: 500 }}>
          <CheckCircle2 size={14} />
          <span>Perubahan telah tersimpan dan sedang dipantau.</span>
        </div>
      )}
    </div>
  );
}
