import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "var(--color-primary)" }}>Inventory</h1>
      <p style={{ fontSize: "1.2rem", color: "var(--text-secondary)", marginBottom: "2rem", maxWidth: "600px" }}>
        This page is currently under development. Check back later!
      </p>
      <Link href="/" className="btn-primary">
        Return Home
      </Link>
    </div>
  );
}
