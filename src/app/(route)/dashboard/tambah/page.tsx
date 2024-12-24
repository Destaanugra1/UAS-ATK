import Link from "next/link";
import React from "react";

const AddProduct = () => {
  return (
    <div className="text-center  rounded-md p-2 text-white">
      <Link
        className="bg-blue-700 p-2 hover:bg-blue-500 transition rounded"
        href="/dashboard/create">
        Tambah Barang
      </Link>
    </div>
  );
};

export default AddProduct;
