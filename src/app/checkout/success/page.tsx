import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="container" style={{ padding: "8rem 2rem", minHeight: "80vh", textAlign: "center", maxWidth: "600px" }}>
      <div style={{ width: "80px", height: "80px", backgroundColor: "#137333", color: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      
      <h1 className="heading-xl" style={{ marginBottom: "1rem" }}>Order Confirmed!</h1>
      <p className="text-lead" style={{ marginBottom: "3rem" }}>
        Thank you for choosing SpaceEase. Your order #ORD-{Math.floor(Math.random() * 10000)} is being processed.
      </p>

      {/* After-Sale Discount */}
      <div style={{ padding: "2rem", backgroundColor: "var(--bg-secondary)", border: "2px dashed var(--accent-sage)", borderRadius: "12px", marginBottom: "3rem" }}>
        <h2 className="heading-md" style={{ color: "var(--accent-sage)", marginBottom: "1rem" }}>A Gift For You!</h2>
        <p style={{ marginBottom: "1.5rem" }}>As a thank you for making a sustainable choice, here is 10% off your next purchase:</p>
        <div style={{ fontSize: "2rem", fontWeight: "bold", letterSpacing: "0.2em", color: "var(--text-primary)" }}>
          ECO10SPACE
        </div>
      </div>

      <Link href="/products" className="btn-primary">
        Continue Shopping
      </Link>
    </div>
  );
}
