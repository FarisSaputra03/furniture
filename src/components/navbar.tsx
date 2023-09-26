"use client";
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
export default function Navbar() {
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
    <header className={`w-full fixed z-10 ${color ? "bg-white" : ""}`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Home</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>About</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Shop</MenubarTrigger>
              <MenubarContent>
                <MenubarCheckboxItem>Shop Grid</MenubarCheckboxItem>
                <MenubarCheckboxItem>Shop List</MenubarCheckboxItem>
                <MenubarSeparator />
                <MenubarCheckboxItem>Shop Single</MenubarCheckboxItem>
                <MenubarCheckboxItem>Page</MenubarCheckboxItem>
                {/* <MenubarItem>
                  Page
                </MenubarItem> */}
                {/* <MenubarSeparator />
                <MenubarItem inset>Toggle Fullscreen</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Hide Sidebar</MenubarItem> */}
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Pages</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup>
                  <MenubarRadioItem value="about us">About Us</MenubarRadioItem>
                  <MenubarRadioItem value="cart">Cart</MenubarRadioItem>
                  <MenubarRadioItem value="compare">Compare</MenubarRadioItem>
                  <MenubarRadioItem value="whistle">Whistle</MenubarRadioItem>
                  <MenubarRadioItem value="empty cart">
                    Empty Cart
                  </MenubarRadioItem>
                  <MenubarRadioItem value="checkout">Checkout</MenubarRadioItem>
                  <MenubarRadioItem value="my account">
                    My Account
                  </MenubarRadioItem>
                  <MenubarRadioItem value="login">Login</MenubarRadioItem>
                  <MenubarRadioItem value="register">Register</MenubarRadioItem>
                </MenubarRadioGroup>
                {/* <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem> */}
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Blog</MenubarTrigger>
              <MenubarContent>
                <MenubarRadioGroup>
                  <MenubarSub>
                    <MenubarSubTrigger>Blog Grid</MenubarSubTrigger>
                    <MenubarSubContent className="bg-white">
                      <MenubarItem>Blog Grid</MenubarItem>
                      <MenubarItem>Blog Grid Left Sidebar</MenubarItem>
                      <MenubarItem>Blog Grid Right Sidebar</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarSubTrigger>Blog List</MenubarSubTrigger>
                    <MenubarSubContent className="bg-white">
                      <MenubarItem>Blog List Left Sidebar</MenubarItem>
                      <MenubarItem>Blog List Right Sidebar</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarSubTrigger>Blog Details</MenubarSubTrigger>
                    <MenubarSubContent className="bg-white">
                      <MenubarItem>Blog Details Left Sidebar</MenubarItem>
                      <MenubarItem>Blog Details Right Sidebar</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarRadioGroup>
                {/* <MenubarSeparator />
                <MenubarItem inset>Edit...</MenubarItem>
                <MenubarSeparator />
                <MenubarItem inset>Add Profile...</MenubarItem> */}
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>Contact</MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </nav>
        <div className="flex gap-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fill-rule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path
                fill-rule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10"
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
    </header>
  );
}
