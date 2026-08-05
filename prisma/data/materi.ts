export interface MateriSeed {
  categorySlug: string
  slug: string
  title: string
  summary: string
  level: string
  order: number
  content: string
}

export const MATERI_SEED: MateriSeed[] = [
  // ════════════════════════════════════════
  // DATA ANALYST
  // ════════════════════════════════════════
  {
    categorySlug: 'data-analyst',
    slug: 'pengenalan-data-analyst',
    title: 'Pengenalan Profesi Data Analyst',
    summary: 'Memahami peran, tanggung jawab, dan keterampilan utama seorang data analyst di dunia kerja.',
    level: 'PENGANTAR',
    order: 1,
    content: `## Apa itu Data Analyst?

Data Analyst adalah profesional yang mengubah data mentah menjadi wawasan (insight) yang bisa ditindaklanjuti untuk pengambilan keputusan bisnis.

## Tanggung Jawab Utama

1. **Mengumpulkan data** dari berbagai sumber (CSV, database, API, hasil survei)
2. **Membersihkan data** dari duplikat, nilai kosong, dan format yang tidak konsisten
3. **Menganalisis data** menggunakan statistik dan logika bisnis
4. **Memvisualisasikan data** menjadi grafik, dashboard, dan laporan
5. **Mengomunikasikan temuan** kepada pemangku kepentingan non-teknis

## Keterampilan yang Dibutuhkan

- **Spreadsheet (Excel/Google Sheets)**: pivot table, VLOOKUP, conditional formatting
- **SQL**: query data dari database
- **Visualisasi**: membuat dashboard yang mudah dipahami
- **Statistik dasar**: rata-rata, median, tren, korelasi
- **Komunikasi**: menyampaikan insight dengan bahasa sederhana

## Siklus Kerja Data Analyst

1. Definisi masalah bisnis
2. Pengumpulan data
3. Pembersihan data (80% dari pekerjaan!)
4. Eksplorasi dan analisis
5. Visualisasi dan laporan
6. Rekomendasi tindakan

## Contoh Kasus Nyata

Sebuah perusahaan retail ingin tahu produk mana yang paling laku. Data analyst akan:
- Menggabungkan data penjualan dari beberapa toko
- Membersihkan format yang berbeda-beda
- Membuat pivot table per kategori produk
- Menyusun dashboard yang menunjukkan tren penjualan
- Merekomendasikan produk mana yang perlu stok tambahan`,
  },
  {
    categorySlug: 'data-analyst',
    slug: 'teknik-pembersihan-data',
    title: 'Teknik Pembersihan Data (Data Cleaning)',
    summary: 'Langkah-langkah sistematis membersihkan data: duplikat, missing values, outlier, dan format tidak konsisten.',
    level: 'DASAR',
    order: 2,
    content: `## Mengapa Data Cleaning Penting?

Data kotor menghasilkan analisis yang salah. Pepatah klasik: *garbage in, garbage out*. Hampir 80% waktu seorang data analyst dihabiskan untuk membersihkan data.

## Jenis-Jenis Data Kotor

1. **Duplikat** — baris yang sama tercatat dua kali atau lebih
2. **Missing values** — sel kosong atau berisi "N/A"
3. **Format tidak konsisten** — "08xxx" vs "+628xxx", "1,000" vs "1000"
4. **Outlier** — nilai yang jauh di luar pola normal (bisa error atau data nyata)
5. **Data salah ketik** — "Jakrta" bukannya "Jakarta"

## Alur Kerja Pembersihan Data

### 1. Identifikasi Duplikat
- Gunakan filter atau formula untuk menemukan baris dengan nilai identik
- Tentukan kunci unik (misal: nomor invoice, email, ID)

### 2. Menangani Missing Values
- **Hapus baris** jika data hilangnya sedikit dan tidak penting
- **Isi dengan rata-rata/median** jika kolom numerik
- **Isi dengan "Unknown"** jika kolom kategorikal
- **Interpolasi** (isi nilai tengah antara sebelum dan sesudah) untuk data waktu

### 3. Standarisasi Format
- Tanggal: samakan semua ke satu format (misal: YYYY-MM-DD)
- Nomor telepon: samakan kode negara
- Mata uang: hilangkan simbol dan pemisah ribuan
- Kapitalisasi: samakan huruf besar/kecil untuk data nama

### 4. Deteksi Outlier
Metode paling umum adalah **IQR (Interquartile Range)**:
- IQR = Q3 - Q1
- Batas bawah = Q1 - 1.5 × IQR
- Batas atas = Q3 + 1.5 × IQR
- Nilai di luar batas = outlier (periksa apakah error atau data nyata)

## Checklist Sebelum Analisis

- [ ] Tidak ada baris duplikat
- [ ] Semua kolom terisi atau diberi label
- [ ] Format konsisten di seluruh dataset
- [ ] Outlier teridentifikasi dan terverifikasi
- [ ] Dokumentasi perubahan dibuat`,
  },
  {
    categorySlug: 'data-analyst',
    slug: 'dashboard-dan-visualisasi',
    title: 'Membuat Dashboard & Visualisasi Data',
    summary: 'Prinsip desain dashboard yang efektif: memilih chart yang tepat, storytelling data, dan tools yang digunakan.',
    level: 'LANJUTAN',
    order: 3,
    content: `## Prinsip Dashboard yang Efektif

Dashboard yang baik menjawab pertanyaan bisnis dalam 5 detik pertama. Jika tidak, dashboard itu hanya dekorasi.

## Memilih Chart yang Tepat

| Tujuan | Chart yang Cocok |
|--------|-----------------|
| Membandingkan antar kategori | Bar chart |
| Menunjukkan proporsi | Pie / donut chart |
| Menunjukkan tren waktu | Line chart |
| Hubungan dua variabel | Scatter plot |
| Distribusi data | Histogram |
| Komposisi yang berubah | Stacked bar / area chart |

## Struktur Dashboard Ideal

1. **Header**: judul, periode data, pemilik dashboard
2. **KPI utama**: 3-5 angka terpenting di bagian atas (revenue, users, conversion)
3. **Tren**: grafik perkembangan periode berjalan
4. **Breakdown**: analisis per kategori/channel/wilayah
5. **Filter**: slicer untuk interaktivitas

## Storytelling dengan Data

1. **Konteks**: jelaskan latar belakang dan pertanyaan bisnis
2. **Insight**: apa yang terjadi dan mengapa
3. **Rekomendasi**: apa yang harus dilakukan selanjutnya
4. **Next steps**: bagaimana mengukur keberhasilan

## Tools Populer

- **Google Sheets / Excel**: untuk dashboard sederhana hingga menengah
- **Looker Studio**: gratis, terhubung dengan ekosistem Google
- **Power BI / Tableau**: untuk kebutuhan enterprise
- **Metabase**: open-source, self-hosted

## Kesalahan Umum yang Harus Dihindari

- Terlalu banyak grafik di satu halaman
- Skala sumbu yang menyesatkan
- Warna yang tidak konsisten
- Mengabaikan konteks bisnis
- Menampilkan data tanpa rekomendasi`,
  },

  // ════════════════════════════════════════
  // PROJECT COORDINATOR
  // ════════════════════════════════════════
  {
    categorySlug: 'project-coordinator',
    slug: 'pengenalan-project-coordinator',
    title: 'Pengenalan Profesi Project Coordinator',
    summary: 'Peran project coordinator dalam memastikan proyek berjalan tepat waktu, anggaran, dan ruang lingkup.',
    level: 'PENGANTAR',
    order: 1,
    content: `## Apa itu Project Coordinator?

Project Coordinator adalah pendukung utama manajer proyek yang menangani detail operasional agar proyek berjalan lancar: jadwal, dokumentasi, komunikasi, dan pelacakan tugas.

## Tanggung Jawab Utama

1. **Menyusun dan memelihara jadwal proyek** (timeline, milestone, Gantt chart)
2. **Mendokumentasikan rapat** (MoM, action items, keputusan)
3. **Melacak progres tugas** dan mengingatkan pemilik tugas
4. **Mengelola komunikasi** antar tim, klien, dan vendor
5. **Menjaga risk register** tetap terbarui

## Keterampilan yang Dibutuhkan

- Organisasi dan perhatian terhadap detail
- Kemampuan komunikasi tertulis & lisan
- Penguasaan spreadsheet (Gantt, tracker, log)
- Kemampuan multitasking dan prioritisasi
- Pemahaman dasar metodologi proyek (Waterfall, Agile, Scrum)

## Dokumen Wajib dalam Proyek

1. **Project Charter** — dokumen otorisasi proyek
2. **Gantt Chart** — jadwal visual
3. **Risk Register** — daftar risiko dan mitigasi
4. **RACI Matrix** — pembagian tanggung jawab
5. **Status Report** — laporan berkala ke stakeholder

## Segitiga Proyek

Setiap proyek dibatasi oleh tiga hal: **ruang lingkup (scope)**, **waktu**, dan **biaya**. Mengubah satu sisi memengaruhi sisi lainnya. Koordinator proyek harus selalu sadar segitiga ini saat ada perubahan permintaan.`,
  },
  {
    categorySlug: 'project-coordinator',
    slug: 'minutes-of-meeting',
    title: 'Menulis MoM & Action Items yang Efektif',
    summary: 'Teknik notulensi rapat profesional: struktur MoM, action items yang jelas, dan follow-up yang terlacak.',
    level: 'DASAR',
    order: 2,
    content: `## Mengapa MoM Penting?

Minutes of Meeting (MoM) adalah bukti tertulis keputusan rapat. MoM yang baik mencegah kesalahpahaman dan menjadi referensi hukum bila diperlukan.

## Struktur MoM Standar

1. **Header**: judul rapat, tanggal, waktu, lokasi
2. **Daftar hadir**: peserta, jabatan, (yang berhalangan)
3. **Agenda**: daftar topik yang dibahas
4. **Poin diskusi**: per agenda, siapa menyampaikan apa
5. **Keputusan**: hasil yang disepakati
6. **Action items**: tugas, pemilik, deadline

## Menulis Action Items yang Jelas

Action item yang baik harus memenuhi format berikut:

> **Task** — jelas dan spesifik
> **Owner** — satu orang penanggung jawab
> **Deadline** — tanggal spesifik (bukan "minggu depan")
> **Priority** — high/medium/low

Contoh baik:
"Mengirim draft proposal ke klien — Andi — 15 Agustus — High"

Contoh buruk:
"Bikin proposal — tim — secepatnya"

## Tips Notulensi Efektif

1. **Hadir dengan template kosong** — jangan menulis dari nol
2. **Catat langsung di laptop** saat rapat berlangsung
3. **Tulis keputusan**, bukan transkrip seluruh diskusi
4. **Konfirmasi action items** di akhir rapat sebelum rapat ditutup
5. **Kirim MoM dalam 24 jam** setelah rapat

## Template Dasar

\`\`\`
Judul Rapat      : Rapat Kick-Off Proyek Website Redesign
Tanggal/Waktu    : Senin, 4 Agustus 2026, 10:00-11:30 WIB
Lokasi           : Ruang Rapat Utama
Notulis          : [Nama]

DAFTAR HADIR
1. ...

AGENDA
1. Pembukaan
2. ...

DISKUSI
1. ...

KEPUTUSAN
1. ...

ACTION ITEMS
No | Task | Owner | Deadline | Priority | Status
---|------|-------|----------|----------|-------
\`\`\``,
  },
  {
    categorySlug: 'project-coordinator',
    slug: 'gantt-chart-dan-risk',
    title: 'Gantt Chart & Risk Register',
    summary: 'Cara menyusun jadwal visual dengan Gantt chart dan mengelola risiko proyek secara sistematis.',
    level: 'LANJUTAN',
    order: 3,
    content: `## Gantt Chart

Gantt chart adalah diagram batang horizontal yang menampilkan jadwal proyek: kapan setiap tugas dimulai, berakhir, dan saling berhubungan.

### Komponen Gantt Chart
1. **Task list** di sisi kiri
2. **Timeline** (hari/minggu/bulan) di bagian atas
3. **Batang** yang mewakili durasi setiap tugas
4. **Panah dependensi** antar tugas
5. **Milestone** (diamond) — titik penting tanpa durasi

### Cara Membuat di Spreadsheet
1. Kolom: Task, Start Date, End Date, Duration (hari), Owner, Status
2. Gunakan formula untuk menghitung posisi bar di timeline
3. Warnai berdasarkan status: hijau (selesai), kuning (berjalan), merah (terlambat)
4. Tambahkan conditional formatting untuk deadline yang lewat

## Risk Register

Risk register adalah dokumen hidup yang mencatat semua risiko yang mungkin memengaruhi proyek.

### Kolom Risk Register
| Kolom | Penjelasan |
|-------|-----------|
| ID | Nomor urut risiko |
| Deskripsi | Apa yang bisa salah |
| Kategori | Teknis / resource / external / finansial |
| Probability (1-5) | Seberapa mungkin terjadi |
| Impact (1-5) | Seberapa besar dampaknya |
| Risk Score | Probability × Impact |
| Mitigation | Strategi menghadapi (avoid/mitigate/transfer/accept) |
| Owner | Penanggung jawab |
| Status | Open / monitoring / closed |

### Matriks Probabilitas-Dampak (5×5)

Risiko dengan skor > 15 = **critical** (butuh aksi segera)
Skor 8-15 = **high** (butuh mitigasi aktif)
Skor 4-7 = **medium** (monitoring berkala)
Skor < 4 = **low** (accept)

### Strategi Mitigasi
- **Avoid**: menghilangkan sumber risiko
- **Mitigate**: mengurangi probabilitas atau dampak
- **Transfer**: memindahkan risiko (misal: asuransi, vendor)
- **Accept**: menerima dan menyiapkan contingency

## Konsistensi Antar Dokumen

Nama task di Gantt chart harus sama dengan nama di risk register dan RACI matrix. Inkonsistensi nama adalah kesalahan paling umum koordinator junior.`,
  },

  // ════════════════════════════════════════
  // SECRETARY / EXECUTIVE ASSISTANT
  // ════════════════════════════════════════
  {
    categorySlug: 'secretary-executive-assistant',
    slug: 'pengenalan-secretary',
    title: 'Pengenalan Profesi Sekretaris & Executive Assistant',
    summary: 'Peran ganda sekretaris modern: manajemen jadwal eksekutif, korespondensi, dan persiapan meeting.',
    level: 'PENGANTAR',
    order: 1,
    content: `## Apa itu Sekretaris / Executive Assistant?

Executive Assistant (EA) adalah tangan kanan eksekutif yang mengelola jadwal, komunikasi, dan logistik agar pemimpin bisa fokus pada keputusan strategis.

## Tanggung Jawab Utama

1. **Manajemen kalender** — mengatur meeting, menghindari konflik jadwal
2. **Korespondensi** — surat resmi, email, undangan
3. **Persiapan meeting** — agenda, briefing, materi
4. **Manajemen perjalanan** — tiket, hotel, itinerary
5. **Administrasi dokumen** — arsip, tanda tangan, approval

## Keterampilan yang Dibutuhkan

- **Discretion** (kerahasiaan) — ini yang paling penting
- Manajemen waktu dan prioritas
- Komunikasi formal yang baik (surat resmi, email profesional)
- Detail-oriented: tidak ada salah ketik di surat resmi
- Antisipasi: tahu kebutuhan sebelum diminta

## Etika Profesional EA

1. **Jaga kerahasiaan** semua informasi eksekutif
2. **Prioritaskan dengan bijak** — urgent vs penting
3. **Antisipasi kebutuhan** — siapkan sebelum diminta
4. **Gunakan kalimat profesional** dalam semua komunikasi
5. **Konfirmasi** — selalu konfirmasi jadwal dan keputusan secara tertulis

## Alur Persiapan Meeting

1. Tentukan tujuan dan peserta
2. Cek ketersediaan ruang & waktu (kalender bersama)
3. Kirim undangan dengan agenda
4. Siapkan materi & briefing eksekutif
5. Kirim reminder H-1
6. Dokumentasikan hasil rapat`,
  },
  {
    categorySlug: 'secretary-executive-assistant',
    slug: 'surat-resmi-dan-email',
    title: 'Penulisan Surat Resmi & Email Profesional',
    summary: 'Format surat dinas, kop surat, dan etika email bisnis yang profesional.',
    level: 'DASAR',
    order: 2,
    content: `## Surat Resmi

Surat resmi mewakili institusi, bukan pribadi. Formatnya harus sempurna: tidak ada salah ketik, penomoran benar, dan bahasa baku.

### Struktur Surat Resmi

1. **Kop surat** — logo, nama perusahaan, alamat, telepon, email
2. **Nomor surat** — format standar: [No]/[Kode]/[Bulan]/[Tahun]
3. **Lampiran** — jumlah dokumen yang disertakan
4. **Perihal** — inti surat, singkat dan jelas
5. **Tanggal surat** — ditulis lengkap (4 Agustus 2026)
6. **Alamat tujuan** — jangan gunakan "Kepada Yth. Bapak"
7. **Isi surat** — pembuka, inti, penutup
8. **Salam penutup** dan **tanda tangan** — nama jelas + jabatan

### Kaidah Bahasa

- Gunakan kata baku ("apotek" bukan "apotik")
- Hindari singkatan tidak resmi
- Kalimat efektif: satu ide satu kalimat
- Gunakan EYD sesuai kaidah terbaru

## Email Profesional

### Struktur Email Bisnis
1. **Subject**: jelas dan spesifik — "Undangan Rapat: Evaluasi Q3 (Kamis, 14 Agustus)"
2. **Salam pembuka**: "Yth. Bapak/Ibu [Nama],"
3. **Pendahuluan**: maksud email dalam 1-2 kalimat
4. **Isi**: poin-poin yang rapi, gunakan paragraf pendek
5. **Penutup**: ajakan tindakan + terima kasih
6. **Tanda tangan**: nama, jabatan, kontak

### Hal yang Harus Dihindari
- Subject kosong atau tidak jelas
- Huruf kapital semua (dianggap berteriak)
- Emoji dalam konteks formal
- Mengirim tanpa lampiran yang disebut
- Balas semua (Reply All) tanpa perlu

## Checklist Sebelum Mengirim

- [ ] Tujuan email/undangan jelas
- [ ] Lampiran terpasang
- [ ] Nama penerima benar (jangan salah eja!)
- [ ] Tidak ada salah ketik
- [ ] Deadline/kewajiban tersampaikan`,
  },
  {
    categorySlug: 'secretary-executive-assistant',
    slug: 'travel-planning-executive',
    title: 'Perencanaan Perjalanan Eksekutif',
    summary: 'Menyusun itinerary, memilih hotel, mengelola expense, dan packing list untuk perjalanan bisnis.',
    level: 'LANJUTAN',
    order: 3,
    content: `## Perjalanan Bisnis Eksekutif

Perjalanan bisnis yang baik adalah perjalanan yang tidak pernah membuat eksekutif berpikir tentang logistik. EA yang hebat membuat semuanya mengalir.

## Langkah Perencanaan

1. **Kumpulkan kebutuhan**: tujuan perjalanan, tanggal, preferensi
2. **Buat konsep itinerary** sebelum booking apa pun
3. **Booking transportasi**: pesawat/kereta + rental mobil
4. **Booking hotel**: dekat venue, kelas sesuai kebijakan perusahaan
5. **Susun meeting schedule**: sisakan buffer antar meeting
6. **Siapkan dokumen**: tiket, konfirmasi hotel, meeting brief
7. **Kirim paket lengkap** ke eksekutif H-2

## Itinerary yang Baik

Itinerary harus berisi:
- **Hari & tanggal** jelas
- **Jam demi jam**: kegiatan, lokasi, kontak
- **Buffer waktu**: minimal 30 menit antar meeting
- **Peta**: jarak antar lokasi
- **Kontak darurat**: hotel, driver, admin lokal

## Memilih Hotel

Bandingkan minimal 3 opsi dengan kriteria:
- Jarak ke venue meeting (maks 15 menit)
- Harga sesuai kebijakan perusahaan
- Fasilitas: WiFi cepat, meja kerja, gym
- Rating minimal 4.0 dan review yang relevan

## Expense & Reimbursement

### Kategori Biaya
1. Transportasi (tiket, taxi, parkir)
2. Akomodasi (hotel)
3. Makan (meals dengan batas harian)
4. Hiburan (entertainment untuk klien)

### Tips
- Simpan semua struk (receipts) segera
- Catat tanggal dan keperluan di struk
- Ikuti format expense form perusahaan
- Reimburse tepat waktu setelah perjalanan

## Packing List Eksekutif

- Dokumen perjalanan & identitas
- Laptop + charger + adaptor
- Meeting brief & materi presentasi
- Pakaian formal sesuai agenda
- Obat-obatan pribadi
- Power bank, earphone`,
  },

  // ════════════════════════════════════════
  // DATA ENTRY SPECIALIST
  // ════════════════════════════════════════
  {
    categorySlug: 'data-entry-specialist',
    slug: 'pengenalan-data-entry',
    title: 'Pengenalan Profesi Data Entry Specialist',
    summary: 'Peran data entry, standar akurasi, kecepatan ketik, dan tools yang digunakan.',
    level: 'PENGANTAR',
    order: 1,
    content: `## Apa itu Data Entry Specialist?

Data Entry Specialist bertugas memasukkan, memperbarui, dan memelihara data dalam sistem atau database dengan tingkat akurasi yang sangat tinggi.

## Tanggung Jawab Utama

1. **Input data** dari dokumen fisik/digital ke spreadsheet atau sistem
2. **Verifikasi data** — memastikan tidak ada salah input
3. **Pembersihan data** — standarisasi format
4. **Pemeliharaan database** — update data lama
5. **Pelaporan** — ringkasan pekerjaan dan isu data

## Standar Profesional

- **Akurasi > 99%** — satu kesalahan per 100 record adalah standar minimal
- **Kecepatan**: 40-60 kata per menit (WPM) dengan akurasi tinggi
- **Dobel-check**: selalu periksa ulang sebelum submit
- **Konsistensi**: ikuti SOP dan format yang ditetapkan

## Tools yang Digunakan

- **Spreadsheet**: Excel, Google Sheets
- **Formula umum**: TRIM, UPPER/PROPER, TEXT, CONCATENATE, VLOOKUP
- **OCR tools**: untuk foto dokumen
- **Sistem ERP/CRM**: input langsung ke database perusahaan

## Etika Kerja Data Entry

1. **Jangan mengubah data tanpa otorisasi**
2. **Flag data yang meragukan** — jangan ditebak
3. **Dokumentasikan semua perubahan**
4. **Kerjakan dalam batch** agar lebih efisien dan mudah di-track
5. **Lindungi data sensitif** — jangan dibagikan`,
  },
  {
    categorySlug: 'data-entry-specialist',
    slug: 'akurasi-dan-standarisasi',
    title: 'Akurasi, Standarisasi & Validasi Data',
    summary: 'Teknik menjaga akurasi tinggi: dobel-entry, validasi otomatis, dan standarisasi format.',
    level: 'DASAR',
    order: 2,
    content: `## Mengapa Akurasi Penting?

Satu digit salah pada nomor rekening bisa menyebabkan uang hilang. Satu huruf salah pada email bisa membuat marketing campaign gagal. Akurasi adalah fondasi profesi data entry.

## Teknik Menjaga Akurasi

### 1. Double-Entry
Masukkan data dua kali (oleh dua orang atau dua sesi) lalu bandingkan. Selisih menunjukkan error.

### 2. Validasi Otomatis dengan Excel
- **Data Validation**: batasi input ke daftar tertentu
- **Conditional Formatting**: tandai sel yang mencurigakan (negatif, terlalu besar)
- **Formula check**: SUM vs total dari sumber lain

### 3. Pemeriksaan Visual
- Urutan nomor (invoice harus berurutan)
- Konsistensi kapitalisasi
- Tipe data benar (angka vs teks)

## Standarisasi Format Umum

| Data | Format Standar |
|------|---------------|
| Nomor telepon | +62 8xx-xxxx-xxxx |
| Tanggal | YYYY-MM-DD |
| Nama | Title Case (Budi Santoso) |
| Email | huruf kecil semua |
| NIP/ID | tanpa separator, digit tetap |
| Mata uang | angka tanpa simbol, pemisah desimal titik |

## Error Rate & Toleransi

- **Standar industri**: error rate < 1%
- **Hitung error rate**: (jumlah error / total record) × 100%
- **Jika melebihi 1%**: hentikan, periksa proses, temukan sumber masalah

## Flag, Jangan Tebak!

Aturan emas: **jika ragu, flag** (tandai) — jangan menebak. Data yang di-flag bisa diverifikasi oleh atasan atau sumber data. Data yang ditebak bisa menyebabkan kerugian besar.`,
  },
  {
    categorySlug: 'data-entry-specialist',
    slug: 'data-migration',
    title: 'Migrasi Data Antar Sistem',
    summary: 'Proses migrasi data dari sistem lama ke baru: mapping, batch, validation, dan reconciliation.',
    level: 'LANJUTAN',
    order: 3,
    content: `## Apa itu Migrasi Data?

Migrasi data adalah proses memindahkan data dari satu sistem ke sistem lain. Ini adalah proyek berisiko tinggi: data hilang = kerugian besar.

## Tahapan Migrasi Data

### 1. Discovery & Planning
- Inventarisasi semua sumber data
- Identifikasi format dan kualitas data
- Tentukan sistem tujuan dan aturan bisnisnya

### 2. Mapping
Buat **mapping document**: kolom sumber → kolom tujuan.

Contoh:
| Legacy (sumber) | Sistem Baru (tujuan) |
|-----------------|---------------------|
| NamaPlgn | customer_name |
| Alamat1 + Alamat2 | full_address |
| Telp | phone_number |

### 3. Transformasi Data
- Standarisasi format (nama, telepon, tanggal)
- Konsolidasi duplikat
- Isi atau flag missing values

### 4. Migrasi Batch
- Jangan migrasi semua sekaligus! Pisah per 100-500 record
- Uji coba dengan data dummy dulu
- Dokumentasikan setiap batch

### 5. Validasi & Reconciliation
- **Row count**: jumlah record sumber = jumlah record tujuan
- **Sampling**: cek acak 10% record
- **Field-level check**: perbandingan nilai per kolom

## Checklist Sebelum Migrasi

- [ ] Mapping document disetujui
- [ ] Data sumber sudah dibackup
- [ ] Uji coba dengan data dummy sukses
- [ ] Protokol rollback disiapkan
- [ ] Semua stakeholder tahu jadwal

## Common Pitfalls

- Memigrasi tanpa backup
- Lupa menangani data duplikat
- Tidak ada reconciliation
- Field yang dianggap sama tapi ternyata beda format`,
  },

  // ════════════════════════════════════════
  // DATA ANNOTATION / AI TRAINER
  // ════════════════════════════════════════
  {
    categorySlug: 'data-annotation-ai-trainer',
    slug: 'pengenalan-data-annotation',
    title: 'Pengenalan Data Annotation & AI Training',
    summary: 'Peran annotator dalam ekosistem AI: jenis-jenis annotation dan kualitas data training.',
    level: 'PENGANTAR',
    order: 1,
    content: `## Apa itu Data Annotation?

Data annotation adalah proses memberi label pada data (teks, gambar, audio, video) agar model AI bisa belajar mengenali pola. Annotator adalah guru bagi AI.

## Jenis-Jenis Annotation

1. **Text annotation**
   - Sentiment labeling (positif/negatif/netral)
   - Named Entity Recognition (nama orang, organisasi, lokasi)
   - Intent classification (niat pengguna)
2. **Image annotation**
   - Classification (kategori gambar)
   - Bounding box (kotak di sekitar objek)
   - Segmentation (pixel-level)
3. **Audio annotation**
   - Speech-to-text (transkripsi)
   - Speaker identification
   - Emotion recognition
4. **Video annotation**
   - Object tracking
   - Action recognition

## Mengapa Kualitas Penting?

AI sebaik data yang dilatihnya. Data kotor → model bias → keputusan salah. Karena itu:
- **Guideline harus jelas** untuk setiap proyek
- **Annotator harus konsisten** satu sama lain
- **Quality check dilakukan** secara berkala

## Metrik Kualitas

### Inter-Annotator Agreement (IAA)
Ukur seberapa konsisten dua annotator melabeli data yang sama. Target umum: > 0.8 (80%).

### Confidence Score
Annotator menyatakan tingkat keyakinan labelnya (0-1). Skor rendah → data butuh review.

## Tools Populer

- **Label Studio** (open-source, fleksibel)
- **CVAT** (khusus computer vision)
- **Prodigy** (NLP)
- **Audacity** (transkripsi audio)`,
  },
  {
    categorySlug: 'data-annotation-ai-trainer',
    slug: 'kualitas-dan-consistency',
    title: 'Menjaga Konsistensi & Kualitas Label',
    summary: 'Guideline labeling, edge cases, quality check, dan cara mengukur konsistensi antar annotator.',
    level: 'DASAR',
    order: 2,
    content: `## Fondasi: Guideline Labeling

Guideline adalah aturan baku yang memastikan semua annotator memberi label yang sama pada data yang sama. Tanpa guideline, satu "positive" bisa diartikan berbeda oleh lima orang.

### Isi Guideline yang Baik
1. **Definisi jelas** setiap label
2. **Contoh benar** untuk setiap label (minimal 5)
3. **Contoh salah** dengan penjelasan mengapa
4. **Edge cases**: data ambigu yang sering muncul
5. **Aturan keputusan**: jika ragu, pilih apa?

## Edge Cases Umum

- **Sarkasme** dalam ulasan: "keren banget sampe ga direspon" = negatif?
- **Gambar ambigu**: mouse komputer vs hewan tikus
- **Nama ambigu**: "Merdeka" = nama hotel atau kata umum?
- **Noise audio**: suara bising di tengah kalimat

Aturan umum: **jika konteks tidak cukup, gunakan label netral** dan flag untuk review.

## Quality Check Rutin

### 1. Double Annotation
Ambil 10-20% data, annotate dua kali (oleh annotator berbeda), bandingkan hasilnya.

### 2. Gold Standard Test
Siapkan 50-100 data yang sudah dilabeli oleh ahli (gold standard). Masukkan diam-diam ke batch kerja. Skor annotator = akurasi terhadap gold standard.

### 3. Review Berkala
Reviewer memeriksa ulang sampel acak dan memberikan feedback ke annotator.

## Menghitung Konsistensi

Untuk label kategori, gunakan **percentage agreement** atau **Cohen's Kappa**:

1. Siapkan 100 data yang dilabeli oleh 2 annotator
2. Hitung jumlah label yang sama
3. Agreement = (jumlah sama / 100) × 100%
4. Target: > 85% untuk labeling dasar, > 80% untuk tugas kompleks

## Feedback Loop

- Kumpulkan error pattern yang sering terjadi
- Perbarui guideline (iteratif!)
- Briefing ulang tim jika akurasi menurun
- Rayakan peningkatan konsistensi`,
  },
  {
    categorySlug: 'data-annotation-ai-trainer',
    slug: 'ner-dan-transkripsi',
    title: 'NER, Transkripsi & Format Output',
    summary: 'Praktik annotation teks tingkat lanjut: NER, summarization, dan transkripsi audio dengan format standar.',
    level: 'LANJUTAN',
    order: 3,
    content: `## Named Entity Recognition (NER)

NER adalah proses menandai entitas dalam teks: nama orang, organisasi, lokasi, tanggal, uang.

### Entity Types Umum
- **PERSON** — "Joko Widodo"
- **ORGANIZATION** — "PT Telkom Indonesia"
- **LOCATION** — "Jakarta"
- **DATE** — "15 Agustus 2026"
- **MONEY** — "Rp 2 Miliar"

### Aturan Labeling
1. Label seluruh kata dalam entitas (multiword span)
2. Jangan menandai kata biasa yang kebetulan sama dengan nama entitas
3. Konsisten: jika "Kompas" di kalimat A adalah ORG, maka di kalimat B juga

## Text Summarization

Memberi ringkasan artikel dengan aturan:
- Tangkap poin utama (bukan detail)
- 2-3 kalimat untuk artikel pendek
- Gunakan kata sendiri, jangan menyalin kalimat pertama
- Sertakan angka penting (persentase, nominal)

## Transkripsi Audio

### Format Standar
\`\`\`json
{
  "text": "Halo, saya bisa bantu?",
  "start": 0.5,
  "end": 2.8,
  "speaker": "A"
}
\`\`\`

### Aturan Transkripsi
- **Verbatin**: tulis apa yang diucapkan, bukan yang seharusnya diucapkan
- **Noise**: tandai [noise], [laugh], [inaudible]
- **Speaker diidentifikasi**: A/B/C sesuai konteks
- **Istilah teknis**: tulis sesuai pengucapan yang benar

## Format Output Standar

### Bounding Box (COCO JSON)
\`\`\`json
{
  "image_id": 42,
  "category_id": 1,
  "bbox": [x, y, width, height],
  "score": 0.98
}
\`\`\`

### Kunci Format yang Baik
- Schema konsisten di seluruh file
- Tidak ada key typo
- Nilai numerik valid (IoU/bbox tidak boleh negatif)
- Dokumentasi: jelaskan setiap field di README project`,
  },

  // ════════════════════════════════════════
  // TRANSLATION / LOCALIZER
  // ════════════════════════════════════════
  {
    categorySlug: 'translation-localizer',
    slug: 'pengenalan-penerjemahan',
    title: 'Pengenalan Penerjemahan & Lokalisasi',
    summary: 'Perbedaan penerjemahan dan lokalisasi, proses kerja, dan standar kualitas penerjemah profesional.',
    level: 'PENGANTAR',
    order: 1,
    content: `## Penerjemahan vs Lokalisasi

**Penerjemahan**: mengubah teks dari bahasa sumber ke bahasa target dengan mempertahankan makna.

**Lokalisasi**: lebih dari penerjemahan — menyesuaikan produk ke budaya, format, dan preferensi lokal. Contoh: format tanggal, mata uang, satuan, idiom, warna yang bermakna khusus.

## Proses Kerja Penerjemah

1. **Persiapan**: baca teks sumber, kenali istilah dan konteks
2. **Glossary**: buat daftar istilah dan padanannya
3. **Terjemahan**: terjemahkan dengan akurat, bukan literal
4. **Review**: periksa konsistensi, kesalahan, dan naturalness
5. **Delivery**: kirim dengan format yang diminta

## Standar Kualitas

- **Akurasi**: makna tersampaikan 100%
- **Naturalness**: terdengar seperti tulisan asli bahasa target
- **Konsistensi**: istilah sama = terjemahan sama
- **Nuansa**: nada dan gaya sesuai konteks (formal/kasual)

## Skill Wajib Penerjemah

- Penguasaan dua bahasa (bahasa sumber + target)
- Pemahaman konteks budaya kedua bahasa
- Riset istilah teknis
- Ketelitian tinggi
- Kejujuran: tidak menebak istilah yang tidak tahu

## Kesalahan Umum

1. **Terjemahan literal** yang kaku ("take it easy" → "ambil itu mudah")
2. **Inkonsistensi istilah** dalam satu dokumen
3. **Tidak memperhatikan konteks** — kata sama, makna beda
4. **Tidak riset istilah teknis**`,
  },
  {
    categorySlug: 'translation-localizer',
    slug: 'glossary-dan-terminologi',
    title: 'Membangun Glossary & Menjaga Terminologi',
    summary: 'Cara menyusun glossary istilah, kapan menerjemahkan dan kapan tidak, serta konsistensi terminologi.',
    level: 'DASAR',
    order: 2,
    content: `## Apa itu Glossary?

Glossary adalah daftar istilah yang disepakati bersama penerjemahan/padanan resminya. Ini adalah senjata utama konsistensi.

## Contoh Glossary (Teknologi)

| English | Indonesia | Keterangan |
|---------|-----------|------------|
| cloud computing | komputasi awan | diterjemahkan |
| API | API | tidak diterjemahkan |
| dashboard | dasbor / dashboard | konsisten pilih satu |
| bug | bug / cacat perangkat lunak | konteks |
| user experience | pengalaman pengguna | diterjemahkan |

## Kapan Menerjemahkan, Kapan Tidak?

### Biasanya TIDAK diterjemahkan:
- Nama merek/produk (Google, WhatsApp)
- Istilah teknis yang umum di masyarakat (API, SEO)
- Nama file, kode, atau command

### Biasanya DITERJEMAHKAN:
- Kata kerja operasional (submit → kirim, download → unduh)
- Label UI (Settings → Pengaturan)
- Deskripsi dan konten naratif

## Cara Menyusun Glossary

1. Baca seluruh dokumen, tandai istilah berulang
2. Cari padanan terbaik (kamus, KBBI, sumber resmi)
3. Konsultasikan keputusan ambigu ke klien
4. Dokumentasikan: istilah, padanan, konteks, catatan
5. Gunakan untuk SEMUA terjemahan proyek

## Memastikan Konsistensi

- **Periksa ulang** terjemahan dengan mencari istilah di dokumen final
- **Gunakan find & replace** dengan hati-hati (hanya seluruh kata)
- **Review berpasangan**: penerjemah kedua memeriksa konsistensi
- **Catat keputusan**: kenapa istilah X diterjemahkan begini

## Istilah yang Sering Salah

- "email" → surat elektronik (pilih konsisten: email)
- "upload" → unggah / upload (pilih satu)
- "deadline" → tenggat waktu / deadline
- "meeting" → rapat / meeting

Tidak ada jawaban "benar" mutlak — yang penting **konsisten** dan **dokumentasikan** keputusannya.`,
  },
  {
    categorySlug: 'translation-localizer',
    slug: 'lokalisasi-ui-dan-konten',
    title: 'Lokalisasi UI, SEO & Konten Marketing',
    summary: 'Menerjemahkan antarmuka aplikasi, konten SEO-friendly, dan materi marketing untuk pasar lokal.',
    level: 'LANJUTAN',
    order: 3,
    content: `## Lokalisasi UI Aplikasi

### Tantangan Unik
1. **String pendek vs panjang**: tombol "Submit" (6 karakter) vs "Kirim" (4) — bahasa Indonesia biasanya lebih pendek, tapi bisa juga lebih panjang
2. **Konteks visual**: "Sign in" di tombol vs "Sign in" di link — konteksnya berbeda
3. **Placeholder dan variabel**: "Hi {name}" → "Halo {name}" — jangan rusak template
4. **Plural**: bahasa Indonesia tidak punya plural grammar seperti English — "1 item(s)"

### Aturan Lokalisasi UI
- Pertimbangkan ruang yang tersedia (tombol, sidebar)
- Jangan terjemahkan placeholder, kode, atau command
- Uji UI setelah terjemahan (jangan sampai teks terpotong)
- Gunakan file string terpisah (JSON) bukan hardcode

## Lokalisasi SEO

SEO lokal berbeda dari SEO global. Riset kata kunci dalam bahasa target!

### Langkah
1. Riset keyword Indonesia (Google Keyword Planner, Google Trends)
2. Terjemahkan dengan menargetkan keyword lokal
3. Jangan transliterasi literal dari keyword English
4. Perhatikan format: harga (Rp), tanggal (dd/mm/yyyy)
5. Meta title & description juga harus dilokalisasi

## Lokalisasi Konten Marketing

### Yang Perlu Disadari
- **Idiom tidak bisa diterjemahkan literal**
- **CTA harus lokal**: "Buy Now" → "Beli Sekarang" atau "Checkout"
- **Sensitivitas budaya**: warna, angka, referensi lokal
- **Personalisasi**: jangan rusak variabel seperti {first_name}
- **Panjang subject line**: hindari masuk spam folder

### Alur Kerja Campaign Lokal
1. Terjemahkan draft
2. Periksa brand voice & tone lokal
3. A/B test subject line
4. Review compliance lokal (misal: regulasi iklan)
5. Launch dan ukur performa`,
  },

  // ════════════════════════════════════════
  // VOICE OVER / VOICE TALENT
  // ════════════════════════════════════════
  {
    categorySlug: 'voice-over-voice-talent',
    slug: 'pengenalan-voice-over',
    title: 'Pengenalan Profesi Voice Over & Voice Talent',
    summary: 'Peran voice talent, jenis pekerjaan VO, dan keterampilan vokal yang dibutuhkan.',
    level: 'PENGANTAR',
    order: 1,
    content: `## Apa itu Voice Over?

Voice over (VO) adalah seni mengisi suara untuk berbagai konten: iklan, video tutorial, animasi, audiobook, sistem telepon, dan lainnya. Suara yang baik + teknik yang benar = VO yang profesional.

## Jenis Pekerjaan VO

1. **Iklan (TV/radio/digital)** — 15-60 detik, harus langsung memikat
2. **Narasi video/e-learning** — tutorial, dokumenter
3. **Audiobook** — durasi panjang, konsistensi karakter
4. **Animasi & game** — karakter, ekspresi berlebihan
5. **IVR/telepon** — sistem suara perusahaan
6. **Podcast intro/outro** — branding audio

## Keterampilan Vokal

- **Artikulasi**: setiap kata jelas, tidak "menggrogoti"
- **Pacing**: kecepatan bicara sesuai jenis konten (iklan: cepat; e-learning: 120-150 kata/menit)
- **Intonasi**: naik-turun natural, bukan monoton
- **Kontrol napas**: frasa panjang tanpa tersendat
- **Konsistensi**: suara sama dari take pertama sampai terakhir

## Peralatan Dasar

- Mikrofon condenser (USB kelas pro sudah cukup untuk pemula)
- Audio interface (jika pakai mic XLR)
- Pop filter & shock mount
- Ruang rekam dengan peredam suara (bisa DIY)
- DAW: Audacity (gratis), Adobe Audition, GarageBand

## Proses Kerja VO

1. Terima brief & script
2. Pelajari: tone, target audience, produk
3. Warm-up vokal (15 menit)
4. Rekam 3 take per segmen
5. Pilih take terbaik, edit (noise reduction, normalize)
6. Export sesuai spesifikasi (format, sample rate)
7. Deliver + script ber-timemark`,
  },
  {
    categorySlug: 'voice-over-voice-talent',
    slug: 'teknik-rekaman-dan-editing',
    title: 'Teknik Rekaman & Editing Audio Dasar',
    summary: 'Pengaturan ruang rekam, teknik mikrofon, dan editing audio: noise reduction, normalize, dan export.',
    level: 'DASAR',
    order: 2,
    content: `## Ruang Rekam yang Baik

Suara bagus dimulai dari ruang, bukan software. Target: sedikit pantulan suara (reverb) dan sedikit noise.

### Tips Ruang Rekam
- Kecil dan banyak bahan lembut (karpet, gorden, kasur)
- Hindari ruang kosong dengan dinding keras (kamar mandi!)
- Jauhkan dari AC, kulkas, dan jalan raya
- Meja tidak menyentuh dinding (isolasi getaran)

## Teknik Mikrofon

- **Jarak**: 10-20 cm dari mulut
- **Posisi**: mic sedikit di samping mulut (hindari "pop" konsonan P/B)
- **Angle**: 45 derajat lebih natural daripada frontal
- **Pop filter** wajib untuk konsonan plosif
- **Gain**: set agar volume normal di sekitar -12 dB (headroom)

## Warm-Up Vokal Sebelum Rekam

1. Hum pelan (mmm...) 2 menit
2. Artikulasi: "Pa Ta Ka La Ma Na" berulang
3. Lip trill: ucapkan brrr dengan bibir bergetar
4. Baca script keras-keras 1x sebelum rekam

## Editing Audio dengan Audacity

### 1. Noise Reduction
1. Seleksi 2-3 detik bagian diam (room tone)
2. Effect → Noise Reduction → Get Noise Profile
3. Seleksi seluruh audio → Noise Reduction → OK

### 2. Normalize
Effect → Normalize → -1 dB (peak) — samakan volume semua take

### 3. Trim & Align
- Hapus bagian salah/tidak perlu
- Rapikan jeda antar kalimat

## Spesifikasi Export Standar

| Format | Penggunaan |
|--------|-----------|
| WAV 44.1kHz / 16-bit | standar industri iklan |
| MP3 192-320 kbps | web & podcast |
| WAV 48kHz | video/film |

## Checklist Sebelum Kirim

- [ ] Tanpa noise & pop
- [ ] Volume konsisten seluruh file
- [ ] Tidak ada kata salah / lisp
- [ ] Durasi sesuai brief
- [ ] File dinamai sesuai aturan klien`,
  },
  {
    categorySlug: 'voice-over-voice-talent',
    slug: 'interpretasi-script',
    title: 'Interpretasi Script & Karakter Suara',
    summary: 'Membaca script dengan pemahaman, membangun karakter suara, dan menjaga konsistensi antar sesi.',
    level: 'LANJUTAN',
    order: 3,
    content: `## Bukan Sekadar Membaca

Voice over yang baik adalah **akting suara**. Sama skripnya, beda pembacaan = beda makna. Kemampuan interpretasi adalah pembeda VO amatir dan profesional.

## Analisis Script Sebelum Rekam

1. **Siapa yang berbicara?** — brand persona? narrator? karakter?
2. **Siapa pendengarnya?** — ibu-ibu rumah tangga? profesional IT?
3. **Apa tujuan?** — menjual? mengajar? menghibur?
4. **Apa mood-nya?** — hangat, energik, kalem, misterius?
5. **Di mana kata kuncinya?** — beri emphasis

## Teknik Emphasis

- **Stress**: tekankan kata penting ("HEMAT 50% bulan ini!")
- **Pause**: jeda sebelum angka/kata kunci membangun antisipasi
- **Pacing**: melambat di poin penting
- **Pitch**: naik untuk antusiasme, turun untuk seriousness

## Membangun Karakter Suara

### Parameter Karakter
1. **Pitch**: tinggi (anak, ceria) vs rendah (serius, otoritas)
2. **Tempo**: cepat (semangat) vs lambat (tenang, mewah)
3. **Tekstur**: lembut (perawatan kulit) vs tegas (produk karier)
4. **Energi**: tinggi (games) vs sedang (e-learning)

### Tips Konsisten Antar Sesi
- Catat parameter karakter di setiap proyek
- Rekam referensi take pertama sebagai anchor
- Lakukan warm-up yang sama tiap sesi
- Simpan template project DAW

## Skrip dengan Arah (Direction)

\`\`\`
[WARM, MEYAKINKAN]
Kulit sehat itu bukan mimpi.

[PACING CEPAT, ENERJIK]
Dengan GlowPlus, kulitmu berubah dalam 7 hari.

[CALM, CLOSE]
Coba sekarang. GlowPlus.
\`\`\`

## Self-Directed: Merekam Tanpa Arahan

Tidak selalu ada direktur di studio. Voice talent profesional harus bisa:
1. Menentukan arah sendiri dari brief
2. Rekam beberapa varian (warm, cheerful, serious)
3. Pilih varian terbaik, jangan kirim semua tanpa keputusan
4. Tandai timestamp di script untuk memudahkan klien`,
  },

  // ════════════════════════════════════════
  // EMAIL MANAGEMENT
  // ════════════════════════════════════════
  {
    categorySlug: 'email-management',
    slug: 'pengenalan-email-management',
    title: 'Pengenalan Email Management',
    summary: 'Mengelola inbox profesional: zero inbox, prioritas email, dan etika berbalas email bisnis.',
    level: 'PENGANTAR',
    order: 1,
    content: `## Apa itu Email Management?

Email management adalah keterampilan mengelola email secara sistematis agar komunikasi bisnis berjalan efektif: tidak ada email penting yang terlewat, tidak ada yang menumpuk, dan semua tertangani tepat waktu.

## Konsep Zero Inbox

Prinsip: **setiap email masuk harus diputuskan sekali** (GTD - Getting Things Done).

| Aksi | Kapan |
|------|-------|
| **Delete/Archive** | Tidak penting, tidak perlu tindakan |
| **Reply** | Bisa dibalas < 2 menit |
| **Delegate** | Bukan untuk kita, ada orang lain yang lebih tepat |
| **Defer** | Butuh waktu/tindakan, pindahkan ke todo list |
| **Do** | Tindakan yang tidak bisa didelegasikan |

## Aturan 2 Menit

Jika membalas email butuh waktu kurang dari 2 menit, **balas langsung**. Jangan simpan. Email yang disimpan "nanti" akan menggunung dan menjadi beban mental.

## Sistem Folder yang Efektif

Jangan buat 50 folder. Buat yang sedikit tapi jelas:

1. **Inbox** — hanya email belum diputuskan
2. **Action** — butuh tindakan dari kita
3. **Waiting** — menunggu orang lain
4. **Archive** — referensi selesai

## Etika Email Bisnis

- Balas dalam 24 jam (kalau tidak bisa penuh, balas konfirmasi dulu)
- Gunakan subject yang deskriptif
- Satu email = satu topik utama
- Tulis dengan jelas, jangan bertele-tele
- CC orang yang perlu tahu saja
- Jangan "Reply All" tanpa perlu`,
  },
  {
    categorySlug: 'email-management',
    slug: 'menulis-email-efektif',
    title: 'Menulis Email Bisnis yang Efektif',
    summary: 'Struktur email profesional, nada yang tepat, dan template untuk berbagai situasi bisnis.',
    level: 'DASAR',
    order: 2,
    content: `## Struktur Email Profesional

### 1. Subject Line
Kriteria: jelas, spesifik, actionable.
- Buruk: "Meeting" / "FYI" / "Hi"
- Baik: "Undangan Rapat Evaluasi Q3 — Kamis, 14 Agustus 10:00"

### 2. Salam
- Formal: "Yth. Bapak/Ibu [Nama],"
- Semi-formal: "Halo [Nama],"
- Sesuaikan dengan budaya perusahaan dan kenalan

### 3. Isi
Format BLUF (Bottom Line Up Front): **kesimpulan/kebutuhan di awal**, detail di belakang.

1. Kalimat pertama: tujuan email
2. Paragraf kedua: konteks ringkas
3. Paragraf ketiga: aksi yang diminta + deadline

### 4. Penutup
- Ajakan tindakan yang jelas: "Mohon konfirmasi sebelum Jumat, 16 Agustus."
- Terima kasih singkat
- Tanda tangan profesional: nama, jabatan, perusahaan, kontak

## Nada (Tone) yang Tepat

| Situasi | Nada |
|---------|------|
| Klaim/komplain klien | empatik, tidak defensif |
| Permintaan rekan kerja | sopan dan langsung |
| Follow-up pembayaran | tegas tapi tetap profesional |
| Penolakan | jelas tanpa menyinggung |
| Kabar buruk | terus terang + solusi |

## Template Siap Pakai

### Follow-Up (Penawaran)
\`\`\`
Subjek: Follow-Up Penawaran [Nama Produk] — [Nama Perusahaan]

Yth. Bapak/Ibu [Nama],

Berdasarkan pertemuan kami pada [tanggal], saya ingin
menindaklanjuti penawaran [produk] untuk [perusahaan].

Saya lampirkan proposal final. Mohon dapat di-review
sebelum [deadline]. Apakah ada pertanyaan yang bisa saya bantu?

Terima kasih atas waktunya.

Hormat saya,
[Nama]
\`\`\`

### Pengingat Pembayaran
\`\`\`
Subjek: Pengingat Pembayaran Invoice No. [Nomor]

Yth. [Nama],

Kami ingin mengingatkan bahwa pembayaran untuk invoice
[No.] sebesar [nominal] jatuh tempo pada [tanggal].

Jika pembayaran sudah dilakukan, mohon abaikan email ini.
Untuk pertanyaan, silakan balas email ini.

Terima kasih.
[Nama]
\`\`\`

## Checklist Sebelum Kirim

- [ ] Subjek jelas
- [ ] Penerima & CC tepat
- [ ] Lampiran terpasang
- [ ] Nama penerima benar
- [ ] Tanpa typo
- [ ] Deadline jelas`,
  },
  {
    categorySlug: 'email-management',
    slug: 'automation-dan-campaign',
    title: 'Email Automation, Filter & Campaign',
    summary: 'Otomatisasi email dengan filter dan rule, plus dasar-dasar email marketing campaign.',
    level: 'LANJUTAN',
    order: 3,
    content: `## Filter & Rule Email

Rule/filter otomatis menangani email sesuai aturan tanpa kita buka satu per satu.

### Contoh Rule
1. **Newsletter** → masuk folder "Baca Nanti"
2. **Email dari atasan** → label "Penting" + notifikasi
3. **Laporan sistem** → auto-forward ke departemen terkait
4. **Email berisi "invoice"** → label "Finance"
5. **Dari domain tertentu** → prioritas tinggi

### Aturan Rule yang Baik
- Buat aturan berbasis **kriteria yang stabil** (pengirim, domain, subject pattern)
- Jangan buat rule yang saling bertentangan
- Uji rule dengan email contoh
- Review rule sebulan sekali (banyak yang sudah tidak relevan)

## Auto-Reply & Template

- **Auto-reply cuti**: informatif, beri kontak pengganti, aktifkan di waktu tertentu
- **Template balasan umum**: simpan sebagai canned response
- **Signature**: seragam untuk semua tim

## Dasar Email Marketing

### Jenis Campaign
1. **Welcome series** — sapaan pertama kali subscribe
2. **Promo** — penawaran produk/diskon
3. **Abandoned cart** — pengingat keranjang ditinggalkan
4. **Follow-up** — setelah pembelian atau interaksi
5. **Re-engagement** — menghidupkan kembali pelanggan tidak aktif

### Metrik Penting
| Metrik | Arti | Target sehat |
|--------|------|-------------|
| Open rate | dibuka | 20-40% |
| Click rate (CTR) | diklik | 2-5% |
| Bounce rate | gagal terkirim | < 2% |
| Unsubscribe rate | berhenti | < 0.5% |

### Segmentasi
Kirim email berbeda ke grup berbeda: pelanggan baru, aktif, tidak aktif, sesuai minat. Email yang tersegmentasi bisa menghasilkan CTR 2x lebih tinggi.

## Deliverability

Agar email tidak masuk spam:
- Gunakan domain email yang sudah terverifikasi (bukan inbox@google)
- SPF, DKIM, DMARC terkonfigurasi
- Jangan gunakan kata spam ("FREE!!", "100% GRATIS", huruf kapital)
- Bersihkan daftar email rutin (email tidak valid)
- Keep engagement: kirim ke orang yang benar-benar berminat`,
  },

  // ════════════════════════════════════════
  // SCHEDULE MANAGEMENT
  // ════════════════════════════════════════
  {
    categorySlug: 'schedule-management',
    slug: 'pengenalan-schedule-management',
    title: 'Pengenalan Schedule Management',
    summary: 'Prinsip manajemen jadwal profesional: time blocking, prioritas, dan menghindari konflik jadwal.',
    level: 'PENGANTAR',
    order: 1,
    content: `## Apa itu Schedule Management?

Schedule management adalah seni mengatur waktu dan kalender agar semua kegiatan berjalan tepat waktu tanpa bentrok, dan sumber daya (orang, ruangan, waktu) dimanfaatkan optimal.

## Prinsip Dasar

### 1. Kalender Adalah Sumber Kebenaran
Semua jadwal ada di satu kalender bersama. Tidak boleh ada jadwal di luar kalender ("ngomong-ngomong di koridor").

### 2. Single Source of Truth
- Satu kalender untuk semua rapat
- Color-coded per tipe kegiatan
- Dibalas di satu platform

### 3. Buffer Time
Sisakan 15-30 menit antar meeting. Meeting selalu melebihi durasi, dan orang butuh waktu berpindah tempat.

## Time Blocking

Metode membagi hari menjadi blok-blok fokus:

| Waktu | Blok |
|-------|------|
| 08:00-09:00 | Deep work (proyek utama) |
| 09:00-12:00 | Rapat & kolaborasi |
| 12:00-13:00 | Istirahat |
| 13:00-15:00 | Email & admin |
| 15:00-17:00 | Deep work #2 |

### Manfaat Time Blocking
- Melindungi waktu fokus dari "meeting creep"
- Menghindari multitasking
- Estimasi beban kerja lebih akurat
- Deadline terlihat jelas

## Prioritas: Matriks Eisenhower

| | Mendesak | Tidak mendesak |
|---|---|---|
| **Penting** | Lakukan sekarang | Jadwalkan |
| **Tidak penting** | Delegasikan | Hapus |

Hanya 20% tugas yang benar-benar penting — fokus di sana.

## Menghindari Konflik Jadwal

1. **Cek kalender** sebelum mengundang meeting
2. **Gunakan scheduling tool** (Calendly dll) untuk meeting eksternal
3. **Tanya ketersediaan** sebelum menetapkan rapat bersama
4. **Perhatikan zona waktu** untuk peserta lintas negara
5. **Buat aturan meeting**: maksimal durasi, agenda wajib`,
  },
  {
    categorySlug: 'schedule-management',
    slug: 'teknik-penjadwalan',
    title: 'Teknik Penjadwalan & Kalender Efektif',
    summary: 'Color coding, mengelola undangan meeting, reschedule, dan tools penjadwalan otomatis.',
    level: 'DASAR',
    order: 2,
    content: `## Kalender Efektif

### Color Coding
Warna membantu otak memproses kalender lebih cepat:
- **Merah**: meeting penting/eksekutif
- **Kuning**: tugas deadline
- **Biru**: rapat internal rutin
- **Hijau**: waktu fokus/blocking
- **Abu-abu**: kegiatan pribadi

### Detail Undangan yang Lengkap
1. **Judul** deskriptif: "Rapat Evaluasi Q3 - Divisi Marketing"
2. **Agenda** di deskripsi
3. **Lokasi** jelas (ruang/link video conference)
4. **Peserta** yang benar
5. **Reminder** otomatis (default 15 menit)

## Mengelola Undangan Meeting

### Sebelum Mengirim Undangan
1. Pastikan topik & tujuan jelas
2. Cek ketersediaan peserta (tabel busy/free)
3. Tentukan durasi realistis
4. Siapkan agenda agar rapat efisien

### Saat Peserta Tidak Bisa Hadir
- Tawarkan 2-3 alternatif waktu
- Cari waktu yang mengakomodasi mayoritas
- Tetap catat peserta yang berhalangan + follow-up

## Prosedur Reschedule

1. Konfirmasi waktu baru SEBELUM mengirim undangan baru
2. Batalkan undangan lama dengan alasan singkat
3. Kirim undangan baru dengan judul sama + "Reschedule"
4. Beri tahu semua peserta (jangan hanya yang hadir)
5. Update semua dokumen terkait (agenda, pemesanan ruang)

## Scheduling Tool Otomatis

### Calendly / Cal.com / Google Appointment
- Tentukan slot tersedia (hari & jam)
- Bagikan link booking
- Peserta memilih slot sendiri
- Kalender otomatis terblokir + terupdate

### Aturan Penggunaan
- Blokir waktu pribadi di kalender sebelum membagikan link
- Set buffer antar slot
- Batasi jumlah booking per hari
- Integrasikan dengan kalender utama

## Meeting yang Efektif

### Agenda Wajib
1. Tujuan rapat
2. Poin diskusi + durasi per poin
3. Pemilik setiap agenda
4. Outcome yang diharapkan (keputusan? info saja?)

### Aturan Emas
- Tanpa agenda = jangan rapat
- Undang yang diperlukan saja
- Mulai tepat waktu
- Catat action items & follow-up`,
  },
  {
    categorySlug: 'schedule-management',
    slug: 'multi-timezone-dan-event',
    title: 'Zona Waktu, Event & Penjadwalan Kompleks',
    summary: 'Mengelola jadwal lintas zona waktu, event berskala besar, dan prioritas ganda.',
    level: 'LANJUTAN',
    order: 3,
    content: `## Penjadwalan Lintas Zona Waktu

Bekerja dengan tim atau klien global mengharuskan perhitungan zona waktu yang akurat.

### Zona Waktu Indonesia
- **WIB** (UTC+7): Jakarta, Bandung, Semarang
- **WITA** (UTC+8): Bali, Makassar, Balikpapan
- **WIT** (UTC+9): Jayapura, Ambon

### Perbandingan Internasional (vs WIB)
| Kota | Selisih |
|------|--------|
| Tokyo | +2 jam |
| Singapura | +1 jam |
| London | -6 jam |
| New York | -11 jam |

### Tips Menjadwalkan Global
1. **Sebutkan zona waktu eksplisit**: "14:00 WIB (07:00 UTC)"
2. **Gunakan world clock** di undangan kalender (otomatis ke zona waktu peserta)
3. **Hindari jam ekstrem** — cari overlap jam kerja kedua pihak
4. **Konversi dua kali** sebelum mengirim undangan
5. **Perhatikan daylight saving** di negara peserta (Inggris, AS)

## Penjadwalan Event Berskala Besar

### Persiapan Event (seminar, workshop, webinar)
1. **Tentukan tanggal & venue** sejak awal (minimal 2 bulan)
2. **Reservasi venue** + backup plan
3. **Timeline persiapan** mundur dari tanggal H: undangan, speaker, materi, teknis
4. **Dry-run** H-1: cek sound, slide, koneksi
5. **Run of Show (ROS)**: jadwal detil per menit di hari H

### Run of Show Contoh
\`\`\`
08:00  Setup & registrasi peserta
09:00  Pembukaan oleh MC (5 menit)
09:05  Keynote - Direktur (20 menit)
09:25  Sesi 1 - Workshop (60 menit)
10:25  Coffee break (15 menit)
10:40  Sesi 2 (45 menit)
11:25  Q&A (15 menit)
11:40  Penutupan
\`\`\`

## Menangani Prioritas Ganda

Saat semua mendadak penting, gunakan aturan berikut:

1. **Tanya deadline** — "kapan ini benar-benar dibutuhkan?"
2. **Komunikasikan konflik** ke stakeholder lebih awal
3. **Negosiasikan**: pindahkan meeting, atau pindahkan deadline
4. **Jangan diam** saat jadwal bentrok — konflik yang tidak dikomunikasikan = kegagalan yang tidak terhindarkan
5. **Dokumentasikan keputusan** penjadwalan ulang

## Checklist Jadwal Global

- [ ] Zona waktu semua peserta dikonversi dengan benar
- [ ] Daylight saving diperhitungkan
- [ ] Buffer antar meeting ada
- [ ] Semua peserta menerima undangan & reminder
- [ ] Backup contact tersedia untuk setiap sesi`,
  },

  // ════════════════════════════════════════
  // TRAVEL PLANNER
  // ════════════════════════════════════════
  {
    categorySlug: 'travel-planner',
    slug: 'pengenalan-travel-planner',
    title: 'Pengenalan Profesi Travel Planner',
    summary: 'Peran travel planner, proses perencanaan perjalanan, dan layanan yang diberikan ke klien.',
    level: 'PENGANTAR',
    order: 1,
    content: `## Apa itu Travel Planner?

Travel planner menyusun rencana perjalanan lengkap untuk klien: transportasi, akomodasi, itinerary, anggaran, hingga rencana cadangan. Tujuannya: klien tinggal jalan, semua sudah siap.

## Jenis Layanan

1. **Business travel** — perjalanan dinas: tiket, hotel, meeting schedule
2. **Leisure travel** — liburan: itinerary harian, rekomendasi tempat
3. **Group travel** — rombongan: koordinasi banyak orang
4. **Event-based** — konferensi, wedding, company outing

## Proses Perencanaan

### 1. Discovery
- Keinginan & kebutuhan klien
- Budget
- Tanggal & durasi
- Preferensi (hotel bintang, makanan, aktivitas)
- Batasan (fisik, alergi, visa)

### 2. Riset & Penyusunan
- Bandingkan minimal 3 opsi per komponen
- Susun itinerary harian dengan buffer waktu
- Cek legalitas: visa, dokumen, vaksin

### 3. Booking & Konfirmasi
- Booking tiket & hotel dengan kebijakan pembatalan fleksibel
- Simpan semua konfirmasi di satu tempat
- Kirim paket lengkap ke klien

### 4. Selama Perjalanan
- Siaga kontak 24 jam
- Backup plan jika ada pembatalan
- Dokumentasi pengeluaran

## Keterampilan yang Dibutuhkan

- Riset yang teliti (bukan sekadar googling)
- Kemampuan negosiasi & komunikasi vendor
- Manajemen detail (nomor booking, waktu, kontak)
- Penyusunan anggaran
- Kemampuan berpikir cepat saat terjadi masalah

## Etika Travel Planner

1. **Transparansi harga** — semua biaya jelas
2. **Jangan menjanjikan yang tidak bisa dipenuhi**
3. **Verifikasi semua booking** — sekali lagi sebelum berangkat
4. **Prioritaskan keselamatan klien** (keamanan area, regulasi)
5. **Dokumentasi tertulis** semua keputusan`,
  },
  {
    categorySlug: 'travel-planner',
    slug: 'penyusunan-itinerary',
    title: 'Penyusunan Itinerary & Anggaran',
    summary: 'Struktur itinerary harian yang realistis dan penyusunan anggaran perjalanan yang akurat.',
    level: 'DASAR',
    order: 2,
    content: `## Itinerary yang Realistis

Itinerary yang baik adalah yang **bisa dijalankan**, bukan yang penuh sesak. Rata-rata orang hanya bisa menikmati 2-3 destinasi per hari.

### Struktur Itinerary Harian

\`\`\`
HARI 1 — KAMIS, 14 AGUSTUS
08:00  Sarapan di hotel
09:00  Kunjungan Museum Nasional (2 jam)
11:30  Menuju kawasan Kota Tua (15 menit)
12:00  Makan siang - kafe lokal
13:30  Wisata Kota Tua (2 jam)
15:30  Istirahat di hotel
17:00  Sunset - rooftop bar
19:00  Makan malam - restoran [nama]
\`\`\`

### Aturan Emas Itinerary
1. **Buffer 30 menit** antar aktivitas
2. **Maksimal 3 aktivitas utama** per hari
3. **Waktu makan & istirahat** dimasukkan
4. **Kontak & alamat lengkap** setiap lokasi
5. **Plan B** untuk cuaca buruk / tempat tutup
6. Jam buka-tutup & hari libur tempat wisata selalu dicek

## Jenis Itinerary

### Ringkas (eksekutif)
Tabel: waktu, kegiatan, lokasi, kontak. Padat, cetak, dibawa jalan.

### Detail (leisure)
Deskripsi tiap tempat, rekomendasi foto, info tiket, tips lokal.

### Back-up plan
"Jika hujan" / "jika museum tutup" — alternatif langsung tersedia.

## Penyusunan Anggaran

### Kategori Biaya
1. Transportasi (tiket pesawat/kereta, transport lokal)
2. Akomodasi (hotel × malam)
3. Makan (estimasi per hari)
4. Tiket masuk & aktivitas
5. Asuransi perjalanan
6. Buffer darurat (10-15% dari total)

### Contoh Perhitungan
| Item | Biaya |
|------|-------|
| Pesawat PP | Rp 1.500.000 |
| Hotel 3 malam | Rp 1.200.000 |
| Makan (3 hari × Rp 150rb) | Rp 450.000 |
| Aktivitas & tiket | Rp 400.000 |
| Transport lokal | Rp 200.000 |
| Buffer 10% | Rp 375.000 |
| **Total** | **Rp 4.125.000** |

## Tracking Pengeluaran

Gunakan spreadsheet: tanggal, kategori, vendor, nominal, status (lunas/tertunda). Update setiap malam selama perjalanan.

## Checklist Sebelum Berangkat

- [ ] Tiket & hotel terkonfirmasi
- [ ] Itinerary dicetak & di-email
- [ ] Asuransi aktif
- [ ] Dokumen & identitas lengkap
- [ ] Uang tunai cadangan
- [ ] Charger & power bank`,
  },
  {
    categorySlug: 'travel-planner',
    slug: 'riset-destinasi-dan-troubleshooting',
    title: 'Riset Destinasi & Penanganan Masalah',
    summary: 'Riset mendalam destinasi, dokumen perjalanan, dan protokol menangani masalah saat traveling.',
    level: 'LANJUTAN',
    order: 3,
    content: `## Riset Destinasi yang Mendalam

### Yang Harus Di-riset Sebelum Merekomendasikan
1. **Keamanan**: area yang aman/tidak, tingkat kejahatan, saran pemerintah
2. **Kesehatan**: vaksin wajib, malaria, air minum, fasilitas kesehatan
3. **Budaya**: etika berpakaian, aturan tempat ibadah, perilaku lokal
4. **Cuaca**: musim hujan/kemarau, suhu, apa yang perlu dibawa
5. **Bahasa**: frasa dasar, aplikasi penerjemah, kesulitan komunikasi
6. **Transport**: cara keliling, harga taksi/ojek, aplikasi lokal

### Sumber Riset yang Dapat Dipercaya
- Situs resmi pariwisata pemerintah
- Forum traveler berpengalaman
- Blog perjalanan terbaru (bukan 5 tahun lalu)
- Grup komunitas (Facebook, Reddit)
- Google Maps review & street view

## Dokumen Perjalanan

### Ceklis Dokumen
- Paspor (masa berlaku minimal 6 bulan setelah pulang!)
- Visa (jika diperlukan)
- Tiket PP (cetak & digital)
- Bukti booking hotel
- Asuransi perjalanan
- Vaksinasi & surat keterangan (jika wajib)
- Uang tunai + kartu
- Salinan digital semua dokumen (cloud/email)

### Saran Keamanan Dokumen
- Bawa 2 salinan fisik (tas berbeda)
- Simpan scan di cloud + kirim ke email
- Beri tahu kontak darurat lokasi Anda

## Penanganan Masalah Saat Perjalanan

### Maskapai membatalkan penerbangan
1. Minta opsi rebooking oleh maskapai (biasanya gratis)
2. Tanyakan kompensasi sesuai regulasi
3. Hubungi asuransi untuk biaya hotel tambahan
4. Informasikan perubahan ke hotel/klien secepatnya

### Hotel overbooked
1. Minta hotel menyediakan akomodasi alternatif (kewajiban mereka)
2. Negosiasikan kompensasi (upgrade, refund)
3. Jangan terima upgrade pindah hotel tanpa transportasi

### Kehilangan paspor
1. Laporkan ke polisi setempat (laporan wajib)
2. Datang ke kedutaan/konsulat Indonesia
3. Minta paspor pengganti (emergency travel document)
4. Hubungi asuransi

## Protokol Komunikasi Masalah

1. **Tetap tenang** — panik tidak menyelesaikan
2. **Dokumentasikan** semua (email, tiket, bukti)
3. **Tulis kronologi** kejadian
4. **Hubungi pihak berwenang** sesuai urutan yang benar
5. **Komunikasikan ke klien/atasan** dengan jujur dan solusi

## Kontak Darurat yang Wajib Disimpan

- Kedutaan/konsulat Indonesia di negara tujuan
- Hotline asuransi perjalanan (24 jam)
- Nomor polisi & ambulans lokal
- Kontak hotel & maskapai
- Kontak keluarga/atasan di Indonesia`,
  },

  // ════════════════════════════════════════
  // SOCIAL MEDIA MANAGEMENT
  // ════════════════════════════════════════
  {
    categorySlug: 'social-media-management',
    slug: 'pengenalan-social-media',
    title: 'Pengenalan Social Media Management',
    summary: 'Peran social media manager, platform yang dikelola, dan strategi konten dasar.',
    level: 'PENGANTAR',
    order: 1,
    content: `## Apa itu Social Media Manager?

Social media manager merencanakan, membuat, menjadwalkan, dan menganalisis konten di berbagai platform media sosial untuk membangun brand dan mencapai tujuan bisnis.

## Tanggung Jawab Utama

1. **Strategi konten** — apa yang diposting, kapan, ke siapa
2. **Pembuatan konten** — copywriting, desain, video pendek
3. **Penjadwalan** — konten konsisten tanpa putus
4. **Engagement** — membalas komentar & DM
5. **Analisis** — metrik performa & pelaporan
6. **Komunitas** — membangun audiens yang loyal

## Platform & Karakteristiknya

| Platform | Konten | Audiens |
|----------|--------|---------|
| Instagram | visual, reels | 18-34 tahun |
| TikTok | video pendek | 16-30 tahun |
| Facebook | komunitas, text panjang | 30-55 tahun |
| LinkedIn | profesional | B2B, karier |
| X/Twitter | berita, diskusi | real-time |
| YouTube | video panjang | semua umur |

Pilih platform berdasarkan **di mana audiens Anda berada**, bukan semua platform sekaligus.

## Strategi Konten Dasar

### Formula Konten 80/20
- **80% nilai**: edukasi, hiburan, inspirasi
- **20% promosi**: penawaran produk/layanan

### Jenis Konten
1. **Edukasi** — tips, tutorial, infografis
2. **Behind the scenes** — proses kerja tim
3. **User-generated** — repost pelanggan
4. **Interactive** — polling, quiz, Q&A
5. **Promosi** — produk, diskon, event

## Content Pillar

Tentukan 3-5 tema besar agar konten tidak melenceng:
1. Produk/layanan
2. Tips & edukasi
3. Brand culture (kegiatan internal)
4. Testimoni & hasil pelanggan
5. Komunitas/event

## Konsistensi > Frekuensi

Lebih baik 3 konten bagus per minggu secara konsisten daripada 10 konten lalu hilang sebulan. Kalender konten (content calendar) adalah kuncinya.

## Etika Social Media Manager

1. **Transparansi**: jangan tipu-tipu engagement (beli follower)
2. **Responsif**: balas komentar & DM tepat waktu
3. **Krisis handling**: jangan hapus komentar negatif, tanggapi dengan profesional
4. **Hak cipta**: jangan repost konten tanpa izin
5. **Konsistensi brand voice**: satu suara di semua platform`,
  },
  {
    categorySlug: 'social-media-management',
    slug: 'copywriting-konten',
    title: 'Copywriting Konten Sosial Media',
    summary: 'Menulis caption, headline, dan CTA yang menarik perhatian dan menghasilkan engagement.',
    level: 'DASAR',
    order: 2,
    content: `## Prinsip Copywriting

Copywriting adalah seni menulis yang mendorong tindakan: komentar, klik, share, atau beli.

### AIDA Formula
1. **Attention** — tangkap perhatian (hook)
2. **Interest** — bangun ketertarikan
3. **Desire** — timbulkan keinginan
4. **Action** — minta tindakan (CTA)

## Menulis Hook yang Kuat

Hook adalah 3 detik pertama. Jika gagal, sisanya tidak dibaca.

### Contoh Hook
- Angka: "5 cara menghemat 50% biaya iklan"
- Kontradiksi: "Jangan fokus pada followers"
- Pertanyaan: "Masih bingung konten mau post apa?"
- Janji: "Dalam 5 menit, Anda bisa..."
- Cerita: "Saya hampir menyerah di bulan pertama..."

### Struktur Caption yang Baik
1. Hook di baris pertama (jangan terpotong di feed!)
2. Isi dengan value (poin, tips, cerita)
3. CTA di akhir: "Comment 'TIPS' untuk..." / "Save konten ini"
4. Hashtag relevan (5-10 cukup)

## Copy untuk Setiap Platform

### Instagram/TikTok
- Caption pendek atau storytelling
- Emoji secukupnya, konsisten dengan brand
- CTA: "Komen 👇" / "Save untuk nanti"

### LinkedIn
- Profesional, story-driven
- Paragraf pendek, satu ide per paragraf
- Hashtag: 3-5 relevan

### Facebook
- Lebih panjang diizinkan
- Diskusi & pertanyaan pembuka komentar

## CTA (Call to Action)

### Jenis CTA
| Tujuan | Contoh |
|--------|--------|
| Komentar | "Kamu tim mana? Komen di bawah!" |
| Save | "Save biar ga lupa tips ini" |
| Share | "Tag temanmu yang lagi butuh ini" |
| Klik link | "Link di bio ya!" |
| Beli | "Klik link, promo sampai minggu ini" |

## Kesalahan Copywriting Umum

1. Hook yang membosankan ("Halo teman-teman...")
2. Terlalu panjang tanpa struktur
3. Terlalu banyak emoji/hashtag
4. Copy center (meniru tanpa konteks)
5. CTA yang tidak jelas ("Jangan lupa follow ya")
6. Bahasa tidak konsisten dengan brand

## Riset: Belajar dari Konten Sukses

- Kumpulkan 20 konten viral di niche Anda (save & analisis)
- Pahami mengapa bekerja: hook? emosi? timing?
- Jangan salin, tapi pelajari polanya
- A/B test variasi untuk menemukan formula sendiri`,
  },
  {
    categorySlug: 'social-media-management',
    slug: 'analitik-dan-reporting',
    title: 'Analitik, Pelaporan & Kalender Konten',
    summary: 'Mengukur performa konten dengan metrik yang tepat dan menyusun laporan bulanan profesional.',
    level: 'LANJUTAN',
    order: 3,
    content: `## Metrik yang Benar

Manajer media sosial diukur dari metrik yang sesuai TAHAPAN funnel, bukan cuma like.

### Awareness
- **Reach**: berapa orang melihat
- **Impressions**: berapa kali dilihat
- **Follower growth**: pertumbuhan pengikut

### Engagement
- **Engagement rate**: (likes+comments+shares)/reach × 100%
- **Comments & shares**: bukti audiens benar-benar tertarik
- **Save rate**: konten yang dianggap bernilai

### Conversion
- **Click-through rate (CTR)**: klik ke link
- **Website traffic**: dari sosial media
- **Lead/Sales**: hasil akhir bisnis

## Vanity Metrics vs Real Metrics

- **Vanity** (indah di mata tapi tidak berarti): likes, followers, views
- **Real** (berarti untuk bisnis): engagement rate, CTR, leads, sales

Engagement rate 3-5% itu bagus. Like tanpa komentar tidak membuktikan apa-apa.

## Melaporkan ke Stakeholder

### Struktur Laporan Bulanan
1. **Ringkasan eksekutif** (3 kalimat)
2. **KPI utama**: angka vs target (tercapai/tidak)
3. **Perbandingan bulan lalu** (naik/turun + alasan)
4. **Top 3 konten** dengan analisis kenapa sukses
5. **Bottom 3 konten** dengan pelajaran
6. **A/B test & percobaan** bulan ini
7. **Rencana bulan depan**

### Presentasi Data
- Gunakan grafik, bukan tabel panjang
- Selalu sertakan konteks ("reach turun karena algoritma, tapi engagement naik")
- Highlight insight, bukan hanya angka
- Rekomendasi actionable: "fokus ke reels edukasi"

## Content Calendar

### Kolom yang Wajib
| Kolom | Contoh |
|-------|--------|
| Tanggal & jam | Senin, 10:00 WIB |
| Platform | Instagram |
| Format | Reels 30 detik |
| Tema/pilar | Edukasi |
| Judul/hook | "3 tanda feed-mu membosankan" |
| Caption | (naskah lengkap) |
| Visual | deskripsi/aset |
| Status | Draft / Approved / Scheduled / Published |
| Link/kampanye | Kode tracking |

### Jadwal Ideal
- Siapkan konten 1 bulan sekaligus
- Review mingguan
- Update setelah konten tayang (data performa)

## Evaluasi Konten: Stop-Start-Continue

- **Stop**: konten dengan engagement terendah berulang
- **Start**: hal baru untuk dicoba (format, topik, waktu)
- **Continue**: konten yang terbukti berhasil

Evaluasi ini membuat strategi terus berkembang berbasis data, bukan tebakan.`,
  },
]
