// Mock data for Lintas Seller Insights (Beauty & Personal Care store: Glow Apothecary ID)
// All textual content in plain, friendly Bahasa Indonesia. No em dashes, no emoji.

export const PRODUCT_ISSUES_MAP = {
  'LIST-001': {
    category: 'Konten & Konversi',
    severity: 'warning',
    badge: 'Foto & Klaim',
    title: 'Rasio Klik ke Keranjang Rendah Akibat Foto Kurang Informatif',
    problem: 'Tingkat klik listing ini baik (1.120 klik), namun konversi ke keranjang hanya 25% (rata-rata kategori sejenis 32%). Pembeli ragu karena baru ada 1 foto produk tanpa infografis hasil uji klinis atau cara pemakaian yang benar.',
    suggestion: 'Unggah minimal 2 foto infografis beresolusi tinggi yang menampilkan perbandingan sebelum-sesudah dan sertakan voucher diskon toko Rp 5.000 untuk pembelian pertama.',
    impact: 'Potensi penambahan 60+ pesanan baru per bulan dan peningkatan rasio konversi keranjang hingga +28%.',
    actionLabel: 'Unggah Foto & Pasang Voucher'
  },
  'LIST-002': {
    category: 'Pasokan & Stok',
    severity: 'warning',
    badge: 'Pasokan Cepat Habis',
    title: 'Kecepatan Penjualan Tinggi, Stok Berisiko Habis dalam 12 Hari',
    problem: 'Produk tabir surya ini mencatatkan 188 pembelian dalam 4 minggu dengan tren melonjak naik (+56%). Persediaan di gudang saat ini tersisa 88 unit, diproyeksikan habis sebelum akhir bulan jika pesanan baru tidak segera masuk.',
    suggestion: 'Lakukan pemesanan ulang (restock order) minimal 150 unit ke pihak produsen dan batasi kuota pembelian maksimal 2 unit per transaksi untuk mencegah kekosongan etalase.',
    impact: 'Menghindari kerugian potensi omzet Rp 11.250.000 akibat status produk habis (stockout) dan menjaga posisi teratas pada algoritma pencarian.',
    actionLabel: 'Pesan Stok Pasokan Ulang'
  },
  'LIST-003': {
    category: 'Katalog & BPOM',
    severity: 'warning',
    badge: 'Atribut BPOM & Edukasi',
    title: 'Kelengkapan Informasi Rendah (6 dari 9 Atribut Dasar)',
    problem: 'Listing belum mencantumkan persentase konsentrasi AHA/BHA, izin edar resmi BPOM, serta aturan pakai berkala (hanya 2-3 kali seminggu) pada spesifikasi utama. Hal ini membuat calon pembeli pemula ragu membeli.',
    suggestion: 'Lengkapi nomor registrasi BPOM pada kolom izin edar dan tambahkan slide foto panduan pemakaian pemula di galeri produk.',
    impact: 'Menaikkan skor kelengkapan katalog menjadi 9/9 serta menurunkan risiko komplain atau retur akibat salah cara pakai.',
    actionLabel: 'Lengkapi Izin BPOM & Aturan'
  },
  'LIST-004': {
    category: 'Stok Kritis',
    severity: 'danger',
    badge: 'Stok Kritis (Sisa 6)',
    title: 'Stok Tersisa 6 Botol, Terancam Habis dalam 48 Jam',
    problem: 'Persediaan di sistem tersisa 6 unit sedangkan kecepatan penjualan rata-rata mencapai 3-4 unit per hari. Listing berisiko otomatis non-aktif jika stok menyentuh angka 0, yang akan merusak reputasi ranking pencarian.',
    suggestion: 'Segera masukkan stok cadangan minimal 50 unit ke dalam sistem seller center sebelum persediaan fisik habis total.',
    impact: 'Mempertahankan posisi listing di halaman pertama hasil pencarian pembersih wajah ceramide.',
    actionLabel: 'Tambah Stok Sekarang'
  },
  'LIST-005': {
    category: 'Harga & Bundling',
    severity: 'info',
    badge: 'Evaluasi Harga Bundling',
    title: 'Harga Jual Rp 95.000 di Atas Median Pasar (Rp 82.000)',
    problem: 'Tayangan pencarian tinggi (21.300) dan klik kuat (1.420), namun 42% pengunjung berpindah ke produk kompetitor berukuran 50g dengan rentang harga Rp 80.000 - Rp 85.000.',
    suggestion: 'Buat paket kombo hemat bundling dengan Serum Niacinamide atau sediakan voucher diskon toko Rp 10.000 untuk pembelian minimal 2 pot.',
    impact: 'Menaikkan rasio konversi keranjang hingga +24% tanpa harus menurunkan harga eceran resmi.',
    actionLabel: 'Buat Paket Kombo Bundling'
  },
  'LIST-006': {
    category: 'Konten Sampul',
    severity: 'warning',
    badge: 'Ganti Foto Sampul',
    title: 'Rasio Klik (CTR) Rendah Akibat Foto Utama Tanpa Klaim Aplikator',
    problem: 'Hanya 3.2% dari 12.800 tayangan yang mengklik listing. Foto utama saat ini hanya memperlihatkan kardus luar, bukan ujung aplikator logam dingin yang menjadi daya tarik utama produk ini.',
    suggestion: 'Ganti foto sampul utama dengan foto produk close-up yang memperlihatkan aplikator pendingin dan sertakan teks ringkas "Sensasi Dingin Peredam Kantung Mata".',
    impact: 'Menaikkan rasio klik dari 3.2% menjadi 6.5% (estimasi penambahan +400 klik potensial per bulan).',
    actionLabel: 'Perbarui Foto Sampul Produk'
  },
  'LIST-007': {
    category: 'Kemasan & Proteksi',
    severity: 'warning',
    badge: 'Proteksi Pompa Kemasan',
    title: 'Ulasan Pembeli Menyoroti Leher Pompa Botol Rentan Bocor',
    problem: 'Terdapat 8 ulasan bintang 3 pada bulan lalu yang mengeluhkan leher pompa lotion merembes saat pengiriman antarpulau, menurunkan rating produk ke 4.4.',
    suggestion: 'Tambahkan pengunci klip pompa (pump stopper lock) dan berikan segel plastik shrink wrap sebelum dibungkus kardus pengiriman.',
    impact: 'Mencegah retur barang dan memulihkan reputasi rating produk kembali ke bintang 4.8.',
    actionLabel: 'Tingkatkan Standar Kemasan'
  },
  'LIST-008': {
    category: 'Kata Kunci',
    severity: 'info',
    badge: 'Optimasi Kata Kunci',
    title: 'Judul Belum Memuat Kata Kunci Tren "Pemudar Bekas Luka"',
    problem: 'Pencarian kata kunci "scrub kopi pemudar bekas luka" naik +42% di kategori perawatan tubuh, namun judul listing hanya mencantumkan "pengangkat sel kulit mati".',
    suggestion: 'Perbarui judul produk menjadi: "Scrub Badan Kopi Organik Pencerah Kulit & Pemudar Bekas Luka 200g" untuk memaksimalkan traffic pencarian gratis.',
    impact: 'Estimasi penambahan +3.800 tayangan pencarian organik per bulan tanpa biaya iklan tambahan.',
    actionLabel: 'Perbarui Judul Produk'
  },
  'LIST-009': {
    category: 'Varian Produk',
    severity: 'info',
    badge: 'Buka Varian Travel 30ml',
    title: 'Tingginya Permintaan untuk Varian Ukuran Mini (Travel Size)',
    problem: 'Analisis diskusi produk mencatat 24 pertanyaan seputar ukuran kecil ramah kantong. Harga botol 50ml (Rp 115.000) dinilai terlalu besar bagi calon pembeli yang baru ingin mencoba kecocokan minyak rosemary.',
    suggestion: 'Luncurkan opsi varian ukuran travel 30ml seharga Rp 69.000 pada listing yang sama sebagai entry point pembeli baru.',
    impact: 'Membuka potensi 150+ pesanan baru dari konsumen pemula yang ingin uji coba produk.',
    actionLabel: 'Tambah Varian Ukuran 30ml'
  },
  'LIST-010': {
    category: 'Stok Habis',
    severity: 'danger',
    badge: 'Stok Habis (0 Unit)',
    title: 'Stok Kosong (0 Unit) Menyebabkan Penurunan Drastis Ranking Pencarian',
    problem: 'Listing shampoo ini telah berstatus stok kosong selama 5 hari berturut-turut. Sistem marketplace menurunkan prioritas listing di pencarian hingga lebih dari 70%.',
    suggestion: 'Masukkan stok minimal 30 unit segera atau aktifkan fitur Pre-Order sementara (maksimal 7 hari) jika pasokan sedang dalam pengiriman kurir logistik.',
    impact: 'Mengembalikan posisi listing ke halaman utama pencarian sebelum pelanggan beralih ke kompetitor.',
    actionLabel: 'Input Stok / Aktifkan Pre-Order'
  },
  'LIST-011': {
    category: 'Konversi Checkout',
    severity: 'warning',
    badge: 'Gratis Ongkir Ekstra',
    title: 'Tingkat Drop-Off Keranjang ke Pembayaran Tinggi (65%)',
    problem: 'Sebanyak 340 unit dimasukkan ke keranjang belanja, namun hanya 118 unit yang diselesaikan pembayarannya karena pembeli terbebani ongkos kirim reguler.',
    suggestion: 'Daftarkan listing ke program Gratis Ongkir Ekstra marketplace dan sediakan voucher toko minimal belanja Rp 75.000.',
    impact: 'Menaikkan rasio penyelesaian pembayaran (checkout rate) hingga +24%.',
    actionLabel: 'Daftar Program Gratis Ongkir'
  },
  'LIST-012': {
    category: 'Deskripsi Aroma',
    severity: 'info',
    badge: 'Detail Piramida Aroma',
    title: 'Deskripsi Parfum Belum Memuat Rincian Piramida Aroma',
    problem: 'Deskripsi saat ini hanya mencantumkan klaim "wangi tahan 8 jam" tanpa rincian piramida aroma (Top, Heart, dan Base Notes), memicu 35 pertanyaan berulang pada fitur chat penjual.',
    suggestion: 'Tambahkan tabel piramida aroma (Top: Vanilla Orchid; Heart: Madagascar Cocoa; Base: Cedarwood & Amber) pada deskripsi dan foto slide ke-2.',
    impact: 'Mempercepat keputusan pembelian konsumen dan menghemat waktu admin dalam membalas chat pertanyaan aroma.',
    actionLabel: 'Lengkapi Piramida Aroma'
  },
  'LIST-013': {
    category: 'Video & Foto',
    severity: 'warning',
    badge: 'Video Semprotan Mist',
    title: 'Listing Hanya Memiliki 1 Foto Statis Tanpa Video Semprotan',
    problem: 'Listing hanya memiliki 1 foto botol tanpa visualisasi kehalusan partikel semprotan mist, menyebabkan skor kelengkapan informasi tertahan di angka 6 dari 9.',
    suggestion: 'Unggah video singkat 10 detik yang memperlihatkan kehalusan semprotan mist mikro dan foto proporsi ukuran botol saat dibawa di dalam tas.',
    impact: 'Menaikkan skor kelengkapan menjadi 9/9 dan meningkatkan rasio klik tayangan sebesar +18%.',
    actionLabel: 'Unggah Video Semprotan'
  },
  'LIST-014': {
    category: 'Promosi Cross-Selling',
    severity: 'info',
    badge: 'Tambahan Beli (Add-On)',
    title: 'Potensi Penjualan Tambahan (Cross-Selling) Belum Dioptimalkan',
    problem: 'Sebagian besar konsumen enggan membayar ongkos kirim tersendiri untuk produk lip serum seharga Rp 38.000 tanpa adanya paket pelengkap.',
    suggestion: 'Aktifkan promo "Tambahan Beli" (Add-on Deal) dengan diskon spesial 15% setiap kali pembeli membeli produk pelembap atau pembersih wajah.',
    impact: 'Menambah penjualan cross-selling sebesar 80+ unit per bulan dengan biaya akuisisi nol.',
    actionLabel: 'Atur Promo Tambahan Beli'
  },
  'LIST-015': {
    category: 'Edukasi Pemakaian',
    severity: 'info',
    badge: 'Panduan Cara Emulsi',
    title: 'Beberapa Pembeli Mengeluhkan Wajah Berminyak Akibat Salah Bilas',
    problem: 'Terdapat 4 komplain pembeli yang merasa wajahnya berminyak karena membilas cleansing oil langsung dengan air dingin tanpa proses emulsi air hangat terlebih dahulu.',
    suggestion: 'Tambahkan infografis 3 langkah mudah emulsi ("Oles pada kulit kering -> Usap sedikit air hangat hingga berubah putih susu -> Bilas bersih") pada galeri foto.',
    impact: 'Mencegah ulasan negatif dan mengangkat kepuasan pelanggan menjadi bintang 5 sempurna.',
    actionLabel: 'Unggah Infografis Emulsi'
  },
  'LIST-016': {
    category: 'Bundling Produk',
    severity: 'info',
    badge: 'Bundling Kapas Organik',
    title: 'Calon Pembeli Botol 400ml Membutuhkan Paket Kapas Khusus Sensitif',
    problem: 'Sebagian besar pembeli micellar water ukuran besar menanyakan apakah tersedia rekomendasi kapas lembut yang tidak menimbulkan iritasi kulit.',
    suggestion: 'Buat paket kombo hemat "Micellar Water 400ml + 60 Lembar Kapas Organik Bebas Klorin" dengan selisih harga ekonomis hanya Rp 6.000.',
    impact: 'Meningkatkan nilai rata-rata pesanan (basket size) dan membedakan produk dari kompetitor lain.',
    actionLabel: 'Buat Paket Bundling Kapas'
  },
  'LIST-017': {
    category: 'Kemasan Jar',
    severity: 'warning',
    badge: 'Inner Lid & Spatula',
    title: 'Masker Rentan Mengering dalam 1 Bulan Jika Segel Terbuka',
    problem: '3 ulasan pembeli mencatat masker lempung (clay) mengeras sebelum habis dipakai karena kemasan belum dilengkapi tutup sekat dalam (inner lid) kedap udara.',
    suggestion: 'Sertakan tutup sekat dalam (inner lid) kedap udara dan spatula mini higienis dalam paket kemasan baru.',
    impact: 'Menaikkan retensi pembelian ulang (repeat order) dari pembeli setia hingga +30%.',
    actionLabel: 'Perbarui Standar Kemasan Jar'
  },
  'LIST-018': {
    category: 'Opsi Varian',
    severity: 'info',
    badge: 'Tambah Varian Satuan',
    title: 'Calon Pembeli Baru Ragu Membeli Paket 5 Lembar Sekaligus',
    problem: 'Paket saat ini hanya tersedia isi 5 lembar (Rp 65.000). Calon pembeli baru ragu membeli paket banyak tanpa mencoba kecocokan essence masker pada kulitnya terlebih dahulu.',
    suggestion: 'Sediakan opsi varian satuan 1 lembar (Rp 14.000) pada listing yang sama sebagai pintu masuk bagi pembeli baru.',
    impact: 'Mengonversi keraguan pembeli pemula menjadi pesanan nyata dan memperbesar volume penjualan.',
    actionLabel: 'Tambah Opsi Eceran 1 Lembar'
  },
  'LIST-019': {
    category: 'Edukasi Formula',
    severity: 'info',
    badge: 'Edukasi Aroma Belerang',
    title: 'Aroma Alami Belerang Perlu Diberi Keterangan Transparan',
    problem: 'Beberapa ulasan bintang 3 mengomentari aroma khas belerang karena mengira produk mengalami kerusakan formula saat disimpan di gudang.',
    suggestion: 'Tambahkan penegasan edukatif pada deskripsi: "Formula belerang murni tanpa pewangi sintetis untuk efektivitas maksimal mengeringkan jerawat aktif dalam 24 jam".',
    impact: 'Mencegah ekspektasi keliru pembeli dan memperkuat citra formula dermatologis alami.',
    actionLabel: 'Perjelas Klaim Alami'
  },
  'LIST-020': {
    category: 'Keaslian & Box',
    severity: 'warning',
    badge: 'Bukti Keaslian Giok',
    title: 'Perlu Bukti Keaslian Batu Giok Alami dan Kotak Hardbox Busa',
    problem: 'Banyaknya tiruan berbahan resin plastik murah di marketplace membuat pembeli meragukan keaslian batu giok dingin alami.',
    suggestion: 'Unggah foto sertifikat uji laboratorium keaslian batu giok dan foto kemasan kotak busa keras (hardbox) pelindung anti-pecah.',
    impact: 'Mendukung justifikasi harga jual premium Rp 85.000 dan menaikkan konversi belanja.',
    actionLabel: 'Unggah Sertifikat Keaslian'
  },
  'LIST-021': {
    category: 'Penjualan Berulang',
    severity: 'info',
    badge: 'Paket Isi 3 Hemat',
    title: 'Jarang Pembelian Ulang Karena Pembeli Lupa Mengganti Spons Rutin',
    problem: 'Pembeli cenderung memakai 1 spons lebih dari 6 bulan tanpa menyadari risiko penumpukan bakteri penyebab jerawat.',
    suggestion: 'Sediakan varian paket isi 3 spons warna pastel (Rp 45.000) lengkap dengan pouch jaring pengering higienis dan kartu pengingat ganti spons tiap 60 hari.',
    impact: 'Menaikkan frekuensi pembelian berulang tahunan dari pelanggan yang sama.',
    actionLabel: 'Buat Paket Hemat 3 Spons'
  },
  'LIST-022': {
    category: 'Video Demonstrasi',
    severity: 'warning',
    badge: 'Video Bukti Re-Apply',
    title: 'Belum Ada Video Aplikasi Ulang di Atas Riasan Wajah',
    problem: 'Pencarian sunscreen stick didorong oleh klaim tidak merusak makeup saat dioles ulang, namun listing belum memuat video pembuktian anti-geser ini.',
    suggestion: 'Tambahkan video demonstrasi 15 detik yang memperlihatkan stik dioleskan di atas bedak dan foundation tanpa ada riasan yang menempel (no smudging).',
    impact: 'Meningkatkan rasio klik ke pembelian sebesar +45% pada kelompok pembeli wanita karir.',
    actionLabel: 'Unggah Video Demo Re-Apply'
  },
  'LIST-023': {
    category: 'Stok & Informasi',
    severity: 'danger',
    badge: 'Stok Sisa 4 & Atribut',
    title: 'Stok Tersisa 4 Pot dan Skor Kelengkapan Informasi Rendah (5/9)',
    problem: 'Stok gudang tersisa 4 unit dan deskripsi produk belum memuat nomor registrasi BPOM serta infografis teknik pijatan leher arah ke atas.',
    suggestion: 'Tambahkan pasokan minimal 30 unit ke sistem dan lengkapi atribut nomor BPOM serta panduan pijat leher untuk mengangkat skor listing.',
    impact: 'Mencegah status stok habis dan menaikkan skor kelengkapan katalog menjadi 9/9.',
    actionLabel: 'Restock & Lengkapi Data'
  },
  'LIST-024': {
    category: 'Bukti Sosial',
    severity: 'info',
    badge: 'Dorong Ulasan Awal',
    title: 'Listing Baru dengan Tayangan Minim dan Belum Ada Bukti Sosial',
    problem: 'Produk baru memiliki 180 tayangan dan 1 ulasan. Calon pembeli ragu melakukan checkout tanpa melihat ulasan bergambar dari pembeli terdahulu.',
    suggestion: 'Aktifkan kampanye iklan pencarian marketplace budget Rp 15.000/hari dan berikan cashback koin toko untuk 10 ulasan bergambar pertama.',
    impact: 'Mempercepat listing melewati fase awal (cold start) dan mengumpulkan 10 ulasan organik terverifikasi.',
    actionLabel: 'Pasang Promo Ulasan Awal'
  },
  'LIST-025': {
    category: 'Varian Tradisional',
    severity: 'info',
    badge: 'Varian Rempah Tradisional',
    title: 'Tingginya Permintaan untuk Varian Rempah Kunyit & Cendana',
    problem: '7 ulasan pembeli menyarankan penambahan varian lulur kunyit asam dan kayu cendana untuk melengkapi varian bengkoang yang ada saat ini.',
    suggestion: 'Rencanakan peluncuran 2 varian aroma rempah tradisional baru pada listing yang sama untuk memperluas pilihan bagi pecinta lulur tradisional.',
    impact: 'Menaikkan nilai rata-rata belanja pembeli setia hingga +20%.',
    actionLabel: 'Rencanakan Varian Baru'
  }
};

