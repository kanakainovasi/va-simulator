export default function Home() {
  return (
    <main style={{ padding: "50px", fontFamily: "Segoe UI, sans-serif", textAlign: "center" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", background: "#f8fafc", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}>
        <h1 style={{ color: "#1e293b", marginBottom: "16px" }}>VA Simulator Platform</h1>
        <p style={{ color: "#64748b", marginBottom: "24px" }}>Aplikasi simulasi dan analitik trafik berjalan dengan normal.</p>
        <a href="/traffic" style={{ display: "inline-block", background: "#2563eb", color: "#ffffff", padding: "12px 24px", borderRadius: "6px", textDecoration: "none", fontWeight: "600" }}>
          Buka Dashboard Traffic
        </a>
      </div>
    </main>
  );
}
