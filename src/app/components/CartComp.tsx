import Image from "next/image";
import React from "react";
import type { Upload } from "@prisma/client";

const CartComp = ({ data }: { data: Upload }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
      </div>
    </>
  );
};
export default CartComp;
