export default function TrafficDashboard() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "1100px", margin: "0 auto", color: "#1e293b" }}>
      <div style={{ marginBottom: "30px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "8px" }}>?? Platform Analytics & Traffic Dashboard</h1>
        <p style={{ color: "#64748b", fontSize: "15px" }}>Pantau performa trafik kunjungan, algoritma penilaian AI, dan metrik pertumbuhan website secara real-time.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "40px" }}>
        <div style={{ padding: "24px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "14px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Total Pengunjung (Traffic)</h3>
          <p style={{ fontSize: "32px", fontWeight: "bold", marginTop: "10px", color: "#2563eb" }}>2,450</p>
          <span style={{ fontSize: "12px", color: "#16a34a" }}>? +18% dari bulan lalu</span>
        </div>
        <div style={{ padding: "24px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "14px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Tugas Dinilai AI</h3>
          <p style={{ fontSize: "32px", fontWeight: "bold", marginTop: "10px", color: "#0d9488" }}>890</p>
          <span style={{ fontSize: "12px", color: "#16a34a" }}>Akurasi Validasi 99.4%</span>
        </div>
        <div style={{ padding: "24px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "12px", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>
          <h3 style={{ fontSize: "14px", color: "#64748b", fontWeight: "600", textTransform: "uppercase" }}>Sertifikat Diterbitkan</h3>
          <p style={{ fontSize: "32px", fontWeight: "bold", marginTop: "10px", color: "#9333ea" }}>340</p>
          <span style={{ fontSize: "12px", color: "#64748b" }}>Posisi Kredibilitas Tinggi</span>
        </div>
      </div>

      <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "24px", borderRadius: "12px" }}>
        <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "16px" }}>?? Algoritma & Proyeksi Pertumbuhan</h3>
        <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>
          Sistem analitik ini memantau pola pengerjaan tugas pengguna. Dengan diterapkannya validasi AI (penilaian 20% - 100%), kualitas lulusan simulator Virtual Assistant menjadi jauh lebih terukur, sehingga meningkatkan nilai jual dan kepercayaan industri terhadap sertifikat yang diterbitkan.
        </p>
      </div>
    </div>
  );
}
