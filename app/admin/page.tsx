export default function AdminPage() {
return (
<main style={{ minHeight: "100vh", padding: 24 }}>
<h1 style={{ fontSize: 32, marginBottom: 24 }}>Admin Dashboard</h1>

  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 16 }}>
    <div style={{ background: "#111827", padding: 20, borderRadius: 16 }}>
      <h3>Users</h3>
      <p style={{ fontSize: 28 }}>0</p>
    </div>

    <div style={{ background: "#111827", padding: 20, borderRadius: 16 }}>
      <h3>Orders</h3>
      <p style={{ fontSize: 28 }}>0</p>
    </div>

    <div style={{ background: "#111827", padding: 20, borderRadius: 16 }}>
      <h3>Revenue</h3>
      <p style={{ fontSize: 28 }}>KES 0.00</p>
    </div>
  </div>

  <div style={{ marginTop: 24, background: "#111827", borderRadius: 16, padding: 20 }}>
    <h2>Admin Actions</h2>
    <ul style={{ lineHeight: 2 }}>
      <li>Manage Services</li>
      <li>Manage Users</li>
      <li>Manage Payments</li>
      <li>View Support Tickets</li>
    </ul>
  </div>
</main>

);
}
