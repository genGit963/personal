import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { Vortex } from "../ui/vortex";
import { TypewriterEffectSmoothTgpy } from "../my_ui/TypeWriteEffect";
import { FlipWordsDemo } from "../my_ui/my_flilp_summary";

const Hero = () => {
  return (
    <div className="overflow-hidden" id="hero">
      <Spotlight className="items-center [80vh] w-[30vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      <Vortex
        // backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-[100vw] h-[100vh]"
      >
        <TypewriterEffectSmoothTgpy />
      </Vortex>
    </div>
  );
};

export default Hero;
