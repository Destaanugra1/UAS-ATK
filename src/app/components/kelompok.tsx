"use client"
import { FocusCards } from "./ui/focus-cards";
import Anggi from "@/app/public/image/anggi.jpg";
import Azahra from "@/app/public/image/azzahra.jpg";
import Vira from "@/app/public/image/vira.jpg";
import Yolan from "@/app/public/image/yolan.jpg";
import Arya from "@/app/public/image/yadi.jpg";
import Rizki from "@/app/public/image/rizki.jpg";
import Desta from "@/app/public/image/desta.jpg";
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; 

export function FocusCardsDemo() {
  useEffect(() => {
    AOS.init(); // Inisialisasi AOS
  }, []); 
  const cards = [
    {
      title: "Anggraini Dwi Olivia",
      src: Anggi,
      dataAos: "zoom-in",
      dataAosDuration: "200",
    },
    {
      title: "Azzahra Risa Putri",
      src: Azahra,
    },
    {
      title: "Virha Charoline Josica",
      src: Vira,
    },
    {
      title: "Yolanda",
      src: Yolan,
    },
    {
      title: "Rizki Kurniawan",
      src: Rizki,
    },
    {
      title: "Aryadi Kurniawan",
      src: Arya,
    },
    {
      title: "Desta Anugra Pratama",
      src: Desta,
    },
  ];

  return <FocusCards cards={cards} />;
}
