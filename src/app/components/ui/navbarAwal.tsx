"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  // State untuk mengatur menu mobile terbuka/tertutup
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Daftar menu dengan nama dan tautan
  const menuItems = [
    { name: 'Beranda', link: '/' },
    { name: 'Kelompok', link: '/kelompok' },
  ];

  // Fungsi untuk membuat menu item dengan style yang sama
  const MenuItem = ({ text, link }: { text: string; link: string }) => (
    <li className="relative">
      <a
        href={link}
        // Style untuk link menu
        className={`
          text-xl 
          text-black 
          no-underline 
          relative
          opacity-70 
          hover:opacity-100
          pb-1
          hover:border-b-2 
          hover:border-black
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
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {menuItems.map((item) => (
            <MenuItem key={item.name} text={item.name} link={item.link} />
          ))}
        </ul>
      </div>

      {/* Menu Mobile */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col gap-4 mt-4 list-none">
          {menuItems.map((item) => (
            <MenuItem key={item.name} text={item.name} link={item.link} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
