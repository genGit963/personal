import React from "react";
import graphene_logo from "../assets/graphene.svg";
import Image from "next/image";
import github_logo from "../assets/github.svg";
import linkedin_logo from "../assets/linkedin.svg";
import npm_logo from "../assets/npm.svg";
import { TextGenerateEffectUI } from "./my_ui/text-generate";

const Footer = () => {
  return (
    <div className="h-auto my-10 px-1 md:px-5 items-center bg-black">
      <div className="block items-center md:flex md:justify-between md:flex-row bg-black-200 max-w-7xl p-12 m-auto rounded-2xl">
        <div className="text-center md:text-left">
          <p className="text-2xl font-semibold pb-3">Mahesh Bogati</p>
          <p className="font-normal py-2">
            Electronics, Communication <br /> and Information Engineer <br />{" "}
            TU, IOE
          </p>
          <a
            href="mailto: bogati.mahesh.299.792.458@gmail.com"
            className="underline text-cyan-500 text-[14px] items-center mx-auto"
          >
            <p className="text-center">bogati.mahesh.299.792.458@gmail.com</p>
          </a>
          <p className="text-[14px]">Kathmandu, Nepal</p>
          <p className="text-[14px]">All Rights Reserved</p>
        </div>

        <div className="items-center m-auto">
          <Image
            src={graphene_logo}
            alt="graphene"
            className="h-[200px] w-[280px] m-auto"
          />
        </div>

        <div className="text-center gap-2 md:text-left flex items-center w-[280px] mx-auto md:mx-0 justify-between my-4 md:my-0">
          <a
            href="https://github.com/genGit963?tab=repositories"
            target="_blank"
          >
            <Image
              src={github_logo}
              alt="github"
              className="h-[50px] w-[50px] cursor-pointer"
            />
            <p className="text-[10px] text-center mt-1">github</p>
          </a>

          <a
            href="https://www.linkedin.com/in/mahesh-bogati-540066262/"
            target="_blank"
          >
            <Image
              src={linkedin_logo}
              alt="linkedin"
              className="h-[50px] w-[50px] cursor-pointer"
            />
            <p className="text-[10px] text-center mt-1">linkedin</p>
          </a>
          <a href="https://www.npmjs.com/~gennpm963" target="_blank">
            <Image
              src={npm_logo}
              alt="npm"
              className="h-[50px] w-[50px] cursor-pointer"
            />
            <p className="text-[10px] text-center mt-1">npm</p>
          </a>
        </div>
      </div>
      <div className="text-center my-6">
        Ultimately, Thanks and Supports{" "}
        <a
          href="https://nextjs.org/"
          target="_blank"
          className="underline text-cyan-500"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="underline text-cyan-500"
        >
          Tailwindcss
        </a>
        ,{" "}
        <a
          href="https://ui.aceternity.com/"
          target="_blank"
          className="underline text-cyan-500"
        >
          Aceternity
        </a>{" "}
        and all world free and open software community.
        <br />
        <span className="text-red-600 my-1">♥️</span>
      </div>
      <div className="my-4" />
      <TextGenerateEffectUI />
      <div className="my-4" />
    </div>
  );
};

export default Footer;
