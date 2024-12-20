import React from "react";
import Link from "next/link";
import { auth } from "../../../auth";

const HomeComp = async () => {
  const session = await auth();
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="container">
            <a href="mailto:info@tokoatk.com">
              <i className="email-icon"></i> info@tokoatk.com
            </a>
            {/* login form */}
            <div className="">
              {session && (
                <div className="border">
                  <Link
                    className="bg-red-700 p-2 rounded text-white hover:bg-red-400"
                    href="/user">
                    Profile
                  </Link>
                </div>
              )}
              {!session && (
                <div className="border">
                  <Link
                    className="bg-red-700 p-2 rounded text-white hover:bg-red-400"
                    href="/user">
                    Login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="categories-nav">
          <div className="container">
            <ul className="category-list">
              <li>
                <Link href="/kategori/alat-tulis">Alat Tulis</Link>
              </li>
              <li>
                <Link href="/kategori/kertas">Kertas</Link>
              </li>
              {/* <li>
                <Link href="/kategori/arsip"></Link>
              </li> */}
              <li>
                <Link href="/kategori/kantor">Peralatan Kantor</Link>
              </li>
              {/* <li>
                <Link href="/kategori/sekolah">Perlengkapan Sekolah</Link>
              </li>
              <li>
                <Link href="/kategori/kantor">Peralatan Kantor</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </header>

      <main>
        <div className="hero-section">
          <div className="hero-slider">
            <div className="slide">
              <div className="hero-content">
                <h1>Peralatan Tulis Berkualitas</h1>
                <p>
                  Temukan berbagai kebutuhan alat tulis untuk sekolah dan kantor
                </p>
                <a href="#products" className="cta-button">
                  Belanja Sekarang
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="featured-categories container">
          <h2>Kategori Populer</h2>
        </section>
        <section className="featured-products container">
          <h2>Produk Unggulan</h2>
          <div className="product-grid">
            {/* <!-- More product cards can be added here --> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeComp;
