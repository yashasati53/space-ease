import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="container" style={{ padding: "4rem 2rem", minHeight: "80vh" }}>
      <div className="section-header">
        <h1 className="heading-xl section-title">All Products</h1>
        <p className="text-lead">Discover sustainable solutions for every corner of your home.</p>
      </div>

      {categories.map(category => (
        <section key={category} style={{ marginBottom: "5rem" }}>
          <h2 className="heading-md" style={{ marginBottom: "2rem", borderBottom: "2px solid var(--accent-sage)", display: "inline-block", paddingBottom: "0.5rem" }}>
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
                ecoScore={product.ecoScore}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
