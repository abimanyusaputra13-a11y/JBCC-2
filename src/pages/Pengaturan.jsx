import React from 'react';
import { Settings, Sliders, RotateCcw, Shield, CheckCircle2 } from 'lucide-react';

export default function Pengaturan({
  showLabelCriteriaCard,
  onToggleLabelCriteriaCard,
  isLoadingSkeleton,
  onToggleLoadingSkeleton,
  onResetData
}) {
  return (
    <div style={{ maxWidth: '800px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
          Pengaturan & Konfigurasi Prototipe
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          Sesuaikan preferensi toko dan parameter uji coba fitur untuk lingkungan prototipe front-end.
        </p>
      </div>

      {/* Profil Toko Mock */}
      <div
        style={{
          padding: '20px',
          backgroundColor: '#ffffff',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '20px'
        }}
      >
        <span className="label-upper" style={{ marginBottom: '12px', display: 'block' }}>
          Profil Toko
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '13px' }}>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Nama Toko</div>
            <div style={{ fontWeight: 600, color: 'var(--navy)', marginTop: '2px' }}>Glow Apothecary ID</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Pemilik Toko</div>
            <div style={{ fontWeight: 600, color: 'var(--navy)', marginTop: '2px' }}>Rian Hidayat</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Kategori Utama</div>
            <div style={{ fontWeight: 600, color: 'var(--navy)', marginTop: '2px' }}>Kecantikan & Perawatan Diri (BPC)</div>
          </div>
          <div>
            <div style={{ color: 'var(--text-muted)', fontSize: '11px' }}>Status Akun</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--success)', fontWeight: 600, marginTop: '2px' }}>
              <CheckCircle2 size={14} />
              <span>Terverifikasi Resmi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Flag Pengujian Prototipe */}
      <div
        style={{
          padding: '20px',
          backgroundColor: '#ffffff',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '20px'
        }}
      >
        <span className="label-upper" style={{ marginBottom: '16px', display: 'block' }}>
          Sakelar Fitur Eksperimental Prototipe
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Mock Flag 1: Jalur menuju label */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>
                Tampilkan Kartu "Jalur Menuju Kriteria Label"
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                Menampilkan kartu placeholder kriteria penilaian di tab Perbaikan Beranda (selalu memakai kata "kriteria", bukan janji label).
              </div>
            </div>
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={showLabelCriteriaCard}
              onChange={(e) => onToggleLabelCriteriaCard(e.target.checked)}
              style={{ width: '18px', height: '18px' }}
            />
          </div>

          <div style={{ height: '1px', backgroundColor: 'var(--border-light)' }} />

          {/* Mock Flag 2: Skeleton Loading Simulation */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>
                Simulasi Status Memuat (Skeleton Loading)
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                Menguji animasi shimmer dan tampilan transisi data saat sedang dimuat.
              </div>
            </div>
            <input
              type="checkbox"
              className="custom-checkbox"
              checked={isLoadingSkeleton}
              onChange={(e) => onToggleLoadingSkeleton(e.target.checked)}
              style={{ width: '18px', height: '18px' }}
            />
          </div>
        </div>
      </div>

      {/* Reset State Action */}
      <div
        style={{
          padding: '20px',
          backgroundColor: '#fafbfc',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)' }}>
            Kembalikan Data Contoh ke Nilai Awal
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Menghapus riwayat perubahan perbaikan lokal dan mengembalikan 25 listing ke data awal prototipe.
          </div>
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={onResetData}
        >
          <RotateCcw size={14} />
          <span>Reset Data Prototipe</span>
        </button>
      </div>
    </div>
  );
}
