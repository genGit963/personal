"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothTgpy() {
  const words = [
    {
      text: "I am Software Engineer",
      className:
        "sm:text-3xl text-2xl text-pink-200 bg-gradient-to-t from-black-200 via-blue-800 to-blue-700 text-transparent bg-clip-text ",
    },
    {
      text: "Mahesh Bogati",
      className:
        "bg-gradient-to-r from-indigo-400 via-purple-200 to-black text-transparent bg-clip-text text-4xl sm:text-6xl",
    },
  ];
  const texts: string = `I will be in web, database, network, programming, algo and devices. On the way into the depth of tech.`;
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] py-3 ">
      <TypewriterEffectSmooth words={words} />
      <div className="sm:text-1xl bg-gradient-to-r from-pink-400 via-blue-500 to-white-100 text-transparent bg-clip-text font-medium w-[65vw] mt-6 text-center">
        <TextGenerateEffect words={texts} />
      </div>
    </div>
  );
}
