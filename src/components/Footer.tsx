import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>SpaceEase</h3>
          <p>Designing Space. Defining Comfort.</p>
          <p className="subtext">Sustainable, affordable, modular furniture tailored for small spaces.</p>
        </div>
        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><Link href="/category/organizers">Organizers</Link></li>
            <li><Link href="/category/foldable">Foldable Furniture</Link></li>
            <li><Link href="/category/bundles">Space Bundles</Link></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/sustainability">Sustainability</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get tips on living smarter in compact spaces.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SpaceEase Organisers Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
