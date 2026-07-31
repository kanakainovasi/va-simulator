import TrafficDashboard from "@/components/TrafficDashboard"; // Sesuaikan dengan komponen utama Anda jika ada

export default function Home() {
  return (
    <main>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Selamat Datang di VA Simulator</h1>
        <p>Aplikasi penilaian dan simulasi Virtual Assistant.</p>
        <a href="/traffic" style={{ padding: "10px 20px", background: "#2563eb", color: "#fff", borderRadius: "5px", textDecoration: "none" }}>
          Buka Dashboard Traffic
        </a>
      </div>
    </main>
  );
}
