export default function RegisterPage() {
return (
<main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
<form style={{ width: "100%", maxWidth: 380, background: "#111827", padding: 24, borderRadius: 16, display: "grid", gap: 16 }}>
<h1>Create Account</h1>
<input placeholder="Full name" style={{ padding: 12, borderRadius: 10, border: "1px solid #334155", background: "#0f172a", color: "white" }} />
<input placeholder="Email" style={{ padding: 12, borderRadius: 10, border: "1px solid #334155", background: "#0f172a", color: "white" }} />
<input type="password" placeholder="Password" style={{ padding: 12, borderRadius: 10, border: "1px solid #334155", background: "#0f172a", color: "white" }} />
<button type="button" style={{ padding: 12, borderRadius: 10, border: "none", background: "#16a34a", color: "white", fontWeight: 700 }}>
Create Account
</button>
</form>
</main>
);
}
