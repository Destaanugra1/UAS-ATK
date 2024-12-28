import React from "react";
import Image from "next/image";
import { auth } from "../../../auth";
import Avatar from "../public/avatarr.png";

export async function BackgroundProfile() {
  const session = await auth();
  return (
      <>
      {session && (
        <main>
          <section className="px-16 py-8 max-w-[1200px] mx-auto">
            <h1 className="text-5xl mb-4">Halaman Profile</h1>
            <p className="text-[#3498db] mb-4">{session.user.email}</p>
            {!session.user.role && (
            <p className="text-[#3498db] mb-4">Dan anda sebagai: <span className="bg-red-500 hover:bg-red-700 hover:transition-all cursor-wait md:text-xs lg:text-xl lg:font-bold md:font-serif md:px-2 md:py-2 md:p-3 lg:p-3  lg:py-3 lg:px-3 rounded uppercase text-white">User</span></p>
          )}
          {session.user.role && (
          <p className="text-blue-600 font-bold mb-16">Dan anda sebagai: <span className="bg-red-500 hover:bg-red-700 hover:transition-all cursor-wait md:text-xs lg:text-xl lg:font-bold md:font-serif md:px-2 md:py-2 md:p-3 lg:p-3  lg:py-3 lg:px-3 rounded uppercase text-white">{session.user.role}</span></p>
          )}

            <div className="flex flex-col md:flex-row justify-between gap-16 mb-16">
              <div className="profile-image md:order-2">
                <Image
                  src={session.user.image || Avatar}
                  alt="user"
                  width={250}
                  height={250}
                  className="rounded-full bg-white -mt-48 md:-mt-4 md:w-[100px] md:h-[100px] md:max-w-[100px]"
                />
              </div>
              <div className="flex-1 max-w-[600px] md:order-1">
                <p className="mb-2 leading-relaxed opacity-80">
                  Selamat Datang: {session.user.name}
                </p>
                <p className="mb-2 leading-relaxed opacity-80">
                  Toko ini menjual berbagai perlatan tulis dan alat kantor, dan
                  kami menjual berbagai macam produk yang berkualitas dan harga
                  yang terjangkau.
                </p>
              </div>
            </div>
          </section>
        </main>
      )}
      </>
  );
}
