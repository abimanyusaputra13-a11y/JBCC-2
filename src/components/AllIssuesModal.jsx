import React, { useEffect } from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import SegmentedBar from './SegmentedBar';
import Pill from './Pill';

export default function AllIssuesModal({
  isOpen,
  onClose,
  cards = [],
  onSelectCard
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ width: '640px', maxHeight: '85vh' }}
      >
        {/* Header */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <div className="label-upper">Daftar Lengkap</div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginTop: '2px' }}>
              Semua Peluang Perbaikan ({cards.length})
            </h3>
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

        {/* Content */}
        <div style={{ padding: '16px 20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {cards.map((card, idx) => (
            <div
              key={card.id}
              style={{
                padding: '14px 16px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px',
                backgroundColor: card.state === 'done' ? '#fafbfc' : '#ffffff'
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)' }}>
                    #{idx + 1}
                  </span>
                  {card.listingName && (
                    <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--primary)' }}>
                      {card.listingName}
                    </span>
                  )}
                  {card.state === 'done' && <Pill label="Selesai" variant="success" size="sm" />}
                  {card.state === 'in_progress' && <Pill label="Ditunda" variant="warning" size="sm" />}
                </div>

                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
                  {card.title}
                </div>

                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                  {card.finding}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Keyakinan:</span>
                    <SegmentedBar total={3} filled={card.confidence?.segments || 3} size="sm" />
                  </div>
                  {card.action?.effort && (
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      Estimasi: {card.action.effort}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    onClose();
                    onSelectCard(card);
                  }}
                  style={{ whiteSpace: 'nowrap' }}
                >
                  <span>Tinjau</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '12px 20px',
            borderTop: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'flex-end',
            backgroundColor: '#fafbfc'
          }}
        >
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onClose}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
