import Link from "next/link";
import React from "react";

export default function MockPage() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "var(--color-primary)" }}>Coming Soon</h1>
      <p style={{ fontSize: "1.2rem", color: "var(--color-text-light)", marginBottom: "2rem", maxWidth: "600px" }}>
        This feature is currently under development. Stay tuned for updates!
      </p>
      <Link href="/" className="btn-primary">
        Return Home
      </Link>
    </div>
  );
}
