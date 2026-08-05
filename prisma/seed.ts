import { PrismaClient } from '@prisma/client'
import { MATERI_SEED } from './data/materi'
import { LATIHAN_SEED } from './data/latihan'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  await prisma.latihan.deleteMany()
  await prisma.materi.deleteMany()
  await prisma.project.deleteMany()
  await prisma.category.deleteMany()

  const categoryData = [
    { name: 'Data Analyst', slug: 'data-analyst', icon: 'bar-chart-2' },
    { name: 'Project Coordinator', slug: 'project-coordinator', icon: 'calendar' },
    { name: 'Secretary / Executive Assistant', slug: 'secretary-executive-assistant', icon: 'file-text' },
    { name: 'Data Entry Specialist', slug: 'data-entry-specialist', icon: 'database' },
    { name: 'Data Annotation / AI Trainer', slug: 'data-annotation-ai-trainer', icon: 'tag' },
    { name: 'Translation / Localizer', slug: 'translation-localizer', icon: 'globe' },
    { name: 'Voice Over / Voice Talent', slug: 'voice-over-voice-talent', icon: 'mic' },
    { name: 'Email Management', slug: 'email-management', icon: 'mail' },
    { name: 'Schedule Management', slug: 'schedule-management', icon: 'clock' },
    { name: 'Travel Planner', slug: 'travel-planner', icon: 'map-pin' },
    { name: 'Social Media Management', slug: 'social-media-management', icon: 'share-2' },
  ]

  const categories = []
  for (const c of categoryData) {
    const created = await prisma.category.create({ data: c })
    categories.push(created)
  }

  const cat = Object.fromEntries(categories.map((c) => [c.slug, c.id]))

  const projects = [
    // ═══════════════════════════════════════════════════
    // DATA ANALYST (6 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['data-analyst'], title: 'Rekap Data Penjualan Retail 3 Toko', level: 'EASY',
      brief: 'Kamu menerima 3 file CSV dari 3 toko retail (Toko A: format clean, Toko B: ada 50 baris duplikat, Toko C: kolom harga pakai koma ribuan). Rekap semua data ke satu spreadsheet, bersihkan, buat pivot table per toko & kategori, tambahkan grafik bar untuk top 5 produk, dan pie chart untuk distribusi penjualan per toko. Sertakan summary dashboard 1 halaman.',
      storyline: 'Manajer retail Budi minta rekap penjualan Q3 dari 3 toko. Data dari Toko B biasanya ada duplikat karena sistem POS lama. Toko C pakai format Excel Indonesia (koma sebagai desimal). Semua harus digabung dan bersih sebelum presentasi rapat senin.',
      guidance: '1) Import 3 CSV ke Excel. 2) Cek & hapus duplikat di data Toko B (Filter → Remove Duplicates). 3) Ubah format harga Toko C dari koma ke titik (Find & Replace). 4) Buat Master Sheet gabungan. 5) Pivot Table: Rows = Kategori, Columns = Toko, Values = SUM(Harga). 6) Bar chart top 5 produk. 7) Pie chart distribusi per toko. 8) Dashboard summary 1 halaman.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Pivot Table', 'Chart Builder']),
      criteria: JSON.stringify(['3 data toko tergabung tanpa duplikat', 'Format harga konsisten', 'Pivot table per toko & kategori', 'Bar chart top 5 produk', 'Pie chart distribusi', 'Summary dashboard']),
    },
    {
      categoryId: cat['data-analyst'], title: 'Dashboard Analisis Performa Marketing Digital', level: 'MEDIUM',
      brief: 'Data mentah dari 4 channel marketing (Google Ads, Instagram, Facebook, TikTok) selama 6 bulan tersedia. Format berbeda-beda: Google Ads pakai CSV, Instagram export JSON, Facebook Excel, TikTok manual input. Buat dashboard interaktif dengan slicer untuk filter per channel & bulan, hitung CTR, CPC, Conversion Rate, ROI per channel, dan tren bulanan. Sertakan rekomendasi alokasi budget Q1 2025.',
      storyline: 'Head of Marketing Rina butuh dashboard untuk presentasi board meeting. Data dari 4 channel tersimpan di format berbeda. Ia butuh analisis ROI untuk putuskan alokasi budget Q1. Data Instagram mentah dari JSON export, perlu di-parse dulu.',
      guidance: '1) Import semua data ke sheet terpisah. 2) Normalisasi kolom (tanggal, spend, impressions, clicks, conversions). 3) Hitung metrik: CTR = clicks/impressions, CPC = spend/clicks, CR = conversions/clicks, ROI = (revenue-spend)/spend. 4) Gabungkan ke Master Data. 5) Dashboard: chart ROI per channel, tren bulanan, slicer channel & bulan. 6) Rekomendasi budget berdasarkan ROI tertinggi.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Power Query', 'Slicer', 'Chart Builder']),
      criteria: JSON.stringify(['Data 4 channel tergabung & dinormalisasi', '4 metrik terhitung (CTR, CPC, CR, ROI)', 'Dashboard interaktif dengan slicer', 'Tren 6 bulan visual', 'Rekomendasi budget Q1 2025']),
    },
    {
      categoryId: cat['data-analyst'], title: 'Analisis Penjualan E-Commerce Multi Vendor', level: 'MEDIUM',
      brief: 'Platform e-commerce punya 5 vendor utama dengan data transaksi Q4 2024. Data vendor berbeda format: ada yang pakai SKU manual, ada yang pakai barcode. Return rate dan customer review tersedia terpisah. Buat analisis komprehensif: total sales, AOV, return rate, customer satisfaction score per vendor, dan rekomendasi strategi untuk vendor underperforming.',
      storyline: 'Product Manager e-commerce butuh laporan vendor performance untuk meeting dengan 5 vendor. Beberapa vendor protes karena rating mereka "tidak adil". Kamu perlu data-driven analysis yang objektif.',
      guidance: '1) Import data 5 vendor. 2) Standardisasi format SKU. 3) Hitung: Total Sales, AOV = total_sales/orders, Return Rate = returns/total_orders, CSAT = avg(review_score). 4) Buat perbandingan vendor (radar chart). 5) Identifikasi vendor underperforming (return rate >5% atau CSAT <3.5). 6) Rekomendasi: vendor dengan CSAT rendah perlu quality check.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Data Visualization', 'Statistical Analysis']),
      criteria: JSON.stringify(['5 vendor teranalisis', '4 metrik per vendor', 'Radar chart perbandingan', 'Identifikasi underperforming', 'Rekomendasi data-driven']),
    },
    {
      categoryId: cat['data-analyst'], title: 'FMCG Distribution Sales Analytics', level: 'COMPLEX',
      brief: 'Data sales FMCG 3 wilayah (Jawa, Sumatera, Kalimantan) selama 12 bulan. Data mentah: 3 file Excel dengan format kolom berbeda, ada missing values di bulan Agustus (cut-off sistem), dan outlier harga di Kalimantan. Bersihkan data, analisis tren seasonal, buat time series decomposition, prediksi Q1 2025 dengan 2 metode (moving average & exponential smoothing), dan buat laporan komprehensif dengan rekomendasi distribusi.',
      storyline: 'Director of Sales FMCG butuh laporan distribusi regional. Data Agustus hilang karena migrasi sistem. Harga Kalimantan outlier karena ada promo bundling. Ia butuh prediksi Q1 untuk planning distribusi.',
      guidance: '1) Import & normalisasi 3 file. 2) Impute missing values Agustus (rata-rata Jul & Sep). 3) Handle outlier Kalimantan (IQR method). 4) Time series decomposition (trend, seasonal, residual). 5) Moving average 3 bulan. 6) Exponential smoothing (alpha=0.3). 7) Prediksi Q1 2025. 8) Rekomendasi distribusi per wilayah.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Statistical Analysis', 'Forecasting', 'Data Cleaning']),
      criteria: JSON.stringify(['Data 3 wilayah bersih & ternormalisasi', 'Missing values terhandle', 'Outlier teridentifikasi', 'Time series decomposition', '2 metode prediksi', 'Laporan komprehensif']),
    },
    {
      categoryId: cat['data-analyst'], title: 'F&B Outlet Daily Sales Tracking Dashboard', level: 'EASY',
      brief: 'Buat dashboard harian untuk 5 outlet F&B. Data POS: ada yang pakai format 24 jam, ada yang pakai format 12 jam (AM/PM). Kolom "Items Sold" kadang berisi "N/A" untuk hari libur. Hitung: daily revenue, average transaction value, top 3 items, food cost percentage. Dashboard harus bisa filter per tanggal & outlet.',
      storyline: 'Manager F&B Andi butuh dashboard harian untuk monitoring 5 outlet. Data POS bermasalah: format waktu tidak konsisten, data hari libur kosong. Ia butuh dashboard yang clean untuk presentasi ke owner.',
      guidance: '1) Import data 5 outlet. 2) Standarisasi format waktu (semua 24 jam). 3) Handle "N/A" → kosongkan atau 0. 4) Hitung: Revenue, ATV = revenue/transactions, Top 3 items, Food Cost % = (food_cost/revenue)*100. 5) Dashboard: bar chart revenue per outlet, tabel top items, gauge food cost %. 6) Filter per tanggal & outlet.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Dashboard Design', 'Data Cleaning']),
      criteria: JSON.stringify(['Data 5 outlet bersih', 'Format waktu konsisten', '4 metrik terhitung', 'Dashboard dengan filter', 'Visual profesional']),
    },
    {
      categoryId: cat['data-analyst'], title: 'Fashion Omnichannel Analytics Report', level: 'COMPLEX',
      brief: 'Brand fashion punya data penjualan online (Shopee, Tokopedia, Website) dan offline (3 store locations). Data online: JSON export, data offline: Excel manual. Beberapa transaksi online punya data customer tidak lengkap (missing address). Buat laporan komprehensif: revenue per channel, customer journey analysis (online-to-offline, offline-to-online), customer acquisition cost, lifetime value estimation, dan rekomendasi channel strategy untuk 2025.',
      storyline: 'CMO brand fashion butuh laporan omnichannel untuk strategi 2025. Data online dari 3 marketplace + website, data offline dari 3 toko. Beberapa customer beli online tapi return di toko (cross-channel). Ia butuh pemahaman customer journey.',
      guidance: '1) Import & gabungkan data online (JSON) & offline (Excel). 2) Handle missing customer data (impute atau flag). 3) Revenue per channel. 4) Customer journey mapping: online-only, offline-only, cross-channel. 5) CAC = total_marketing_spend/new_customers. 6) LTV estimation (avg order value × purchase frequency × avg lifetime). 7) Rekomendasi channel strategy.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Data Visualization', 'Analytics Tools', 'JSON Parser']),
      criteria: JSON.stringify(['Data omnichannel tergabung', 'Customer journey teridentifikasi', 'CAC & LTV terhitung', 'Rekomendasi channel strategy', 'Laporan 5+ halaman']),
    },

    // ═══════════════════════════════════════════════════
    // PROJECT COORDINATOR (6 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['project-coordinator'], title: 'Action Item Tracker & MoM Rapat Kick-Off', level: 'EASY',
      brief: 'Rapat kick-off proyek website redesign baru saja selesai (90 menit, 6 peserta). Kamu hadir sebagai notulis. Buat MoM lengkap: daftar hadir, agenda, poin diskusi per agenda, keputusan, dan action items dengan owner & deadline. Action items harus ada status tracking (Not Started / In Progress / Done) dan conditional formatting untuk deadline yang sudah lewat.',
      storyline: 'Kamu adalah koordinator proyek junior. Rapat kick-off website redesign dengan 6 orang (PM, 2 dev, designer, QA, client). Beberapa action items urgent (deadline 3 hari). PM minta MoM rapi sebelum rapat berikutnya.',
      guidance: '1) Buat MoM template: Header (judul, tanggal, peserta), Agenda, Diskusi per agenda, Keputusan, Action Items. 2) Minimal 6 action items. 3) Tabel action items: Task, Owner, Deadline, Status, Notes. 4) Conditional formatting: merah jika deadline lewat & status ≠ Done. 5) Export ke PDF.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft Excel', 'Google Docs', 'Google Sheets']),
      criteria: JSON.stringify(['MoM format standar', 'Minimal 6 action items', 'Owner & deadline jelas', 'Conditional formatting', 'Export PDF rapi']),
    },
    {
      categoryId: cat['project-coordinator'], title: 'Project Timeline & Risk Register Aplikasi Mobile', level: 'MEDIUM',
      brief: 'Proyek peluncuran aplikasi mobile 3 bulan (Maret-Mei 2025). Buat: Gantt chart dengan 3 phase (Discovery, Development, Launch), masing-masing phase punya 3-4 milestone. Risk register minimal 10 risiko (teknis, resource, external) dengan probability-impact matrix. RACI matrix untuk 8 deliverables. Semua harus konsisten dan bisa dipresentasikan ke stakeholder.',
      storyline: 'PM senior minta kamu menyiapkan dokumen perencanaan proyek mobile app untuk presentasi ke client. Client detail-oriented dan butuh Gantt chart yang jelas, risk register yang komprehensif, dan RACI matrix yang valid.',
      guidance: '1) Gantt chart: 3 phase, 10+ milestone, dependencies antar milestone. 2) Risk register: 10+ risiko, probability (1-5), impact (1-5), risk score, mitigation plan. 3) RACI matrix: 8 deliverables × 5 role (R, A, C, I). 4) Konsistensi nama antar dokumen.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Gantt Chart Template', 'Risk Assessment Template']),
      criteria: JSON.stringify(['Gantt chart 3 phase dengan milestone', 'Risk register 10+ risiko', 'Probability-impact matrix', 'RACI matrix 8 deliverables', 'Konsistensi antar dokumen']),
    },
    {
      categoryId: cat['project-coordinator'], title: 'Agile Sprint Planning Tracker', level: 'MEDIUM',
      brief: 'Tim development 5 orang (2 frontend, 2 backend, 1 QA) beralih ke Scrum. Buat template sprint planning yang bisa dipakai berulang: Sprint Goal, Product Backlog (minimal 20 user stories dengan story points), Sprint Backlog (pilih 10 stories untuk sprint pertama), velocity tracking sheet, burndown chart template, dan Definition of Done yang jelas.',
      storyline: 'CTO minta kamu sebagai Scrum Master pertama di tim. Tim belum pernah pakai Agile. Sprint pertama harus sukses sebagai contoh. Template harus mudah dipahami semua orang.',
      guidance: '1) Sprint Goal template. 2) Product Backlog: 20 user stories (As a... I want... So that...) + story points (1-13). 3) Sprint Backlog: pilih 10 stories, alokasikan ke 5 orang. 4) Velocity tracking: input story points per sprint. 5) Burndown chart: total points vs hari. 6) Definition of Done: 5+ kriteria.',
      toolsNeeded: JSON.stringify(['Jira/Trello', 'Microsoft Excel', 'Google Sheets', 'Miro']),
      criteria: JSON.stringify(['Sprint Goal template', '20 user stories dengan story points', 'Sprint Backlog 10 stories', 'Velocity tracking', 'Burndown chart', 'Definition of Done']),
    },
    {
      categoryId: cat['project-coordinator'], title: 'Client Onboarding Milestone Tracker', level: 'EASY',
      brief: 'Divisi BD akan onboarding 5 klien baru bulan ini. Setiap klien punya tahapan: Welcome Packet (H+1), Kickoff Meeting (H+3), First Delivery (Minggu ke-2), Review (Minggu ke-3), Go-Live (Minggu ke-4). Buat tracker visual dengan timeline, template email per milestone, dan checklist dokumen yang harus disiapkan per tahap.',
      storyline: 'Business Development Manager Sari butuh tracker untuk 5 klien baru yang masuk bulan ini. Setiap klien harus onboarding on-time. Ia butuh template email agar tidak bolak-balik nulis email yang sama.',
      guidance: '1) Tracker: 5 kolom (klien), 5 baris (milestone), warna hijau = selesai, kuning = in progress, merah = belum mulai. 2) Template email per milestone: Welcome, Kickoff Invite, Delivery Confirmation, Review Request, Go-Live Announcement. 3) Checklist dokumen per tahap (3-5 dokumen).',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Google Docs', 'Email Template']),
      criteria: JSON.stringify(['Tracker visual 5 klien × 5 milestone', 'Color coding status', '5 template email', 'Checklist dokumen per tahap', 'Timeline visual']),
    },
    {
      categoryId: cat['project-coordinator'], title: 'Vendor & Resource Management Dashboard', level: 'COMPLEX',
      brief: 'Proyek konstruksi melibatkan 8 vendor (listrik, plumbing, HVAC, dll) dan 12 resource person. Data: vendor = nama, status kontrak (active/expired/pending), nilai kontrak, tempo pembayaran. Resource = nama, skill, availability (available/busy/leave), hourly rate. Budget total Rp 500 juta. Buat dashboard: vendor status, resource utilization, budget utilization per vendor, dan alert jika vendor kontrak expired atau resource utilization >90%.',
      storyline: 'Project Director proyek konstruksi butuh dashboard real-time. Vendor #3 kontraknya expired minggu lalu tapi masih kerja. Resource utilization tim electrical sudah 95%. Budget sudah terpakai 60% padahal proyek baru 40% selesai.',
      guidance: '1) Database 8 vendor: status, nilai, tempo. 2) Database 12 resource: skill, availability, rate. 3) Budget tracker: total Rp 500 juta, alokasi per vendor. 4) Dashboard: pie chart vendor status, bar chart utilization, gauge budget. 5) Alert system: vendor expired, utilization >90%.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Dashboard Design', 'Conditional Formatting']),
      criteria: JSON.stringify(['Database 8 vendor lengkap', 'Database 12 resource lengkap', 'Budget utilization tracker', 'Alert vendor expired', 'Alert utilization >90%', 'Dashboard visual']),
    },
    {
      categoryId: cat['project-coordinator'], title: 'Project Risk Assessment & Mitigation Plan', level: 'COMPLEX',
      brief: 'Proyek implementasi ERP 6 bulan dengan budget Rp 2 Miliar. Identifikasi 15 risiko (teknis: integrasi sistem, data migration; resource: turnover developer; external: regulasi pemerintah; financial: cost overrun). Buat probability-impact matrix (5×5), mitigation plan per risiko, contingency budget 10% dari total, dan monitoring plan mingguan.',
      storyline: 'Direktur IT butuh risk assessment sebelum presentasi ke board. Board akan tanya "apa risiko terbesar dan bagaimana mitigasinya?". Risk assessment harus komprehensif dan profesional.',
      guidance: '1) Identifikasi 15 risiko (5 teknis, 4 resource, 3 external, 3 financial). 2) Probability (1-5) & Impact (1-5) per risiko. 3) Risk score = P × I. 4) Mitigation plan: avoid, mitigate, transfer, accept. 5) Contingency budget: 10% × Rp 2 M = Rp 200 juta. 6) Monitoring: weekly risk review, risk owner per risiko.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Risk Assessment Template', 'Google Sheets', 'Presentation Tool']),
      criteria: JSON.stringify(['15 risiko teridentifikasi', 'Probability-impact matrix 5×5', 'Mitigation plan per risiko', 'Contingency budget Rp 200 juta', 'Monitoring plan mingguan', 'Format presentasi board']),
    },

    // ═══════════════════════════════════════════════════
    // SECRETARY / EA (6 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Rencana Meeting Board & Undangan Resmi', level: 'EASY',
      brief: 'Board quarterly meeting minggu depan (Kamis, 14:00-17:00). 8 board member, 3 agenda utama: (1) Laporan keuangan Q3, (2) Strategi ekspansi 2025, (3) Approval budget marketing. Siapkan: agenda rapat, daftar hadir, surat undangan resmi dengan kop surat, dan layout ruangan (2 meja panjang U-shape, 10 kursi).',
      storyline: 'Kamu adalah sekretaris direksi. CEO minta persiapan rapat board quarterly selesai hari Jumat. Surat undangan harus dikirim paling lambat H-5 sebelum rapat.',
      guidance: '1) Agenda rapat: 3 item dengan waktu per item. 2) Daftar hadir: 8 nama, jabatan, tanda tangan. 3) Surat undangan: kop surat, nomor surat, tanggal, perihal, isi, salam penutup. 4) Layout ruangan: U-shape, nama di kursi.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Canva']),
      criteria: JSON.stringify(['Agenda 3 topik dengan waktu', 'Daftar hadir 8 orang', 'Surat undangan resmi + kop surat', 'Layout ruangan U-shape', 'Siap kirim']),
    },
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Executive Travel & Meeting Pack 2 Hari', level: 'MEDIUM',
      brief: 'CEO akan business trip 2 hari ke Jakarta (Rabu-Kamis). Meeting dengan 3 klien: (1) PT Maju Jaya - Kamis 09:00, (2) CV Sukses - Kamis 14:00, (3) PT Global - Kamis 16:30. Siapkan: itinerary jam demi jam, rekomendasi hotel bintang 4 dekat venue, meeting brief per klien (profil, riwayat kerja sama, poin penting), expense tracker, dan packing list.',
      storyline: 'CEO butuh meeting pack lengkap. Ia detail-oriented dan tidak suka ketinggalan informasi. Meeting brief harus memuat semua info klien agar CEO bisa langsung ngobrol tanpa briefing tambahan.',
      guidance: '1) Itinerary: Rabu (perjalanan, check-in, prep) & Kamis (3 meeting + lunch + travel). 2) Hotel: 3 opsi bintang 4, harga, jarak ke venue. 3) Meeting brief: profil perusahaan, riwayat, contact person, topik diskusi, deal points. 4) Expense: transport, hotel, meals, entertainment. 5) Packing list.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft Excel', 'Google Maps', 'Travel Booking Sites']),
      criteria: JSON.stringify(['Itinerary 2 hari detail', '3 opsi hotel', 'Meeting brief 3 klien', 'Expense tracker', 'Packing list', 'Dokumen siap cetak']),
    },
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Corporate Event Planning & Coordination', level: 'MEDIUM',
      brief: 'Annual dinner perusahaan untuk 200 karyawan, budget Rp 150 juta, tanggal 20 Desember. Rencanakan: (1) 3 opsi venue dengan perbandingan harga & fasilitas, (2) vendor catering (3 opsi, 2 menu), (3) MC script (opening 5 min, acara inti, closing), (4) door agenda, (5) budget breakdown detail.',
      storyline: 'HR Director butuh planning annual dinner secepatnya. Budget ketat (Rp 150 juta untuk 200 orang = Rp 750/orang). Vendor harus reliable dan ada referensi.',
      guidance: '1) Venue: 3 opsi, nama, kapasitas, harga, lokasi, fasilitas. 2) Catering: 3 vendor, menu A & B, harga/pax. 3) MC script: opening (sapaan, visi perusahaan), acara inti (awards, games), closing. 4) Door agenda: jam per acara. 5) Budget: venue + catering + MC + dekorasi + entertainment + buffer.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Microsoft Word', 'Google Sheets', 'Vendor Communication']),
      criteria: JSON.stringify(['3 opsi venue terbanding', '3 opsi catering', 'MC script lengkap', 'Door agenda', 'Budget breakdown Rp 150 juta']),
    },
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Executive Briefing & Document Preparation', level: 'EASY',
      brief: 'Investor dari Singapura akan berkunjung besok. CEO butuh briefing pack: (1) Company profile 2 halaman (sejarah, visi-misi, produk, milestone), (2) Financial summary 3 tahun (revenue, profit, growth rate), (3) Team structure chart (C-level + 5 departemen), (4) Presentasi 10 slide (company overview, market opportunity, financial, team, ask).',
      storyline: 'CEO dapat info investor singgah besok pagi. Briefing pack harus selesai hari ini. Desain harus profesional dan impressive.',
      guidance: '1) Company profile: sejarah (2018-sekarang), visi-misi, 3 produk unggulan, milestone. 2) Financial: tabel 3 tahun, growth rate, chart. 3) Org chart: CEO, CTO, CFO, COO, CMO + 5 departemen. 4) Presentasi: 10 slide, desain konsisten, data-driven.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft PowerPoint', 'Microsoft Excel', 'Canva']),
      criteria: JSON.stringify(['Company profile 2 halaman', 'Financial summary 3 tahun', 'Team structure chart', 'Presentasi 10 slide', 'Desain profesional']),
    },
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Board Meeting Documentation & Follow-Up', level: 'COMPLEX',
      brief: 'Board meeting 3 jam dengan 8 agenda. Hadir: 8 board member + 3 direktur. Kamu notulis. Setelah rapat: (1) MoM detail per agenda (diskusi, pro/kontra, keputusan), (2) 15 action items dengan owner & deadline, (3) distribusi notulensi ke 11 orang via email, (4) weekly tracking report untuk 4 minggu ke depan.',
      storyline: 'Board meeting ini krusial: ada keputusan strategis tentang akuisisi perusahaan lain. MoM harus sangat detail karena bisa jadi referensi hukum. Action items harus terpantau.',
      guidance: '1) MoM: per agenda, daftar pembicara, poin diskusi, pro/kontra, keputusan. 2) 15 action items: task, owner, deadline, priority, status. 3) Email distribusi: template email + lampiran MoM PDF. 4) Weekly tracking: tabel status update per minggu.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft Excel', 'Email', 'PDF Export']),
      criteria: JSON.stringify(['MoM detail 3 jam, 8 agenda', '15 action items terdistribusi', 'Email ke 11 orang', 'Weekly tracking 4 minggu', 'Format hukum-ready']),
    },
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Travel Itinerary & Expense Reimbursement Pack', level: 'EASY',
      brief: 'Direktur akan ke Surabaya 3 hari 2 malam (Senin-Rabu) untuk kunjungan pabrik. Siapkan: (1) Itinerary detail (jam per kegiatan), (2) Rekomendasi hotel dekat pabrik, (3) Transport: pesawat + rental mobil, (4) Expense reimbursement form (template standar perusahaan), (5) Receipts tracker dengan kategori biaya (transport, hotel, meals, entertainment).',
      storyline: 'Direktur operasional butuh persiapan perjalanan. Ia ingin semua serba praktis dan tinggal print. Expense form harus sesuai format accounting.',
      guidance: '1) Itinerary: Senin (terbang, check-in, rapat lokal), Selasa (kunjungan pabrik), Rabu (rapat follow-up, pulang). 2) Hotel: 3 opsi, harga, fasilitas. 3) Transport: jadwal pesawat, rental mobil. 4) Expense form: header perusahaan, tabel item, total, tanda tangan. 5) Receipts tracker: tanggal, vendor, kategori, nominal, receipt.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft Excel', 'Google Maps']),
      criteria: JSON.stringify(['Itinerary 3 hari detail', '3 opsi hotel', 'Expense form standar', 'Receipts tracker', 'Siap print & pakai']),
    },

    // ═══════════════════════════════════════════════════
    // DATA ENTRY SPECIALIST (6 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['data-entry-specialist'], title: 'Pembersihan Master Database Client 500 Record', level: 'EASY',
      brief: 'Database client 500+ record bermasalah: (1) 35 record duplikat (nama sama, email beda), (2) format telepon campur: +62xxx, 08xxx, 62xxx, (3) 28 email invalid (misspelling, missing @), (4) beberapa record kosong di kolom "Perusahaan". Bersihkan semua, buat laporan perubahan, dan master sheet final.',
      storyline: 'Database client kotor karena di-input manual selama 2 tahun oleh 3 orang berbeda. Marketing butuh database bersih untuk campaign email bulan depan.',
      guidance: '1) Identifikasi duplikat (nama + email mirip). 2) Pilih record terbaik, hapus duplikat. 3) Standarisasi telepon ke format +62xxx. 4) Validasi email regex. 5) Isi kolom kosong dari sumber lain atau flag "Unknown". 6) Laporan: jumlah perubahan per kategori. 7) Master sheet final bersih.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Data Cleaning Formula', 'Regex']),
      criteria: JSON.stringify(['0 duplikat', 'Format telepon konsisten +62', 'Email valid 100%', 'Kolom Perusahaan terisi', 'Laporan perubahan', 'Master sheet final']),
    },
    {
      categoryId: cat['data-entry-specialist'], title: 'Standarisasi Katalog Produk Multi-Supplier 800 Item', level: 'MEDIUM',
      brief: 'Gabungkan katalog 800 produk dari 3 supplier. Masalah: (1) Supplier A pakai nama produk panjang, Supplier B pakai SKU, Supplier C pakai nama pendek. (2) Kategori berbeda: A pakai "Elektronik", B pakai "Gadget", C pakai "Tech". (3) Gambar: A resolusi tinggi, B kecil, C tidak ada. Buat naming convention, konsolidasi kategori, standarisasi gambar.',
      storyline: 'E-commerce akan launch website baru. Katalog dari 3 supplier harus jadi satu database standar sebelum import ke CMS.',
      guidance: '1) Analisis format nama 3 supplier. 2) Buat naming convention: [Kategori]-[Brand]-[NamaProduk]-[SKU]. 3) Konsolidasi kategori: buat mapping table. 4) Standarisasi gambar: resize ke 800×800px, flag yang tidak ada. 5) Validasi: cek harga, stok, deskripsi. 6) Export siap import.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Image Editor', 'Batch Resizer', 'CMS Platform']),
      criteria: JSON.stringify(['800 produk terstandarisasi', 'Naming convention konsisten', 'Kategori terkonsolidasi', 'Gambar seragam 800×800', 'Siap import ke CMS']),
    },
    {
      categoryId: cat['data-entry-specialist'], title: 'Data Entry Invoice & Faktur Pajak 200 Transaksi', level: 'EASY',
      brief: 'Input 200 transaksi invoice dari Q3 2024 ke spreadsheet. Data: foto-foto invoice (kualitas bervariasi, ada yang blur). Kolom: nomor invoice, tanggal, vendor, deskripsi, jumlah, PPn, total. Cross-check nomor invoice sequential, pastikan PPn 11%, buat summary per vendor dan per bulan.',
      storyline: 'Accounting butuh input 200 invoice Q3 sebelum deadline tax report. Beberapa invoice foto dari HP kualitas rendah. Nomor invoice harus sequential untuk audit.',
      guidance: '1) Input 200 invoice dari foto. 2) Validasi nomor invoice sequential (ada gap = missing). 3) Hitung PPn = jumlah × 11%. 4) Total = jumlah + PPn. 5) Cross-check: total per vendor, total per bulan. 6) Flag invoice dengan foto blur untuk review.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Accounting Software', 'Calculator', 'OCR Tool']),
      criteria: JSON.stringify(['200 transaksi terinput', 'Nomor invoice valid & sequential', 'PPn 11% benar', 'Summary per vendor & bulan', 'Flag invoice bermasalah']),
    },
    {
      categoryId: cat['data-entry-specialist'], title: 'Master Data Migration Legacy System', level: 'COMPLEX',
      brief: 'Migrasi 1200 data customer dari sistem legacy (Access DB) ke sistem baru (CRM). Masalah: (1) field names berbeda (legacy: "NamaPlgn", baru: "customer_name"), (2) ada 150 record dengan format nama "LASTNAME, Firstname" vs "Firstname Lastname", (3) 50 record punya duplicate ID, (4) phone format campur. Buat mapping document, migrasi batch, validation report, reconciliation.',
      storyline: 'Perusahaan tutup sistem legacy bulan depan. 1200 customer harus termigrasi tanpa data loss. Satu pun tidak boleh hilang karena ini customer enterprise.',
      guidance: '1) Buat mapping document: field legacy → field baru. 2) Standarisasi nama: semua ke "Firstname Lastname". 3) Handle duplicate ID: merge atau flag. 4) Standarisasi phone. 5) Migrasi batch (100 record per batch). 6) Validation: 100% record ter-migrasi. 7) Reconciliation: jumlah record sama.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'SQL', 'Data Migration Tool', 'Access DB']),
      criteria: JSON.stringify(['1200 data termigrasi', 'Mapping document lengkap', 'Nama terstandarisasi', 'Duplicate terhandle', 'Reconciliation: 0 data loss', 'Validation report']),
    },
    {
      categoryId: cat['data-entry-specialist'], title: 'Data Cleansing Product Database 1500 SKU', level: 'MEDIUM',
      brief: 'Database produk 1500 SKU bermasalah: (1) 200 produk harga Rp 0 (belum diisi), (2) deskripsi ada yang copy-paste dari website lain (plagiarism risk), (3) 150 gambar broken link, (4) kategori tidak konsisten (ada sub-kategori, ada top-level). Bersihkan: validasi harga, rewrite deskripsi original, verifikasi gambar, standarisasi kategori.',
      storyline: 'Website baru launching dalam 2 minggu. Database produk harus bersih sebelum live. CEO akan cek personal produk favoritnya.',
      guidance: '1) Identifikasi harga Rp 0 → cek price list atau flag untuk review. 2) Cek deskripsi duplikat (plagiarism check). 3) Verifikasi gambar: cek HTTP status, flag broken. 4) Konsolidasi kategori: buat hierarchy jelas. 5) Bersihkan 1500 SKU. 6) Laporan: jumlah perubahan per jenis.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Product Database', 'Web Scraper']),
      criteria: JSON.stringify(['1500 SKU terstandarisasi', 'Harga valid (0 missing)', 'Deskripsi original', 'Gambar terverifikasi', 'Kategori konsisten', 'Siap live']),
    },
    {
      categoryId: cat['data-entry-specialist'], title: 'Employee Database Standardization 300 Karyawan', level: 'EASY',
      brief: 'Database HR 300 karyawan perlu standarisasi untuk migrasi HRIS baru. Masalah: (1) NIP format campur (ada yang pakai titik, ada yang pakai strip), (2) nama pakai huruf kecil semua, (3) email kantor vs email pribadi campur, (4) rekening bank belum diverifikasi. Standarisasi: NIP tanpa separator, nama Title Case, email kantor only, verifikasi rekening.',
      storyline: 'HRD akan migrasi ke HRIS baru bulan depan. Database harus bersih agar tidak ada error saat import. 300 karyawan, 5 departemen.',
      guidance: '1) NIP: hapus titik/strip, pastikan 8 digit. 2) Nama: Title Case (budi → Budi). 3) Email: filter hanya email kantor (@perusahaan.com). 4) Rekening: validasi format (10-13 digit). 5) Export: siap import ke HRIS. 6) Laporan: jumlah perubahan.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'HRIS Import Template']),
      criteria: JSON.stringify(['300 data terstandarisasi', 'NIP format konsisten', 'Nama Title Case', 'Email kantor only', 'Rekening tervalidasi', 'Siap import HRIS']),
    },

    // ═══════════════════════════════════════════════════
    // DATA ANNOTATION / AI TRAINER (6 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Labeling Text Sentiment Dataset 500 Ulasan', level: 'EASY',
      brief: 'Label 500 ulasan pelanggan Shopee untuk training model sentiment analysis. Setiap ulasan harus dilabeli: sentiment (positive/negative/neutral), confidence score (0-1), dan aspect (product quality, shipping, price, service). Data: file CSV dengan kolom review_text. Output: CSV dengan kolom tambahan label.',
      storyline: 'Tim NLP butuh dataset labeled untuk training model sentiment. 500 ulasan dari Shopee kategori elektronik. Model akan dipakai untuk auto-reply review.',
      guidance: '1) Baca guideline labeling. 2) Label sentiment: positive, negative, neutral. 3) Confidence score: 0-1 (0.5 = ragu, 0.9 = yakin). 4) Aspect: product quality, shipping, price, service. 5) Pastikan distribusi: ~40% positive, ~30% negative, ~30% neutral. 6) Quality check: label 10% ulasan dua kali, cek konsistensi.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Labeling Guidelines', 'CSV Editor']),
      criteria: JSON.stringify(['500 ulasan terlabeli', '3 kolom: sentiment, confidence, aspect', 'Distribusi wajar', 'Konsistensi labeling', 'Quality check report']),
    },
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Bounding Box Object Detection 300 Gambar', level: 'MEDIUM',
      brief: 'Annotate 300 gambar produk e-commerce dengan bounding box untuk training model object detection. Class: 5 kategori (elektronik, fashion, makanan, kecantikan, rumah tangga). Setiap gambar: 1-3 objek. Bounding box harus akurat (IoU > 0.85 dengan ground truth). Output: format COCO JSON.',
      storyline: 'Tim CV butuh dataset untuk training model deteksi produk otomatis di e-commerce. 300 gambar dari katalog produk.',
      guidance: '1) Pelajari tool CVAT/LabelImg. 2) Tentukan 5 class. 3) Gambar bounding box akurat. 4) IoU check: bandingkan dengan manual annotation. 5) Export format COCO JSON. 6) Quality: annotasi 10% gambar dua kali, hitung inter-annotator agreement.',
      toolsNeeded: JSON.stringify(['CVAT', 'LabelImg', 'Image Annotation Tool', 'JSON Editor']),
      criteria: JSON.stringify(['300 gambar terannotasi', '5 class label', 'Bounding box akurat (IoU > 0.85)', 'Format COCO JSON', 'Inter-annotator agreement > 0.8']),
    },
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Named Entity Recognition (NER) Dataset 1000 Kalimat', level: 'COMPLEX',
      brief: 'Annotate 1000 kalimat berita Indonesia untuk NER. Entity types: PERSON, ORGANIZATION, LOCATION, DATE, MONEY. Data: file JSON dengan kalimat. Output: JSON dengan entity spans. Tambahan: buat guideline document, annotation agreement check, dan error analysis report.',
      storyline: 'Tim NLP butuh dataset NER bahasa Indonesia. 1000 kalimat dari koran online (Kompas, Detik). Model akan dipakai untuk information extraction.',
      guidance: '1) Buat guideline: definisi per entity type, contoh, edge cases. 2) Annotate 1000 kalimat: PERSON (orang), ORG (organisasi), LOC (lokasi), DATE (tanggal), MONEY (uang). 3) Inter-annotator agreement: 2 annotator, 200 kalimat, hitung F1. 4) Error analysis: jenis error paling sering. 5) Export JSON.',
      toolsNeeded: JSON.stringify(['Label Studio', 'Prodigy', 'Excel', 'JSON Editor']),
      criteria: JSON.stringify(['1000 kalimat terannotasi', '5 entity types', 'Guideline document', 'Inter-annotator agreement > 0.8', 'Error analysis report', 'Format JSON']),
    },
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Image Classification Dataset 500 Gambar', level: 'EASY',
      brief: 'Klasifikasikan 500 gambar produk ke 10 kategori: elektronik, fashion, makanan, minuman, kecantikan, kesehatan, rumah tangga, olahraga, otomotif, buku. Data: folder dengan 500 gambar. Output: CSV dengan kolom filename dan label. Handle: gambar ambigu (misal: laptop case bisa elektronik atau fashion).',
      storyline: 'Tim ML butuh training data untuk klasifikasi gambar produk. 500 gambar dari berbagai sumber. Beberapa gambar ambigu.',
      guidance: '1) Lihat setiap gambar. 2) Tentukan 1 kategori. 3) Handle ambigu: pilih yang paling relevan, flag di kolom notes. 4) Pastikan distribusi: ~50 gambar per kategori. 5) Quality check: klasifikasi ulang 10% gambar. 6) Export CSV.',
      toolsNeeded: JSON.stringify(['Image Viewer', 'Microsoft Excel', 'Google Sheets', 'File Manager']),
      criteria: JSON.stringify(['500 gambar terklasifikasi', '10 kategori', 'Distribusi wajar', 'Ambigu ter-flag', 'Quality check > 90% akurat']),
    },
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Text Summarization Dataset 200 Artikel', level: 'COMPLEX',
      brief: 'Buat dataset summarization: 200 artikel berita Indonesia (100-500 kata per artikel). Setiap artikel: summary 2-3 kalimat, 5-10 keyword, dan reading level (easy/medium/hard). Data: JSON dengan artikel. Output: JSON dengan summary, keywords, reading level. Tambahan: buat evaluasi akurasi summary.',
      storyline: 'Tim NLP butuh dataset summarization berita Indonesia untuk training model abstractive summarization. Artikel dari Kompas, Detik, CNN Indonesia.',
      guidance: '1) Baca setiap artikel. 2) Buat summary 2-3 kalimat (capturing main points). 3) Ekstrak 5-10 keyword. 4) Tentukan reading level. 5) Evaluasi: summary harus cover > 80% main points. 6) Export JSON. 7) Quality: peer review 20 artikel.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Text Editor', 'JSON Editor']),
      criteria: JSON.stringify(['200 artikel ter-summary', 'Summary 2-3 kalimat akurat', '5-10 keyword per artikel', 'Reading level ter-label', 'Evaluasi akurasi > 80%']),
    },
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Speech-to-Text Transcription 50 Audio', level: 'MEDIUM',
      brief: 'Transkrip 50 file audio percakapan customer service (10-30 menit per file). Format output: JSON dengan text, timestamps (mulai-akhir per kalimat), speaker identification (Speaker A/B). Handle: noise, accent Jawa, istilah teknis. Tambahan: word error rate check.',
      storyline: 'Tim NLP butuh dataset transkrip untuk training model speech-to-text bahasa Indonesia. Audio dari call center customer service.',
      guidance: '1) Dengarkan setiap audio. 2) Transkrip text. 3) Timestamp per kalimat. 4) Identify speaker (A = CS, B = customer). 5) Handle noise: [noise], [laughter], [inaudible]. 6) Word error rate: bandingkan dengan transcript manual 5 audio. 7) Export JSON.',
      toolsNeeded: JSON.stringify(['Audacity', 'Transcription Tool', 'JSON Editor', 'Excel']),
      criteria: JSON.stringify(['50 audio tertranskrip', 'Timestamp akurat', 'Speaker identification', 'Handle noise & accent', 'WER < 15%', 'Format JSON']),
    },

    // ═══════════════════════════════════════════════════
    // TRANSLATION / LOCALIZER (6 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['translation-localizer'], title: 'Penerjemahan Artikel Blog Teknologi 5 Artikel', level: 'EASY',
      brief: 'Terjemahkan 5 artikel blog teknologi (bahasa Inggris) ke Bahasa Indonesia. Panjang: 800-1200 kata per artikel. Target: developer & tech enthusiast Indonesia. Buat: glossary istilah teknis (20+ istilah), dokumen side-by-side (Inggris-Indonesia), dan catatan terjemahan untuk istilah yang tidak diterjemahkan (misal: "cloud computing").',
      storyline: 'Startup teknologi SaaS butuh konten blog bahasa Indonesia. 5 artikel tentang AI, Cloud, DevOps, Cybersecurity, Data Engineering. Tidak boleh terjemahan kaku, harus natural.',
      guidance: '1) Baca artikel sumber. 2) Terjemahkan: pertahankan konteks, bukan literal. 3) Glossary: cloud computing = komputasi awan, API = API (tidak diterjemahkan). 4) Side-by-side: paragraf Inggris | paragraf Indonesia. 5) Natural reading check: baca keras-keras.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Google Docs', 'DeepL', 'Glossary Template']),
      criteria: JSON.stringify(['5 artikel terjemahan akurat', 'Glossary 20+ istilah', 'Side-by-side comparison', 'Natural & dipahami', 'Konsistensi terminologi']),
    },
    {
      categoryId: cat['translation-localizer'], title: 'Lokalisasi UI Aplikasi Web 150 String', level: 'MEDIUM',
      brief: 'Lokalisasi 150 string UI dari English ke Bahasa Indonesia. Tantangan: (1) String pendek (tombol) vs panjang (error message), (2) konteks berbeda untuk kata yang sama ("Submit" di form vs "Submit" di jawaban), (3) karakter Indonesia lebih panjang dari English. Buat: spreadsheet lokalisasi, dokumentasi keputusan, dan test UI.',
      storyline: 'Aplikasi SaaS akan launch di Indonesia. 150 string UI dari Figma. Beberapa string ambigu (harus lihat desain untuk tahu konteksnya).',
      guidance: '1) Analisis konteks string dari Figma. 2) Terjemahkan: pertimbangkan panjang (tombol max 15 karakter). 3) Dokumentasi: keputusan terjemahan per string ambigu. 4) Test: pastikan UI tidak break. 5) Export: format JSON/CSV siap import.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Figma', 'JSON Editor']),
      criteria: JSON.stringify(['150 string terlokalisasi', 'Kontekstual & akurat', 'Pertimbangan UI (panjang)', 'Dokumentasi keputusan', 'Test UI passed']),
    },
    {
      categoryId: cat['translation-localizer'], title: 'Penerjemahan Dokumen Hukum Kontrak 10 Halaman', level: 'COMPLEX',
      brief: 'Terjemahkan kontrak kerja sama bisnis 10 halaman dari Bahasa Indonesia ke English. Tantangan: (1) terminologi hukum Indonesia harus tepat di English, (2) ada istilah hukum yang tidak ada padanan langsung, (3) harus akurat secara legal. Buat: terjemahan, glossary hukum (30+ istilah), catatan terjemahan untuk istilah ambigu.',
      storyline: 'Perusahaan Indonesia akan ekspansi ke pasar internasional. Kontrak kerja sama dengan partner Australia harus dalam bahasa Inggris. Legal team butuh terjemahan yang bisa diandalkan.',
      guidance: '1) Pelajari terminologi hukum Indonesia & Inggris. 2) Terjemahkan: akurat, bukan literal. 3) Istilah ambigu: "janji" = "covenant" atau "promise"? Catat alasannya. 4) Glossary hukum 30+ istilah. 5) Review: baca ulang untuk konsistensi.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Legal Dictionary', 'Translation Memory', 'Legal Reference']),
      criteria: JSON.stringify(['10 halaman terjemahan', 'Terminologi hukum tepat', 'Glossary 30+ istilah', 'Akurat secara legal', 'Catatan terjemahan']),
    },
    {
      categoryId: cat['translation-localizer'], title: 'Subtitle Translation Video Tutorial 5 Video', level: 'EASY',
      brief: 'Buat subtitle Bahasa Indonesia untuk 5 video tutorial teknologi (total 25 menit). Tantangan: (1) timing harus sinkron dengan audio, (2) istilah teknis konsisten, (3) subtitle tidak boleh terlalu panjang (max 2 baris). Output: file SRT + VTT.',
      storyline: 'Platform e-learning butuh subtitle Indonesia untuk video tutorial Python, JavaScript, React, Docker, Kubernetes. Total 25 menit.',
      guidance: '1) Transkrip audio dari video. 2) Terjemahkan subtitle. 3) Sync timing (mulai-akhir per subtitle). 4) Max 2 baris, max 42 karakter/baris. 5) Export SRT & VTT. 6) Quality check: tonton video dengan subtitle.',
      toolsNeeded: JSON.stringify(['Subtitle Edit', 'YouTube Studio', 'Text Editor', 'Video Player']),
      criteria: JSON.stringify(['5 video bersubtitle', 'Timing akurat', 'Terjemahan natural', 'Format SRT & VTT', 'Max 2 baris per subtitle']),
    },
    {
      categoryId: cat['translation-localizer'], title: 'Website Localization E-Commerce 50 Halaman', level: 'COMPLEX',
      brief: 'Lokalisasi 50 halaman e-commerce dari English ke Indonesia. Kategori: product pages (20), category pages (10), FAQ (15), checkout flow (5). Tantangan: (1) SEO-friendly translation (keyword research), (2) konsistensi terminologi, (3) cultural adaptation (format harga, satuan), (4) CTA yang compelling.',
      storyline: 'E-commerce fashion internasional masuk pasar Indonesia. 50 halaman harus dilokalisasi sebelum launch. SEO sangat penting.',
      guidance: '1) Keyword research: cari keyword Indonesia yang relevan. 2) Product pages: judul, deskripsi, spesifikasi. 3) Category pages: nama kategori, deskripsi. 4) FAQ: pertanyaan & jawaban. 5) Checkout: instruksi, terms. 6) Konsistensi: glossary global.',
      toolsNeeded: JSON.stringify(['Google Sheets', 'CMS Platform', 'SEO Tool', 'Google Keyword Planner']),
      criteria: JSON.stringify(['50 halaman terlokalisasi', 'SEO-friendly', 'Konsistensi terminologi', 'Cultural adaptation', 'CTA compelling']),
    },
    {
      categoryId: cat['translation-localizer'], title: 'Translasi Email Marketing Campaign 30 Email', level: 'MEDIUM',
      brief: 'Terjemahkan 30 email marketing dari English ke Indonesia. Kategori: welcome series (5), promo (10), abandoned cart (5), follow-up (5), re-engagement (5). Tantangan: (1) subject line harus menarik & tidak kena spam filter, (2) personalisasi ({name}), (3) brand voice konsisten.',
      storyline: 'Tim marketing internasional butuh 30 email untuk campaign Indonesia. Brand: fashion & lifestyle. Tone: casual, friendly, profesional.',
      guidance: '1) Terjemahkan subject line: pendek (< 50 karakter), menarik. 2) Body: natural, brand voice. 3) Personalisasi: pastikan {name} tetap ada. 4) CTA: "Beli Sekarang", "Lihat Detail", dll. 5) A/B test: 2 subject line per email. 6) Export siap kirim.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Email Marketing Tool', 'Google Docs', 'Subject Line Tester']),
      criteria: JSON.stringify(['30 email terjemahan', 'Subject line menarik (< 50 char)', 'Brand voice konsisten', 'Personalisasi benar', 'Siap kirim']),
    },

    // ═══════════════════════════════════════════════════
    // VOICE OVER / VOICE TALENT (6 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Perekaman Script Iklan Skincare 30 Detik', level: 'EASY',
      brief: 'Rekam voice over untuk iklan skincare 30 detik. Script: "Kulit sehat, bersinar alami. [Brand Name] - perawatan kulitmu setiap hari." Tone: profesional, lembut, confident. Spesifikasi: sample rate 44.1kHz, 16-bit, format WAV. Deliverables: file WAV + script dengan time marks.',
      storyline: 'Brand skincare lokal butuh VO untuk iklan TV 30 detik. Target: wanita usia 25-35 tahun. Mood: elegan, trusted.',
      guidance: '1) Pelajari script & brand guidelines. 2) Warm up suara. 3) Rekam 3 take. 4) Pilih take terbaik. 5) Edit: noise reduction, normalize. 6) Export WAV 44.1kHz/16-bit. 7) Script + time marks.',
      toolsNeeded: JSON.stringify(['Audacity', 'Microphone', 'Audio Editor', 'Script Template']),
      criteria: JSON.stringify(['Audio 30 detik', 'Tone profesional & lembut', '44.1kHz/16-bit WAV', 'Script + time marks', 'Tanpa noise']),
    },
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Narrasi Video Tutorial E-Learning 5 Video', level: 'MEDIUM',
      brief: 'Rekam narasi untuk 5 video tutorial Python programming (total 10 menit). Tantangan: (1) karakter suara konsisten di semua video, (2) pacing tepat untuk pembelajaran (tidak terlalu cepat), (3) artikulasi istilah teknis (function, variable, loop). Spesifikasi: WAV, mono, 44.1kHz.',
      storyline: 'Platform e-learning butuh narasi untuk 5 video tutorial Python untuk pemula. Durasi: 2 menit per video.',
      guidance: '1) Pelajari materi Python dasar. 2) Rekam per video. 3) Jaga konsistensi tone: informatif, sabar. 4) Pacing: 120-150 kata/menit. 5) Artikulasi: "function" bukan "fungsian". 6) Edit & export per video.',
      toolsNeeded: JSON.stringify(['Audacity', 'Professional Microphone', 'Audio Editor', 'DAW']),
      criteria: JSON.stringify(['5 narasi video', 'Total 10 menit', 'Karakter konsisten', 'Pacing 120-150 kata/menit', 'Artikulasi teknis benar']),
    },
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Voice Over Iklan Produk Makanan 15 Detik', level: 'EASY',
      brief: 'Rekam VO untuk iklan snack ringan 15 detik. Script: "Renyah, gurih, bikin nagih! [Brand] - cemilan favorit keluarga." Tone: cheerful, energik, menggugah selera. Target: keluarga Indonesia. Spesifikasi: WAV + MP3.',
      storyline: 'Brand snack lokal butuh VO untuk iklan media sosial 15 detik. Mood: fun, family-friendly.',
      guidance: '1) Pelajari produk & target. 2) Rekam: tone cheerful, emphasis di "renyah" & "nagih". 3) 3 take. 4) Edit: normalize, compressor. 5) Export WAV + MP3.',
      toolsNeeded: JSON.stringify(['Audacity', 'Microphone', 'Audio Editor']),
      criteria: JSON.stringify(['Audio 15 detik', 'Tone cheerful', 'Emphasis tepat', 'WAV + MP3', 'Siap publish']),
    },
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Narasi Video Profil Perusahaan 3 Menit', level: 'MEDIUM',
      brief: 'Rekam narasi untuk video profil perusahaan teknologi 3 menit. Naskah: visi, misi, produk, pencapaian, tim. Tone: profesional, inspiratif, warm. Spesifikasi: WAV, stereo, 48kHz (broadcast quality). Deliverables: file WAV + script final.',
      storyline: 'Perusahaan SaaS butuh video profil baru untuk website & investor. Narasi harus impressive dan memorable.',
      guidance: '1) Pelajari visi-misi & pencapaian. 2) Rekam: pacing sedang, variasi tone sesuai konteks. 3) Bagian visi: inspiratif. Bagian produk: confident. Bagian tim: warm. 4) Edit & mastering. 5) Export 48kHz stereo.',
      toolsNeeded: JSON.stringify(['Professional Microphone', 'DAW', 'Audio Editor', 'Mastering Tool']),
      criteria: JSON.stringify(['Narasi 3 menit', 'Tone bervariasi sesuai konteks', '48kHz stereo', 'Broadcast quality', 'Script final disertakan']),
    },
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Podcast Intro & Outro 10 Episode', level: 'EASY',
      brief: 'Rekam intro (30 detik) & outro (20 detik) untuk 10 episode podcast teknologi. Intro: "Selamat datang di [Podcast Name], podcast yang membahas teknologi terkini. Bersama [Host Name]." Outro: "Terima kasih sudah dengarkan. Jangan lupa subscribe!" Energi konsisten di semua episode.',
      storyline: 'Podcast teknologi baru launching. Butuh intro & outro profesional untuk 10 episode pertama.',
      guidance: '1) Rekam intro 30 detik. 2) Rekam outro 20 detik. 3) Jaga konsistensi energi. 4) Noise reduction. 5) Export WAV + MP3. 6) File naming: intro_ep01.wav, outro_ep01.wav.',
      toolsNeeded: JSON.stringify(['Audacity', 'Microphone', 'Audio Editor']),
      criteria: JSON.stringify(['10 intro & outro', 'Durasi tepat (30s & 20s)', 'Energi konsisten', 'WAV + MP3', 'Naming konsisten']),
    },
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Audiobook Narration 5 Chapter', level: 'COMPLEX',
      brief: 'Narasikan 5 chapter buku non-fiksi tentang produktivitas (total 20.000 kata). Tantangan: (1) karakter suara konsisten 5 chapter, (2) pacing untuk pembelajaran (tidak terlalu cepat), (3) emphasis pada poin penting, (4) handling dialog & quotes. Spesifikasi: WAV, stereo, 48kHz, loudness -16 LUFS.',
      storyline: 'Penerbit butuh audiobook untuk buku " Produktivitas 101". 5 chapter, 20.000 kata total. Target: profesional muda.',
      guidance: '1) Baca seluruh naskah. 2) Rekam per chapter. 3) Konsistensi karakter: natural, authoritative. 4) Pacing: 130-150 kata/menit. 5) Emphasis: bold text = slightly louder. 6) Edit & mastering. 7) Loudness -16 LUFS.',
      toolsNeeded: JSON.stringify(['Professional Microphone', 'DAW', 'Audio Editor', 'Loudness Meter']),
      criteria: JSON.stringify(['5 chapter ter-narasi', 'Total 20.000 kata', 'Karakter konsisten', 'Pacing tepat', 'Loudness -16 LUFS', 'Studio quality']),
    },

    // ═══════════════════════════════════════════════════
    // EMAIL MANAGEMENT (6 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['email-management'], title: 'Pemilahan Inbox & Draft Balasan 50 Email', level: 'EASY',
      brief: 'Inbox executive berisi 50 email. Kategorikan: Urgent (harus balas hari ini), Important (balas minggu ini), Information (baca saja), Spam (hapus). Draft balasan untuk 10 email penting. Buat sistem folder: /Urgent, /Important, /Reference, /Archive. Email harus diprioritaskan berdasarkan urgency & impact.',
      storyline: 'Executive baru mulai kerja. Inbox-nya belum pernah diorganize. 50 email menumpuk. Kamu harus merapikan sebelum ia mulai.',
      guidance: '1) Baca semua 50 email. 2) Kategorikan: Urgent (7), Important (15), Info (20), Spam (8). 3) Draft balasan 10 email: gunakan template. 4) Buat folder system. 5) Pindahkan email ke folder. 6) Laporan: ringkasan kategori.',
      toolsNeeded: JSON.stringify(['Microsoft Outlook', 'Gmail', 'Email Client', 'Google Docs']),
      criteria: JSON.stringify(['50 email terkategorikan', 'Draft 10 email', 'Folder system aktif', 'Prioritas jelas', 'Laporan ringkasan']),
    },
    {
      categoryId: cat['email-management'], title: 'Email Drip Campaign Onboarding 7 Email', level: 'MEDIUM',
      brief: 'Rancang 7 email drip campaign untuk onboarding user SaaS baru. Timeline: Email 1 (H+0: Welcome), Email 2 (H+1: Setup guide), Email 3 (H+3: Feature highlight), Email 4 (H+7: Tips & tricks), Email 5 (H+14: Case study), Email 6 (H+21: Upgrade prompt), Email 7 (H+30: Feedback request). Setiap email: subject line, body, CTA.',
      storyline: 'Product team butuh email onboarding untuk mengurangi churn. User baru harus merasa guided & supported.',
      guidance: '1) Rancang user journey. 2) Email 1-7: subject, body, CTA. 3) Subject line: < 50 karakter, menarik. 4) Body: informatif, tidak hard sell. 5) CTA: jelas (mulai trial, baca docs, upgrade). 6) Scheduling: hari ke-0, 1, 3, 7, 14, 21, 30.',
      toolsNeeded: JSON.stringify(['Email Marketing Tool', 'Microsoft Word', 'Google Docs', 'Subject Line Tester']),
      criteria: JSON.stringify(['7 email drip campaign', 'Timeline jelas (H+0 s.d. H+30)', 'Subject line menarik', 'CTA per email', 'Siap scheduling']),
    },
    {
      categoryId: cat['email-management'], title: 'Email Newsletter Weekly 4 Edisi', level: 'EASY',
      brief: 'Buat 4 edisi newsletter mingguan untuk startup teknologi. Format: headline, 3 artikel (judul + ringkasan + link), CTA, footer. Setiap edisi punya tema: (1) AI & Machine Learning, (2) Cloud & DevOps, (3) Product & Design, (4) Startup & Business. Desain harus konsisten.',
      storyline: 'Startup butuh newsletter untuk membangun komunitas developer. 4 edisi pertama harus impressive.',
      guidance: '1) 4 tema: AI/ML, Cloud/DevOps, Product/Design, Startup/Business. 2) Headline: < 10 kata, menarik. 3) 3 artikel: judul, ringkasan 2 kalimat, link. 4) CTA: baca blog, daftar event. 5) Footer: unsubscribe, social links. 6) Desain: konsisten.',
      toolsNeeded: JSON.stringify(['Email Marketing Tool', 'Canva', 'Google Docs']),
      criteria: JSON.stringify(['4 edisi newsletter', 'Tema berbeda per edisi', 'Headline menarik', '3 artikel per edisi', 'Desain konsisten']),
    },
    {
      categoryId: cat['email-management'], title: 'Cold Email Outreach Campaign 20 Email', level: 'MEDIUM',
      brief: 'Buat 20 cold email template untuk business development. Target: 20 perusahaan potensial. Format: subject, opening (personalisasi), value proposition, CTA, follow-up sequence (3x). Personalisasi: nama perusahaan, industri, pain point. Follow-up: H+3, H+7, H+14.',
      storyline: 'Tim BD butuh email outreach untuk 20 target klien. Email harus personalized, tidak spammy, dan effective.',
      guidance: '1) Research 20 target: nama, industri, pain point. 2) Subject: < 40 karakter, personal. 3) Opening: "Saya lihat [perusahaan] di [sumber]...". 4) Value: "Kami bantu [pain point] dengan [solusi]". 5) CTA: "Boleh saya kirim info lebih lanjut?". 6) Follow-up 3x.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Email Marketing Tool', 'CRM', 'LinkedIn']),
      criteria: JSON.stringify(['20 cold email templates', 'Personalisasi per target', 'Value proposition jelas', 'Follow-up 3x', 'Siap kirim']),
    },
    {
      categoryId: cat['email-management'], title: 'Customer Support Email Response 30 Template', level: 'EASY',
      brief: 'Buat 30 template email response untuk customer support. 6 kategori (5 template per kategori): (1) Inquiry - info produk, (2) Complaint - produk rusak, (3) Feedback - terima kasih, (4) Follow-up - status ticket, (5) Thank you - after resolution, (6) Escalation - ke manager. Setiap template: subject, body, closing.',
      storyline: 'Tim support butuh standardisasi email response. 30 template untuk semua situasi umum.',
      guidance: '1) 6 kategori × 5 template. 2) Subject: jelas, informatif. 3) Body: empathy, solusi, action. 4) Closing: "Ada yang bisa dibantu lagi?". 5) Tone: profesional, friendly. 6) Personalisasi: [Nama], [Ticket #].',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Google Docs', 'Email Template']),
      criteria: JSON.stringify(['30 template email', '6 kategori', 'Subject & body jelas', 'Tone profesional', 'Siap digunakan']),
    },
    {
      categoryId: cat['email-management'], title: 'Email Marketing Campaign Product Launch', level: 'COMPLEX',
      brief: 'Rancang email marketing campaign lengkap untuk product launch SaaS. Timeline: Teaser (H-7, H-3, H-1), Launch Day (H+0), Post-launch (H+3, H+7, H+14), Re-engagement (H+30). Total 8 email. Setiap email: subject, body, CTA, A/B test variants. Sertakan: email calendar, KPI targets, segmentation strategy.',
      storyline: 'Product team akan launch fitur baru. Email campaign harus membangun antisipasi & drive adoption.',
      guidance: '1) Teaser 3 email: countdown, sneak peek, early access. 2) Launch day: announcement + demo. 3) Post-launch: tips, case study, feedback. 4) Re-engagement: for inactive users. 5) A/B test: 2 subject per email. 6) KPI: open rate > 25%, CTR > 5%.',
      toolsNeeded: JSON.stringify(['Email Marketing Tool', 'Canva', 'Analytics Tool', 'A/B Testing Tool']),
      criteria: JSON.stringify(['8 email campaign', 'Timeline H-7 s.d. H+30', 'A/B test per email', 'KPI targets defined', 'Email calendar', 'Segmentation strategy']),
    },

    // ═══════════════════════════════════════════════════
    // SCHEDULE MANAGEMENT (6 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['schedule-management'], title: 'Jadwal Harian Tim Lintas Zona Waktu 3 Zona', level: 'EASY',
      brief: 'Tim remote tersebar di 3 zona waktu: WIB (Jakarta), WITA (Makassar), WIT (Jayapura). 8 anggota tim. Jadwal harian harus: meeting time adil (rotasi jam), focus time minimal 3 jam, dan overlap time untuk kolaborasi. Buat template jadwal yang bisa diulang setiap minggu.',
      storyline: 'Remote team 8 orang di 3 zona waktu. Selama ini meeting selalu pagi WIB (sore WIT). Kamu harus bikin adil.',
      guidance: '1) Hitung offset: WITA = WIB+1, WIT = WIB+2. 2) Tentukan overlap: 09:00-11:00 WIB = 10:00-12:00 WITA = 11:00-13:00 WIT. 3) Rotasi meeting: Senin (WIB host), Selasa (WITA host), Rabu (WIT host). 4) Focus time: 3 jam terblokir. 5) Template mingguan.',
      toolsNeeded: JSON.stringify(['Google Calendar', 'World Time Buddy', 'Microsoft Excel', 'Google Sheets']),
      criteria: JSON.stringify(['Jadwal 3 zona waktu', 'Meeting rotasi adil', 'Focus time 3 jam', 'Template berulang', 'Overlap time jelas']),
    },
    {
      categoryId: cat['schedule-management'], title: 'Rencana Jadwal Event Konferensi 2 Hari', level: 'MEDIUM',
      brief: 'Konferensi teknologi 2 hari. Hari 1: opening keynote, 3 tracks paralel (AI, Cloud, Security), networking dinner. Hari 2: 3 tracks paralel, workshop, closing. Total 15 pembicara, 3 ruangan, break time 15 menit. Koordinasi: speaker confirmation, ruangan, AV equipment.',
      storyline: 'Event organizer butuh jadwal detail konferensi. 15 pembicara dari berbagai kota. Ruangan terbatas.',
      guidance: '1) Hari 1: Keynote (09:00), Track A/B/C (10:30-17:00), Dinner (19:00). 2) Hari 2: Track A/B/C (09:00-15:00), Workshop (15:30), Closing (17:00). 3) 15 pembicara: assign ke track. 4) Break: 10:15-10:30, 12:00-13:00, 15:00-15:15. 5) Koordinasi ruangan & AV.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Event Planning Tool', 'Google Calendar']),
      criteria: JSON.stringify(['Jadwal 2 hari detail', '3 tracks paralel', '15 pembicara terjadwal', 'Break time terkoordinasi', 'Koordinasi ruangan & AV']),
    },
    {
      categoryId: cat['schedule-management'], title: 'Weekly Team Schedule Template 7 Hari', level: 'EASY',
      brief: 'Buat template jadwal mingguan untuk tim 10 orang (3 developer, 2 designer, 2 marketing, 2 QA, 1 PM). Kebutuhan: daily standup (15 min), sprint planning (2 jam, Senin), retro (1 jam, Jumat), focus time (minimal 4 jam/hari), 1-on-1 (30 min/orang/minggu). Semua harus masuk dalam 7 hari.',
      storyline: 'Tim 10 orang sering bentrok jadwal. PM butuh template yang clear agar semua orang tahu jadwalnya.',
      guidance: '1) Daily standup: 09:00-09:15 ( semua hadir). 2) Sprint planning: Senin 10:00-12:00. 3) Retro: Jumat 15:00-16:00. 4) Focus time: 4 jam/hari (blok warna). 5) 1-on-1: PM dengan 9 orang, 30 min/orang. 6) Template visual dengan color coding.',
      toolsNeeded: JSON.stringify(['Google Calendar', 'Google Sheets', 'Microsoft Excel', 'Notion']),
      criteria: JSON.stringify(['Template 7 hari', 'Daily standup terjadwal', 'Sprint planning & retro', 'Focus time 4 jam', '1-on-1 terjadwal', 'Color coding']),
    },
    {
      categoryId: cat['schedule-management'], title: 'Project Milestone & Deadline Tracker 3 Bulan', level: 'MEDIUM',
      brief: 'Proyek 3 bulan melibatkan 5 tim (Frontend, Backend, Mobile, QA, Design). Milestone: Bulan 1 = Design & Prototype, Bulan 2 = Development, Bulan 3 = Testing & Launch. Dependencies: Design → Frontend → Backend → QA → Mobile. Progress indicator per tim per minggu.',
      storyline: 'Project Manager butuh tracker untuk proyek multi-tim. 5 tim dengan dependencies jelas. Deadline ketat.',
      guidance: '1) Milestone per bulan: Design, Dev, Launch. 2) Dependencies: visualisasi flow. 3) Progress: 0-100% per tim per minggu. 4) Status: On Track (hijau), At Risk (kuning), Delayed (merah). 5) Weekly update: tambah baris per minggu. 6) Dashboard: pie chart progress.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Project Management Tool', 'Gantt Chart']),
      criteria: JSON.stringify(['Milestone 3 bulan', 'Dependencies tervisualisasi', 'Progress 0-100% per tim', 'Status color coding', 'Weekly update', 'Dashboard progress']),
    },
    {
      categoryId: cat['schedule-management'], title: 'Meeting Schedule Optimization 20 Peserta', level: 'COMPLEX',
      brief: 'Optimasi jadwal meeting 20 peserta dari 5 departemen (Engineering, Marketing, Sales, HR, Finance). Aturan: (1) tidak ada orang yang meeting > 4 jam/hari, (2) meeting antar-departemen minimal 1x/minggu, (3) meeting intra-departemen 2x/minggu, (4) tidak ada meeting Jumat sore. Survey availability, temukan slot optimal.',
      storyline: '20 orang mengeluh terlalu banyak meeting. CEO minta optimasi. Kamu harus survey semua orang & temukan jadwal ideal.',
      guidance: '1) Survey availability 20 orang (Google Form). 2) Input ke spreadsheet. 3) Hitung: total meeting per orang per hari. 4) Constraint: max 4 jam/hari, min 1 inter-dept/minggu. 5) Algoritma: cari slot yang minimize conflict. 6) Output: jadwal final per orang.',
      toolsNeeded: JSON.stringify(['Google Calendar', 'Doodle', 'Microsoft Excel', 'Google Forms']),
      criteria: JSON.stringify(['20 peserta terjadwal', 'Tidak ada conflict', 'Max 4 jam meeting/hari', 'Min 1 inter-dept/minggu', 'Tidak ada meeting Jumat sore']),
    },
    {
      categoryId: cat['schedule-management'], title: 'Academic Exam Schedule 100 Mahasiswa', level: 'EASY',
      brief: 'Jadwal ujian akhir semester: 5 mata kuliah, 3 ruangan, 5 hari. 100 mahasiswa terdaftar di berbagai kombinasi mata kuliah. Aturan: (1) tidak ada overlap jadwal untuk mahasiswa yang ambil 2 mata kuliah sama, (2) setiap ruangan max 1 ujian per slot, (3) buffer 30 menit antar ujian.',
      storyline: 'Fakultas butuh jadwal ujian yang tidak ada overlap. 100 mahasiswa, 5 mata kuliah, 3 ruangan.',
      guidance: '1) Input: 100 mahasiswa × 5 mata kuliah (enrollment matrix). 2) Identifikasi overlap: mahasiswa ambil MK A & B tidak boleh beda waktu. 3) Assign: MK ke slot (hari + jam) & ruangan. 4) Buffer 30 menit. 5) Validasi: cek 100 mahasiswa.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Conflict Detection']),
      criteria: JSON.stringify(['100 mahasiswa terjadwal', '5 mata kuliah', '3 ruangan', 'Tidak ada overlap', 'Buffer 30 menit', 'Terkonfirmasi']),
    },

    // ═══════════════════════════════════════════════════
    // TRAVEL PLANNER (6 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['travel-planner'], title: 'Travel Itinerary & Budget Bali 3D2N', level: 'EASY',
      brief: 'Itinerary 3 hari 2 malam ke Bali untuk 4 orang (2 dewasa, 2 anak 8 & 12 tahun). Budget: Rp 8 juta total. Termasuk: tiket pesawat ( sudah ada ), hotel, transport lokal, aktivitas, makan. Buat itinerary detail: jam per aktivitas, rekomendasi tempat, budget breakdown.',
      storyline: 'Keluarga 4 orang liburan ke Bali. Budget ketat (Rp 8 juta setelah tiket pesawat). Anak-anak butuh aktivitas fun.',
      guidance: '1) Itinerary: Hari 1 (Pantai Kuta, sunset), Hari 2 (Ubud, monkey forest, sawah), Hari 3 (Waterbom, pulang). 2) Hotel: bintang 3, Rp 500k/malam. 3) Transport: rental mobil Rp 300k/hari. 4) Makan: Rp 200k/hari/keluarga. 5) Budget breakdown detail.',
      toolsNeeded: JSON.stringify(['Google Maps', 'Microsoft Excel', 'Travel Booking Sites', 'TripAdvisor']),
      criteria: JSON.stringify(['Itinerary 3 hari detail', 'Budget Rp 8 juta', 'Aktivitas child-friendly', 'Hotel & transport terjadwal', 'Budget breakdown']),
    },
    {
      categoryId: cat['travel-planner'], title: 'Business Trip Planner Tokyo 5D4N', level: 'MEDIUM',
      brief: 'Perjalanan bisnis 5 hari ke Tokyo untuk 2 eksekutif. Meeting: (1) Client A - Shibuya, (2) Client B - Marunouchi, (3) Partner C - Roppongi. Butuh: itinerary, hotel strategis (antara 3 venue), transport guide (JR Pass), cultural etiquette guide, dan restaurant recommendation.',
      storyline: '2 eksekutif bisnis trip ke Tokyo. Mereka tidak familiar dengan Tokyo. Butuh guide lengkap.',
      guidance: '1) Hotel: bintang 4, pusat kota (Shinjuku/Tokyo Station). 2) Meeting: assign ke hari. 3) Transport: JR Pass 7 hari, subway guide. 4) Cultural: business card etiquette, bowing, gift giving. 5) Restaurant: 3 rekomendasi per area. 6) Itinerary jam demi jam.',
      toolsNeeded: JSON.stringify(['Google Maps', 'Microsoft Word', 'Microsoft Excel', 'Japan Guide']),
      criteria: JSON.stringify(['Itinerary 5 hari', 'Hotel strategis', 'JR Pass guide', 'Cultural etiquette', 'Restaurant recommendations']),
    },
    {
      categoryId: cat['travel-planner'], title: 'Family Vacation Planner Lombok 4D3N', level: 'EASY',
      brief: 'Liburan keluarga 6 orang (2 dewasa, 4 anak: 3, 6, 9, 12 tahun) ke Lombok 4 hari 3 malam. Budget: Rp 12 juta. Aktivitas harus child-friendly untuk semua umur. Termasuk: snorkeling (anak 9 & 12), pantai, desa sasak, Gili Kondo.',
      storyline: 'Keluarga besar liburan ke Lombok. Ada anak batita (3 tahun) jadi aktivitas harus aman untuk semua.',
      guidance: '1) Hari 1: arrival, pantai Kuta Lombok. 2) Hari 2: snorkeling Gili (anak 9 & 12), desa sasak (anak 3 & 6). 3) Hari 3: Gili Kondo (semua). 4) Hari 4: morning beach, pulang. 5) Hotel: family suite. 6) Transport: van besar. 7) Budget detail.',
      toolsNeeded: JSON.stringify(['Google Maps', 'Microsoft Excel', 'Travel Apps', 'TripAdvisor']),
      criteria: JSON.stringify(['Itinerary 4 hari', 'Aktivitas child-friendly', 'Budget Rp 12 juta', 'Hotel family suite', 'Transport nyaman']),
    },
    {
      categoryId: cat['travel-planner'], title: 'Honeymoon Trip Planner Maldives 5D4N', level: 'MEDIUM',
      brief: 'Honeymoon 5 hari 4 malam ke Maldives untuk pasangan baru menikah. Budget: Rp 35 juta (premium). Aktivitas romantic: overwater villa, snorkeling, sunset dinner, spa. Itinerary: balance antara aktivitas & relaxation.',
      storyline: 'Pasangan baru menikah honeymoon ke Maldives. Budget premium tapi tetap wants value for money.',
      guidance: '1) Hari 1: arrival, overwater villa, sunset. 2) Hari 2: snorkeling, beach lunch. 3) Hari 3: spa, sunset dinner di pantai. 4) Hari 4: island hopping, photography. 5) Hari 5: morning swim, pulang. 6) Villa: overwater bungalow. 7) Budget breakdown.',
      toolsNeeded: JSON.stringify(['Travel Booking Sites', 'Google Maps', 'Microsoft Excel', 'Instagram']),
      criteria: JSON.stringify(['Itinerary 5 hari romantic', 'Overwater villa', 'Budget Rp 35 juta', 'Aktivitas romantic', 'Balance aktivitas & relax']),
    },
    {
      categoryId: cat['travel-planner'], title: 'Backpacking Trip Planner Southeast Asia 14 Hari', level: 'COMPLEX',
      brief: 'Backpacking 14 hari ke 4 negara: Thailand (Bangkok, Chiang Mai), Vietnam (Hanoi, Ha Long), Cambodia (Siem Reap), Laos (Luang Prabang). Budget: Rp 15 juta (backpacker). Tantangan: transport antar negara, visa, akomodasi murah, itinerary efisien.',
      storyline: 'Backpacker solo trip 14 hari 4 negara. Budget minimal tapi tetap want to experience everything.',
      guidance: '1) Route: Thailand → Laos → Vietnam → Cambodia (optimal). 2) Transport: overnight train, bus, flight murah. 3) Akomodasi: hostel Rp 100k-200k/malam. 4) Makan: street food Rp 50k/hari. 5) Budget per negara. 6) Tips hemat: happy hour, free walking tours.',
      toolsNeeded: JSON.stringify(['Skyscanner', 'Hostelworld', 'Google Maps', 'Microsoft Excel', '12Go Asia']),
      criteria: JSON.stringify(['Itinerary 14 hari', '4 negara', 'Budget Rp 15 juta', 'Transport antar negara terjadwal', 'Tips hemat']),
    },
    {
      categoryId: cat['travel-planner'], title: 'Corporate Retreat Organizer 3 Hari 30 Orang', level: 'COMPLEX',
      brief: 'Company retreat 3 hari 30 orang. Budget: Rp 100 juta. Aktivitas: team building, workshop, gala dinner. Venue: villa atau resort dengan meeting room. Koordinasi: transport 30 orang, catering 3 hari, accomodation, activities. Budget report detail.',
      storyline: 'HR Director butuh retreat planning. Budget Rp 100 juta untuk 30 orang (Rp 3.3 juta/orang). Harus impressive tapi within budget.',
      guidance: '1) Venue: 3 opsi (Puncak, Lembang, Anyer), harga termasuk villa + meeting room. 2) Hari 1: arrival, ice breaking. 3) Hari 2: workshop, team building. 4) Hari 3: gala dinner, pulang. 5) Transport: bus 30 orang. 6) Catering: 3 hari × 30 orang. 7) Budget breakdown.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Venue Booking Sites', 'Vendor Communication']),
      criteria: JSON.stringify(['3 opsi venue', '3 hari aktivitas terjadwal', 'Transport 30 orang', 'Catering 3 hari', 'Budget Rp 100 juta detail', 'Gala dinner']),
    },

    // ═══════════════════════════════════════════════════
    // SOCIAL MEDIA MANAGEMENT (6 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['social-media-management'], title: 'Content Calendar Mingguan Fashion Muslim', level: 'EASY',
      brief: 'Content calendar 1 minggu untuk brand fashion Muslim di Instagram. Format: 7 postingan feed + 3 stories per hari. Tema: Senin (tutorial hijab), Selasa (OOTD), Rabu (behind the scene), Kamis (customer review), Jumat (inspirasi), Sabtu (promo), Minggu (lifestyle). Caption: 100-200 kata, 20 hashtag.',
      storyline: 'Brand fashion Muslim butuh konten mingguan yang konsisten. Target: wanita muslimah 20-35 tahun.',
      guidance: '1) 7 tema per hari. 2) Caption: opening hook, konten, CTA, hashtag. 3) 20 hashtag: mix populer (1M+) & niche (100k-500k). 4) Stories: behind the scene, poll, quiz. 5) Visual: color scheme konsisten. 6) Schedule: post jam 11:00 & 19:00.',
      toolsNeeded: JSON.stringify(['Canva', 'Later', 'Instagram', 'Google Sheets', 'Hashtag Generator']),
      criteria: JSON.stringify(['7 postingan feed', '3 stories/hari', 'Caption 100-200 kata', '20 hashtag', 'Schedule konsisten', 'Visual konsisten']),
    },
    {
      categoryId: cat['social-media-management'], title: 'Social Media Strategy Skincare 1 Bulan', level: 'MEDIUM',
      brief: 'Strategi social media 1 bulan untuk brand skincare lokal. Platform: Instagram, TikTok. Target: wanita usia 20-30 tahun. Content pillars: (1) Education (cara pakai skincare), (2) Behind the scene (proses produksi), (3) Social proof (testimoni), (4) Entertainment (skincare tips). Posting frequency: IG 5x/minggu, TikTok 3x/minggu.',
      storyline: 'Brand skincare baru launch. Butuh strategi 1 bulan untuk build awareness & engagement.',
      guidance: '1) Content pillars: 4 kategori. 2) IG: 5 post/minggu (3 feed, 2 reels). 3) TikTok: 3 video/minggu. 4) Caption: hook + konten + CTA. 5) Hashtag strategy: branded + niche. 6) Engagement: reply comment dalam 1 jam. 7) Analytics: track weekly.',
      toolsNeeded: JSON.stringify(['Canva', 'Instagram Insights', 'TikTok Analytics', 'Google Sheets', 'CapCut']),
      criteria: JSON.stringify(['Strategi 1 bulan', '4 content pillars', 'IG 5x/minggu, TikTok 3x/minggu', 'Hashtag strategy', 'Engagement plan', 'Analytics tracking']),
    },
    {
      categoryId: cat['social-media-management'], title: 'F&B Restaurant Launch Campaign 2 Minggu', level: 'MEDIUM',
      brief: 'Campaign launching restoran F&B baru 2 minggu. Timeline: Pre-launch (H-7 s.d. H-1), Grand Opening (H+0), Post-launch (H+1 s.d. H+7). Platform: Instagram, TikTok, Google Maps. Aktivitas: teaser content, grand opening event, promo opening 20%, UGC campaign.',
      storyline: 'Restoran F&B baru di Bandung. Target: anak muda 18-30 tahun. Budget marketing: Rp 5 juta.',
      guidance: '1) Pre-launch: teaser 7 hari (hidden menu, countdown). 2) Grand opening: live, foto, influencer invite. 3) Post-launch: promo 20% 1 minggu, UGC contest. 4) Google Maps: update profil, foto. 5) Budget: Rp 2 juta (ads), Rp 2 juta (influencer), Rp 1 juta (content).',
      toolsNeeded: JSON.stringify(['Canva', 'Instagram', 'TikTok', 'Google My Business', 'CapCut']),
      criteria: JSON.stringify(['Campaign 2 minggu', 'Pre-launch 7 hari', 'Grand opening plan', 'Promo 20%', 'UGC campaign', 'Budget Rp 5 juta']),
    },
    {
      categoryId: cat['social-media-management'], title: 'B2B LinkedIn Thought Leadership Strategy', level: 'COMPLEX',
      brief: 'Strategi LinkedIn thought leadership 3 bulan untuk CEO startup fintech. Goals: bangun personal branding, jadi thought leader di fintech Indonesia. Konten: 2 post/minggu (1 carousel, 1 text post). Topics: fintech trends, startup lessons, leadership. Engagement: comment di post orang lain 30 menit/hari.',
      storyline: 'CEO fintech ingin jadi thought leader di LinkedIn. Target: 10K followers dalam 3 bulan.',
      guidance: '1) Audit profile: headline, about, experience. 2) Content plan 3 bulan: 24 postingan. 3) Carousel: data-driven, 8-10 slides. 4) Text post: storytelling, 150-300 kata. 5) Engagement: comment 10 post/hari. 6) Analytics: track followers, engagement rate.',
      toolsNeeded: JSON.stringify(['LinkedIn', 'Canva', 'Google Sheets', 'Content Planning Tool']),
      criteria: JSON.stringify(['Strategi 3 bulan', '24 postingan terencana', 'Carousel & text post mix', 'Engagement plan 30 menit/hari', 'Analytics tracking', 'Target 10K followers']),
    },
    {
      categoryId: cat['social-media-management'], title: 'E-Commerce Flash Sale Campaign 7 Hari', level: 'EASY',
      brief: 'Campaign flash sale 7 hari untuk e-commerce. Setiap hari: 1 produk flash sale dengan diskon 50%. Konten: countdown post (h-1), daily deal post (hari H), urgency post (sore). Platform: Instagram, Facebook. Budget ads: Rp 3 juta. Retargeting: website visitors yang tidak checkout.',
      storyline: 'E-commerce butuh revenue boost. Flash sale 7 hari dengan 1 produk per hari. Diskon 50% tapi masih untung.',
      guidance: '1) Pilih 7 produk: margin tinggi, diskon 50% masih untung. 2) Daily countdown: post h-1 jam 20:00. 3) Daily deal: post jam 08:00. 4) Urgency: story jam 16:00 "tersisa X item". 5) Ads: Rp 500k/hari, retargeting website visitors. 6) Track: conversion rate.',
      toolsNeeded: JSON.stringify(['Canva', 'Instagram', 'Facebook Ads Manager', 'Google Sheets']),
      criteria: JSON.stringify(['Campaign 7 hari', '1 produk per hari', 'Diskon 50%', 'Countdown + urgency', 'Budget ads Rp 3 juta', 'Retargeting strategy']),
    },
    {
      categoryId: cat['social-media-management'], title: 'TikTok Content Strategy Brand Skincare 1 Bulan', level: 'MEDIUM',
      brief: 'Strategi TikTok 1 bulan untuk brand skincare. Target: Gen Z Indonesia (16-24 tahun). Content types: (1) Tutorial (cara pakai produk), (2) Before-after, (3) Skincare routine, (4) Duets & challenges, (5) Behind the scene. Frequency: 5 video/minggu. Goals: 100K views dalam 1 bulan.',
      storyline: 'Brand skincare ingin masuk TikTok. Belum pernah pakai TikTok. Butuh strategi dari nol.',
      guidance: '1) Riset trending sounds & hashtag skincare TikTok. 2) 5 content types. 3) Posting schedule: jam 12:00 & 19:00. 4) Caption: hook dalam 3 detik pertama. 5) Hashtag: #skincareroutine, #skincaretips, #fyp. 6) Engagement: reply comment, duet. 7) Analytics: views, followers.',
      toolsNeeded: JSON.stringify(['TikTok', 'CapCut', 'Canva', 'Google Sheets']),
      criteria: JSON.stringify(['Strategi 1 bulan', '5 video/minggu', '5 content types', 'Trending sounds & hashtags', 'Target 100K views', 'Analytics tracking']),
    },
  ]

  for (const project of projects) {
    await prisma.project.create({ data: project })
  }

  const materiData = MATERI_SEED.map((m) => ({
    categoryId: cat[m.categorySlug],
    slug: m.slug,
    title: m.title,
    summary: m.summary,
    content: m.content,
    level: m.level,
    order: m.order,
  }))

  for (const materi of materiData) {
    await prisma.materi.create({ data: materi })
  }

  const latihanData = LATIHAN_SEED.map((l) => ({
    categoryId: cat[l.categorySlug],
    slug: l.slug,
    title: l.title,
    description: l.description,
    instruction: l.instruction,
    questions: JSON.stringify(l.questions),
    durationMinutes: l.durationMinutes,
    level: l.level,
    order: l.order,
  }))

  for (const latihan of latihanData) {
    await prisma.latihan.create({ data: latihan })
  }

  console.log('Seeding completed successfully!')
  console.log(`Created ${categories.length} categories, ${projects.length} projects, ${materiData.length} materi, and ${latihanData.length} latihan.`)
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
