"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        Free Delivery on Orders Above ₹999 — Shop Now
      </div>

      <nav className="navbar">
        <div className="nav-content">
          {/* Logo */}
          <Link href="/" className="logo">
            SpaceEase
          </Link>

          {/* Center Nav Links */}
          <div className="nav-links">
            <Link href="/products" className="nav-link">Shop</Link>
            <Link href="/new-arrivals" className="nav-link">New Arrivals</Link>
            <Link href="/collections" className="nav-link">Collections</Link>
            <Link href="/about" className="nav-link">About Us</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </div>

          {/* Right Actions */}
          <div className="nav-actions">
            {/* Search */}
            <Link href="/mock" className="icon-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </Link>
            {/* Account */}
            <Link href="/login" className="icon-btn" aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </Link>
            {/* Cart */}
            <Link href="/cart" className="icon-btn" aria-label="Cart" style={{ position: "relative" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              {cartCount > 0 && (
                <span style={{
                  position: "absolute",
                  top: "-4px",
                  right: "-4px",
                  backgroundColor: "#000",
                  color: "#fff",
                  fontSize: "0.62rem",
                  fontWeight: 600,
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
