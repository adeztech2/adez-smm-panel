export default function Home() {
return (
<main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
<div style={{ textAlign: "center", maxWidth: 700 }}>
<h1 style={{ fontSize: 48, marginBottom: 16 }}>ADEZ TECH SMM PANEL</h1>
<p style={{ fontSize: 20, color: "#cbd5e1", marginBottom: 32 }}>
Fast • Secure • Reliable Social Media Marketing Services
</p>

    <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
      <a href="/login" style={{ background: "#2563eb", color: "white", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>
        Login
      </a>

      <a href="/register" style={{ border: "1px solid #64748b", color: "white", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>
        Register
      </a>
    </div>

    <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
      <div style={{ background: "#111827", padding: 20, borderRadius: 16 }}>
        <h3>10K+</h3>
        <p style={{ color: "#94a3b8" }}>Orders Completed</p>
      </div>
      <div style={{ background: "#111827", padding: 20, borderRadius: 16 }}>
        <h3>1K+</h3>
        <p style={{ color: "#94a3b8" }}>Happy Clients</p>
      </div>
      <div style={{ background: "#111827", padding: 20, borderRadius: 16 }}>
        <h3>24/7</h3>
        <p style={{ color: "#94a3b8" }}>Support Available</p>
      </div>
    </div>
  </div>
</main>

);
}
