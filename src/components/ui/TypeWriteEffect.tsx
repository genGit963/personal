"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TypewriterEffectSmoothTgpy() {
  const words = [
    {
      text: "I am Software Engineer",
    },
    {
      text: "Mahesh Bogati",
      className: "text-blue-300 dark:text-blue-500 text-6xl",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] py-3 ">
      <TypewriterEffectSmooth words={words} />
      <p className="text-white-100 max-w-xl font-medium w-full mt-6 text-center">
        I will be in web, database, network, programming, algo and
        devices. <br /> On the way into the depth of Tech....
      </p>
    </div>
  );
}
