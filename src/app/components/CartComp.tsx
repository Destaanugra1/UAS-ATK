"use client";
import Image from "next/image";
import React, { useState } from "react";
import type { Upload } from "@prisma/client";
import { useCart } from "../../contexts/CartContext"; // Menggunakan useCart
import Link from "next/link";

const CartComp = ({ data }: { data: Upload }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { addToCart } = useCart(); // Mengakses fungsi addToCart dari context

  const handleClick = () => {
    console.log("Product clicked:", data);
    setIsPopupOpen(true); // Menampilkan popup
  };

  const handleAddToCart = () => {
    addToCart({ ...data, price: Number(data.price) }); // Menambahkan produk ke cart melalui context
    console.log("Item added to cart:", data);
    setIsPopupOpen(false); // Menutup popup setelah menambahkan ke cart
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Menutup popup
  };

  const handleLinkClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div>
      <div
        id="card"
        onClick={handleClick}
        className="bg-white hover:bg-slate-200 shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      >
        <Image
          alt={data.title}
          className="w-full h-48 object-cover"
          height="300"
          src={data.image}
          width="500"
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
            onClick={handleLinkClick}
          >
            Lihat
          </Link>
        </div>
      </div>

      {/* Popup Card */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="font-bold text-xl mb-4">{data.title}</h2>
            <Image
              alt={data.title}
              className="w-full h-48 object-cover mb-4"
              height="300"
              src={data.image}
              width="500"
            />
            <p className="text-lg mb-4">{data.description}</p>
            <p className="text-gray-700 text-base mb-4">Rp{data.price}</p>
            <div className="gap-4 flex">
              <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg "
              >
                Add to Cart
              </button>
              <button
                onClick={handleClosePopup}
                className="bg-gray-300 text-black px-4 py-2 rounded-lg mt-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartComp;
