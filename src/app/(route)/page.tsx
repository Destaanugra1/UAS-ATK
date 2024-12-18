import { Navbar } from "../components/Navbar";
import HomeComp from "../components/Homecomp";
import CartComp from "../components/CartComp";
import Faq from "../components/FaqComp";
import Footer from "../components/FooterComp";
import { getImages } from "../lib/data";


// Definisikan interface untuk Props dan State


export default async function Home() {
    const image = await getImages();
    return (
      <>
        <section id="home">
          <div className="container">
            <div className="home_content">
              <Navbar />
              <HomeComp />
              {/* Pastikan `masukKreanjang` diteruskan sebagai props */}
              <div className="flex flex-col md:flex-row flex-wrap justify-start gap-4">
                {image.map((item) => (
                <CartComp key={item.id} data={item} />
                ))}
              </div>
              <Faq />
              <Footer />
            </div>
          </div>
        </section>
      </>
    );
  }
