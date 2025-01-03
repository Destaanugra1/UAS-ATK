"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  // State untuk mengatur menu mobile terbuka/tertutup
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Daftar menu yang akan ditampilkan
  const menuItems = ['Beranda', 'Menu','Kontak'];

  // Fungsi untuk membuat menu item dengan style yang sama
  const MenuItem = ({ text }: {text: string}) => (
    <li className="relative">
      <a
        href="/"
        // Style untuk link menu
        className={`
          // Style dasar
          text-xl 
          text-black 
          no-underline 
          relative
          
          // Opacity efek
          opacity-70 
          hover:opacity-100
          
          // Padding bottom agar ada jarak dengan garis
          pb-1
          
          // Border bottom saat hover
          hover:border-b-2 
          hover:border-black
          
          // Transisi smooth untuk semua efek
          transition-all 
          duration-300
        `}
      >
        {text}
      </a>
    </li>
  );

  return (
    <nav className="px-4 md:px-8 py-4 bg-white shadow-sm">
      {/* Container untuk logo dan menu */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">TOKO ATK</div>

        {/* Tombol hamburger untuk mobile */}
        <button 
          className="md:hidden" // Sembunyi di desktop
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Ganti ikon berdasarkan status menu */}
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Desktop */}
        <ul className="
          hidden
          md:flex 
          gap-8 
          list-none 
          items-center
        ">
          {/* Mapping menu items untuk desktop */}
          {menuItems.map((item) => (
            <MenuItem key={item} text={item} />
          ))}
        </ul>
      </div>

      {/* Menu Mobile */}
      <div className={`
        md:hidden // Selalu sembunyi di desktop
        ${isMenuOpen ? 'block' : 'hidden'} // Tampilkan/sembunyikan berdasarkan status
      `}>
        <ul className="
          flex 
          flex-col 
          gap-4 
          mt-4 
          list-none
        ">
          {/* Mapping menu items untuk mobile */}
          {menuItems.map((item) => (
            <MenuItem key={item} text={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;