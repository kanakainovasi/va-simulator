import { useState } from "react";

export default function AIEvaluationWidget({ taskTitle }) {
  const [submission, setSubmission] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ submission, taskTitle }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", padding: "24px", borderRadius: "12px", marginTop: "20px", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}>
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "8px", color: "#1e293b" }}>
        ?? AI Task Evaluation & Validation
      </h3>
      <p style={{ fontSize: "14px", color: "#64748b", marginBottom: "16px" }}>
        Submit pekerjaan Anda untuk divalidasi langsung oleh sistem AI agar mendapatkan skor akurat (20% - 100%) sebelum sertifikat diterbitkan.
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          value={submission}
          onChange={(e) => setSubmission(e.target.value)}
          placeholder="Tuliskan hasil pengerjaan tugas atau lampirkan ringkasan operasional di sini..."
          style={{ width: "100%", padding: "12px", borderRadius: "8px", border: "1px solid #cbd5e1", marginBottom: "12px", fontFamily: "inherit" }}
          required
        />
        <button
          type="submit"
          disabled={loading}
          style={{ background: "#2563eb", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "6px", fontWeight: "600", cursor: "pointer" }}
        >
          {loading ? "Sedang Menganalisis AI..." : "Evaluasi Tugas Sekarang"}
        </button>
      </form>

      {result && (
        <div style={{ marginTop: "20px", padding: "16px", background: result.score === 100 ? "#f0fdf4" : "#fffbeb", border: `1px solid ${result.score === 100 ? "#bbf7d0" : "#fef08a"}`, borderRadius: "8px" }}>
          <h4 style={{ fontSize: "16px", fontWeight: "bold", color: result.score === 100 ? "#166534" : "#854d0e", marginBottom: "4px" }}>
            Skor Penilaian: {result.score}%
          </h4>
          <p style={{ fontSize: "14px", color: "#334155" }}>{result.feedback}</p>
        </div>
      )}
    </div>
  );
}
