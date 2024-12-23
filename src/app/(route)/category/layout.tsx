import { Navbar } from "@/app/components/Navbar";
import { CartProvider } from "@/contexts/CartContext";
import React from "react";
import "./globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <div className="p-8 " >
        <Navbar />
        <main >
          {children}
        </main>
      </div>
    </CartProvider>
  );
}
