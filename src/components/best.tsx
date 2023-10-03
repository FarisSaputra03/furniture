import React from "react";
import Image from "next/image";
export default function Best() {
  return (
    <div className="p-10 ">

      {/* mobile */}
      <div className="relative sm:hidden flex w-full">
        <div className="flex justify-center flex-col gap-8">
          <div>
            <Image src="/img/kichen.webp" alt="" width={600} height={360} />
            <div className="absolute bottom-5 z-10 right-15 left-15 pb-44 pl-5 ">
              <p className="italic text-lg font-semibold">High-Quality</p>
              <p className=" text-lg font-semibold text-yellow-500">
                New Kitchen
              </p>
              <p className="text-lg font-semibold text-yellow-500">Furniture</p>
              <div className="">
                <button className="rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer  font-medium border-yellow-500 bg-yellow-500 text-white">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-gray-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-White italic transition duration-300 group-hover:text-white ease">
                    Shop Now
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image src="/img/bedroom.webp" alt="" width={600} height={360} />
            <div className="absolute bottom-5 z-10 right-21 left-21  pl-5">
              <p className="italic text-lg font-semibold">High-Quality</p>
              <p className="font-semibold text-yellow-500 text-lg">Bed Room</p>
              <p className="font-semibold text-yellow-500 text-lg">Furniture</p>
              <div className="">
                <button className="rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer  font-medium border-yellow-500 bg-yellow-500 text-white">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-gray-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-White italic transition duration-300 group-hover:text-white ease">
                    Shop Now
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* desktop */}
      <div className="relative hidden space-x-8 sm:flex w-full">
        <div className="flex justify-center gap-8">
          <div>
            <Image src="/img/kichen.webp" alt="" width={600} height={360} />
            <div className="absolute bottom-5 z-10 right-15 left-24 pb-8 ">
              <p className="italic text-lg font-semibold">High-Quality</p>
              <p className=" text-5xl font-semibold text-yellow-500">
                New Kitchen
              </p>
              <p className="text-5xl font-semibold text-yellow-500">
                Furniture
              </p>
              <div className="pt-5">
                <button className="rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer  font-medium border-yellow-500 bg-yellow-500 text-white">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-gray-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-White italic transition duration-300 group-hover:text-white ease">
                    Shop Now
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div>
            <Image src="/img/bedroom.webp" alt="" width={600} height={360} />
            <div className="absolute bottom-5 z-10 right-21 left-21 pb-8 pl-10">
              <p className="italic text-lg font-semibold">High-Quality</p>
              <p className="font-semibold text-yellow-500 text-5xl">Bed Room</p>
              <p className="font-semibold text-yellow-500 text-5xl">
                Furniture
              </p>
              <div className="pt-5">
                <button className="rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer  font-medium border-yellow-500 bg-yellow-500 text-white">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-gray-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className="relative text-White italic transition duration-300 group-hover:text-white ease">
                    Shop Now
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
