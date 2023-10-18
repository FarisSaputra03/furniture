"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
export default function Sale() {
  const [selectedTitle, setSelectedTitle] = useState("All Time");
  const [listFiltered, setListFiltered] = useState<any[]>([]);

  const listSale = [
    {
      img: "/img/best5.webp",
      title: "Modern Accent Chair",
      price: "$40.00",
      categori: "All Time",
    },
    {
      img: "/img/now5.webp",
      title: "Herman Seater Sofa",
      price: "$40.00",
      categori: "All Time",
    },
    {
      img: "/img/now.webp",
      title: "Reece Seater Sofa",
      price: "$40.00",
      categori: "All Time",
    },
    {
      img: "/img/now2.webp",
      title: "Round Swivel Chair",
      price: "$40.00",
      categori: "All Time",
    },
    {
      img: "/img/best5.webp",
      title: "Modern Accent Chair",
      price: "$40.00",
      categori: "This Year",
    },
    {
      img: "/img/now7.webp",
      title: "Wooden decorations",
      price: "$40.00",
      categori: "This Year",
    },
    {
      img: "/img/now6.webp",
      title: "Herman Arm Grey Chair",
      price: "$40.00",
      categori: "This Year",
    },
    {
      img: "/img/top3.webp",
      title: "Living & Bedroom Chair",
      price: "$40.00",
      categori: "This Year",
    },
    {
      img: "/img/new4.webp",
      title: "Elona beside grey table",
      price: "$40.00",
      categori: "This Month",
    },
    {
      img: "/img/new2.webp",
      title: "High quality vase bottle",
      price: "$40.00",
      categori: "This Month",
    },
    {
      img: "/img/new.webp",
      title: "Pendant Chandelier Light",
      price: "$40.00",
      categori: "This Month",
    },
    {
      img: "/img/new7.webp",
      title: "Simple minimal chair",
      price: "$40.00",
      categori: "This Month",
    },
  ];

  const filterProduk = (title: string) => {
    const filtered = listSale.filter((item) => item.categori === title);
    setListFiltered(filtered);
  };
  useEffect(() => {
    filterProduk(selectedTitle);
  }, []);
  return (
    <div className="">
      <div className="py-5">
        <div>
          <h1 className="text-2xl px-3 py-2 font-extrabold italic">
            # Sale Product
          </h1>
        </div>
        <nav
          className="-mb-0.5 flex justify-center  space-x-6"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            onClick={() => {
              setSelectedTitle("All Time");
              filterProduk("All Time");
              // setBakpiaKukus(false);
              // setBoluKukus(false);
            }}
            type="button"
            className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-sm hover:scale-125 transition duration-500 cursor-pointer ${
              selectedTitle == "All Time"
                ? "bg-white text-yellow-500"
                : "bg-white text-gray-500 hover:text-yellow-500"
            }  active`}
            id="horizontal-alignment-item-1"
            data-hs-tab="#horizontal-alignment-1"
            aria-controls="horizontal-alignment-1"
            role="tab"
          >
            All Time
          </button>
          <button
            onClick={() => {
              setSelectedTitle("This Year");
              filterProduk("This Year");
              // setBoluKukus(true);
              // setBakpiaKukus(true);
            }}
            type="button"
            className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-sm hover:scale-125 transition duration-500 cursor-pointer ${
              selectedTitle == "This Year"
                ? "bg-white text-yellow-500"
                : "bg-white text-gray-500 hover:text-yellow-500"
            }`}
            id="horizontal-alignment-item-2"
            data-hs-tab="#horizontal-alignment-2"
            aria-controls="horizontal-alignment-2"
            role="tab"
          >
            This Year
          </button>
          <button
            onClick={() => {
              setSelectedTitle("This Month");
              filterProduk("This Month");
            }}
            type="button"
            className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-sm hover:scale-125 transition duration-500 cursor-pointer ${
              selectedTitle == "This Month"
                ? "bg-white text-yellow-500"
                : "bg-white text-gray-500 hover:text-yellow-500"
            }`}
            id="horizontal-alignment-item-3"
            data-hs-tab="#horizontal-alignment-3"
            aria-controls="horizontal-alignment-3"
            role="tab"
          >
            This Month
          </button>
        </nav>
      </div>

      {/* mobile */}
      <div className="flex sm:hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          className="mySwiper"
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div>
            {listFiltered.map((data: any, index) => (
              <SwiperSlide key={index + 1} className="card hover:shadow flex ">
                <div className=" relative group rounded overflow-hidden">
                  <Image
                    width={500}
                    height={100}
                    src={data.img}
                    alt="Furniture"
                  />
                  <div className="opacity-0 gap-1 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl  text-black font-semibold">
                    <div className="py-2 px-2 bg-gray-500 rounded hover:bg-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="py-2 px-2 bg-gray-500 rounded hover:bg-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </div>
                    <div className="py-2 px-2 bg-gray-500 hover:bg-yellow-500 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div
                    onClick={() => {
                      window.location.href = data.href;
                    }}
                    className="font-bold text-gray-500 py-2 px-5"
                  >
                    {data.title}
                  </div>
                </div>
                <div className="text-center font-semibold text-yellow-500">
                  <p className="mt-1">{data.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>

      {/* desktop */}
      <div className="hidden sm:flex">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          className="mySwiper"
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <div>
            {listFiltered.map((data: any, index) => (
              <SwiperSlide key={index + 1} className="card hover:shadow flex ">
                <div className="relative group rounded overflow-hidden">
                  <Image
                    width={500}
                    height={100}
                    src={data.img}
                    alt="Furniture"
                  />
                  <div className="opacity-0 gap-1 group-hover:opacity-100 duration-300 absolute inset-x-0 bottom-0 flex justify-center items-end text-xl  text-black font-semibold">
                    <div className="py-2 px-2 bg-gray-500 rounded hover:bg-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="py-2 px-2 bg-gray-500 rounded hover:bg-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    </div>
                    <div className="py-2 px-2 bg-gray-500 hover:bg-yellow-500 rounded">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div
                    onClick={() => {
                      window.location.href = data.href;
                    }}
                    className="font-bold text-gray-500 py-2 px-5"
                  >
                    {data.title}
                  </div>
                </div>
                <div className="text-center font-semibold text-yellow-500">
                  <p className="mt-1">{data.price}</p>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}
