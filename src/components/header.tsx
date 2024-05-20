"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../assets/logo.svg"
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
          ? "fixed top-0 left-0 right-0 text-white-100 z-20  py-2 px-3 md:px-6 backdrop-blur-sm flex flex-row items-center justify-between"
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
        />
      </Link>
      <div className="flex flex-row gap-6 justify-around">
        <Link
          href={""}
          className="hover:text-teal-500 cursor-pointer border
           hover:border-teal-200 border-teal-600 p-2
           rounded-full font-semibold hover:animate-bounce drop-shadow-lg shadow-teal-400"
        >
          Want Deal
        </Link>
        <div className="md:flex flex-row gap-6 pr-4 items-center text-teal-300 hidden">
          <Link
            href={"#offices"}
            className="hover:text-purple hover:cursor-pointer"
          >
            Odyssey
          </Link>
          <Link href={""} className="hover:text-purple hover:cursor-pointer">
            Skills
          </Link>
          <Link
            href={"/contact"}
            className="hover:text-purple hover:cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <Image src={menu_bar} alt="menu" className="sm:hidden" />
      </div>
    </div>
  );
};

export default Header;
