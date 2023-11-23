import React from "react";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialTumblr } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex flex-col md:flex-row -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Customer Service
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  Payment Methods
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  {" "}
                  Money-back guaranteel
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  {" "}
                  Returns-Shipping
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  Privacy Policy
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Information
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  About Furbar
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  How to Shop
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">FAQ</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  Contact us
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">Log in</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              My Account
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-yellow-500">Sign In</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">View Cart</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  My Wishlist
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  Track My Order
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">Help</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Our Stores
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-yellow-500">New York</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">London SF</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  Cockfosters BP
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">
                  Los Angeles
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-yellow-500">Chicago</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full ">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              About Us
            </h2>
            <nav className="list-none mb-10">
              <p>
                Lorem ipsum dolor sit amet consect adipisicing elit sed do
                eiusmod temp incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
              <div className="flex justify-center sm:justify-start">
                <div className="p-2 hover:text-yellow-500">
                  <SlSocialTwitter size="1.5rem" />
                </div>
                <div className="p-2 hover:text-yellow-500">
                  <SlSocialTumblr size="1.5rem" />
                </div>
                <div className="p-2 hover:text-yellow-500">
                  <SlSocialFacebook size="1.5rem" />
                </div>
                <div className="p-2 hover:text-yellow-500">
                  <SlSocialInstagram size="1.5rem" />
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="justify-center py-4 px-5 flex">
          <div className="text-gray-500 text-base text-center font-semibold flex sm:text-left">
            © 2023 
            <p className="text-yellow-500 px-1">Furbar</p>  Made with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <p className="text-yellow-500 px-1">codecarnival</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
