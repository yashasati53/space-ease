import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./components.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "SpaceEase | Designing Space. Defining Comfort.",
  description: "SpaceEase offers sustainable, affordable, and modular furniture tailored for small spaces. Eco-luxury functionality for modern compact living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
