export interface ResourceFile {
  name: string
  description: string
  type: 'csv' | 'xlsx' | 'docx' | 'txt' | 'zip'
  size: string
  content?: string // For downloadable files (CSV/TXT content)
}

export interface TemplateLink {
  name: string
  description: string
  url: string
  platform: 'google-sheets' | 'canva' | 'google-docs' | 'notion' | 'figma'
  icon: string
}

export interface CategoryResources {
  categorySlug: string
  title: string
  description: string
  howToUse: string[]
  starterKit: ResourceFile[]
  templates: TemplateLink[]
}

export const PROJECT_RESOURCES: Record<string, CategoryResources> = {
  'data-analyst': {
    categorySlug: 'data-analyst',
    title: 'Data Analyst Starter Kit',
    description: 'Dataset mentah dan template dashboard untuk analisis data',
    howToUse: [
      'Download file dataset mentah (.CSV) sesuai level project kamu',
      'Import dataset ke Excel atau Google Sheets',
      'Buka template dashboard untuk struktur analisis',
      'Ikuti panduan di tab Onboarding untuk langkah analisis',
      'Gunakan pivot table dan chart untuk visualisasi data',
    ],
    starterKit: [
      {
        name: 'penjualan_toko_maju_q3_2024.csv',
        description: 'Data penjualan 3 toko retail Q3 2024 - 500 transaksi',
        type: 'csv',
        size: '45 KB',
        content: `tanggal,toko,produk,kategori,jumlah,harga_satuan,total
2024-07-01,Toko Maju,Beras Premium,Sembako,5,65000,325000
2024-07-01,Toko Maju,Minyak Goreng 2L,Sembako,3,28000,84000
2024-07-01,Toko Maju,Susu UHT 1L,Sembako,8,15000,120000
2024-07-02,Toko Maju,Sabun Mandi,Kecantikan,12,8500,102000
2024-07-02,Toko Maju,Shampo Anti Ketombe,Kecantikan,6,22000,132000
2024-07-02,Toko Maju,Teh Celup 25s,Sembako,10,5500,55000
2024-07-03,Toko Maju,Kopi Sachet,Minuman,15,3500,52500
2024-07-03,Toko Maju,Sabun Cuci Piring,Kebersihan,4,12000,48000
2024-07-03,Toko Maju,Tissue Roll 6s,Kebersihan,7,18000,126000
2024-07-04,Toko Maju,Mie Instan,Sembako,20,2500,50000
2024-07-04,Toko Maju,Air Mineral 600ml,Minuman,25,4000,100000
2024-07-04,Toko Maju,Lilin LED,Perlengkapan,3,25000,75000
2024-07-05,Toko Maju,Pembersih Lantai,Kebersihan,5,15000,75000
2024-07-05,Toko Maju,Celana Dalam Wanita,Fashion,8,35000,280000
2024-07-05,Toko Maju,Kaos Pria Basic,Fashion,6,45000,270000
2024-07-06,Toko Maju,Handuk Mandi,Perlengkapan,4,32000,128000
2024-07-06,Toko Maju,Sikat Gigi,Kebersihan,10,8000,80000
2024-07-06,Toko Maju,Pasta Gigi,Kebersihan,9,12000,108000
2024-07-07,Toko Maju,Gula Pasir 1kg,Sembako,7,14000,98000
2024-07-07,Toko Maju,Garam Dapur,Kebersihan,5,5000,25000
2024-07-07,Toko Maju,Kecap Manis,Minuman,8,11000,88000
2024-07-08,Toko Maju,Saus Tomat,Minuman,6,9500,57000
2024-07-08,Toko Maju,Margarin,Minuman,4,16000,64000
2024-07-08,Toko Maju,Tepung Terigu,Sembako,5,10000,50000
2024-07-09,Toko Maju,Kopi Bubuk 250g,Minuman,3,35000,105000
2024-07-09,Toko Maju,Teh Hijau,Minuman,7,8000,56000
2024-07-09,Toko Maju,Jus Buah Kemasan,Minuman,12,7500,90000
2024-07-10,Toko Maju,Parfum Mini,Kecantikan,5,28000,140000
2024-07-10,Toko Maju,Lip Balm,Kecantikan,8,15000,120000
2024-07-10,Toko Maju,Sunscreen SPF30,Kecantikan,4,45000,180000
2024-07-11,Toko Maju,Sarung Tangan,Perlengkapan,6,12000,72000
2024-07-11,Toko Maju,Deterjen Bubuk 1kg,Kebersihan,8,18000,144000
2024-07-11,Toko Maju,Pelembut Pakaian,Kebersihan,5,14000,70000
2024-07-12,Toko Maju,Mie Goreng Instan,Sembako,25,2800,70000
2024-07-12,Toko Maju,Air Mineral Galon,Minuman,10,12000,120000
2024-07-12,Toko Maju,Lilin Batang,Perlengkapan,12,3000,36000
2024-07-13,Toko Maju,Sambal Botol,Minuman,7,8500,59500
2024-07-13,Toko Maju,Sirup Marjan,Minuman,4,22000,88000
2024-07-13,Toko Maju,Susu Bubuk Anak,Minuman,6,48000,288000
2024-07-14,Toko Maju,Kue Kering,Snack,10,15000,150000
2024-07-14,Toko Maju,Cokelat Batang,Snack,8,12000,96000
2024-07-14,Toko Maju,Keripik Singkong,Snack,12,8000,96000
2024-07-15,Toko Maju,Kertas A4 500lbr,Perlengkapan,3,28000,84000
2024-07-15,Toko Maju,Pulpen Gel,Perlengkapan,15,5000,75000
2024-07-15,Toko Maju,Sticky Notes,Perlengkapan,8,7000,56000
2024-07-16,Toko Maju,Baterai AA 4pcs,Perlengkapan,6,18000,108000
2024-07-16,Toko Maju,Kabel charger,Perlengkapan,4,35000,140000
2024-07-16,Toko Maju,Headphone murah,Elektronik,2,45000,90000
2024-07-17,Toko Maju,Mie Instan Kuah Soto,Sembako,30,2500,75000
2024-07-17,Toko Maju,Roti Tawar,Sembako,8,12000,96000
2024-07-17,Toko Maju,Selai Kacang,Minuman,5,18000,90000
2024-07-18,Toko Maju,Sereal Sarapan,Minuman,4,32000,128000
2024-07-18,Toko Maju,Yogurt Drink,Minuman,10,8000,80000
2024-07-18,Toko Maju,Keju Cheddar,Minuman,6,25000,150000
2024-07-19,Toko Maju,Deterjen Cair,Kebersihan,5,22000,110000
2024-07-19,Toko Maju,Pewangi Pakaian,Kebersihan,7,15000,105000
2024-07-19,Toko Maju,Karpet Mandi,Perlengkapan,3,45000,135000
2024-07-20,Toko Maju,Baju Bayi,Fashion,8,35000,280000
2024-07-20,Toko Maju,Celana Anak,Fashion,6,40000,240000
2024-07-20,Toko Maju,Jaket Anak,Fashion,3,65000,195000
2024-07-21,Toko Maju,Tas Ransel,Fashion,4,85000,340000
2024-07-21,Toko Maju,Dome Sepatu,Fashion,5,120000,600000
2024-07-21,Toko Maju,Ikat Pinggang,Fashion,7,25000,175000
2024-07-22,Toko Maju,Kipas Angin,Perlengkapan,2,180000,360000
2024-07-22,Toko Maju,Kompor Gas Mini,Camping,3,95000,285000
2024-07-22,Toko Maju,Tenda Camping 2p,Camping,1,350000,350000
2024-07-23,Toko Maju,Botol Tumbler,Perlengkapan,8,35000,280000
2024-07-23,Toko Maju,Mug Keramik,Perlengkapan,6,22000,132000
2024-07-23,Toko Maju,Gelas Plastik 10pcs,Perlengkapan,10,8000,80000
2024-07-24,Toko Maju,Obat Meriang,Obat,5,12000,60000
2024-07-24,Toko Maju,Plester Luka,Obat,8,5000,40000
2024-07-24,Toko Maju,Vitamin C,Obat,10,15000,150000
2024-07-25,Toko Maju,Aquarium Ikan,Hewan,2,85000,170000
2024-07-25,Toko Maju,Makanan Ikan,Hewan,12,8000,96000
2024-07-25,Toko Maju,Pasir Kucing,Hewan,6,15000,90000
2024-07-26,Toko Maju,Shampo Anjing,Hewan,4,25000,100000
2024-07-26,Toko Maju,Kandang Burung,Hewan,2,120000,240000
2024-07-26,Toko Maju,Biji Burung,Hewan,8,10000,80000
2024-07-27,Toko Maju,Sepatu Sneakers,Fashion,3,185000,555000
2024-07-27,Toko Maju,Sendal Rumah,Fashion,8,25000,200000
2024-07-27,Toko Maju,Kaos Kaki 3pasang,Fashion,12,12000,144000
2024-07-28,Toko Maju,Kemeja Pria,Fashion,5,75000,375000
2024-07-28,Toko Maju,Dress Wanita,Fashion,4,95000,380000
2024-07-28,Toko Maju,Rok Panjang,Fashion,6,55000,330000
2024-07-29,Toko Maju,Jas Hujan,Perlengkapan,3,45000,135000
2024-07-29,Toko Maju,Payung Lipat,Perlengkapan,7,28000,196000
2024-07-29,Toko Maju,Senter LED,Perlengkapan,5,32000,160000
2024-07-30,Toko Maju,Rice Cooker Mini,Elektronik,2,185000,370000
2024-07-30,Toko Maju,Kipas Portable,Elektronik,4,75000,300000
2024-07-30,Toko Maju,Charger HP,Elektronik,6,45000,270000
2024-08-01,Toko Barokah,Beras 5kg,Sembako,12,310000,3720000
2024-08-01,Toko Barokah,Gula Pasir 2kg,Sembako,15,27000,405000
2024-08-01,Toko Barokah,Minyak Goreng 5L,Sembako,8,62000,496000
2024-08-02,Toko Barokah,Telur Ayam 1kg,Sembako,20,28000,560000
2024-08-02,Toko Barokah,Ayam Potong 1kg,Sembako,18,35000,630000
2024-08-02,Toko Barokah,Daging Sapi 1kg,Sembako,10,120000,1200000
2024-08-03,Toko Barokah,Ikan Salmon Fillet,Sembako,6,85000,510000
2024-08-03,Toko Barokah,Udang Kupas,Sembako,8,65000,520000
2024-08-03,Toko Barokah,Cumi-cumi,Sembako,5,55000,275000
2024-08-04,Toko Barokah,Sayur Bayam 250g,Sayur,15,5000,75000
2024-08-04,Toko Barokah,Kol Putih 1kg,Sayur,12,8000,96000
2024-08-04,Toko Barokah,Wortel 1kg,Sayur,10,12000,120000
2024-08-05,Toko Barokah,Kentang 1kg,Sayur,14,14000,196000
2024-08-05,Toko Barokah,Bawang Merah 1kg,Sayur,18,25000,450000
2024-08-05,Toko Barokah,Bawang Putih 1kg,Sayur,16,22000,352000
2024-08-06,Toko Barokah,Cabai Merah 1kg,Sayur,20,35000,700000
2024-08-06,Toko Barokah,Cabai Rawit 1kg,Sayur,12,45000,540000
2024-08-06,Toko Barokah,Tomat 1kg,Sayur,15,12000,180000
2024-08-07,Toko Barokah,Pisang 1kg,Buah,20,15000,300000
2024-08-07,Toko Barokah,Apel Malang 1kg,Buah,14,22000,308000
2024-08-07,Toko Barokah,Mangga Harum Manis 1kg,Buah,10,18000,180000
2024-08-08,Toko Barokah,Jeruk Manis 1kg,Buah,16,16000,256000
2024-08-08,Toko Barokah,Anggur Hijau 1kg,Buah,8,35000,280000
2024-08-08,Toko Barokah,Pepaya 1kg,Buah,12,10000,120000
2024-08-09,Toko Barokah,Kopi Tubruk 250g,Minuman,10,18000,180000
2024-08-09,Toko Barokah,Teh Celup Sariwangi,Minuman,15,6500,97500
2024-08-09,Toko Barokah,Susu Kental Manis,Minuman,12,8500,102000
2024-08-10,Toko Barokah,Sabun Colek,Kebersihan,20,5000,100000
2024-08-10,Toko Barokah,Kaporit 1kg,Kebersihan,8,12000,96000
2024-08-10,Toko Barokah,Bayclin Pemutih,Kebersihan,10,15000,150000
2024-08-11,Toko Barokah,Mie Instan Goreng,Sembako,30,2800,84000
2024-08-11,Toko Barokah,Mie Instan Kuah,Sembako,25,2500,62500
2024-08-11,Toko Barokah,Nasi Instan,Sembako,15,5000,75000
2024-08-12,Toko Barokah,Roti Manis,Bakery,20,3500,70000
2024-08-12,Toko Barokah,Croissant,Bakery,12,8000,96000
2024-08-12,Toko Barokah,Donat Cokelat,Bakery,18,4000,72000
2024-08-13,Toko Barokah,Sosis Sapi 500g,Snack,10,28000,280000
2024-08-13,Toko Barokah,Nugget Ayam 500g,Snack,12,25000,300000
2024-08-13,Toko Barokah,French Fries Frozen,Snack,8,22000,176000
2024-08-14,Toko Barokah,Eskrim Cone,Snack,15,8000,120000
2024-08-14,Toko Barokah,Pudding Cup,Snack,20,5000,100000
2024-08-14,Toko Barokah,Yogurt Cup,Snack,18,6000,108000
2024-08-15,Toko Barokah,Kopi Sachet Kapal Api,Minuman,25,2000,50000
2024-08-15,Toko Barokah,Energen Sereal,Minuman,20,3000,60000
2024-08-15,Toko Barokah,Pop Mie Cup,Minuman,15,5000,75000
2024-08-16,Toko Barokah,Tisu Gulung 3pack,Kebersihan,12,12000,144000
2024-08-16,Toko Barokah,Sapu Tangan 10pcs,Kebersihan,8,5000,40000
2024-08-16,Toko Barokah,Kantong Kresek,Kebersihan,25,2000,50000
2024-08-17,Toko Barokah,Gantungan Baju 10pcs,Perlengkapan,10,8000,80000
2024-08-17,Toko Barokah,Jepitan Jemuran 12pcs,Perlengkapan,15,5000,75000
2024-08-17,Toko Barokah,Keranjang Pakaian,Perlengkapan,6,25000,150000
2024-08-18,Kedai Kopi Aroma,Kopi Arabika 250g,Minuman,8,65000,520000
2024-08-18,Kedai Kopi Aroma,Kopi Robusta 250g,Minuman,12,45000,540000
2024-08-18,Kedai Kopi Aroma,Tea Oolong 100g,Minuman,6,55000,330000
2024-08-19,Kedai Kopi Aroma,Gula aren bubuk 200g,Minuman,10,18000,180000
2024-08-19,Kedai Kopi Aroma,Sirup Vanilla,Minuman,5,32000,160000
2024-08-19,Kedai Kopi Aroma,Susu Oat 1L,Minuman,8,28000,224000
2024-08-20,Kedai Kopi Aroma,Cangkir Keramik,Peralatan,4,45000,180000
2024-08-20,Kedai Kopi Aroma,Filter V60,Peralatan,3,85000,255000
2024-08-20,Kedai Kopi Aroma,French Press,Peralatan,2,120000,240000
2024-08-21,Kedai Kopi Aroma,Biji Kopi Toraja 250g,Minuman,6,72000,432000
2024-08-21,Kedai Kopi Aroma,Biji Kopi Mandheling 250g,Minuman,8,68000,544000
2024-08-21,Kedai Kopi Aroma,Matcha Bubuk 100g,Minuman,5,45000,225000
2024-08-22,Kedai Kopi Aroma,Cokelat Bubuk 200g,Minuman,7,38000,266000
2024-08-22,Kedai Kopi Aroma,Karamel Saus,Minuman,4,25000,100000
2024-08-22,Kedai Kopi Aroma,Whip Cream Can,Minuman,6,35000,210000
2024-08-23,Kedai Kopi Aroma,Es Batu 5kg,Bahan,20,8000,160000
2024-08-23,Kedai Kopi Aroma,Air Mineral Galon,Bahan,15,12000,180000
2024-08-23,Kedai Kopi Aroma,Tisu Box,Bahan,10,15000,150000
2024-08-24,Kedai Kopi Aroma,Paper Cup 8oz,Bahan,50,1500,75000
2024-08-24,Kedai Kopi Aroma,Cup Sleeve,Bahan,50,800,40000
2024-08-24,Kedai Kopi Aroma,Lid Cup,Bahan,50,500,25000
2024-08-25,Kedai Kopi Aroma,Coconut Syrup 750ml,Minuman,3,42000,126000
2024-08-25,Kedai Kopi Aroma,Hazelnut Syrup 750ml,Minuman,4,42000,168000
2024-08-25,Kedai Kopi Aroma,Moka Syrup 750ml,Minuman,3,42000,126000
2024-08-26,Kedai Kopi Aroma,Dark Roast 250g,Minuman,5,58000,290000
2024-08-26,Kedai Kopi Aroma,Medium Roast 250g,Minuman,7,55000,385000
2024-08-26,Kedai Kopi Aroma,Light Roast 250g,Minuman,4,62000,248000
2024-08-27,Kedai Kopi Aroma,Sugar Free Syrup,Minuman,5,48000,240000
2024-08-27,Kedai Kopi Aroma,Vanilla Bean,Peralatan,3,55000,165000
2024-08-27,Kedai Kopi Aroma,Cinnamon Powder,Peralatan,4,28000,112000
2024-08-28,Kedai Kopi Aroma,Cold Brew Bottle 500ml,Peralatan,6,35000,210000
2024-08-28,Kedai Kopi Aroma,Travel Mug,Peralatan,4,65000,260000
2024-08-28,Kedai Kopi Aroma,Tumbler Logo,Peralatan,3,85000,255000
2024-08-29,Kedai Kopi Aroma,Paket Gift Set,Paket,5,150000,750000
2024-08-29,Kedai Kopi Aroma,Sample Sachet 5pcs,Paket,30,8000,240000
2024-08-29,Kedai Kopi Aroma,Bundling 3in1,Paket,8,125000,1000000
2024-08-30,Kedai Kopi Aroma,Mug Gift Set,Paket,4,95000,380000
2024-08-30,Kedai Kopi Aroma,Coffee Drip Bag 10pcs,Paket,15,45000,675000
2024-08-30,Kedai Kopi Aroma,Eco Bag Kopi,Paket,10,25000,250000
2024-09-01,Toko Bangunan Jaya,Semen Portland 50kg,Bangunan,40,65000,2600000
2024-09-01,Toko Bangunan Jaya,Bata Merah 100pcs,Bangunan,30,85000,2550000
2024-09-01,Toko Bangunan Jaya,Pasir 1m3,Bangunan,20,180000,3600000
2024-09-02,Toko Bangunan Jaya,Besi Beton 12mm,Bangunan,25,95000,2375000
2024-09-02,Toko Bangunan Jaya,Kawat Bronjong,Bangunan,10,45000,450000
2024-09-02,Toko Bangunan Jaya,Seng Gelombang,Bangunan,15,55000,825000
2024-09-03,Toko Bangunan Jaya,Pipa PVC 4 inch,Bangunan,20,32000,640000
2024-09-03,Toko Bangunan Jaya,Elbow PVC,Bangunan,30,8000,240000
2024-09-03,Toko Bangunan Jaya,Lem Pipa,Bangunan,15,12000,180000
2024-09-04,Toko Bangunan Jaya,Cat Tembok 20L,Bangunan,12,285000,3420000
2024-09-04,Toko Bangunan Jaya,Cat Genteng 1L,Bangunan,18,45000,810000
2024-09-04,Toko Bangunan Jaya,Thinner 5L,Bangunan,8,65000,520000
2024-09-05,Toko Bangunan Jaya,Amplasan Roll,Bangunan,20,15000,300000
2024-09-05,Toko Bangunan Jaya,Kuas Cat 4 inch,Bangunan,25,12000,300000
2024-09-05,Toko Bangunan Jaya,Roll Cat,Bangunan,18,18000,324000
2024-09-06,Toko Bangunan Jaya,Keramik Lantai 40x40,Bangunan,50,28000,1400000
2024-09-06,Toko Bangunan Jaya,Keramik Dinding 25x40,Bangunan,40,22000,880000
2024-09-06,Toko Bangunan Jaya,Lantai Kayu Vinyl,Bangunan,30,65000,1950000
2024-09-07,Toko Bangunan Jaya,Pintu Kayu Panel,Bangunan,8,850000,6800000
2024-09-07,Toko Bangunan Jaya,Jendela Aluminium,Bangunan,10,650000,6500000
2024-09-07,Toko Bangunan Jaya,Kusen Aluminium,Bangunan,12,450000,5400000
2024-09-08,Toko Bangunan Jaya,Lampu LED Downlight,Bangunan,25,35000,875000
2024-09-08,Toko Bangunan Jaya,Kabel Listrik 100m,Bangunan,8,185000,1480000
2024-09-08,Toko Bangunan Jaya,MCB 10A,Bangunan,15,28000,420000
2024-09-09,Toko Bangunan Jaya,Wastafel Keramik,Bangunan,6,350000,2100000
2024-09-09,Toko Bangunan Jaya,Kloset Duduk,Bangunan,5,480000,2400000
2024-09-09,Toko Bangunan Jaya,Shower Set,Bangunan,8,125000,1000000
2024-09-10,Toko Bangunan Jaya,Kran Air,Bangunan,20,45000,900000
2024-09-10,Toko Bangunan Jaya,Water Tank 1000L,Bangunan,3,1850000,5550000
2024-09-10,Toko Bangunan Jaya,Pompa Air,Bangunan,4,650000,2600000
2024-09-11,Toko Bangunan Jaya,Tiang Bambu 3m,Bangunan,30,15000,450000
2024-09-11,Toko Bangunan Jaya,Rambu PVC,Bangunan,20,25000,500000
2024-09-11,Toko Bangunan Jaya,Seng Borongan,Bangunan,10,85000,850000
2024-09-12,Toko Bangunan Jaya,Sekrup Gypsum 3 inch,Bangunan,40,5000,200000
2024-09-12,Toko Bangunan Jaya,Rangka Hollow,Bangunan,25,32000,800000
2024-09-12,Toko Bangunan Jaya,Gypsum Board,Bangunan,15,55000,825000
2024-09-13,Toko Bangunan Jaya,Hook Kabel 10pcs,Bangunan,20,8000,160000
2024-09-13,Toko Bangunan Jaya,Dobel Tape 5m,Bangunan,30,12000,360000
2024-09-13,Toko Bangunan Jaya,Silicone Sealant,Bangunan,18,22000,396000
2024-09-14,Pet Shop Lucu,Makanan Kucing 1kg,Hewan,20,45000,900000
2024-09-14,Pet Shop Lucu,Makanan Anjing 1kg,Hewan,15,55000,825000
2024-09-14,Pet Shop Lucu,Susu Kucing 500ml,Hewan,25,28000,700000
2024-09-15,Pet Shop Lucu,Pasir Kucing 10kg,Hewan,30,35000,1050000
2024-09-15,Pet Shop Lucu,Pasir Kucing 5kg,Hewan,40,18000,720000
2024-09-15,Pet Shop Lucu,Karung Pasir,Hewan,20,5000,100000
2024-09-16,Pet Shop Lucu,Kandang Kucing Medium,Hewan,8,285000,2280000
2024-09-16,Pet Shop Lucu,Kandang Anjing Large,Hewan,5,450000,2250000
2024-09-16,Pet Shop Lucu,Transporter Box,Hewan,10,125000,1250000
2024-09-17,Pet Shop Lucu,Aquarium 60cm,Hewan,4,185000,740000
2024-09-17,Pet Shop Lucu,Filter Aquarium,Hewan,6,85000,510000
2024-09-17,Pet Shop Lucu,Heater Aquarium 100W,Hewan,5,65000,325000
2024-09-18,Pet Shop Lucu,Makanan Ikan Koi 500g,Hewan,15,32000,480000
2024-09-18,Pet Shop Lucu,Vitamin Burung,Hewan,20,15000,300000
2024-09-18,Pet Shop Lucu,Tambahan Telur Jangkrik,Hewan,25,8000,200000
2024-09-19,Pet Shop Lucu,Tas Kucing Carrier,Hewan,7,95000,665000
2024-09-19,Pet Shop Lucu,Leash Anjing,Hewan,10,45000,450000
2024-09-19,Pet Shop Lucu,Collar Kucing,Hewan,15,22000,330000
2024-09-20,Pet Shop Lucu,Cat Tree Tower,Hewan,3,350000,1050000
2024-09-20,Pet Shop Lucu,Tikar Kucing,Hewan,8,35000,280000
2024-09-20,Pet Shop Lucu,Scratching Post,Hewan,12,45000,540000
2024-09-21,Pet Shop Lucu,Shampo Kucing 500ml,Hewan,18,28000,504000
2024-09-21,Pet Shop Lucu,Sikat Bulu Kucing,Hewan,22,15000,330000
2024-09-21,Pet Shop Lucu,Nail Clipper Pet,Hewan,15,18000,270000
2024-09-22,Pet Shop Lucu,Boneka Mouse Kucing,Hewan,25,12000,300000
2024-09-22,Pet Shop Lucu,Bola Catnip,Hewan,30,8000,240000
2024-09-22,Pet Shop Lucu,Rod Toy Kucing,Hewan,20,10000,200000
2024-09-23,Pet Shop Lucu,Pet Bed Donat Small,Hewan,8,65000,520000
2024-09-23,Pet Shop Lucu,Pet Bed Donat Large,Hewan,5,95000,475000
2024-09-23,Pet Shop Lucu,Selimut Pet,Hewan,12,35000,420000
2024-09-24,Pet Shop Lucu,Aquarium Decoration,Hewan,15,15000,225000
2024-09-24,Pet Shop Lucu,Tanaman Hias Air,Hewan,10,12000,120000
2024-09-24,Pet Shop Lucu,Ikan Cupang,Hewan,20,25000,500000
2024-09-25,Pet Shop Lucu,Botol Minum Kucing,Hewan,18,18000,324000
2024-09-25,Pet Shop Lucu,Mangkuk Makan Stainless,Hewan,22,22000,484000
2024-09-25,Pet Shop Lucu,Food Dispenser Otomatis,Hewan,6,85000,510000
2024-09-26,Pet Shop Lucu,Grooming Kit Set,Hewan,5,125000,625000
2024-09-26,Pet Shop Lucu,Dryer Pet,Hewan,3,285000,855000
2024-09-26,Pet Shop Lucu,Hair Clipper Pet,Hewan,4,155000,620000
2024-09-27,Pet Shop Lucu,Clicker Training,Hewan,20,8000,160000
2024-09-27,Pet Shop Lucu,Treats Kucing 100g,Hewan,25,15000,375000
2024-09-27,Pet Shop Lucu,Treats Anjing 100g,Hewan,22,18000,396000
2024-09-28,Pet Shop Lucu,Cat Litter Box,Hewan,10,45000,450000
2024-09-28,Pet Shop Lucu,Scoop Pasir,Hewan,15,12000,180000
2024-09-28,Pet Shop Lucu,Deodorizer Pasir,Hewan,12,18000,216000
2024-09-29,Pet Shop Lucu,Pet Camera,Hewan,4,185000,740000
2024-09-29,Pet Shop Lucu,Auto Feeder,Hewan,6,285000,1710000
2024-09-29,Pet Shop Lucu,Water Fountain,Hewan,8,125000,1000000
2024-09-30,Pet Shop Lucu,Pet Stroller,Hewan,3,350000,1050000
2024-09-30,Pet Shop Lucu,Car Seat Pet,Hewan,5,185000,925000
2024-09-30,Pet Shop Lucu,Portable Kennel,Hewan,4,225000,900000`,
      },
      {
        name: 'template_dashboard_penjualan.xlsx',
        description: 'Template dashboard Excel dengan pivot table dan chart',
        type: 'xlsx',
        size: '28 KB',
      },
    ],
    templates: [
      {
        name: 'Google Sheets - Dashboard Analisis Penjualan',
        description: 'Template dashboard interaktif dengan pivot table dan grafik',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'table',
      },
      {
        name: 'Google Sheets - Template Rekap Data',
        description: 'Template rekap data dengan format standar',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'file-spreadsheet',
      },
    ],
  },

  'project-coordinator': {
    categorySlug: 'project-coordinator',
    title: 'Project Coordinator Starter Kit',
    description: 'Transkrip rapat, template MoM, dan Action Item Tracker',
    howToUse: [
      'Baca transkrip rapat di file mentah untuk memahami konteks',
      'Buka template MoM untuk struktur dokumentasi',
      'Isi Action Item Tracker dengan task, owner, dan deadline dari rapat',
      'Gunakan conditional formatting untuk visualisasi status',
      'Review semua action items sebelum mengirim ke stakeholder',
    ],
    starterKit: [
      {
        name: 'transkrip_rapat_kickoff_website_redesign.txt',
        description: 'Transkrip lengkap rapat kick-off proyek website redesign',
        type: 'txt',
        size: '8 KB',
        content: `TRANSCRIP RAPAT KICK-OFF PROYEK WEBSITE REDESIGN
=================================================
Tanggal: Senin, 15 Juli 2024
Waktu: 09:00 - 10:30 WIB
Lokasi: Ruang Meeting Utama / Zoom Meeting
Peserta: Budi Santoso (Client), Rina Wijaya (PM), Andi Pratama (Designer), Dian Kusuma (Developer)

---

[09:00] BUDI SANTOSO (Client):
Selamat pagi semuanya. Terima kasih sudah hadir di rapat kick-off ini. Saya ingin membahas website redesign untuk PT Maju Bersama. Website lama sudah berusia 5 tahun dan perlu penampilan baru yang lebih modern.

[09:03] RINA WIJAYA (PM):
Baik, Pak Budi. Sebelum masuk ke detail, saya akan presentasikan overview proyek. Website redesign ini memiliki 3 phase:
Phase 1 (Minggu 1-3): Discovery dan Wireframing
Phase 2 (Minggu 4-8): Design dan Development
Phase 3 (Minggu 9-10): Testing dan Launch

[09:07] ANDI PRATAMA (Designer):
Untuk Phase 1, saya butuh akses ke brand guideline yang sudah ada. Apakah ada style guide, logo kit, dan color palette yang sudah ditentukan?

[09:10] BUDI SANTOSO (Client):
Ya, kita punya brand guideline. Warna utama kita adalah biru (#1E40AF) dan oranye (#EA580C). Font yang digunakan adalah Inter untuk body text dan Montserrat untuk heading.

[09:14] DIAN KUSUMA (Developer):
Untuk teknologi, saya sarankan menggunakan Next.js dengan Tailwind CSS. Ini akan memudahkan SEO dan performa. Database bisa pakai PostgreSQL.

[09:18] RINA WIJAYA (PM):
Baik, ada pertanyaan lain? Saya ingin membahas timeline. Deadline akhir adalah 30 September 2024. Apakah ini realistis?

[09:22] ANDI PRATAMA (Designer):
Untuk design, saya butuh minimal 1 minggu untuk wireframe dan 2 minggu untuk high-fidelity mockup. Total 3 minggu.

[09:25] DIAN KUSUMA (Developer):
Development biasanya butuh 4-5 minggu untuk website company profile. Tapi saya bisa paralel dengan designer setelah wireframe selesai.

[09:28] BUDI SANTOSO (Client):
Saya ingin menambahkan fitur blog dan contact form. Apakah itu sudah termasuk?

[09:31] RINA WIJAYA (PM):
Blog dan contact form akan kami masukkan ke scope. Tapi kita perlu agree bahwa fitur e-commerce tidak termasuk di phase ini.

[09:34] BUDI SANTOSO (Client):
Oke, setuju. E-commerce bisa di phase selanjutnya.

[09:36] ANDI PRATAMA (Designer):
Saya butuh product photos dari client. Berapa banyak foto yang perlu disiapkan?

[09:39] BUDI SANTOSO (Client):
Untuk awal, kita sediakan 20 foto produk dan 5 foto tim. Foto bisa di-request ke divisi marketing.

[09:42] DIAN KUSUMA (Developer):
Saya butuh API key untuk integrasi payment gateway nanti (phase 2). Untuk sekarang, saya fokus ke design dan content structure.

[09:45] RINA WIJAYA (PM):
Baik, saya rangkum action items:
1. Andi: Siapkan wireframe website - deadline 26 Juli
2. Dian: Setup development environment - deadline 19 Juli
3. Budi: Kirim brand guideline dan foto produk - deadline 18 Juli
4. Rina: Buat project timeline detail - deadline 17 Juli

[09:50] Semua:
Setuju!

[09:51] RINA WIJAYA (PM):
Oke, rapat ditutup. Kita akan rapat review setiap hari Senin jam 09:00. Terima kasih semuanya.

[09:52] BUDI SANTOSO (Client):
Terima kasih. Saya harap proyek ini berjalan lancar.

---

END OF TRANSCRIPT`,
      },
      {
        name: 'template_mom_rapat.docx',
        description: 'Template Minutes of Meeting (MoM) format profesional',
        type: 'docx',
        size: '15 KB',
      },
      {
        name: 'action_item_tracker.csv',
        description: 'Template Action Item Tracker dengan kolom Task, Owner, Deadline, Status',
        type: 'csv',
        size: '2 KB',
        content: `ID,Task,Owner,Deadline,Priority,Status,Notes
1,Setup development environment,Dian Kusuma,2024-07-19,High,Not Started,Install Next.js dan Tailwind CSS
2,Siapkan wireframe website,Andi Pratama,2024-07-26,High,Not Started,Buat wireframe untuk 5 halaman utama
3,Kirim brand guideline dan foto produk,Budi Santoso,2024-07-18,High,Not Started,Minta ke divisi marketing
4,Buat project timeline detail,Rina Wijaya,2024-07-17,Medium,Not Started,Include milestone dan dependencies
5,Setup database PostgreSQL,Dian Kusuma,2024-07-22,Medium,Not Started,Create schema awal
6,Desain homepage mockup,Andi Pratama,2024-07-29,High,Not Started,High-fidelity design
7,Setup CI/CD pipeline,Dian Kusuma,2024-07-26,Low,Not Started,GitHub Actions
8,Review wireframe dengan client,Rina Wijaya,2024-07-29,High,Not Started,Presentasi ke Pak Budi
9,Buat content structure,Dian Kusuma,2024-08-02,Medium,Not Started,Mapping konten per halaman
10,Setup analytics tracking,Dian Kusuma,2024-08-09,Low,Not Started,Google Analytics 4`,
      },
    ],
    templates: [
      {
        name: 'Google Docs - Template MoM Rapat',
        description: 'Template Minutes of Meeting profesional',
        url: 'https://docs.google.com/document/create',
        platform: 'google-docs',
        icon: 'file-text',
      },
      {
        name: 'Google Sheets - Action Item Tracker',
        description: 'Template tracker action items dengan conditional formatting',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'check-square',
      },
      {
        name: 'Notion - Project Hub Template',
        description: 'Template manajemen proyek lengkap di Notion',
        url: 'https://www.notion.so/templates/project-management',
        platform: 'notion',
        icon: 'layout',
      },
    ],
  },

  'secretary-executive-assistant': {
    categorySlug: 'secretary-executive-assistant',
    title: 'Secretary / EA Starter Kit',
    description: 'Template agenda rapat, surat undangan, dan executive travel pack',
    howToUse: [
      'Pilih template yang sesuai dengan jenis dokumen yang dibutuhkan',
      'Isi data yang diperlukan (nama, tanggal, lokasi, dll)',
      'Gunakan format surat resmi untuk undangan',
      'Buat checklist sebelum hari H rapat/perjalanan',
      'Kirim konfirmasi kepada semua peserta 1 hari sebelum acara',
    ],
    starterKit: [
      {
        name: 'daftar_hadir_board_meeting.csv',
        description: 'Template daftar hadir rapat board quarterly',
        type: 'csv',
        size: '1 KB',
        content: `No,Nama,Jabatan,KEmail,No HP,Kehadiran,Tanda Tangan
1,Dr. Surya Wijaya,President Director,surya@majubersama.co.id,081234567890,Hadir,
2,Ir. Ratna Dewi,Finance Director,ratna@majubersama.co.id,081234567891,Hadir,
3,Andi Kurniawan,Marketing Director,andi@majubersama.co.id,081234567892,Hadir,
4,Maya Putri,HR Director,maya@majubersama.co.id,081234567893,Hadir,
5,Dr. Eko Prasetyo,Operation Director,eko@majubersama.co.id,081234567894,Hadir,
6,Siti Aminah,Legal Director,siti@majubersama.co.id,081234567895,Hadir,
7,Bambang Setiawan,IT Director,bambang@majubersama.co.id,081234567896,Hadir,
8,Dewi Lestari,Corporate Secretary,dewi@majubersama.co.id,081234567897,Hadir,`,
      },
      {
        name: 'agenda_rapat_quarterly.txt',
        description: 'Template agenda rapat board quarterly meeting',
        type: 'txt',
        size: '2 KB',
        content: `AGENDA RAPAT BOARD QUARTERLY MEETING
======================================
PT Maju Bersama

Tanggal: Jumat, 26 Juli 2024
Waktu: 09:00 - 12:00 WIB
Lokasi: Ruang Rapat Utama, Lantai 15
Peserta: Board of Directors (8 orang)

AGENDA:
--------
09:00 - 09:10  Pembukaan dan Roll Call
09:10 - 09:30  Persetujuan Minutes of Meeting Q2 2024
09:30 - 10:00  Presentasi Laporan Keuangan Q2 2024
10:00 - 10:30  Presentasi Laporan Operasional Q2 2024
10:30 - 10:45  Coffee Break
10:45 - 11:15  Diskusi Strategi Bisnis Q3 2024
11:15 - 11:45  Persetujuan Anggaran Q3 2024
11:45 - 12:00  Penutupan dan Tindak Lanjut

DOKUMEN PENDUKUNG:
-------------------
1. Laporan Keuangan Q2 2024 (Finance)
2. Laporan Operasional Q2 2024 (Operation)
3. Draft Anggaran Q3 2024 (Finance)
4. Strategi Bisnis Q3 2024 (Marketing)

CATATAN:
--------
- Mohon konfirmasi kehadiran paling lambat 1 hari sebelum rapat
- Dokumen pendukung akan dikirimkan H-2 melalui email
- Parkir tersedia di Basement 2 (area khusus board member)`,
      },
      {
        name: 'surat_undangan_resmi.txt',
        description: 'Template surat undangan rapat resmi',
        type: 'txt',
        size: '1 KB',
        content: `PT MAJU BERSAMA
Jl. Sudirman No. 123, Jakarta Selatan 12190
Telp: (021) 1234-5678 | Email: corporate@majubersama.co.id

Nomor: MB/UND/07/2024
Lampiran: -
Perihal: Undangan Rapat Board Quarterly Meeting

Kepada Yth.
Bapak/Ibu {{NAMA_PESERTA}}
{{JABATAN}}
di Tempat

Dengan hormat,

Bersama surat ini kami mengundang Bapak/Ibu untuk menghadiri rapat Board Quarterly Meeting dengan ketentuan sebagai berikut:

Hari/Tanggal: Jumat, 26 Juli 2024
Waktu: 09:00 - 12:00 WIB
Lokasi: Ruang Rapat Utama, Lantai 15
Agenda: Persetujuan Laporan Q2 2024 dan Strategi Q3 2024

Besar harapan kami agar Bapak/Ibu dapat hadir tepat waktu. Mohon konfirmasi kehadiran paling lambat 25 Juli 2024.

Demikian undangan ini kami sampaikan. Atas perhatian dan kehadirannya, kami ucapkan terima kasih.

Hormat kami,

Dewi Lestari
Corporate Secretary
PT Maju Bersama`,
      },
    ],
    templates: [
      {
        name: 'Google Docs - Template Surat Undangan',
        description: 'Template surat undangan resmi perusahaan',
        url: 'https://docs.google.com/document/create',
        platform: 'google-docs',
        icon: 'mail',
      },
      {
        name: 'Google Sheets - Template Daftar Hadir',
        description: 'Template daftar hadir rapat dengan format profesional',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'users',
      },
      {
        name: 'Canva - Meeting Agenda Template',
        description: 'Template agenda rapat visual yang menarik',
        url: 'https://www.canva.com/templates/?query=meeting+agenda',
        platform: 'canva',
        icon: 'clipboard',
      },
    ],
  },

  'data-entry-specialist': {
    categorySlug: 'data-entry-specialist',
    title: 'Data Entry Specialist Starter Kit',
    description: 'Database mentah dan template pembersihan data',
    howToUse: [
      'Download file database mentah yang belum dibersihkan',
      'Identifikasi masalah: duplikasi, format tidak konsisten, data invalid',
      'Gunakan template cleaning sheet untuk standarisasi',
      'Validasi email dan nomor telepon',
      'Buat laporan perubahan setelah proses pembersihan',
    ],
    starterKit: [
      {
        name: 'database_client_mentah.csv',
        description: 'Database 500+ record client dengan duplikasi dan error',
        type: 'csv',
        size: '65 KB',
        content: `id,nama_perusahaan,kontak,email,telepon,alamat,kota,provinsi,status
1,PT Maju Bersama,Budi Santoso,budi@majubersama.co.id,081234567890,"Jl. Sudirman No. 123",Jakarta Selatan,DKI Jakarta,Aktif
2,PT Maju Bersama,Budi Santoso,budi@majubersama.co.id,0812-3456-7890,"Jl. Sudirman No. 123",Jakarta Selatan,DKI Jakarta,Aktif
3,CV Berkah Jaya,Andi Pratama,andi@berkahjaya.com,081345678901,"Jl. Gatot Subroto No. 45",Bandung,Jawa Barat,Aktif
4,CV Berkah Jaya,Andi Pratama,andi@berkahjaya.com,0813 4567 8901,"Jl. Gatot Subroto 45",Bandung,Jawa Barat,Aktif
5,PT Sejahtera Abadi,Ratna Dewi,ratna@sejahtera.co.id,081123456789,"Jl. Diponegoro No. 67",Semarang,Jawa Tengah,Aktif
6,PT Sejahtera Abadi,Ratna Dewi,,0811-2345-6789,"Jl. Diponegoro 67",Semarang,Jawa Tengah,Aktif
7,UD Makmur Sentosa,Eko Prasetyo,eko@makmur.co.id,085678901234,"Jl. Ahmad Yani No. 89",Surabaya,Jawa Timur,Aktif
8,UD Makmur Sentosa,Eko Prasetyo,eko.makmur@co.id,0856-7890-1234,"Jl. Ahmad Yani 89",Surabaya,Jawa Timur,Aktif
9,PT Global Tech,Maya Putri,maya@globaltech.com,081298765432,"Jl. Thamrin No. 10",Jakarta Pusat,DKI Jakarta,Aktif
10,PT Global Tech,Maya Putri,maya@globaltechcom,0812-9876-5432,"Jl. Thamrin 10",Jakarta Pusat,DKI Jakarta,Aktif
11,CV Karya Indah,Siti Aminah,siti@karyaindah.co.id,081356789012,"Jl. Pemuda No. 111",Yogyakarta,DI Yogyakarta,Nonaktif
12,PT Nusantara Jaya,Bambang Setiawan,bambang@nusantara.co.id,085789012345,"Jl. Pahlawan No. 22",Malang,Jawa Timur,Aktif
13,PT Nusantara Jaya,bambang,nusantara.jaya@yahoo.com,0857-8901-2345,"Jl. Pahlawan No. 22",Malang,Jawa Timur,Aktif
14,Firma Hadi & Partners,Dewi Lestari,dewi@hadipartners.com,081167890123,"Jl. Asia Afrika No. 33",Bandung,Jawa Barat,Aktif
15,PT Prima Solusi,Andi Kurniawan,andi@primasolusi.co.id,081245678901,"Jl. Kuningan No. 44",Jakarta Selatan,DKI Jakarta,Aktif
16,PT Prima Solusi,andi.k,andi.primasolusi@gmail.com,0812-4567-8901,"Jl. Kuningan 44",Jakarta Selatan,DKI Jakarta,Aktif
17,CV Abadi Jaya,Dr. Eko Prasetyo,eko@abadijaya.co.id,081378901234,"Jl. Sultan Agung No. 55",Semarang,Jawa Tengah,Nonaktif
18,PT Sentosa Mulia,Siti Aminah,siti@sentosamulia.com,085612345678,"Jl. Pemuda No. 66",Surakarta,Jawa Tengah,Aktif
19,PT Sentosa Mulia,Siti Aminah,sentosa.mulia@yahoo.co.id,0856-1234-5678,"Jl. Pemuda 66",Surakarta,Jawa Tengah,Aktif
20,UD Sejahtera,Eko Prasetyo,,081189012345,"Jl. Veteran No. 77",Bandung,Jawa Barat,Aktif`,
      },
      {
        name: 'template_cleaning_sheet.csv',
        description: 'Template untuk tracking data cleaning',
        type: 'csv',
        size: '2 KB',
        content: `field,original_value,cleaned_value,change_type,notes
telepon,0812-3456-7890,081234567890,format_change,Hapus strip
telepon,0813 4567 8901,081345678901,format_change,Hapus spasi
telepon,0811-2345-6789,081123456789,format_change,Hapus strip
email,,(empty),missing_data,Email kosong perlu dilengkapi
email,eko.makmur@co.id,eko@makmur.co.id,typo_fix,Kemungkinan typo
email,maya@globaltechcom,maya@globaltech.com,typo_fix,Missing dot
email,nusantara.jaya@yahoo.com,bambang@nusantara.co.id,domain_change,Email pribadi vs perusahaan
email,sentosa.mulia@yahoo.co.id,siti@sentosamulia.com,domain_change,Email pribadi vs perusahaan
alamat,Jl. Sudirman No. 123,Jl. Sudirman No. 123,standardize,OK
alamat,Jl. Gatot Subroto 45,Jl. Gatot Subroto No. 45,add_missing,No. ditambahkan`,
      },
    ],
    templates: [
      {
        name: 'Google Sheets - Data Cleaning Template',
        description: 'Template untuk tracking dan validasi data',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'table',
      },
      {
        name: 'Google Sheets - Database Master',
        description: 'Template database master bersih',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'database',
      },
    ],
  },

  'data-annotation-ai-trainer': {
    categorySlug: 'data-annotation-ai-trainer',
    title: 'Data Annotation / AI Trainer Starter Kit',
    description: 'Dataset mentah untuk labeling dan panduan annotation',
    howToUse: [
      'Baca panduan labeling sebelum memulai',
      'Download dataset mentah sesuai jenis annotation',
      'Gunakan tools yang direkomendasikan (Label Studio, CVAT)',
      'Pastikan konsistensi labeling dengan membuat glossary',
      'Review hasil annotasi sebelum submit',
    ],
    starterKit: [
      {
        name: 'ulasan_pelanggan_sentiment.csv',
        description: '500 ulasan pelanggan untuk labeling sentiment',
        type: 'csv',
        size: '45 KB',
        content: `id,ulasen,sentiment_expected,confidence_hint
1,"Produk ini sangat bagus dan sesuai ekspektasi. Pengiriman juga cepat!",positive,0.95
2,"Barang rusak saat datang. Kecewa sekali dengan packaging.",negative,0.90
3,"Oke lah untuk harga segitu. Tapi agak lama sampainya.",neutral,0.75
4,"Sangat puas! Akan beli lagi pastinya. Recommend!",positive,0.95
5,"Tidak sesuai deskripsi. Warnanya beda jauh.",negative,0.85
6,"Biasa aja sih, nothing special.",neutral,0.70
7,"Kualitas premium dengan harga terjangkau. Top!",positive,0.90
8,"Customer service tidak responsif saat saya komplain.",negative,0.80
9,"Pengiriman tepat waktu. Produk sesuai pesanan.",positive,0.85
10,"Ukuran tidak sesuai. Terlalu kecil dari yang diharapkan.",negative,0.85
11,"Best purchase this year! Highly recommended!",positive,0.95
12,"Package arrived damaged. Very disappointed.",negative,0.90
13,"Lumayanlah, sesuai harga.",neutral,0.75
14,"Exceeded my expectations! Amazing quality!",positive,0.95
15,"Poor quality material. Fell apart after 2 uses.",negative,0.90
16,"Standard product, nothing remarkable.",neutral,0.70
17,"Pengemasan rapi dan aman. Produk original.",positive,0.85
18,"Sudah 2 minggu belum juga sampai. Lambat!",negative,0.85
19,"Sesuai deskripsi. No complaints.",neutral,0.80
20,"Love it! Will buy again for sure!",positive,0.95`,
      },
      {
        name: 'panduan_labeling_sentiment.txt',
        description: 'Panduan lengkap untuk labeling sentiment analysis',
        type: 'txt',
        size: '3 KB',
        content: `PANDUAN LABELING SENTIMENT ANALYSIS
=====================================

DEFINISI SENTIMENT:
-------------------
POSITIVE: Ulasan yang menunjukkan kepuasan, pujian, atau rekomendasi
NEGATIVE: Ulasan yang menunjukkan ketidakpuasan, keluhan, atau kritik
NEUTRAL: Ulasan yang netral, tidak bias ke arah manapun

KRITERIA LABELING:
------------------

POSITIVE (+):
- Mengandung kata positif: bagus, puas, recommend, top, amazing, love
- Menunjukkan kepuasan terhadap produk/layanan
- Memberikan rekomendasi kepada orang lain
- Menggunakan emoji positif (👍, ❤️, 😊)
- Confidence: 0.8-1.0

NEGATIVE (-):
- Mengandung kata negatif: rusak, kecewa, buruk, lambat, tidak sesuai
- Menunjukkan ketidakpuasan atau keluhan
- Mengeluhkan kualitas, pengiriman, atau layanan
- Menggunakan emoji negatif (👎, 😡, 😢)
- Confidence: 0.8-1.0

NEUTRAL (=):
- Tidak ada emosi yang kuat
- Fakta atau informasi tanpa opini
- Campuran positif dan negatif yang seimbang
- Confidence: 0.6-0.8

HAL YANG PERLU DIPERHATIKAN:
-----------------------------
1. Perhatikan konteks kalimat, bukan hanya kata kunci
2. Sarcasm/ironi perlu diperhatikan (misal: "Wah, bagus banget" bisa negatif)
3. Emoji bisa menjadi indikator sentiment yang kuat
4. Ulasan bilingual (Ind-Eng) tetap harus dilabeli
5. Jika ragu, berikan confidence score yang lebih rendah

CONTOH LABELING:
----------------
"Produk ini sangat bagus!" → POSITIVE (confidence: 0.95)
"Barang rusak" → NEGATIVE (confidence: 0.90)
"Oke lah" → NEUTRAL (confidence: 0.70)
"Fast delivery but poor packaging" → MIXED (pilih yang paling dominan)`,
      },
    ],
    templates: [
      {
        name: 'Google Sheets - Label Tracker',
        description: 'Template tracking progress labeling',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'check-square',
      },
      {
        name: 'Label Studio - Setup Guide',
        description: 'Panduan setup Label Studio untuk annotation',
        url: 'https://labelstud.io/',
        platform: 'notion',
        icon: 'tag',
      },
    ],
  },

  'translation-localizer': {
    categorySlug: 'translation-localizer',
    title: 'Translation / Localizer Starter Kit',
    description: 'Artikel sumber dan template glossary terjemahan',
    howToUse: [
      'Baca artikel sumber dengan seksama sebelum menerjemahkan',
      'Buat glossary istilah teknis terlebih dahulu',
      'Terjemahkan per paragraf dan pertahankan konteks',
      'Gunakan side-by-side comparison untuk review',
      'Pastikan konsistensi terminologi di seluruh dokumen',
    ],
    starterKit: [
      {
        name: 'artikel_sumber_teknologi_1.txt',
        description: 'Artikel blog teknologi Bahasa Inggris untuk diterjemahkan',
        type: 'txt',
        size: '4 KB',
        content: `The Future of Remote Work: How Technology is Reshaping the Workplace

The COVID-19 pandemic fundamentally changed how we work. What was once a rare perk reserved for freelancers and tech workers became a necessity for millions of employees worldwide. Now, as we navigate the post-pandemic era, it's clear that remote work is here to stay.

The Rise of Hybrid Models
Many companies have adopted hybrid work models, allowing employees to split their time between the office and home. This approach offers the best of both worlds: the collaboration and social interaction of in-office work, combined with the flexibility and focus time that remote work provides.

Technology Enablers
Several technological advances have made remote work possible and productive:

1. Video Conferencing: Platforms like Zoom and Microsoft Teams have become essential for virtual meetings. Features like screen sharing, virtual backgrounds, and recording capabilities have made remote meetings almost as effective as in-person ones.

2. Cloud Computing: Services like AWS, Google Cloud, and Microsoft Azure allow teams to access files and applications from anywhere. This has eliminated the need for physical office infrastructure.

3. Collaboration Tools: Slack, Notion, and Asana have revolutionized how teams communicate and manage projects. Real-time messaging, task tracking, and document collaboration keep everyone aligned.

4. Cybersecurity: With remote work comes increased security risks. Companies have invested heavily in VPNs, multi-factor authentication, and security training to protect sensitive data.

Challenges and Solutions
Remote work isn't without its challenges:

- Isolation and loneliness: Companies are addressing this through virtual team-building activities and regular check-ins.
- Work-life balance: Setting clear boundaries between work and personal time is crucial.
- Communication gaps: Over-communication and documentation help bridge these gaps.
- Time zone differences: Asynchronous communication tools and flexible scheduling accommodate global teams.

The Environmental Impact
Remote work has also had a positive environmental impact. Fewer commuters mean reduced carbon emissions, less traffic congestion, and lower office energy consumption. According to a Stanford study, remote work reduced carbon emissions by 54 million tons in 2020 alone.

What's Next?
The future of work will likely involve:

1. AI-powered productivity tools that automate routine tasks
2. Virtual reality meeting spaces for more immersive collaboration
3. Global talent pools不受地理限制
4. Flexible work arrangements as a standard benefit

The workplace has evolved dramatically, and organizations that embrace these changes will have a competitive advantage in attracting and retaining top talent.

---
Source: Tech Insights Blog
Author: Sarah Johnson
Published: March 2024`,
      },
      {
        name: 'glossary_teknis.csv',
        description: 'Template glossary istilah teknis untuk terjemahan',
        type: 'csv',
        size: '2 KB',
        content: `english_term,indonesian_term,definition,context
remote work,kerja jarak jauh,Pekerjaan yang dilakukan di luar kantor,Umum
hybrid model,model hibr.getModel kerja kombinasi kantor dan rumah,Manajemen
video conferencing,konferensi video,Pertemuan virtual melalui video,Teknologi
cloud computing,komputasi awan,penyimpanan dan pemrosesan data online,Teknologi
cybersecurity,keamanan siber,Perlindungan data dan sistem dari ancaman,Teknologi
async communication,komunikasi asinkron,Komunikasi tidak langsung secara real-time,Manajemen
work-life balance,keseimbangan kerja-hidup,Keseimbangan antara pekerjaan dan kehidupan pribadi,Umum
talent pool,pool talent,Kumpulan kandidat potensial untuk direkrut,HR
screen sharing,bagian layar,Membagikan layar dalam pertemuan virtual,Teknologi
task tracking,pelacakan tugas,Pemantauan kemajuan tugas dan proyek,Manajemen
digital transformation,transformasi digital,Proses integrasi teknologi digital,Umum
remote team,tim jarak jauh,Tim yang bekerja dari lokasi berbeda,Manajemen
async work,kerja asinkron,Pekerjaan yang tidak dilakukan pada waktu bersamaan,Manajemen
collaboration tool,alat kolaborasi,Software untuk kerja sama tim,Teknologi`,
      },
    ],
    templates: [
      {
        name: 'Google Sheets - Translation Glossary',
        description: 'Template glossary terjemahan yang bisa di-custom',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'book',
      },
      {
        name: 'Google Docs - Side-by-Side Comparison',
        description: 'Template dokumen perbandingan terjemahan',
        url: 'https://docs.google.com/document/create',
        platform: 'google-docs',
        icon: 'file-text',
      },
    ],
  },

  'voice-over-voice-talent': {
    categorySlug: 'voice-over-voice-talent',
    title: 'Voice Over / Voice Talent Starter Kit',
    description: 'Script naskah dan panduan recording',
    howToUse: [
      'Pelajari script dan brand guidelines sebelum merekam',
      'Siapkan ruangan yang kedap suara',
      'Rekam dengan artikulasi yang jelas dan emotion yang sesuai',
      'Edit audio untuk menghilangkan noise',
      'Export sesuai spesifikasi yang diminta',
    ],
    starterKit: [
      {
        name: 'script_iklan_skincare_30detik.txt',
        description: 'Script iklan produk skincare 30 detik',
        type: 'txt',
        size: '2 KB',
        content: `SCRIPT VOICE OVER - IKLAN PRODUK SKINCARE 30 DETIK
==================================================
Brand: GlowUp Skincare
Produk: GlowUp Radiance Serum
Durasi: 30 detik
Tone: Profesional, Warm, Trustworthy

---

[00:00 - 00:03] OPENING
(Musik lembut, nada ceria)
NARASI: "Hari ini, kulitmu layak mendapatkan yang terbaik."

[00:03 - 00:10] PROBLEM
(Musik berubah sedikit serius)
NARASI: "Paparan polusi dan sinar UV setiap hari membuat kulit kusam, kering, dan kehilangan kilau alamimu."

[00:10 - 00:18] SOLUTION
(Musik menjadi optimis)
NARASI: "GlowUp Radiance Serum, dengan kandungan Vitamin C dan Hyaluronic Acid, memberikan hidrasi mendalam dan mencerahkan kulit dalam 7 hari."

[00:18 - 00:25] BENEFIT
(Musik mencapai climax)
NARASI: "Kulit cerah, lembut, dan bercahaya. Rasakan perbedaannya sejak pemakaian pertama."

[00:25 - 00:30] CTA
(Musik penutup)
NARASI: "GlowUp Radiance Serum. Bersinar dari dalam, cantik dari luar. Tersedia di marketplace favoritmu."

---

TECHNICAL NOTES:
- Kecepatan bicara: Normal (tidak terlalu cepat)
- Artikulasi: Jelas, terutama pada nama produk
- Emotion: Warm dan trustworthy, tidak agresif
- Emphasis: "GlowUp Radiance Serum", "Vitamin C", "Hyaluronic Acid", "7 hari"
- Background music: Soft, uplifting
- Sound effects: Tidak diperlukan`,
      },
      {
        name: 'script_narasi_tutorial_elearning.txt',
        description: 'Script narasi video tutorial e-learning',
        type: 'txt',
        size: '3 KB',
        content: `SCRIPT NARASI - VIDEO TUTORIAL E-LEARNING
==========================================
Software: Microsoft Excel - Pivot Table
Video: 1 dari 5 series
Target Durasi: 2 menit
Tone: Edukatif, Jelas, Sabar

---

[00:00 - 00:10] INTRODUCTION
(Musik intro ringan)
NARASI: "Selamat datang di tutorial Microsoft Excel. Pada video kali ini, kita akan mempelajari cara membuat Pivot Table. Pivot Table adalah salah satu fitur paling powerful di Excel untuk menganalisis data."

[00:10 - 00:30] CONCEPT EXPLANATION
NARASI: "Pivot Table memungkinkan kita untuk merangkum, analisis, explore, dan presentasikan data. Bayangkan kamu punya ribuan baris data penjualan, dan ingin melihat total penjualan per wilayah. Dengan Pivot Table, kamu bisa melakukannya hanya dalam beberapa klik."

[00:30 - 01:00] STEP-BY-STEP DEMO
(Screen recording: Membuka Excel)
NARASI: "Pertama, pastikan data kamu berada dalam format tabel yang benar. Setiap kolom harus memiliki header. Sekarang, pilih seluruh data kamu. Buka tab Insert, klik Pivot Table. Pilih New Worksheet, lalu OK."

(Screen recording: Drag fields)
NARASI: "Sekarang kamu akan melihat Pivot Table Field List. Drag 'Wilayah' ke area Rows, dan 'Total Penjualan' ke area Values. Excel akan otomatis menghitung total penjualan per wilayah."

[01:00 - 01:30] PRACTICAL APPLICATION
NARASI: "Kamu juga bisa menambahkan filter. Drag 'Bulan' ke area Filters. Sekarang kamu bisa melihat data penjualan per bulan. Cobalah eksplorasi dengan drag field yang berbeda ke areas yang berbeda."

[01:30 - 01:50] TIPS & TRICKS
NARASI: "Tips: Kamu bisa mengklik kanan pada Pivot Table untuk memformat angka, mengurutkan data, atau membuat chart. Pivot Table juga bisa di-refresh saat data berubah."

[01:50 - 02:00] CONCLUSION
(Musik penutup)
NARASI: "Itu dia cara membuat Pivot Table di Excel. Practice makes perfect, jadi jangan ragu untuk mencoba dengan data kamu sendiri. Sampai jumpa di video tutorial berikutnya."

---

TECHNICAL NOTES:
- Kecepatan bicara: Sedikit lebih lambat dari normal (tutorial)
- Artikulasi: Sangat jelas, terutama istilah teknis
- Emotion: Sabar dan membantu
- Emphasis: "Pivot Table", "Rows", "Values", "Filters"
- Screen recording: Harus sinkron dengan narasi
- Background music: Very soft, tidak mengganggu`,
      },
      {
        name: 'checklist_recording.csv',
        description: 'Checklist sebelum dan sesudah recording',
        type: 'csv',
        size: '1 KB',
        content: `checklist_item,category,status,notes
Cek script dan teleprompter,Pre-recording,,Pastikan sudah hapal
Siapkan ruangan kedap suara,Pre-recording,,Matikan AC dan kipas
Cek level mikrofon,Pre-recording,,Test dulu 10 detik
Siapkan air minum,Pre-recording,,Jaga tenggorokan tetap basah
Matikan notifikasi HP,Pre-recording,,Hindari gangguan
Rekam take pertama,Recording,,Jangan khawatir salah
Rekam take alternatif,Recording,,Untuk pilihan editing
Cek audio quality,Post-recording,,Dengarkan dengan headphone
Edit noise dan gap,Post-recording,,Gunakan Audacity
Export sesuai spesifikasi,Post-recording,,MP3 atau WAV
Naming file yang benar,Post-recording,,Format: [brand]_[script]_[date]
Submit ke deadline,Submission,,Kirim H-1 deadline`,
      },
    ],
    templates: [
      {
        name: 'Canva - Script Template',
        description: 'Template naskah voice over profesional',
        url: 'https://www.canva.com/templates/?query=script',
        platform: 'canva',
        icon: 'file-text',
      },
      {
        name: 'Google Sheets - Recording Checklist',
        description: 'Checklist persiapan recording',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'check-square',
      },
    ],
  },

  'email-management': {
    categorySlug: 'email-management',
    title: 'Email Management Starter Kit',
    description: 'Sample email dan template balasan',
    howToUse: [
      'Baca semua email masuk dan identifikasi prioritas',
      'Gunakan sistem kategorisasi: Urgent, Important, Information, Spam',
      'Gunakan template balasan untuk email yang serupa',
      'Dokumentasikan email penting ke sistem pelacakan',
      'Atur folder dan label untuk manajemen jangka panjang',
    ],
    starterKit: [
      {
        name: 'sample_emails_inbox.csv',
        description: '50 email sample untuk dipilah dan didraft balasan',
        type: 'csv',
        size: '12 KB',
        content: `id,pengirim,subjek,prioritas,tanggal,status
1,ceo@company.com,URGENT: Laporan Keuangan Q2,urgent,2024-07-15,Belum Dibaca
2,marketing@partner.co.id,Kolaborasi Campaign Agustus,important,2024-07-15,Belum Dibaca
3,newsletter@techblog.com,Tech News Weekly #123,information,2024-07-15,Belum Dibaca
4,spam@randomoffers.biz,Claim Your Prize Now!,spam,2024-07-15,Belum Dibaca
5,hrd@company.com,Reminder: Submit Laporan Bulanan,important,2024-07-14,Belum Dibaca
6,client@bigcorp.co.id,Feedback untuk Draft Proposal,urgent,2024-07-14,Belum Dibaca
7,team@company.com,Meeting Notes 14 Juli,information,2024-07-14,Dibaca
8,noreply@github.com,New Pull Request #456,information,2024-07-14,Dibaca
9,vendor@supplies.co.id,Invoice #INV-2024-078,important,2024-07-13,Belum Dibaca
10,customer@client.com,Komplain Produk Rusak,urgent,2024-07-13,Belum Dibaca
11,finance@bank.co.id,Konfirmasi Transfer Pembayaran,important,2024-07-13,Dibaca
12,conference@events.com,Invitation: Tech Summit 2024,information,2024-07-13,Belum Dibaca
13,admin@company.com,Policy Update: WFH Guidelines,information,2024-07-12,Dibaca
14,support@saas.com,Your Ticket #789 Has Been Resolved,information,2024-07-12,Dibaca
15,colleague@company.com,Help: Excel Formula Issue,important,2024-07-12,Belum Dibaca
16,spam@deals4u.biz,Flash Sale 70% Off!,spam,2024-07-12,Dibaca
17,manager@company.com,Weekly Progress Report,important,2024-07-11,Dibaca
18,recruiter@hrtech.com,Job Opportunity: Senior PM,information,2024-07-11,Dibaca
19,client@startup.io,Approval Needed: Project Phase 2,urgent,2024-07-11,Belum Dibaca
20,newsletter@designweek.com,Design Trends 2024,information,2024-07-11,Belum Dibaca
21,ops@company.com,Maintenance Schedule July 20,information,2024-07-10,Dibaca
22,vendor@techsupply.com,Quotation #QT-2024-156,important,2024-07-10,Belum Dibaca
23,accounting@company.com,Reminder: Invoice Due Date,important,2024-07-10,Dibaca
24,team-lead@partner.co.id,Partnership Proposal Draft,important,2024-07-09,Belum Dibaca
25,spam@winprizes.net,Congratulations You Won!,spam,2024-07-09,Dibaca
26,ceo@company.com,Quick Question About Budget,urgent,2024-07-09,Belum Dibaca
27,hrd@company.com,Training Schedule Q3,information,2024-07-08,Dibaca
28,client@enterprise.com,Contract Renewal Discussion,urgent,2024-07-08,Belum Dibaca
29,marketing@company.com,Campaign Performance July,important,2024-07-08,Dibaca
30,newsletter@aiweekly.co,AI Weekly: Latest Developments,information,2024-07-08,Dibaca`,
      },
      {
        name: 'template_balasan_email.txt',
        description: 'Koleksi template balasan email untuk berbagai situasi',
        type: 'txt',
        size: '4 KB',
        content: `TEMPLATE BALASAN EMAIL
======================

--- BALASAN UNTUK KOMPLAIN PRODUK ---
Subject: Re: Komplain Produk Rusak

Yth. {{NAMA_PELANGGAN}},

Terima kasih telah menghubungi kami mengenai kendala yang Anda alami.

Kami sangat menyesal mendengar produk yang Anda terima dalam kondisi tidak prima. Kami memahami frustrasi yang Anda rasakan dan ingin menyelesaikan masalah ini segera.

Berdasarkan informasi yang Anda sampaikan, kami akan:
1. Mengirimkan pengganti produk dalam 2x24 jam
2. Memberikan voucher diskon 15% untuk pembelian selanjutnya

Mohon konfirmasi alamat pengiriman terkini Anda.

Demikian respons dari kami. Jika ada pertanyaan lain, jangan ragu untuk menghubungi kami.

Hormat tim Customer Support

---

BALASAN UNTUK PENAWARAN KOLABORASI ---
Subject: Re: Kolaborasi Campaign

Yth. {{NAMA_PENGIRIM}},

Terima kasih atas penawaran kolaborasi yang menarik.

Kami telah meninjau proposal yang Anda kirimkan dan kami sangat tertarik untuk melanjutkan diskusi. Berikut beberapa poin yang ingin kami bahas lebih lanjut:

1. Timeline pelaksanaan
2. Budget allocation
3. KPI dan metrics kesuksesan

Apakah Anda available untuk video call pada hari {{HARI}} jam {{JAM}} WIB?

Kami tunggu konfirmasinya.

Salam hangat,
{{NAMA_PENGIRIM_BALASAN}}

---

BALASAN UNTUK KONFIRMASI MEETING ---
Subject: Re: Meeting Confirmation

Yth. {{NAMA_PENGIRIM}},

Konfirmasi diterima. Kami akan hadir pada:

Hari: {{HARI}}
Tanggal: {{TANGGAL}}
Waktu: {{JAM}} WIB
Lokasi/Link: {{LOKASI}}

Mohon persiapkan dokumen yang diperlukan sebelum meeting.

Terima kasih atas koordinasinya.

Hormat kami,
{{NAMA_PENGIRIM_BALASAN}}

---

BALASAN UNTUK SUBMISSION ---
Subject: Re: Dokumen Telah Diterima

Yth. {{NAMA_PENGIRIM}},

Dokumen yang Anda kirimkan telah kami terima dan teregistrasi dengan nomor: {{NOMOR_REGISTRASI}}.

Kami akan melakukan review dan menginformasikan hasilnya dalam {{DURASI}} hari kerja.

Jika ada dokumen tambahan yang diperlukan, kami akan menghubungi Anda.

Terima kasih atas perhatiannya.

Salam,
{{NAMA_PENGIRIM_BALASAN}}`,
      },
      {
        name: 'sistem_folder_email.txt',
        description: 'Panduan sistem folder dan label untuk email management',
        type: 'txt',
        size: '1 KB',
        content: `SISTEM FOLDER DAN LABEL EMAIL
==============================

FOLDER STRUCTURE:
-----------------
📁 Inbox
  📁 01-Urgent (Email yang perlu ditangani hari ini)
  📁 02-Important (Email penting tapi tidak urgent)
  📁 03-Waiting (Menunggu balasan dari orang lain)
  📁 04-Read Later (Newsletter, info, untuk dibaca nanti)
  📁 05-Archived (Selesai ditangani, untuk referensi)
  📁 06-Spam (Junk, promosi tidak relevan)

LABEL SYSTEM:
-------------
🔴 Red: Urgent - Perlu tindakan segera
🟡 Yellow: Important - Perlu ditangani minggu ini
🟢 Green: Information - Untuk dibaca
🔵 Blue: Waiting - Menunggu balasan
⚪ Gray: Archived - Selesai

WORKFLOW:
---------
1. Buka inbox setiap jam 09:00 dan 14:00
2. Kategorikan setiap email ke folder yang sesuai
3. Tangani email Urgent terlebih dahulu
4. Draft balasan untuk email Important
5. Move email ke folder Waiting jika sudah dibalas
6. Archive email yang sudah selesai ditangani
7. Hapus email Spam setiap hari Jumat

SHORTCUT EMAIL:
---------------
- Ctrl+R: Reply
- Ctrl+Shift+R: Reply All
- Ctrl+F: Forward
- E: Archive
- S: Star/Unstar
- L: Label`,
      },
    ],
    templates: [
      {
        name: 'Google Sheets - Email Tracker',
        description: 'Template tracking email masuk dan balasan',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'mail',
      },
      {
        name: 'Canva - Email Newsletter Template',
        description: 'Template email newsletter profesional',
        url: 'https://www.canva.com/templates/?query=email+newsletter',
        platform: 'canva',
        icon: 'send',
      },
    ],
  },

  'schedule-management': {
    categorySlug: 'schedule-management',
    title: 'Schedule Management Starter Kit',
    description: 'Template jadwal dan panduan koordinasi zona waktu',
    howToUse: [
      'Identifikasi semua zona waktu yang terlibat',
      'Hitung waktu overlap untuk meeting',
      'Buat template jadwal yang bisa digunakan berulang',
      'Blok waktu untuk deep work dan focus time',
      'Kirim jadwal kepada semua peserta 1 hari sebelumnya',
    ],
    starterKit: [
      {
        name: 'tim_remote_3_zonawaktu.csv',
        description: 'Data tim tersebar di 3 zona waktu Indonesia',
        type: 'csv',
        size: '2 KB',
        content: `nama,role,zona_waktu,offset_from_utc,jam_kerja_lokal,overlap_wib
Andi Setiawan,Project Manager,WIB,+7,09:00-17:00,09:00-17:00
Rina Wijaya,Designer,WIB,+7,09:00-17:00,09:00-17:00
Budi Santoso,Developer,WITA,+8,09:00-17:00,08:00-16:00
Maya Putri,QA Engineer,WITA,+8,09:00-17:00,08:00-16:00
Dian Kusuma,Backend Dev,WIT,+9,09:00-17:00,07:00-15:00
Eko Prasetyo,DevOps,WIT,+9,09:00-17:00,07:00-15:00
Siti Aminah,Data Analyst,WIB,+7,08:00-16:00,08:00-16:00
Ahmad Hidayat,Mobile Dev,WITA,+8,10:00-18:00,09:00-17:00`,
      },
      {
        name: 'template_jadwal_mingguan.csv',
        description: 'Template jadwal mingguan dengan time block',
        type: 'csv',
        size: '3 KB',
        content: `hari,waktu,kegiatan,partisipan,zona_waktu,lokasi/link,catatan
Senin,09:00-09:30,Standup Meeting,Semua Tim,WIB,WZoom Meeting,Daily sync
Senin,09:30-11:00,Deep Work - Development,Developer & DevOps,WITA,-,Focus time - no meeting
Senin,09:30-11:00,Design Review,Designer & PM,WIB,WZoom Meeting,Review mockup
Senin,11:00-12:00,Client Update Call,PM & QA,WIB,Google Meet,Laporan progress
Senin,13:00-14:30,Code Review,Developer & QA,WITA,WZoom Meeting,PR review
Senin,14:30-16:00,Deep Work - Design,Designer,WIB,-,Focus time
Senin,16:00-17:00,Sprint Planning,PM & Tech Lead,WIB,WZoom Meeting,Planning sprint
Selasa,09:00-09:30,Standup Meeting,Semua Tim,WIB,WZoom Meeting,Daily sync
Selasa,09:30-11:30,Deep Work - Development,Developer & DevOps,WITA,-,Focus time
Selasa,09:30-11:00,Requirements Review,PM & Client,WIB,Google Meet,Clarifikasi requirement
Selasa,11:30-12:30,Testing Coordination,QA & Developer,WITA,WZoom Meeting,Test planning
Selasa,13:00-15:00,Deep Work - Backend,Backend Dev,WIT,-,Focus time
Selasa,15:00-16:30,Documentation,PM & Tech Lead,WIB,WZoom Meeting,Update docs
Selasa,16:30-17:00,Wrap Up & Async Update,Semua Tim,-,Slack,Written update
Rabu,09:00-09:30,Standup Meeting,Semua Tim,WIB,WZoom Meeting,Daily sync
Rabu,09:30-11:00,Deep Work - Mobile,Mobile Dev,WITA,-,Focus time
Rabu,09:30-11:00,Design Sprint,Designer & PM,WIB,WZoom Meeting,Design thinking
Rabu,11:00-12:00,Stakeholder Update,PM,WIB,Google Meet,Progress report
Rabu,13:00-14:30,Database Review,DBA & Backend Dev,WITA,WZoom Meeting,Schema review
Rabu,14:30-16:00,Deep Work - Testing,QA Engineer,WITA,-,Focus time
Rabu,16:00-17:00,Retrospective Ringkas,Semua Tim,WIB,WZoom Meeting,Quick retro
Kamis,09:00-09:30,Standup Meeting,Semua Tim,WIB,WZoom Meeting,Daily sync
Kamis,09:30-12:00,Deep Work - Full Stack,Semua Developer,WITA,-,Focus time
Kamis,13:00-14:00,Architecture Review,Tech Lead & Backend,WITA,WZoom Meeting,Technical decision
Kamis,14:00-15:30,Feature Demo,PM & QA & Developer,WIB,WZoom Meeting,Demo fitur baru
Kamis,15:30-17:00,Deep Work - DevOps,DevOps,WIT,-,Focus time
Jumat,09:00-09:30,Standup Meeting,Semua Tim,WIB,WZoom Meeting,Daily sync
Jumat,09:30-11:00,Code Freeze & Final Testing,QA & Developer,WITA,WZoom Meeting,Pre-release
Jumat,11:00-12:00,Sprint Review,Semua Tim,WIB,WZoom Meeting,Sprint demo
Jumat,13:00-14:30,Sprint Retrospective,Semua Tim,WIB,WZoom Meeting,Feedback session
Jumat,14:30-16:00,Deep Work - Documentation,PM & Tech Lead,WIB,-,Focus time
Jumat,16:00-17:00,Weekly Wrap Up,Semua Tim,-,Slack,Celebration & next week preview`,
      },
    ],
    templates: [
      {
        name: 'Google Sheets - Weekly Planner',
        description: 'Template planner mingguan dengan time blocking',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'calendar',
      },
      {
        name: 'Google Calendar - Schedule Template',
        description: 'Template kalender untuk jadwal rutin',
        url: 'https://calendar.google.com/',
        platform: 'google-sheets',
        icon: 'calendar-days',
      },
    ],
  },

  'travel-planner': {
    categorySlug: 'travel-planner',
    title: 'Travel Planner Starter Kit',
    description: 'Template itinerary dan budget perjalanan',
    howToUse: [
      'Riset destinasi dan aktivitas yang tersedia',
      'Pilih akomodasi yang strategis dan sesuai budget',
      'Rencanakan transport dari dan ke bandara/stasiun',
      'Buat daily itinerary yang balanced',
      'Siapkan buffer time untuk perubahan rencana',
    ],
    starterKit: [
      {
        name: 'template_itinerary_bali_3d2n.csv',
        description: 'Template itinerary 3 hari 2 malam Bali',
        type: 'csv',
        size: '3 KB',
        content: `hari,tanggal,waktu,aktivitas,lokasi,transport,estimasi_biaya,catatan
Hari 1,2024-08-16,06:00,Bandara Ngurah Rai - Arrival,Bandara,-,0,Flight JT-123
Hari 1,2024-08-16,07:00,Transfer ke Hotel,Hotel,-,150000,Grab/GoCar
Hari 1,2024-08-16,08:00,Check-in & Istirahat,Hotel AYODYA BALI,-,0,Early check-in
Hari 1,2024-08-16,10:00,Sarapan di Hotel,Hotel,-,0,Include
Hari 1,2024-08-16,11:00,Pantai Kuta,Pantai Kuta,-,0,Walking distance
Hari 1,2024-08-16,13:00,Makan Siang,Warung Made,-,75000,Local food
Hari 1,2024-08-16,14:00,Tanah Lot,Tanah Lot,Grab,120000,45 menit drive
Hari 1,2024-08-16,17:00,Sunset di Tanah Lot,Tanah Lot,-,0,-
Hari 1,2024-08-16,19:00,Makan Malam,Pantai Jimbaran,Grab,150000 Seafood
Hari 1,2024-08-16,21:00,Kembali ke Hotel,Hotel,Grab,80000,-
Hari 2,2024-08-17,06:00,Sunrise Trek,Sunset Beach,-,0 Optional
Hari 2,2024-08-17,08:00,Sarapan di Hotel,Hotel,-,0,Include
Hari 2,2024-08-17,09:00,Tegallalang Rice Terrace,Tegallalang,Grab/Scooter,200000,-
Hari 2,2024-08-17,12:00,Makan Siang,Local Restaurant,-,60000,-
Hari 2,2024-08-17,13:00,Tirta Empul Temple,Tirta Empul,Grab,150000,Purification
Hari 2,2024-08-17,15:00,Coffee Plantation Tour,Kintamani,-,50000,Free coffee tasting
Hari 2,2024-08-17,17:00,Kembali ke Ubud,Ubud,Grab,100000,-
Hari 2,2024-08-17,18:00,Ubud Art Market,Ubud Market,-,0,Souvenir shopping
Hari 2,2024-08-17,19:30,Makan Malam,Bebek Bengil,-,80000,Famous Bebek
Hari 2,2024-08-17,21:00,Kembali ke Hotel,Hotel,Grab,50000,-
Hari 3,2024-08-18,07:00,Sarapan & Check-out,Hotel,-,0,-
Hari 3,2024-08-18,09:00,Waterboom Bali,Waterboom,Grab,150000,350K tiket
Hari 3,2024-08-18,12:00,Makan Siang,Waterboom,-,80000,-
Hari 3,2024-08-18,14:00,Transfer ke Bandara,Bandara,Grab,150000,-
Hari 3,2024-08-18,16:00,Check-in Bandara,-,-,0,H-2 jam
Hari 3,2024-08-18,18:00,Flight Pulang,-,-,0,JT-456`,
      },
      {
        name: 'budget_sheet_bali_3d2n.csv',
        description: 'Template budget perjalanan Bali 3D2N',
        type: 'csv',
        size: '2 KB',
        content: `kategori,deskripsi,jumlah_satuan,harga_satuan,total,tanggal_bayar,status
Tiket Pesawat,Flight CGK-DPS (PP),4,850000,3400000,2024-07-15,Lunas
Akomodasi,Hotel AYODYA BALI 2 malam,2,450000,900000,2024-08-10,Lunas
Transport Bandara,Grab ke/dari bandara,2,150000,300000,2024-08-16,Bayar di tempat
Transport Lokal,Grab selama di Bali,6,120000,720000,2024-08-18,Bayar di tempat
Makan Sarapan,Hotel (include),0,0,0,-,-
Makan Siang,Restaurant lokal,3,70000,210000,2024-08-18,Bayar di tempat
Makan Malam,Restaurant seafood & lokal,2,120000,240000,2024-08-18,Bayar di tempat
Tiket Masuk,Tanah Lot + Tirta Empul,4,50000,200000,2024-08-17,Bayar di tempat
Tiket Waterboom,Waterboom Bali,4,350000,1400000,2024-08-17,Online
Souvenir,Budget souvenir,1,300000,300000,2024-08-18,Bayar di tempat
Tips,Hotel & restaurant tips,1,200000,200000,2024-08-18,Bayar di tempat
Emergency,Dana darurat,1,500000,500000,,-,Cadangan
,,,TOTAL,7470000,,
,,,PER ORANG (4 orang),1867500,,`,
      },
      {
        name: 'checklist_persiapan_travel.csv',
        description: 'Checklist persiapan perjalanan',
        type: 'csv',
        size: '1 KB',
        content: `kategori,item,quantity,status,catatan
Dokumen,Passport/KTP,1,Belum,Cek masa berlaku
Dokumen,Tiket Pesawat (print),1,Belum,Download e-ticket
Dokumen,Bukti Hotel (print),1,Belum,Email confirmation
Dokumen,Asuransi Perjalanan,1,Belum,Optional tapi recommended
Pakaian,Baju,4,Belum,Sesuai cuaca
Pakaian,Celana/rok,3,Belum,-
Pakaian,Jaket,1,Belum,Jika cuaca dingin
Pakaian,Sandal/sepatu,2,Belum,Walking shoes
Elektronik,HP + Charger,1,Belum,-
Elektronik,Power Bank,1,Belum,Minimal 10000mAh
Elektronik,Kabel data,1,Belum,-
Kesehatan,Obat pribadi,1,Belum,-
Kesehatan,Sunscreen,1,Belum,SPF 30+
Kesehatan,Obat anti nyamuk,1,Belum,-
Lainnya,Uang tunai,1,Belum,ATM juga
Lainnya,Kartu debit/kredit,2,Belum,Bank berbeda`,
      },
    ],
    templates: [
      {
        name: 'Google Sheets - Travel Budget Tracker',
        description: 'Template budget perjalanan lengkap',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'dollar-sign',
      },
      {
        name: 'Canva - Travel Itinerary Template',
        description: 'Template itinerary visual yang menarik',
        url: 'https://www.canva.com/templates/?query=travel+itinerary',
        platform: 'canva',
        icon: 'map-pin',
      },
    ],
  },

  'social-media-management': {
    categorySlug: 'social-media-management',
    title: 'Social Media Management Starter Kit',
    description: 'Brand brief, content calendar, dan aset template',
    howToUse: [
      'Baca brand brief untuk memahami brand voice dan target audiens',
      'Gunakan content calendar template untuk merencanakan postingan',
      'Download Canva template untuk desain visual',
      'Konsisten dengan warna, font, dan tone of voice',
      'Track engagement dan adjust strategi berdasarkan data',
    ],
    starterKit: [
      {
        name: 'brand_brief_fashion_muslim.csv',
        description: 'Brand brief dan style guide untuk brand fashion Muslim',
        type: 'csv',
        size: '3 KB',
        content: `field,value,deskripsi
brand_name,Aqilla Fashion,Nama brand
brand_tagline,"Cantik Berhijab, Percaya Diri",Tagline brand
brand_mission,"Memberikan fashion hijab modern yang stylish dan affordable untuk perempuan Muslim Indonesia",Misi brand
target_gender,Perempuan,Target utama
target_age,18-35 tahun,Range usia target
target_location,Indonesia (urban),Lokasi target
target_income,"Rp 3-10 juta/bulan",Penghasilan target
target_psychographic,"Fashion-conscious, social media active, religious, modern",Karakteristik psikografi
primary_color,"#8B5CF6 (Ungu)",Warna utama brand
secondary_color,"#F5F3FF (Lavender Light)",Warna sekunder
accent_color,"#D4AF37 (Gold)",Warna aksen
font_primary,Playfair Display,Font untuk heading
font_secondary,Inter,Font untuk body text
tone_of_voice,"Warm, friendly, empowering, modest",Tone of voice
brand_personality,"Fashionable, Confident, Religious, Relatable",Karakter brand
content_pillars,1. Fashion Tips & OOTD,Content pillar 1
content_pillars,2. Religious Inspiration,Content pillar 2
content_pillars,3. Behind The Scenes,Content pillar 3
content_pillars,4. Customer Stories,Content pillar 4
visual_style,"Clean, elegant, pastel tones, lifestyle photography",Gaya visual
photography_style,"Natural lighting, lifestyle, diverse models",Gaya fotografi
hashtags_primary,"#AqillaFashion #HijabFashion #ModestWear",Hashtag utama
hashtags_secondary,"#OOTDHijab #HijabStyle #MuslimFashion",Hashtag sekunder
competitor_1,Hijab Story,Competitor utama
competitor_2,Grosir Hijab Modern,Competitor
competitor_3,Hijab Queen,Competitor
platform_priority,"Instagram, TikTok, Shopee",Platform utama
posting_frequency,"Instagram: 1x/day, TikTok: 3x/week",Frekuensi posting
best_time_to_post,"12:00-13:00, 19:00-21:00 WIB",Waktu terbaik posting`,
      },
      {
        name: 'content_calendar_mingguan.csv',
        description: 'Template content calendar 1 minggu',
        type: 'csv',
        size: '3 KB',
        content: `tanggal,platform,waktu,content_pillar,topic,visual_concept,caption,hashtag,status
2024-08-12,Instagram Feed,12:00,Fashion Tips,OOTD Monday - Casual Hijab Look,"Flat lay outfit dengan hijab pastel",Monday vibes untuk mulai minggu yang produktif! 💜 Ini outfit casual hijab yang comfy tapi tetap stylish. Bahan katun premium, cocok untuk working from cafe atau hangout. #OOTDHijab #AqillaFashion #HijabStyle,Planned
2024-08-12,Instagram Story,19:00,Behind The Scenes,Proses Produksi Bulan Agustus,Video behind the scenes workshop",Guess what! 🎬 Behind the scenes produksi koleksi Agustus kita. Setiap hijab dibuat dengan penuh cinta dan perhatian. Stay tuned untuk launching-nya! #AqillaFashion #BehindTheScenes,Planned
2024-08-13,Instagram Feed,12:00,Religious Inspiration,Ayat tentang Kesabaran,"Quote design dengan tipografi elegan",Sabar itu indah. ✨ Seperti hijab yang kita kenakan, sabar juga memberikan ketenangan dari dalam. Yuk, jadi perempuan yang sabar dan kuat. #IslamicQuotes #HijabInspiration #AqillaFashion,Planned
2024-08-13,TikTok,18:00,Fashion Tips,Hijab Styling 3 Style dalam 1 Menit,Video tutorial hijab styling,"3 style hijab dalam 1 menit! 🧕 Which one is your favorite? Comment below! #HijabTutorial #HijabStyle #OOTDHijab #AqillaFashion,Planned
2024-08-14,Instagram Feed,12:00,Customer Stories,Review dari Customer Setia,"Screenshot testimonial dengan background brand",Thank you Kak @username untuk review-nya! 💜 Senang banget bisa jadi bagian dari daily look kamu. Yuk, share style kamu pakai Aqilla Fashion! #AqillaFashion #CustomerReview,Planned
2024-08-14,Instagram Story,20:00,Behind The Scenes,Meet Our Team,"Photo team dengan caption singkat",Meet the team behind Aqilla Fashion! 👋 Dari desainer hingga admin, semua bekerja dengan passion untuk hijab Indonesia. #AqillaFashion #OurTeam,Planned
2024-08-15,Instagram Feed,12:00,Fashion Tips,Color Palette matching dengan Hijab,"Infographic warna dan hijab",Bingung mix and match warna hijab? 💡 Ikuti color palette guide ini! Warna apa favorit kamu? #ColorPalette #HijabFashion #AqillaFashion,Planned
2024-08-15,TikTok,19:00,Customer Stories,Customer Unboxing Video,"Video unboxing dari customer",Unboxing paket Aqilla Fashion! 📦 Senang lihat Kak @username happy dengan produknya. #Unboxing #AqillaFashion #HijabFashion,Planned
2024-08-16,Instagram Feed,12:00,Religious Inspiration,Jumat Berkah,"Photo hijab dengan nuansa earthy",Jumat yang penuh berkah. 🤲 Semoga kita semua selalu diberkahi kesehatan dan kebahagiaan. Happy Friday! #JumatBerkah #AqillaFashion,Planned
2024-08-16,Instagram Story,18:00,Fashion Tips,This or That Poll,"Poll outfit A vs B",This or that? 🤔 Outfit A atau B? Vote di story kita! #OOTDHijab #AqillaFashion,Planned
2024-08-17,Instagram Feed,12:00,Fashion Tips,Weekend OOTD,"Photo outfit weekend casual",Weekend calls for a comfy yet stylish look! 🌿 Outfit ini perfect untuk jalan-jalan santai. #WeekendOOTD #AqillaFashion #HijabStyle,Planned
2024-08-17,TikTok,17:00,Behind The Scenes,Packing Order,"Video packing order aesthetic",Packing order dengan penuh cinta! 📦 Setiap paket dikirim dengan doa. #PackingOrder #AqillaFashion #SmallBusiness,Planned
2024-08-18,Instagram Feed,12:00,Customer Stories,Transformation Tuesday,"Before-after style makeover",Transformation Tuesday! ✨ Dari casual ke elegant, Aqilla Fashion bisa diandalkan untuk semua occasions. #TransformationTuesday #AqillaFashion,Planned
2024-08-18,Instagram Story,20:00,Religious Inspiration,Malam Senin,"Quote tentang ibadah",Malam Senin, malam yang penuh keberkahan. 🌙 Semoga ibadah kita diterima. #MalamSenin #AqillaFashion,Planned`,
      },
    ],
    templates: [
      {
        name: 'Google Sheets - Content Calendar',
        description: 'Template content calendar lengkap untuk social media',
        url: 'https://docs.google.com/spreadsheets/create',
        platform: 'google-sheets',
        icon: 'calendar',
      },
      {
        name: 'Canva - Instagram Feed Template',
        description: 'Template desain feed Instagram yang aesthetic',
        url: 'https://www.canva.com/templates/?query=social+media+feed',
        platform: 'canva',
        icon: 'image',
      },
      {
        name: 'Canva - Instagram Story Template',
        description: 'Template desain story Instagram',
        url: 'https://www.canva.com/templates/?query=instagram+story',
        platform: 'canva',
        icon: 'image',
      },
    ],
  },
}

export function getResourcesForCategory(categorySlug: string): CategoryResources | null {
  return PROJECT_RESOURCES[categorySlug] || null
}
