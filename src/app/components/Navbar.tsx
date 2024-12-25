"use client";
import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useCart } from "../../contexts/CartContext";
import Image from "next/image";
import Logo from "@/app/public/logo3.png";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Link from "next/link";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, removeFromCart, total } = useCart();

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement search functionality here
  };

  return (
    <>
      <nav className="navbar sticky">
        <div className="container flex justify-between items-center">
          <div className="logo text-xl font-bold">
            <Link href="/">
              <Image src={Logo} alt="logo" width={50} height={50} />
            </Link>
          </div>
          <form
            className="search-bar flex gap-2"
            onSubmit={handleSearchSubmit}></form>
          <div className="cart">
            <button
              onClick={toggleCart}
              className="relative text-2xl text-gray-700 focus:outline-none">
              <FiShoppingCart />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cart.length}
              </span>
            </button>
          </div>
        </div>
      </nav>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-99999"
          onClick={toggleCart}>
          <div
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg z-50 p-4"
            onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-4">Keranjang</h2>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                  />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      {item.quantity} x Rp{item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm">
                    Hapus
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-right font-bold text-lg">
                Total: Rp{total.toLocaleString()}
              </p>
              <Popover backdrop="blur" className=" text-white mt-4">
                <PopoverTrigger>
                  <Button className="bg-blue-700 hover:bg-blue-800 text-white font-bold">
                    Beli Sekarang
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[240px] bg-blue-500">
                  <div className="px-1 py-2">
                    <h1 className="text-small font-bold">Segera Hadir</h1>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
