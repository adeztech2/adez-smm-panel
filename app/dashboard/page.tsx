export default function DashboardPage() {
return (
<main style={{ minHeight: "100vh", padding: 24 }}>
<h1 style={{ fontSize: 32, marginBottom: 24 }}>User Dashboard</h1>

  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
    <div style={{ background: "#111827", padding: 20, borderRadius: 16 }}>
      <h3>Wallet Balance</h3>
      <p style={{ fontSize: 28 }}>KES 0.00</p>
    </div>

    <div style={{ background: "#111827", padding: 20, borderRadius: 16 }}>
      <h3>Total Orders</h3>
      <p style={{ fontSize: 28 }}>0</p>
    </div>

    <div style={{ background: "#111827", padding: 20, borderRadius: 16 }}>
      <h3>Pending Orders</h3>
      <p style={{ fontSize: 28 }}>0</p>
    </div>
  </div>

  <div style={{ marginTop: 24, background: "#111827", borderRadius: 16, padding: 20 }}>
    <h2>Quick Actions</h2>
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 12 }}>
      <a href="/services" style={{ background: "#2563eb", color: "white", padding: "10px 16px", borderRadius: 10, textDecoration: "none" }}>
        New Order
      </a>
      <a href="/add-funds" style={{ background: "#16a34a", color: "white", padding: "10px 16px", borderRadius: 10, textDecoration: "none" }}>
        Add Funds
      </a>
      <a href="/support" style={{ background: "#475569", color: "white", padding: "10px 16px", borderRadius: 10, textDecoration: "none" }}>
        Support
      </a>
    </div>
  </div>
</main>

);
}
