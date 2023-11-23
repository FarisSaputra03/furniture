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

          {/* mobile */}
          <div className="flex sm:hidden">
            <div className="max-w-screen-lg m-auto h-[50vh] py-5 my-10 text-center text-xl rounded-2xl">
              <h1 className="text-3xl text-white italic font-bold">
                Stylish Kitchen Furniture
              </h1>
              <p className="text-gray-900 text-xs font-semibold">
                Unique Furniture Style Design for Your Family and Welcome
              </p>
              <p className="text-gray-900 text-xs font-semibold">
                Our Shop, 30% Offer All Stylish Kitchen Furniture
              </p>
              <div className="animate-bounce animate-infinite animate-ease-linear pt-5">
                <button className="rounded-lg px-3.5 py-1 m-1 overflow-hidden relative group cursor-pointer font-medium border-yellow-500 bg-yellow-500 text-white">
                  <span className="absolute w-64 h-0 text-white transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-gray-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className=" text-base text-white italic transition duration-300 ease">
                    Purchase Now
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* desktop */}
          <div className="hidden sm:flex">
            <div className="max-w-screen-lg m-auto h-[70vh] py-5 my-96 text-center text-2xl rounded-2xl">
              <h1 className="text-7xl text-white italic font-bold">
                Stylish Kitchen Furniture
              </h1>
              <p className="text-black font-semibold">
                Unique Furniture Style Design for Your Family and Welcome
              </p>
              <p className="text-black font-semibold">
                Our Shop, 30% Offer All Stylish Kitchen Furniture
              </p>
              <div className="animate-bounce animate-infinite animate-ease-linear pt-5">
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
      </div>
    </div>
  );
}
