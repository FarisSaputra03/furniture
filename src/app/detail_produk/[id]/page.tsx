"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BiShuffle } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoDribbble } from "react-icons/bi";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import Link from "next/link";
import { useParams } from "next/navigation";
export default function Detail_Produk() {
  const params = useParams();
  const [selectProduk, setSelectProduk] = useState<any>(null);
  const [jumlahBarang, setJumlahBarang] = useState<number>(1);
  const listProduct = [
    {
      id: 1,
      img: "/img/product-01.webp",
      title: "Eelona beside grey table",
      price: "$40.00",
      categori: "All",
      href: "/detail_produk",
    },

    {
      id: 2,
      img: "/img/product-02.webp",
      title: "Simple minimal chair green",
      price: "$40.00",
      categori: "All",
      href: "/detail_produk",
    },

    {
      id: 3,
      img: "/img/product-03.webp",
      title: "Pendant Chandelier Light",
      price: "$40.00",
      categori: "All",
      href: "/detail_produk",
    },

    {
      id: 4,
      img: "/img/product-04.webp",
      title: "High quality vase bottle",
      price: "$40.00",
      categori: "All",
      href: "/detail_produk",
    },

    {
      id: 5,
      img: "/img/product-05.webp",
      title: "Living & Bedroom Chair",
      price: "$40.00",
      categori: "All",
      href: "/detail_produk",
    },

    {
      id: 6,
      img: "/img/product-06.webp",
      title: "Herman Arm Grey Chair",
      price: "$40.00",
      categori: "All",
      href: "/detail_produk",
    },

    {
      id: 7,
      img: "/img/product-08.webp",
      title: "Lace Bar Stool",
      price: "$40.00",
      categori: "All",
      href: "/detail_produk",
    },

    {
      id: 8,
      img: "/img/product-11.webp",
      title: "Herman Seater Sofa",
      price: "$40.00",
      categori: "All",
      href: "/detail_produk",
    },

    {
      id: 9,
      img: "/img/now.webp",
      title: "Reece Seater Sofa",
      price: "$40.00",
      categori: "Just Now",

      href: "/detail_produk",
    },
    {
      id: 10,
      img: "/img/now2.webp",
      title: "Round Swivel Chair",
      price: "$40.00",
      categori: "Just Now",

      href: "/detail_produk",
    },
    {
      id: 11,
      img: "/img/now3.webp",
      title: "Lace Bar Stool",
      price: "$40.00",
      categori: "Just Now",

      href: "/detail_produk",
    },
    {
      id: 12,
      img: "/img/now4.webp",
      title: "Modern Accent Chair",
      price: "$40.00",
      categori: "Just Now",

      href: "/detail_produk",
    },
    {
      id: 13,
      img: "/img/now5.webp",
      title: "Herman Seater Sofa",
      price: "$40.00",
      categori: "Just Now",

      href: "/detail_produk",
    },
    {
      id: 14,
      img: "/img/now6.webp",
      title: "Herman Arm Grey Chair",
      price: "$40.00",
      categori: "Just Now",

      href: "/detail_produk",
    },
    {
      id: 15,
      img: "/img/now7.webp",
      title: "Wooden decorations",
      price: "$40.00",
      categori: "Just Now",

      href: "/detail_produk",
    },
    {
      id: 16,
      img: "/img/now8.webp",
      title: "Simple minimal Chair",
      price: "$40.00",
      categori: "Just Now",

      href: "/detail_produk",
    },
    {
      id: 17,
      img: "/img/new.webp",
      title: "Pendant Chandelier Light",
      price: "$40.00",
      categori: "New Arrival",
      href: "/detail_produk",
    },
    {
      id: 18,
      img: "/img/new2.webp",
      title: "High quality vase bottle",
      price: "$40.00",
      categori: "New Arrival",
      href: "/detail_produk",
    },
    {
      id: 19,
      img: "/img/new3.webp",
      title: "Herman Seater Sofa",
      price: "$40.00",
      categori: "New Arrival",
      href: "/detail_produk",
    },
    {
      id: 20,
      img: "/img/new4.webp",
      title: "Elona bedside grey table",
      price: "$40.00",
      categori: "New Arrival",
      href: "/detail_produk",
    },
    {
      id: 21,
      img: "/img/new5.webp",
      title: "Wooden decorations",
      price: "$40.00",
      categori: "New Arrival",
      href: "/detail_produk",
    },
    {
      id: 22,
      img: "/img/new6.webp",
      title: "Reece Seater Sofa",
      price: "$40.00",
      categori: "New Arrival",
      href: "/detail_produk",
    },
    {
      id: 23,
      img: "/img/new7.webp",
      title: "Simple minimal Chair",
      price: "$40.00",
      categori: "New Arrival",
      href: "/detail_produk",
    },
    {
      id: 24,
      img: "/img/new8.webp",
      title: "Wooden decorations",
      price: "$40.00",
      categori: "New Arrival",
      href: "/detail_produk",
    },
    {
      id: 25,
      img: "/img/top.webp",
      title: "Pendant Chandelier Light",
      price: "$40.00",
      categori: "Top Seals",

      href: "/detail_produk",
    },
    {
      id: 26,
      img: "/img/top2.webp",
      title: "Simple minimal Chair",
      price: "$40.00",
      categori: "Top Seals",

      href: "/detail_produk",
    },
    {
      id: 27,
      img: "/img/top3.webp",
      title: "Living & Bedroom Chair",
      price: "$40.00",
      categori: "Top Seals",

      href: "/detail_produk",
    },
    {
      id: 28,
      img: "/img/top4.webp",
      title: "High quality vase bottle",
      price: "$40.00",
      categori: "Top Seals",

      href: "/detail_produk",
    },
    {
      id: 29,
      img: "/img/top5.webp",
      title: "Round Swivel Chair",
      price: "$40.00",
      categori: "Top Seals",

      href: "/detail_produk",
    },
    {
      id: 30,
      img: "/img/top6.webp",
      title: "Lace Bar Stool",
      price: "$40.00",
      categori: "Top Seals",

      href: "/detail_produk",
    },
    {
      id: 31,
      img: "/img/top7.webp",
      title: "Living & Bedroom Chair",
      price: "$40.00",
      categori: "Top Seals",

      href: "/detail_produk",
    },
    {
      id: 32,
      img: "/img/top8.webp",
      title: "Wooden decorations",
      price: "$40.00",
      categori: "Top Seals",

      href: "/detail_produk",
    },
    {
      id: 33,
      img: "/img/best.webp",
      title: "Pendant Chandelier Light",
      price: "$40.00",
      categori: "Best Rating",
      href: "/detail_produk",
    },
    {
      id: 34,
      img: "/img/best2.webp",
      title: "Simple minimal Chair",
      price: "$40.00",
      categori: "Best Rating",
      href: "/detail_produk",
    },
    {
      id: 35,
      img: "/img/best3.webp",
      title: "Reece Seater Sofa",
      price: "$40.00",
      categori: "Best Rating",
      href: "/detail_produk",
    },
    {
      id: 36,
      img: "/img/best4.webp",
      title: "High quality vase bottle",
      price: "$40.00",
      categori: "Best Rating",
      href: "/detail_produk",
    },
    {
      id: 37,
      img: "/img/best5.webp",
      title: "Modern Accent Chair",
      price: "$40.00",
      categori: "Best Rating",
      href: "/detail_produk",
    },
    {
      id: 38,
      img: "/img/best6.webp",
      title: "Round Swivel Chair",
      price: "$40.00",
      categori: "Best Rating",
      href: "/detail_produk",
    },
    {
      id: 39,
      img: "/img/best7.webp",
      title: "Lace Bar Stool",
      price: "$40.00",
      categori: "Best Rating",
      href: "/detail_produk",
    },
    {
      id: 40,
      img: "/img/best8.webp",
      title: "Elona bedside grey table",
      price: "$40.00",
      categori: "Best Rating",
      href: "/detail_produk",
    },
  ];

  const filterProduk = (title: any) => {
    const filtered = listProduct.filter((item) => item.id.toString() === title);
    setSelectProduk(filtered[0]);
    console.log("chek");
    console.log(filtered);
  };
  useEffect(() => {
    filterProduk(params.id);
  }, []);
  console.log("check");
  console.log(params.id);
  return (
    <div>
      <div className="bg-white p-10"></div>
      {
        <div className="flex flex-col items-center justify-between">
          <div className="relative w-full">
            <div className="absolute -z-10 w-full">
              <Image
                src="/img/detail.jpg"
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
                <button className="rounded-lg px-3.5 py-1 m-1 overflow-hidden relative group cursor-pointer font-medium border-yellow-500 bg-yellow-500 text-white">
                  <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-gray-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                  <span className=" text-base text-White italic transition duration-300 group-hover:text-white ease">
                    Purchase Now
                  </span>
                </button>
              </div>
            </div>

            {/* desktop */}
            <div className="hidden sm:flex">
              <div className="max-w-screen-lg m-auto h-[70vh] py-5 my-60 text-center text-2xl rounded-2xl">
                <h1 className="text-7xl text-white italic font-bold">
                  Product Details
                </h1>
                <div className="flex gap-3 pt-5 text-base">
                  <Link href="/">
                    <p className="text-gray-900 hover:text-yellow-500">Home</p>
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 pb-2 text-white font-semibold"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>

                  <p className="text-white">Product Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {selectProduk !== null ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <Image width={400} height={400} src={selectProduk.img} alt="" />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {selectProduk.title}
                </h1>
                <h2 className="text-yellow-500 text-3xl title-font font-medium mb-1">
                  {selectProduk.price}
                </h2>
                <div className="flex mb-4">
                  <span className="flex items-center gap-4">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 text-gray-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 hover:text-yellow-500 ml-3">
                      ( 1 Customer Review )
                    </span>
                  </span>
                </div>
                <div className="flex py-5 gap-4">
                  <span className="mr-3">Color:</span>
                  <button className="border-2 border-gray-300 rounded w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded w-6 h-6 focus:outline-none"></button>
                </div>
                <p className="leading-relaxed text-sm">
                  Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do
                  eiusmod temporf incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis tyu nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate.
                </p>
                <div className="flex mt-6 gap-2 items-center pb-5 mb-5">
                  <div className="flex justify-between gap-5 bg-gray-600 text-white py-2 px-4 rounded">
                    <div
                      onClick={() => {
                        if (jumlahBarang > 1) {
                          setJumlahBarang(jumlahBarang - 1);
                        }
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M18 12H6"
                        />
                      </svg>
                    </div>
                    <p>{jumlahBarang}</p>
                    <div
                      onClick={() => {
                        setJumlahBarang(jumlahBarang + 1);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <button className="rounded px-4 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium border-gray-600 bg-gray-600 text-white">
                      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20  bg-yellow-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                      <span className="relative text-White italic transition duration-300 group-hover:text-white ease">
                        Add To Cart
                      </span>
                    </button>
                  </div>
                  <div className="py-2 px-4 rounded bg-gray-600 hover:bg-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </div>
                  <div className="py-2 px-4 rounded bg-gray-600 hover:bg-yellow-500 text-white">
                    <BiShuffle size="1.5em" />
                  </div>
                </div>
                <div className="">
                  <div className="flex gap-2 py-1">
                    <p>Sku:</p>
                    <p>Ch-256xl</p>
                  </div>
                  <div className="flex gap-2 py-1">
                    <p>Categories:</p>
                    <p>Office, Home</p>
                  </div>
                  <div className="flex gap-2 py-1">
                    <p>Tag:</p>
                    <p>Furniture</p>
                  </div>
                  <div className="flex gap-4 py-1">
                    <p>Share</p>
                    <p>
                      <BiLogoFacebook size="1.5em" />
                    </p>
                    <p>
                      <BiLogoDribbble size="1.5em" />
                    </p>
                    <p>
                      <BiLogoPinterestAlt size="1.5em" />
                    </p>
                    <p>
                      <BiLogoTwitter size="1.5em" />
                    </p>
                    <p>
                      <BiLogoLinkedinSquare size="1.5em" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
