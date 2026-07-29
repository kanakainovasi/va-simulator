export interface SampleDataset {
  id: string
  name: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  variant: number
  files: DatasetFile[]
  briefTemplate: BriefTemplate
}

export interface DatasetFile {
  name: string
  type: 'csv' | 'xlsx' | 'json'
  size: string
  rows: number
  content: string
}

export interface BriefTemplate {
  companyName: string
  contactPerson: string
  contactRole: string
  period: string
  target: string
  challenge: string
  expectation: string
  storyline: string
  fullBrief?: string
}

export interface ProjectDatasetConfig {
  projectId: string
  categorySlug: string
  levels: {
    beginner: SampleDataset[]
    intermediate: SampleDataset[]
    advanced: SampleDataset[]
  }
}

// ============================================================
// DATA ANALYST - Sales Data Analysis
// ============================================================
const dataAnalystSalesDatasets: ProjectDatasetConfig = {
  projectId: 'data-analyst-sales',
  categorySlug: 'data-analyst',
  levels: {
    beginner: [
      {
        id: 'da-sales-b1',
        name: 'Toko Sederhana - Q3 2024',
        description: 'Data penjualan 3 produk sederhana selama 3 bulan',
        difficulty: 'beginner',
        variant: 1,
        files: [
          {
            name: 'penjualan_q3_2024.csv',
            type: 'csv',
            size: '12 KB',
            rows: 90,
            content: `Tanggal,Produk,Jumlah,Harga_Satuan,Total
2024-07-01,Laptop,2,8500000,17000000
2024-07-01,Mouse,15,125000,1875000
2024-07-02,Keyboard,8,350000,2800000
2024-07-02,Laptop,1,8500000,8500000
2024-07-03,Mouse,20,125000,2500000
...`
          }
        ],
        briefTemplate: {
          companyName: 'Toko Elektronik Maju',
          contactPerson: 'Budi Santoso',
          contactRole: 'Owner',
          period: 'Juli - September 2024',
          target: '150 unit',
          challenge: 'Data masih sederhana dan bersih, hanya perlu membuat rekap dan grafik dasar',
          expectation: 'Spreadsheet ringkas dengan pivot table dan grafik penjualan',
          storyline: 'Toko Elektronik Maju adalah toko kecil di daerah Jakarta Selatan yang menjual aksesoris komputer. Pak Budi Santoso, sang pemilik, ingin melihat data penjualan 3 bulan terakhir dalam bentuk yang mudah dibaca.',
          fullBrief: 'Kami adalah Toko Elektronik Maju, toko kecil yang menjual aksesoris komputer di daerah Jakarta Selatan. Saat ini kami memiliki 3 produk utama: Laptop, Mouse, dan Keyboard.\n\nData penjualan kami selama 3 bulan terakhir (Juli - September 2024) sudah kami kumpulkan dalam file CSV. Kami membutuhkan bantuan Anda untuk:\n\n1. Merekap total penjualan per produk\n2. Membuat grafik perbandingan penjualan\n3. Menghitung rata-rata penjualan harian\n4. Mengidentifikasi produk mana yang paling laris\n\nData yang kami berikan sudah cukup bersih dan tidak perlu banyak pembersihan. Yang kami butuhkan adalah tampilan yang mudah dipahami oleh orang non-teknis.\n\nPak Budi ingin presentasi ini ditunjukkan kepada calon investor potensial minggu depan.'
        }
      },
      {
        id: 'da-sales-b2',
        name: 'Warung Barokah - Q3 2024',
        description: 'Data penjualan warung kelontong 5 produk',
        difficulty: 'beginner',
        variant: 2,
        files: [
          {
            name: 'penjualan_warung_q3.csv',
            type: 'csv',
            size: '10 KB',
            rows: 90,
            content: `Tanggal,Produk,Kategori,Jumlah,Total
2024-07-01,Indomie,Makanan,50,225000
2024-07-01,Teh Pucuk,Minuman,30,45000
2024-07-02,Sabun Lifebuoy,Kebersihan,10,45000
...`
          }
        ],
        briefTemplate: {
          companyName: 'Warung Barokah',
          contactPerson: 'Siti Rahayu',
          contactRole: 'Pemilik',
          period: 'Juli - September 2024',
          target: '500 transaksi',
          challenge: 'Data bersih tapi perlu dipisah berdasarkan kategori produk',
          expectation: 'Rekap penjualan per kategori dengan grafik',
          storyline: 'Warung Barokah milik Ibu Siti sudah berjalan 5 tahun. Beliau ingin tahu produk mana yang paling laku.',
          fullBrief: 'Warung Barokah adalah warung kelontong milik Ibu Siti Rahayu yang sudah berjalan 5 tahun di daerah Bandung. Kami menjual kebutuhan sehari-hari dengan 5 produk utama yang terbagi dalam 3 kategori: Makanan (Indomie), Minuman (Teh Pucuk), dan Kebersihan (Sabun Lifebuoy, Rinso).\n\nKami sudah mengumpulkan data penjualan selama bulan Juli 2024. Kami membutuhkan bantuan Anda untuk:\n\n1. Mengelompokkan penjualan berdasarkan kategori produk\n2. Menghitung total penjualan per kategori\n3. Membuat grafik perbandingan antar kategori\n4. Mengidentifikasi produk terlaris dalam setiap kategori\n\nIbu Siti ingin menggunakan hasil analisis ini untuk memutuskan produk mana yang harus ditambah stoknya.'
        }
      },
      {
        id: 'da-sales-b3',
        name: 'Kedai Kopi Aroma - Q3 2024',
        description: 'Data penjualan 4 menu kopi',
        difficulty: 'beginner',
        variant: 3,
        files: [
          {
            name: 'penjualan_kopi_q3.csv',
            type: 'csv',
            size: '8 KB',
            rows: 90,
            content: `Tanggal,Menu,Harga,Jumlah Terjual,Total
2024-07-01,Espresso,18000,25,450000
2024-07-01,Cappuccino,25000,18,450000
2024-07-02,Latte,28000,12,336000
...`
          }
        ],
        briefTemplate: {
          companyName: 'Kedai Kopi Aroma',
          contactPerson: 'Andi Wijaya',
          contactRole: 'Barista Manager',
          period: 'Juli - September 2024',
          target: '1000 gelas',
          challenge: 'Data bersih, hanya 4 menu, sangat cocok untuk pemula',
          expectation: 'Dashboard sederhana penjualan kopi',
          storyline: 'Kedai Kopi Aroma baru buka 6 bulan. Andi ingin tahu menu favorit pelanggan.',
          fullBrief: 'Kedai Kopi Aroma adalah kedai kopi kecil yang baru beroperasi 6 bulan di daerah Yogyakarta. Kami memiliki 4 menu utama: Espresso, Cappuccino, Latte, dan Americano.\n\nKami sudah mengumpulkan data penjualan selama bulan Juli 2024. Kami membutuhkan bantuan Anda untuk:\n\n1. Menghitung total penjualan per menu\n2. Membuat grafik tren penjualan harian\n3. Mengidentifikasi menu favorit pelanggan\n4. Menghitung rata-rata pendapatan harian\n\nAndi ingin menggunakan data ini untuk memutuskan menu mana yang harus dipromosikan dan mengatur jadwal refill bahan baku.'
        }
      },
      {
        id: 'da-sales-b4',
        name: 'Toko Bangunan Jaya - Q3 2024',
        description: 'Data penjualan 6 material bangunan',
        difficulty: 'beginner',
        variant: 4,
        files: [
          {
            name: 'penjualan_bangunan_q3.csv',
            type: 'csv',
            size: '11 KB',
            rows: 90,
            content: `Tanggal,Material,Satuan,Harga,Sumlah,Total
2024-07-01,Semen Portland,50kg,70000,3,210000
2024-07-01,Pasir,1m3,350000,2,700000
2024-07-02,Batu Bata,1000,850000,1,850000
...`
          }
        ],
        briefTemplate: {
          companyName: 'Toko Bangunan Jaya',
          contactPerson: 'Hendra Kusuma',
          contactRole: 'Manager',
          period: 'Juli - September 2024',
          target: '500 item terjual',
          challenge: 'Data cukup bersih, perlu rekap per material',
          expectation: 'Laporan penjualan material per bulan',
          storyline: 'Toko Bangunan Jaya ingin melacak material mana yang paling diminati bulan ini.',
          fullBrief: 'Toko Bangunan Jaya adalah toko material bangunan yang sudah beroperasi 10 tahun di Surabaya. Kami menjual 6 jenis material utama: Semen Portland, Pasir, Batu Bata, dan Besi Beton.\n\nKami sudah mengumpulkan data penjualan selama bulan Juli 2024. Kami membutuhkan bantuan Anda untuk:\n\n1. Merekap total penjualan per material\n2. Menghitung pendapatan per kategori material\n3. Membuat grafik perbandingan penjualan\n4. Mengidentifikasi material terlaris\n\nHendra ingin menggunakan data ini untuk mengatur stok dan pemesanan ulang, serta menyusun laporan ke pemilik toko.'
        }
      },
      {
        id: 'da-sales-b5',
        name: 'Pet Shop Lucu - Q3 2024',
        description: 'Data penjualan 5 produk hewan peliharaan',
        difficulty: 'beginner',
        variant: 5,
        files: [
          {
            name: 'penjualan_petshop_q3.csv',
            type: 'csv',
            size: '9 KB',
            rows: 90,
            content: `Tanggal,Produk,Jenis_Hewan,Jumlah,Harga_Total
2024-07-01,Makanan Kucing,Kucing,20,300000
2024-07-01,Makanan Anjing,Anjing,15,375000
2024-07-02,Pasir Kucing,Kucing,25,125000
...`
          }
        ],
        briefTemplate: {
          companyName: 'Pet Shop Lucu',
          contactPerson: 'Diana Putri',
          contactRole: 'Manager',
          period: 'Juli - September 2024',
          target: '200 item terjual',
          challenge: 'Data bersih, perlu grouping berdasarkan jenis hewan',
          expectation: 'Rekap penjualan per jenis hewan peliharaan',
          storyline: 'Pet Shop Lucu ingin tahu produk mana yang paling laku untuk kucing vs anjing.',
          fullBrief: 'Pet Shop Lucu adalah pet shop kecil di Jakarta yang menjual produk untuk hewan peliharaan. Kami memiliki 5 produk utama yang terbagi berdasarkan jenis hewan: Kucing (Makanan Kucing, Pasir Kucing, Shampoo Kucing) dan Anjing (Makanan Anjing, Mainan Anjing).\n\nKami sudah mengumpulkan data penjualan selama bulan Juli 2024. Kami membutuhkan bantuan Anda untuk:\n\n1. Mengelompokkan penjualan berdasarkan jenis hewan\n2. Menghitung total penjualan per jenis hewan\n3. Membuat grafik perbandingan kucing vs anjing\n4. Mengidentifikasi produk terlaris per jenis hewan\n\nDiana ingin menggunakan data ini untuk mengatur strategi promosi per jenis hewan dan mengoptimalkan stok produk.'
        }
      }
    ],
    intermediate: [
      {
        id: 'da-sales-i1',
        name: 'Toko Fashion Hijab - Q3 2024',
        description: 'Data penjualan 8 produk fashion dengan beberapa missing value',
        difficulty: 'intermediate',
        variant: 1,
        files: [
          {
            name: 'penjualan_fashion_q3.csv',
            type: 'csv',
            size: '25 KB',
            rows: 240,
            content: `Tanggal,Invoice_No,Produk,Kategori,Warna,Ukuran,Jumlah,Harga_Satuan,Total,Diskon,Status
2024-07-01,INV-001,Hijab Pashmina,Hijab,Maroon,Free Size,3,85000,255000,0,Lunas
2024-07-01,INV-002,Khimar Premium,Khimar,Navy,Free Size,2,125000,,250000,Lunas
2024-07-01,INV-003,Ciput Ninja,Inner,Hitam,Free Size,5,35000,175000,0,
2024-07-02,INV-004,Hijab Segi Empat,Hijab,,M,4,65000,260000,0,Lunas
...`
          }
        ],
        briefTemplate: {
          companyName: 'Toko Fashion Hijab Cantik',
          contactPerson: 'Ratna Dewi',
          contactRole: 'Owner',
          period: 'Juli - September 2024',
          target: 'Rp 50.000.000',
          challenge: 'Beberapa data missing (diskon, status, warna), format tanggal konsisten, ada diskon yang perlu dihitung',
          expectation: 'Dashboard lengkap dengan analisis diskon dan kategori produk',
          storyline: 'Toko Fashion Hijab Cantik milik Ratna ingin tahu produk mana yang paling menguntungkan setelah diskon. Ada beberapa data yang belum lengkap.'
        }
      },
      {
        id: 'da-sales-i2',
        name: 'Online Shop Skincare - Q3 2024',
        description: 'Data penjualan multi-platform (Shopee, Tokopedia, Website)',
        difficulty: 'intermediate',
        variant: 2,
        files: [
          {
            name: 'penjualan_skincare_multi.csv',
            type: 'csv',
            size: '30 KB',
            rows: 300,
            content: `Tanggal,Platform,SKU,Nama_Produk,Kategori,Jumlah,Harga,Ongkos_Kirim,Total_Pembayaran,Rating
2024-07-01,Shopee,SK-001,Serum Vitamin C,Serum,2,89000,15000,193000,5
2024-07-01,Tokopedia,SK-002,Moisturizer Glow,Moisturizer,1,125000,,125000,4
2024-07-01,Website,SK-003,Toner Rosewater,Toner,3,45000,0,135000,5
...`
          }
        ],
        briefTemplate: {
          companyName: 'Glow Beauty Shop',
          contactPerson: 'Michelle Tan',
          contactRole: 'Marketing Manager',
          period: 'Juli - September 2024',
          target: 'Rp 100.000.000',
          challenge: 'Data dari 3 platform berbeda, perlu consolidasi, beberapa ongkos kosong (free shipping)',
          expectation: 'Dashboard perbandingan performa 3 platform',
          storyline: 'Glow Beauty Shop berjualan di 3 platform. Michelle ingin tahu platform mana yang paling menguntungkan.'
        }
      },
      {
        id: 'da-sales-i3',
        name: 'Restoran Padang Sederhana - Q3 2024',
        description: 'Data penjualan harian dengan variasi format tanggal',
        difficulty: 'intermediate',
        variant: 3,
        files: [
          {
            name: 'penjualan_restoran_q3.csv',
            type: 'csv',
            size: '22 KB',
            rows: 270,
            content: `date,order_id,item,qty,price,total,note
01/07/2024,ORD-001,Nasi Rendang,5,35000,175000,Take away
2024-07-01,ORD-002,Ayam Bakar,3,30000,,Dine in
Jul 2,2024ORD-003,Padang Campur,4,40000,160000,
03-07-2024,ORD-004,Gulai Tunjang,2,38000,76000,Take away
...`
          }
        ],
        briefTemplate: {
          companyName: 'Rumah Makan Padang Mak Syukur',
          contactPerson: 'Syukri Adek',
          contactRole: 'Manager',
          period: 'Juli - September 2024',
          target: '1500 porsi terjual',
          challenge: 'Format tanggal tidak konsisten (DD/MM/YYYY, YYYY-MM-DD, MM-DD-YYYY), ada missing total, perlu normalisasi',
          expectation: 'Data yang sudah dibersihkan dan analisis menu terlaris',
          storyline: 'Rumah Makan Padang Mak Syukur sudah berjalan 20 tahun. Data penjualannya masih manual dan formatnya tidak seragam.'
        }
      },
      {
        id: 'da-sales-i4',
        name: 'Toko Otomotif Spare Part - Q3 2024',
        description: 'Data penjualan dengan kategori produk bertingkat',
        difficulty: 'intermediate',
        variant: 4,
        files: [
          {
            name: 'penjualan_otomotif_q3.csv',
            type: 'csv',
            size: '28 KB',
            rows: 350,
            content: `Tanggal,No_Faktur,Kategori_Utama,Kategori_Sub,Nama_Barang,Part_Number,Merk,Jumlah,Harga,Total,Status_Bayar
2024-07-01,F-001,Filter,Oli,Filter Oli Toyota,FO-1234,Denso,10,45000,450000,Lunas
2024-07-01,F-002,Brake,Kampas,Kampas Rem Depan,KR-5678,TRW,5,125000,,Belum Lunas
2024-07-02,F-003,Electrical,Lampu,Lampu H4,H-9012,Philips,8,85000,680000,Lunas
...`
          }
        ],
        briefTemplate: {
          companyName: 'Toko Otomotif Jaya Abadi',
          contactPerson: 'Ridwan Hakim',
          contactRole: 'Direktur',
          period: 'Juli - September 2024',
          target: '2000 item terjual',
          challenge: 'Kategori bertingkat (utama-sub), ada missing total dan status bayar belum lunas',
          expectation: 'Analisis penjualan per kategori dan sub-kategori',
          storyline: 'Toko Otomotif Jaya Abadi ingin melihat tren penjualan per kategori produk dan mengidentifikasi item yang perlu restock.'
        }
      },
      {
        id: 'da-sales-i5',
        name: 'Toko Accessories Gadget - Q3 2024',
        description: 'Data penjualan dengan variasi harga member dan non-member',
        difficulty: 'intermediate',
        variant: 5,
        files: [
          {
            name: 'penjualan_accessories_q3.csv',
            type: 'csv',
            size: '26 KB',
            rows: 280,
            content: `Tanggal,Invoice,Kode_Pelanggan,Tipe,Barang,Jumlah,Harga_Normal,Harga_Member,Total_Bayar
2024-07-01,INV-001,M-001,Member,Charger Type C,2,85000,76500,153000
2024-07-01,INV-002,,Non-Member,Cable Lightning,1,65000,65000,65000
2024-07-01,INV-003,M-002,Member,Phone Case iPhone,3,45000,40500,121500
...`
          }
        ],
        briefTemplate: {
          companyName: 'Gadget Accessories Hub',
          contactPerson: 'Fajar Nugroho',
          contactRole: 'Store Manager',
          period: 'Juli - September 2024',
          target: 'Rp 75.000.000',
          challenge: 'Perlu analisis perbandingan harga member vs non-member, beberapa kode pelanggan kosong',
          expectation: 'Dashboard konversi member dan dampak diskon member',
          storyline: 'Gadget Accessories Hub punya program membership. Fajar ingin tahu apakah program member efektif meningkatkan penjualan.'
        }
      }
    ],
    advanced: [
      {
        id: 'da-sales-a1',
        name: 'Retail Chain Supermarket - Multi Store Q3 2024',
        description: 'Data penjualan multi-toko dengan 5000+ transaksi',
        difficulty: 'advanced',
        variant: 1,
        files: [
          {
            name: 'penjualan_store_a.csv',
            type: 'csv',
            size: '150 KB',
            rows: 1800,
            content: `Timestamp,Transaction_ID,Store_ID,Cashier_ID,SKU,Product_Name,Category,Subcategory,Qty,Unit_Price,Total_Discount,Net_Amount,Payment_Method,Member_ID
2024-07-01 08:15:23,TRX-00001,ST-A01,CSH-001,SKU-1001,Indomie Goreng,Makanan Instant,Mie,5,3200,0,16000,Cash,
2024-07-01 08:17:45,TRX-00002,ST-A01,CSH-001,SKU-2001,Teh Pucuk 350ml,Minuman,Tea,10,3500,500,30000,QRIS,M-0023
...`
          },
          {
            name: 'penjualan_store_b.csv',
            type: 'csv',
            size: '145 KB',
            rows: 1750,
            content: `Timestamp,Transaction_ID,Store_ID,Cashier_ID,SKU,Product_Name,Category,Subcategory,Qty,Unit_Price,Total_Discount,Net_Amount,Payment_Method,Member_ID
2024-07-01 07:30:11,TRX-05001,ST-B01,CSH-011,SKU-1001,Indomie Goreng,Makanan Instant,Mie,8,3200,0,25600,Cash,
2024-07-01 07:32:00,TRX-05002,ST-B01,CSH-011,SKU-3001,Sabun Lifebuoy,Kebersihan,Sabun,3,8500,0,25500,Debit,M-0045
...`
          },
          {
            name: 'master_produk.csv',
            type: 'csv',
            size: '15 KB',
            rows: 150,
            content: `SKU,Product_Name,Category,Subcategory,Brand,Cost_Price,Sell_Price,Stock_Awal
SKU-1001,Indomie Goreng,Makanan Instant,Mie,Indofood,2400,3200,500
SKU-1002,Indomie Rebus,Makanan Instant,Mie,Indofood,2400,3200,450
...`
          }
        ],
        briefTemplate: {
          companyName: 'Supermarket Segar Sejahtera (3 Toko)',
          contactPerson: 'Ir. Hendra Wijaya',
          contactRole: 'Regional Manager',
          period: 'Juli - September 2024',
          target: 'Rp 2.5 Miliar',
          challenge: 'Multi-store data, perlu konsolidasi, analisis cross-store, identifikasi top/bottom performer, analisis margin profit',
          expectation: 'Executive dashboard dengan analisis profitabilitas per toko dan kategori',
          storyline: 'Supermarket Segar Sejahtera punya 3 cabang. Hendra butuh analisis menyeluruh untuk presentasi direksi bulan depan. Data dari 3 toko perlu dikonsolidasi.'
        }
      },
      {
        id: 'da-sales-a2',
        name: 'E-Commerce Marketplace - Multi Vendor Q3 2024',
        description: 'Data transaksi marketplace dengan 8000+ baris',
        difficulty: 'advanced',
        variant: 2,
        files: [
          {
            name: 'transactions_q3.csv',
            type: 'csv',
            size: '200 KB',
            rows: 8000,
            content: `order_id,created_at,buyer_id,seller_id,seller_city,seller_province,product_id,product_name,category_id,price,freight_value,payment_type,payment_installments,review_score
2024-07-01 00:05:12,ord-000001,buy-101,sell-201,Jakarta,DKI Jakarta,prod-1,Headphone Bluetooth,cat-elec,250000,15000,credit_card,3,5
2024-07-01 00:08:34,ord-000002,buy-102,sell-205,Surabaya,Jawa Timur,prod-2,Sneakers Casual,cat-fashion,450000,20000,boleto,1,4
...`
          },
          {
            name: 'sellers_master.csv',
            type: 'csv',
            size: '20 KB',
            rows: 200,
            content: `seller_id,seller_name,seller_city,seller_province,rating,join_date,total_products
sell-201,Toko Elektronik Jaya,Jakarta,DKI Jakarta,4.7,2022-01-15,156
sell-202,Fashion Hub Bandung,Bandung,Jawa Barat,4.5,2022-03-20,89
...`
          }
        ],
        briefTemplate: {
          companyName: 'MarketPlace Nusantara',
          contactPerson: 'Dr. Rina Sari, M.Sc',
          contactRole: 'Head of Data Analytics',
          period: 'Juli - September 2024',
          target: 'Analisis lengkap untuk investor',
          challenge: 'Data very large, multi-vendor, perlu RFM analysis, customer segmentation, seller performance ranking',
          expectation: 'Comprehensive analytics report dengan rekomendasi strategi bisnis',
          storyline: 'MarketPlace Nusantara sedang persiapan Series B funding. Rina perlu analisis mendalam tentang marketplace health metrics untuk investor deck.'
        }
      },
      {
        id: 'da-sales-a3',
        name: 'FMCG Distribution - Multi Region Q3 2024',
        description: 'Data distribusi FMCG dengan analisis regional',
        difficulty: 'advanced',
        variant: 3,
        files: [
          {
            name: 'distribusi_regional.csv',
            type: 'csv',
            size: '180 KB',
            rows: 6000,
            content: `date,region,city,distributor_id,product_id,product_name,category,qty_shipped,qty_sold,qty_returned,revenue,cogs,channel
2024-07-01,Jawa Barat,Bandung,DIS-001,PRD-101,Rinso Anti Noda,Kebersihan,500,480,20,12000000,8400000,Modern Trade
2024-07-01,Jawa Barat,Bandung,DIS-001,PRD-102,Pepsodent Whitening,Perawatan,300,295,5,8850000,5310000,Modern Trade
...`
          },
          {
            name: 'target_vs_actual.csv',
            type: 'csv',
            size: '8 KB',
            rows: 36,
            content: `region,category,target_qty,target_revenue
Jawa Barat,Kebersihan,15000,375000000
Jawa Barat,Perawatan,12000,360000000
...`
          }
        ],
        briefTemplate: {
          companyName: 'PT Distribusi FMCG Nusantara',
          contactPerson: 'Arifin Setiawan, MBA',
          contactRole: 'Commercial Director',
          period: 'Juli - September 2024',
          target: 'Revenue Rp 50 Miliar',
          challenge: 'Multi-region, multi-channel, analisis sell-in vs sell-out, return rate analysis, target vs actual',
          expectation: 'Business review presentation dengan actionable insights',
          storyline: 'PT Distribusi FMCG Nusantara mendistribusikan produk ke seluruh Jawa. Arifin butuh analisis untuk quarterly business review dengan principal.'
        }
      },
      {
        id: 'da-sales-a4',
        name: 'F&B Chain - Multi Outlet Q3 2024',
        description: 'Data penjualan restoran dengan analisis menu engineering',
        difficulty: 'advanced',
        variant: 4,
        files: [
          {
            name: 'sales_outlet_1.csv',
            type: 'csv',
            size: '120 KB',
            rows: 4500,
            content: `datetime,outlet_id,order_type,table_no,item_id,item_name,category,qty,unit_price,cost,discount,total
2024-07-01 10:15:00,OLT-001,Dine In,T-05,M-001,Nasi Goreng Spesial,Makanan,2,45000,18000,0,90000
2024-07-01 10:15:00,OLT-001,Dine In,T-05,M-015,Es Teh Manis,Minuman,2,12000,3000,0,24000
...`
          },
          {
            name: 'menu_master.csv',
            type: 'csv',
            size: '12 KB',
            rows: 80,
            content: `item_id,item_name,category,food_cost,selling_price,prep_time_min,is_available
M-001,Nasi Goreng Spesial,Makanan,18000,45000,8,Yes
M-002,Mie Ayam Jamur,Makanan,15000,38000,7,Yes
...`
          },
          {
            name: 'outlet_info.csv',
            type: 'csv',
            size: '2 KB',
            rows: 5,
            content: `outlet_id,outlet_name,city,seating_capacity,open_date,monthly_rent
OLT-001,Cabang Menteng,Jakarta Pusat,45,2022-01-15,35000000
OLT-002,Cabang Dago,Bandung,60,2022-06-01,28000000
...`
          }
        ],
        briefTemplate: {
          companyName: 'Restoran Nusantara Group (5 Outlet)',
          contactPerson: 'Chef William Hartono',
          contactRole: 'F&B Director',
          period: 'Juli - September 2024',
          target: 'Profit margin 35%',
          challenge: 'Menu engineering analysis, cost control per outlet, identifying underperforming items, cross-outlet comparison',
          expectation: 'Menu matrix analysis (Stars, Puzzles, Dogs, Plow Horses) + profit optimization report',
          storyline: 'Restoran Nusantara Group punya 5 outlet. Chef William ingin mengoptimalkan menu berdasarkan data penjualan dan food cost.'
        }
      },
      {
        id: 'da-sales-a5',
        name: 'Fashion Retail - Omnichannel Q3 2024',
        description: 'Data penjualan omnichannel dengan integrasi online & offline',
        difficulty: 'advanced',
        variant: 5,
        files: [
          {
            name: 'offline_transactions.csv',
            type: 'csv',
            size: '160 KB',
            rows: 5500,
            content: `transaction_id,datetime,store_id,store_name,cashier,sku,product_name,category,size,color,qty,unit_price,total_amount,payment_method,member_id
2024-07-01 09:30:00,TXN-00001,STR-01,Flagship Store Senayan,KASIR-01,FN-1001,Floral Midi Dress,Dress,M,Green,1,450000,450000,Credit Card,M-0123
2024-07-01 09:32:15,TXN-00002,STR-01,Flagship Store Senayan,KASIR-01,FN-2005,Striped Blouse,Top,S,White,2,185000,370000,E-Wallet,
...`
          },
          {
            name: 'online_transactions.csv',
            type: 'csv',
            size: '140 KB',
            rows: 4800,
            content: `order_id,order_date,customer_id,platform,sku,product_name,category,size,color,qty,price,shipping_fee,discount_amount,total,payment_method
2024-07-01 00:01:23,ORD-0001,CUST-501,Shopee,FN-1001,Floral Midi Dress,Dress,M,Green,1,450000,15000,22500,442500,ShopeePay
2024-07-01 00:03:45,ORD-0002,CUST-502,Tokopedia,FN-2005,Striped Blouse,Top,S,White,1,185000,12000,0,197000,Bank Transfer
...`
          },
          {
            name: 'inventory_master.csv',
            type: 'csv',
            size: '50 KB',
            rows: 500,
            content: `sku,product_name,category,base_price,stock_store,stock_warehouse,stock_online,reorder_point,supplier
FN-1001,Floral Midi Dress,Dress,450000,15,50,20,10,Supplier Fashion A
FN-1002,Striped Blouse,Top,185000,25,80,30,15,Supplier Fashion A
...`
          }
        ],
        briefTemplate: {
          companyName: 'Fashion Brand "Elegance" - Omnichannel',
          contactPerson: 'Jessica Chen, S.E., M.M.',
          contactRole: 'Chief Marketing Officer',
          period: 'Juli - September 2024',
          target: 'Omnichannel revenue growth 25%',
          challenge: 'Integrasi data online & offline, customer journey analysis, inventory optimization, channel cannibalization analysis',
          expectation: 'Omnichannel analytics dashboard dengan customer lifetime value analysis',
          storyline: 'Brand Elegance punya 3 store offline dan berjualan di Shopee, Tokopedia, serta website sendiri. Jessica perlu memahami customer behavior lintas channel.'
        }
      }
    ]
  }
}

