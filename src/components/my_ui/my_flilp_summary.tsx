import React from "react";
import { FlipWords } from "../ui/flip-words";
import Image from "next/image";
import { Spotlight } from "../ui/Spotlight";
import my_pic from "../../assets/summary6 Background Removed.png";

export function FlipWordsDemo() {
  const words = [
    "React.js",
    "Next.js",
    "React-Native",
    "MERN-Stack",
    "SQL + NoSQL",
    "Node.js",
    "Python"
  ];

  return (
    <div className="h-[100vh] flex m-auto flex-col gap-8 text-center md:text-left w-[90vw] lg:flex-row justify-center items-center px-4">
      <div className="h-auto w-[250px] sm:w-[400px]">
        <Spotlight className="items-center [80vh] w-[30vw]" fill="purple" />
        <Image
          height={"0"}
          width={"0"}
          src={my_pic}
          alt="mahesh"
          className="rounded-b-full"
        />
      </div>
      <div className="mx-auto font-normal text-white-200 text-center text-3xl lg:text-5xl lg:text-left">
        Embarked more than {Number(new Date().getFullYear()) - 2019}-year
        odyssey in <br />
        <FlipWords
          words={words}
          className="font-bold text-3xl lg:text-5xl hover:font-black hover:cursor-pointer mx-auto "
        />{" "}
        <br />
        that enthrall and captivate users.
      </div>
    </div>
  );
}
