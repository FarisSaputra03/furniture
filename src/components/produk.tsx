"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Produk() {
  const [selectedTitle, setSelectedTitle] = useState("All");
  const [listFiltered, setListFiltered] = useState<any[]>([]);

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

  const filterProduk = (title: string) => {
    const filtered = listProduct.filter((item) => item.categori === title);
    setListFiltered(filtered);
  };
  useEffect(() => {
    filterProduk(selectedTitle);
  }, []);
  return (
    <div className="">
      <div className="flex  flex-wrap w-full mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl italic font-bold title-font mb-2 text-gray-900">
          New Product
        </h1>
      </div>
      <div className="pb-5">
        <nav
          className="-mb-0.5 flex justify-center  space-x-6"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            onClick={() => {
              setSelectedTitle("All");
              filterProduk("All");
              // setBakpiaKukus(false);
              // setBoluKukus(false);
            }}
            type="button"
            className={`font-bold py-2 rounded-full items-center gap-2 text-xs  ${
              selectedTitle == "All"
                ? "bg-white text-yellow-500"
                : "bg-white text-gray-500 hover:text-yellow-500"
            }  active`}
            id="horizontal-alignment-item-1"
            data-hs-tab="#horizontal-alignment-1"
            aria-controls="horizontal-alignment-1"
            role="tab"
          >
            All
          </button>
          <button
            onClick={() => {
              setSelectedTitle("Just Now");
              filterProduk("Just Now");
              // setBoluKukus(true);
              // setBakpiaKukus(true);
            }}
            type="button"
            className={`font-bold py-2 rounded-full items-center gap-2 text-xs ${
              selectedTitle == "Just Now"
                ? "bg-white text-yellow-500"
                : "bg-white text-gray-500 hover:text-yellow-500"
            }`}
            id="horizontal-alignment-item-2"
            data-hs-tab="#horizontal-alignment-2"
            aria-controls="horizontal-alignment-2"
            role="tab"
          >
            Just Now
          </button>
          <button
            onClick={() => {
              setSelectedTitle("New Arrival");
              filterProduk("New Arrival");
            }}
            type="button"
            className={`font-bold py-2 rounded-full items-center gap-2 text-xs ${
              selectedTitle == "New Arrival"
                ? "bg-white text-yellow-500"
                : "bg-white text-gray-500 hover:text-yellow-500"
            }`}
            id="horizontal-alignment-item-3"
            data-hs-tab="#horizontal-alignment-3"
            aria-controls="horizontal-alignment-3"
            role="tab"
          >
            New Arrival
          </button>
          <button
            onClick={() => {
              setSelectedTitle("Top Seals");
              filterProduk("Top Seals");
            }}
            type="button"
            className={`font-bold py-2 rounded-full items-center gap-2 text-xs ${
              selectedTitle == "Top Seals"
                ? "bg-white text-yellow-500"
                : "bg-white text-gray-500 hover:text-yellow-500"
            }`}
            id="horizontal-alignment-item-3"
            data-hs-tab="#horizontal-alignment-3"
            aria-controls="horizontal-alignment-3"
            role="tab"
          >
            Top Seals
          </button>
          <button
            onClick={() => {
              setSelectedTitle("Best Rating");
              filterProduk("Best Rating");
            }}
            type="button"
            className={`font-bold py-2 rounded-full items-center gap-2 text-xs ${
              selectedTitle == "Best Rating"
                ? "bg-white text-yellow-500"
                : "bg-white text-gray-500 hover:text-yellow-500"
            }`}
            id="horizontal-alignment-item-3"
            data-hs-tab="#horizontal-alignment-3"
            aria-controls="horizontal-alignment-3"
            role="tab"
          >
            Best Rating
          </button>
        </nav>
      </div>

      <div>
        <section className="container  px-5 py-24 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {listFiltered.map((data: any, index) => (
                <div key={index + 1} className="">
                  <Link href={`/detail_produk/${data.id}`}>
                  <div className=" w-full rounded bg-gray-100">
                    <div className=" relative group rounded overflow-hidden">
                      <Image width={420} height={260} src={data.img} alt="" />
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
                    <div className="mt-4 flex flex-col space-y-1">
                      <div className="text-center">
                        <h2 className="text-gray-900 title-font text-xs font-medium">
                          {data.title}
                        </h2>
                      </div>
                      <div className="text-center font-semibold text-yellow-500">
                        <p className="mt-1">{data.price}</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