// ============================================================
// SOCIAL MEDIA MANAGEMENT - Content Calendar
// ============================================================
const socialMediaDatasets: ProjectDatasetConfig = {
  projectId: 'social-media-content',
  categorySlug: 'social-media-management',
  levels: {
    beginner: [
      {
        id: 'sm-content-b1',
        name: 'Brand Fashion Muslim "Aqilla"',
        description: 'Content calendar untuk brand fashion muslim lokal',
        difficulty: 'beginner',
        variant: 1,
        files: [
          {
            name: 'content_calendar_minggu1.csv',
            type: 'csv',
            size: '5 KB',
            rows: 7,
            content: `Hari,Tanggal,Platform,Content_Type,Topic,Caption,Hashtags,Status
Senin,2024-07-01,Instagram Feed,Product Showcase,Hijab Pashmina,"Pashmina premium warna earth tone...",#fashionhijab #aqilla,Draft
Selasa,2024-07-02,Instagram Story,Behind The Scene,Proses Produksi,"Yuk intip gimana proses...",#bts #handmade,Published
...`
          }
        ],
        briefTemplate: {
          companyName: 'Aqilla Hijab Collection',
          contactPerson: 'Aqila Ramadhani',
          contactRole: 'Founder & Creative Director',
          period: '1-7 Juli 2024',
          target: '1000 engagement',
          challenge: 'Brand baru, perlu konsisten posting dan build awareness',
          expectation: '7 konten Instagram (feed + story) dengan caption siap posting',
          storyline: 'Aqilla Hijab Collection baru launch bulan ini. Aqila butuh content creator yang bisa bantu bikin konten konsisten.'
        }
      },
      {
        id: 'sm-content-b2',
        name: 'Cafe "Kopi Pagi"',
        description: 'Content calendar untuk cafe lokal',
        difficulty: 'beginner',
        variant: 2,
        files: [
          {
            name: 'content_calendar_cafe.csv',
            type: 'csv',
            size: '4 KB',
            rows: 7,
            content: `Hari,Tanggal,Platform,Content_Type,Topic,Caption_Extension,Status
Senin,2024-07-01,Instagram Feed,Menu Feature,Signature Latte,"Signature latte kami yang creamy...",Draft
Selasa,2024-07-02,Instagram Story,Promo,Happy Hour,"Happy hour jam 2-4 sore...",Published
...`
          }
        ],
        briefTemplate: {
          companyName: 'Kopi Pagi Cafe',
          contactPerson: 'Raka Pratama',
          contactRole: 'Cafe Manager',
          period: '1-7 Juli 2024',
          target: '500 engagement',
          challenge: 'Cafe baru, perlu showcase menu dan suasana',
          expectation: 'Konten yang menggugah selera dan mengajak datang',
          storyline: 'Kopi Pagi Cafe baru buka di daerah Kemang. Raka ingin meningkatkan awareness lewat social media.'
        }
      },
      {
        id: 'sm-content-b3',
        name: 'Online Shop Skincare "GlowUp"',
        description: 'Content calendar untuk skincare brand',
        difficulty: 'beginner',
        variant: 3,
        files: [
          {
            name: 'content_calendar_skincare.csv',
            type: 'csv',
            size: '4 KB',
            rows: 7,
            content: `Hari,Tanggal,Platform,Content_Type,Product_Focus,Key_Message,Status
Senin,2024-07-01,Instagram Reels,Tutorial,Double Cleansing,"Step by step double cleansing...",Draft
Selasa,2024-07-02,Instagram Feed,Educational,Ingredient 101,"Vitamin C itu penting karena...",Published
...`
          }
        ],
        briefTemplate: {
          companyName: 'GlowUp Skincare',
          contactPerson: 'Nadira Putri',
          contactRole: 'Brand Manager',
          period: '1-7 Juli 2024',
          target: '2000 reach',
          challenge: 'Perlu edukasi audience tentang skincare routine',
          expectation: 'Konten edukatif + product showcase',
          storyline: 'GlowUp Skincare punya produk lokal berkualitas. Nadira perlu konten yang edukasi sekaligus promote produk.'
        }
      },
      {
        id: 'sm-content-b4',
        name: 'Fitness Center "FitLife"',
        description: 'Content calendar untuk gym/fitness',
        difficulty: 'beginner',
        variant: 4,
        files: [
          {
            name: 'content_calendar_fitness.csv',
            type: 'csv',
            size: '4 KB',
            rows: 7,
            content: `Hari,Tanggal,Platform,Content_Type,Topic,Caption_Theme,Status
Senin,2024-07-01,Instagram Feed,Motivation,Monday Workout,"Mulai minggu dengan workout...",Draft
Selasa,2024-07-02,Instagram Reels,Tutorial,5 Menit Stretching,"Stretching buat yang kerja seharian...",Published
...`
          }
        ],
        briefTemplate: {
          companyName: 'FitLife Gym & Wellness',
          contactPerson: 'Dimas Aditya',
          contactRole: 'Marketing Lead',
          period: '1-7 Juli 2024',
          target: '800 engagement',
          challenge: 'Perlu motivasi audience untuk mulai workout',
          expectation: 'Konten motivasi + tips workout',
          storyline: 'FitLife Gym ingin menambah member baru lewat social media. Dimas butuh konten yang inspiring.'
        }
      },
      {
        id: 'sm-content-b5',
        name: 'Pet Shop "PawPals"',
        description: 'Content calendar untuk pet shop',
        difficulty: 'beginner',
        variant: 5,
        files: [
          {
            name: 'content_calendar_petshop.csv',
            type: 'csv',
            size: '4 KB',
            rows: 7,
            content: `Hari,Tanggal,Platform,Content_Type,Topic,Pet_Focus,Status
Senin,2024-07-01,Instagram Feed,Cute Content,Kucing Lucu,Cat of the Week,Draft
Selasa,2024-07-02,Instagram Story,Tips,Tips Merawat Anjing,Dog Grooming 101,Published
...`
          }
        ],
        briefTemplate: {
          companyName: 'PawPals Pet Shop',
          contactPerson: 'Melati Sari',
          contactRole: 'Owner',
          period: '1-7 Juli 2024',
          target: '600 engagement',
          challenge: 'Audience love cute animal content, tapi juga perlu showcase produk',
          expectation: 'Mix konten cute + educational + product',
          storyline: 'PawPals punya banyak pelanggan setia. Melati ingin leverage cute pets untuk engagement lebih tinggi.'
        }
      }
    ],
    intermediate: [
      {
        id: 'sm-content-i1',
        name: 'Brand Skincare "NatureGlow" - Campaign Ramadan',
        description: 'Content calendar lengkap dengan campaign strategy',
        difficulty: 'intermediate',
        variant: 1,
        files: [
          {
            name: 'content_strategy.csv',
            type: 'csv',
            size: '8 KB',
            rows: 14,
            content: `Week,Date,Platform,Content_Type,Theme,Product_Focus,CTA,KPI_Target,Hashtags,Status
1,2024-07-01,Instagram Feed,Education,Skincare Routine Puasa,Night Cream,"Save post ini!",Save 100,#skincarepuasa #natureglow,Draft
1,2024-07-01,Instagram Reels,Tutorial,5 Step Night Routine,Night Cream + Serum,"Watch till end!",Views 5000,#routineskincare,Published
1,2024-07-02,Instagram Carousel,Behind The Scene,Proses Produksi,All Products,"Learn about our quality",Reach 2000,#bts #quality,Draft
...`
          },
          {
            name: 'competitor_analysis.csv',
            type: 'csv',
            size: '3 KB',
            rows: 5,
            content: `Brand,Followers,Engagement_Rate,Content_Frequency,Strength,Weakness
NatureGlow,25000,3.2%,5x/minggu,Authentic content,Low Reels
GlowSkin,45000,2.8%,7x/minggu,High budget production,Generic
...`
          }
        ],
        briefTemplate: {
          companyName: 'NatureGlow Skincare',
          contactPerson: 'Dr. Amanda Putri',
          contactRole: 'Brand Director',
          period: 'Juli 2024 (4 minggu)',
          target: 'Growth followers 15%, Engagement rate 4%',
          challenge: 'Perlu strategy yang terstruktur, ada competitor analysis, campaign khusus',
          expectation: '4 minggu content plan + strategy document + KPI tracking',
          storyline: 'NatureGlow mau scale up social media presence. Dr. Amanda butuh content creator yang bisa bikin strategy, bukan cuma posting.'
        }
      },
      {
        id: 'sm-content-i2',
        name: 'Restaurant Chain "Nusantara Rasa" - Menu Launch',
        description: 'Content calendar untuk peluncuran menu baru',
        difficulty: 'intermediate',
        variant: 2,
        files: [
          {
            name: 'launch_campaign_plan.csv',
            type: 'csv',
            size: '6 KB',
            rows: 10,
            content: `Phase,Date,Platform,Content_Type,Objective,Key_Message,Asset_Needed
Teaser,2024-07-01,Instagram Story,Countdown,Anticipation,"Something spicy is coming...",Video teaser 15detik
Teaser,2024-07-02,Instagram Feed,Close-up Food,craving,"Guess what this is?",Photo close-up menu baru
Launch,2024-07-05,Instagram Reels,Full Reveal,trial,"Meet our new Sambal Ijo!",Video reveal 30detik
...`
          }
        ],
        briefTemplate: {
          companyName: 'Nusantara Rasa Restaurant',
          contactPerson: 'Chef Budi Hartono',
          contactRole: 'Culinary Director',
          period: '1-14 Juli 2024',
          target: '1000 trial orders menu baru',
          challenge: 'Menu baru harus viral, ada teka-teki sebelum launch',
          expectation: 'Teaser → Launch → Post-launch campaign plan',
          storyline: 'Nusantara Rasa mau launch menu "Sambal Ijo Premium". Chef Budi butuh campaign yang bikin penasaran.'
        }
      },
      {
        id: 'sm-content-i3',
        name: 'Fashion Brand "UrbanStyle" - Sale Campaign',
        description: 'Content calendar untuk mid-year sale',
        difficulty: 'intermediate',
        variant: 3,
        files: [
          {
            name: 'sale_campaign_calendar.csv',
            type: 'csv',
            size: '5 KB',
            rows: 8,
            content: `Day,Date,Platform,Content_Type,Offer_Highlighted,Discount_Mention,CTA
D-3,2024-07-08,Instagram Feed,Teaser,Sale announcement,"Coming soon...",Follow for update
D-2,2024-07-09,Instagram Story,Poll,Audience choice,"Which item?",Vote now
D-1,2024-07-10,Instagram Reels,Unboxing,Haul preview,"Wait for tomorrow!",Turn on notification
D-Day,2024-07-11,Instagram Feed,Collection,Main offer,"UP TO 50% OFF!",Shop now - link in bio
...`
          }
        ],
        briefTemplate: {
          companyName: 'UrbanStyle Fashion',
          contactPerson: 'Rizky Pratama',
          contactRole: 'Digital Marketing Manager',
          period: '8-14 Juli 2024',
          target: 'Revenue Rp 50 juta selama campaign',
          challenge: 'Sale campaign yang tidak pushy tapi tetap convert',
          expectation: 'Teaser → Hype → D-Day → Last Day urgency',
          storyline: 'UrbanStyle mau gelar mid-year sale. Rizky butuh campaign yang elegan dan convert.'
        }
      },
      {
        id: 'sm-content-i4',
        name: 'Travel Agency "Wanderlust" - Promo Liburan',
        description: 'Content calendar untuk promo paket wisata',
        difficulty: 'intermediate',
        variant: 4,
        files: [
          {
            name: 'travel_promo_calendar.csv',
            type: 'csv',
            size: '5 KB',
            rows: 7,
            content: `Day,Date,Destination,Platform,Content_Type,Angle,Booking_CTA
Week1,2024-07-01,Bali,Instagram Feed,Dream Destination,"Imagine waking up to this...",DM for info
Week1,2024-07-03,Bali,Instagram Reels,Budget Breakdown,"Bali 3D2N cuma Rp 2 juta!",Link in bio
Week2,2024-07-08,Lombok,Instagram Carousel,Hidden Gems,"5 spot anti mainstream...",Save for later
...`
          }
        ],
        briefTemplate: {
          companyName: 'Wanderlust Travel Agency',
          contactPerson: 'Anisa Maharani',
          contactRole: 'Social Media Lead',
          period: 'Juli 2024',
          target: '50 booking inquiries',
          challenge: 'Promo harus menarik tapi realistis, ada price breakdown',
          expectation: 'Content yang inspire + inform + convert',
          storyline: 'Wanderlust mau promo paket liburan July. Anisa butuh konten yang bikin orang langsung mau booking.'
        }
      },
      {
        id: 'sm-content-i5',
        name: 'Education Platform "SkillUp" - Course Launch',
        description: 'Content calendar untuk launch kursus online',
        difficulty: 'intermediate',
        variant: 5,
        files: [
          {
            name: 'course_launch_calendar.csv',
            type: 'csv',
            size: '6 KB',
            rows: 9,
            content: `Phase,Date,Platform,Content_Type,Topic,Instructor_Feature,Lead_Magnet
Awareness,2024-07-01,LinkedIn,Article,Industry Problem,"Expert quote",Free checklist
Awareness,2024-07-03,Instagram Reels,Pain Point,Struggle content,"Student testimonial",Free mini course
Consideration,2024-07-08,Instagram Carousel,Curriculum,Course overview,"Instructor intro",Free webinar
...`
          }
        ],
        briefTemplate: {
          companyName: 'SkillUp Academy',
          contactPerson: 'Farhan Fauzi',
          contactRole: 'Growth Marketing Manager',
          period: '1-21 Juli 2024',
          target: '200 enrollments',
          challenge: 'Course baru, perlu build trust dan urgency',
          expectation: 'Awareness → Consideration → Conversion funnel',
          storyline: 'SkillUp mau launch kursus Data Analytics. Farhan butuh funnel marketing lewat social media.'
        }
      }
    ],
    advanced: [
      {
        id: 'sm-content-a1',
        name: 'Multi-Brand FMCG "Nusantara Consumer Products"',
        description: 'Content strategy untuk 3 brand sekaligus',
        difficulty: 'advanced',
        variant: 1,
        files: [
          {
            name: 'brand_strategy_matrix.csv',
            type: 'csv',
            size: '10 KB',
            rows: 15,
            content: `Brand,Target_Audience,Platform_Priority,Content_Pillar_1,Content_Pillar_2,Content_Pillar_3,Posting_Frequency,Monthly_Budget
CleanMax,Cleaning enthusiast,Instagram + TikTok,Product demo,Before-After,Tips rumah tangga,7x/minggu Rp 15 juta
FreshBite,Health-conscious millennials,Instagram + YouTube,Recipe,Ingredient spotlight,User generated content,5x/minggu Rp 12 juta
PetCare Plus,Pet owners 25-40,Facebook + Instagram,Pet tips,Product benefit,Community stories,6x/minggu Rp 10 juta
...`
          },
          {
            name: 'content_calendar_multi_brand.csv',
            type: 'csv',
            size: '15 KB',
            rows: 60,
            content: `Week,Brand,Day,Platform,Content_Type,Pillar,Topic,Target_KPI,Budget_Allocation,Status
1,CleanMax,Senin,Instagram Feed,Product Demo,Product demo,"CleanMax vs kompetitor",Engagement 500,Rp 3.5 juta,Draft
1,CleanMax,Selasa,TikTok,Before-After,Before-After,"Sehabis pakai CleanMax",Views 10000,Rp 2 juta,Review
1,FreshBite,Senin,Instagram Carousel,Recipe,Recipe,"Resesehat 15 menit",Save 200,Rp 2.5 juta,Approved
...`
          },
          {
            name: 'performance_tracking.csv',
            type: 'csv',
            size: '5 KB',
            rows: 12,
            content: `Brand,Metric,Week1,Week2,Week3,Week4,Target,Status
CleanMax,Reach,15000,18000,,,-,On Track
CleanMax,Engagement,450,520,,,-,On Track
FreshBite,Reach,12000,14500,,,-,On Track
...`
          }
        ],
        briefTemplate: {
          companyName: 'PT Nusantara Consumer Products',
          contactPerson: 'Sandra Dewi, S.H., M.M.',
          contactRole: 'VP Marketing',
          period: 'Juli 2024 (4 minggu)',
          target: 'Total reach 500K, engagement rate 4%',
          challenge: '3 brand beda target audience, beda platform priority, budget terbatas per brand',
          expectation: 'Integrated content strategy untuk 3 brand dengan ROI tracking',
          storyline: 'PT Nusantara Consumer Products punya 3 brand consumer goods. Sandra butuh content strategy yang terintegrasi namun tetap relevant per brand.'
        }
      },
      {
        id: 'sm-content-a2',
        name: 'E-Commerce Mega Sale - 7.7 Campaign',
        description: 'Campaign strategy untuk mega sale event',
        difficulty: 'advanced',
        variant: 2,
        files: [
          {
            name: 'campaign_funnel_strategy.csv',
            type: 'csv',
            size: '8 KB',
            rows: 12,
            content: `Funnel_Stage,Days_Before,Platform,Content_Type,Objective,Budget_Pct,KPI,Metric_Target
Awareness,D-14,All Social,Teaser Video,Brand recall,15%,Video Views,50000
Interest,D-10,Instagram + TikTok,Product Showcase,Desire building,20%,Engagement,5000
Consideration,D-7,Instagram + Email,Flash Deal Preview,Urgency,25%,Click through,2000
Conversion,D-3 to D-Day,All Platform,Live Selling,Direct sales,30%,Revenue,Rp 500 juta
Retention,D+3,Email + WA,Thank You + Review,Loyalty,10%,Repeat purchase,20%
...`
          }
        ],
        briefTemplate: {
          companyName: 'MegaStore Marketplace',
          contactPerson: 'Rudy Salim, S.E.',
          contactRole: 'Chief Revenue Officer',
          period: '24 Juni - 10 Juli 2024',
          target: 'Revenue Rp 5 Miliar',
          challenge: 'Mega sale event, multi-platform, perlu funnel strategy dari awareness sampai retention',
          expectation: 'Full funnel campaign dengan budget allocation dan KPI per stage',
          storyline: 'MegaStore mau gelar 7.7 Sale besar-besaran. Rudy butuh campaign strategy yang proven bisa generate revenue.'
        }
      },
      {
        id: 'sm-content-a3',
        name: 'Hospital Group - Healthcare Content Marketing',
        description: 'Content strategy untuk rumah sakit multi-cabang',
        difficulty: 'advanced',
        variant: 3,
        files: [
          {
            name: 'healthcare_content_matrix.csv',
            type: 'csv',
            size: '12 KB',
            rows: 20,
            content: `Department,Target_Patient,Content_Type,Platform,Content_Example,Compliance_Note,Doctor_Feature,Monthly_Freq
Kardiologi,Usia 45+,Educational Article,LinkedIn + Facebook,"5 Tanda Penyakit Jantung",Tidak ada klaim medis,Dr. Budi,4x
Dermatology,Usia 25-40,Before-After,Instagram,"Transformasi Akne",Disclaimer wajib,Dr. Sari,6x
Pediatrics,Parents 28-45,Tips Parenting,Instagram + YouTube,"Tips Imunisasi Anak",Source dari Kemenkes,Dr. Andi,4x
...`
          }
        ],
        briefTemplate: {
          companyName: 'RS Sehat Sentosa Group (3 Cabang)',
          contactPerson: 'dr. Hendra Wijaya, Sp.PD',
          contactRole: 'Director of Marketing',
          period: 'Juli 2024',
          target: 'Patient acquisition +15%, Brand awareness naik',
          challenge: 'Healthcare content harus accurate, compliance, tapi tetap engaging',
          expectation: 'Content calendar yang balance educational + promotional + human interest',
          storyline: 'RS Sehat Sentosa mau tingkatkan patient acquisition lewat content marketing. dr. Hendra butuh strategy yang medically accurate tapi tetap engaging.'
        }
      },
      {
        id: 'sm-content-a4',
        name: 'Property Developer - Project Launch Campaign',
        description: 'Campaign untuk launch proyek properti baru',
        difficulty: 'advanced',
        variant: 4,
        files: [
          {
            name: 'property_launch_strategy.csv',
            type: 'csv',
            size: '10 KB',
            rows: 15,
            content: `Phase,Duration,Platform,Content_Type,Buyer_Journey,Objective,Budget,Target_Leads
Pre-Launch,2 weeks,Instagram + LinkedIn,Teaser + Groundbreaking, Awareness,Brand buzz,30%,100 leads
Launch Event,1 day,Instagram Live + YouTube,Virtual Tour, Consideration,Engagement,20%,50 site visits
Post-Launch,4 weeks,All Social + Google Ads,Unit Showcase + Testimonial, Decision,Conversions,40%,30 bookings
Nurture,Ongoing,Email + WhatsApp,Follow-up + Exclusive offers, Loyalty,Retention,10%,Repeat referral
...`
          }
        ],
        briefTemplate: {
          companyName: 'PT Properti Makmur Sejahtera',
          contactPerson: 'Andi Suryadi, S.T., M.T.',
          contactRole: 'Marketing Director',
          period: 'Juli - Agustus 2024',
          target: '30 unit terjual dalam 1 bulan',
          challenge: 'Property high-value, perlu long nurturing, ada virtual tour requirement',
          expectation: 'Full campaign dari pre-launch sampai post-launch dengan lead tracking',
          storyline: 'PT Properti Makmur mau launch proyek baru di BSD. Andi butuh campaign yang bisa generate qualified leads.'
        }
      },
      {
        id: 'sm-content-a5',
        name: 'NGO Campaign - Environmental Awareness',
        description: 'Campaign untuk organisasi nirlaba',
        difficulty: 'advanced',
        variant: 5,
        files: [
          {
            name: 'ngo_campaign_strategy.csv',
            type: 'csv',
            size: '8 KB',
            rows: 12,
            content: `Week,Objective,Platform,Content_Type,Call_to_Action,Partnership,Impact_Metric,Story_Angle
1,Problem Awareness,Instagram + Twitter,Infographic,Share statistics,EPA Indonesia,Impressions 100K,Pollution data
2,Community Action,Instagram + TikTok,User Challenge,Join challenge,Influencer eco,UGC 500 posts,Before-After
3,Solution Showcase,YouTube + LinkedIn,Documentary style,Donate/Volunteer,NGO partner,Donations Rp 50 juta,Impact stories
4,Movement Building,All Platform,Compilation + Thank you,Continue supporting,Corporate sponsor,Retained supporters 1000,Future vision
...`
          }
        ],
        briefTemplate: {
          companyName: 'Green Earth Indonesia (NGO)',
          contactPerson: 'Dian Kusuma, S.Si.',
          contactRole: 'Campaign Director',
          period: 'Juli 2024 (4 minggu)',
          target: 'Awareness: 500K impressions, Action: 1000 supporters',
          challenge: 'NGO budget terbatas, perlu viral tapi authentic, ada partnership management',
          expectation: 'Campaign 4 minggu dari awareness sampai movement building',
          storyline: 'Green Earth Indonesia mau gelar campaign "Bersihkan Pantai Indonesia". Dian butuh strategy yang maximizes impact dengan budget minimal.'
        }
      }
    ]
  }
}

// ============================================================
// EXPORT ALL DATASETS
// ============================================================
export const ALL_SAMPLE_DATASETS: ProjectDatasetConfig[] = [
  dataAnalystSalesDatasets,
  socialMediaDatasets,
]

export function getDatasetConfig(projectId: string): ProjectDatasetConfig | undefined {
  return ALL_SAMPLE_DATASETS.find(config => config.projectId === projectId)
}