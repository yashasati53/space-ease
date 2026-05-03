import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link href="/" className="logo">
          SpaceEase
        </Link>
        <div className="nav-links">
          <Link href="/products" className="nav-link">Shop</Link>
          <Link href="/about" className="nav-link">About Us</Link>
          <Link href="/sustainability" className="nav-link">Sustainability</Link>
        </div>
        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
          <button className="icon-btn" aria-label="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
