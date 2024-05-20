"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothTgpy() {
  const words = [
    {
      text: "I am Software Engineer",
      className: "sm:text-2xl",
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
      <p className="text-white-100 max-w-xl font-medium w-full mt-6 text-center">
        I will be in web, database, network, programming, algo and devices.{" "}
        <br /> On the way into the depth of Tech....
      </p>
    </div>
  );
}
