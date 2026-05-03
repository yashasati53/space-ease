import { products, getProductById } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static routes at build time for Static Export
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="container" style={{ padding: "4rem 2rem", minHeight: "80vh" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "4rem" }}>
        {/* Product Image */}
        <div style={{ position: "relative", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", backgroundColor: "var(--bg-secondary)" }}>
          <Image src={product.imageUrl} alt={product.name} fill style={{ objectFit: "cover" }} />
          <div className="eco-badge" style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}>
            Eco Score: {product.ecoScore}/10
          </div>
        </div>

        {/* Product Details */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1rem" }}>
            {product.category}
          </div>
          <h1 className="heading-lg" style={{ marginBottom: "1rem" }}>{product.name}</h1>
          <div style={{ fontSize: "2rem", color: "var(--accent-terra)", fontWeight: "bold", marginBottom: "2rem" }}>
            ₹{product.price.toLocaleString("en-IN")}
          </div>
          
          <p className="text-lead" style={{ marginBottom: "2rem" }}>
            {product.description}
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
            <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: product.stock > 10 ? "#137333" : "#b06000" }}></div>
            <span style={{ color: "var(--text-secondary)", fontWeight: "500" }}>
              {product.stock > 10 ? "In Stock" : `Only ${product.stock} left in stock`}
            </span>
          </div>

          <Link href="/checkout" className="btn-primary" style={{ width: "100%", padding: "1rem", fontSize: "1.1rem" }}>
            Buy Now (Mock Checkout)
          </Link>

          {/* Trust badges */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "3rem", borderTop: "1px solid var(--border-color)", paddingTop: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
              Sustainable Materials
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Fast & Free Shipping
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <Link href="/return-policy" style={{ textDecoration: "underline" }}>Easy Returns</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
