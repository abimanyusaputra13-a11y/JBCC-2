# Lintas Seller Insights - Desktop Web Seller Center

Prototipe antarmuka front-end untuk "Lintas Seller Insights", pusat analisis data dan rekomendasi tindakan bagi penjual (seller center) marketplace di Indonesia. Dibangun menggunakan React 18 dengan JSX (plain JavaScript, tanpa TypeScript), dibundel menggunakan Vite, dan berfokus pada pengalaman desktop minimalis, bersih, dan berorientasi pada keputusan penjual.

## Panduan Menjalankan

Pastikan Node.js (versi 18+) telah terpasang di komputer Anda.

```bash
# 1. Pasang dependensi
npm install

# 2. Jalankan server pengembangan lokal
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173` (atau port yang dialokasikan oleh Vite).

---

## Struktur Folder

```
src/
├── components/          # Komponen UI modular dan reusable
│   ├── AllIssuesModal.jsx          # Modal daftar lengkap masalah perbaikan
│   ├── Drawer.jsx                  # Komponen laci samping kanan (480px)
│   ├── FloatingBar.jsx             # Bar aksi massal melayang warna navy
│   ├── Header.jsx                  # Header atas dengan judul dan aksi
│   ├── KpiCard.jsx                 # Kartu ringkasan metrik dengan sparkline
│   ├── ListingDetailDrawer.jsx     # Laci diagnosis lengkap corong & harga
│   ├── ModalEdit.jsx               # Layar modal tinjau perbaikan yang disarankan
│   ├── OnboardingModal.jsx         # Modal tur pengenalan 3 langkah
│   ├── OpportunityDetailDrawer.jsx # Laci rincian bukti celah peluang pasar
│   ├── Pill.jsx                    # Label status kecil huruf kapital (small-caps)
│   ├── RangeBar.jsx                # Diagram rentang posisi harga (Q1 - Q3)
│   ├── RecommendationCard.jsx      # Kartu rekomendasi dengan anatomi 5 bagian
│   ├── SegmentedBar.jsx            # Batang skor bersegmen (keyakinan & kelengkapan)
│   ├── Sidebar.jsx                 # Navigasi samping 240px dengan pintasan "/"
│   └── Sparkline.jsx               # Grafik tren garis inline berbasis SVG murni
├── data/
│   └── mockData.js      # Data tiruan 25 listing BPC, 12 peluang, kartu rekomendasi, sinyal layanan
├── pages/
│   ├── Beranda.jsx      # Action feed berperingkat, ringkasan KPI, panduan langkah awal
│   ├── Peluang.jsx      # Tabel celah peluang pasar dengan status keramaian
│   ├── ListingSaya.jsx  # Tabel kesehatan listing dengan bilah kelengkapan & laci rincian
│   ├── SinyalLayanan.jsx# Tolok ukur waktu proses vs transit kurir & metrik toko
│   ├── Panduan.jsx      # Panduan prinsip analisis, etika, dan glosarium
│   └── Pengaturan.jsx   # Konfigurasi prototipe, sakelar fitur, dan reset data
├── styles/
│   └── index.css        # Sistem desain CSS murni dengan variabel warna Lintas
├── App.jsx              # Routing utama aplikasi dan manajemen status terpusat
└── main.jsx             # Titik masuk aplikasi React dengan BrowserRouter
```

---

## Prinsip Desain & Fitur Utama

1. **Tata Letak & Estetika**:
   - Bingkai aplikasi putih berujung tumpul (10-12px) di atas kanvas abu-abu muda (`#eceef3`).
   - Lebar minimum desktop 1280px.
   - Tipografi menggunakan font Inter.
   - Tanpa gradasi, tanpa ilustrasi kartun, dan tanpa emoji.

2. **Palet Warna Merek**:
   - `--navy: #18204b` (logo tile, judul, floating bulk bar, teks utama).
   - `--primary: #3449a1` (tombol utama, tab aktif, navigasi aktif, checkbox terpilih).
   - `--accent: #5468b8` (sparkline, batas rentang harga, fokus keyboard).
   - Turunan warna menggunakan `color-mix(in srgb, <warna> 8% atau 14%, white)` untuk status hover dan baris tabel terpilih.
   - Warna semantik (hijau, kuning tua, merah) hanya digunakan untuk titik status dan teks indikator secara halus.

3. **Keputusan Selalu di Tangan Penjual**:
   - Tidak ada penetapan harga otomatis (auto-repricing) atau pengubahan katalog tanpa persetujuan.
   - Tombol "Perbaiki sekarang" membuka formulir pratinjau yang telah terisi saran, dan penjual harus menekan tombol **Simpan**.

4. **Transparansi Tanpa Tekanan Perang Harga**:
   - Posisi harga hanya menampilkan rentang interkuartil (Q1 ke Q3) dan nilai tengah pembanding.
   - Tidak menampilkan harga pasar terendah atau target harga buatan sistem.
   - Penjual dapat mengeluarkan produk yang dirasa tidak sejenis dari kelompok pembanding.

5. **Bahasa**:
   - Seluruh teks antarmuka menggunakan Bahasa Indonesia yang ramah, ringkas, dan jelas.
   - Menghindari singkatan asing (misal: menggunakan istilah "tingkat klik" alih-alih "CTR").
