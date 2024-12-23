"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useCart } from "../../contexts/CartContext"; // Import useCart
import type { Upload } from "@prisma/client";

const PopupCard = ({
  data,
  onClose,
  onAddToCart, // Add onAddToCart prop
}: {
  data: Upload;
  onClose: () => void;
  onAddToCart: () => void; // Add onAddToCart type
}) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(Number(data.price));
  const { updateQuantity, addToCart } = useCart(); // Gunakan useCart

  useEffect(() => {
    setTotalPrice(Number(data.price) * quantity);
  }, [quantity, data.price]);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Konversi price menjadi number
    const numericPrice = Number(data.price);
  
    // Tambahkan item ke keranjang
    addToCart({ ...data, price: numericPrice, quantity });
  
    // Perbarui jumlah di keranjang jika item sudah ada
    updateQuantity(data.id, quantity);
  
    onAddToCart(); // Call onAddToCart prop
    onClose(); // Tutup popup setelah ditambahkan
  };

  return (
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
        <p className="text-gray-700 text-base mb-4">Rp{totalPrice}</p>
        <div className="flex items-center mb-4">
          <button
            onClick={handleDecrease}
            className="bg-gray-300 text-black px-2 py-1 rounded-lg">
            -
          </button>
          <span className="mx-4">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="bg-gray-300 text-black px-2 py-1 rounded-lg">
            +
          </button>
        </div>
        <div className="gap-4 flex">
          <button
            onClick={handleAddToCart} // Gunakan fungsi handleAddToCart
            className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Add to Cart
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black px-4 py-2 rounded-lg mt-2">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupCard;
