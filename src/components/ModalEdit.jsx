import React, { useState, useEffect } from 'react';
import { X, Check, AlertCircle } from 'lucide-react';

/**
 * ModalEdit:
 * "The seller always decides. No automatic edits.
 * 'Perbaiki sekarang' opens a mock edit screen with suggested values prefilled,
 * and the seller must press Simpan."
 */
export default function ModalEdit({
  isOpen,
  card,
  onClose,
  onSave
}) {
  const [fieldValue, setFieldValue] = useState('');
  const [stockValue, setStockValue] = useState('30');
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (card && card.action) {
      setFieldValue(card.action.suggestedValue || '');
      if (card.action.prefillField === 'stok') {
        setStockValue(card.action.suggestedValue || '30');
      }
    }
  }, [card]);

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

  if (!isOpen || !card) return null;

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onSave(card, { fieldValue, stockValue });
    }, 400);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ width: '540px' }}
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
            <div className="label-upper">Tinjau Perubahan Listing</div>
            <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--navy)', marginTop: '2px' }}>
              {card.listingName || card.title}
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

        {/* Notice that seller always decides */}
        <div
          style={{
            padding: '10px 20px',
            backgroundColor: 'var(--tint-hover)',
            borderBottom: '1px solid var(--border)',
            fontSize: '12px',
            color: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <AlertCircle size={14} style={{ flexShrink: 0 }} />
          <span>
            Nilai saran telah diisikan secara otomatis. Anda memegang kendali penuh untuk menyetujui, menyunting, atau membatalkan sebelum menyimpan.
          </span>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} style={{ padding: '20px' }}>
          <div style={{ marginBottom: '16px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: 600,
                color: 'var(--navy)',
                marginBottom: '6px'
              }}
            >
              Tindakan yang disarankan:
            </label>
            <div
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                padding: '8px 12px',
                backgroundColor: '#fafbfc',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                lineHeight: 1.4
              }}
            >
              {card.action?.recommendation}
            </div>
          </div>

          {/* Conditional Input depending on card type */}
          {card.action?.prefillField === 'stok' ? (
            <div style={{ marginBottom: '16px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  marginBottom: '6px'
                }}
              >
                Jumlah Persediaan Siap Kirim (Unit):
              </label>
              <input
                type="number"
                min="1"
                value={stockValue}
                onChange={(e) => setStockValue(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '14px',
                  color: 'var(--text-primary)'
                }}
                required
              />
            </div>
          ) : (
            <div style={{ marginBottom: '16px' }}>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: 'var(--navy)',
                  marginBottom: '6px'
                }}
              >
                Teks atau Nilai yang Disarankan:
              </label>
              <textarea
                rows={4}
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '13px',
                  color: 'var(--text-primary)',
                  lineHeight: 1.4,
                  resize: 'vertical'
                }}
                required
              />
            </div>
          )}

          <div
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              marginBottom: '20px'
            }}
          >
            Perubahan akan langsung diterapkan ke katalog listing Anda setelah menekan tombol Simpan.
          </div>

          {/* Action buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '10px'
            }}
          >
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Batal
            </button>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSaved}
            >
              <Check size={14} />
              <span>{isSaved ? 'Menyimpan...' : 'Simpan Perubahan'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
