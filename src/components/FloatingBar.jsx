import React from 'react';
import { X, Sparkles, Clock, CheckSquare } from 'lucide-react';

/**
 * Floating Dark Pill Bar Component (Navy)
 * Appears when rows are selected in data tables.
 * Shows "Dipilih: n" and bulk actions.
 */
export default function FloatingBar({
  selectedCount = 0,
  onClearSelection,
  onBulkViewSuggestions,
  onBulkRemindLater
}) {
  if (selectedCount === 0) return null;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'var(--navy)',
        color: '#ffffff',
        padding: '10px 20px',
        borderRadius: 'var(--radius-pill)',
        boxShadow: 'var(--shadow-floating)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        zIndex: 40,
        fontSize: '13px',
        fontWeight: 500,
        animation: 'slideUpBar 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <CheckSquare size={16} style={{ color: 'var(--accent)' }} />
        <span>
          Dipilih: <strong style={{ color: '#ffffff' }}>{selectedCount}</strong>
        </span>
      </div>

      <div style={{ width: '1px', height: '18px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {onBulkViewSuggestions && (
          <button
            type="button"
            onClick={onBulkViewSuggestions}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 500
            }}
          >
            <Sparkles size={13} />
            <span>Lihat saran</span>
          </button>
        )}

        {onBulkRemindLater && (
          <button
            type="button"
            onClick={onBulkRemindLater}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: 'var(--radius-pill)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: '#ffffff',
              fontSize: '12px',
              fontWeight: 500
            }}
          >
            <Clock size={13} />
            <span>Ingatkan nanti</span>
          </button>
        )}

        <button
          type="button"
          onClick={onClearSelection}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 10px',
            borderRadius: 'var(--radius-pill)',
            color: 'var(--text-muted)',
            fontSize: '12px'
          }}
          title="Batalkan pilihan"
        >
          <X size={14} />
          <span>Batal</span>
        </button>
      </div>
    </div>
  );
}
