import Faq from "@/app/components/FaqComp";
import Footer from "@/app/components/FooterComp";
import { Navbar } from "@/app/components/Navbar";
import ProductPage from "@/app/components/semuaProduct";
import { CartProvider } from "@/contexts/CartContext";
import React from "react";

const SemuaProduct = () => {
  return (
    <CartProvider>
      <div className="container">
        <div className="sticky top-0 z-50">
        <Navbar />
        </div>
        <div className="mt-6">
          <ProductPage />
        </div>
        <div className="">
          <Faq />
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </CartProvider>
  );
};

export default SemuaProduct;
