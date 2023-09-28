import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";
import Image from "next/image";
export default function Footer1() {
  return (
    <footer className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path
              fill-rule="evenodd"
              d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
              clip-rule="evenodd"
            />
          </svg>

          <span className="ml-3 text-xl">Furniture</span>
        </a>
        <div className="px-8 flex">
          <RiCustomerService2Fill size="3.5rem" />
          <div className="px-4">
            <p className="text-black font-semibold italic">Call Us:</p>
            <div>
              <p className="text-black font-semibold italic">
                +62 812 1234 5678
              </p>
            </div>
          </div>
        </div>
        <div className="px-8">
          <Image
            src="/img/payment.webp"
            width={192}
            height={21}
            alt="payment"
          />
        </div>
        <div className="px-10 flex">
          <div className="py-2 px-5">
            <p className="text-black font-semibold italic text-xl">
              Subscribe Now :
            </p>
          </div>
          <div>
            <div className="relative w-40 sm:w-auto xl:mr-4 flex lg:mr-0 sm:mr-4 mr-2">
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Your Email"
              />
              <div
                style={{ color: "white" }}
                className="bg-yellow-500 py-2 px-2"
              >
                <BsFillSendFill size="1.5rem" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
