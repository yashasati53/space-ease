import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  // Grab a few specific products for featured sections
  const featuredProducts = products.slice(0, 3); // Just grabbing first 3 for demo

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-shape"></div>
        <div className="hero-shape-2"></div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-subtitle">Redefine Your Space</span>
            <h1 className="heading-xl hero-title">Space is luxury. Design makes it accessible.</h1>
            <p className="text-lead hero-description">
              Modular, foldable, and sustainable furniture tailored for compact Indian homes. Elevate your living with eco-luxury aesthetics.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn-primary">Shop Collection</Link>
              <Link href="/about" className="btn-secondary">Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg section-title">Why SpaceEase?</h2>
            <p className="text-lead">Solving urban living challenges with intelligent design.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 className="feature-title">Modular & Foldable</h3>
              <p className="feature-text">Adaptable furniture that folds away when not in use, maximizing your floor space.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="feature-title">Affordable Luxury</h3>
              <p className="feature-text">Premium design aesthetics accessible to young professionals and students.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
              </div>
              <h3 className="feature-title">Sustainable Materials</h3>
              <p className="feature-text">Crafted from eco-friendly materials, minimizing carbon footprint.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section" id="shop" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg section-title">Featured Collections</h2>
            <p className="text-lead">Discover our best-selling space savers.</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                category={product.category}
                ecoScore={product.ecoScore}
              />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/products" className="btn-secondary">View All 20+ Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
