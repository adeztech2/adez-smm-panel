export const metadata = {
title: "ADEZ TECH SMM PANEL",
description: "Fast • Secure • Reliable Social Media Marketing",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#0b1220", color: "white" }}>
{children}
</body>
</html>
);
}
