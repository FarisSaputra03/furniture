"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
export default function Colection() {
  const countdownDate = new Date("2024-12-31T23:59:59").getTime();
  const [count, setCount] = useState(countdownDate);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(countdownDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  const days = Math.floor(count / (1000 * 60 * 60 * 24));
  const hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((count % (1000 * 60)) / 1000);

  return (
    <div className="p-5 ">
      <div className="flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 flex flex-col md:items-start">
          <div className="flex gap-2">
            <h1 className="title-font text-3xl mb-4 font-medium text-gray-900">
              Chair Collection
            </h1>
            <p className="title-font text-3xl mb-4 font-bold text-yellow-400">
              50%
            </p>
            <p className="title-font text-3xl mb-4 font-bold text-gray-900">
              Off
            </p>
          </div>
          <div className="flex md:flex-col">
            <p className="font-size: 0.75rem w-[80%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing sed do eiusmol
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              mini veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip eao commodo consequat Duis aute irure.
            </p>
          </div>
          <div className="text-5xl text-center flex w-full items-center justify-start">
            <div className=" mx-1 p-2 text-black rounded-lg">
              <h1 className="font-mono leading-none">{days}</h1>
              <p className="font-mono uppercase text-base leading-none">Days</p>
            </div>
            <p className="text-2xl pb-3 text-black font-extrabold">:</p>
            <div className=" mx-1 p-2 text-black rounded-lg">
              <h1 className="font-mono leading-none">{hours}</h1>
              <p className="font-mono uppercase text-base leading-none">Hours</p>
            </div>
            <p className="text-2xl pb-3 text-black font-extrabold">:</p>
            <div className=" mx-1 p-2 text-black rounded-lg">
              <h1 className="font-mono leading-none">{minutes}</h1>
              <p className="font-mono uppercase text-base leading-none">
                Minutes
              </p>
            </div>
            <p className="text-2xl pb-3 text-black font-extrabold">:</p>
            <div className=" mx-1 p-2  text-black rounded-lg">
              <h1 className="font-mono leading-none">{seconds}</h1>
              <p className="font-mono uppercase text-base leading-none">
                Seconds
              </p>
            </div>
          </div>
          <div className="flex py-8">
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
    </div>
  );
}
