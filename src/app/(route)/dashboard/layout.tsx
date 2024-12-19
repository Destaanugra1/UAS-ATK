"use client";
import Sidebar from "@/app/components/Sidebar";
import React from "react";
import "./style.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <Sidebar /> {/* Sidebar akan tetap ada */}
      <main className="flex-1 bg-gray-50 dark:bg-gray-900 p-4">{children}</main>
    </div>
  );
}
