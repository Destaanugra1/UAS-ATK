import React from "react";
import "./Home.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex ">
      <main className="">{children}</main>
    </div>
  );
}
