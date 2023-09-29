"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
export default function Produk() {
  const [selectedTitle, setSelectedTitle] = useState("All");
  const [listFiltered, setListFiltered] = useState<any[]>([]);

  const listProduct = [
    {
      img: "/img/product-01.webp",
      title: "Eelona beside grey table",
      price: "$40.00",
      categori: "All",
    },
    {
      img: "/img/product-02.webp",
      title: "Simple minimal chair green",
      price: "$40.00",
      categori: "All",
    },
    {
      img: "/img/product-03.webp",
      title: "Pendant Chandelier Light",
      price: "$40.00",
      categori: "All",
    },
    {
      img: "/img/product-04.webp",
      title: "High quality vase bottle",
      price: "$40.00",
      categori: "All",
    },
    {
        img: "/img/product-05.webp",
        title: "Living & Bedroom Chair",
        price: "$40.00",
        categori: "All",
      },
      {
        img: "/img/product-06.webp",
        title: "Herman Arm Grey Chair",
        price: "$40.00",
        categori: "All",
      },
      {
        img: "/img/product-08.webp",
        title: "Lace Bar Stool",
        price: "$40.00",
        categori: "All",
      },
      {
        img: "/img/product-11.webp",
        title: "Herman Seater Sofa",
        price: "$40.00",
        categori: "All",
      },
      {
        img: "/img/now.webp",
        title: "Reece Seater Sofa",
        price: "$40.00",
        categori: "Just Now",
      },
      {
        img: "/img/now2.webp",
        title: "Round Swivel Chair",
        price: "$40.00",
        categori: "Just Now",
      },
      {
        img: "/img/now3.webp",
        title: "Lace Bar Stool",
        price: "$40.00",
        categori: "Just Now",
      },
      {
        img: "/img/now4.webp",
        title: "Modern Accent Chair",
        price: "$40.00",
        categori: "Just Now",
      },
      {
        img: "/img/now5.webp",
        title: "Herman Seater Sofa",
        price: "$40.00",
        categori: "Just Now",
      },
      {
        img: "/img/now6.webp",
        title: "Herman Arm Grey Chair",
        price: "$40.00",
        categori: "Just Now",
      },
      {
        img: "/img/now7.webp",
        title: "Wooden decorations",
        price: "$40.00",
        categori: "Just Now",
      },
      {
        img: "/img/now8.webp",
        title: "Simple minimal Chair",
        price: "$40.00",
        categori: "Just Now",
      },
      {
        img: "/img/new.webp",
        title: "Pendant Chandelier Light",
        price: "$40.00",
        categori: "New Arrival",
      },
      {
        img: "/img/new2.webp",
        title: "High quality vase bottle",
        price: "$40.00",
        categori: "New Arrival",
      },
      {
        img: "/img/new3.webp",
        title: "Herman Seater Sofa",
        price: "$40.00",
        categori: "New Arrival",
      },
      {
        img: "/img/new4.webp",
        title: "Elona bedside grey table",
        price: "$40.00",
        categori: "New Arrival",
      },
      {
        img: "/img/new5.webp",
        title: "Wooden decorations",
        price: "$40.00",
        categori: "New Arrival",
      },
      {
        img: "/img/new6.webp",
        title: "Reece Seater Sofa",
        price: "$40.00",
        categori: "New Arrival",
      },
      {
        img: "/img/new7.webp",
        title: "Simple minimal Chair",
        price: "$40.00",
        categori: "New Arrival",
      },
      {
        img: "/img/new8.webp",
        title: "Wooden decorations",
        price: "$40.00",
        categori: "New Arrival",
      },
      {
        img: "/img/top.webp",
        title: "Pendant Chandelier Light",
        price: "$40.00",
        categori: "Top Seals",
      },
      {
        img: "/img/top2.webp",
        title: "Simple minimal Chair",
        price: "$40.00",
        categori: "Top Seals",
      },
      {
        img: "/img/top3.webp",
        title: "Living & Bedroom Chair",
        price: "$40.00",
        categori: "Top Seals",
      },
      {
        img: "/img/top4.webp",
        title: "High quality vase bottle",
        price: "$40.00",
        categori: "Top Seals",
      },
      {
        img: "/img/top5.webp",
        title: "Round Swivel Chair",
        price: "$40.00",
        categori: "Top Seals",
      },
      {
        img: "/img/top6.webp",
        title: "Lace Bar Stool",
        price: "$40.00",
        categori: "Top Seals",
      },
      {
        img: "/img/top7.webp",
        title: "Living & Bedroom Chair",
        price: "$40.00",
        categori: "Top Seals",
      },
      {
        img: "/img/top8.webp",
        title: "Wooden decorations",
        price: "$40.00",
        categori: "Top Seals",
      },
      {
        img: "/img/best.webp",
        title: "Pendant Chandelier Light",
        price: "$40.00",
        categori: "Best Rating",
      },
      {
        img: "/img/best2.webp",
        title: "Simple minimal Chair",
        price: "$40.00",
        categori: "Best Rating",
      },
      {
        img: "/img/best3.webp",
        title: "Reece Seater Sofa",
        price: "$40.00",
        categori: "Best Rating",
      },
      {
        img: "/img/best4.webp",
        title: "High quality vase bottle",
        price: "$40.00",
        categori: "Best Rating",
      },
      {
        img: "/img/best5.webp",
        title: "Modern Accent Chair",
        price: "$40.00",
        categori: "Best Rating",
      },
      {
        img: "/img/best6.webp",
        title: "Round Swivel Chair",
        price: "$40.00",
        categori: "Best Rating",
      },
      {
        img: "/img/best7.webp",
        title: "Lace Bar Stool",
        price: "$40.00",
        categori: "Best Rating",
      },
      {
        img: "/img/best8.webp",
        title: "Elona bedside grey table",
        price: "$40.00",
        categori: "Best Rating",
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
                <div className=" w-full rounded bg-gray-100">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <Image width={420} height={260} src={data.img} alt="" />
                  </a>
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
