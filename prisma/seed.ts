import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  await prisma.project.deleteMany()
  await prisma.category.deleteMany()

  const categories = await Promise.all([
    prisma.category.create({ data: { name: 'Data Analyst', slug: 'data-analyst', icon: 'bar-chart-2' } }),
    prisma.category.create({ data: { name: 'Project Coordinator', slug: 'project-coordinator', icon: 'calendar' } }),
    prisma.category.create({ data: { name: 'Secretary / Executive Assistant', slug: 'secretary-executive-assistant', icon: 'file-text' } }),
    prisma.category.create({ data: { name: 'Data Entry Specialist', slug: 'data-entry-specialist', icon: 'database' } }),
    prisma.category.create({ data: { name: 'Data Annotation / AI Trainer', slug: 'data-annotation-ai-trainer', icon: 'tag' } }),
    prisma.category.create({ data: { name: 'Translation / Localizer', slug: 'translation-localizer', icon: 'globe' } }),
    prisma.category.create({ data: { name: 'Voice Over / Voice Talent', slug: 'voice-over-voice-talent', icon: 'mic' } }),
    prisma.category.create({ data: { name: 'Email Management', slug: 'email-management', icon: 'mail' } }),
    prisma.category.create({ data: { name: 'Schedule Management', slug: 'schedule-management', icon: 'clock' } }),
    prisma.category.create({ data: { name: 'Travel Planner', slug: 'travel-planner', icon: 'map-pin' } }),
    prisma.category.create({ data: { name: 'Social Media Management', slug: 'social-media-management', icon: 'share-2' } }),
  ])

  const cat = Object.fromEntries(categories.map((c) => [c.slug, c.id]))

  const projects = [
    // ═══════════════════════════════════════════════════
    // DATA ANALYST (5 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['data-analyst'], title: 'Rekap Data Penjualan Retail 3 Toko', level: 'EASY',
      brief: 'Rekapitulasi data penjualan dari 3 toko retail selama Q3 2024 ke dalam spreadsheet terformat dengan pivot table, grafik, dan summary dashboard sederhana.',
      storyline: 'Kamu adalah analis data junior di perusahaan retail. Manajer meminta kamu membuat rekap data penjualan dari 3 toko agar bisa dipresentasikan di rapat bulanan.',
      guidance: 'Impor data CSV ke Excel. Bersihkan data dari duplikasi. Buat pivot table per toko dan kategori. Tambahkan bar chart dan pie chart. Buat summary dashboard.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Pivot Table']),
      criteria: JSON.stringify(['Data 3 toko tergabung', 'Pivot table per toko & kategori', 'Minimal 2 grafik', 'Summary dashboard', 'Format rapi']),
    },
    {
      categoryId: cat['data-analyst'], title: 'Dashboard Analisis Performa Marketing Digital', level: 'MEDIUM',
      brief: 'Buat dashboard interaktif untuk menganalisis ROI kampanye digital marketing dari 4 channel selama 6 bulan terakhir.',
      storyline: 'Tim marketing meminta dashboard analisis performa kampanye digital. Data dari 4 channel perlu dianalisis untuk alokasi budget Q1 2025.',
      guidance: 'Import data 4 channel. Hitung CTR, CPC, Conversion Rate, ROI. Buat dashboard dengan slicer. Tambahkan tren bulanan.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Pivot Table', 'Slicer']),
      criteria: JSON.stringify(['Data 4 channel tergabung', 'Dashboard interaktif', 'Perhitungan ROI', 'Visualisasi tren 6 bulan', 'Rekomendasi budget']),
    },
    {
      categoryId: cat['data-analyst'], title: 'Analisis Penjualan E-Commerce Multi Vendor', level: 'MEDIUM',
      brief: 'Analisis data penjualan e-commerce multi-vendor untuk 5 vendor selama Q4 2024. Buat laporan perbandingan performa vendor dan rekomendasi strategi.',
      storyline: 'Platform e-commerce butuh analisis performa 5 vendor utama. Data transaksi, return rate, dan customer review tersedia.',
      guidance: 'Gabungkan data 5 vendor. Analisis: total sales, average order value, return rate, customer satisfaction. Buat perbandingan vendor. Rekomendasi strategi.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Data Visualization']),
      criteria: JSON.stringify(['Analisis 5 vendor', 'Metrik: sales, AOV, return rate', 'Perbandingan vendor', 'Rekomendasi strategi', 'Dashboard visual']),
    },
    {
      categoryId: cat['data-analyst'], title: 'FMCG Distribution Sales Analytics', level: 'COMPLEX',
      brief: 'Buat analisis distribusi sales FMCG di 3 wilayah (Jawa, Sumatera, Kalimantan) dengan analisis tren seasonal dan prediksi Q1 2025.',
      storyline: 'Perusahaan FMCG butuh analisis distribusi sales regional. Data 3 wilayah selama 12 bulan tersedia untuk analisis tren dan prediksi.',
      guidance: 'Analisis sales per wilayah. Identifikasi tren seasonal. Buat time series analysis. Prediksi Q1 2025. Buat laporan komprehensif.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Statistical Analysis', 'Forecasting']),
      criteria: JSON.stringify(['Analisis 3 wilayah', 'Identifikasi tren seasonal', 'Time series analysis', 'Prediksi Q1 2025', 'Laporan komprehensif']),
    },
    {
      categoryId: cat['data-analyst'], title: 'F&B Outlet Daily Sales Tracking Dashboard', level: 'EASY',
      brief: 'Buat dashboard tracking penjualan harian 5 outlet F&B dengan metrik: daily revenue, average transaction, best seller items, dan food cost percentage.',
      storyline: 'Jaringan F&B 5 outlet butuh dashboard harian untuk tracking performa. Data POS tersedia untuk analisis.',
      guidance: 'Import data POS 5 outlet. Hitung: daily revenue, avg transaction, top items, food cost %. Buat dashboard harian dengan filter outlet.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Dashboard Design']),
      criteria: JSON.stringify(['Data 5 outlet', 'Metrik: revenue, avg transaction, top items', 'Food cost percentage', 'Dashboard dengan filter', 'Format harian']),
    },
    {
      categoryId: cat['data-analyst'], title: 'Fashion Omnichannel Analytics Report', level: 'COMPLEX',
      brief: 'Buat laporan analitik omnichannel untuk brand fashion: perbandingan penjualan online vs offline, customer journey analysis, dan rekomendasi channel strategy.',
      storyline: 'Brand fashion omnichannel butuh laporan komprehensif perbandingan channel online (Shopee, Tokopedia, Website) vs offline (3 store locations).',
      guidance: 'Gabungkan data online & offline. Analisis: revenue per channel, customer acquisition cost, conversion rate. Customer journey mapping. Rekomendasi channel strategy.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Data Visualization', 'Analytics Tools']),
      criteria: JSON.stringify(['Perbandingan online vs offline', 'Customer journey analysis', 'Revenue per channel', 'Customer acquisition cost', 'Rekomendasi strategy']),
    },

    // ═══════════════════════════════════════════════════
    // PROJECT COORDINATOR (5 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['project-coordinator'], title: 'Action Item Tracker & MoM Rapat Kick-Off', level: 'EASY',
      brief: 'Dokumentasikan hasil rapat kick-off proyek website redesign menjadi MoM yang rapi beserta action item tracker dengan deadline dan owner.',
      storyline: 'Kamu adalah koordinator proyek yang baru saja mengikuti rapat kick-off untuk proyek website redesign. Kamu perlu mendokumentasikan hasil rapat.',
      guidance: 'Buat MoM: judul meeting, daftar hadir, agenda, diskusi, keputusan. Buat action item table: task, owner, deadline, status.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft Excel', 'Google Docs']),
      criteria: JSON.stringify(['MoM format standar', 'Minimal 5 action items', 'Owner & deadline', 'Conditional formatting', 'Dokumen rapi']),
    },
    {
      categoryId: cat['project-coordinator'], title: 'Project Timeline & Risk Register Aplikasi Mobile', level: 'MEDIUM',
      brief: 'Susun timeline proyek peluncuran aplikasi mobile selama 3 bulan termasuk Gantt chart, risk register, dan RACI matrix.',
      storyline: 'Sebagai project coordinator, kamu diminta menyusun dokumen perencanaan proyek peluncuran aplikasi mobile selama 3 bulan.',
      guidance: 'Buat Gantt chart 3 phase. Risk register minimal 8 risiko. RACI matrix untuk semua deliverables.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Gantt Chart Template']),
      criteria: JSON.stringify(['Gantt chart 3 bulan', 'Risk register 8+ risiko', 'RACI matrix', 'Konsistensi', 'Dokumen profesional']),
    },
    {
      categoryId: cat['project-coordinator'], title: 'Agile Sprint Planning Tracker', level: 'MEDIUM',
      brief: 'Buat sprint planning document untuk tim development 5 orang: sprint goals, task allocation, velocity tracking, dan burndown chart template.',
      storyline: 'Tim development akan beralih ke metodologi Agile. Kamu harus membuat template sprint planning yang bisa digunakan berulang.',
      guidance: 'Buat sprint goals template. Task allocation untuk 5 orang. Velocity tracking sheet. Burndown chart template. Definition of Done.',
      toolsNeeded: JSON.stringify(['Jira/Trello', 'Microsoft Excel', 'Google Sheets']),
      criteria: JSON.stringify(['Sprint goals template', 'Task allocation 5 orang', 'Velocity tracking', 'Burndown chart', 'Definition of Done']),
    },
    {
      categoryId: cat['project-coordinator'], title: 'Client Onboarding Milestone Tracker', level: 'EASY',
      brief: 'Buat tracker milestone onboarding 5 klien baru: welcome packet, kickoff meeting, first delivery, review, dan go-live.',
      storyline: 'Divisi business development butuh tracker onboarding klien baru. 5 klien akan masuk bulan ini.',
      guidance: 'Buat milestone per klien: welcome, kickoff, first delivery, review, go-live. Template email per milestone. Checklist per tahap.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Google Docs']),
      criteria: JSON.stringify(['Tracker 5 klien', '5 milestone per klien', 'Template email', 'Checklist per tahap', 'Visual timeline']),
    },
    {
      categoryId: cat['project-coordinator'], title: 'Vendor & Resource Management Dashboard', level: 'COMPLEX',
      brief: 'Buat dashboard vendor dan resource management untuk proyek konstruksi: 8 vendor, 12 resource person, tracking kontrak, dan budget utilization.',
      storyline: 'Proyek konstruksi butuh dashboard untuk manage 8 vendor dan 12 resource person. Tracking kontrak, pembayaran, dan budget utilization.',
      guidance: 'Database 8 vendor: status kontrak, nilai, tempo. Database 12 resource: skill, availability, rate. Budget utilization tracker. Dashboard visual.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Dashboard Design']),
      criteria: JSON.stringify(['Database 8 vendor', 'Database 12 resource', 'Budget utilization', 'Dashboard visual', 'Tracking kontrak']),
    },
    {
      categoryId: cat['project-coordinator'], title: 'Project Risk Assessment & Mitigation Plan', level: 'COMPLEX',
      brief: 'Buat risk assessment matrix untuk proyek implementasi ERP: identifikasi 15 risiko, probability-impact matrix, mitigation plan, dan contingency budget.',
      storyline: 'Proyek ERP membutuhkan risk assessment komprehensif. 15 risiko teridentifikasi perlu di-mitigasi.',
      guidance: 'Identifikasi 15 risiko. Buat probability-impact matrix. Mitigation plan per risiko. Contingency budget. Monitoring plan.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Risk Assessment Template', 'Google Sheets']),
      criteria: JSON.stringify(['15 risiko teridentifikasi', 'Probability-impact matrix', 'Mitigation plan', 'Contingency budget', 'Monitoring plan']),
    },

    // ═══════════════════════════════════════════════════
    // SECRETARY / EA (5 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Rencana Meeting Board & Undangan Resmi', level: 'EASY',
      brief: 'Siapkan rencana meeting board quarterly termasuk agenda, daftar hadir, surat undangan resmi, dan pengaturan ruangan.',
      storyline: 'Kamu adalah sekretaris yang ditugaskan mempersiapkan rapat board quarterly meeting minggu depan untuk 8 board member.',
      guidance: 'Buat agenda rapat. Template daftar hadir. Surat undangan resmi. Layout pengaturan ruangan.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint']),
      criteria: JSON.stringify(['Agenda 5+ topik', 'Daftar hadir 8 orang', 'Surat undangan resmi', 'Layout ruangan', 'Branding konsisten']),
    },
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Executive Travel & Meeting Pack 2 Hari', level: 'MEDIUM',
      brief: 'Siapkan perjalanan bisnis 2 hari ke Jakarta untuk CEO: itinerary, hotel, transport, meeting brief 3 klien, dan expense tracker.',
      storyline: 'CEO akan melakukan perjalanan bisnis 2 hari ke Jakarta untuk meeting dengan 3 klien potensial.',
      guidance: 'Itinerary jam demi jam. Rekomendasi hotel & transport. Meeting brief 3 klien. Expense tracker.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft Excel', 'Google Maps']),
      criteria: JSON.stringify(['Itinerary 2 hari', 'Rekomendasi hotel & transport', 'Meeting brief 3 klien', 'Expense tracker', 'Dokumen siap cetak']),
    },
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Corporate Event Planning & Coordination', level: 'MEDIUM',
      brief: 'Rencanakan corporate annual dinner untuk 200 orang: venue selection, vendor coordination, MC script, door agenda, dan budget report.',
      storyline: 'Perusahaan akan mengadakan annual dinner untuk 200 karyawan. Kamu harus mengkoordinasikan semua aspek acara.',
      guidance: 'Pilih venue (3 opsi). Koordinasi vendor: catering, dekorasi, MC. Buat MC script. Door agenda. Budget report.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Microsoft Word', 'Google Sheets', 'Vendor Communication']),
      criteria: JSON.stringify(['3 opsi venue', 'Koordinasi vendor', 'MC script', 'Door agenda', 'Budget report']),
    },
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Executive Briefing & Document Preparation', level: 'EASY',
      brief: 'Siapkan executive briefing pack untuk kunjungan investor: company profile, financial summary, team structure, dan presentasi 10 slide.',
      storyline: 'Investor akan mengunjungi kantor. CEO butuh briefing pack lengkap: company profile, financial summary, team structure.',
      guidance: 'Buat company profile 2 halaman. Financial summary 3 tahun. Team structure chart. Presentasi 10 slide.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft PowerPoint', 'Microsoft Excel']),
      criteria: JSON.stringify(['Company profile 2 halaman', 'Financial summary', 'Team structure', 'Presentasi 10 slide', 'Desain profesional']),
    },
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Board Meeting Documentation & Follow-Up', level: 'COMPLEX',
      brief: 'Dokumentasikan rapat board meeting 3 jam: MoM detail, action items 15 item, distribusi notulensi ke 8 board member, dan tracking tindak lanjut.',
      storyline: 'Board meeting berlangsung 3 jam dengan 8 agenda. Kamu harus mendokumentasikan semuanya dan memastikan tindak lanjut terpantau.',
      guidance: 'MoM detail: setiap agenda. 15 action items dengan owner & deadline. Distribusi notulensi. Weekly tracking report.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft Excel', 'Email']),
      criteria: JSON.stringify(['MoM detail 3 jam', '15 action items', 'Distribusi ke 8 orang', 'Weekly tracking', 'Dokumen profesional']),
    },
    {
      categoryId: cat['secretary-executive-assistant'], title: 'Travel Itinerary & Expense Reimbursement Pack', level: 'EASY',
      brief: 'Buat itinerary 3 hari 2 malam ke Surabaya untuk direktur beserta expense reimbursement form dan receipts tracker.',
      storyline: 'Direktur akan ke Surabaya untuk kunjungan pabrik. Kamu harus menyiapkan itinerary dan expense tracker.',
      guidance: 'Itinerary 3 hari. Hotel & transport. Expense reimbursement form. Receipts tracker dengan kategori biaya.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Microsoft Excel', 'Google Maps']),
      criteria: JSON.stringify(['Itinerary 3 hari', 'Expense form', 'Receipts tracker', 'Kategori biaya', 'Format reimbursement']),
    },

    // ═══════════════════════════════════════════════════
    // DATA ENTRY SPECIALIST (5 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['data-entry-specialist'], title: 'Pembersihan Master Database Client 500 Record', level: 'EASY',
      brief: 'Bersihkan database 500+ record client dari duplikasi, format nomor telepon tidak konsisten, dan email invalid.',
      storyline: 'Database client perusahaan memiliki 500+ record yang perlu dibersihkan dari duplikasi, format telepon, dan email invalid.',
      guidance: 'Hapus record duplikat. Standarisasi format telepon (+62xxx). Validasi email. Buat laporan perubahan.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Data Cleaning Formula']),
      criteria: JSON.stringify(['Tidak ada duplikat', 'Format telepon konsisten', 'Email valid', 'Laporan perubahan', 'Master sheet bersih']),
    },
    {
      categoryId: cat['data-entry-specialist'], title: 'Standarisasi Katalog Produk Multi-Supplier 800 Item', level: 'MEDIUM',
      brief: 'Gabungkan dan standarisasi katalog 800 produk dari 3 supplier dengan naming convention, kategori, dan format gambar yang seragam.',
      storyline: 'Perusahaan memiliki 3 supplier dengan katalog berbeda format. Gabungkan 800 produk menjadi satu katalog standar.',
      guidance: 'Buat naming convention. Konsolidasi kategori. Standarisasi format gambar. Validasi data.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Image Editor', 'Batch Resizer']),
      criteria: JSON.stringify(['Naming convention konsisten', 'Kategori terstandarisasi', 'Format gambar seragam', 'Data tidak hilang', 'Siap import']),
    },
    {
      categoryId: cat['data-entry-specialist'], title: 'Data Entry Invoice & Faktur Pajak 200 Transaksi', level: 'EASY',
      brief: 'Input 200 transaksi invoice dan faktur pajak ke sistem accounting dengan validasi data dan cross-check nomor faktur.',
      storyline: 'Bagian accounting butuh input 200 transaksi invoice dari Q3 2024 ke sistem. Data harus valid dan terverifikasi.',
      guidance: 'Input 200 transaksi. Validasi nomor faktur. Cross-check dengan bank statement. Buat summary report.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Accounting Software', 'Calculator']),
      criteria: JSON.stringify(['200 transaksi terinput', 'Nomor faktur valid', 'Cross-check bank statement', 'Summary report', 'Tidak ada error']),
    },
    {
      categoryId: cat['data-entry-specialist'], title: 'Master Data Migration Legacy System', level: 'COMPLEX',
      brief: 'Migrasi 1000+ data customer dari sistem legacy ke sistem baru: mapping field, validasi data, dan reconciliation report.',
      storyline: 'Perusahaan beralih sistem CRM. 1000+ data customer harus dimigrasi dengan akurat.',
      guidance: 'Mapping field lama ke baru. Migrasi data batch. Validasi 100% data. Reconciliation report. Handle error.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'SQL', 'Data Migration Tool']),
      criteria: JSON.stringify(['1000+ data termigrasi', 'Mapping field lengkap', 'Validasi 100%', 'Reconciliation report', 'Zero data loss']),
    },
    {
      categoryId: cat['data-entry-specialist'], title: 'Data Cleansing Product Database 1500 SKU', level: 'MEDIUM',
      brief: 'Bersihkan dan standarisasi database 1500 SKU produk: harga, deskripsi, gambar, kategori, dan status stok.',
      storyline: 'Database produk memiliki 1500 SKU dengan data tidak konsisten. Perlu cleansing sebelum launching website baru.',
      guidance: 'Validasi harga. Bersihkan deskripsi. Verifikasi gambar. Konsolidasi kategori. Update status stok.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Product Database']),
      criteria: JSON.stringify(['1500 SKU terstandarisasi', 'Harga valid', 'Deskripsi bersih', 'Gambar terverifikasi', 'Status stok akurat']),
    },
    {
      categoryId: cat['data-entry-specialist'], title: 'Employee Database Standardization 300 Karyawan', level: 'EASY',
      brief: 'Standarisasi database 300 karyawan: nama, NIP, divisi, jabatan, telepon, email, dan rekening bank.',
      storyline: 'HRD butuh standarisasi database 300 karyawan untuk migrasi ke sistem HRIS baru.',
      guidance: 'Validasi NIP. Standarisasi format nama. Verifikasi email & telepon. Input rekening bank. Reconciliation.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets']),
      criteria: JSON.stringify(['300 data terstandarisasi', 'NIP valid', 'Format nama konsisten', 'Email & telepon valid', 'Rekening bank terverifikasi']),
    },

    // ═══════════════════════════════════════════════════
    // DATA ANNOTATION / AI TRAINER (5 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Labeling Text Sentiment Dataset 500 Ulasan', level: 'EASY',
      brief: 'Label 500 ulasan pelanggan dengan sentiment (positive/negative/neutral) beserta confidence score untuk training model NLP.',
      storyline: 'Tim AI membutuhkan dataset berlabel untuk training model sentiment analysis dari 500 ulasan pelanggan.',
      guidance: 'Baca setiap ulasan. Tentukan sentiment. Berikan confidence score (0-1). Pastikan konsistensi labeling.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Labeling Guidelines']),
      criteria: JSON.stringify(['500 ulasan terlabeli', 'Confidence score', 'Konsistensi labeling', 'Distribusi wajar', 'Laporan ringkasan']),
    },
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Bounding Box Object Detection 300 Gambar', level: 'MEDIUM',
      brief: 'Annotate 300 gambar produk dengan bounding box untuk training model object detection e-commerce.',
      storyline: 'Tim AI mengembangkan model object detection untuk e-commerce. 300 gambar produk perlu dianotasi.',
      guidance: 'Gunakan LabelImg/CVAT. Tentukan class. Gambar bounding box akurat. Koordinat konsisten.',
      toolsNeeded: JSON.stringify(['CVAT', 'LabelImg', 'Image Annotation Tool']),
      criteria: JSON.stringify(['300 gambar terannotasi', 'Class label benar', 'Bounding box akurat', 'Format output sesuai', 'Laporan kualitas']),
    },
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Named Entity Recognition (NER) Dataset 1000 Kalimat', level: 'COMPLEX',
      brief: 'Annotate 1000 kalimat berita Indonesia untuk Named Entity Recognition: PERSON, ORGANIZATION, LOCATION, DATE.',
      storyline: 'Tim AI butuh dataset NER berita Indonesia. 1000 kalimat harus dianotasi dengan 4 entity type.',
      guidance: 'Pelajari guideline NER. Annotate 4 entity type: PERSON, ORG, LOC, DATE. Konsistensi annotasi. Quality check.',
      toolsNeeded: JSON.stringify(['Label Studio', 'Prodigy', 'Excel']),
      criteria: JSON.stringify(['1000 kalimat terannotasi', '4 entity type', 'Konsistensi annotasi', 'Quality check report', 'Inter-annotator agreement']),
    },
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Image Classification Dataset 500 Gambar', level: 'EASY',
      brief: 'Klasifikasikan 500 gambar produk ke dalam 10 kategori: elektronik, fashion, makanan, minuman, kecantikan, kesehatan, rumah tangga, olahraga, otomotif, buku.',
      storyline: 'Tim AI butuh dataset klasifikasi gambar produk. 500 gambar harus diklasifikasikan ke 10 kategori.',
      guidance: 'Lihat setiap gambar. Tentukan kategori yang sesuai. Pastikan konsistensi. Handle gambar ambigu.',
      toolsNeeded: JSON.stringify(['Label Studio', 'Excel', 'Image Viewer']),
      criteria: JSON.stringify(['500 gambar terklasifikasi', '10 kategori', 'Konsistensi label', 'Handle ambiguitas', 'Laporan distribusi']),
    },
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Text Summarization Dataset 200 Artikel', level: 'COMPLEX',
      brief: 'Buat dataset text summarization: 200 artikel berita dengan summary 2-3 kalimat dan keyword 5-10 untuk training model summarization.',
      storyline: 'Tim AI butuh dataset summarization berita Indonesia. 202 artikel perlu dibuatkan summary dan keyword.',
      guidance: 'Baca setiap artikel. Buat summary 2-3 kalimat. Ekstrak 5-10 keyword. Pastikan summary akurat dan informatif.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Text Editor']),
      criteria: JSON.stringify(['200 artikel ter-summary', 'Summary 2-3 kalimat', '5-10 keyword per artikel', 'Summary akurat', 'Format konsisten']),
    },
    {
      categoryId: cat['data-annotation-ai-trainer'], title: 'Speech-to-Text Transcription 50 Audio', level: 'MEDIUM',
      brief: 'Transkrip 50 file audio percakapan customer service ke teks dengan timestamp dan speaker identification.',
      storyline: 'Tim AI butuh dataset transkrip audio customer service. 50 file audio harus ditranskrip dengan akurat.',
      guidance: 'Dengarkan setiap audio. Transkrip dengan timestamp. Identifikasi speaker. Handle noise & accent.',
      toolsNeeded: JSON.stringify(['Audacity', 'Transcription Tool', 'Excel']),
      criteria: JSON.stringify(['50 audio tertranskrip', 'Timestamp akurat', 'Speaker identification', 'Handle noise', 'Format konsisten']),
    },

    // ═══════════════════════════════════════════════════
    // TRANSLATION / LOCALIZER (5 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['translation-localizer'], title: 'Penerjemahan Artikel Blog Teknologi 5 Artikel', level: 'EASY',
      brief: 'Terjemahkan 5 artikel blog teknologi dari Bahasa Inggris ke Indonesia dengan glossary teknis dan side-by-side comparison.',
      storyline: 'Startup teknologi butuh 5 artikel blog diterjemahkan ke Bahasa Indonesia untuk target audience lokal.',
      guidance: 'Baca artikel sumber. Terjemahkan pertahankan konteks. Buat glossary istilah teknis. Dokumen side-by-side.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Google Docs', 'Translation Memory']),
      criteria: JSON.stringify(['5 artikel akurat', 'Glossary teknis', 'Side-by-side comparison', 'Natural & dipahami', 'Konsistensi terminologi']),
    },
    {
      categoryId: cat['translation-localizer'], title: 'Lokalisasi UI Aplikasi Web 150 String', level: 'MEDIUM',
      brief: 'Lokalisasi 150 string UI aplikasi web dari English ke Bahasa Indonesia dengan memperhatikan konteks dan panjang teks.',
      storyline: 'Aplikasi SaaS akan diluncurkan di pasar Indonesia. 150 string UI perlu dilokalisasi.',
      guidance: 'Analisis konteks string. Pertimbangkan panjang teks. Terjemahan konsisten. Dokumentasikan keputusan.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Translation Management Tool']),
      criteria: JSON.stringify(['150 string terlokalisasi', 'Kontekstual & akurat', 'Konsistensi terminologi', 'Pertimbangan UI', 'Dokumentasi keputusan']),
    },
    {
      categoryId: cat['translation-localizer'], title: 'Penerjemahan Dokumen Hukum Kontrak 10 Halaman', level: 'COMPLEX',
      brief: 'Terjemahkan dokumen kontrak kerja sama bisnis 10 halaman dari Bahasa Indonesia ke Inggris dengan terminologi hukum yang tepat.',
      storyline: 'Perusahaan butuh terjemahan kontrak kerja sama untuk partner internasional. 10 halaman dokumen hukum.',
      guidance: 'Pelajari terminologi hukum. Terjemahkan dengan akurat. Pertimbangkan konteks hukum Indonesia. Review oleh legal.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Legal Dictionary', 'Translation Memory']),
      criteria: JSON.stringify(['10 halaman terjemahan', 'Terminologi hukum tepat', 'Akurat secara legal', 'Review legal', 'Format profesional']),
    },
    {
      categoryId: cat['translation-localizer'], title: 'Subtitle Translation Video Tutorial 5 Video', level: 'EASY',
      brief: 'Buat subtitle Bahasa Indonesia untuk 5 video tutorial teknologi (total 25 menit) dengan timing yang tepat.',
      storyline: 'Platform e-learning butuh subtitle Indonesia untuk 5 video tutorial. Total durasi 25 menit.',
      guidance: 'Transkrip audio. Terjemahkan subtitle. Sync timing. Format SRT/VTT. Quality check.',
      toolsNeeded: JSON.stringify(['Subtitle Edit', 'YouTube Studio', 'Text Editor']),
      criteria: JSON.stringify(['5 video bersubtitle', 'Timing akurat', 'Terjemahan natural', 'Format SRT/VTT', 'Quality check']),
    },
    {
      categoryId: cat['translation-localizer'], title: 'Website Localization E-Commerce 50 Halaman', level: 'COMPLEX',
      brief: 'Lokalisasi 50 halaman website e-commerce dari English ke Indonesia: product descriptions, category pages, FAQ, dan checkout flow.',
      storyline: 'E-commerce internasional masuk pasar Indonesia. 50 halaman website perlu dilokalisasi.',
      guidance: 'Prioritas halaman: product, category, FAQ, checkout. Konsistensi terminologi. SEO-friendly translation. Quality check.',
      toolsNeeded: JSON.stringify(['Google Sheets', 'CMS Platform', 'SEO Tool']),
      criteria: JSON.stringify(['50 halaman terlokalisasi', 'Konsistensi terminologi', 'SEO-friendly', 'Natural & dipahami', 'Quality check']),
    },
    {
      categoryId: cat['translation-localizer'], title: 'Translasi Email Marketing Campaign 30 Email', level: 'MEDIUM',
      brief: 'Terjemahkan 30 email marketing campaign dari Bahasa Inggris ke Indonesia: welcome series, promo, dan follow-up.',
      storyline: 'Tim marketing internasional butuh 30 email marketing diterjemahkan untuk pasar Indonesia.',
      guidance: 'Terjemahkan subject line & body. Pertimbangkan cultural context. Maintain brand voice. A/B test variations.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Email Marketing Tool', 'Google Docs']),
      criteria: JSON.stringify(['30 email terjemahan', 'Subject line menarik', 'Brand voice konsisten', 'Cultural context', 'Siap kirim']),
    },

    // ═══════════════════════════════════════════════════
    // VOICE OVER / VOICE TALENT (5 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Perekaman Script Iklan Skincare 30 Detik', level: 'EASY',
      brief: 'Rekam voice over untuk iklan produk skincare 30 detik dengan tone profesional dan energik.',
      storyline: 'Brand skincare lokal membutuhkan voice over untuk iklan TV 30 detik.',
      guidance: 'Pelajari script & brand guidelines. Rekam artikulasi jelas. Tambahkan emotion. Edit audio. Export MP3/WAV.',
      toolsNeeded: JSON.stringify(['Audio Recording Software', 'Microphone', 'Audio Editor']),
      criteria: JSON.stringify(['Audio 30 detik', 'Tone profesional', 'Artikulasi jelas', 'MP3/WAV berkualitas', 'Script dengan time mark']),
    },
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Narrasi Video Tutorial E-Learning 5 Video', level: 'MEDIUM',
      brief: 'Rekam narasi untuk 5 video tutorial penggunaan software (total 10 menit) dengan karakter suara konsisten.',
      storyline: 'Platform e-learning membutuhkan narasi untuk 5 video tutorial. Total durasi 10 menit.',
      guidance: 'Pelajari materi tutorial. Rekam per video. Jaga konsistensi tone. Edit audio. Export per video.',
      toolsNeeded: JSON.stringify(['Audio Recording Software', 'Microphone', 'Audio Editor']),
      criteria: JSON.stringify(['5 narasi video', 'Total 10 menit', 'Karakter konsisten', 'Pacing tepat', 'Audio tanpa noise']),
    },
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Voice Over Iklan Produk Makanan 15 Detik', level: 'EASY',
      brief: 'Rekam voice over untuk iklan produk makanan ringan 15 detik dengan tone cheerful dan menggugah selera.',
      storyline: 'Brand makanan ringan butuh voice over untuk iklan 15 detik di media sosial.',
      guidance: 'Pelajari produk & target audience. Rekam tone cheerful. Emphasize keywords. Edit & clean audio.',
      toolsNeeded: JSON.stringify(['Audio Recording Software', 'Microphone', 'Audio Editor']),
      criteria: JSON.stringify(['Audio 15 detik', 'Tone cheerful', 'Artikulasi jelas', 'File berkualitas', 'Siap publish']),
    },
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Narasi Video Profil Perusahaan 3 Menit', level: 'MEDIUM',
      brief: 'Rekam narasi untuk video profil perusahaan 3 menit dengan tone profesional, inspiratif, dan warm.',
      storyline: 'Perusahaan butuh video profil baru. Narasi 3 menit dengan tone profesional dan inspiratif.',
      guidance: 'Pelajari visi & misi perusahaan. Rekam dengan pacing yang tepat. Variasikan tone sesuai konteks. Edit & mixing.',
      toolsNeeded: JSON.stringify(['Audio Recording Software', 'Professional Microphone', 'Audio Editor', 'DAW']),
      criteria: JSON.stringify(['Narasi 3 menit', 'Tone profesional & inspiratif', 'Pacing tepat', 'Audio berkualitas studio', 'Siap mixing']),
    },
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Podcast Intro & Outro 10 Episode', level: 'EASY',
      brief: 'Rekam intro (30 detik) dan outro (20 detik) untuk 10 episode podcast teknologi dengan energi yang konsisten.',
      storyline: 'Podcast teknologi butuh intro & outro profesional untuk 10 episode pertama.',
      guidance: 'Rekam intro 30 detik. Rekam outro 20 detik. Jaga konsistensi energi. Export dengan noise reduction.',
      toolsNeeded: JSON.stringify(['Audio Recording Software', 'Microphone', 'Audio Editor']),
      criteria: JSON.stringify(['10 intro & outro', 'Durasi tepat', 'Energi konsisten', 'Audio bersih', 'Format siap pakai']),
    },
    {
      categoryId: cat['voice-over-voice-talent'], title: 'Audiobook Narration 5 Chapter', level: 'COMPLEX',
      brief: 'Narasikan 5 chapter buku non-fiksi (total 20.000 kata) dengan karakter suara yang konsisten dan pacing yang tepat untuk pembelajaran.',
      storyline: 'Penerbit butuh narasi audiobook untuk buku non-fiksi. 5 chapter dengan total 20.000 kata.',
      guidance: 'Baca seluruh naskah. Rekam per chapter. Jaga konsistensi karakter. Pacing untuk pembelajaran. Edit & mastering.',
      toolsNeeded: JSON.stringify(['Professional Microphone', 'DAW', 'Audio Editor', 'Mastering Tool']),
      criteria: JSON.stringify(['5 chapter ter narasi', 'Total 20.000 kata', 'Karakter konsisten', 'Pacing tepat', 'Audio studio quality']),
    },

    // ═══════════════════════════════════════════════════
    // EMAIL MANAGEMENT (5 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['email-management'], title: 'Pemilahan Inbox & Draft Balasan 50 Email', level: 'EASY',
      brief: 'Kelola 50 email masuk: prioritaskan urgent, draft balasan 10 email penting, buat sistem folder.',
      storyline: 'Inbox executive penuh dengan 50 email. Kamu harus memilah prioritas dan membuat draft balasan.',
      guidance: 'Kategorikan: Urgent, Important, Information, Spam. Draft balasan 10 email. Buat folder system.',
      toolsNeeded: JSON.stringify(['Microsoft Outlook', 'Gmail', 'Email Client']),
      criteria: JSON.stringify(['50 email terkategorikan', 'Draft 10 email', 'Sistem folder', 'Prioritas teridentifikasi', 'Dokumentasi proses']),
    },
    {
      categoryId: cat['email-management'], title: 'Email Drip Campaign Onboarding 7 Email', level: 'MEDIUM',
      brief: 'Rancang urutan 7 email drip campaign untuk onboarding new user SaaS product.',
      storyline: 'Product team meminta kamu merancang email drip campaign onboarding 7 email.',
      guidance: 'Rancang user journey. Tentukan konten per email. Subject line menarik. Scheduling optimal.',
      toolsNeeded: JSON.stringify(['Email Marketing Tool', 'Microsoft Word', 'Google Docs']),
      criteria: JSON.stringify(['7 email drip campaign', 'Subject line menarik', 'Konten informatif', 'Scheduling optimal', 'User journey jelas']),
    },
    {
      categoryId: cat['email-management'], title: 'Email Newsletter Weekly 4 Edisi', level: 'EASY',
      brief: 'Buat 4 edisi email newsletter mingguan untuk startup teknologi: headline, 3 artikel, CTA, dan footer.',
      storyline: 'Startup teknologi butuh newsletter mingguan. 4 edisi pertama harus disiapkan.',
      guidance: 'Tentukan tema per edisi. Buat headline menarik. Pilih 3 artikel per edisi. CTA yang jelas.',
      toolsNeeded: JSON.stringify(['Email Marketing Tool', 'Canva', 'Google Docs']),
      criteria: JSON.stringify(['4 edisi newsletter', 'Headline menarik', '3 artikel per edisi', 'CTA jelas', 'Desain konsisten']),
    },
    {
      categoryId: cat['email-management'], title: 'Cold Email Outreach Campaign 20 Email', level: 'MEDIUM',
      brief: 'Buat 20 cold email template untuk business development: personalisasi, value proposition, dan follow-up sequence.',
      storyline: 'Tim business development butuh cold email templates untuk outreach 20 target klien.',
      guidance: 'Research target klien. Personalisasi email. Value proposition jelas. Follow-up sequence 3x.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Email Marketing Tool', 'CRM']),
      criteria: JSON.stringify(['20 cold email templates', 'Personalisasi', 'Value proposition', 'Follow-up sequence', 'Siap kirim']),
    },
    {
      categoryId: cat['email-management'], title: 'Customer Support Email Response 30 Template', level: 'EASY',
      brief: 'Buat 30 template email response untuk customer support: inquiry, complaint, feedback, thank you, dan follow-up.',
      storyline: 'Tim customer support butuh standardisasi email response. 30 template untuk berbagai situasi.',
      guidance: 'Identifikasi 6 jenis email masuk. Buat 5 template per jenis. Personalisasi. Maintain brand voice.',
      toolsNeeded: JSON.stringify(['Microsoft Word', 'Google Docs', 'Email Template']),
      criteria: JSON.stringify(['30 template email', '6 jenis situasi', 'Personalisasi', 'Brand voice konsisten', 'Siap digunakan']),
    },
    {
      categoryId: cat['email-management'], title: 'Email Marketing Campaign Product Launch', level: 'COMPLEX',
      brief: 'Rancang email marketing campaign lengkap untuk product launch: teaser (3 email), launch day, post-launch (3 email), dan re-engagement.',
      storyline: 'Product team akan launch produk baru. Email marketing campaign lengkap dibutuhkan.',
      guidance: 'Teaser campaign 3 email. Launch day email. Post-launch 3 email. Re-engagement. A/B testing plan.',
      toolsNeeded: JSON.stringify(['Email Marketing Tool', 'Canva', 'Analytics Tool']),
      criteria: JSON.stringify(['Teaser 3 email', 'Launch day email', 'Post-launch 3 email', 'Re-engagement', 'A/B testing plan']),
    },

    // ═══════════════════════════════════════════════════
    // SCHEDULE MANAGEMENT (5 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['schedule-management'], title: 'Jadwal Harian Tim Lintas Zona Waktu 3 Zona', level: 'EASY',
      brief: 'Susun jadwal harian untuk tim di 3 zona waktu (WIB, WITA, WIT) dengan meeting time adil dan focus time.',
      storyline: 'Tim remote tersebar di 3 zona waktu Indonesia. Jadwal harus adil untuk semua.',
      guidance: 'Hitung perbedaan zona waktu. Tentukan jam overlap. Rotasi meeting time. Blok focus time.',
      toolsNeeded: JSON.stringify(['Google Calendar', 'World Time Buddy', 'Microsoft Excel']),
      criteria: JSON.stringify(['Jadwal 3 zona waktu', 'Meeting time adil', 'Focus time', 'Template berulang', 'Dokumentasi zona waktu']),
    },
    {
      categoryId: cat['schedule-management'], title: 'Rencana Jadwal Event Konferensi 2 Hari', level: 'MEDIUM',
      brief: 'Buat jadwal detail konferensi teknologi 2 hari: 3 tracks paralel, 15 pembicara, break time, koordinasi ruangan.',
      storyline: 'Konferensi teknologi 2 hari dengan 3 tracks paralel dan 15 pembicara.',
      guidance: 'Rancang 3 tracks. Assign 15 pembicara. Sisipkan break time. Koordinasi ruangan.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Event Planning Tool']),
      criteria: JSON.stringify(['Jadwal 2 hari', '3 tracks', '15 pembicara', 'Break time', 'Koordinasi ruangan']),
    },
    {
      categoryId: cat['schedule-management'], title: 'Weekly Team Schedule Template 7 Hari', level: 'EASY',
      brief: 'Buat template jadwal mingguan untuk tim 10 orang: meeting, focus time, 1-on-1, dan deadline tracker.',
      storyline: 'Tim 10 orang butuh template jadwal mingguan yang konsisten.',
      guidance: 'Buat template 7 hari. Alokasi meeting, focus time, 1-on-1. Deadline tracker. Color coding.',
      toolsNeeded: JSON.stringify(['Google Calendar', 'Google Sheets', 'Microsoft Excel']),
      criteria: JSON.stringify(['Template 7 hari', 'Meeting, focus time, 1-on-1', 'Deadline tracker', 'Color coding', 'Mudah digunakan']),
    },
    {
      categoryId: cat['schedule-management'], title: 'Project Milestone & Deadline Tracker 3 Bulan', level: 'MEDIUM',
      brief: 'Buat tracker milestone proyek 3 bulan dengan deadline, dependencies, dan progress indicator untuk 5 tim.',
      storyline: 'Proyek 3 bulan melibatkan 5 tim. Milestone dan deadline harus terpantau.',
      guidance: 'Define milestone per bulan. Map dependencies. Progress indicator per tim. Weekly update template.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Project Management Tool']),
      criteria: JSON.stringify(['Milestone 3 bulan', 'Dependencies mapped', 'Progress indicator', 'Weekly update', '5 tim terkoordinasi']),
    },
    {
      categoryId: cat['schedule-management'], title: 'Meeting Schedule Optimization 20 Peserta', level: 'COMPLEX',
      brief: 'Optimasi jadwal meeting untuk 20 peserta lintas departemen: cari slot waktu optimal, hindari conflict, dan minimize meeting fatigue.',
      storyline: '20 peserta dari 5 departemen harus meeting. Cari jadwal optimal yang tidak conflict.',
      guidance: 'Survey availability 20 orang. Identifikasi slot optimal. Hindari meeting >2 jam. Distribusi meeting sepanjang minggu.',
      toolsNeeded: JSON.stringify(['Google Calendar', 'Doodle', 'Microsoft Excel']),
      criteria: JSON.stringify(['20 peserta terjadwal', 'Tidak ada conflict', 'Slot optimal', 'Meeting fatigue minimized', 'Dokumentasi']),
    },
    {
      categoryId: cat['schedule-management'], title: 'Academic Exam Schedule 100 Mahasiswa', level: 'EASY',
      brief: 'Buat jadwal ujian akhir semester untuk 100 mahasiswa: 5 mata kuliah, 3 ruangan, 5 hari, tanpa overlap.',
      storyline: 'Fakultas butuh jadwal ujian untuk 100 mahasiswa. 5 mata kuliah, 3 ruangan, 5 hari.',
      guidance: 'Map mata kuliah ke ruangan. Hindari overlap jadwal mahasiswa. Distribusi beban 5 hari. Buffer antar ujian.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets']),
      criteria: JSON.stringify(['100 mahasiswa terjadwal', '5 mata kuliah', '3 ruangan', 'Tidak overlap', 'Distribusi 5 hari']),
    },

    // ═══════════════════════════════════════════════════
    // TRAVEL PLANNER (5 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['travel-planner'], title: 'Travel Itinerary & Budget Bali 3D2N', level: 'EASY',
      brief: 'Buat itinerary detail 3 hari 2 malam ke Bali untuk 4 orang: akomodasi, transport, aktivitas, budget sheet.',
      storyline: 'Keluarga 4 orang berencana liburan ke Bali 3 hari 2 malam.',
      guidance: 'Riset destinasi Bali. Pilih akomodasi strategis. Rencanakan transport. Daily itinerary balanced. Budget sheet detail.',
      toolsNeeded: JSON.stringify(['Google Maps', 'Microsoft Excel', 'Travel Booking Sites']),
      criteria: JSON.stringify(['Itinerary 3 hari', 'Rekomendasi akomodasi', 'Rencana transport', 'Aktivitas per hari', 'Budget sheet']),
    },
    {
      categoryId: cat['travel-planner'], title: 'Business Trip Planner Tokyo 5D4N', level: 'MEDIUM',
      brief: 'Rencanakan perjalanan bisnis 5 hari ke Tokyo untuk 2 orang: meeting schedule, hotel, transport, cultural guide.',
      storyline: 'Dua eksekutif akan bisnis trip 5 hari ke Tokyo.',
      guidance: 'Riset hotel strategis. Meeting schedule dengan buffer. Guide JR Pass & subway. Cultural etiquette guide.',
      toolsNeeded: JSON.stringify(['Google Maps', 'Microsoft Word', 'Microsoft Excel']),
      criteria: JSON.stringify(['Itinerary 5 hari', 'Meeting schedule', 'Rekomendasi hotel', 'Guide transport Tokyo', 'Cultural guide']),
    },
    {
      categoryId: cat['travel-planner'], title: 'Family Vacation Planner Lombok 4D3N', level: 'EASY',
      brief: 'Rencanakan liburan keluarga 4 hari 3 malam ke Lombok untuk 6 orang (2 dewasa, 4 anak): aktivitas child-friendly.',
      storyline: 'Keluarga besar 6 orang akan liburan ke Lombok. Aktivitas harus child-friendly.',
      guidance: 'Pilih aktivitas child-friendly. Akomodasi family-friendly. Transport nyaman untuk keluarga. Budget sheet.',
      toolsNeeded: JSON.stringify(['Google Maps', 'Microsoft Excel', 'Travel Apps']),
      criteria: JSON.stringify(['Itinerary 4 hari', 'Aktivitas child-friendly', 'Akomodasi family', 'Transport nyaman', 'Budget lengkap']),
    },
    {
      categoryId: cat['travel-planner'], title: 'Honeymoon Trip Planner Maldives 5D4N', level: 'MEDIUM',
      brief: 'Rencanakan honeymoon trip 5 hari 4 malam ke Maldives untuk pasangan: resort, aktivitas romantic, budget premium.',
      storyline: 'Pasangan baru menikah akan honeymoon ke Maldives. Budget premium.',
      guidance: 'Pilih resort romantic. Aktivitas: snorkeling, sunset cruise, spa. Budget premium detail. Tips & tricks.',
      toolsNeeded: JSON.stringify(['Google Maps', 'Travel Booking Sites', 'Microsoft Excel']),
      criteria: JSON.stringify(['Itinerary 5 hari', 'Resort romantic', 'Aktivitas romantic', 'Budget premium', 'Tips & tricks']),
    },
    {
      categoryId: cat['travel-planner'], title: 'Backpacking Trip Planner Southeast Asia 14 Hari', level: 'COMPLEX',
      brief: 'Rencanakan backpacking trip 14 hari ke 4 negara Southeast Asia: Thailand, Vietnam, Cambodia, Laos. Budget backpacker.',
      storyline: 'Backpacker akan trip 14 hari ke 4 negara Southeast Asia. Budget minimal.',
      guidance: 'Route planning 4 negara. Budget backpacker. Transport antar negara. Akomodasi murah. Tips hemat.',
      toolsNeeded: JSON.stringify(['Google Maps', 'Skyscanner', 'Hostel Booking Sites', 'Microsoft Excel']),
      criteria: JSON.stringify(['Itinerary 14 hari', '4 negara', 'Budget backpacker', 'Transport antar negara', 'Tips hemat']),
    },
    {
      categoryId: cat['travel-planner'], title: 'Corporate Retreat Organizer 3 Hari 30 Orang', level: 'COMPLEX',
      brief: 'Rencanakan company retreat 3 hari untuk 30 orang: venue, team building activities, transport, catering, budget report.',
      storyline: 'Perusahaan akan mengadakan retreat 3 hari untuk 30 karyawan.',
      guidance: 'Pilih venue retreat. Rencanakan team building. Koordinasi transport & catering. Budget report detail.',
      toolsNeeded: JSON.stringify(['Microsoft Excel', 'Google Sheets', 'Venue Booking Sites']),
      criteria: JSON.stringify(['Venue retreat', 'Team building 3 hari', 'Transport 30 orang', 'Catering', 'Budget report']),
    },

    // ═══════════════════════════════════════════════════
    // SOCIAL MEDIA MANAGEMENT (5 projects)
    // ═══════════════════════════════════════════════════
    {
      categoryId: cat['social-media-management'], title: 'Content Calendar Mingguan Fashion Muslim', level: 'EASY',
      brief: 'Buat content calendar 1 minggu untuk brand fashion Muslim: 7 postingan Instagram + 3 stories.',
      storyline: 'Brand fashion Muslim butuh content calendar mingguan Instagram.',
      guidance: 'Riset trending topic. Rencanakan tema per hari. Buat caption engaging. Pilih hashtag relevan.',
      toolsNeeded: JSON.stringify(['Canva', 'Later', 'Instagram', 'Google Sheets']),
      criteria: JSON.stringify(['7 postingan feed', 'Caption engaging', 'Hashtag relevan', '3 stories', 'Konsistensi visual']),
    },
    {
      categoryId: cat['social-media-management'], title: 'Social Media Strategy Skincare 1 Bulan', level: 'MEDIUM',
      brief: 'Buat strategi social media 1 bulan untuk brand skincare: content pillars, posting schedule, engagement strategy.',
      storyline: 'Brand skincare baru butuh strategi social media 1 bulan.',
      guidance: 'Riset target audience & competitor. Definisikan content pillars. Posting schedule. Engagement strategy.',
      toolsNeeded: JSON.stringify(['Instagram Insights', 'Facebook Business Suite', 'Canva', 'Google Sheets']),
      criteria: JSON.stringify(['Strategi 1 bulan', 'Content pillars', 'Posting schedule', 'Engagement strategy', 'Template analitik']),
    },
    {
      categoryId: cat['social-media-management'], title: 'F&B Restaurant Launch Campaign 2 Minggu', level: 'MEDIUM',
      brief: 'Buat campaign launching restoran F&B baru 2 minggu: teaser, grand opening, promo opening, dan UGC campaign.',
      storyline: 'Restoran F&B baru akan launching. Campaign 2 minggu untuk awareness.',
      guidance: 'Teaser campaign 3 hari. Grand opening event. Promo opening 1 minggu. UGC campaign.',
      toolsNeeded: JSON.stringify(['Canva', 'Instagram', 'TikTok', 'Google Sheets']),
      criteria: JSON.stringify(['Teaser campaign', 'Grand opening', 'Promo opening', 'UGC campaign', 'Content 2 minggu']),
    },
    {
      categoryId: cat['social-media-management'], title: 'B2B LinkedIn Thought Leadership Strategy', level: 'COMPLEX',
      brief: 'Buat strategi LinkedIn thought leadership 3 bulan untuk CEO startup: content plan, posting schedule, engagement strategy.',
      storyline: 'CEO startup ingin membangun personal branding di LinkedIn. Strategi 3 bulan.',
      guidance: 'Audit LinkedIn profile CEO. Content plan 3 bulan. Posting schedule. Engagement strategy. Metrics tracking.',
      toolsNeeded: JSON.stringify(['LinkedIn', 'Canva', 'Google Sheets', 'Content Planning Tool']),
      criteria: JSON.stringify(['Strategi 3 bulan', 'Content plan', 'Posting schedule', 'Engagement strategy', 'Metrics tracking']),
    },
    {
      categoryId: cat['social-media-management'], title: 'E-Commerce Flash Sale Campaign 7 Hari', level: 'EASY',
      brief: 'Buat campaign flash sale 7 hari untuk e-commerce: daily deals, countdown, urgency posts, dan retargeting ads.',
      storyline: 'E-commerce akan mengadakan flash sale 7 hari. Campaign lengkap dibutuhkan.',
      guidance: 'Rencanakan daily deals. Buat countdown content. Urgency posts. Retargeting ads strategy.',
      toolsNeeded: JSON.stringify(['Canva', 'Instagram', 'Facebook Ads', 'Google Sheets']),
      criteria: JSON.stringify(['Campaign 7 hari', 'Daily deals', 'Countdown content', 'Urgency posts', 'Retargeting ads']),
    },
    {
      categoryId: cat['social-media-management'], title: 'TikTok Content Strategy Brand Skincare 1 Bulan', level: 'MEDIUM',
      brief: 'Buat strategi TikTok 1 bulan untuk brand skincare: content pillars, trending sounds, hashtag strategy, dan viral content plan.',
      storyline: 'Brand skincare ingin masuk TikTok. Strategi 1 bulan untuk awareness & engagement.',
      guidance: 'Riset trending sounds & hashtag. Content pillars TikTok. Viral content strategy. Posting schedule.',
      toolsNeeded: JSON.stringify(['TikTok', 'Canva', 'CapCut', 'Google Sheets']),
      criteria: JSON.stringify(['Strategi 1 bulan', 'Content pillars', 'Trending sounds', 'Hashtag strategy', 'Viral content plan']),
    },
  ]

  for (const project of projects) {
    await prisma.project.create({ data: project })
  }

  console.log('Seeding completed successfully!')
  console.log(`Created ${categories.length} categories and ${projects.length} projects.`)
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
