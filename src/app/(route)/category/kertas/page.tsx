import Footer from "@/app/components/FooterComp";
import HomeComp from "@/app/components/Homecomp";
import KertasPage from "@/app/components/Kertas";
import React from "react";
import "../globals.css";

const page = () => {
  return (
    <div>
      <div className="">
        <HomeComp />
      </div>
      <div className="">
        <KertasPage />
      </div>
      <div className="mt-6">
      <Footer />
      </div>
    </div>
  );
};

export default page;
