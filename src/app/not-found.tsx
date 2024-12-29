import React from "react";
import { ButtonBack } from "./components/button";

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
          <ButtonBack />
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
