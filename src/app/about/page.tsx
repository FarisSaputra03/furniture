"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState } from "react";
import { MdOutlineChair, MdOutlinePayments } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function About() {
  const listSelect = [
    {
      icon: "21",
      desc: "+",
      title: "Years of Exprience",
    },
    {
      icon: "30",
      desc: "K",
      title: "Happy Customers",
    },
    {
      icon: "15",
      desc: "+",
      title: "Award Winner",
    },
    {
      icon: "100",
      desc: "%",
      title: "Online Support",
    },
  ];
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
                  About Us
                </h1>
                <div className="flex gap-3 text-base">
                  <Link href="/">
                    <p className="text-gray-900 font-semibold hover:text-yellow-500">
                      Home
                    </p>
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

                  <p className="text-gray-600 font-semibold">About</p>
                </div>
              </div>
            </div>

            {/* desktop */}
            <div className="hidden sm:flex">
              <div className="max-w-screen-lg m-auto h-[70vh] py-5 my-60 text-center text-2xl rounded-2xl">
                <h1 className="text-7xl text-white italic font-bold">
                  About Us
                </h1>
                <div className="flex gap-3 pt-5 text-base">
                  <Link href="/">
                    <p className="text-gray-900 font-semibold hover:text-yellow-500">
                      Home
                    </p>
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

                  <p className="text-gray-600 font-semibold">About</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
      {
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className=" w-full mx-auto text-center">
              <h2 className="text-sm title-font text-gray-500 font-semibold">
                OUR HISTORY
              </h2>
              <h1 className="text-black italic py-4 text-5xl font-semibold">
                FURBAR FURNITURE SHOP
              </h1>
              <p className="leading-relaxed text-lg">
                Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nullaotho pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum. Sed ut perspiciatis unde omnis iste natusxcl error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dictapteo sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed
                quia consequuntur magni dolores eos qui ratione voluptatem drt
                sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore magnam
                aliquam quaerat voluptatem.
              </p>
              <div className="flex justify-center pt-8">
                <span className="inline-block h-1 w-full rounded bg-yellow-400 mt-16 "></span>
                <div className="text-yellow-500 flex">
                  <MdOutlineChair size="8em" />
                </div>
                <span className="inline-block h-1 w-full rounded bg-yellow-400 mt-16"></span>
              </div>
            </div>
          </div>
        </section>
      }
      {
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-20 mx-auto flex flex-wrap">
            <div className="">
              <div className="flex gap-10 justify-center">
                <div>
                  <Image
                    src="/img/image-3.webp"
                    alt=""
                    width={600}
                    height={200}
                  />
                </div>
                <div>
                  <Image
                    src="/img/image-4.webp"
                    alt=""
                    width={600}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      {
        <div>
          {/* mobile */}
          <div className="flex justify-center sm:hidden flex-wrap  text-center">
            {listSelect.map((data: any, index) => (
              <div key={index + 1} className="p-4">
                <div className="p-4 ">
                  <div className="border-2 border-yellow-200 px-4 py-6 rounded-lg">
                    <div className="inline-flex items-center">{data.icon}</div>
                    <h2 className="title-font font-medium text-sm text-black">
                      {data.title}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* desktop */}
          <div className="container hidden sm:flex px-5 py-10 mx-auto justify-center">
            <div className="grid grid-cols-3 md:grid-cols-1">
              <div className="flex flex-wrap justify-center text-center">
                {listSelect.map((data: any, index) => (
                  <div key={index + 1} className="p-4">
                    <div className="">
                      <div className="border-2 border-yellow-200 px-8 py-6 rounded-lg">
                        <div className="flex justify-center">
                          <div className="text-5xl text-yellow-400 items-center">
                            {data.icon}
                          </div>
                          <p className="pt-5 text-lg font-bold text-yellow-400">
                            {data.desc}
                          </p>
                        </div>
                        <h2 className="title-font font-medium text-gray-400">
                          {data.title}
                        </h2>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
      {
        <section className="bg-gray-300 body-font">
          <div className="container px-5 py-24 mx-auto">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do elusmod tempor incididunt ut labore dolorelo magna
                    aliqua, Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                  <div className="flex justify-center py-5">
                    <img
                      className="h-16 w-16 object-cover rounded-full"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                      alt="Current profile photo"
                    />
                  </div>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HOLDEN CAULFIELD
                  </h2>
                  <p className="text-gray-500">Senior Product Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do elusmod tempor incididunt ut labore dolorelo magna
                    aliqua, Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                  <div className="flex justify-center py-5">
                    <img
                      className="h-16 w-16 object-cover rounded-full"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                      alt="Current profile photo"
                    />
                  </div>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HOLDEN CAULFIELD
                  </h2>
                  <p className="text-gray-500">Senior Product Designer</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block w-8 h-8 text-gray-400 mb-8"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do elusmod tempor incididunt ut labore dolorelo magna
                    aliqua, Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit.
                  </p>
                  <div className="flex justify-center py-5">
                    <img
                      className="h-16 w-16 object-cover rounded-full"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                      alt="Current profile photo"
                    />
                  </div>
                  <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    HOLDEN CAULFIELD
                  </h2>
                  <p className="text-gray-500">Senior Product Designer</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      }
      {
        <div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-lg font-medium title-font mb-4 text-gray-400 tracking-widest">
                {" "}
                OUR TEAM
              </h2>
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
                MEET OUR TEAM
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                havent heard of them.
              </p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
