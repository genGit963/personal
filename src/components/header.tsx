"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../assets/logo.svg";
import menu_bar from "../assets/menu_bar.svg";
const Header = () => {
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={
        showBackground
          ? "fixed top-0 left-0 right-0 text-white-100 z-20 py-2 px-3 md:px-6 webkit-backdrop-blur-4 backdrop-blur-sm flex flex-row items-center justify-between"
          : "hidden"
      }
    >
      {/* <Image src={require("../assets/logo.png")} alt="logo" /> */}
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          height={"0"}
          width={"0"}
          className="h-8 w-auto lg:h-12"
          priority
        />
      </Link>

      <Link
        href="#mail"
        className="h-8 w-auto md:mr-14 hover:text-teal-500 cursor-pointer border
           hover:border-teal-200 border-teal-600 text-[14px] sm:text-lg
           rounded-[20px] font-medium animate-pulse drop-shadow-lg
            text-center items-center px-2 py-1 sm:py-0"
      >
        Take on
      </Link>
      {/* <Image src={menu_bar} alt="menu" className="md:hidden h-7" /> */}
    </div>
  );
};

export default Header;