export function getIssueForListing(listingId) {
  return PRODUCT_ISSUES_MAP[listingId] || null;
}

const rawInitialListings = [
  {
    id: 'LIST-001',
    name: 'Serum Niacinamide 10% 20ml Tekstur Ringan',
    category: 'Skincare Wajah',
    impressions: 14200,
    clicks: 1120,
    addToCart: 280,
    purchases: 112,
    sparkline: [65, 80, 95, 112],
    stockStatus: 'Tersedia',
    stockCount: 145,
    completenessScore: 8,
    hasSuggestion: true,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 78,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 12500, clicks: 890, cart: 190, purchases: 72 },
    weakestStep: {
      step: 'Klik ke Keranjang',
      cause: 'harga',
      diagnosis: 'Tingkat klik listing ini baik, tetapi konversi ke keranjang sedikit di bawah rata-rata listing sejenis. Pembeli biasanya menimbang kesesuaian harga atau informasi klaim.'
    },
    pricePosition: {
      sellerPrice: 89000,
      median: 84000,
      q1: 72000,
      q3: 95000,
      comparableCount: 28,
      comparables: [
        { id: 'c1', name: 'Serum Pencerah Niacinamide 20ml', price: 82000 },
        { id: 'c2', name: 'Niacinamide Serum Tekstur Cair 20ml', price: 85000 },
        { id: 'c3', name: 'Serum Wajah B3 Glow 20ml', price: 89000 },
        { id: 'c4', name: 'Serum Vitamin B3 Murni 25ml', price: 92000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'serum niacinamide untuk bekas jerawat', volume: '18.400 / bln', status: null },
      { id: 't2', term: 'serum pencerah wajah tidak lengket', volume: '9.200 / bln', status: null },
      { id: 't3', term: 'serum b3 kulit sensitif', volume: '4.800 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Tekstur cepat meresap dan tidak lengket', count: 32, owner: 'produk' },
      { theme: 'Bekas jerawat mulai memudar dalam 2 minggu', count: 19, owner: 'produk' },
      { theme: 'Kemasan botol pipet rapi dan aman', count: 14, owner: 'kemasan' },
      { theme: 'Pengiriman instan sampai di hari yang sama', count: 8, owner: 'pengiriman' }
    ],
    beforeAfter: {
      dates: '2 minggu terakhir vs 2 minggu sebelum perbaikan foto',
      beforeFunnel: { impressions: 11200, clicks: 760, cart: 180, purchases: 68 },
      afterFunnel: { impressions: 14200, clicks: 1120, cart: 280, purchases: 112 },
      comparableChange: '+14% tayangan pada kelompok listing sejenis di periode yang sama'
    }
  },
  {
    id: 'LIST-002',
    name: 'Sunscreen Gel SPF 50 PA++++ Kulit Berminyak 50ml',
    category: 'Skincare Wajah',
    impressions: 28400,
    clicks: 1980,
    addToCart: 410,
    purchases: 188,
    sparkline: [120, 145, 170, 188],
    stockStatus: 'Tersedia',
    stockCount: 88,
    completenessScore: 9,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 112,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: true }
    ],
    funnelBenchmark: { impressions: 22000, clicks: 1540, cart: 320, purchases: 140 },
    weakestStep: {
      step: 'Stok',
      cause: 'stok',
      diagnosis: 'Performa penjualan sangat kuat. Tingkat stok perlu dipantau agar tidak kehabisan dalam 10 hari ke depan.'
    },
    pricePosition: {
      sellerPrice: 75000,
      median: 79000,
      q1: 68000,
      q3: 88000,
      comparableCount: 42,
      comparables: [
        { id: 'c1', name: 'Tabir Surya Gel Kulit Berminyak 50ml', price: 74000 },
        { id: 'c2', name: 'Sunscreen Matte Finish SPF 50 50ml', price: 79000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'sunscreen gel tidak perih di mata', volume: '14.100 / bln', status: null },
      { id: 't2', term: 'sunscreen spf 50 bebas whitecast', volume: '11.000 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Hasil akhir matte dan bebas minyak', count: 48, owner: 'produk' },
      { theme: 'Tidak meninggalkan bekas putih di wajah', count: 36, owner: 'produk' },
      { theme: 'Kemasan tube praktis dibawa bepergian', count: 18, owner: 'kemasan' }
    ],
    beforeAfter: {
      dates: '3 minggu terakhir',
      beforeFunnel: { impressions: 21000, clicks: 1400, cart: 290, purchases: 130 },
      afterFunnel: { impressions: 28400, clicks: 1980, cart: 410, purchases: 188 },
      comparableChange: '+18% konversi setelah penambahan informasi hasil uji laboratorium'
    }
  },
  {
    id: 'LIST-003',
    name: 'Toner Eksfoliasi AHA BHA PHA 100ml Lembut',
    category: 'Skincare Wajah',
    impressions: 9800,
    clicks: 430,
    addToCart: 72,
    purchases: 26,
    sparkline: [35, 30, 28, 26],
    stockStatus: 'Tersedia',
    stockCount: 62,
    completenessScore: 6,
    hasSuggestion: true,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 34,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: false },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: false },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: false },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: true }
    ],
    funnelBenchmark: { impressions: 14000, clicks: 880, cart: 160, purchases: 64 },
    weakestStep: {
      step: 'Tayangan ke Klik',
      cause: 'judul/gambar',
      diagnosis: 'Tayangan pencarian ada, namun tingkat klik rendah dibandingkan listing sejenis. Pembeli mencari informasi persentase kandungan pada judul atau gambar utama.'
    },
    pricePosition: {
      sellerPrice: 115000,
      median: 108000,
      q1: 95000,
      q3: 122000,
      comparableCount: 19,
      comparables: [
        { id: 'c1', name: 'Toner Eksfoliasi Harian AHA BHA 100ml', price: 105000 },
        { id: 'c2', name: 'Gentle Exfoliating Toner 100ml', price: 110000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'toner eksfoliasi untuk pemula', volume: '16.200 / bln', status: null },
      { id: 't2', term: 'toner komedo pori bersih', volume: '10.500 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Lembut untuk kulit sensitif pemula', count: 14, owner: 'produk' },
      { theme: 'Perlu petunjuk pemakaian berapa kali seminggu', count: 9, owner: 'listing' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-004',
    name: 'Sabun Cuci Muka Ceramide Gentle Cleanser 100ml',
    category: 'Skincare Wajah',
    impressions: 18900,
    clicks: 1240,
    addToCart: 210,
    purchases: 86,
    sparkline: [70, 78, 82, 86],
    stockStatus: 'Menipis',
    stockCount: 6,
    completenessScore: 7,
    hasSuggestion: true,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 52,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: false },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 16000, clicks: 1100, cart: 190, purchases: 78 },
    weakestStep: {
      step: 'Stok Habis Segera',
      cause: 'stok',
      diagnosis: 'Stok tersisa 6 unit. Tingkat pembelian stabil dan berisiko habis dalam 2 hari jika tidak diperbarui.'
    },
    pricePosition: {
      sellerPrice: 62000,
      median: 65000,
      q1: 58000,
      q3: 72000,
      comparableCount: 34,
      comparables: [
        { id: 'c1', name: 'Pembersih Wajah Ceramide 100ml', price: 63000 },
        { id: 'c2', name: 'Gentle Facial Wash Kulit Kering 100ml', price: 66000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'facial wash low ph kulit sensitif', volume: '22.000 / bln', status: null },
      { id: 't2', term: 'sabun muka tidak bikin ketarik', volume: '13.400 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Busa lembut tidak membuat kulit kering', count: 24, owner: 'produk' },
      { theme: 'Stok sering kosong saat ingin pesan ulang', count: 11, owner: 'stok' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-005',
    name: 'Moisturizer Gel Pencerah Kulit Kusam 30g',
    category: 'Skincare Wajah',
    impressions: 21300,
    clicks: 1420,
    addToCart: 310,
    purchases: 132,
    sparkline: [95, 110, 120, 132],
    stockStatus: 'Tersedia',
    stockCount: 120,
    completenessScore: 8,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 64,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 19500, clicks: 1280, cart: 260, purchases: 105 },
    weakestStep: {
      step: 'Stabil',
      cause: 'ulasan',
      diagnosis: 'Performa funnel secara umum seimbang dan melampaui kelompok pembanding.'
    },
    pricePosition: {
      sellerPrice: 85000,
      median: 88000,
      q1: 79000,
      q3: 99000,
      comparableCount: 31,
      comparables: [
        { id: 'c1', name: 'Pelembap Wajah Gel Pencerah 30g', price: 86000 },
        { id: 'c2', name: 'Gel Moisturizer Vitamin C 30g', price: 89000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'moisturizer gel dingin kulit kusam', volume: '11.800 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Sensasi dingin saat diaplikasikan', count: 28, owner: 'produk' },
      { theme: 'Kulit tampak lebih segar di pagi hari', count: 20, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-006',
    name: 'Eye Cream Peptide Anti Kerut Kantung Mata 15ml',
    category: 'Skincare Wajah',
    impressions: 4200,
    clicks: 160,
    addToCart: 22,
    purchases: 7,
    sparkline: [9, 8, 7, 7],
    stockStatus: 'Tersedia',
    stockCount: 40,
    completenessScore: 5,
    hasSuggestion: true,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 12,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: false },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: false },
      { id: 6, label: 'Bahan utama', complete: false },
      { id: 7, label: 'Cara pakai', complete: false },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 8400, clicks: 420, cart: 68, purchases: 24 },
    weakestStep: {
      step: 'Tayangan ke Klik',
      cause: 'judul/gambar',
      diagnosis: 'Hanya 5 dari 9 atribut dasar terisi. Kelengkapan informasi yang biasa dicari pembeli belum memadai.'
    },
    pricePosition: {
      sellerPrice: 98000,
      median: 95000,
      q1: 82000,
      q3: 115000,
      comparableCount: 16,
      comparables: [
        { id: 'c1', name: 'Krim Mata Peptide Aplikator Dingin 15ml', price: 95000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'krim mata untuk mata panda', volume: '24.500 / bln', status: null },
      { id: 't2', term: 'eye cream aplikator metal dingin', volume: '8.200 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Tekstur lembut tidak bikin perih', count: 6, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-007',
    name: 'Body Lotion Gluta Brightening Wangi Mewah 250ml',
    category: 'Perawatan Tubuh',
    impressions: 16800,
    clicks: 1050,
    addToCart: 220,
    purchases: 94,
    sparkline: [80, 85, 90, 94],
    stockStatus: 'Tersedia',
    stockCount: 95,
    completenessScore: 8,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 45,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 15000, clicks: 920, cart: 180, purchases: 75 },
    weakestStep: {
      step: 'Stabil',
      cause: 'pengiriman',
      diagnosis: 'Konversi penjualan sejalan dengan tren pasar di sub-kategori perawatan tubuh.'
    },
    pricePosition: {
      sellerPrice: 68000,
      median: 65000,
      q1: 55000,
      q3: 78000,
      comparableCount: 38,
      comparables: [
        { id: 'c1', name: 'Lotion Pencerah Gluta Wangi Tahan Lama 250ml', price: 65000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'body lotion wangi tahan seharian', volume: '19.800 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Aroma wangi tahan lama seharian', count: 26, owner: 'produk' },
      { theme: 'Cepat meresap saat dipakai beraktivitas', count: 18, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-008',
    name: 'Scrub Badan Kopi Organik Pengangkat Sel Kulit Mati 200g',
    category: 'Perawatan Tubuh',
    impressions: 7400,
    clicks: 390,
    addToCart: 64,
    purchases: 22,
    sparkline: [28, 25, 24, 22],
    stockStatus: 'Tersedia',
    stockCount: 35,
    completenessScore: 7,
    hasSuggestion: true,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 22,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: false },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 9200, clicks: 540, cart: 98, purchases: 41 },
    weakestStep: {
      step: 'Tayangan ke Klik',
      cause: 'judul/gambar',
      diagnosis: 'Deskripsi butiran scrub belum dijelaskan pada foto utama. Pembeli mencari scrub yang tidak melukai kulit.'
    },
    pricePosition: {
      sellerPrice: 48000,
      median: 45000,
      q1: 39000,
      q3: 56000,
      comparableCount: 20,
      comparables: [
        { id: 'c1', name: 'Lulur Kopi Alami 200g', price: 44000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'body scrub kopi untuk selulit', volume: '8.900 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Butiran scrub halus dan wangi kopi asli', count: 12, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-009',
    name: 'Minyak Rambut Rosemary Penumbuh Rambut 50ml',
    category: 'Perawatan Rambut',
    impressions: 22400,
    clicks: 1680,
    addToCart: 340,
    purchases: 148,
    sparkline: [95, 115, 130, 148],
    stockStatus: 'Tersedia',
    stockCount: 75,
    completenessScore: 8,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 89,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 18000, clicks: 1200, cart: 240, purchases: 98 },
    weakestStep: {
      step: 'Stabil',
      cause: 'ulasan',
      diagnosis: 'Pertumbuhan penjualan melampaui kelompok pembanding didorong oleh tren pencarian hair oil herbal.'
    },
    pricePosition: {
      sellerPrice: 85000,
      median: 89000,
      q1: 75000,
      q3: 99000,
      comparableCount: 25,
      comparables: [
        { id: 'c1', name: 'Rosemary Hair Growth Oil 50ml', price: 89000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'hair oil rosemary untuk rambut rontok', volume: '31.000 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Anak rambut mulai tumbuh setelah sebulan', count: 38, owner: 'produk' },
      { theme: 'Aroma herbal segar dan mudah dibilas', count: 22, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-010',
    name: 'Shampoo Anti Ketombe Tea Tree 250ml Bebas Sulfat',
    category: 'Perawatan Rambut',
    impressions: 11200,
    clicks: 680,
    addToCart: 110,
    purchases: 38,
    sparkline: [45, 42, 40, 38],
    stockStatus: 'Habis',
    stockCount: 0,
    completenessScore: 8,
    hasSuggestion: true,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 31,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 13000, clicks: 810, cart: 150, purchases: 58 },
    weakestStep: {
      step: 'Stok Habis',
      cause: 'stok',
      diagnosis: 'Stok habis menyebabkan penurunan drastis pada tayangan pencarian sejak 4 hari lalu.'
    },
    pricePosition: {
      sellerPrice: 79000,
      median: 75000,
      q1: 65000,
      q3: 85000,
      comparableCount: 22,
      comparables: [
        { id: 'c1', name: 'Sampo Tea Tree Bebas Sulfat 250ml', price: 75000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'shampoo ketombe kulit kepala gatal', volume: '17.200 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Gatal kulit kepala langsung berkurang', count: 18, owner: 'produk' },
      { theme: 'Pengemasan tutup botol bocor sedikit saat pengiriman', count: 5, owner: 'kemasan' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-011',
    name: 'Hair Mask Keratin Perawatan Rusak Kering 200ml',
    category: 'Perawatan Rambut',
    impressions: 8900,
    clicks: 510,
    addToCart: 85,
    purchases: 32,
    sparkline: [25, 28, 30, 32],
    stockStatus: 'Tersedia',
    stockCount: 44,
    completenessScore: 7,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 28,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: false },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 9500, clicks: 580, cart: 92, purchases: 36 },
    weakestStep: {
      step: 'Stabil',
      cause: 'ulasan',
      diagnosis: 'Tingkat konversi sebanding dengan listing perawatan rambut sejenis.'
    },
    pricePosition: {
      sellerPrice: 62000,
      median: 65000,
      q1: 54000,
      q3: 75000,
      comparableCount: 19,
      comparables: [
        { id: 'c1', name: 'Masker Rambut Keratin Halus 200ml', price: 65000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'hair mask untuk rambut bercabang', volume: '12.300 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Rambut lebih halus dan mudah disisir', count: 16, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-012',
    name: 'Parfum Eau de Parfum Vanilla Woody Tahan 8 Jam 50ml',
    category: 'Wewangian',
    impressions: 19800,
    clicks: 1450,
    addToCart: 280,
    purchases: 110,
    sparkline: [85, 95, 102, 110],
    stockStatus: 'Tersedia',
    stockCount: 60,
    completenessScore: 9,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 72,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: true }
    ],
    funnelBenchmark: { impressions: 16500, clicks: 1150, cart: 210, purchases: 82 },
    weakestStep: {
      step: 'Stabil',
      cause: 'ulasan',
      diagnosis: 'Performa penjualan sangat baik pada kategori wewangian.'
    },
    pricePosition: {
      sellerPrice: 129000,
      median: 135000,
      q1: 110000,
      q3: 155000,
      comparableCount: 26,
      comparables: [
        { id: 'c1', name: 'EDP Aroma Vanilla Warm 50ml', price: 135000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'parfum vanilla mewah tidak eneg', volume: '27.400 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Aroma manis hangat dan tidak menusuk hidung', count: 34, owner: 'produk' },
      { theme: 'Tahan hingga 7 jam di dalam ruangan ber-AC', count: 24, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-013',
    name: 'Body Mist Bunga Melati Segar 100ml Wangi Lembut',
    category: 'Wewangian',
    impressions: 6100,
    clicks: 280,
    addToCart: 38,
    purchases: 14,
    sparkline: [16, 15, 14, 14],
    stockStatus: 'Tersedia',
    stockCount: 52,
    completenessScore: 6,
    hasSuggestion: true,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 16,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: false },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: false },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 8200, clicks: 460, cart: 75, purchases: 29 },
    weakestStep: {
      step: 'Tayangan ke Klik',
      cause: 'judul/gambar',
      diagnosis: 'Perlu deskripsi aroma yang lebih rinci pada catatan atas, tengah, dan dasar di foto kedua.'
    },
    pricePosition: {
      sellerPrice: 38000,
      median: 42000,
      q1: 34000,
      q3: 49000,
      comparableCount: 18,
      comparables: [
        { id: 'c1', name: 'Cologne Melati Segar Harian 100ml', price: 40000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'body mist wangi melati alami', volume: '6.400 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Segar dipakai sehabis mandi sore', count: 8, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-014',
    name: 'Lip Serum Pelembap Bibir Kering Pecah-Pecah 5ml',
    category: 'Skincare Wajah',
    impressions: 13200,
    clicks: 860,
    addToCart: 165,
    purchases: 62,
    sparkline: [50, 56, 58, 62],
    stockStatus: 'Tersedia',
    stockCount: 82,
    completenessScore: 8,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 38,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 12000, clicks: 750, cart: 140, purchases: 52 },
    weakestStep: {
      step: 'Stabil',
      cause: 'ulasan',
      diagnosis: 'Tingkat klik dan pembelian berada di atas rata-rata listing pembanding.'
    },
    pricePosition: {
      sellerPrice: 42000,
      median: 45000,
      q1: 38000,
      q3: 52000,
      comparableCount: 24,
      comparables: [
        { id: 'c1', name: 'Serum Bibir Tinted Pelembap 5ml', price: 45000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'lip serum berubah warna alami', volume: '14.800 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Bibir tidak pecah lagi saat pakai lipstik', count: 18, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-015',
    name: 'Cleansing Oil Pembersih Makeup Waterproof 120ml',
    category: 'Skincare Wajah',
    impressions: 8100,
    clicks: 490,
    addToCart: 88,
    purchases: 34,
    sparkline: [28, 30, 32, 34],
    stockStatus: 'Tersedia',
    stockCount: 46,
    completenessScore: 7,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 29,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: false },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 8500, clicks: 520, cart: 95, purchases: 36 },
    weakestStep: {
      step: 'Stabil',
      cause: 'harga',
      diagnosis: 'Performa funnel stabil dan seimbang dengan pembanding.'
    },
    pricePosition: {
      sellerPrice: 95000,
      median: 92000,
      q1: 82000,
      q3: 105000,
      comparableCount: 17,
      comparables: [
        { id: 'c1', name: 'Minyak Pembersih Riasan Wajah 120ml', price: 92000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'cleansing oil emulsifikasi cepat bilas', volume: '8.400 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Maskara waterproof bersih tanpa sisa', count: 15, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-016',
    name: 'Micellar Water Kulit Sensitif Bebas Alkohol 400ml',
    category: 'Skincare Wajah',
    impressions: 17400,
    clicks: 1180,
    addToCart: 205,
    purchases: 82,
    sparkline: [75, 78, 80, 82],
    stockStatus: 'Tersedia',
    stockCount: 110,
    completenessScore: 8,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 54,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 15500, clicks: 1020, cart: 175, purchases: 70 },
    weakestStep: {
      step: 'Stabil',
      cause: 'ulasan',
      diagnosis: 'Volume penjualan stabil didukung oleh ukuran 400ml yang ekonomis.'
    },
    pricePosition: {
      sellerPrice: 58000,
      median: 55000,
      q1: 49000,
      q3: 65000,
      comparableCount: 29,
      comparables: [
        { id: 'c1', name: 'Air Pembersih Kulit Kering 400ml', price: 54000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'micellar water botol besar hemat', volume: '16.100 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Tidak perih di mata dan tidak lengket', count: 28, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-017',
    name: 'Clay Mask Pori Charcoal Pengurang Minyak Berlebih 50g',
    category: 'Skincare Wajah',
    impressions: 6500,
    clicks: 340,
    addToCart: 48,
    purchases: 18,
    sparkline: [22, 20, 19, 18],
    stockStatus: 'Tersedia',
    stockCount: 38,
    completenessScore: 7,
    hasSuggestion: true,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 20,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: false },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 8000, clicks: 480, cart: 78, purchases: 32 },
    weakestStep: {
      step: 'Keranjang ke Pembelian',
      cause: 'harga',
      diagnosis: 'Sebagian calon pembeli batal membeli pada langkah akhir. Informasi promo paket atau ulasan cara bilas dapat membantu.'
    },
    pricePosition: {
      sellerPrice: 69000,
      median: 64000,
      q1: 56000,
      q3: 75000,
      comparableCount: 19,
      comparables: [
        { id: 'c1', name: 'Masker Lumpur Arang Pori 50g', price: 63000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'clay mask tidak bikin kulit ketarik', volume: '9.600 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Minyak di hidung berkurang setelah pakai', count: 11, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-018',
    name: 'Sheet Mask Hyaluronic Acid Lembap Intensif 5 Lembar',
    category: 'Skincare Wajah',
    impressions: 11500,
    clicks: 720,
    addToCart: 130,
    purchases: 54,
    sparkline: [48, 50, 52, 54],
    stockStatus: 'Tersedia',
    stockCount: 70,
    completenessScore: 8,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 36,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 10800, clicks: 680, cart: 115, purchases: 47 },
    weakestStep: {
      step: 'Stabil',
      cause: 'ulasan',
      diagnosis: 'Performa penjualan stabil dan sesuai kategori.'
    },
    pricePosition: {
      sellerPrice: 45000,
      median: 48000,
      q1: 39000,
      q3: 55000,
      comparableCount: 23,
      comparables: [
        { id: 'c1', name: 'Paket Masker Lembar Hyaluron 5 Pcs', price: 47000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'sheet mask essence melimpah', volume: '11.400 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Essence sangat banyak bisa untuk leher', count: 20, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-019',
    name: 'Spot Treatment Jerawat Belerang Cepat Kering 15g',
    category: 'Skincare Wajah',
    impressions: 15400,
    clicks: 990,
    addToCart: 180,
    purchases: 74,
    sparkline: [62, 68, 71, 74],
    stockStatus: 'Tersedia',
    stockCount: 50,
    completenessScore: 8,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 42,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 14000, clicks: 880, cart: 160, purchases: 65 },
    weakestStep: {
      step: 'Stabil',
      cause: 'ulasan',
      diagnosis: 'Hasil konversi baik dan seimbang dengan pembanding.'
    },
    pricePosition: {
      sellerPrice: 52000,
      median: 54000,
      q1: 46000,
      q3: 62000,
      comparableCount: 21,
      comparables: [
        { id: 'c1', name: 'Obat Totol Jerawat Belerang 15g', price: 53000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'totol jerawat matang cepat kempes', volume: '18.600 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Jerawat merah reda dalam semalam', count: 24, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-020',
    name: 'Alat Pijat Wajah Gua Sha Giok Hijau Alami',
    category: 'Peralatan Kecantikan',
    impressions: 5400,
    clicks: 260,
    addToCart: 35,
    purchases: 12,
    sparkline: [15, 14, 13, 12],
    stockStatus: 'Tersedia',
    stockCount: 28,
    completenessScore: 7,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 15,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: false },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: false },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: true }
    ],
    funnelBenchmark: { impressions: 6200, clicks: 310, cart: 44, purchases: 16 },
    weakestStep: {
      step: 'Stabil',
      cause: 'pengiriman',
      diagnosis: 'Penjualan stabil pada kategori peralatan pijat wajah.'
    },
    pricePosition: {
      sellerPrice: 35000,
      median: 38000,
      q1: 29000,
      q3: 45000,
      comparableCount: 15,
      comparables: [
        { id: 'c1', name: 'Gua Sha Batu Giok Asli Wajah', price: 36000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'gua sha giok dingin anti sembap', volume: '7.800 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Batu dingin dan halus tidak ada goresan', count: 9, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-021',
    name: 'Spons Alas Bedak Teardrop Lembut Mengembang Basah',
    category: 'Peralatan Kecantikan',
    impressions: 7200,
    clicks: 390,
    addToCart: 58,
    purchases: 22,
    sparkline: [20, 21, 21, 22],
    stockStatus: 'Tersedia',
    stockCount: 65,
    completenessScore: 8,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 19,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 7500, clicks: 420, cart: 65, purchases: 25 },
    weakestStep: {
      step: 'Stabil',
      cause: 'ulasan',
      diagnosis: 'Konversi normal pada aksesori riasan wajah.'
    },
    pricePosition: {
      sellerPrice: 22000,
      median: 24000,
      q1: 18000,
      q3: 29000,
      comparableCount: 30,
      comparables: [
        { id: 'c1', name: 'Beauty Blender Spons Makeup Empuk', price: 23000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'spons makeup tidak menyerap produk', volume: '9.100 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Mengembang dua kali lipat saat dibasahi', count: 11, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-022',
    name: 'Sunscreen Stick Matte Praktis Tanpa Lengket 15g',
    category: 'Skincare Wajah',
    impressions: 9200,
    clicks: 610,
    addToCart: 105,
    purchases: 45,
    sparkline: [32, 38, 42, 45],
    stockStatus: 'Tersedia',
    stockCount: 32,
    completenessScore: 7,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 27,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: true },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: false },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 9800, clicks: 640, cart: 110, purchases: 48 },
    weakestStep: {
      step: 'Stabil',
      cause: 'harga',
      diagnosis: 'Format stik semakin diminati pembeli aktif luar ruangan.'
    },
    pricePosition: {
      sellerPrice: 88000,
      median: 92000,
      q1: 79000,
      q3: 105000,
      comparableCount: 14,
      comparables: [
        { id: 'c1', name: 'Tabir Surya Bentuk Stik 15g', price: 90000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'sunscreen stick praktis reapply di atas makeup', volume: '15.300 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Bisa reapply tanpa geser bedak', count: 16, owner: 'produk' }
    ],
    beforeAfter: null
  },
  {
    id: 'LIST-023',
    name: 'Krim Leher Kencang Kolagen Pelembap Garis Halus 40g',
    category: 'Skincare Wajah',
    impressions: 3100,
    clicks: 120,
    addToCart: 16,
    purchases: 4,
    sparkline: [5, 4, 4, 4],
    stockStatus: 'Menipis',
    stockCount: 4,
    completenessScore: 5,
    hasSuggestion: true,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 9,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: false },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: false },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: false },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: false },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 5200, clicks: 280, cart: 42, purchases: 15 },
    weakestStep: {
      step: 'Ulasan Belum Cukup',
      cause: 'ulasan',
      diagnosis: 'Ulasan masih di bawah 10 sehingga tema ulasan belum dapat diolah secara memadai.'
    },
    pricePosition: {
      sellerPrice: 94000,
      median: 89000,
      q1: 76000,
      q3: 102000,
      comparableCount: 11,
      comparables: [
        { id: 'c1', name: 'Krim Perawatan Kulit Leher 40g', price: 88000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'krim leher anti kerut kencang', volume: '6.700 / bln', status: null }
    ],
    reviewThemes: [], // Hidden because reviewCount < 10
    beforeAfter: null
  },
  {
    id: 'LIST-024',
    name: 'Deodorant Serum Pencerah Ketiak Niacinamide Roll On 50ml',
    category: 'Perawatan Tubuh',
    impressions: 110,
    clicks: 6,
    addToCart: 1,
    purchases: 0,
    sparkline: [0, 0, 0, 0],
    stockStatus: 'Tersedia',
    stockCount: 60,
    completenessScore: 4,
    hasSuggestion: false,
    lowTraffic: true, // Edge case: Low traffic listing
    zeroReviews: true, // Edge case: 0 reviews
    reviewCount: 0,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: false },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: false },
      { id: 6, label: 'Bahan utama', complete: false },
      { id: 7, label: 'Cara pakai', complete: false },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: false },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 12000, clicks: 780, cart: 140, purchases: 50 },
    weakestStep: {
      step: 'Data belum cukup',
      cause: 'judul/gambar',
      diagnosis: 'Data belum cukup untuk analisis konversi. Listing baru dibuat dan membutuhkan lebih banyak tayangan sebelum kesimpulan dapat diambil.'
    },
    pricePosition: {
      sellerPrice: 48000,
      median: 45000,
      q1: 39000,
      q3: 54000,
      comparableCount: 18,
      comparables: [
        { id: 'c1', name: 'Serum Deodorant Pencerah 50ml', price: 45000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'deodorant pencerah tidak meninggalkan noda kuning', volume: '14.200 / bln', status: null }
    ],
    reviewThemes: [], // 0 reviews
    beforeAfter: null
  },
  {
    id: 'LIST-025',
    name: 'Lulur Tradisional Mandi Rempah Jawa Bengkoang 150g',
    category: 'Perawatan Tubuh',
    impressions: 6400,
    clicks: 310,
    addToCart: 44,
    purchases: 15,
    sparkline: [18, 16, 16, 15],
    stockStatus: 'Tersedia',
    stockCount: 40,
    completenessScore: 7,
    hasSuggestion: false,
    lowTraffic: false,
    zeroReviews: false,
    reviewCount: 18,
    checklist: [
      { id: 1, label: 'Jenis produk', complete: true },
      { id: 2, label: 'Merek', complete: true },
      { id: 3, label: 'Ukuran', complete: true },
      { id: 4, label: 'Varian', complete: true },
      { id: 5, label: 'Jenis kulit atau kebutuhan', complete: false },
      { id: 6, label: 'Bahan utama', complete: true },
      { id: 7, label: 'Cara pakai', complete: true },
      { id: 8, label: 'Informasi kedaluwarsa atau batch', complete: true },
      { id: 9, label: 'Jumlah foto (minimal 3 foto)', complete: false }
    ],
    funnelBenchmark: { impressions: 7200, clicks: 390, cart: 60, purchases: 22 },
    weakestStep: {
      step: 'Stabil',
      cause: 'harga',
      diagnosis: 'Performa penjualan stabil di segmen lulur mandi tradisional.'
    },
    pricePosition: {
      sellerPrice: 28000,
      median: 27000,
      q1: 22000,
      q3: 32000,
      comparableCount: 22,
      comparables: [
        { id: 'c1', name: 'Lulur Mandi Pengantin Bengkoang 150g', price: 26000 }
      ]
    },
    suggestedSearchTerms: [
      { id: 't1', term: 'lulur rempah tradisional wangi pengantin', volume: '5.600 / bln', status: null }
    ],
    reviewThemes: [
      { theme: 'Wangi rempah alami menenangkan', count: 9, owner: 'produk' }
    ],
    beforeAfter: null
  }
];

export const initialListings = rawInitialListings.map((item) => {
  const issue = PRODUCT_ISSUES_MAP[item.id] || null;
  return {
    ...item,
    issue,
    hasSuggestion: Boolean(issue)
  };
});

export const initialOpportunities = [
  {
    id: 'OPP-001',
    productType: 'Sunscreen Gel Untuk Kulit Berminyak',
    searchVolume: '54.200 / bln',
    trend: 'Naik',
    trendCaution: null,
    gapCategory: 'Harga',
    gapType: 'Harga Menengah',
    gapDetail: 'Pilihan harga menengah sedikit (rentang Rp 70.000 - Rp 95.000)',
    activeListings: 18,
    demandPerListing: 3010,
    crowdingStatus: 'Terbuka',
    confidenceScore: 9,
    fitTag: 'Sangat cocok (kategori utama Anda)',
    evidence: 'Pencarian kata kunci tabir surya tekstur gel meningkat 28% dalam 30 hari terakhir. Sebagian besar listing yang ada terpusat pada harga di bawah Rp 40.000 atau di atas Rp 130.000, meninggalkan celah di rentang harga Rp 70.000 hingga Rp 95.000.',
    crowdingExplanation: 'Jumlah listing aktif masih 18 dengan rasio permintaan 3.010 per listing, menandakan persaingan masih sehat dan ruang masuk masih terbuka luas.'
  },
  {
    id: 'OPP-002',
    productType: 'Serum Azelaic Acid Pemudar Kemerahan Bekas Jerawat',
    searchVolume: '38.600 / bln',
    trend: 'Melonjak',
    trendCaution: 'Melonjak (hati-hati: lonjakan musiman)',
    gapCategory: 'Produk',
    gapType: 'Bebas Alkohol',
    gapDetail: 'Formula lembut bebas alkohol jarang tersedia di pasaran',
    activeListings: 14,
    demandPerListing: 2750,
    crowdingStatus: 'Terbuka',
    confidenceScore: 8,
    fitTag: 'Sangat cocok (kategori utama Anda)',
    evidence: 'Lonjakan minat dipicu pembahasan edukasi bahan aktif pereda kemerahan di media sosial. Terjadi kenaikan volume pencarian 85% dalam 4 minggu terakhir.',
    crowdingExplanation: 'Kategori baru mulai terbentuk. Walau lonjakan tergolong tinggi, penjual disarankan memvalidasi keberlanjutan permintaan jangka menengah.'
  },
  {
    id: 'OPP-003',
    productType: 'Deodorant Serum Tanpa Alkohol Dan Alumunium',
    searchVolume: '31.400 / bln',
    trend: 'Naik',
    trendCaution: null,
    gapCategory: 'Kemasan',
    gapType: 'Kemasan Refill',
    gapDetail: 'Belum banyak kemasan isi ulang (refill pouch ramah kantong)',
    activeListings: 22,
    demandPerListing: 1420,
    crowdingStatus: 'Terbuka',
    confidenceScore: 8,
    fitTag: 'Cocok (sesuai lini perawatan tubuh)',
    evidence: 'Pertumbuhan pencarian deodorant alami meningkat konsisten 14% setiap bulan selama 3 bulan berturut-turut. Konsumen mencari produk yang tidak meninggalkan noda pada pakaian.',
    crowdingExplanation: 'Tersedia 22 listing aktif dengan pertumbuhan pesanan yang stabil.'
  },
  {
    id: 'OPP-004',
    productType: 'Toner Pad Centella Asiatica Penenang Kulit',
    searchVolume: '44.800 / bln',
    trend: 'Naik',
    trendCaution: null,
    gapCategory: 'Kemasan',
    gapType: 'Size Travel',
    gapDetail: 'Kurang pilihan isi travel 30 lembar untuk bepergian',
    activeListings: 36,
    demandPerListing: 1240,
    crowdingStatus: 'Mulai ramai',
    confidenceScore: 7,
    fitTag: 'Sangat cocok (kategori utama Anda)',
    evidence: 'Format kapas toner basah siap pakai diminati konsumen praktis. Rata-rata listing yang ada hanya menjual kemasan isi 70 lembar.',
    crowdingExplanation: 'Jumlah penjual aktif bertambah dalam dua bulan terakhir. Diferensiasi pada kemasan praktis atau harga terjangkau sangat penting.'
  },
  {
    id: 'OPP-005',
    productType: 'Hair Oil Rosemary Penumbuh Rambut Rontok',
    searchVolume: '48.900 / bln',
    trend: 'Naik',
    trendCaution: null,
    gapCategory: 'Produk',
    gapType: 'Aroma Lembut',
    gapDetail: 'Pilihan aroma herbal lembut minim, mayoritas terlalu menyengat',
    activeListings: 29,
    demandPerListing: 1680,
    crowdingStatus: 'Mulai ramai',
    confidenceScore: 8,
    fitTag: 'Cocok (sesuai lini perawatan rambut)',
    evidence: 'Pencarian minyak rosemary untuk kulit kepala terus meningkat. Banyak ulasan pembeli mengeluhkan aroma minyak sejenis yang terlalu menyengat.',
    crowdingExplanation: 'Mulai ramai namun produk dengan klaim aroma lembut masih minim.'
  },
  {
    id: 'OPP-006',
    productType: 'Moisturizer Ceramide Kemasan Travel 15g',
    searchVolume: '26.100 / bln',
    trend: 'Stabil',
    trendCaution: null,
    gapCategory: 'Pengiriman',
    gapType: 'Stok Regional',
    gapDetail: 'Stok regional luar Pulau Jawa terbatas untuk pengiriman cepat',
    activeListings: 19,
    demandPerListing: 1370,
    crowdingStatus: 'Terbuka',
    confidenceScore: 7,
    fitTag: 'Sangat cocok (kategori utama Anda)',
    evidence: 'Permintaan ukuran kecil untuk bepergian atau uji coba pertama kali tinggi di wilayah Jawa Barat dan Sumatera Utara.',
    crowdingExplanation: 'Ketersediaan stok di gudang pengiriman dekat pembeli menjadi kunci persaingan.'
  },
  {
    id: 'OPP-007',
    productType: 'Cleansing Balm Pembersih Riasan Waterproof Praktis',
    searchVolume: '33.200 / bln',
    trend: 'Stabil',
    trendCaution: null,
    gapCategory: 'Kemasan',
    gapType: 'Kemasan Tube',
    gapDetail: 'Belum banyak kemasan tube higienis tanpa sendok spatula',
    activeListings: 41,
    demandPerListing: 810,
    crowdingStatus: 'Mulai ramai',
    confidenceScore: 7,
    fitTag: 'Sangat cocok (kategori utama Anda)',
    evidence: 'Mayoritas produk berupa wadah jar dengan spatula yang sering dinilai kurang praktis saat bepergian.',
    crowdingExplanation: 'Pasar telah memiliki beberapa pemain utama; celah terbuka pada format wadah tube atau stik.'
  },
  {
    id: 'OPP-008',
    productType: 'Parfum Padat Aroma Teh Putih Segar',
    searchVolume: '18.700 / bln',
    trend: 'Naik',
    trendCaution: null,
    gapCategory: 'Produk',
    gapType: 'Aroma Lokal',
    gapDetail: 'Pilihan aroma lokal masih sedikit di segmen parfum saku',
    activeListings: 12,
    demandPerListing: 1550,
    crowdingStatus: 'Terbuka',
    confidenceScore: 8,
    fitTag: 'Terkait kategori (wewangian)',
    evidence: 'Format parfum padat (solid perfume) mini disukai karena mudah dibawa di saku dan tidak mudah bocor.',
    crowdingExplanation: 'Hanya ada 12 listing aktif dengan ulasan positif yang konsisten.'
  },
  {
    id: 'OPP-009',
    productType: 'Body Lotion Ber-SPF 30 Tekstur Seringan Air',
    searchVolume: '51.300 / bln',
    trend: 'Melonjak',
    trendCaution: 'Melonjak (hati-hati: lonjakan musiman)',
    gapCategory: 'Produk',
    gapType: 'Tekstur Ringan',
    gapDetail: 'Tekstur lengket masih banyak dikeluhkan konsumen di cuaca terik',
    activeListings: 58,
    demandPerListing: 880,
    crowdingStatus: 'Mulai ramai',
    confidenceScore: 7,
    fitTag: 'Cocok (sesuai lini perawatan tubuh)',
    evidence: 'Pencarian meningkat tajam saat musim panas dan cuaca terik. Pembeli mencari lotion ber-SPF yang tidak gerah saat dipakai siang hari.',
    crowdingExplanation: 'Persaingan cukup ketat di kategori perawatan tubuh, namun tingkat kepuasan terhadap tekstur masih bervariasi.'
  },
  {
    id: 'OPP-010',
    productType: 'Serum Bulu Mata Peptide Tanpa Rasa Perih',
    searchVolume: '22.800 / bln',
    trend: 'Stabil',
    trendCaution: null,
    gapCategory: 'Produk',
    gapType: 'Formula Peptida',
    gapDetail: 'Banyak produk lama menggunakan minyak jarak kental perih di mata',
    activeListings: 24,
    demandPerListing: 950,
    crowdingStatus: 'Terbuka',
    confidenceScore: 7,
    fitTag: 'Sangat cocok (kategori utama Anda)',
    evidence: 'Konsumen beralih dari minyak alami kental ke serum berbasis air yang tidak mengaburkan pandangan atau membuat bintitan.',
    crowdingExplanation: 'Jumlah pemain menengah masih sedikit; peluang terbuka untuk formula modern berbasis peptida.'
  },
  {
    id: 'OPP-011',
    productType: 'Shampoo Batang Bebas Sampah Plastik',
    searchVolume: '12.400 / bln',
    trend: 'Stabil',
    trendCaution: null,
    gapCategory: 'Produk',
    gapType: 'Rambut Berwarna',
    gapDetail: 'Kurang formula khusus rambut diwarnai bebas luntur',
    activeListings: 16,
    demandPerListing: 770,
    crowdingStatus: 'Terbuka',
    confidenceScore: 6,
    fitTag: 'Terkait kategori (perawatan rambut)',
    evidence: 'Segmen pembeli ramah lingkungan terus tumbuh stabil tanpa fluktuasi besar.',
    crowdingExplanation: 'Volume pencarian khusus (niche), namun loyalitas pembeli tergolong tinggi.'
  },
  {
    id: 'OPP-012',
    productType: 'Sabun Cuci Muka Scrub Butiran Beras Harian',
    searchVolume: '29.500 / bln',
    trend: 'Stabil',
    trendCaution: null,
    gapCategory: 'Harga',
    gapType: 'Pasar Jenuh',
    gapDetail: 'Pasar sudah dipenuhi banyak produk mapan dengan perang harga',
    activeListings: 94,
    demandPerListing: 310,
    crowdingStatus: 'Jenuh',
    confidenceScore: 4,
    fitTag: 'Terkait kategori (persaingan tinggi)',
    evidence: 'Tingkat kompetisi sangat tinggi dengan lebih dari 90 listing aktif yang menawarkan diskon harga tajam.',
    crowdingExplanation: 'Status jenuh: margin keuntungan tipis dan biaya promosi cenderung tinggi jika masuk tanpa pembeda radikal.'
  }
];

export const GAP_CATEGORIES = [
  { id: 'all', label: 'Semua Celah' },
  { id: 'Harga', label: 'Harga' },
  { id: 'Produk', label: 'Produk' },
  { id: 'Kemasan', label: 'Kemasan' },
  { id: 'Pengiriman', label: 'Pengiriman' }
];

export const CATEGORY_STYLES = {
  Harga: {
    color: '#b45309',
    bg: '#fef3c7',
    border: '#fde68a'
  },
  Produk: {
    color: '#3449a1',
    bg: '#eff3fc',
    border: '#dbeafe'
  },
  Kemasan: {
    color: '#0f766e',
    bg: '#ccfbf1',
    border: '#99f6e4'
  },
  Pengiriman: {
    color: '#15803d',
    bg: '#dcfce7',
    border: '#bbf7d0'
  }
};

export const TIMEFRAME_OPTIONS = [
  { value: '30d', label: '30 Hari Terakhir (Standar)', shortLabel: '30 Hari' },
  { value: '7d', label: '7 Hari Terakhir', shortLabel: '7 Hari' },
  { value: '90d', label: '90 Hari Terakhir', shortLabel: '90 Hari' },
  { value: '12m', label: '12 Bulan (Tahunan)', shortLabel: '12 Bulan' }
];

export const OPPORTUNITY_TIMEFRAME_MAP = {
  'OPP-001': {
    '7d': { trend: 'Naik', delta: '+34%', searchVolume: '14.200 / mgg', caution: null, demandDelta: '+28.2%', listingsDelta: '+2.1%' },
    '30d': { trend: 'Naik', delta: '+28%', searchVolume: '54.200 / bln', caution: null, demandDelta: '+24.5%', listingsDelta: '+5.8%' },
    '90d': { trend: 'Naik', delta: '+22%', searchVolume: '158.000 / 3bln', caution: null, demandDelta: '+19.4%', listingsDelta: '+8.2%' },
    '12m': { trend: 'Naik', delta: '+45%', searchVolume: '580.000 / thn', caution: null, demandDelta: '+38.0%', listingsDelta: '+12.5%' }
  },
  'OPP-002': {
    '7d': { trend: 'Melonjak', delta: '+110%', searchVolume: '11.800 / mgg', caution: 'Melonjak (hati-hati: lonjakan sesaat media sosial)', demandDelta: '+78.5%', listingsDelta: '+21.4%' },
    '30d': { trend: 'Melonjak', delta: '+85%', searchVolume: '38.600 / bln', caution: 'Melonjak (hati-hati: lonjakan musiman)', demandDelta: '+62.0%', listingsDelta: '+16.6%' },
    '90d': { trend: 'Naik', delta: '+52%', searchVolume: '88.000 / 3bln', caution: null, demandDelta: '+41.2%', listingsDelta: '+28.0%' },
    '12m': { trend: 'Stabil', delta: '+12%', searchVolume: '220.000 / thn', caution: null, demandDelta: '+15.0%', listingsDelta: '+45.0%' }
  },
  'OPP-003': {
    '7d': { trend: 'Naik', delta: '+16%', searchVolume: '8.200 / mgg', caution: null, demandDelta: '+14.1%', listingsDelta: '+1.5%' },
    '30d': { trend: 'Naik', delta: '+14%', searchVolume: '31.400 / bln', caution: null, demandDelta: '+12.8%', listingsDelta: '+4.7%' },
    '90d': { trend: 'Naik', delta: '+18%', searchVolume: '92.000 / 3bln', caution: null, demandDelta: '+16.2%', listingsDelta: '+6.8%' },
    '12m': { trend: 'Naik', delta: '+32%', searchVolume: '340.000 / thn', caution: null, demandDelta: '+28.5%', listingsDelta: '+18.0%' }
  },
  'OPP-004': {
    '7d': { trend: 'Naik', delta: '+12%', searchVolume: '11.400 / mgg', caution: null, demandDelta: '+8.0%', listingsDelta: '+3.2%' },
    '30d': { trend: 'Naik', delta: '+15%', searchVolume: '44.800 / bln', caution: null, demandDelta: '+9.5%', listingsDelta: '+12.5%' },
    '90d': { trend: 'Naik', delta: '+20%', searchVolume: '128.000 / 3bln', caution: null, demandDelta: '+14.0%', listingsDelta: '+18.4%' },
    '12m': { trend: 'Stabil', delta: '+8%', searchVolume: '460.000 / thn', caution: null, demandDelta: '+6.2%', listingsDelta: '+32.0%' }
  },
  'OPP-005': {
    '7d': { trend: 'Naik', delta: '+22%', searchVolume: '12.800 / mgg', caution: null, demandDelta: '+19.5%', listingsDelta: '+2.8%' },
    '30d': { trend: 'Naik', delta: '+25%', searchVolume: '48.900 / bln', caution: null, demandDelta: '+18.2%', listingsDelta: '+7.4%' },
    '90d': { trend: 'Naik', delta: '+30%', searchVolume: '138.000 / 3bln', caution: null, demandDelta: '+22.0%', listingsDelta: '+14.2%' },
    '12m': { trend: 'Naik', delta: '+65%', searchVolume: '490.000 / thn', caution: null, demandDelta: '+54.0%', listingsDelta: '+26.0%' }
  },
  'OPP-006': {
    '7d': { trend: 'Stabil', delta: '+2%', searchVolume: '6.500 / mgg', caution: null, demandDelta: '+1.8%', listingsDelta: '-1.0%' },
    '30d': { trend: 'Stabil', delta: '+4%', searchVolume: '26.100 / bln', caution: null, demandDelta: '+3.1%', listingsDelta: '-2.1%' },
    '90d': { trend: 'Stabil', delta: '+3%', searchVolume: '76.000 / 3bln', caution: null, demandDelta: '+2.4%', listingsDelta: '+1.5%' },
    '12m': { trend: 'Stabil', delta: '+6%', searchVolume: '290.000 / thn', caution: null, demandDelta: '+4.5%', listingsDelta: '+5.0%' }
  },
  'OPP-007': {
    '7d': { trend: 'Stabil', delta: '+1%', searchVolume: '8.400 / mgg', caution: null, demandDelta: '-2.4%', listingsDelta: '+1.8%' },
    '30d': { trend: 'Stabil', delta: '+3%', searchVolume: '33.200 / bln', caution: null, demandDelta: '-1.8%', listingsDelta: '+4.2%' },
    '90d': { trend: 'Stabil', delta: '+5%', searchVolume: '96.000 / 3bln', caution: null, demandDelta: '+3.2%', listingsDelta: '+6.5%' },
    '12m': { trend: 'Naik', delta: '+18%', searchVolume: '360.000 / thn', caution: null, demandDelta: '+14.0%', listingsDelta: '+15.2%' }
  },
  'OPP-008': {
    '7d': { trend: 'Naik', delta: '+15%', searchVolume: '4.800 / mgg', caution: null, demandDelta: '+12.6%', listingsDelta: '0%' },
    '30d': { trend: 'Naik', delta: '+18%', searchVolume: '18.700 / bln', caution: null, demandDelta: '+15.4%', listingsDelta: '+2.8%' },
    '90d': { trend: 'Naik', delta: '+24%', searchVolume: '54.000 / 3bln', caution: null, demandDelta: '+20.5%', listingsDelta: '+8.3%' },
    '12m': { trend: 'Naik', delta: '+35%', searchVolume: '195.000 / thn', caution: null, demandDelta: '+31.0%', listingsDelta: '+25.0%' }
  },
  'OPP-009': {
    '7d': { trend: 'Melonjak', delta: '+95%', searchVolume: '15.600 / mgg', caution: 'Melonjak (hati-hati: lonjakan musiman cuaca panas)', demandDelta: '+68.0%', listingsDelta: '+8.5%' },
    '30d': { trend: 'Melonjak', delta: '+72%', searchVolume: '51.300 / bln', caution: 'Melonjak (hati-hati: lonjakan musiman)', demandDelta: '+45.0%', listingsDelta: '+18.2%' },
    '90d': { trend: 'Naik', delta: '+38%', searchVolume: '142.000 / 3bln', caution: null, demandDelta: '+25.4%', listingsDelta: '+30.0%' },
    '12m': { trend: 'Stabil', delta: '+10%', searchVolume: '480.000 / thn', caution: null, demandDelta: '+8.0%', listingsDelta: '+48.0%' }
  },
  'OPP-010': {
    '7d': { trend: 'Stabil', delta: '+2%', searchVolume: '5.800 / mgg', caution: null, demandDelta: '+2.1%', listingsDelta: '-1.2%' },
    '30d': { trend: 'Stabil', delta: '+5%', searchVolume: '22.800 / bln', caution: null, demandDelta: '+4.6%', listingsDelta: '-3.4%' },
    '90d': { trend: 'Stabil', delta: '+7%', searchVolume: '67.000 / 3bln', caution: null, demandDelta: '+6.0%', listingsDelta: '-2.0%' },
    '12m': { trend: 'Naik', delta: '+20%', searchVolume: '250.000 / thn', caution: null, demandDelta: '+16.5%', listingsDelta: '+8.0%' }
  },
  'OPP-011': {
    '7d': { trend: 'Stabil', delta: '0%', searchVolume: '3.100 / mgg', caution: null, demandDelta: '-1.2%', listingsDelta: '-2.0%' },
    '30d': { trend: 'Stabil', delta: '+2%', searchVolume: '12.400 / bln', caution: null, demandDelta: '-2.5%', listingsDelta: '-5.8%' },
    '90d': { trend: 'Stabil', delta: '+4%', searchVolume: '36.500 / 3bln', caution: null, demandDelta: '+1.5%', listingsDelta: '-3.5%' },
    '12m': { trend: 'Stabil', delta: '+8%', searchVolume: '140.000 / thn', caution: null, demandDelta: '+5.0%', listingsDelta: '+2.0%' }
  },
  'OPP-012': {
    '7d': { trend: 'Stabil', delta: '-1%', searchVolume: '7.200 / mgg', caution: null, demandDelta: '-6.2%', listingsDelta: '+4.0%' },
    '30d': { trend: 'Stabil', delta: '+1%', searchVolume: '29.500 / bln', caution: null, demandDelta: '-8.4%', listingsDelta: '+14.6%' },
    '90d': { trend: 'Stabil', delta: '+2%', searchVolume: '88.000 / 3bln', caution: null, demandDelta: '-5.0%', listingsDelta: '+22.0%' },
    '12m': { trend: 'Stabil', delta: '+3%', searchVolume: '340.000 / thn', caution: null, demandDelta: '-12.0%', listingsDelta: '+45.0%' }
  }
};

export function getOpportunityTrendForTimeframe(opp, timeframe = '30d') {
  if (!opp) {
    return {
      trend: 'Stabil',
      delta: '0%',
      searchVolume: '-',
      caution: null,
      demandDelta: '0%',
      listingsDelta: '0%'
    };
  }

  // If live realtime simulated trends exist on the opportunity, use them!
  if (opp.liveTrends && opp.liveTrends[timeframe]) {
    return opp.liveTrends[timeframe];
  }

  const found = OPPORTUNITY_TIMEFRAME_MAP[opp.id]?.[timeframe];
  if (found) return found;

  return {
    trend: opp.trend || 'Stabil',
    delta: opp.trend === 'Naik' ? '+15%' : opp.trend === 'Melonjak' ? '+80%' : '+2%',
    caution: opp.trendCaution,
    searchVolume: opp.searchVolume,
    demandDelta: opp.trend === 'Naik' ? '+12.5%' : opp.trend === 'Melonjak' ? '+40.0%' : '+1.5%',
    listingsDelta: '+3.5%'
  };
}

export const OPPORTUNITY_INFLUENCERS = {
  'OPP-001': [
    {
      id: 'INF-101',
      name: 'dr. Kamilia Hening',
      handle: '@dr.kamilia_skin',
      platform: 'TikTok',
      followers: '340K',
      followersNum: 340000,
      engagementRate: 8.6,
      engagementLabel: '8.6%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Kulit Berminyak & Acne-Prone',
      avgViews: '280K tayangan',
      collabType: 'Afiliasi Komisi (12%)',
      matchReason: '82% audiens mengeluhkan tabir surya lengket. Video edukasi sunscreen gel terakhirnya tembus 1.2M tayangan.',
      contactEmail: 'collab.drkamilia@gmail.com',
      avatarColor: '#3449a1'
    },
    {
      id: 'INF-102',
      name: 'Reyhan Daily Skin',
      handle: '@rey_skindaily',
      platform: 'Instagram',
      followers: '185K',
      followersNum: 185000,
      engagementRate: 7.4,
      engagementLabel: '7.4%',
      ratingLevel: 'Tinggi',
      niche: 'Skincare Pria & Anti-Whitecast',
      avgViews: '140K tayangan',
      collabType: 'Endorsement (Rp 1.800.000)',
      matchReason: 'Spesialis menguji tabir surya seringan air untuk pria beraktivitas luar ruangan tanpa rasa lengket.',
      contactEmail: 'reyhan.mgmt@agency.co.id',
      avatarColor: '#18204b'
    },
    {
      id: 'INF-103',
      name: 'Zaskia Beauty Notes',
      handle: '@zaskiaskinjournal',
      platform: 'TikTok',
      followers: '520K',
      followersNum: 520000,
      engagementRate: 6.9,
      engagementLabel: '6.9%',
      ratingLevel: 'Tinggi',
      niche: 'Review Sunscreen Under 100K',
      avgViews: '410K tayangan',
      collabType: 'Afiliasi + Barter Sampel',
      matchReason: 'Audiens didominasi usia 18-28 tahun yang mencari tabir surya gel matte di rentang harga Rp 70.000-95.000.',
      contactEmail: 'zaskia.collab@gmail.com',
      avatarColor: '#5468b8'
    }
  ],
  'OPP-002': [
    {
      id: 'INF-201',
      name: 'dr. Aris Setyo Sp.DVE',
      handle: '@dr.aris_derma',
      platform: 'TikTok',
      followers: '680K',
      followersNum: 680000,
      engagementRate: 9.2,
      engagementLabel: '9.2%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Pereda PIE & Kemerahan Wajah',
      avgViews: '530K tayangan',
      collabType: 'Edukasi Klinis Berbayar',
      matchReason: 'Pelopor edukasi klinis Azelaic Acid bebas alkohol untuk pemudaran bekas jerawat kemerahan.',
      contactEmail: 'mgmt.draris@medicalcreator.id',
      avatarColor: '#0f766e'
    },
    {
      id: 'INF-202',
      name: 'Clara Calming Lab',
      handle: '@clarabeautylab',
      platform: 'Instagram',
      followers: '210K',
      followersNum: 210000,
      engagementRate: 7.8,
      engagementLabel: '7.8%',
      ratingLevel: 'Tinggi',
      niche: 'Skincare Kulit Sensitif & Rosacea',
      avgViews: '165K tayangan',
      collabType: 'Afiliasi Komisi (15%)',
      matchReason: 'Komunitas 200k+ pengikutnya aktif berdiskusi mencari serum kemerahan yang tidak perih.',
      contactEmail: 'clarabeauty@gmail.com',
      avatarColor: '#b45309'
    }
  ],
  'OPP-003': [
    {
      id: 'INF-301',
      name: 'Dinda Eco Beauty',
      handle: '@dinda_ecobeauty',
      platform: 'TikTok',
      followers: '290K',
      followersNum: 290000,
      engagementRate: 8.1,
      engagementLabel: '8.1%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Bodycare Alami & Refill Hacks',
      avgViews: '215K tayangan',
      collabType: 'Afiliasi + Barter Produk',
      matchReason: 'Fokus pada kampanye kemasan isi ulang ramah lingkungan dan deodorant bebas aluminium anti-noda baju.',
      contactEmail: 'dinda.collab@gmail.com',
      avatarColor: '#15803d'
    },
    {
      id: 'INF-302',
      name: 'Bimo Active Life',
      handle: '@bimo_active',
      platform: 'Instagram',
      followers: '145K',
      followersNum: 145000,
      engagementRate: 6.7,
      engagementLabel: '6.7%',
      ratingLevel: 'Tinggi',
      niche: 'Fitness & Grooming Pria',
      avgViews: '110K tayangan',
      collabType: 'Endorsement (Rp 1.500.000)',
      matchReason: 'Audiens pria aktif mencari deodorant serum yang tidak membuat ketiak hitam dan bebas bau seharian.',
      contactEmail: 'bimo.mgmt@creator.id',
      avatarColor: '#18204b'
    }
  ],
  'OPP-004': [
    {
      id: 'INF-401',
      name: 'Alisa Travel Diary',
      handle: '@alisa.packing',
      platform: 'TikTok',
      followers: '430K',
      followersNum: 430000,
      engagementRate: 8.9,
      engagementLabel: '8.9%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Travel Hacks & Skincare Saku',
      avgViews: '370K tayangan',
      collabType: 'Afiliasi Komisi (10%)',
      matchReason: 'Viral dengan konten packing skincare travel 30 lembar yang praktis masuk tas kabin pesawat.',
      contactEmail: 'alisa.packing@gmail.com',
      avatarColor: '#0d9488'
    },
    {
      id: 'INF-402',
      name: 'Nadya Calming Skin',
      handle: '@nadyaskindiary',
      platform: 'Instagram',
      followers: '310K',
      followersNum: 310000,
      engagementRate: 7.3,
      engagementLabel: '7.3%',
      ratingLevel: 'Tinggi',
      niche: 'Kompres Toner Pad & Skin Barrier',
      avgViews: '240K tayangan',
      collabType: 'Endorsement (Rp 2.500.000)',
      matchReason: 'Kerap mendemonstrasikan CSM menggunakan kapas basah Centella untuk menenangkan kulit kemerahan.',
      contactEmail: 'nadya.skin@agency.id',
      avatarColor: '#3449a1'
    }
  ],
  'OPP-005': [
    {
      id: 'INF-501',
      name: 'Sarah Hair Journey',
      handle: '@sarah_hairgrowth',
      platform: 'TikTok',
      followers: '550K',
      followersNum: 550000,
      engagementRate: 8.8,
      engagementLabel: '8.8%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Penumbuh Rambut & Anti Rontok',
      avgViews: '460K tayangan',
      collabType: 'Afiliasi Komisi (12%)',
      matchReason: 'Audiens sangat mendambakan minyak rosemary dengan aroma herbal lembut yang tidak menusuk hidung.',
      contactEmail: 'sarahhair@gmail.com',
      avatarColor: '#15803d'
    },
    {
      id: 'INF-502',
      name: 'Gita Scalp Care',
      handle: '@gita.scalp',
      platform: 'Instagram',
      followers: '175K',
      followersNum: 175000,
      engagementRate: 7.1,
      engagementLabel: '7.1%',
      ratingLevel: 'Tinggi',
      niche: 'Kesehatan Kulit Kepala & Baby Hair',
      avgViews: '125K tayangan',
      collabType: 'Endorsement (Rp 1.600.000)',
      matchReason: 'Pakar hair oiling rutin yang memiliki tingkat konversi checkout produk perawatan rambut sangat tinggi.',
      contactEmail: 'gita.collab@gmail.com',
      avatarColor: '#5468b8'
    }
  ],
  'OPP-006': [
    {
      id: 'INF-601',
      name: 'Feby Medan Beauty',
      handle: '@feby_medanbeauty',
      platform: 'TikTok',
      followers: '220K',
      followersNum: 220000,
      engagementRate: 8.3,
      engagementLabel: '8.3%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Kreator Regional Sumatera & Skincare',
      avgViews: '180K tayangan',
      collabType: 'Afiliasi + Promo Ongkir',
      matchReason: 'Tingkat konversi penjualan sangat tinggi saat mempromosikan produk stok lokal pengiriman cepat 1 hari.',
      contactEmail: 'feby.medan@gmail.com',
      avatarColor: '#b45309'
    },
    {
      id: 'INF-602',
      name: 'Putri Bandung Skin',
      handle: '@putri_bandungskin',
      platform: 'Instagram',
      followers: '190K',
      followersNum: 190000,
      engagementRate: 7.0,
      engagementLabel: '7.0%',
      ratingLevel: 'Tinggi',
      niche: 'Trial Kit & Mini Moisturizer',
      avgViews: '145K tayangan',
      collabType: 'Barter + Komisi Afiliasi',
      matchReason: 'Spesialis ulasan kemasan uji coba 15g untuk konsumen yang ingin mencoba tekstur ceramide sebelum membeli jar besar.',
      contactEmail: 'putribandung@agency.id',
      avatarColor: '#3449a1'
    }
  ],
  'OPP-007': [
    {
      id: 'INF-701',
      name: 'Maya Makeup Clean',
      handle: '@maya_makeupclean',
      platform: 'TikTok',
      followers: '480K',
      followersNum: 480000,
      engagementRate: 9.0,
      engagementLabel: '9.0%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Pembersih Riasan Tube Praktis',
      avgViews: '390K tayangan',
      collabType: 'Afiliasi Komisi (12%)',
      matchReason: 'Konten demonstrasi wadah tube higienis tanpa sendok spatula miliknya selalu ditonton ratusan ribu kali.',
      contactEmail: 'maya.makeup@gmail.com',
      avatarColor: '#0f766e'
    },
    {
      id: 'INF-702',
      name: 'Sherly Double Cleanse',
      handle: '@sherly_cleanse',
      platform: 'Instagram',
      followers: '260K',
      followersNum: 260000,
      engagementRate: 7.5,
      engagementLabel: '7.5%',
      ratingLevel: 'Tinggi',
      niche: 'Melt-in-Skin Cleansing',
      avgViews: '190K tayangan',
      collabType: 'Endorsement (Rp 2.200.000)',
      matchReason: 'Audiens mencari cleansing balm anti-meleleh saat dibawa bepergian dalam wadah tube higienis.',
      contactEmail: 'sherly.mgmt@creator.id',
      avatarColor: '#18204b'
    }
  ],
  'OPP-008': [
    {
      id: 'INF-801',
      name: 'Dimas Scent Hunter',
      handle: '@dimas_perfumery',
      platform: 'TikTok',
      followers: '310K',
      followersNum: 310000,
      engagementRate: 8.5,
      engagementLabel: '8.5%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Wewangian Saku & Teh Lokal',
      avgViews: '260K tayangan',
      collabType: 'Afiliasi Komisi (15%)',
      matchReason: 'Kurator wewangian yang aktif merekomendasikan aroma teh putih segar yang tidak bikin pusing di ruang ber-AC.',
      contactEmail: 'dimas.scent@gmail.com',
      avatarColor: '#5468b8'
    },
    {
      id: 'INF-802',
      name: 'Alya Daily Scents',
      handle: '@alya_aromatherapist',
      platform: 'Instagram',
      followers: '165K',
      followersNum: 165000,
      engagementRate: 7.2,
      engagementLabel: '7.2%',
      ratingLevel: 'Tinggi',
      niche: 'Solid Perfume & Anti Tumpah',
      avgViews: '120K tayangan',
      collabType: 'Barter + Komisi Penjualan',
      matchReason: 'Audiens wanita pekerja kantoran yang mencari parfum saku tanpa risiko tumpah di tas kerja.',
      contactEmail: 'alya.aromatherapist@gmail.com',
      avatarColor: '#b45309'
    }
  ],
  'OPP-009': [
    {
      id: 'INF-901',
      name: 'Indah Body Glow',
      handle: '@indah_bodyglow',
      platform: 'TikTok',
      followers: '720K',
      followersNum: 720000,
      engagementRate: 9.4,
      engagementLabel: '9.4%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Lotion Siang Hari Anti Lengket',
      avgViews: '620K tayangan',
      collabType: 'Afiliasi Komisi (10%)',
      matchReason: 'Sering membuat tes kertas minyak di kulit setelah memakai lotion SPF; audiens sangat butuh formula seringan air.',
      contactEmail: 'indah.glow@gmail.com',
      avatarColor: '#3449a1'
    },
    {
      id: 'INF-902',
      name: 'Rizal Motor Guide',
      handle: '@rizal_rideguide',
      platform: 'Instagram',
      followers: '280K',
      followersNum: 280000,
      engagementRate: 8.0,
      engagementLabel: '8.0%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Perlindungan Kulit Biker & Komuter',
      avgViews: '220K tayangan',
      collabType: 'Endorsement (Rp 2.000.000)',
      matchReason: 'Mempromosikan pelindung matahari untuk tangan dan leher yang tidak gerah saat terik matahari siang.',
      contactEmail: 'rizal.ride@agency.id',
      avatarColor: '#18204b'
    }
  ],
  'OPP-010': [
    {
      id: 'INF-1001',
      name: 'Hana Lash Artist',
      handle: '@hana_lashstudio',
      platform: 'TikTok',
      followers: '390K',
      followersNum: 390000,
      engagementRate: 8.7,
      engagementLabel: '8.7%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Serum Peptida Ramah Lash Lift',
      avgViews: '310K tayangan',
      collabType: 'Afiliasi Komisi (12%)',
      matchReason: 'Edukator pemakaian serum berbasis air tanpa minyak jarak yang aman untuk mata sensitif dan tidak pedih.',
      contactEmail: 'hana.lash@gmail.com',
      avatarColor: '#0d9488'
    },
    {
      id: 'INF-1002',
      name: 'dr. Cynthia Mata Sehat',
      handle: '@dr.cynthia_eye',
      platform: 'Instagram',
      followers: '205K',
      followersNum: 205000,
      engagementRate: 7.6,
      engagementLabel: '7.6%',
      ratingLevel: 'Tinggi',
      niche: 'Keamanan Area Mata & Bulu Mata',
      avgViews: '150K tayangan',
      collabType: 'Edukasi Klinis',
      matchReason: 'Audiens mencari solusi serum bulu mata yang tidak memicu bintitan atau mata kemerahan.',
      contactEmail: 'mgmt.drcynthia@medicalcreator.id',
      avatarColor: '#3449a1'
    }
  ],
  'OPP-011': [
    {
      id: 'INF-1101',
      name: 'Jessica Color Diary',
      handle: '@jessica_colordiary',
      platform: 'TikTok',
      followers: '360K',
      followersNum: 360000,
      engagementRate: 8.2,
      engagementLabel: '8.2%',
      ratingLevel: 'Sangat Tinggi',
      niche: 'Color-Protect & Bleached Hair',
      avgViews: '270K tayangan',
      collabType: 'Afiliasi Komisi (12%)',
      matchReason: 'Kreator dengan rambut warna pirang yang aktif mencari shampoo batang bebas SLS agar warna tidak luntur.',
      contactEmail: 'jessicacolor@gmail.com',
      avatarColor: '#b45309'
    },
    {
      id: 'INF-1102',
      name: 'Bumi Bersih Lestari',
      handle: '@bumi_zero_waste',
      platform: 'Instagram',
      followers: '140K',
      followersNum: 140000,
      engagementRate: 7.9,
      engagementLabel: '7.9%',
      ratingLevel: 'Tinggi',
      niche: 'Komunitas Zero Waste Ramah Lingkungan',
      avgViews: '115K tayangan',
      collabType: 'Barter + Komisi Afiliasi',
      matchReason: 'Komunitas pembeli organik yang memprioritaskan sabun dan shampoo tanpa limbah botol plastik.',
      contactEmail: 'bumibersih@gmail.com',
      avatarColor: '#15803d'
    }
  ],
  'OPP-012': [
    {
      id: 'INF-1201',
      name: 'Ratih Herbal Skin',
      handle: '@ratih_herbalskin',
      platform: 'TikTok',
      followers: '270K',
      followersNum: 270000,
      engagementRate: 6.5,
      engagementLabel: '6.5%',
      ratingLevel: 'Tinggi',
      niche: 'Kandungan Beras Tradisional Lembut',
      avgViews: '190K tayangan',
      collabType: 'Afiliasi Komisi (10%)',
      matchReason: 'Membahas eksfoliasi harian ramah skin barrier dengan bulir beras halus tanpa iritasi.',
      contactEmail: 'ratih.herbal@gmail.com',
      avatarColor: '#18204b'
    },
    {
      id: 'INF-1202',
      name: 'Kevin Skin Budget',
      handle: '@kevin_skinbudget',
      platform: 'Instagram',
      followers: '195K',
      followersNum: 195000,
      engagementRate: 6.1,
      engagementLabel: '6.1%',
      ratingLevel: 'Tinggi',
      niche: 'Review Skincare Pelajar & Mahasiswa',
      avgViews: '135K tayangan',
      collabType: 'Endorsement Terjangkau',
      matchReason: 'Ulasan fokus pada produk pencuci muka harian yang murah namun kualitas bahan terjamin.',
      contactEmail: 'kevin.skin@agency.id',
      avatarColor: '#5468b8'
    }
  ]
};

export function getInfluencersForOpportunity(opportunityId, opportunityObj = null) {
  if (opportunityObj && opportunityObj.liveInfluencers) {
    return opportunityObj.liveInfluencers;
  }
  return OPPORTUNITY_INFLUENCERS[opportunityId] || [];
}

export const initialFeedCards = [
  {
    id: 'CARD-001',
    type: 'perbaikan',
    state: 'new', // new, in_progress, done, dismissed, expired
    listingId: 'LIST-001',
    listingName: 'Serum Niacinamide 10% 20ml Tekstur Ringan',
    title: 'Tambahkan foto perbandingan sebelum dan sesudah pemakaian',
    finding: 'Listing ini memiliki tingkat klik yang baik tetapi pembeli sering meninggalkan halaman sebelum memasukkan ke keranjang.',
    evidence: 'Berdasarkan data dari 14 listing serupa, listing dengan foto uji pakai atau hasil sebelum-sesudah memiliki konversi ke keranjang 32% lebih tinggi.',
    confidence: {
      level: 'Tinggi',
      segments: 3,
      reason: 'Sampel perbandingan mencakup 28 listing sejenis dengan pola perilaku pembeli yang konsisten selama 30 hari.'
    },
    action: {
      recommendation: 'Unggah setidaknya 1 foto demonstrasi tekstur atau perbandingan di galeri produk.',
      effort: 'sekitar 10 menit',
      prefillField: 'foto',
      suggestedValue: 'Foto tekstur serum saat dioleskan ke kulit'
    },
    howTo: 'Buka halaman edit listing, pilih bagian Foto Produk, lalu tambahkan gambar jarak dekat tekstur serum saat meresap ke kulit.'
  },
  {
    id: 'CARD-002',
    type: 'perbaikan',
    state: 'new',
    listingId: 'LIST-003',
    listingName: 'Toner Eksfoliasi AHA BHA PHA 100ml Lembut',
    title: 'Lengkapi anjuran frekuensi pemakaian pada deskripsi produk',
    finding: 'Pembeli banyak menanyakan berapa kali toner ini boleh digunakan dalam seminggu sebelum memutuskan membeli.',
    evidence: 'Dari 19 listing sejenis, 16 listing mencantumkan petunjuk frekuensi pemakaian secara jelas pada paragraf pertama deskripsi.',
    confidence: {
      level: 'Tinggi',
      segments: 3,
      reason: '9 ulasan pembeli dan 15 riwayat pesan pembeli menanyakan hal yang serupa.'
    },
    action: {
      recommendation: 'Tambahkan kalimat anjuran pemakaian (misal: "Gunakan 2 hingga 3 kali seminggu pada malam hari") di bagian atas deskripsi.',
      effort: 'sekitar 5 menit',
      prefillField: 'deskripsi',
      suggestedValue: 'Anjuran pemakaian: Gunakan 2-3 kali seminggu pada malam hari setelah membersihkan wajah. Lanjutkan dengan pelembap.'
    },
    howTo: 'Salin kalimat panduan pemakaian yang disarankan ke dalam bagian awal rincian produk Anda.'
  },
  {
    id: 'CARD-003',
    type: 'perbaikan',
    state: 'new',
    listingId: 'LIST-010',
    listingName: 'Shampoo Anti Ketombe Tea Tree 250ml Bebas Sulfat',
    title: 'Perbarui jumlah stok sebelum kehilangan posisi pencarian',
    finding: 'Stok listing ini telah habis selama 4 hari sehingga mulai turun dari peringkat hasil pencarian.',
    evidence: 'Listing ini rata-rata menghasilkan 38 penjualan per bulan saat stok tersedia, dan pembeli yang memasukkan ke keranjang tidak dapat menyelesaikan pembayaran.',
    confidence: {
      level: 'Tinggi',
      segments: 3,
      reason: 'Riwayat penjualan produk ini konsisten dalam 3 bulan terakhir.'
    },
    action: {
      recommendation: 'Masukkan jumlah unit stok yang siap dikirim agar listing kembali aktif di pencarian.',
      effort: 'sekitar 2 menit',
      prefillField: 'stok',
      suggestedValue: '30'
    },
    howTo: 'Masukkan jumlah persediaan yang ada di gudang Anda pada kolom stok, lalu klik Simpan.'
  },
  {
    id: 'CARD-004',
    type: 'perbaikan',
    state: 'new',
    listingId: 'LIST-006',
    listingName: 'Eye Cream Peptide Anti Kerut Kantung Mata 15ml',
    title: 'Isi atribut bahan utama dan jenis kebutuhan kulit',
    finding: 'Listing ini baru memenuhi 5 dari 9 atribut dasar yang biasa dicari pembeli.',
    evidence: 'Listing sejenis yang melengkapi atribut bahan utama mendapatkan tayangan pencarian spesifik 45% lebih banyak.',
    confidence: {
      level: 'Sedang',
      segments: 2,
      reason: 'Volume pencarian krim mata sedang bertumbuh di kategori perawatan wajah.'
    },
    action: {
      recommendation: 'Pilih "Peptide" sebagai bahan utama dan "Kulit menua / garis halus" sebagai jenis kebutuhan.',
      effort: 'sekitar 5 menit',
      prefillField: 'atribut',
      suggestedValue: 'Bahan utama: Peptide; Kebutuhan: Garis halus dan kantung mata'
    },
    howTo: 'Masuk ke menu spesifikasi produk dan centang opsi bahan aktif yang sesuai.'
  },
  {
    id: 'CARD-005',
    type: 'perbaikan',
    state: 'new',
    listingId: 'LIST-004',
    listingName: 'Sabun Cuci Muka Ceramide Gentle Cleanser 100ml',
    title: 'Periksa sisa stok karena tersisa 6 unit',
    finding: 'Dengan laju penjualan saat ini, persediaan diperkirakan habis dalam 48 jam.',
    evidence: 'Rata-rata 3 unit terjual setiap hari pada minggu ini.',
    confidence: {
      level: 'Tinggi',
      segments: 3,
      reason: 'Dihitung berdasarkan kecepatan penjualan 7 hari terakhir.'
    },
    action: {
      recommendation: 'Tambahkan pasokan stok tambahan sebelum kehabisan.',
      effort: 'sekitar 3 menit',
      prefillField: 'stok',
      suggestedValue: '50'
    },
    howTo: 'Sesuaikan jumlah persediaan di kolom stok gudang Anda.'
  },
  {
    id: 'CARD-006',
    type: 'peluang',
    state: 'new',
    opportunityId: 'OPP-001',
    productType: 'Sunscreen Gel Untuk Kulit Berminyak',
    title: 'Peluang pasar: tabir surya tekstur gel untuk kulit berminyak',
    finding: 'Terdapat 54.200 pencarian bulanan untuk tabir surya gel dengan tingkat persaingan yang masih terbuka.',
    evidence: 'Rasio permintaan per listing mencapai 3.010, dengan kesenjangan pada rentang harga Rp 70.000 hingga Rp 95.000.',
    confidence: {
      level: 'Tinggi',
      segments: 3,
      reason: 'Tren pencarian naik konsisten selama 60 hari berturut-turut.'
    },
    action: {
      recommendation: 'Pertimbangkan meluncurkan varian gel ringan pada lini tabir surya Anda.',
      effort: 'perencanaan produk',
      prefillField: 'peluang',
      suggestedValue: 'Sunscreen Gel 50ml'
    },
    howTo: 'Pelajari rincian celah pasar dan kisaran harga pembanding di tab Peluang.'
  },
  {
    id: 'CARD-007',
    type: 'peluang',
    state: 'new',
    opportunityId: 'OPP-002',
    productType: 'Serum Azelaic Acid Pemudar Bekas Jerawat',
    title: 'Peluang pasar: serum penenang kemerahan kemasan 20ml',
    finding: 'Pencarian bahan aktif azelaic acid melonjak tinggi dalam sebulan terakhir.',
    evidence: '38.600 pencarian bulanan dan hanya 14 listing yang memenuhi kriteria formula tanpa pewangi.',
    confidence: {
      level: 'Sedang',
      segments: 2,
      reason: 'Kategori sedang melonjak cepat; disarankan memeriksa ketahanan tren musiman.'
    },
    action: {
      recommendation: 'Siapkan formula atau stok jika Anda sudah memiliki produk sejenis di katalog.',
      effort: 'perencanaan produk',
      prefillField: 'peluang',
      suggestedValue: 'Serum Penenang Azelaic Acid'
    },
    howTo: 'Buka tab Peluang untuk melihat grafik permintaan dan analisis keramaian kompetisi.'
  },
  {
    id: 'CARD-008',
    type: 'label_kriteria', // Path to label placeholder card
    state: 'new',
    title: 'Kriteria kelayakan listing terpercaya',
    finding: 'Tiga listing Anda telah memenuhi 8 dari 9 kriteria informasi lengkap yang biasa dicari pembeli.',
    evidence: 'Listing dengan izin edar resmi, tanggal kedaluwarsa jelas, dan foto beresolusi tinggi memenuhi kriteria tinjauan listing terpercaya.',
    confidence: {
      level: 'Sedang',
      segments: 2,
      reason: 'Berdasarkan pedoman kelengkapan informasi katalog resmi Lintas.'
    },
    action: {
      recommendation: 'Pastikan seluruh informasi izin edar dan masa simpan terisi lengkap pada listing Anda.',
      effort: 'sekitar 10 menit',
      prefillField: 'legalitas',
      suggestedValue: 'Nomor izin edar dan tanggal kedaluwarsa'
    },
    howTo: 'Periksa kolom informasi kedaluwarsa dan nomor registrasi pada detail masing-masing produk.'
  }
];

export const onboardingWalkthroughSteps = [
  {
    step: 1,
    title: 'Selamat datang di Lintas Seller Insights',
    desc: 'Pusat analisis mandiri yang dirancang khusus untuk membantu penjual marketplace Indonesia mengambil keputusan berbasis data nyata, tanpa manipulasi otomatis.'
  },
  {
    step: 2,
    title: 'Keputusan selalu di tangan Anda',
    desc: 'Kami menyajikan bukti nyata, tingkat keyakinan, dan perbandingan dengan produk serupa. Sistem kami tidak pernah mengubah harga atau deskripsi toko Anda tanpa persetujuan Anda.'
  },
  {
    step: 3,
    title: 'Fokus pada tindakan berdampak nyata',
    desc: 'Mulai dari perbaikan listing yang paling mendesak di Beranda hingga eksplorasi celah produk yang belum banyak digarap di halaman Peluang.'
  }
];

export const starterCards = [
  {
    id: 'START-01',
    title: 'Lengkapi 9 atribut dasar pada listing utama Anda',
    howTo: 'Klik tab Listing Saya, pilih listing dengan tanda saran, lalu isi bagian yang bertanda silang pada daftar periksa 9 hal dasar.'
  },
  {
    id: 'START-02',
    title: 'Pelajari posisi harga Anda dibandingkan rata-rata pasar',
    howTo: 'Buka laci detail listing untuk melihat rentang harga umum (Q1 ke Q3) tanpa tekanan batas harga minimum.'
  },
  {
    id: 'START-03',
    title: 'Cek kata kunci pencarian yang sering digunakan pembeli',
    howTo: 'Di bagian Temuan Pencarian pada detail listing, setujui kata kunci yang cocok untuk meningkatkan daya temukan listing Anda.'
  }
];

export const serviceSignalsData = {
  sellerHandlingHours: 14.5, // Jam proses penjual (paid to shipped)
  sellerHandlingCategoryBenchmark: 18.0,
  carrierTransitHours: 38.2, // Jam transit kurir (shipped to delivered)
  carrierTransitCategoryBenchmark: 36.0,
  cancellationRate: 0.4, // %
  cancellationCategoryBenchmark: 1.1,
  returnRate: 0.8, // %
  returnCategoryBenchmark: 1.5,
  storeRating: 4.88,
  ratingCategoryBenchmark: 4.70,
  totalOrdersPeriod: 482,
  minOrderThreshold: 30
};
