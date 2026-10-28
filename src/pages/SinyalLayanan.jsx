import React, { useState } from 'react';
import { serviceSignalsData } from '../data/mockData';
import { Clock, Truck, XCircle, RotateCcw, Star, AlertCircle, Info, ShieldCheck } from 'lucide-react';
import Pill from '../components/Pill';

export default function SinyalLayanan() {
  const [isLowOrdersDemo, setIsLowOrdersDemo] = useState(false);

  const currentOrders = isLowOrdersDemo ? 18 : serviceSignalsData.totalOrdersPeriod;
  const isBelowThreshold = currentOrders < serviceSignalsData.minOrderThreshold;

  return (
    <div>
      {/* Header explanation banner */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          padding: '14px 18px',
          backgroundColor: '#fafbfc',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-sm)'
        }}
      >
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy)' }}>
            Tolok Ukur Layanan Toko & Pengiriman
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
            Data dihitung secara anonim dan dibandingkan dengan nilai umum kategori kecantikan & perawatan diri (tanpa menyebut nama toko lain).
          </div>
        </div>

        {/* Demo Switch for Low Order Count Threshold */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Simulasi pesanan sedikit:</span>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => setIsLowOrdersDemo(!isLowOrdersDemo)}
            style={{ fontSize: '11px', padding: '3px 8px' }}
          >
            {isLowOrdersDemo ? 'Kembalikan (482 Pesanan)' : 'Uji Kasus < 30 Pesanan'}
          </button>
        </div>
      </div>

      {/* Threshold Alert if Below 30 Orders */}
      {isBelowThreshold ? (
        <div
          style={{
            padding: '36px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center'
          }}
        >
          <AlertCircle size={36} style={{ color: 'var(--warning)', margin: '0 auto 12px' }} />
          <h2 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
            Data belum cukup untuk tolok ukur layanan
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.5 }}>
            Toko Anda baru mencatat {currentOrders} pesanan selesai pada periode ini. Diperlukan minimal {serviceSignalsData.minOrderThreshold} pesanan untuk menghasilkan perbandingan statistik yang akurat dan adil.
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* SECTION 1: WAKTU PROSES (Visually separate from carrier transit time) */}
          <div
            style={{
              padding: '20px 24px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={16} style={{ color: 'var(--primary)' }} />
                  <span className="label-upper">Waktu Proses Penjual (Handling Time)</span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Waktu sejak pesanan dibayar pembeli hingga paket diserahkan ke jasa kirim.
                </div>
              </div>
              <Pill label="Dalam Kendali Anda" variant="primary" size="sm" />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                alignItems: 'center',
                backgroundColor: '#fafbfc',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px 20px'
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Waktu Rata-rata Toko Anda</div>
                <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--navy)', marginTop: '4px' }}>
                  {serviceSignalsData.sellerHandlingHours} Jam
                </div>
                <div style={{ fontSize: '12px', color: 'var(--success)', marginTop: '2px', fontWeight: 500 }}>
                  3.5 jam lebih cepat dari rata-rata kategori
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Nilai Umum Kategori (Benchmark)</div>
                <div style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {serviceSignalsData.sellerHandlingCategoryBenchmark} Jam
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Dihitung dari 1.200+ penjual aktif kategori kecantikan
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                color: 'var(--text-muted)'
              }}
            >
              <Info size={13} style={{ flexShrink: 0 }} />
              <span>
                Catatan penting: Waktu proses penjual berada penuh dalam kendali toko Anda dan mempengaruhi keputusan pembeli untuk memesan ulang.
              </span>
            </div>
          </div>

          {/* SECTION 2: WAKTU TRANSIT KURIR (Visually separate from seller handling time) */}
          <div
            style={{
              padding: '20px 24px',
              backgroundColor: '#ffffff',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Truck size={16} style={{ color: 'var(--accent)' }} />
                  <span className="label-upper">Waktu Transit Kurir (Carrier Transit Time)</span>
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Waktu sejak paket diserahkan ke kurir hingga diterima di alamat tujuan pembeli.
                </div>
              </div>
              <Pill label="Dipengaruhi Ekspedisi" variant="neutral" size="sm" />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                alignItems: 'center',
                backgroundColor: '#fafbfc',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-sm)',
                padding: '16px 20px'
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Rata-rata Waktu Pengiriman Kurir</div>
                <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--navy)', marginTop: '4px' }}>
                  {serviceSignalsData.carrierTransitHours} Jam
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  Sekitar 1.6 hari pengiriman
                </div>
              </div>

              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Nilai Umum Kategori (Benchmark)</div>
                <div style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {serviceSignalsData.carrierTransitCategoryBenchmark} Jam
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                  Berdasarkan rute wilayah Jabodetabek dan antar-pulau seimbang
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                color: 'var(--text-muted)'
              }}
            >
              <Info size={13} style={{ flexShrink: 0 }} />
              <span>
                Catatan penting: Waktu transit kurir berada di luar kendali langsung penjual, namun pemilihan mitra logistik yang tepat dapat mempercepat pengantaran.
              </span>
            </div>
          </div>

          {/* SECTION 3: TINGKAT PEMBATALAN, RETUR, DAN RATING */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {/* Tingkat Pembatalan */}
            <div
              style={{
                padding: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <XCircle size={16} style={{ color: 'var(--danger)' }} />
                <span className="label-upper">Tingkat Pembatalan</span>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--navy)' }}>
                {serviceSignalsData.cancellationRate}%
              </div>
              <div style={{ fontSize: '12px', color: 'var(--success)', marginTop: '4px', fontWeight: 500 }}>
                Nilai umum kategori: {serviceSignalsData.cancellationCategoryBenchmark}%
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: 1.4 }}>
                Persentase pesanan yang dibatalkan oleh toko akibat stok kosong atau kedaluwarsa waktu proses.
              </p>
            </div>

            {/* Tingkat Retur */}
            <div
              style={{
                padding: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <RotateCcw size={16} style={{ color: 'var(--warning)' }} />
                <span className="label-upper">Tingkat Retur / Komplain</span>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--navy)' }}>
                {serviceSignalsData.returnRate}%
              </div>
              <div style={{ fontSize: '12px', color: 'var(--success)', marginTop: '4px', fontWeight: 500 }}>
                Nilai umum kategori: {serviceSignalsData.returnCategoryBenchmark}%
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: 1.4 }}>
                Persentase pengembalian barang akibat salah kirim varian atau kemasan rusak saat diterima.
              </p>
            </div>

            {/* Rating Toko */}
            <div
              style={{
                padding: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Star size={16} style={{ color: '#b7791f' }} />
                <span className="label-upper">Rating Toko</span>
              </div>
              <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--navy)' }}>
                {serviceSignalsData.storeRating} <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-muted)' }}>/ 5.0</span>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--success)', marginTop: '4px', fontWeight: 500 }}>
                Nilai umum kategori: {serviceSignalsData.ratingCategoryBenchmark}
              </div>
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', lineHeight: 1.4 }}>
                Rata-rata ulasan bintang dari total {currentOrders} pesanan pada 30 hari terakhir.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
