"use client";
// import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import PopupCard from "./PopupCard";
import { useCart } from "../../contexts/CartContext"; // Menggunakan useCart
import Link from "next/link";
// import { useRouter } from "next/navigation";

type Image = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

const ProductPage = () => {
  const [products, setProducts] = useState<Image[]>([]); // Data dari API
  const [searchQuery, setSearchQuery] = useState(""); // State untuk pencarian
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State untuk popup
  const [selectedProduct, setSelectedProduct] = useState<Image | null>(null); // State untuk produk yang dipilih
  const { addToCart } = useCart(); // Mengakses fungsi addToCart dari context

  const handleClick = (item: Image) => {
    setSelectedProduct(item); // Set produk yang dipilih
    setIsPopupOpen(true); // Menampilkan popup
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      addToCart({
        ...selectedProduct,
        price: Number(selectedProduct.price),
        quantity: 1,
      }); // Include quantity property
      console.log("Item added to cart:", selectedProduct);
      setIsPopupOpen(false); // Menutup popup setelah menambahkan ke cart
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Menutup popup
  };

  // const handleLinkClick = (event: React.MouseEvent) => {
  //     event.stopPropagation();
  //   };

  // Ambil data dari API
  useEffect(() => {
    fetch("/api/pencarian")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.images); // Set data ke state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter data berdasarkan pencarian dan deskripsi
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLinkClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  // membuat useRoute ke page detail
  // const router = useRouter();
  // const handleClickPus = (item: Image) => {
  //   router.push(`/detail/${item.id}`);
  // };

  return (
    <div>
      {/* Input Pencarian */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className=" px-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Grid Produk */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item) => (
          <div
            onClick={() => handleClick(item)}
            key={item.id}
            id="card"
            className="bg-white hover:bg-slate-200 shadow-md rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
            <Image
              alt={item.title}
              className="w-full h-48 object-cover"
              height="192"
              src={item.image}
              width="500"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <div className="text-lg mb-2">{item.description}</div>
              <p className="text-gray-700 text-base">Rp{item.price}</p>
            </div>
            <div className="flex justify-end px-6 py-4">
              <Link
                className="bg-green-700 p-2 rounded-xl text-end justify-end text-white font-bold"
                href={`/detail/${item.id}`}
                onClick={handleLinkClick}>
                Lihat
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* popUp card */}
      {isPopupOpen && selectedProduct && (
        <PopupCard
          data={selectedProduct}
          onAddToCart={handleAddToCart}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ProductPage;
