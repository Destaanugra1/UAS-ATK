import React from "react";
import Link from "next/link";
import { auth } from "../../../auth";
import { 
  Mail, 
  UserCircle, 
  LogIn,
  Pencil, 
  FileText, 
  Briefcase,
  ShoppingCart,
  
} 
from "lucide-react";

const HomeComp = async () => {
  const session = await auth();
  return (
    <>
<header className="header">
        <div className="top-bar">
          <div className="container">
            <a href="mailto:info@tokoatk.com" className="flex items-center gap-2">
              <Mail size={18} /> info@tokoatk.com
            </a>
            {/* login form */}
            <div className="">
              {session && (
                <div className="border">
                  <Link
                    className="bg-red-700 p-2 rounded text-white hover:bg-red-400 flex items-center gap-2"
                    href="/user">
                    <UserCircle size={18} /> Profile
                  </Link>
                </div>
              )}
              {!session && (
                <div className="border">
                  <Link
                    className="bg-red-700 p-2 rounded text-white hover:bg-red-400 flex items-center gap-2"
                    href="/user">
                    <LogIn size={18} /> Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="hero-section">
          <div className="hero-slider">
            <div className="slide">
              <div className="hero-content">
                <div className="h1">
                <h1>Peralatan Tulis Berkualitas</h1>
                </div>
                <p>
                  Temukan berbagai kebutuhan alat tulis untuk sekolah dan kantor
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a href="#products" className="cta-button flex items-center gap-2 justify-center">
                  <ShoppingCart size={18} /> Belanja Sekarang
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="categories-nav">
          <div className="container">
            <ul className="category-list">
              <li className="alat-tulis">
                <Link href="/kategori/alat-tulis" className="md:text-hidden flex items-center gap-2">
                  <Pencil size={18} /> Alat Tulis
                </Link>
              </li>
              <li className="kertas">
                <Link href="/kategori/kertas" className="flex items-center gap-2">
                  <FileText size={18} /> Kertas
                </Link>
              </li>
              <li className="kantor">
                <Link href="/kategori/kantor" className="flex items-center gap-2">
                  <Briefcase size={18} /> Peralatan Kantor
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
  </>
  );
};

export default HomeComp;
