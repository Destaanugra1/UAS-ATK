import React from "react";
import { getImagesById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import Footer from "@/app/components/FooterComp";

type DetailPageProps = {
  params: { id: string };
};

const DetailPage = async ({ params }: DetailPageProps) => {
  const data = await getImagesById(params.id);

  if (!data) {
    return <p>Data not found</p>;
  }

  return (
    <>
      <div className="max-w-5xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={data.image}
              alt={data.title}
              className="rounded-lg"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
            <h1 className="text-blue-600 text-lg font-semibold">
              {data.title}
            </h1>
            <div className="text-blue-600 text-lg font-semibold">
              Tipe Produck:{" "}
              <span className="text-blue-800">{data.description}</span>
            </div>

            <div className="text-gray-500 line-through">Rp 450.000</div>
            <div className="text-green-600 text-2xl font-bold">
              Rp {data.price}
            </div>
            <div className="text-green-600 mt-1">Tersedia</div>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">
                <i className="fas fa-star"></i> 5.0
              </span>
              <a href="#" className="text-blue-600 ml-2">
                Lihat Ulasan
              </a>
              <span className="text-gray-500 ml-2">
                | 195 Terjual | <i className="fas fa-eye"></i> 36609x
              </span>
            </div>
            <div className="mt-4"></div>
            <div className="mt-4">
              <div className="flex items-center mt-2">
                {/* <button
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-l-full"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button> */}
                {/* <button
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-r-full"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button> */}
              </div>
            </div>
            <div className="mt-4 flex gap-5">
              <Popover backdrop="blur" className=" text-white">
                <PopoverTrigger>
                  <Button className="bg-green-700 hover:bg-green-500 text-white font-bold">
                    Beli Sekarang
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="text-center flex juatify-center">
                  <div className="px-1 py-2">
                    <h1 className="text-small font-bold text-center p-10 px-10 py-10 w-full bg-gray-500 hover:bg-gray-700 hover:transition rounded-xl">
                      Segera Hadir
                    </h1>
                  </div>
                </PopoverContent>
              </Popover>
              <Link
                href="/"
                className="bg-blue-600 text-white px-6 py-2 rounded-full gap-4">
                Back
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
