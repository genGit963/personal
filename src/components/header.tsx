"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import LOGO from "../assets/logo.svg";
const Header = () => {
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        // console.log(window.scrollY);
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
          ? "fixed top-0 left-0 right-0 text-white-100 z-20 bg-black-100 py-6 bg-opacity-0"
          : "hidden"
      }
    >
      {/* <Image src={require("../assets/logo.png")} alt="logo" /> */}
      <Image
        src={LOGO}
        alt="logo"
        height={"0"}
        width={"0"}
        className="h-14 w-auto"
      />
    </div>
  );
};

export default Header;
