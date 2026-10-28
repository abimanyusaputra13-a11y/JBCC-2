import React, { useState } from 'react';
import { X, Info } from 'lucide-react';

/**
 * Price Position Range Bar Component
 * Rules:
 * - Shows typical range (interquartile Q1 to Q3) and median.
 * - Shows seller's price marker.
 * - Shows number of comparable listings.
 * - Standing note: "Dibandingkan berdasarkan harga barang saja; ongkos kirim tidak termasuk."
 * - Do NOT show lowest market price.
 * - Do NOT show a target price.
 * - Allow the seller to remove a comparable (button "Bukan produk sejenis") and log it in local state.
 */
export default function RangeBar({
  sellerPrice = 89000,
  median = 84000,
  q1 = 72000,
  q3 = 95000,
  comparableCount = 28,
  comparables = [],
  onRemoveComparable
}) {
  const [removedList, setRemovedList] = useState([]);
  const [showManageModal, setShowManageModal] = useState(false);

  // Formatting helpers
  const formatRupiah = (val) => {
    return 'Rp ' + Number(val).toLocaleString('id-ID');
  };

  // Safe bounds for visualization (spanning from slightly below Q1 to slightly above Q3 and sellerPrice)
  const minBound = Math.min(q1 * 0.9, sellerPrice * 0.9);
  const maxBound = Math.max(q3 * 1.1, sellerPrice * 1.1);
  const rangeSpan = maxBound - minBound || 1;

  const getPercent = (val) => {
    const pct = ((val - minBound) / rangeSpan) * 100;
    return Math.max(4, Math.min(96, pct));
  };

  const q1Pct = getPercent(q1);
  const q3Pct = getPercent(q3);
  const medianPct = getPercent(median);
  const sellerPct = getPercent(sellerPrice);

  const activeComparables = comparables.filter((c) => !removedList.includes(c.id));
  const currentComparableCount = comparableCount - removedList.length;

  const handleRemove = (item) => {
    setRemovedList((prev) => [...prev, item.id]);
    if (onRemoveComparable) {
      onRemoveComparable(item);
    }
  };

  return (
    <div style={{ marginTop: '16px', marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <div>
          <span className="label-upper">Posisi Harga</span>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Berdasarkan {currentComparableCount} listing serupa
          </div>
        </div>

        {comparables.length > 0 && (
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setShowManageModal(!showManageModal)}
            style={{ fontSize: '11px', padding: '3px 8px' }}
          >
            {showManageModal ? 'Tutup daftar' : 'Kelola pembanding'}
          </button>
        )}
      </div>

      {/* Visual Range Bar */}
      <div
        style={{
          position: 'relative',
          height: '46px',
          backgroundColor: '#fafbfc',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)',
          marginTop: '12px',
          marginBottom: '28px',
          padding: '0 12px'
        }}
      >
        {/* Background track line */}
        <div
          style={{
            position: 'absolute',
            top: '22px',
            left: '12px',
            right: '12px',
            height: '2px',
            backgroundColor: 'var(--border)'
          }}
        />

        {/* Typical Range (Q1 to Q3) box */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: `${q1Pct}%`,
            width: `${Math.max(12, q3Pct - q1Pct)}%`,
            height: '22px',
            backgroundColor: 'color-mix(in srgb, var(--accent) 15%, white)',
            border: '1px dashed var(--accent)',
            borderRadius: '4px'
          }}
          title={`Rentang umum (Q1 - Q3): ${formatRupiah(q1)} sampai ${formatRupiah(q3)}`}
        />

        {/* Median tick line */}
        <div
          style={{
            position: 'absolute',
            top: '8px',
            left: `${medianPct}%`,
            width: '2px',
            height: '30px',
            backgroundColor: 'var(--accent)',
            transform: 'translateX(-50%)'
          }}
          title={`Nilai tengah pembanding: ${formatRupiah(median)}`}
        />

        {/* Seller's Price Marker (Navy pin) */}
        <div
          style={{
            position: 'absolute',
            top: '6px',
            left: `${sellerPct}%`,
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 2
          }}
          title={`Harga Anda saat ini: ${formatRupiah(sellerPrice)}`}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: 'var(--navy)',
              border: '2px solid #ffffff',
              boxShadow: '0 1px 3px rgba(24,32,75,0.3)'
            }}
          />
          <div
            style={{
              width: '2px',
              height: '18px',
              backgroundColor: 'var(--navy)'
            }}
          />
        </div>

        {/* Floating label below marker */}
        <div
          style={{
            position: 'absolute',
            top: '48px',
            left: `${sellerPct}%`,
            transform: 'translateX(-50%)',
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--navy)',
            whiteSpace: 'nowrap'
          }}
        >
          Harga Anda: {formatRupiah(sellerPrice)}
        </div>
      </div>

      {/* Legend & Stats */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: 'var(--text-secondary)',
          marginTop: '18px',
          paddingBottom: '8px',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '12px',
              height: '10px',
              backgroundColor: 'color-mix(in srgb, var(--accent) 15%, white)',
              border: '1px dashed var(--accent)',
              borderRadius: '2px'
            }}
          />
          <span>Rentang umum: {formatRupiah(q1)} - {formatRupiah(q3)}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '2px',
              height: '10px',
              backgroundColor: 'var(--accent)'
            }}
          />
          <span>Nilai tengah: {formatRupiah(median)}</span>
        </div>
      </div>

      {/* Standing Note - REQUIRED */}
      <p
        style={{
          fontSize: '11px',
          color: 'var(--text-muted)',
          marginTop: '8px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '5px',
          lineHeight: 1.4
        }}
      >
        <Info size={13} style={{ flexShrink: 0, marginTop: '2px' }} />
        <span>Dibandingkan berdasarkan harga barang saja; ongkos kirim tidak termasuk.</span>
      </p>

      {/* Manage Comparables Popover/List */}
      {showManageModal && (
        <div
          style={{
            marginTop: '12px',
            padding: '12px',
            backgroundColor: '#fafbfc',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)'
          }}
        >
          <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--navy)', marginBottom: '8px' }}>
            Contoh Listing Pembanding ({activeComparables.length})
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '10px' }}>
            Jika ada produk yang tidak sejenis atau berbeda kualitas, Anda dapat menghapusnya dari kelompok pembanding.
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '180px', overflowY: 'auto' }}>
            {activeComparables.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '6px 8px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  fontSize: '12px'
                }}
              >
                <div>
                  <div style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{item.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{formatRupiah(item.price)}</div>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemove(item)}
                  className="btn btn-ghost btn-sm"
                  style={{
                    fontSize: '11px',
                    color: 'var(--danger)',
                    padding: '2px 6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  title="Keluarkan dari kelompok pembanding"
                >
                  <X size={12} />
                  Bukan produk sejenis
                </button>
              </div>
            ))}

            {activeComparables.length === 0 && (
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', padding: '8px' }}>
                Semua listing contoh telah dikeluarkan.
              </div>
            )}
          </div>

          {removedList.length > 0 && (
            <div style={{ marginTop: '8px', fontSize: '11px', color: 'var(--text-muted)' }}>
              {removedList.length} produk telah dikeluarkan dari kelompok pembanding toko Anda.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
