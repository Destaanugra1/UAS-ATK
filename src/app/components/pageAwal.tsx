import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoRemove from "@/app/public/logo-removebg.svg"
import Woman from "@/app/public/women.svg"
import Man from "@/app/public/man.png"
import 'animate.css';


const PageAwal: React.FC = () => {
  return (
    <div className="">
      <header className="header">
        <div className="logo">TOKO ATK</div>
        <nav className="flex justify-between px-16 py-8">
        <ul className="flex gap-8 list-none">
          <li className="relative inline-block text-black text-xl cursor-pointer transition-all duration-400 hover:text-[#2D3748]">
            <Link href="http://localhost:3000/" className="no-underline opacity-70 hover:opacity-100">Beranda</Link>
          </li>
          <li className="relative inline-block text-black text-xl cursor-pointer transition-all duration-400 hover:text-[#2D3748]">
            <Link href="http://localhost:3000/" className="no-underline opacity-70 hover:opacity-100">Menu</Link>
          </li>
          <li className="relative inline-block text-black text-xl cursor-pointer transition-all duration-400 hover:text-[#2D3748]">
            <Link href="http://localhost:3000/" className="no-underline opacity-70 hover:opacity-100">New</Link>
          </li>
          <li className="relative inline-block text-black text-xl cursor-pointer transition-all duration-400 hover:text-[#2D3748]">
            <Link href="http://localhost:3000/" className="no-underline opacity-70 hover:opacity-100">Kontak</Link>
          </li>
        </ul>
      </nav>
      </header>

      <main className="main-landing">
        <section className="hero-landing">
          <div className="hero-content-landing animate__animated animate__fadeInLeft animate__delay-1s ">
            <h1 className="">Miliki Alat Tulis Terbaik Kami</h1>
            <p>Dapatkan pengalaman menulis yang luar biasa dengan alat tulis terbaik pilihan kami, dirancang untuk kenyamanan dan kualitas maksimal.</p>
            <button className="cta-button-landing">BELANJA SEKARANG</button>
          </div>
          <div className="hero-logo" data-aos="fade-left" data-aos-duration="4000">
            <Image src={LogoRemove}   alt="Jaya ATK Logo" className="brand-logo" width={300} height={300} />
          </div>
        </section>

        <div className="features-container">
          <section className="feature-section" data-aos="fade-left" data-aos-duration="4000">
            <div className="feature-content" data-aos="fade-right" data-aos-duration="6000">
              <p className="feature-text">
                Memungkinkan pengguna pembelian di mana saja dan kapan saja. Karena platform dapat diakses dengan mudah dari berbagai perangkat termasuk komputer, tablet, dan ponsel.
              </p>
            </div>
            <div className="feature-illustration">
              <Image src={Woman} alt="VR Shopping Experience" className="feature-image" width={400} height={400} />
            </div>
          </section>

          <section className="feature-section reverse">
            <div className="feature-content">
              <p className="feature-text">
              Layanan pelanggan siap membantu Anda 24/7. Belanja dari rumah, kirim ke pintu. Semua kebutuhan alat tulis hanya satu kali klik!
              </p>
            </div>
            <div className="feature-illustration">
              <Image src={Man} alt="Learning Experience" className="feature-image" width={400} height={400} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PageAwal;