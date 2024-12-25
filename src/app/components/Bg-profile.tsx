import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import Image from "next/image";
import { auth } from "../../../auth";
import Bacground from "../public/bgprofile.jpeg";

export async function BackgroundProfile() {
  const session = await auth();
  return (
    <BackgroundBeamsWithCollision>
      <>
        {/* <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than Beams?{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div>
      </h2> */}
        <div className="">
          {session && (
            <>
              <div className="container mx-auto p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="relative">
                    <Image
                      alt="A scenic landscape with mountains and a clear sky"
                      className="w-full h-48 object-cover"
                      height={100}
                      src={Bacground}
                      width={100}
                      quality={100}
                    />
                    <div className="absolute bottom-0 left-0 ml-4 mb-4">
                      <Image
                        alt="Profile picture of the user, a person with a friendly smile"
                        className="rounded-full border-4 border-white w-32 h-32 object-cover"
                        height={100}
                        width={100}
                        quality={100}
                        src={
                          session.user.image || "/../../app/public/logo1.png"
                        }
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-2xl font-bold">
                          Nama: {session.user.name}
                        </h2>
                        <p className="text-gray-600">
                          Email: {session.user.email}
                        </p>
                      </div>
                      {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                        <i className="fas fa-user-edit"></i>
                        Edit Profile
                      </button> */}
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">
                        Tenteang Toko Kami
                      </h3>
                      <p className="text-gray-700 mt-2">
                        Toko ini menjual berbagai perlatan tulis dan alat
                        kantor, dan kami menjual berbagai macam produk yang
                        berkualitas dan harga yang terjangkau.
                      </p>
                    </div>
                    <div className="mt-4 ">
                      <div className="border bg-blue-500 rounded">
                        <h3 className="text-lg font-semibold ml-2 text-white">
                          Contact Developer
                        </h3>
                        <div className="mt-2">
                          <p className="text-white">
                            <i className="fas fa-envelope mr-2"></i>
                            destaanugrapratama@gmail.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    </BackgroundBeamsWithCollision>
  );
}
