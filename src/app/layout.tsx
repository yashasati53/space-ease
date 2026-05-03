import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./components.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
