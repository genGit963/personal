"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothTgpy() {
  const words = [
    {
      text: "I am Software Engineer",
      className: "sm:text-3xl text-2xl text-pink-200",
    },
    {
      text: "Mahesh Bogati",
      className:
        "bg-gradient-to-r from-indigo-400 via-purple-200 to-black-100 text-transparent bg-clip-text text-4xl sm:text-6xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] py-3 ">
      <TypewriterEffectSmooth words={words} />
      <p className="sm:text-1xl bg-gradient-to-r from-pink-400 via-blue-500 to-white-100 text-transparent bg-clip-text max-w-xl font-medium w-full mt-6 text-center">
        I will be in web, database, network, programming, algo and devices.{" "}
        <br /> On the way into the depth of tech.
      </p>
    </div>
  );
}
