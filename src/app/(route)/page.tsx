import { CartProvider } from "@/contexts/CartContext";
import { Navbar } from "../components/Navbar";
import HomeComp from "../components/Homecomp";
import CartComp from "../components/CartComp";
import Faq from "../components/FaqComp";
import Footer from "../components/FooterComp";
import { getImages } from "../../lib/data";
import Link from "next/link";

export default async function Home() {
  const image = await getImages();
  return (
    <CartProvider>
      {" "}
      <section id="home">
        <div className="container">
          <div className="home_content">
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
            <div className="">
              <HomeComp />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {image.slice(0, 8).map((item) => (
                <CartComp key={item.id} data={item} />
              ))}
            </div>
            <div className="text-end mt-10 ">
              <Link
                className="bg-yellow-400 border p-4 px-6 py-5 rounded-xl text-white font-bold hover:bg-yellow-600 hover:transition-colors motion-reduce:transition-none motion-reduce:hover:transform-none"
                href="/product">
                Lihat Semua Produk
              </Link>
            </div>
            <Faq />
            <Footer />
          </div>
        </div>
      </section>
    </CartProvider>
  );
}
