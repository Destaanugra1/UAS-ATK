"use client";
import React, { Component } from "react";
import { Navbar } from "../components/Navbar";
import HomeComp from "../components/Homecomp";
import CartComp from "../components/CartComp";
import Faq from "../components/FaqComp";
import Footer from "../components/FooterComp";


// Definisikan interface untuk Props dan State
interface HomeState {
  keranjang: Product[]; // Menyimpan produk dalam bentuk array Product
}

interface HomeProps extends Record<string, unknown> {}

interface Product {
  id: number;
  name: string;
  price: number;
}

export default class Home extends Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);

    // Inisialisasi state
    this.state = {
      keranjang: [], // State untuk menyimpan item yang dipilih
    };
  }

  // Fungsi untuk menambah produk ke keranjang
  masukKreanjang = (value: Product) => {
    console.log("Produk yang dipilih:", value); // Log data JSON
    this.setState((prevState) => ({
      keranjang: [...prevState.keranjang, value], // Tambah ke state keranjang
    }));
  };

  render() {
    return (
      <>
        <section id="home">
          <div className="container">
            <div className="home_content">
              <Navbar />
              <HomeComp />
              {/* Pastikan `masukKreanjang` diteruskan sebagai props */}
              <CartComp masukKreanjang={this.masukKreanjang} />
              <Faq />
              <Footer />
            </div>
          </div>
        </section>
      </>
    );
  }
}
