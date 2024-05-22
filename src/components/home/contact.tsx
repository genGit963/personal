"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import LongitudnalWaveLoading from "../my_ui/loading";
import emailjs from "@emailjs/browser";
import { serialize } from "v8";

export function Contact() {
  const [email, setEmail] = useState<string>("");
  const [Name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const service_id: string = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const template_id: string = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
  const public_key: string = process.env.NEXT_PUBLIC_KEY as string;
  const emailTemplate = {
    from_name: Name,
    from_email: email,
    to_name: "Mahesh Bogati",
    message: message,
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      await emailjs
        .send(service_id, template_id, emailTemplate, public_key)
        .then((response) => {
          alert("I will reply you soon !");
        //   console.log(response);
          //   replay
        })
        .catch((err) => {
          throw err;
        });
    } catch (err) {
    } finally {
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <div className="h-auto w-full rounded-md bg-black relative flex flex-col items-center justify-center antialiased">
      <div
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-4 my-8 z-[15]"
      >
        <h1 className="relative z-10 py-2 text-2xl md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          I m just a mail way
        </h1>
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
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="rounded-lg h-12 px-4 border border-neutral-700 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-black-200 placeholder:text-neutral-700"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="I have a ....."
          className="rounded-lg h-[120px] py-2 px-4 border border-neutral-700 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-black-200 placeholder:text-neutral-700"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="mt-6 cursor-pointer border border-teal-700 px-4 py-2 rounded-lg hover:shadow-md hover:shadow-teal-400 animate-pulse font-semibold text-teal-300"
        >
          Send Mail
        </button>
        {loading && <LongitudnalWaveLoading />}
      </div>
      <BackgroundBeams className="z-10" />
    </div>
  );
}
