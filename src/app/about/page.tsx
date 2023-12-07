"use client";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useRef, useState } from "react";
import { MdOutlineChair, MdOutlinePayments } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Pagination } from "swiper/modules";
import { useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

function Section({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function About() {
  const count = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const count4 = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const rounded2 = useTransform(count2, Math.round);
  const rounded3 = useTransform(count3, Math.round);
  const rounded4 = useTransform(count4, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 10 });
    const animation2 = animate(count2, 15, { duration: 10 });
    const animation3 = animate(count3, 30, { duration: 10 });
    const animation4 = animate(count4, 21, { duration: 10 });

    return () => {
      animation.stop;
      animation2.stop;
      animation3.stop;
      animation4.stop;
    };
  }, []);

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
  const listTeam = [
    {
      img: "/img/team-1.webp",
      name: "MAKIYAH YEAGER",
    },
    {
      img: "/img/team-2.webp",
      name: "TAELYNN THORPE",
    },
    {
      img: "/img/team-3.webp",
      name: "SARA KOIVISTO",
    },
  ];
  const listSelect = [
    {
      icon: <motion.div>{rounded4}</motion.div>,
      desc: "+",
      title: "Years of Exprience",
    },
    {
      icon: <motion.div>{rounded3}</motion.div>,
      desc: "K",
      title: "Happy Customers",
    },
    {
      icon: <motion.div>{rounded2}</motion.div>,
      desc: "+",
      title: "Award Winner",
    },
    {
      icon: <motion.div>{rounded}</motion.div>,
      desc: "%",
      title: "Online Support",
    },
  ];
  return (
    <div>
      <div className="bg-white p-10"></div>
      {
        <Section>
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
                      <p className="text-gray-900 font-semibold hover:text-yellow-500 ">
                        Home
                      </p>
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 pb-2 text-white font-semibold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                      <p className="text-gray-900 font-semibold hover:text-yellow-500 hover:scale-125 transition duration-500 cursor-pointer">
                        Home
                      </p>
                    </Link>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-8 h-8 pb-2 text-white font-semibold"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>

                    <p className="text-gray-600 font-semibold">About</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      }
      {
        <Section>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto">
              <div className=" w-full mx-auto text-center">
                <h2 className="text-sm title-font text-gray-500 font-semibold">
                  OUR HISTORY
                </h2>
                <h1 className="text-black justify-center italic flex sm:hidden py-4 text-2xl font-semibold">
                  FURBAR FURNITURE SHOP
                </h1>
                <h1 className="text-black hidden justify-center sm:flex italic py-4 text-5xl font-semibold">
                  FURBAR FURNITURE SHOP
                </h1>
                <p className="leading-relaxed text-lg">
                  Lorem ipsum dolor sit amet, consectet adipisicing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nullaotho pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natusxcl error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dictapteo
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem drt sequi nesciunt. Neque
                  porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                  consectetur, adipisci velit, sed quia non numquam eius modi
                  tempora incidunt ut labore et dolore magnam aliquam quaerat
                  voluptatem.
                </p>
                <div className="flex justify-center pt-8">
                  <span className="inline-block h-1 w-full rounded bg-yellow-400 mt-16 "></span>
                  <div className="text-yellow-500 pt-5 flex sm:hidden">
                    <MdOutlineChair size="5em" />
                  </div>
                  <div className="text-yellow-500 sm:flex hidden">
                    <MdOutlineChair size="8em" />
                  </div>
                  <span className="inline-block h-1 w-full rounded bg-yellow-400 mt-16"></span>
                </div>
              </div>
            </div>
          </section>
        </Section>
      }
      {
        <Section>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto flex flex-wrap">
              <div className="flex  justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
        </Section>
      }
      {
        <Section>
          <div>
            {/* {/* mobile */}
            <div className=" px-5 py-10 mx-auto sm:hidden flex  justify-center">
              <div className="flex flex-wrap justify-center text-center">
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {listSelect.map((data: any, index) => (
                    <div key={index + 1} className="p-4">
                      <div className="">
                        <div className="border-2 border-yellow-200 px-8 py-6 rounded-lg">
                          <div className="flex justify-center">
                            <div className="text-5xl font-extrabold text-yellow-400 items-center">
                              {data.icon}
                            </div>
                            <p className="pt-5 text-lg font-bold text-yellow-400">
                              {data.desc}
                            </p>
                          </div>
                          <h2 className=" text-xs font-medium text-gray-400">
                            {data.title}
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* desktop */}
            <div className=" px-5 py-10 hidden sm:flex mx-auto justify-center">
              <div className="flex flex-wrap justify-center text-center">
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {listSelect.map((data: any, index) => (
                    <div key={index + 1} className="p-4">
                      <div className="">
                        <div className="border-2 border-yellow-200 px-8 py-6 rounded-lg">
                          <div className="flex justify-center">
                            <div className="text-5xl font-extrabold text-yellow-400 items-center">
                              {data.icon}
                            </div>
                            <p className="pt-5 text-lg font-bold text-yellow-400">
                              {data.desc}
                            </p>
                          </div>
                          <h2 className=" text-xs font-medium text-gray-400">
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
        </Section>
      }
      {
        <Section>
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
        </Section>
      }
      {
        <Section>
          <div>
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h2 className="text-lg font-medium title-font mb-4 text-gray-400 tracking-widest">
                  {" "}
                  OUR TEAM
                </h2>
                <h1 className="text-4xl font-medium title-font mb-4 text-gray-900 tracking-widest">
                  MEET OUR TEAM
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3">
                {listTeam.map((data: any, index) => (
                  <div key={index + 1} className="flex justify-center">
                    <div className="p-2">
                      <Image
                        className="hover:scale-105 transition duration-500 cursor-pointer object-cover"
                        height={500}
                        width={400}
                        src={data.img}
                        alt="team"
                      />
                      <div className="flex justify-center pt-8">
                        <h2 className="text-black font-semibold text-xl">
                          {data.name}
                        </h2>
                      </div>
                      <div className="flex justify-center py-3">
                        <p className="text-gray-500 font-semibold text-lg">
                          CUSTOMER
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>
      }
      {
        <Section>
          <div>
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
          </div>
        </Section>
      }
    </div>
  );
}
