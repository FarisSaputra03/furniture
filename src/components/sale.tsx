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
      <div className="pt-10">
        <div>
          <h1 className="text-2xl px-3 py-2 font-extrabold italic"># Sale Product</h1>
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
            className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-sm  ${
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
            className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-sm ${
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
            className={`font-bold px-3 py-2 rounded-full items-center gap-2 text-sm ${
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
                <Image
                  width={500}
                  height={100}
                  src={data.img}
                  alt="Furniture"
                />
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
                <Image
                  width={500}
                  height={100}
                  src={data.img}
                  alt="Furniture"
                />
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
