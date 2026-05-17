import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand */}
        <div className="footer-brand">
          <h3>SpaceEase</h3>
          <p>Designing Space. Defining Comfort.</p>
          <p className="subtext">Sustainable, affordable furniture for compact Indian homes.</p>
        </div>

        {/* Shop Links */}
        <div className="footer-links">
          <h4>Shop</h4>
          <ul>
            <li><Link href="/products">Space Organization</Link></li>
            <li><Link href="/products">Home Décor</Link></li>
            <li><Link href="/products">Furniture</Link></li>
            <li><Link href="/products">Workspace Essentials</Link></li>
            <li><Link href="/products">Bathroom Organizer</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/return-policy">Return Policy</Link></li>
            <li><Link href="/mock">Careers</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Get tips on smarter compact living.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <Link href="/mock" className="btn-primary" style={{ display: "inline-block", textAlign: "center", textDecoration: "none", whiteSpace: "nowrap" }}>Subscribe</Link>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} SpaceEase Organisers Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
