import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "2rem 2rem 5rem" }}>
      {/* Page Header */}
      <div style={{ borderBottom: "1px solid #e8e8e8", paddingBottom: "1.5rem", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "0.85rem", fontWeight: 400, textTransform: "uppercase", letterSpacing: "0.08em" }}>
          All Products
        </h1>
        <p style={{ fontSize: "0.78rem", color: "#737373", marginTop: "0.4rem" }}>
          {products.length} items
        </p>
      </div>

      {categories.map(category => (
        <section key={category} style={{ marginBottom: "4rem" }}>
          <h2 style={{
            fontSize: "0.82rem",
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1.5rem",
            paddingBottom: "0.75rem",
            borderBottom: "1px solid #e8e8e8",
          }}>
            {category}
          </h2>
          <div className="products-grid">
            {products.filter(p => p.category === category).map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                category={product.category}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
