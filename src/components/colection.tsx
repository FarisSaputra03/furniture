import React from "react";
import Image from "next/image";
export default function Colection() {
  return (
    <section className="p-10 bg-gray-100 ">
      <div className="container  mx-auto flex px-5py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex gap-2">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Chair Collection
            </h1>
            <p className="title-font sm:text-4xl text-3xl mb-4 font-bold text-yellow-400">
              50%
            </p>
            <p className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
              Off
            </p>
          </div>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmol
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            eao commodo consequat Duis aute irure.
          </p>
          <div>
            <div
              className="flex items-center justify-center"
              x-data="beer()"
              x-init="start()"
            >
              <div>
                <div className="text-6xl text-center flex w-full items-center justify-center">
                  <div className="w-24 mx-1 p-2 text-black rounded-lg">
                    <div className="font-mono leading-none" x-text="days">
                      0
                    </div>
                    <div className="font-mono uppercase text-sm leading-none">
                      Days
                    </div>
                  </div>
                  <div className="text-2xl mx-1 text-black font-extrabold">:</div>
                  <div className="w-24 mx-1 p-2 text-black rounded-lg">
                    <div className="font-mono leading-none" x-text="hours">
                      00
                    </div>
                    <div className="font-mono uppercase text-sm leading-none">
                      Hours
                    </div>
                  </div>
                  <div className="text-2xl mx-1 text-black font-extrabold">:</div>
                  <div className="w-24 mx-1 p-2 text-black rounded-lg">
                    <div className="font-mono leading-none" x-text="minutes">
                      00
                    </div>
                    <div className="font-mono uppercase text-sm leading-none">
                      Minutes
                    </div>
                  </div>
                  <div className="text-2xl mx-1 text-black font-extrabold">:</div>
                  <div className="w-24 mx-1 p-2  text-black rounded-lg">
                    <div className="font-mono leading-none" x-text="seconds">
                      00
                    </div>
                    <div className="font-mono uppercase text-sm leading-none">
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-8 justify-center">
          <button className="rounded-lg px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium border-yellow-500 bg-yellow-500 text-white">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-gray-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-White italic transition duration-300 group-hover:text-white ease">
                Shop Now
              </span>
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image width={720} height={600} src="/img/new5.webp" alt="" />
        </div>
      </div>
    </section>
  );
}