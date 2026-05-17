import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container" style={{ padding: "4rem 2rem", minHeight: "80vh", maxWidth: "900px", margin: "0 auto" }}>
      <h1 className="heading-xl" style={{ textAlign: "center", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "2px" }}>Our Story</h1>
      <p className="text-lead" style={{ textAlign: "center", color: "var(--text-secondary)", marginBottom: "4rem" }}>
        Designing Space. Defining Comfort.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        
        {/* Core Idea Section */}
        <section>
          <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>The Core Idea</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-primary)" }}>
            At SpaceEase, our mission is to create modular, foldable, and highly functional furniture for compact Indian homes. 
            We saw the growing challenges of urban living—limited space, rising population, and a shifting lifestyle towards remote work—and decided to build a solution that doesn't compromise on aesthetics or comfort.
          </p>
        </section>

        {/* Unique Value Proposition */}
        <section style={{ backgroundColor: "var(--bg-secondary)", padding: "2.5rem", borderRadius: "12px" }}>
          <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>Unique Value Proposition</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-primary)" }}>
            We provide affordable and modular furniture tailored exclusively for small spaces. Our USP is blending <strong>eco-luxury</strong> with unparalleled functionality for modern, compact living. 
            Whether you are a student, a young professional, or outfitting a small office, SpaceEase adapts to your needs.
          </p>
        </section>

        {/* The Market Gap */}
        <section>
          <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>Bridging the Market Gap</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-primary)", marginBottom: "2rem" }}>
            While large traditional brands offer modular furniture, they often fail to cater to the need for truly compact and portable designs. 
            SpaceEase fills this functional niche in the market, allowing you to transform a small apartment into a spacious home effortlessly.
          </p>
          <Link href="/products" className="btn-primary" style={{ display: "inline-block", padding: "1rem 2rem", textTransform: "uppercase", letterSpacing: "1px" }}>
            Explore Our Collection
          </Link>
        </section>

      </div>
    </div>
  );
}
