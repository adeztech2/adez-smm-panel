const services = [
{ name: "Instagram Followers", price: "KES 120 / 1k" },
{ name: "TikTok Followers", price: "KES 150 / 1k" },
{ name: "YouTube Views", price: "KES 80 / 1k" },
];

export default function ServicesPage() {
return (
<main style={{ minHeight: "100vh", padding: 24 }}>
<h1 style={{ fontSize: 32, marginBottom: 24 }}>Services</h1>

  <div style={{ display: "grid", gap: 16 }}>
    {services.map((service) => (
      <div key={service.name} style={{ background: "#111827", borderRadius: 16, padding: 20, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h3 style={{ margin: 0 }}>{service.name}</h3>
          <p style={{ margin: "6px 0 0", color: "#94a3b8" }}>{service.price}</p>
        </div>

        <button style={{ background: "#2563eb", color: "white", border: "none", borderRadius: 10, padding: "10px 16px", fontWeight: 700 }}>
          Order
        </button>
      </div>
    ))}
  </div>
</main>

);
}
