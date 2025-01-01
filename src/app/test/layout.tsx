"use client";
import React from "react";
import "./Home.css";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">
      <main className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">{children}</main>
    </div>
  );
}
