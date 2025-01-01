import React from "react";
import { DataProduct } from "@/lib/data";
import { getJumlahUser } from "@/lib/data";

const CardProduct = async () => {
  const JumlahUser = await getJumlahUser()
  console.log(JumlahUser);
  const jumlahData = await DataProduct();
  return (
    <div className="mt-20  flex justify-end mb-10 gap-6">
      <div className="bg-blue-500 p-4 px-1 py-1 w-[50vh] rounded text-white ">
        <h1>Data Product</h1>
        <h4>Total: {jumlahData} Product</h4>
      </div>
      <div>
        <div className="bg-blue-500 p-4 px-1 py-1 w-[50vh] rounded text-white ">
          <h1>Data User</h1>
          <h4>Total: {JumlahUser} User</h4>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
