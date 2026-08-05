export interface LatihanSeed {
  categorySlug: string
  slug: string
  title: string
  description: string
  instruction: string
  level: string
  durationMinutes: number
  order: number
  questions: Array<{
    question: string
    options: string[]
    answerIndex: number
    explanation: string
  }>
}

export const LATIHAN_SEED: LatihanSeed[] = [
  // ════════════════════════════════════════
  // DATA ANALYST
  // ════════════════════════════════════════
  {
    categorySlug: 'data-analyst',
    slug: 'quiz-dasar-data-analyst',
    title: 'Kuis Dasar: Peran Data Analyst',
    description: 'Uji pemahaman tentang peran, tanggung jawab, dan siklus kerja seorang data analyst.',
    instruction: 'Pilih satu jawaban yang paling tepat untuk setiap pertanyaan. Tidak ada batasan waktu ketat, tetapi usahakan selesai dalam 10 menit.',
    level: 'EASY',
    durationMinutes: 10,
    order: 1,
    questions: [
      {
        question: 'Apa kegiatan yang memakan porsi terbesar waktu seorang data analyst?',
        options: ['Membuat presentasi', 'Membersihkan data (data cleaning)', 'Menulis laporan akhir', 'Menghadiri rapat'],
        answerIndex: 1,
        explanation: 'Sekitar 80% waktu data analyst dihabiskan untuk membersihkan dan menyiapkan data sebelum analisis dimulai.',
      },
      {
        question: 'Urutan yang benar dalam siklus kerja data analyst adalah...',
        options: ['Pengumpulan data → definisi masalah → analisis → laporan', 'Definisi masalah → pengumpulan data → pembersihan data → analisis → visualisasi → rekomendasi', 'Analisis → pembersihan → masalah → laporan', 'Visualisasi → analisis → masalah → rekomendasi'],
        answerIndex: 1,
        explanation: 'Siklus dimulai dari memahami masalah bisnis, lalu mengumpulkan, membersihkan, menganalisis, memvisualisasikan, dan memberikan rekomendasi.',
      },
      {
        question: 'Manakah keterampilan yang PALING penting untuk komunikasi hasil analisis?',
        options: ['Menulis kode program', 'Menyampaikan insight dengan bahasa sederhana', 'Menguasai semua bahasa pemrograman', 'Menghafal rumus statistik'],
        answerIndex: 1,
        explanation: 'Data analyst harus mampu mengomunikasikan temuan kepada pihak non-teknis agar insight benar-benar digunakan untuk keputusan bisnis.',
      },
      {
        question: 'Dalam studi kasus retail, apa yang dilakukan analyst untuk melihat penjualan per kategori dan per toko sekaligus?',
        options: ['Membuat pivot table', 'Menghapus data duplikat', 'Mengubah format tanggal', 'Menghitung rata-rata manual'],
        answerIndex: 0,
        explanation: 'Pivot table memungkinkan agregasi data dari beberapa dimensi (kategori dan toko) secara cepat dan fleksibel.',
      },
      {
        question: 'Salah satu contoh output utama seorang data analyst adalah...',
        options: ['Desain logo perusahaan', 'Dashboard performa penjualan', 'Jadwal rapat tim', 'Draft kontrak vendor'],
        answerIndex: 1,
        explanation: 'Dashboard yang memuat KPI dan tren adalah output khas analyst untuk mendukung pengambilan keputusan.',
      },
    ],
  },
  {
    categorySlug: 'data-analyst',
    slug: 'quiz-data-cleaning',
    title: 'Kuis Teknik Pembersihan Data',
    description: 'Latihan mengidentifikasi data kotor dan memilih teknik pembersihan yang tepat.',
    instruction: 'Bayangkan Anda sedang mengerjakan dataset nyata. Pilih tindakan yang paling tepat untuk setiap situasi.',
    level: 'MEDIUM',
    durationMinutes: 12,
    order: 2,
    questions: [
      {
        question: 'Ditemukan 50 baris duplikat di data penjualan Toko B. Apa tindakan pertama yang benar?',
        options: ['Langsung hapus semua baris yang mirip', 'Identifikasi kunci unik (misal nomor transaksi) lalu hapus duplikat berdasarkan kunci tersebut', 'Isi duplikat dengan angka 0', 'Biarkan saja karena tidak berpengaruh'],
        answerIndex: 1,
        explanation: 'Hapus duplikat harus berbasis kunci unik yang jelas, bukan asal hapus baris yang terlihat mirip — bisa jadi data yang sebenarnya berbeda.',
      },
      {
        question: 'Data harga dari toko C menggunakan koma ribuan (1.500,50). Apa langkah standarisasi yang benar?',
        options: ['Biarkan karena itu format lokal', 'Hapus semua harga', 'Ubah ke format konsisten dengan Find & Replace', 'Tulis ulang manual satu per satu'],
        answerIndex: 2,
        explanation: 'Standarisasi format (koma→titik, hapus simbol) dilakukan dengan Find & Replace agar semua data konsisten sebelum dianalisis.',
      },
      {
        question: 'Metode IQR untuk deteksi outlier: batas atas dihitung dengan rumus...',
        options: ['Q3 + 1.5 × IQR', 'Q1 - 1.5 × IQR', 'Q2 + 2 × IQR', 'Q3 - Q1'],
        answerIndex: 0,
        explanation: 'Batas atas = Q3 + 1.5 × IQR dan batas bawah = Q1 - 1.5 × IQR. Nilai di luar rentang itu dianggap outlier.',
      },
      {
        question: 'Data penjualan bulan Agustus hilang karena cut-off sistem. Data yang paling tepat dilakukan adalah...',
        options: ['Menghapus seluruh tahun', 'Mengisi dengan rata-rata bulan Juli dan September (interpolasi)', 'Mengisi semua dengan angka 0', 'Membiarkan kosong tanpa keterangan'],
        answerIndex: 1,
        explanation: 'Interpolasi menggunakan nilai sebelum dan sesudah untuk memperkirakan nilai yang hilang — lebih akurat daripada 0 atau kosong.',
      },
      {
        question: 'Menemukan sel kosong di kolom "Perusahaan" pada 20 record. Tindakan yang paling profesional adalah...',
        options: ['Menebak nama perusahaan dari internet', 'Mengisi "Unknown" atau memverifikasi dari sumber lain, lalu flag', 'Menghapus seluruh baris', 'Mengisi dengan nama record di atasnya'],
        answerIndex: 1,
        explanation: 'Jangan menebak data. Verifikasi dari sumber atau tandai sebagai "Unknown" dan laporkan, bukan mengarang.',
      },
    ],
  },
  {
    categorySlug: 'data-analyst',
    slug: 'simulasi-dashboard',
    title: 'Simulasi: Memilih Visualisasi yang Tepat',
    description: 'Latihan memilih jenis chart dan menyusun struktur dashboard yang efektif.',
    instruction: 'Setiap pertanyaan menyajikan kebutuhan bisnis. Pilih visualisasi atau keputusan desain yang paling tepat.',
    level: 'COMPLEX',
    durationMinutes: 15,
    order: 3,
    questions: [
      {
        question: 'Anda ingin menunjukkan tren penjualan bulanan selama 12 bulan. Chart yang paling tepat adalah...',
        options: ['Pie chart', 'Line chart', 'Scatter plot', 'Histogram'],
        answerIndex: 1,
        explanation: 'Line chart paling baik untuk menunjukkan perubahan (tren) data berurutan terhadap waktu.',
      },
      {
        question: 'Ingin membandingkan penjualan 5 toko. Visualisasi terbaik adalah...',
        options: ['Donut chart 5 bagian', 'Bar chart', 'Area chart', 'Heatmap'],
        answerIndex: 1,
        explanation: 'Bar chart adalah pilihan terbaik untuk membandingkan nilai antar kategori yang jumlahnya terbatas.',
      },
      {
        question: 'Menurut prinsip dashboard efektif, insight harus bisa dipahami dalam...',
        options: ['5 detik pertama', '5 menit pertama', 'Setelah membaca semua detail', 'Saat diklik satu per satu'],
        answerIndex: 0,
        explanation: 'Dashboard yang baik menjawab pertanyaan bisnis dalam 5 detik pertama — jika tidak, itu hanya dekorasi.',
      },
      {
        question: 'Posisi yang tepat untuk KPI utama dalam struktur dashboard adalah...',
        options: ['Di bagian paling bawah', 'Di bagian atas', 'Di sidebar kiri', 'Tersebar acak'],
        answerIndex: 1,
        explanation: 'KPI utama (3-5 angka terpenting) ditempatkan di bagian atas agar langsung terlihat pertama kali.',
      },
      {
        question: 'Rekomendasi budget untuk channel marketing yang benar menurut prinsip storytelling data adalah...',
        options: ['Berdasarkan channel favorit pribadi', 'Berdasarkan ROI tertinggi hasil analisis', 'Berdasarkan yang paling banyak diiklankan kompetitor', 'Rata-rata semua channel'],
        answerIndex: 1,
        explanation: 'Rekomendasi harus data-driven: alokasi budget ke channel dengan ROI tertinggi, sesuai insight dari analisis.',
      },
    ],
  },

  // ════════════════════════════════════════
  // PROJECT COORDINATOR
  // ════════════════════════════════════════
  {
    categorySlug: 'project-coordinator',
    slug: 'quiz-dasar-project-coordinator',
    title: 'Kuis Dasar: Peran Project Coordinator',
    description: 'Uji pemahaman peran, dokumen proyek, dan segitiga proyek.',
    instruction: 'Pilih satu jawaban paling tepat. Kerjakan dengan tenang dan teliti.',
    level: 'EASY',
    durationMinutes: 10,
    order: 1,
    questions: [
      {
        question: 'Apa tanggung jawab utama seorang project coordinator?',
        options: ['Membuat keputusan anggaran final', 'Mengelola detail operasional: jadwal, dokumentasi, komunikasi', 'Menggantikan seluruh pekerjaan tim', 'Hanya menghadiri rapat'],
        answerIndex: 1,
        explanation: 'Coordinator mendukung manajer proyek dengan menangani detail operasional agar proyek berjalan lancar.',
      },
      {
        question: 'Dokumen yang mencatat risiko beserta mitigasinya disebut...',
        options: ['Gantt chart', 'Risk register', 'Project charter', 'RACI matrix'],
        answerIndex: 1,
        explanation: 'Risk register adalah dokumen hidup berisi daftar risiko, skor, dan strategi mitigasi.',
      },
      {
        question: 'Dalam segitiga proyek, ketiga batasan yang saling memengaruhi adalah...',
        options: ['Tim, vendor, klien', 'Ruang lingkup, waktu, biaya', 'Kualitas, dokumen, rapat', 'Desain, teknis, testing'],
        answerIndex: 1,
        explanation: 'Scope, time, dan cost saling terkait: mengubah satu sisi memengaruhi sisi lainnya.',
      },
      {
        question: 'Alat visual yang menampilkan jadwal tugas beserta durasi dan dependensinya adalah...',
        options: ['RACI matrix', 'Gantt chart', 'Burndown chart', 'Org chart'],
        answerIndex: 1,
        explanation: 'Gantt chart menampilkan tugas, durasi, dan hubungan antar tugas dalam bentuk diagram batang horizontal.',
      },
      {
        question: 'Ketika klien meminta tambahan fitur di tengah proyek (scope bertambah), yang harus dilakukan coordinator adalah...',
        options: ['Langsung menambahkan tanpa diskusi', 'Menolak mentah-mentah', 'Mendiskusikan dampak ke waktu & biaya dengan stakeholder', 'Meninggalkan proyek'],
        answerIndex: 2,
        explanation: 'Perubahan scope harus dikomunikasikan dampaknya terhadap waktu dan biaya sesuai prinsip segitiga proyek.',
      },
    ],
  },
  {
    categorySlug: 'project-coordinator',
    slug: 'quiz-mom-action-items',
    title: 'Kuis MoM & Action Items',
    description: 'Latihan menulis notulensi dan action items yang benar dan jelas.',
    instruction: 'Pilih jawaban yang paling profesional untuk setiap situasi notulensi.',
    level: 'MEDIUM',
    durationMinutes: 12,
    order: 2,
    questions: [
      {
        question: 'Action item yang PALING jelas dan dapat ditindaklanjuti adalah...',
        options: ['"Bikin proposal — tim — secepatnya"', '"Mengirim draft proposal ke klien — Andi — 15 Agustus — High"', '"Proposal — semua orang"', '"Diskusikan proposal nanti"'],
        answerIndex: 1,
        explanation: 'Action item baik punya task spesifik, satu owner, deadline tanggal pasti, dan prioritas.',
      },
      {
        question: 'MoM yang baik sebaiknya dikirimkan kepada peserta dalam waktu...',
        options: ['1 bulan', '24 jam setelah rapat', 'Sebelum rapat dimulai', 'Tidak perlu dikirim'],
        answerIndex: 1,
        explanation: 'Kirim MoM dalam 24 jam agar keputusan masih segar dan follow-up bisa segera berjalan.',
      },
      {
        question: 'Bagian MoM yang berisi pembagian tugas, pemilik, dan deadline adalah...',
        options: ['Agenda', 'Daftar hadir', 'Action items', 'Poin diskusi'],
        answerIndex: 2,
        explanation: 'Action items adalah daftar tugas yang ditindaklanjuti setelah rapat, lengkap dengan owner dan deadline.',
      },
      {
        question: 'Saat rapat, cara terbaik untuk memastikan action items tidak salah adalah...',
        options: ['Menyuruh peserta menebak', 'Membacakan ulang action items di akhir rapat dan mengonfirmasi', 'Menulis di memo tempel', 'Merekam dan transkrip seminggu kemudian'],
        answerIndex: 1,
        explanation: 'Konfirmasi action items di akhir rapat memastikan owner dan deadline disepakati semua pihak.',
      },
      {
        question: 'MoM yang baik mencatat...',
        options: ['Transkrip lengkap semua percakapan', 'Diskusi penting, keputusan, dan action items', 'Hanya daftar hadir', 'Pendapat pribadi notulis'],
        answerIndex: 1,
        explanation: 'MoM mencatat esensi: poin diskusi, keputusan, dan tindak lanjut — bukan transkrip kata demi kata.',
      },
    ],
  },
  {
    categorySlug: 'project-coordinator',
    slug: 'simulasi-gantt-risk',
    title: 'Simulasi: Gantt Chart & Risk Register',
    description: 'Latihan keputusan manajemen risiko dan penjadwalan proyek.',
    instruction: 'Kerjakan sebagai coordinator proyek: pilih keputusan manajemen yang paling tepat.',
    level: 'COMPLEX',
    durationMinutes: 15,
    order: 3,
    questions: [
      {
        question: 'Risiko dengan skor (Probability 5 × Impact 5) = 25. Strategi yang paling tepat adalah...',
        options: ['Accept tanpa rencana', 'Aksi mitigasi segera karena critical', 'Menunggu sampai terjadi', 'Menghapus dari register'],
        answerIndex: 1,
        explanation: 'Skor > 15 adalah critical — butuh aksi segera dan perhatian penuh stakeholder.',
      },
      {
        question: 'Untuk risiko "developer senior mengundurkan diri", strategi mitigasi yang tepat adalah...',
        options: ['Tidak melakukan apa-apa', 'Menyiapkan knowledge transfer & backfill plan', 'Menambah scope proyek', 'Mengurangi kualitas'],
        answerIndex: 1,
        explanation: 'Mitigate: kurangi dampak dengan dokumentasi dan rencana pengganti sebelum risiko terjadi.',
      },
      {
        question: 'Fungsi milestone (diamond) dalam Gantt chart adalah...',
        options: ['Menandai titik penting tanpa durasi', 'Menandai tugas dengan durasi terpanjang', 'Menandai hari libur', 'Menandai nama vendor'],
        answerIndex: 0,
        explanation: 'Milestone adalah titik pencapaian penting dalam proyek yang tidak memakan durasi.',
      },
      {
        question: 'Strategi "transfer" dalam mitigasi risiko contohnya adalah...',
        options: ['Menghapus fitur berisiko', 'Membeli asuransi atau menyerahkan pekerjaan ke vendor', 'Mengurangi scope', 'Menerima risiko apa adanya'],
        answerIndex: 1,
        explanation: 'Transfer memindahkan dampak risiko ke pihak lain, misalnya melalui asuransi atau kontrak vendor.',
      },
      {
        question: 'Kesalahan paling umum yang dilakukan koordinator junior adalah...',
        options: ['Terlalu detail mencatat', 'Nama task tidak konsisten antar dokumen (Gantt vs risk register)', 'Terlalu cepat mengirim MoM', 'Memakai warna di Gantt chart'],
        answerIndex: 1,
        explanation: 'Inkonsistensi nama task antar dokumen membuat pelacakan kacau dan membingungkan tim.',
      },
    ],
  },

  // ════════════════════════════════════════
  // SECRETARY / EXECUTIVE ASSISTANT
  // ════════════════════════════════════════
  {
    categorySlug: 'secretary-executive-assistant',
    slug: 'quiz-dasar-sekretaris',
    title: 'Kuis Dasar: Sekretaris & Executive Assistant',
    description: 'Uji pemahaman peran EA, manajemen kalender, dan etika profesional.',
    instruction: 'Pilih jawaban paling tepat sesuai praktik profesional seorang EA.',
    level: 'EASY',
    durationMinutes: 10,
    order: 1,
    questions: [
      {
        question: 'Kualitas PALING penting seorang executive assistant adalah...',
        options: ['Kecepatan mengetik', 'Discretion (menjaga kerahasiaan)', 'Memiliki banyak relasi', 'Menguasai banyak bahasa'],
        answerIndex: 1,
        explanation: 'EA menangani informasi sensitif eksekutif — kerahasiaan adalah fondasi kepercayaan.',
      },
      {
        question: 'Tindakan yang benar saat menemukan jadwal eksekutif bentrok adalah...',
        options: ['Diam saja', 'Segera mengomunikasikan konflik dan mencari solusi penjadwalan', 'Membatalkan semua tanpa konfirmasi', 'Menambah jadwal di luar kalender'],
        answerIndex: 1,
        explanation: 'EA harus proaktif: komunikasikan konflik lebih awal dan tawarkan alternatif.',
      },
      {
        question: 'Sebelum rapat kick-off, apa yang harus disiapkan EA?',
        options: ['Hanya ruangan', 'Undangan + agenda + materi + reminder H-1', 'Catatan pribadi', 'Transkrip rapat'],
        answerIndex: 1,
        explanation: 'Persiapan lengkap: undangan dengan agenda, materi, dan pengingat sebelum rapat berlangsung.',
      },
      {
        question: 'Format nomor surat resmi yang umum digunakan adalah...',
        options: ['Bebas tanpa aturan', '[No]/[Kode]/[Bulan]/[Tahun]', 'Hanya angka urut', 'Tanggal + nama pengirim'],
        answerIndex: 1,
        explanation: 'Nomor surat resmi mengikuti format standar perusahaan agar tertata dan mudah ditelusuri.',
      },
      {
        question: 'Tugas EA dalam perjalanan bisnis eksekutif meliputi...',
        options: ['Menggantikan eksekutif dalam rapat', 'Menyiapkan itinerary, hotel, dan meeting brief', 'Mengurus keuangan pribadi', 'Menjadi sopir'],
        answerIndex: 1,
        explanation: 'EA mengelola logistik perjalanan: itinerary, booking, dan briefing agar eksekutif fokus pada urusan bisnis.',
      },
    ],
  },
  {
    categorySlug: 'secretary-executive-assistant',
    slug: 'quiz-surat-dan-email',
    title: 'Kuis Surat Resmi & Email Profesional',
    description: 'Latihan menulis dan menilai kualitas komunikasi formal.',
    instruction: 'Pilih opsi komunikasi yang paling profesional dan benar secara kaidah.',
    level: 'MEDIUM',
    durationMinutes: 12,
    order: 2,
    questions: [
      {
        question: 'Subject email yang paling profesional adalah...',
        options: ['"Meeting"', '"Undangan Rapat Evaluasi Q3 — Kamis, 14 Agustus 10:00"', '"PENTING!!! BACA!!!", "Hi"'],
        answerIndex: 1,
        explanation: 'Subject yang jelas, spesifik, dan actionable memudahkan penerima memprioritaskan.',
      },
      {
        question: 'Dalam surat resmi, penulisan tanggal yang benar adalah...',
        options: ['14/08/2026', '14 Agustus 2026', '14-8-26', '14 Agustus 2026 M'],
        answerIndex: 1,
        explanation: 'Penulisan tanggal resmi: tanggal + bulan (huruf lengkap) + tahun.',
      },
      {
        question: 'Salam pembuka email semi-formal yang tepat adalah...',
        options: ['"Halo Bapak/Ibu,"', '"Yth. Bapak/Ibu [Nama]," untuk formal; "Halo [Nama]," untuk semi-formal', '"Hai gan,", "Wassalam,"'],
        answerIndex: 1,
        explanation: 'Pilih salam sesuai tingkat formalitas dan budaya perusahaan — konsisten dengan konteks.',
      },
      {
        question: 'Prinsip BLUF (Bottom Line Up Front) dalam email berarti...',
        options: ['Menulis detail di awal', 'Meletakkan kesimpulan/kebutuhan di awal email', 'Menulis lampiran dulu', 'Menutup dengan basa-basi panjang'],
        answerIndex: 1,
        explanation: 'Pembaca sibuk — sampaikan inti di awal, detail menyusul di bawah.',
      },
      {
        question: 'Sebelum mengirim email dengan lampiran, hal yang wajib dicek adalah...',
        options: ['Warna font', 'Lampiran benar-benar terpasang', 'Jumlah CC', 'Jumlah kata'],
        answerIndex: 1,
        explanation: 'Kesalahan paling umum: menyebut lampiran tapi tidak melampirkan file.',
      },
    ],
  },
  {
    categorySlug: 'secretary-executive-assistant',
    slug: 'simulasi-travel-executive',
    title: 'Simulasi: Persiapan Perjalanan Eksekutif',
    description: 'Latihan keputusan logistik perjalanan bisnis eksekutif.',
    instruction: 'Anda EA bagi CEO yang akan business trip. Pilih keputusan paling profesional.',
    level: 'COMPLEX',
    durationMinutes: 15,
    order: 3,
    questions: [
      {
        question: 'CEO punya 3 meeting di hari yang sama. Yang harus disiapkan untuk tiap meeting adalah...',
        options: ['Hanya alamat', 'Meeting brief: profil klien, riwayat kerja sama, poin diskusi', 'Hadiah', 'Foto bersama'],
        answerIndex: 1,
        explanation: 'Meeting brief memungkinkan CEO langsung "ngobrol" tanpa briefing tambahan.',
      },
      {
        question: 'Jarak antar dua meeting hanya 30 menit sedangkan lokasi berjarak 45 menit. Keputusan terbaik adalah...',
        options: ['Biarkan saja', 'Rombak jadwal: geser salah satu meeting atau kurangi durasi', 'Menghapus kedua meeting', 'Berpindah sambil telpon'],
        answerIndex: 1,
        explanation: 'Itinerary harus realistis dengan buffer antar aktivitas — sesuaikan jadwal bukan memaksakan.',
      },
      {
        question: 'Saat memilih hotel untuk eksekutif, prioritas utama adalah...',
        options: ['Hotel termurah', 'Dekat venue + fasilitas kerja + sesuai kebijakan perusahaan', 'Hotel terbaik dengan harga berapa pun', 'Hotel dengan kolam renang terbesar'],
        answerIndex: 1,
        explanation: 'Lokasi strategis, fasilitas kerja, dan kepatuhan kebijakan perusahaan adalah kriteria utama.',
      },
      {
        question: 'Selama perjalanan, cara terbaik mengelola expense adalah...',
        options: ['Mengumpulkan struk di saku', 'Mencatat dan menyimpan struk segera dengan kategori biaya', 'Menebak nominal bulan depan', 'Tidak perlu dicatat'],
        answerIndex: 1,
        explanation: 'Catat segera dengan kategori (transport, hotel, meals) agar reimbursement lancar.',
      },
      {
        question: 'Kapan paket perjalanan (tiket, itinerary, briefing) harus dikirim ke eksekutif?',
        options: ['Saat di bandara', 'H-2 sebelum berangkat', 'Setelah tiba', 'Tidak perlu dikirim'],
        answerIndex: 1,
        explanation: 'Kirim H-2 memberi waktu review dan konfirmasi sebelum keberangkatan.',
      },
    ],
  },

  // ════════════════════════════════════════
  // DATA ENTRY SPECIALIST
  // ════════════════════════════════════════
  {
    categorySlug: 'data-entry-specialist',
    slug: 'quiz-dasar-data-entry',
    title: 'Kuis Dasar: Data Entry Specialist',
    description: 'Uji pemahaman standar akurasi dan etika kerja data entry.',
    instruction: 'Pilih jawaban paling tepat sesuai standar profesional data entry.',
    level: 'EASY',
    durationMinutes: 10,
    order: 1,
    questions: [
      {
        question: 'Standar akurasi minimum dalam profesi data entry adalah...',
        options: ['90%', '> 99%', '95%', '100% mutlak'],
        answerIndex: 1,
        explanation: 'Standar industri: akurasi di atas 99% — satu kesalahan per 100 record adalah batas minimal.',
      },
      {
        question: 'Saat menemukan data yang meragukan (misal alamat tidak lengkap), tindakan yang benar adalah...',
        options: ['Menebak dan mengisi', 'Flag (tandai) untuk verifikasi, jangan menebak', 'Menghapus record', 'Mengisi dengan data record lain'],
        answerIndex: 1,
        explanation: 'Aturan emas: jika ragu, flag — jangan menebak. Data hasil tebakan bisa menimbulkan kerugian.',
      },
      {
        question: 'Teknik yang paling efektif untuk menjamin akurasi adalah...',
        options: ['Mengetik cepat tanpa cek', 'Double-entry dan validasi otomatis', 'Menghafal data', 'Menyalin dari orang lain'],
        answerIndex: 1,
        explanation: 'Double-entry (input dua kali dan bandingkan) plus validasi otomatis menjaga akurasi tinggi.',
      },
      {
        question: 'Format nomor telepon yang terstandarisasi adalah...',
        options: ['08xx-xxxx-xxxx', '+62 8xx-xxxx-xxxx', '62-8xx-xxxx', 'Bebas sesuai sumber'],
        answerIndex: 1,
        explanation: 'Format dengan kode negara (+62) konsisten dan siap digunakan untuk komunikasi internasional.',
      },
      {
        question: 'Alasan data entry perlu mengerjakan dalam batch adalah...',
        options: ['Agar cepat selesai tanpa kontrol', 'Lebih efisien dan mudah di-track progresnya', 'Mengurangi kualitas', 'Menghindari review'],
        answerIndex: 1,
        explanation: 'Batch memudahkan pelacakan, verifikasi, dan jika ada error, sumbernya mudah dilokalisasi.',
      },
    ],
  },
  {
    categorySlug: 'data-entry-specialist',
    slug: 'quiz-standarisasi',
    title: 'Kuis Standarisasi & Validasi',
    description: 'Latihan menerapkan standarisasi format dan deteksi error.',
    instruction: 'Perhatikan aturan format standar pada setiap pertanyaan.',
    level: 'MEDIUM',
    durationMinutes: 12,
    order: 2,
    questions: [
      {
        question: 'Standarisasi format nama yang benar adalah...',
        options: ['BUDI SANTOSO', 'Budi Santoso (Title Case)', 'budi santoso', 'BUDI santoso'],
        answerIndex: 1,
        explanation: 'Nama distandarisasi ke Title Case: huruf pertama setiap kata kapital.',
      },
      {
        question: 'Cara menghitung error rate adalah...',
        options: ['(Jumlah benar / total record) × 100%', '(Jumlah error / total record) × 100%', '(Jumlah record / error) × 100%', '(Error + benar) / 2'],
        answerIndex: 1,
        explanation: 'Error rate = jumlah record salah dibagi total record dikali 100%.',
      },
      {
        question: 'Jika error rate melebihi 1%, tindakan paling tepat adalah...',
        options: ['Terus bekerja lebih cepat', 'Berhenti, periksa proses, dan temukan sumber masalah', 'Menghapus data bermasalah', 'Meninggalkan pekerjaan'],
        answerIndex: 1,
        explanation: 'Bekerja lebih cepat hanya memperbanyak error — identifikasi akar masalahnya dulu.',
      },
      {
        question: 'Fungsi Data Validation di Excel adalah...',
        options: ['Mewarnai sel', 'Membatasi input hanya pada daftar/kriteria tertentu', 'Menggabungkan kolom', 'Menghapus duplikat'],
        answerIndex: 1,
        explanation: 'Data Validation mencegah input yang tidak sesuai aturan sejak awal.',
      },
      {
        question: 'Saat menginput invoice, cara mendeteksi invoice yang hilang adalah...',
        options: ['Melihat warnanya', 'Memastikan nomor invoice berurutan (sequential)', 'Menghitung total halaman', 'Bertanya ke kolega'],
        answerIndex: 1,
        explanation: 'Gap pada nomor invoice sequential menandakan ada transaksi yang belum terinput.',
      },
    ],
  },
  {
    categorySlug: 'data-entry-specialist',
    slug: 'simulasi-migrasi-data',
    title: 'Simulasi: Migrasi Data 1200 Record',
    description: 'Latihan keputusan penting dalam proses migrasi data antar sistem.',
    instruction: 'Anda bertanggung jawab atas migrasi 1200 data pelanggan ke sistem baru. Pilih keputusan terbaik.',
    level: 'COMPLEX',
    durationMinutes: 15,
    order: 3,
    questions: [
      {
        question: 'Langkah pertama yang wajib dilakukan sebelum migrasi adalah...',
        options: ['Langsung pindahkan data', 'Backup data sumber', 'Menghapus sistem lama', 'Mengganti nama file'],
        answerIndex: 1,
        explanation: 'Backup adalah syarat mutlak — jika migrasi gagal, data sumber masih bisa dipulihkan.',
      },
      {
        question: 'Mapping document dalam migrasi berisi...',
        options: ['Daftar karyawan', 'Pemetaan kolom sumber → kolom tujuan', 'Rincian budget', 'Jadwal libur'],
        answerIndex: 1,
        explanation: 'Mapping document menghubungkan setiap field sistem lama dengan field sistem baru.',
      },
      {
        question: 'Metode migrasi paling aman adalah...',
        options: ['Memindahkan semua 1200 record sekaligus', 'Batch per 100-500 record dengan validasi tiap batch', 'Memindahkan saat jam sibuk', 'Memindahkan tanpa testing'],
        answerIndex: 1,
        explanation: 'Batch kecil memudahkan deteksi error dan membatasi dampak jika ada masalah.',
      },
      {
        question: 'Reconciliation setelah migrasi berarti...',
        options: ['Menghapus data', 'Memastikan jumlah record sumber = jumlah record tujuan', 'Membuat sistem baru', 'Mencetak semua data'],
        answerIndex: 1,
        explanation: 'Reconciliation memverifikasi tidak ada data yang hilang: hitung record di kedua sistem harus sama.',
      },
      {
        question: 'Menemukan 50 record duplikat ID saat migrasi. Tindakan terbaik adalah...',
        options: ['Menghapus semua record tersebut', 'Merge atau flag untuk verifikasi manual', 'Membuat ID baru acak', 'Membiarkan begitu saja'],
        answerIndex: 1,
        explanation: 'Duplikat harus di-handle dengan bijak: gabungkan jika memang sama atau tandai untuk review.',
      },
    ],
  },

  // ════════════════════════════════════════
  // DATA ANNOTATION / AI TRAINER
  // ════════════════════════════════════════
  {
    categorySlug: 'data-annotation-ai-trainer',
    slug: 'quiz-dasar-annotation',
    title: 'Kuis Dasar: Data Annotation & AI Training',
    description: 'Uji pemahaman jenis annotation dan pentingnya kualitas data AI.',
    instruction: 'Pilih jawaban paling tepat. Fokus pada pemahaman konsep.',
    level: 'EASY',
    durationMinutes: 10,
    order: 1,
    questions: [
      {
        question: 'Tujuan utama data annotation dalam pengembangan AI adalah...',
        options: ['Memperindah data', 'Memberi label agar model AI bisa belajar pola', 'Menghapus data duplikat', 'Membuat database lebih kecil'],
        answerIndex: 1,
        explanation: 'Label adalah "jawaban" yang diajarkan ke model AI agar bisa mengenali pola pada data baru.',
      },
      {
        question: 'Memberi label sentiment (positif/negatif/netral) termasuk jenis annotation...',
        options: ['Image annotation', 'Text annotation', 'Audio annotation', 'Video annotation'],
        answerIndex: 1,
        explanation: 'Sentiment labeling adalah bagian dari text annotation.',
      },
      {
        question: 'Bounding box digunakan untuk...',
        options: ['Menandai bagian kata dalam kalimat', 'Menandai lokasi objek dalam gambar', 'Menandai speaker dalam audio', 'Mengubah warna gambar'],
        answerIndex: 1,
        explanation: 'Bounding box adalah kotak di sekitar objek dalam gambar untuk deteksi objek.',
      },
      {
        question: 'Metrik yang mengukur konsistensi dua annotator melabeli data yang sama adalah...',
        options: ['Error rate', 'Inter-annotator agreement (IAA)', 'Response time', 'File size'],
        answerIndex: 1,
        explanation: 'IAA mengukur seberapa setuju dua annotator — target umum > 0.8.',
      },
      {
        question: 'Mengapa kualitas label sangat penting bagi AI?',
        options: ['Hanya soal estetika', 'AI sebaik data yang dilatihnya — data kotor menghasilkan model bias', 'Agar cepat diproses', 'Untuk menghemat storage'],
        answerIndex: 1,
        explanation: 'Kualitas model berbanding lurus dengan kualitas data training.',
      },
    ],
  },
  {
    categorySlug: 'data-annotation-ai-trainer',
    slug: 'quiz-konsistensi-label',
    title: 'Kuis Konsistensi & Kualitas Label',
    description: 'Latihan menangani edge cases dan quality check labeling.',
    instruction: 'Situasi nyata labeling — pilih keputusan yang paling sesuai guideline yang baik.',
    level: 'MEDIUM',
    durationMinutes: 12,
    order: 2,
    questions: [
      {
        question: 'Ulasan: "Keren banget sampe ga direspon 2 minggu" — sentiment yang tepat adalah...',
        options: ['Positive (ada kata "keren")', 'Negative (sarkasme: pujian tapi keluhan nyata)', 'Neutral', 'Tidak perlu dilabeli'],
        answerIndex: 1,
        explanation: 'Sarkasme adalah edge case: kata "keren" dipakai untuk menyindir layanan buruk — konteks menentukan label.',
      },
      {
        question: 'Fungsi gold standard test dalam quality check adalah...',
        options: ['Menghitung gaji annotator', 'Mengukur akurasi annotator terhadap data yang sudah dilabeli ahli', 'Mempercepat labeling', 'Mengganti guideline'],
        answerIndex: 1,
        explanation: 'Data gold standard disisipkan diam-diam; akurasi annotator terhadapnya mengukur kualitas kerja.',
      },
      {
        question: 'Bagian penting yang HARUS ada dalam guideline labeling adalah...',
        options: ['Daftar gaji', 'Definisi label, contoh benar-salah, dan aturan edge case', 'Jadwal libur', 'Nama klien'],
        answerIndex: 1,
        explanation: 'Guideline yang baik mendefinisikan label, memberi contoh, dan menangani kasus ambigu.',
      },
      {
        question: 'Praktik double annotation yang benar adalah...',
        options: ['Satu annotator mengerjakan dua kali dengan data sama', 'Dua annotator melabeli 10-20% data yang sama lalu hasilnya dibandingkan', 'Dua annotator mengerjakan data berbeda', 'Membandingkan dengan data lama'],
        answerIndex: 1,
        explanation: 'Double annotation: sebagian data dilabeli dua annotator berbeda untuk mengukur konsistensi.',
      },
      {
        question: 'Saat menghadapi gambar ambigu (mouse komputer vs tikus), tindakan yang benar adalah...',
        options: ['Menebak kategori mana pun', 'Pilih paling relevan sesuai konteks dan flag untuk review', 'Menghapus gambar', 'Memberi dua label sekaligus tanpa aturan'],
        answerIndex: 1,
        explanation: 'Data ambigu diatasi dengan keputusan berbasis konteks + flag, bukan tebakan asal.',
      },
    ],
  },
  {
    categorySlug: 'data-annotation-ai-trainer',
    slug: 'simulasi-ner-transkripsi',
    title: 'Simulasi: NER & Transkripsi Audio',
    description: 'Latihan labeling entitas teks dan keputusan transkripsi.',
    instruction: 'Terapkan aturan NER dan transkripsi pada situasi yang diberikan.',
    level: 'COMPLEX',
    durationMinutes: 15,
    order: 3,
    questions: [
      {
        question: 'Dalam kalimat "Joko Widodo berkunjung ke Jakarta", label NER yang benar adalah...',
        options: ['Joko Widodo = PERSON, Jakarta = LOCATION', 'Joko Widodo = LOCATION, Jakarta = PERSON', 'Keduanya = ORGANIZATION', 'Tidak perlu dilabeli'],
        answerIndex: 0,
        explanation: 'PERSON untuk nama orang, LOCATION untuk nama tempat.',
      },
      {
        question: 'Aturan utama saat memberi label entitas multi-kata (multiword span) adalah...',
        options: ['Melabeli hanya kata pertama', 'Melabeli seluruh kata dalam satu entitas', 'Melabeli kata terakhir saja', 'Melabeli per huruf'],
        answerIndex: 1,
        explanation: '"PT Telkom Indonesia" dilabeli sebagai satu entitas ORGANIZATION utuh, bukan per kata.',
      },
      {
        question: 'Dalam transkripsi audio yang mengandung suara bising, format yang benar adalah...',
        options: ['Menghapus bagian tersebut', 'Menandai dengan [noise] atau [inaudible]', 'Menebak isi suara bising', 'Menulis "bisa bantu"'],
        answerIndex: 1,
        explanation: 'Verbatin + penanda noise: tulis apa yang terdengar, tandai yang tidak jelas.',
      },
      {
        question: 'Format output COCO JSON untuk bounding box berisi...',
        options: ['Hanya nama file', 'image_id, category_id, bbox (x, y, width, height)', 'Warna piksel', 'Ukuran file'],
        answerIndex: 1,
        explanation: 'COCO JSON memuat referensi gambar, kategori, dan koordinat bounding box.',
      },
      {
        question: 'Saat menyusun summary artikel, aturan yang benar adalah...',
        options: ['Menyalin paragraf pertama', 'Menangkap poin utama dengan kata sendiri, 2-3 kalimat', 'Membuat sepanjang artikel', 'Hanya menulis judul'],
        answerIndex: 1,
        explanation: 'Summary yang baik menangkap esensi, termasuk angka penting, dengan kalimat sendiri.',
      },
    ],
  },

  // ════════════════════════════════════════
  // TRANSLATION / LOCALIZER
  // ════════════════════════════════════════
  {
    categorySlug: 'translation-localizer',
    slug: 'quiz-dasar-terjemahan',
    title: 'Kuis Dasar: Penerjemahan & Lokalisasi',
    description: 'Uji pemahaman perbedaan terjemahan vs lokalisasi dan standar kualitas.',
    instruction: 'Pilih jawaban paling tepat sesuai standar profesi penerjemah.',
    level: 'EASY',
    durationMinutes: 10,
    order: 1,
    questions: [
      {
        question: 'Perbedaan utama lokalisasi dan penerjemahan adalah...',
        options: ['Tidak ada bedanya', 'Lokalisasi menyesuaikan budaya, format, dan preferensi lokal — bukan hanya bahasa', 'Lokalisasi lebih murah', 'Lokalisasi hanya untuk aplikasi'],
        answerIndex: 1,
        explanation: 'Lokalisasi mencakup adaptasi budaya: format tanggal, mata uang, idiom, dan nuansa lokal.',
      },
      {
        question: 'Terjemahan yang baik harus...',
        options: ['Literal kata per kata', 'Akurat maknanya dan natural di bahasa target', 'Sesuai panjang kata sumber', 'Menggunakan kata asing'],
        answerIndex: 1,
        explanation: 'Kualitas = akurasi makna + naturalness: terdengar seperti tulisan asli bahasa target.',
      },
      {
        question: 'Istilah teknis seperti "API" sebaiknya...',
        options: ['Selalu diterjemahkan', 'Umumnya tidak diterjemahkan karena sudah dipahami masyarakat', 'Diterjemahkan setengah', 'Dihapus'],
        answerIndex: 1,
        explanation: 'Istilah teknis yang sudah umum (API, SEO) tidak diterjemahkan — keputusan dicatat di glossary.',
      },
      {
        question: 'Terjemahan yang kaku dan tidak natural disebut...',
        options: ['Transcreation', 'Literal translation (terjemahan harfiah)', 'Localization', 'Glossary'],
        answerIndex: 1,
        explanation: 'Terjemahan harfiah mengabaikan konteks dan terdengar aneh di bahasa target.',
      },
      {
        question: 'Glossary dalam proyek terjemahan berfungsi untuk...',
        options: ['Menghias dokumen', 'Menjaga konsistensi istilah di seluruh dokumen', 'Menambah panjang dokumen', 'Mengganti terjemahan'],
        answerIndex: 1,
        explanation: 'Glossary memastikan istilah yang sama diterjemahkan sama di seluruh proyek.',
      },
    ],
  },
  {
    categorySlug: 'translation-localizer',
    slug: 'quiz-glossary',
    title: 'Kuis Glossary & Terminologi',
    description: 'Latihan keputusan terminologi dan konsistensi istilah.',
    instruction: 'Pilih keputusan terminologi yang paling profesional.',
    level: 'MEDIUM',
    durationMinutes: 12,
    order: 2,
    questions: [
      {
        question: 'Kunci utama konsistensi terminologi adalah...',
        options: ['Menghafal kamus', 'Glossary yang disepakati dan digunakan semua penerjemah', 'Terjemahan bebas', 'Menggunakan machine translation'],
        answerIndex: 1,
        explanation: 'Konsistensi hanya bisa dicapai jika ada glossary bersama dan dipatuhi seluruh tim.',
      },
      {
        question: 'Tidak ada padanan sempurna untuk istilah hukum asing. Yang harus dilakukan adalah...',
        options: ['Menerjemahkan asal', 'Mendokumentasikan keputusan dan alasannya di catatan terjemahan', 'Menghapus istilah tersebut', 'Menggunakan kata acak'],
        answerIndex: 1,
        explanation: 'Istilah ambigu didokumentasikan: padanan yang dipilih + alasan — bukan tebakan tanpa jejak.',
      },
      {
        question: 'Mana yang termasuk istilah yang TIDAK perlu diterjemahkan?',
        options: ['Settings', 'Google', 'Submit', 'Email'],
        answerIndex: 1,
        explanation: 'Nama merek (Google) tidak diterjemahkan; label UI seperti Settings/Submit diterjemahkan (Pengaturan/Kirim).',
      },
      {
        question: 'Cara memastikan konsistensi setelah seluruh dokumen selesai diterjemahkan...',
        options: ['Mempercayai ingatan', 'Mencari ulang setiap istilah glossary di dokumen final', 'Tidak perlu dicek', 'Menulis ulang dari awal'],
        answerIndex: 1,
        explanation: 'Verifikasi akhir: temukan semua kemunculan istilah glossary dan pastikan padanannya konsisten.',
      },
      {
        question: 'Terjemahan untuk tombol UI "Submit" yang tepat dalam bahasa Indonesia adalah...',
        options: ['Submit (biarkan)', 'Kirim (sesuai konteks form)', 'Menyampaikan', 'Sampaikan'],
        answerIndex: 1,
        explanation: 'Label aksi diterjemahkan: "Kirim" adalah padanan UI paling umum dan natural.',
      },
    ],
  },
  {
    categorySlug: 'translation-localizer',
    slug: 'simulasi-lokalisasi',
    title: 'Simulasi: Lokalisasi UI & Marketing',
    description: 'Latihan keputusan lokalisasi produk digital untuk pasar Indonesia.',
    instruction: 'Anda melokalisasi aplikasi dan campaign untuk pasar Indonesia.',
    level: 'COMPLEX',
    durationMinutes: 15,
    order: 3,
    questions: [
      {
        question: 'String "Hi {name}, your order is on the way!" — terjemahan yang benar adalah...',
        options: ['"Halo {name}, pesananmu dalam perjalanan!" (variabel dipertahankan)', '"Halo namamu, pesananmu jalan"', '"Hi {name}, order kamu on the way"', 'Tanpa variabel'],
        answerIndex: 0,
        explanation: 'Variabel template ({name}) wajib dipertahankan dan CTA/isi diterjemahkan natural.',
      },
      {
        question: 'Menghadapi perbedaan panjang string (tombol "Submit" vs "Kirim") saat lokalisasi UI, yang perlu diperhatikan adalah...',
        options: ['Tidak ada masalah', 'Ruang tampilan: pastikan terjemahan tidak terpotong di tombol', 'Memperpanjang tombol sembarangan', 'Mengganti bahasa'],
        answerIndex: 1,
        explanation: 'Lokalisasi UI mempertimbangkan ruang: teks terjemahan harus muat di UI.',
      },
      {
        question: 'Untuk SEO lokal, langkah yang benar adalah...',
        options: ['Menerjemahkan keyword secara literal', 'Riset keyword lokal dan menargetkannya dalam terjemahan', 'Menyalin konten English', 'Menghapus SEO'],
        answerIndex: 1,
        explanation: 'SEO lokal = riset keyword dalam bahasa target, bukan transliterasi literal.',
      },
      {
        question: 'Format harga untuk pasar Indonesia yang benar dalam konten lokal adalah...',
        options: ['$19.99', 'Rp 19.999 (format Rupiah)', '19,99 USD', 'Tidak perlu disesuaikan'],
        answerIndex: 1,
        explanation: 'Adaptasi budaya: mata uang, tanggal, dan satuan harus sesuai pasar target.',
      },
      {
        question: 'CTA "Buy Now" untuk pasar Indonesia yang paling tepat adalah...',
        options: ['Beli Sekarang / Checkout (lokal & jelas)', '"Beli Sekarang" tanpa konteks', 'Terjemahan literal kata per kata', 'Membiarkan English'],
        answerIndex: 0,
        explanation: 'CTA lokal harus compelling dan natural, sesuai konteks halaman (beli/checkout).',
      },
    ],
  },

  // ════════════════════════════════════════
  // VOICE OVER / VOICE TALENT
  // ════════════════════════════════════════
  {
    categorySlug: 'voice-over-voice-talent',
    slug: 'quiz-dasar-voice-over',
    title: 'Kuis Dasar: Voice Over & Voice Talent',
    description: 'Uji pemahaman profesi VO, peralatan, dan spesifikasi teknis.',
    instruction: 'Pilih jawaban paling tepat sesuai praktik industri VO.',
    level: 'EASY',
    durationMinutes: 10,
    order: 1,
    questions: [
      {
        question: 'Pacing yang tepat untuk narasi e-learning (video tutorial) adalah...',
        options: ['180 kata/menit', '120-150 kata/menit', '240 kata/menit', 'Semua sama'],
        answerIndex: 1,
        explanation: 'Narasi pembelajaran menggunakan pacing sedang (120-150 kata/menit) agar mudah dipahami.',
      },
      {
        question: 'Fungsi pop filter adalah...',
        options: ['Mengubah suara', 'Mengurangi bunyi "pop" dari konsonan P/B', 'Menambah echo', 'Menghidupkan mic'],
        answerIndex: 1,
        explanation: 'Pop filter meredam ledakan udara pada konsonan plosif (P, B).',
      },
      {
        question: 'Format audio standar industri iklan adalah...',
        options: ['WAV 44.1kHz/16-bit', 'MP3 64 kbps', 'AAC mono 8kHz', 'Bebas apa pun'],
        answerIndex: 0,
        explanation: 'WAV 44.1kHz/16-bit adalah spesifikasi standar untuk voice over iklan.',
      },
      {
        question: 'Hal terpenting saat merekam take demi take dalam satu sesi adalah...',
        options: ['Mengubah karakter suara tiap take', 'Menjaga konsistensi karakter dan volume', 'Bicara sekencang mungkin', 'Rekam tanpa warm-up'],
        answerIndex: 1,
        explanation: 'Konsistensi antar take adalah kunci kualitas dan kemudahan editing.',
      },
      {
        question: 'Sebelum rekaman profesional, voice talent sebaiknya...',
        options: ['Langsung rekam', 'Melakukan warm-up vokal ±15 menit', 'Minum kopi banyak', 'Berteriak'],
        answerIndex: 1,
        explanation: 'Warm-up melatih artikulasi dan kontrol napas agar rekaman prima sejak awal.',
      },
    ],
  },
  {
    categorySlug: 'voice-over-voice-talent',
    slug: 'quiz-rekaman-editing',
    title: 'Kuis Teknik Rekaman & Editing',
    description: 'Latihan keputusan teknis rekaman dan editing audio.',
    instruction: 'Pilih praktik terbaik untuk setiap situasi teknis.',
    level: 'MEDIUM',
    durationMinutes: 12,
    order: 2,
    questions: [
      {
        question: 'Ruang rekam terbaik untuk amatir adalah...',
        options: ['Kamar mandi (echo bagus)', 'Ruang kecil dengan banyak bahan lembut (karpet, gorden)', 'Ruang besar kosong', 'Balkon terbuka'],
        answerIndex: 1,
        explanation: 'Bahan lembut menyerap pantulan suara (reverb) — kunci rekaman bersih tanpa peredam mahal.',
      },
      {
        question: 'Langkah pertama noise reduction di Audacity adalah...',
        options: ['Langsung terapkan Noise Reduction', 'Mengambil noise profile dari bagian diam audio', 'Menghapus semua audio', 'Menambah gain'],
        answerIndex: 1,
        explanation: 'Noise profile (sampel noise) diambil dulu, baru diterapkan ke seluruh audio.',
      },
      {
        question: 'Jarak mikrofon yang ideal dari mulut adalah...',
        options: ['0 cm', '10-20 cm', '50 cm', '1 meter'],
        answerIndex: 1,
        explanation: '10-20 cm memberi keseimbangan volume dan menghindari efek proximity berlebihan.',
      },
      {
        question: 'Tujuan normalize pada audio adalah...',
        options: ['Menambah noise', 'Menyamakan level volume agar konsisten', 'Mengubah pitch', 'Memotong audio'],
        answerIndex: 1,
        explanation: 'Normalize menyetel level puncak agar seluruh take seragam volumenya.',
      },
      {
        question: 'Jika membutuhkan suara yang lebih natural dan hangat, microphone sebaiknya...',
        options: ['Diletakkan frontal tepat di depan mulut', 'Diletakkan sedikit di samping (off-axis 45°)', 'Diletakkan di belakang', 'Tidak berpengaruh'],
        answerIndex: 1,
        explanation: 'Off-axis 45° mengurangi "pop" dan lebih natural; frontal penuh lebih rentan plosif.',
      },
    ],
  },
  {
    categorySlug: 'voice-over-voice-talent',
    slug: 'simulasi-interpretasi-script',
    title: 'Simulasi: Interpretasi Script Iklan',
    description: 'Latihan keputusan karakter suara dan teknik interpretasi script.',
    instruction: 'Anda menerima script iklan. Pilih interpretasi dan keputusan paling profesional.',
    level: 'COMPLEX',
    durationMinutes: 15,
    order: 3,
    questions: [
      {
        question: 'Script iklan skincare untuk wanita 25-35: "Kulit sehat, bersinar alami." Tone yang paling tepat adalah...',
        options: ['Cepat dan berteriak', 'Warm, lembut, dan meyakinkan', 'Serius dan tegas', 'Monoton'],
        answerIndex: 1,
        explanation: 'Produk kecantikan → tone warm & reassuring, membangun kepercayaan.',
      },
      {
        question: 'Fungsi pause (jeda) sebelum kata kunci dalam VO adalah...',
        options: ['Membuat bosan', 'Membangun antisipasi dan menekankan kata penting', 'Membuat rekaman panjang', 'Mengurangi kualitas'],
        answerIndex: 1,
        explanation: 'Jeda strategis memberi bobot pada angka/kata kunci — teknik emphasis utama.',
      },
      {
        question: 'Saat script tidak memberikan arahan (no direction), voice talent profesional...',
        options: ['Menolak merekam', 'Menentukan arah sendiri dari brief dan merekam beberapa varian', 'Membaca datar', 'Menunggu direktur datang'],
        answerIndex: 1,
        explanation: 'Self-direction: analisis brief, rekam varian (warm/cheerful/serious), pilih dan kirim terbaik.',
      },
      {
        question: 'Iklan snack untuk keluarga: "Renyah, gurih, bikin nagih!" — emphasis yang tepat ada pada kata...',
        options: ['Semua kata sama', '"Renyah" dan "nagih"', '"bikin"', 'Tidak ada emphasis'],
        answerIndex: 1,
        explanation: 'Kata sensorik ("renyah") dan hasil ("nagih") adalah kata kunci yang perlu ditekan.',
      },
      {
        question: 'Cara menjaga karakter suara konsisten di 5 video tutorial yang direkam di hari berbeda...',
        options: ['Mengandalkan ingatan', 'Mencatat parameter karakter + merekam referensi take sebagai anchor', 'Mengubah karakter setiap sesi', 'Menyamakan semua dengan pitch rendah'],
        answerIndex: 1,
        explanation: 'Dokumentasi parameter + referensi take menjaga konsistensi antar sesi rekaman.',
      },
    ],
  },

  // ════════════════════════════════════════
  // EMAIL MANAGEMENT
  // ════════════════════════════════════════
  {
    categorySlug: 'email-management',
    slug: 'quiz-dasar-email',
    title: 'Kuis Dasar: Email Management',
    description: 'Uji pemahaman zero inbox, prioritas, dan etika email bisnis.',
    instruction: 'Pilih tindakan paling tepat untuk setiap situasi pengelolaan email.',
    level: 'EASY',
    durationMinutes: 10,
    order: 1,
    questions: [
      {
        question: 'Prinsip zero inbox adalah...',
        options: ['Menghapus semua email', 'Setiap email diputuskan sekali: archive, reply, delegate, defer, atau do', 'Membaca sekali seminggu', 'Membuat 100 folder'],
        answerIndex: 1,
        explanation: 'Zero inbox = sistem keputusan satu kali per email, bukan menumpuk di inbox.',
      },
      {
        question: 'Aturan 2 menit dalam email management adalah...',
        options: ['Menunggu 2 menit sebelum membuka email', 'Jika bisa dibalas < 2 menit, balas langsung', 'Membalas setiap 2 menit', 'Tidak membalas email'],
        answerIndex: 1,
        explanation: 'Tindakan cepat (< 2 menit) langsung dikerjakan, mencegah email menumpuk sebagai "nanti".',
      },
      {
        question: 'Email yang butuh tindakan dari orang lain sebaiknya dipindahkan ke folder...',
        options: ['Inbox', 'Waiting (menunggu)', 'Archive', 'Trash'],
        answerIndex: 1,
        explanation: 'Folder "Waiting" menampung email yang menunggu respons pihak lain.',
      },
      {
        question: 'Batasan waktu wajar untuk membalas email bisnis adalah...',
        options: ['1 bulan', '24 jam (atau konfirmasi terima dulu)', '1 minggu', 'Tidak ada batasan'],
        answerIndex: 1,
        explanation: 'Balas dalam 24 jam; jika belum bisa lengkap, kirim konfirmasi penerimaan.',
      },
      {
        question: 'Saat email tidak penting tapi butuh tindakan (newsletter yang akan dibaca nanti), tindakan terbaik adalah...',
        options: ['Menghapusnya', 'Memindahkan ke folder "Baca Nanti"', 'Membalasnya', 'Meneruskan ke semua orang'],
        answerIndex: 1,
        explanation: 'Defer: pindahkan ke folder khusus untuk dibaca saat ada waktu, keluarkan dari inbox.',
      },
    ],
  },
  {
    categorySlug: 'email-management',
    slug: 'quiz-menulis-email',
    title: 'Kuis Menulis Email Efektif',
    description: 'Latihan menyusun email bisnis yang profesional.',
    instruction: 'Pilih versi email atau keputusan yang paling efektif dan profesional.',
    level: 'MEDIUM',
    durationMinutes: 12,
    order: 2,
    questions: [
      {
        question: 'Pembuka email terbaik menurut prinsip BLUF adalah...',
        options: ['"Saya harap kabar baik..."', 'Kalimat yang langsung menyatakan tujuan email', 'Perkenalan panjang lebar', 'Pertanyaan basa-basi'],
        answerIndex: 1,
        explanation: 'BLUF: inti di depan. Pembaca sibuk — langsung ke tujuan.',
      },
      {
        question: 'Subject line yang paling efektif adalah...',
        options: ['"Meeting"', '"Undangan Rapat Evaluasi Q3 — Kamis, 14 Agustus 10:00"', '"PENTING"', '"FYI"'],
        answerIndex: 1,
        explanation: 'Subject spesifik memberi konteks lengkap tanpa harus membuka email.',
      },
      {
        question: 'Menindaklanjuti email yang belum dibalas 3 hari — pendekatan terbaik adalah...',
        options: ['Mengirim email baru dengan kemarahan', 'Follow-up singkat dan sopan: referensi email sebelumnya + permintaan status + deadline', 'Menghubungi atasan penerima', 'Menyerah'],
        answerIndex: 1,
        explanation: 'Follow-up profesional: ringkas, referensikan konteks, dan jelas permintaannya.',
      },
      {
        question: 'Menerima klaim/complain dari klien, nada yang tepat adalah...',
        options: ['Defensif menjelaskan bukan salah kami', 'Empatik: akui permasalahan + solusi + timeline', 'Diam', 'Menyalahkan klien'],
        answerIndex: 1,
        explanation: 'Respon keluhan: empati dulu, lalu solusi yang jelas — bukan pembelaan.',
      },
      {
        question: 'Salah satu praktik terbaik dalam email profesional adalah...',
        options: ['Satu email = satu topik utama', 'Menulis 5 topik sekaligus', 'Menggunakan huruf kapital semua', 'Reply All setiap email'],
        answerIndex: 0,
        explanation: 'Satu topik per email memudahkan pembaca merespons dan email mudah dicari nanti.',
      },
    ],
  },
  {
    categorySlug: 'email-management',
    slug: 'simulasi-campaign-email',
    title: 'Simulasi: Email Campaign & Automation',
    description: 'Latihan keputusan email marketing dan penggunaan filter/rule.',
    instruction: 'Anda mengelola email untuk bisnis. Pilih keputusan paling tepat berdasarkan metrik dan praktik terbaik.',
    level: 'COMPLEX',
    durationMinutes: 15,
    order: 3,
    questions: [
      {
        question: 'Open rate campaign Anda 45% tetapi CTR hanya 1%. Kesimpulan yang tepat adalah...',
        options: ['Subject line menarik tapi isi/CTA tidak memikat', 'Semua bagus', 'Email masuk spam', 'Audiens salah semua'],
        answerIndex: 0,
        explanation: 'Open tinggi = subject berhasil; CTR rendah = masalah di isi/CTA/perpesanan.',
      },
      {
        question: 'Metrik yang menunjukkan kualitas list email adalah...',
        options: ['Open rate', 'Bounce rate (target < 2%)', 'Jumlah followers', 'Panjang email'],
        answerIndex: 1,
        explanation: 'Bounce rate rendah menandakan list bersih dari email invalid.',
      },
      {
        question: 'Contoh rule/filter email yang efektif adalah...',
        options: ['Membuat rule acak', 'Semua email dari domain berita masuk folder "Baca Nanti"', 'Menghapus semua email', 'Meneruskan semua ke pribadi'],
        answerIndex: 1,
        explanation: 'Rule berbasis kriteria stabil (domain/newsletter) memisahkan prioritas otomatis.',
      },
      {
        question: 'Sebab umum email masuk folder spam adalah...',
        options: ['Isi terlalu panjang', 'Domain tidak terverifikasi (SPF/DKIM/DMARC tidak dikonfigurasi) + kata spam', 'Email dikirim pagi hari', 'Terlalu sopan'],
        answerIndex: 1,
        explanation: 'Deliverability dipengaruhi konfigurasi domain dan pola konten.',
      },
      {
        question: 'Strategi re-engagement campaign yang benar adalah...',
        options: ['Mengirim ke semua orang setiap hari', 'Mengirim penawaran/pertanyaan khusus ke pelanggan tidak aktif', 'Menghapus semua pelanggan', 'Meningkatkan frekuensi email'],
        answerIndex: 1,
        explanation: 'Re-engagement menyasar pelanggan tidak aktif dengan konten khusus untuk menghidupkan kembali minat.',
      },
    ],
  },

  // ════════════════════════════════════════
  // SCHEDULE MANAGEMENT
  // ════════════════════════════════════════
  {
    categorySlug: 'schedule-management',
    slug: 'quiz-dasar-jadwal',
    title: 'Kuis Dasar: Schedule Management',
    description: 'Uji pemahaman time blocking, buffer, dan prioritas jadwal.',
    instruction: 'Pilih praktik penjadwalan paling tepat untuk setiap situasi.',
    level: 'EASY',
    durationMinutes: 10,
    order: 1,
    questions: [
      {
        question: 'Tujuan utama buffer time antar meeting adalah...',
        options: ['Memperpanjang hari kerja', 'Mengantisipasi meeting yang melebihi durasi dan waktu berpindah', 'Mengurangi jumlah meeting', 'Menambah rapat'],
        answerIndex: 1,
        explanation: 'Meeting sering molor dan orang butuh waktu berpindah lokasi — buffer 15-30 menit wajib.',
      },
      {
        question: 'Time blocking adalah metode...',
        options: ['Membagi hari menjadi blok fokus per jenis kegiatan', 'Menghapus semua kegiatan', 'Menjadwalkan semua rapat pagi', 'Bekerja tanpa jadwal'],
        answerIndex: 0,
        explanation: 'Time blocking melindungi waktu fokus dan membuat beban kerja terlihat jelas.',
      },
      {
        question: 'Dalam Matriks Eisenhower, tugas PENTING tapi TIDAK mendesak sebaiknya...',
        options: ['Dilakukan sekarang', 'Dijadwalkan (punya waktu khusus)', 'Dihapus', 'Diabaikan'],
        answerIndex: 1,
        explanation: 'Penting-tidak mendesak = jadwalkan. Ini sering dilupakan padahal paling berdampak.',
      },
      {
        question: 'Fungsi kalender bersama (shared calendar) adalah...',
        options: ['Menambah pekerjaan', 'Menjadi sumber kebenaran jadwal satu tim, menghindari bentrok', 'Menggantikan komunikasi', 'Hanya untuk libur'],
        answerIndex: 1,
        explanation: 'Single source of truth: semua jadwal terlihat dan bisa dicek sebelum meeting dibuat.',
      },
      {
        question: 'Sebelum mengundang meeting, hal pertama yang harus dilakukan adalah...',
        options: ['Menetapkan waktu favorit pribadi', 'Mengecek ketersediaan peserta di kalender', 'Membuat undangan tanpa agenda', 'Mengirim reminder'],
        answerIndex: 1,
        explanation: 'Cek ketersediaan dulu mencegah siklus bolak-balik jadwal.',
      },
    ],
  },
  {
    categorySlug: 'schedule-management',
    slug: 'quiz-teknik-kalender',
    title: 'Kuis Teknik Kalender & Meeting',
    description: 'Latihan penggunaan kalender dan prosedur reschedule.',
    instruction: 'Pilih prosedur penjadwalan yang benar untuk setiap kasus.',
    level: 'MEDIUM',
    durationMinutes: 12,
    order: 2,
    questions: [
      {
        question: 'Prosedur reschedule meeting yang benar adalah...',
        options: ['Mengubah waktu undangan tanpa memberi tahu', 'Konfirmasi waktu baru, batalkan undangan lama, kirim undangan baru, beri tahu semua peserta', 'Membatalkan rapat tanpa kabar', 'Membuat rapat baru diam-diam'],
        answerIndex: 1,
        explanation: 'Reschedule yang profesional: konfirmasi → batalkan → undang baru → informasikan semua.',
      },
      {
        question: 'Manfaat color coding pada kalender adalah...',
        options: ['Membuat kalender indah', 'Memudahkan otak membedakan jenis kegiatan dengan cepat', 'Menggantikan agenda', 'Mengurangi meeting'],
        answerIndex: 1,
        explanation: 'Warna = kategori (rapat penting, deadline, fokus) sehingga pemindaian kalender cepat.',
      },
      {
        question: 'Undangan meeting yang ideal memuat...',
        options: ['Hanya judul', 'Judul, agenda, lokasi, peserta, dan reminder', 'Nama pembuatnya', 'Durasi tidak perlu'],
        answerIndex: 1,
        explanation: 'Undangan lengkap membantu peserta mempersiapkan dan rapat efisien.',
      },
      {
        question: 'Saat menggunakan link booking (Calendly), agar jadwal tidak bentrok kita harus...',
        options: ['Membagikan link kapan pun', 'Memblokir waktu pribadi & rapat di kalender sebelum membagikan link', 'Menutup link selamanya', 'Menambah slot tak terbatas'],
        answerIndex: 1,
        explanation: 'Kalender terhubung otomatis terblokir — jaga privacy dengan memblokir waktu pribadi.',
      },
      {
        question: 'Meeting tanpa agenda sebaiknya...',
        options: ['Tetap diadakan', 'Ditolak/diubah menjadi email atau diskusi asinkron', 'Diperpanjang', 'Dijadikan seremonial'],
        answerIndex: 1,
        explanation: 'Tanpa agenda, rapat membuang waktu — ganti dengan email atau catat agenda dulu.',
      },
    ],
  },
  {
    categorySlug: 'schedule-management',
    slug: 'simulasi-timezone-event',
    title: 'Simulasi: Zona Waktu & Event',
    description: 'Latihan penjadwalan global dan pengelolaan event.',
    instruction: 'Anda menjadwalkan meeting lintas negara dan event. Pilih keputusan paling tepat.',
    level: 'COMPLEX',
    durationMinutes: 15,
    order: 3,
    questions: [
      {
        question: 'Meeting dengan peserta di London. Anda di Jakarta (WIB). 14:00 WIB = pukul berapa di London?',
        options: ['08:00', '09:00', '20:00', '02:00'],
        answerIndex: 0,
        explanation: 'London = WIB - 6 jam (musim panas) → 14:00 - 6 = 08:00.',
      },
      {
        question: 'Cara menyebut waktu yang benar dalam undangan lintas negara adalah...',
        options: ['"14:00 WIB" saja', '"14:00 WIB (07:00 UTC)" — eksplisit dengan zona waktu', 'Waktu lokal pembuat saja', 'Tidak perlu menyebut waktu'],
        answerIndex: 1,
        explanation: 'Menyebut zona waktu eksplisit menghindari salah konversi antar peserta.',
      },
      {
        question: 'Run of Show (ROS) pada hari H event berfungsi sebagai...',
        options: ['Dokumen anggaran', 'Jadwal detil per menit dari semua sesi', 'Daftar peserta', 'Kontrak vendor'],
        answerIndex: 1,
        explanation: 'ROS menjabarkan waktu per sesi, PIC, dan transisi agar event berjalan mulus.',
      },
      {
        question: 'H-1 sebelum event besar, yang wajib dilakukan adalah...',
        options: ['Istirahat total', 'Dry-run: cek sound, slide, koneksi, dan alur', 'Membatalkan event', 'Mengganti venue'],
        answerIndex: 1,
        explanation: 'Dry-run mendeteksi masalah teknis sebelum peserta datang.',
      },
      {
        question: 'Dua meeting mendesak bentrok di jam yang sama. Tindakan yang benar adalah...',
        options: ['Memilih sendiri tanpa kabar', 'Komunikasikan konflik ke stakeholder lebih awal dan negosiasikan solusi', 'Menghadiri keduanya setengah-setengah', 'Membatalkan keduanya'],
        answerIndex: 1,
        explanation: 'Konflik jadwal dikomunikasikan sejak awal, bukan didiamkan — semua pihak bisa bernegosiasi.',
      },
    ],
  },

  // ════════════════════════════════════════
  // TRAVEL PLANNER
  // ════════════════════════════════════════
  {
    categorySlug: 'travel-planner',
    slug: 'quiz-dasar-travel',
    title: 'Kuis Dasar: Travel Planner',
    description: 'Uji pemahaman proses perencanaan perjalanan dan kebutuhan klien.',
    instruction: 'Pilih jawaban paling tepat sesuai praktik profesional travel planner.',
    level: 'EASY',
    durationMinutes: 10,
    order: 1,
    questions: [
      {
        question: 'Langkah pertama dalam proses perencanaan perjalanan adalah...',
        options: ['Booking tiket', 'Discovery: memahami kebutuhan, budget, dan preferensi klien', 'Menyusun itinerary', 'Membeli asuransi'],
        answerIndex: 1,
        explanation: 'Semua keputusan perjalanan harus berdasarkan kebutuhan klien yang dipahami lebih dulu.',
      },
      {
        question: 'Itinerary yang baik harus menyisakan...',
        options: ['Tidak ada waktu kosong', 'Buffer 30 menit antar aktivitas', 'Semua kegiatan tumpang tindih', 'Waktu tidur lebih sedikit'],
        answerIndex: 1,
        explanation: 'Buffer menyerap keterlambatan dan memberi ruang istirahat — itinerary realistis itu penting.',
      },
      {
        question: 'Saat melakukan riset destinasi, sumber yang paling dapat dipercaya adalah...',
        options: ['Blog 5 tahun lalu', 'Situs resmi pariwisata pemerintah + info terbaru', 'Postingan tanpa sumber', 'Iklan travel'],
        answerIndex: 1,
        explanation: 'Informasi keamanan dan aturan terbaru harus dari sumber resmi dan terbarui.',
      },
      {
        question: 'Hal yang WAJIB dicek saat merencanakan perjalanan internasional adalah...',
        options: ['Warna matahari di sana', 'Masa berlaku paspor minimal 6 bulan + visa + asuransi', 'Jumlah follower travel blogger', 'Menu hotel'],
        answerIndex: 1,
        explanation: 'Dokumen (paspor, visa, asuransi) adalah fondasi perjalanan internasional yang aman.',
      },
      {
        question: 'Komponen anggaran yang sering dilupakan namun wajib ada adalah...',
        options: ['Buffer darurat 10-15%', 'Biaya gosip', 'Tidak ada', 'Biaya tak terduga tidak perlu'],
        answerIndex: 0,
        explanation: 'Buffer darurat menutupi biaya tak terduga — tanda perencana profesional.',
      },
    ],
  },
  {
    categorySlug: 'travel-planner',
    slug: 'quiz-itinerary-budget',
    title: 'Kuis Penyusunan Itinerary & Anggaran',
    description: 'Latihan menyusun itinerary realistis dan anggaran akurat.',
    instruction: 'Pilih keputusan perencanaan yang paling realistis dan profesional.',
    level: 'MEDIUM',
    durationMinutes: 12,
    order: 2,
    questions: [
      {
        question: 'Itinerary 3 hari di kota wisata. Jumlah aktivitas utama per hari yang realistis adalah...',
        options: ['6 aktivitas padat', 'Maksimal 3 aktivitas utama dengan waktu makan & istirahat', '1 aktivitas per 3 hari', 'Tidak ada aktivitas'],
        answerIndex: 1,
        explanation: '2-3 destinasi per hari + waktu makan dan buffer = realistis dan tetap menikmati.',
      },
      {
        question: 'Hal yang harus dicek sebelum mencantumkan tempat wisata ke itinerary...',
        options: ['Harga parkir', 'Jam buka-tutup dan hari libur tempat tersebut', 'Jumlah pengunjung Instagram', 'Kemiripan foto'],
        answerIndex: 1,
        explanation: 'Tempat tutup = itinerary gagal. Cek jam operasional dan hari libur.',
      },
      {
        question: 'Klien minta "rencana cadangan". Maksudnya adalah...',
        options: ['Tiket ekstra', 'Plan B untuk cuaca buruk/tempat tutup', 'Hotel mewah', 'Makanan berlebih'],
        answerIndex: 1,
        explanation: 'Backup plan: alternatif langsung tersedia jika rencana utama gagal.',
      },
      {
        question: 'Metode yang benar untuk tracking pengeluaran selama perjalanan adalah...',
        options: ['Mencatat setelah pulang', 'Update spreadsheet setiap malam: tanggal, kategori, vendor, nominal', 'Menebak total akhir', 'Menyimpan struk tanpa catatan'],
        answerIndex: 1,
        explanation: 'Pencatatan rutin harian mencegah lupa dan memudahkan reimbursement.',
      },
      {
        question: 'Struktur itinerary ringkas untuk eksekutif (business trip) sebaiknya...',
        options: ['Cerita panjang', 'Tabel: waktu, kegiatan, lokasi, kontak — padat dan bisa dicetak', 'Hanya daftar hotel', 'Peta manual'],
        answerIndex: 1,
        explanation: 'Eksekutif butuh informasi cepat: tabel padat yang siap dibawa.',
      },
    ],
  },
  {
    categorySlug: 'travel-planner',
    slug: 'simulasi-masalah-perjalanan',
    title: 'Simulasi: Penanganan Masalah Perjalanan',
    description: 'Latihan keputusan saat terjadi masalah saat traveling.',
    instruction: 'Anda sedang mendampingi klien yang mengalami masalah di perjalanan. Pilih tindakan terbaik.',
    level: 'COMPLEX',
    durationMinutes: 15,
    order: 3,
    questions: [
      {
        question: 'Penerbangan klien dibatalkan di bandara. Tindakan pertama yang benar adalah...',
        options: ['Panik dan menunggu', 'Minta opsi rebooking maskapai, tanya kompensasi, dan hubungi asuransi', 'Membeli tiket baru mahal tanpa diskusi', 'Menginap di bandara'],
        answerIndex: 1,
        explanation: 'Maskapai wajib menawarkan rebooking; asuransi menutup biaya tambahan.',
      },
      {
        question: 'Hotel klien overbooked (kamar tidak tersedia). Hak klien adalah...',
        options: ['Tidak ada hak', 'Hotel wajib menyediakan akomodasi alternatif + kompensasi', 'Klien harus cari hotel sendiri', 'Membatalkan perjalanan'],
        answerIndex: 1,
        explanation: 'Overbooking adalah kesalahan hotel — mereka wajib menyediakan alternatif dan kompensasi.',
      },
      {
        question: 'Klien kehilangan paspor di luar negeri. Urutan tindakan yang benar adalah...',
        options: ['Langsung pulang tanpa dokumen', 'Lapor polisi setempat → kedutaan/konsulat Indonesia untuk dokumen pengganti', 'Membeli paspor palsu', 'Menunggu sampai di Indonesia'],
        answerIndex: 1,
        explanation: 'Laporan polisi diperlukan untuk mendapatkan emergency travel document dari kedutaan.',
      },
      {
        question: 'Perbedaan utama antara riset destinasi yang baik dan sekadar googling adalah...',
        options: ['Jumlah halaman dibuka', 'Verifikasi keamanan, kesehatan, budaya, dan informasi terbaru dari sumber resmi', 'Kecepatan riset', 'Menggunakan aplikasi apa'],
        answerIndex: 1,
        explanation: 'Riset profesional memverifikasi aspek keselamatan dan legalitas dari sumber tepercaya.',
      },
      {
        question: 'Kontak darurat yang WAJIB disimpan klien sebelum berangkat adalah...',
        options: ['Akun media sosial travel blogger', 'Kedutaan Indonesia di negara tujuan, hotline asuransi, dan kontak keluarga', 'Nomor taksi lokal saja', 'Tidak perlu'],
        answerIndex: 1,
        explanation: 'Kontak kedutaan + asuransi + keluarga adalah jaringan keselamatan perjalanan.',
      },
    ],
  },

  // ════════════════════════════════════════
  // SOCIAL MEDIA MANAGEMENT
  // ════════════════════════════════════════
  {
    categorySlug: 'social-media-management',
    slug: 'quiz-dasar-social-media',
    title: 'Kuis Dasar: Social Media Management',
    description: 'Uji pemahaman peran, platform, dan strategi konten dasar.',
    instruction: 'Pilih jawaban paling tepat sesuai praktik social media management profesional.',
    level: 'EASY',
    durationMinutes: 10,
    order: 1,
    questions: [
      {
        question: 'Prinsip pemilihan platform yang benar adalah...',
        options: ['Aktif di semua platform sekaligus', 'Pilih platform tempat audiens Anda berada', 'Ikuti tren tanpa riset', 'Platform dengan pengguna terbanyak'],
        answerIndex: 1,
        explanation: 'Kualitas dan relevansi audiens lebih penting daripada kuantitas platform.',
      },
      {
        question: 'Formula konten 80/20 berarti...',
        options: ['80% promosi, 20% nilai', '80% nilai (edukasi/hiburan/inspirasi), 20% promosi', '50/50 sama rata', '100% promosi'],
        answerIndex: 1,
        explanation: 'Audiens mengikuti karena nilai yang diberikan; promosi hanya sebagian kecil.',
      },
      {
        question: 'Yang dimaksud content pillar adalah...',
        options: ['Template desain', '3-5 tema besar yang menjaga arah konten', 'Jadwal posting', 'Alat scheduler'],
        answerIndex: 1,
        explanation: 'Content pillar menjaga konten tetap relevan dan tidak melenceng dari brand.',
      },
      {
        question: 'Langkah paling tepat saat menerima komentar negatif adalah...',
        options: ['Menghapusnya', 'Menanggapi dengan profesional dan empati', 'Membalas dengan emosi', 'Mengabaikan'],
        answerIndex: 1,
        explanation: 'Komentar negatif ditanggapi (bukan dihapus) — publik melihat bagaimana brand merespons.',
      },
      {
        question: 'Yang lebih penting daripada frekuensi posting adalah...',
        options: ['Kecepatan posting', 'Konsistensi dan kualitas konten', 'Jumlah hashtag', 'Waktu posting yang aneh'],
        answerIndex: 1,
        explanation: 'Konten konsisten dan berkualitas membangun audiens; postingan sporadis malah merusak.',
      },
    ],
  },
  {
    categorySlug: 'social-media-management',
    slug: 'quiz-copywriting',
    title: 'Kuis Copywriting Konten',
    description: 'Latihan menulis hook, caption, dan CTA yang efektif.',
    instruction: 'Pilih opsi copywriting yang paling efektif untuk setiap situasi.',
    level: 'MEDIUM',
    durationMinutes: 12,
    order: 2,
    questions: [
      {
        question: 'Hook yang paling efektif untuk konten Instagram adalah...',
        options: ['"Halo teman-teman semua..."', '"5 cara menghemat 50% biaya iklan"', '"Ikuti terus ya"', '"Postingan hari ini"'],
        answerIndex: 1,
        explanation: 'Hook berbasis angka/janji langsung menangkap perhatian di 3 detik pertama.',
      },
      {
        question: 'Urutan AIDA dalam copywriting adalah...',
        options: ['Action, Desire, Interest, Attention', 'Attention, Interest, Desire, Action', 'Interest, Action, Attention, Desire', 'Desire, Action, Attention, Interest'],
        answerIndex: 1,
        explanation: 'AIDA: tangkap perhatian → bangun minat → timbulkan keinginan → minta tindakan.',
      },
      {
        question: 'CTA yang tepat untuk konten tips edukatif adalah...',
        options: ['"Beli sekarang juga!"', '"Save konten ini biar nggak lupa"', '"Klik link dalam 5 detik"', '"Jangan lupa follow dulu sebelum baca"'],
        answerIndex: 1,
        explanation: 'CTA harus sesuai konteks konten — save untuk konten bernilai simpan.',
      },
      {
        question: 'Jumlah hashtag yang disarankan untuk Instagram adalah...',
        options: ['30 hashtag setiap posting', '5-10 hashtag relevan', 'Tidak perlu hashtag', '1 hashtag'],
        answerIndex: 1,
        explanation: 'Hashtag relevan (5-10) lebih efektif daripada jumlah yang banyak tapi tidak tepat.',
      },
      {
        question: 'Kesalahan umum copywriting yang harus dihindari adalah...',
        options: ['Hook kuat', 'Caption panjang tanpa struktur', 'CTA jelas', 'Bahasa konsisten'],
        answerIndex: 1,
        explanation: 'Caption tanpa struktur membuat pembaca berhenti — gunakan paragraf/poin pendek.',
      },
    ],
  },
  {
    categorySlug: 'social-media-management',
    slug: 'simulasi-analitik-reporting',
    title: 'Simulasi: Analitik & Pelaporan',
    description: 'Latihan membaca metrik, menyusun laporan, dan keputusan berbasis data.',
    instruction: 'Anda melaporkan performa media sosial ke stakeholder. Pilih analisis dan keputusan paling tepat.',
    level: 'COMPLEX',
    durationMinutes: 15,
    order: 3,
    questions: [
      {
        question: 'Reach turun 20% bulan ini, tapi engagement rate naik dari 2% ke 4%. Kesimpulan yang tepat adalah...',
        options: ['Konten gagal total', 'Algoritma/jangkauan menurun tapi konten lebih relevan bagi yang melihatnya', 'Semua salah', 'Hapus akun'],
        answerIndex: 1,
        explanation: 'Selalu sertakan konteks: reach turun bisa karena algoritma, tapi engagement naik = konten lebih baik.',
      },
      {
        question: 'Vanity metric yang tidak mencerminkan performa bisnis adalah...',
        options: ['Engagement rate', 'Jumlah likes & followers', 'CTR', 'Lead/sales'],
        answerIndex: 1,
        explanation: 'Likes/followers indah dilihat tapi tidak membuktikan dampak bisnis.',
      },
      {
        question: 'Struktur laporan bulanan yang baik dimulai dengan...',
        options: ['Tabel data mentah', 'Ringkasan eksekutif (3 kalimat)', '20 grafik', 'Alasan pembuatnya'],
        answerIndex: 1,
        explanation: 'Ringkasan eksekutif memberi gambaran cepat sebelum stakeholder masuk ke detail.',
      },
      {
        question: 'Konten X performa terbaik (engagement tinggi) dan konten Y terendah. Keputusan yang tepat adalah...',
        options: ['Menghentikan semua konten', 'Reproduce pola konten X, pelajari kenapa Y gagal', 'Memposting konten Y lebih sering', 'Mengabaikan data'],
        answerIndex: 1,
        explanation: 'Data performa memandu strategi: perbanyak yang bekerja, pelajari yang tidak.',
      },
      {
        question: 'Kolom yang WAJIB ada dalam content calendar adalah...',
        options: ['Warna font', 'Tanggal, platform, format, status, dan link/tracking', 'Nomor antrian', 'Foto pribadi'],
        answerIndex: 1,
        explanation: 'Kalender konten yang baik mencakup jadwal, platform, aset, status, dan pelacakan.',
      },
    ],
  },
]
