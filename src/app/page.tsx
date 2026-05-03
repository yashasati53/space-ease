import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Home() {
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
              <Link href="#shop" className="btn-primary">Shop Collection</Link>
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
            <ProductCard 
              id="foldable-desk-1"
              name="Origami Foldable Desk"
              price={4500}
              imageUrl="https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80"
              category="Workspaces"
              ecoScore={9}
            />
            <ProductCard 
              id="modular-shelf-1"
              name="Tetris Modular Bookshelf"
              price={8500}
              imageUrl="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80"
              category="Storage"
              ecoScore={8}
            />
            <ProductCard 
              id="bed-organizer-1"
              name="Under-bed Eco Storage Box"
              price={2200}
              imageUrl="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
              category="Organizers"
              ecoScore={10}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
