"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-5 text-[#2A254B] ">
      {/* Top Header */}
      <div className="flex justify-between items-center lg:justify-center lg:relative">
        {/* Search Icon for large screens */}
        <IoIosSearch
          className="hidden lg:block lg:absolute lg:left-5 text-xl"
          size={30}
        />

        {/* Avion Centered */}
        <div className="text-2xl text-[#22202E]">Avion</div>

        {/* Mobile Icons */}
        <div className="flex items-center lg:hidden">
          <IoIosSearch className="text-xl mr-4" size={30} />
          <HiOutlineMenu
            className="text-xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex gap-4 absolute right-5">
          <Link href="/cart">
            <IoCartOutline className="text-xl" size={30} />
          </Link>
          <MdOutlineAccountCircle className="text-xl" size={30} />
        </div>
      </div>

      {/* Border Bottom */}
      <div className="w-full border-b-[1px] my-5"></div>

      {/* Nav Bar */}
      <div className="hidden lg:flex justify-center">
        <ul className="flex gap-8 text-base text-[#726E8D] ">
          <li className="hover:underline ">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="./productlisting2">All Product</Link>  
          </li>
          <li className="hover:underline"> 
            <Link href="./productlisting ">ProductListing</Link>
          </li>
          <li className="hover:underline">
            <Link href="./about">About</Link>  
          </li>
          <li className="hover:underline">
            <Link href="#">Ceramics</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Tables</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">chairs</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col">
          <div className="flex justify-between items-center p-5">
            <div className="text-xl font-bold">Avion</div>
            <HiOutlineX
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>
          <div className="flex flex-col items-center mt-10 space-y-5 text-lg">
            <div className="text-2xl">
              <Link href="/cart" onClick={() => setIsMenuOpen(false)}>
                <IoCartOutline />
              </Link>
            </div>
            <div className="text-2xl">
              <Link href="#" onClick={() => setIsMenuOpen(false)}>
                <MdOutlineAccountCircle />
              </Link>
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/productlisting2" onClick={() => setIsMenuOpen(false)}>
                  Ceramics
                </Link>
              </li>
              <li>
                <Link href="/productlisting" onClick={() => setIsMenuOpen(false)}>
                  Tables
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                  Chairs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ProductListing
                </Link>
              </li>
              <li>
                <Link href="#" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
