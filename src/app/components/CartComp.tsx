"use client";
import Image from "next/image";
import React, { useState } from "react";
import type { Upload } from "@prisma/client";
import { useCart } from "../../contexts/CartContext"; // Menggunakan useCart
import Link from "next/link";
import PopupCard from "./PopupCard"; // Import PopupCard component

type Image = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};

const CartComp = ({ data }: { data: Upload }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { addToCart } = useCart(); // Mengakses fungsi addToCart dari context

  const handleClick = () => {
    setIsPopupOpen(true); // Menampilkan popup
  };

  const handleAddToCart = () => {
    addToCart({ ...data, price: Number(data.price), quantity: 1 }); // Menambahkan produk ke cart melalui context
    setIsPopupOpen(false); // Menutup popup setelah menambahkan ke cart
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Menutup popup
  };

  const handleLinkClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div className="row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4 row">
      <div >
        <div
          data-aos="fade-up"
          id="card"
          onClick={handleClick}
          className="bg-white hover:bg-slate-200 shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
          <Image
            alt={data.title}
            className="w-full h-48 object-cover"
            height={300}
            src={data.image}
            width={500}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{data.title}</div>
            <div className="text-lg mb-2">{data.description}</div>
            <p className="text-gray-700 text-base">Rp{data.price}</p>
          </div>
          <div className="px-6 py-4 flex justify-end">
            <Link
              className="bg-green-700 p-2 rounded-xl text-white font-bold"
              href={`/detail/${data.id}`}
              onClick={handleLinkClick}>
              Lihat
            </Link>
          </div>
        </div>

        {/* Popup Card */}
        {isPopupOpen && (
          <PopupCard
            data={data}
            onAddToCart={handleAddToCart} // Pass onAddToCart prop
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
};

export default CartComp;
