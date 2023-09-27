import React from "react";
import Image from "next/image";
export default function Hero() {
  return (
    <div>
      <div className="bg-white p-10"></div>
      <div className="flex flex-col items-center justify-between">
        <div className="relative w-full">
          <div className="absolute -z-10 w-full">
            <Image
              src="/img/Furniture.jpg"
              alt="background Image"
              className="w-full"
              width={1000}
              height={1000}
            />
          </div>
          <div className="max-w-screen-lg m-auto h-[70vh] py-5 my-96 text-center text-2xl rounded-2xl">
            <h1 className="text-7xl text-white italic font-bold">
              Stylish Kitchen Furniture
            </h1>
            <p className="text-gray-900 font-semibold">
              Unique Furniture Style Design for Your Family and Welcome
            </p>
            <p className="text-gray-900 font-semibold">
              Our Shop, 30% Offer All Stylish Kitchen Furniture
            </p>
            <button className="rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium border-yellow-500 bg-yellow-500 text-white">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-gray-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-White italic transition duration-300 group-hover:text-white ease">
                Purchase Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
