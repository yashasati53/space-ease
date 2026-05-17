"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

interface ProductActionsProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    category: string;
  };
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <button
        onClick={handleBuyNow}
        className="btn-primary"
        style={{
          width: "100%",
          padding: "1rem",
          textAlign: "center",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Buy Now
      </button>

      <button
        onClick={handleAdd}
        className="btn-secondary"
        style={{
          width: "100%",
          padding: "1rem",
          textAlign: "center",
          backgroundColor: added ? "#000" : "transparent",
          color: added ? "#fff" : "#000",
          borderColor: added ? "#000" : "#000",
          fontWeight: 500,
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        {added ? "Added to Bag ✓" : "Add to Bag"}
      </button>
    </div>
  );
}
