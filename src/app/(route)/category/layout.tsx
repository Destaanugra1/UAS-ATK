import { Navbar } from "@/app/components/Navbar";
import { CartProvider } from "@/contexts/CartContext";
import React from "react";
import "./globals.css";
import Footer from "@/app/components/FooterComp";
import HomeComp from "@/app/components/Homecomp";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CartProvider>
      <div className="p-8 ">
        <div className="">
          <Navbar />
        </div>
        <HomeComp />
        <main>{children}</main>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
}
