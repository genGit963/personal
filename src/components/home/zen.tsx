"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function Lamp() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="mt-9 bg-black bg-gradient-to-br from-white to-white-200 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
      >
        Problem has meaning <br /> Solution has prespective.
      </motion.h1>
    </LampContainer>
  );
}
