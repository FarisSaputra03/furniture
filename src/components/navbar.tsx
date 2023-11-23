"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "../styles/globals.css";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
interface NavbarProps {
  onClick: () => void;
}
const Navbar = (props: Partial<NavbarProps>) => {
  const { onClick = () => {} } = props;
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    if (window != undefined) {
      window.addEventListener("scroll", changeColor);
    }
  });
  return (
    <header
      className={`md:w-full w-screen fixed z-20 ${color ? "bg-white" : ""}`}
    >
      <div className=" flex py-5 px-5 flex-col  md:flex-row">
        <div className="flex font-semibold items-center text-black">
          <div className="flex justify-between">
            <div className="flex sm:hidden " onClick={onClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div className="flex justify-center pl-20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="pt-1 text-base">Furniture</span>
            </div>
          </div>
          <div className="flex pl-11">
            <div className="flex sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <div className="flex sm:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <nav className="md:ml-auto md:mr-auto hidden space-x-8 sm:flex flex-wrap items-center text-base justify-center">
          <Menubar>
            <a href="/">
              <MenubarMenu>
                <MenubarTrigger className="hover:text-yellow-500 hover:scale-125 transition duration-500 cursor-pointer">
                  Home
                </MenubarTrigger>
              </MenubarMenu>
            </a>
            <a href="/about">
              <MenubarMenu>
                <MenubarTrigger className="hover:text-yellow-500 hover:scale-125 transition duration-500 cursor-pointer">
                  About
                </MenubarTrigger>
              </MenubarMenu>
            </a>
            <a href="#">
              <MenubarMenu>
                <MenubarTrigger className="hover:text-yellow-500 hover:scale-125 transition duration-500 cursor-pointer">
                  Shop
                </MenubarTrigger>
                <MenubarContent className="bg-white ">
                  <MenubarCheckboxItem className="hover:text-yellow-500">
                    Shop Grid
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem className="hover:text-yellow-500">
                    Shop List
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem className="hover:text-yellow-500">
                    Shop Single
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem className="hover:text-yellow-500">
                    Page
                  </MenubarCheckboxItem>
                </MenubarContent>
              </MenubarMenu>
            </a>
            <a href="#">
              <MenubarMenu>
                <MenubarTrigger className="hover:text-yellow-500 hover:scale-125 transition duration-500 cursor-pointer">
                  Pages
                </MenubarTrigger>
                <MenubarContent className="bg-white">
                  <MenubarRadioGroup>
                    <MenubarRadioItem
                      className="hover:text-yellow-500"
                      value="about us"
                    >
                      About Us
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      className="hover:text-yellow-500"
                      value="cart"
                    >
                      Cart
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      className="hover:text-yellow-500"
                      value="compare"
                    >
                      Compare
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      className="hover:text-yellow-500"
                      value="whistle"
                    >
                      Whistle
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      className="hover:text-yellow-500"
                      value="empty cart"
                    >
                      Empty Cart
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      className="hover:text-yellow-500"
                      value="checkout"
                    >
                      Checkout
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      className="hover:text-yellow-500"
                      value="my account"
                    >
                      My Account
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      className="hover:text-yellow-500"
                      value="login"
                    >
                      Login
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      className="hover:text-yellow-500"
                      value="register"
                    >
                      Register
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                  {/* <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem> */}
                </MenubarContent>
              </MenubarMenu>
            </a>
            <a href="#">
              <MenubarMenu>
                <MenubarTrigger className="hover:text-yellow-500 hover:scale-125 transition duration-500 cursor-pointer">
                  Blog
                </MenubarTrigger>
                <MenubarContent className="bg-white">
                  <MenubarRadioGroup>
                    <MenubarSub>
                      <MenubarSubTrigger className="hover:text-yellow-500">
                        Blog Grid
                      </MenubarSubTrigger>
                      <MenubarSubContent className="bg-white">
                        <MenubarItem className="hover:text-yellow-500">
                          Blog Grid Left Sidebar
                        </MenubarItem>
                        <MenubarItem className="hover:text-yellow-500">
                          Blog Grid Right Sidebar
                        </MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSub>
                      <MenubarSubTrigger className="hover:text-yellow-500">
                        Blog List
                      </MenubarSubTrigger>
                      <MenubarSubContent className="bg-white">
                        <MenubarItem className="hover:text-yellow-500">
                          Blog List Left Sidebar
                        </MenubarItem>
                        <MenubarItem className="hover:text-yellow-500">
                          Blog List Right Sidebar
                        </MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSub>
                      <MenubarSubTrigger className="hover:text-yellow-500">
                        Blog Details
                      </MenubarSubTrigger>
                      <MenubarSubContent className="bg-white">
                        <MenubarItem className="hover:text-yellow-500">
                          Blog Details Left Sidebar
                        </MenubarItem>
                        <MenubarItem className="hover:text-yellow-500">
                          Blog Details Right Sidebar
                        </MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
            </a>
            <a href="#">
              <MenubarMenu>
                <MenubarTrigger className="hover:text-yellow-500">
                  Contact
                </MenubarTrigger>
              </MenubarMenu>
            </a>
          </Menubar>
        </nav>
        <div className="flex gap-5">
          <div className="hidden space-x-8 sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="hidden space-x-8 sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="hidden space-x-8 sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="hidden space-x-8 sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
