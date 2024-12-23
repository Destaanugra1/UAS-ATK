import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <>
      <div className="bg-blue-900 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="relative inline-block">
            <h1 className="text-white text-9xl font-bold">404</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-2 py-1 text-sm font-semibold rounded rotate-12">
              Page Not Found
            </div>
          </div>
          <Link href="/" className="mt-8 px-6 py-2 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition-colors duration-300 rounded-2xl">
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
