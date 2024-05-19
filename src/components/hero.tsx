import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Vortex } from "./ui/vortex";
import { TypewriterEffectSmoothTgpy } from "./ui/TypeWriteEffect";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="items-center [80vh] w-[30vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* <div className="w-full mx-auto rounded-md  h-[30rem] overflow-hidden"> */}
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-[100vw] h-[100vh]"
      >
        <TypewriterEffectSmoothTgpy />
      </Vortex>
      {/* </div> */}
    </div>
  );
};

export default Hero;
