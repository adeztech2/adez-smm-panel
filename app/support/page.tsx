export default function SupportPage() {
return (
<main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
<form style={{ width: "100%", maxWidth: 520, background: "#111827", padding: 24, borderRadius: 16, display: "grid", gap: 16 }}>
<h1>Support Ticket</h1>
<input placeholder="Subject" style={{ padding: 12, borderRadius: 10, border: "1px solid #334155", background: "#0f172a", color: "white" }} />
<textarea placeholder="Describe your issue" rows={6} style={{ padding: 12, borderRadius: 10, border: "1px solid #334155", background: "#0f172a", color: "white" }} />
<button type="button" style={{ padding: 12, borderRadius: 10, border: "none", background: "#2563eb", color: "white", fontWeight: 700 }}>
Submit Ticket
</button>
</form>
</main>
);
}
