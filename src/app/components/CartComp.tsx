import Image from 'next/image';
import React from 'react';
import productsData from './data/productData';

// interface Product {
//   id: number;
//   img: string;
//   title: string;
//   price: number;
// }



const CartComp: React.FC<{ masukKreanjang: (Product: any) => void }> = ({ masukKreanjang }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {productsData.map((product) => (
        <div
          key={product.id}
          className="max-w-sm rounded overflow-hidden shadow-lg p-4"
          onClick={() => masukKreanjang(product)} // Klik pada produk individual
        >
          <Image
            className="w-full bg-cover"
            src={product.img}
            alt={product.title}
            width={100}
            height={100}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <p className="text-gray-700 text-base">${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartComp;