"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";

export function Contact() {

    const[email, setEmail] = useState<string>("")
    const[Name, setName] = useState<string>("")
    const[message, setMessage] = useState<string>("")

  return (
    <div
      id="contact"
      className="h-[40rem] w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased"
    >
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 py-2 text-2xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          I m just a mail way
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          I am aspire to delve into the unparalleled blend of business and tech
          culture.
        </p>
        <input
          type="text"
          placeholder="Person or Organisation"
          required
          className="rounded-lg h-12 px-4 border border-neutral-700 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-black-200 placeholder:text-neutral-700"
          value={Name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="rounded-lg h-12 px-4 border border-neutral-700 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-black-200 placeholder:text-neutral-700"
          value={email}
        />
        <textarea
          placeholder="I have a ....."
          className="rounded-lg h-[120px] py-2 px-4 border border-neutral-700 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-black-200 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
