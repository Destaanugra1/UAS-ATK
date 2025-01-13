"use client";
import React from "react";
import 'animate.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <main className="">{children}</main>
    </div>
  );
}
