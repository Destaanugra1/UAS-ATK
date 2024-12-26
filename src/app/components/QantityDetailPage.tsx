'use client';

import { useState } from 'react';

interface QuantityPriceCalculatorProps {
  initialPrice: string;
  onQuantityChange: (quantity: number, totalPrice: number) => void;
}

const QuantityPriceCalculator = ({ initialPrice, onQuantityChange }: QuantityPriceCalculatorProps) => {
  const [quantity, setQuantity] = useState(1);
  const basePrice = parseInt(initialPrice.replace(/\D/g, ""));

  const handleIncrement = () => {
    const newQuantity = quantity + 2;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity, basePrice * newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 2;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity, basePrice * newQuantity);
    }
  };

  const totalPrice = basePrice * quantity;

  return (
    <div className="mt-4">
      <div className="text-gray-500 line-through">Rp 450.000</div>
      <div className="text-green-600 text-2xl font-bold">
        Rp {totalPrice.toLocaleString("id-ID")}
      </div>
      
      <div className="flex items-center mt-4 space-x-4">
        <button
          onClick={handleDecrement}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
          disabled={quantity <= 1}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          readOnly
          className="w-16 text-center border rounded-lg"
        />
        <button
          onClick={handleIncrement}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QuantityPriceCalculator;