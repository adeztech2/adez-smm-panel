export default function AddFundsPage() {
return (
<main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
<form style={{ width: "100%", maxWidth: 420, background: "#111827", padding: 24, borderRadius: 16, display: "grid", gap: 16 }}>
<h1>Add Funds</h1>
<input placeholder="M-Pesa phone number" style={{ padding: 12, borderRadius: 10, border: "1px solid #334155", background: "#0f172a", color: "white" }} />
<input placeholder="Amount (KES)" style={{ padding: 12, borderRadius: 10, border: "1px solid #334155", background: "#0f172a", color: "white" }} />
<button type="button" style={{ padding: 12, borderRadius: 10, border: "none", background: "#16a34a", color: "white", fontWeight: 700 }}>
Pay with M-Pesa
</button>
</form>
</main>
);
}
