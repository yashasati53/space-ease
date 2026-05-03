import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  ecoScore: number;
}

export default function ProductCard({ id, name, price, imageUrl, category, ecoScore }: ProductCardProps) {
  return (
    <div className="product-card">
      <Link href={`/product/${id}`} className="product-image-container">
        <Image src={imageUrl} alt={name} fill className="product-image" />
        <div className="eco-badge">
          Eco Score: {ecoScore}/10
        </div>
      </Link>
      <div className="product-info">
        <div className="product-meta">
          <span className="product-category">{category}</span>
          <span className="product-price">₹{price.toLocaleString('en-IN')}</span>
        </div>
        <h3 className="product-name">
          <Link href={`/product/${id}`}>{name}</Link>
        </h3>
        <button className="btn-primary product-add-btn">Add to Cart</button>
      </div>
    </div>
  );
}
