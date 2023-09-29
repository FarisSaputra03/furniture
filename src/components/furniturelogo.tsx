"use client";
import React from "react";
import Image from "next/image";
export default function Furniture_Logo() {
  const listIcon = [
    {
      img: "/img/brand-1.webp",
    },
    {
      img: "/img/brand-2.webp",
    },
    {
      img: "/img/brand-3.webp",
    },
    {
      img: "/img/brand-4.webp",
    },
    {
      img: "/img/brand-5.webp",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="grid grid-cols-2 md:grid-cols-5 py-5">
        {listIcon.map((data: any, index) => (
          <div key={index + 1} className="w-full gap-5 p-3">
            <div className="p-8 w-full">
              <div className=" px-4 py-6 rounded-lg">
                <Image width={300} height={118} src={data.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
