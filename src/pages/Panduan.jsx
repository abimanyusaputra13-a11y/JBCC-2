import React from 'react';
import { BookOpen, ShieldCheck, Scale, Cpu, HelpCircle, AlertCircle } from 'lucide-react';

export default function Panduan() {
  const principles = [
    {
      title: 'Keputusan Selalu di Tangan Penjual',
      icon: ShieldCheck,
      desc: 'Lintas Seller Insights tidak pernah mengubah harga, judul, atau stok secara otomatis. Setiap rekomendasi disajikan dengan opsi "Perbaiki sekarang" yang membuka pratinjau penyuntingan sebelum disimpan secara sadar oleh penjual.'
    },
    {
      title: 'Tanpa Tekanan Perang Harga',
      icon: Scale,
      desc: 'Kami sengaja tidak menampilkan harga pasar terendah atau batas target harga buatan sistem. Analisis posisi harga menggunakan rentang interkuartil (Q1 hingga Q3) dan nilai tengah pembanding semata-mata sebagai referensi objektif.'
    },
    {
      title: 'Tingkat Keyakinan Berdasarkan Bukti Nyata',
      icon: Cpu,
      desc: 'Tiap kartu rekomendasi memiliki indikator keyakinan 3-segmen (Rendah, Sedang, Tinggi) lengkap dengan alasan dan ukuran kelompok pembanding nyata (misal: "berdasarkan 14 listing serupa").'
    },
    {
      title: 'Diagnosis Netral Tanpa Menyalahkan',
      icon: HelpCircle,
      desc: 'Analisis corong penjualan berfokus pada langkah yang memerlukan perhatian (misal: klik ke keranjang) dan mengarahkan ke penyebab obyektif seperti kejelasan informasi klaim atau kelengkapan varian.'
    }
  ];

  const glossary = [
    {
      term: 'Data Belum Cukup',
      desc: 'Muncul apabila listing atau toko belum mencapai ambang batas minimum volume tayangan (200 tayangan) atau pesanan (30 pesanan) agar kesimpulan statistik tidak bias.'
    },
    {
      term: 'Rentang Umum (Q1 - Q3)',
      desc: 'Rentang harga di mana 50% listing sejenis berada, mengabaikan produk yang terlalu murah atau terlalu mahal agar tidak menyesatkan pertimbangan penjual.'
    },
    {
      term: 'Kelengkapan Listing (x dari 9)',
      desc: 'Daftar periksa 9 informasi dasar yang biasa dicari pembeli online (jenis produk, merek, ukuran, varian, jenis kulit/kebutuhan, bahan utama, cara pakai, kedaluwarsa/batch, dan foto).'
    },
    {
      term: 'Sejak Anda Mengubah',
      desc: 'Perbandingan data corong sebelum dan sesudah perubahan yang Anda lakukan disandingkan dengan tren pasar sejenis di tanggal yang sama. Sistem tidak pernah mengklaim perubahan tersebut adalah satu-satunya penyebab.'
    }
  ];

  return (
    <div style={{ maxWidth: '960px' }}>
      {/* Header */}
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--navy)', marginBottom: '6px' }}>
          Panduan Prinsip Kerja Lintas Seller Insights
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          Pelajari bagaimana data Anda dianalisis, metodologi pembanding statistik, dan etika privasi yang kami pegang untuk melindungi strategi toko Anda.
        </p>
      </div>

      {/* Principles Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
        {principles.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              style={{
                padding: '20px',
                backgroundColor: '#ffffff',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--tint-hover)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={16} />
                </div>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: 'var(--navy)', margin: 0 }}>
                  {item.title}
                </h3>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Glossary Section */}
      <div
        style={{
          padding: '24px',
          backgroundColor: '#fafbfc',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-md)'
        }}
      >
        <div className="label-upper" style={{ marginBottom: '16px' }}>
          Glosarium Istilah & Metrik
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {glossary.map((item, idx) => (
            <div key={idx} style={{ borderBottom: idx < glossary.length - 1 ? '1px solid var(--border-light)' : 'none', paddingBottom: '12px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
                {item.term}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
