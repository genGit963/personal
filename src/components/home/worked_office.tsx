"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function WorkedOffices() {
  return (
    <div id="offices" className="h-[80vh] rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-center text-teal-200 text-2xl sm:text-4xl sm:font-semibold">
        I sat on the Table and Chair of
      </h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Six individuals, each driven by a fervent passion for technology and sharing a common vision, converged to establish a self-funded startup. Our collective endeavor materialized into the creation of a vibrant office space, a sanctuary where the ethos of collaboration and mutual leadership blossomed. Over the span of two transformative years, we devoted ourselves wholeheartedly to the mastery of the intricate domains of the MERN Stack and Flutter development.",
    name: "Datum Group of Developers",
    title: "Intern (2018-2019)",
  },
  {
    quote:
      "Proficient in both front-end and back-end development during my tenure at CyberOS, I specialized in creating admin panels and dynamic interfaces using React.js and Next.js. I excel in Node.js for crafting scalable applications and am adept with the MERN stack for comprehensive full-stack development. My experience showcases a deep understanding of modern web practices, including proficient state management and seamless API integration.",
    name: "Cybros Group",
    title: "Junior (Feb 2019 - March 2020)",
  },
  {
    quote:
      "At mid-level, I've delved deeply into React-Native, React, and Next.js, mastering them to a production-level standard in coding, frontend design, and a plethora of frameworks, animations, and styling techniques. What truly distinguishes me is my adeptness in both app and web development. I've honed my versatility in database management, seamlessly navigating through MongoDB, pgSQL, MySQL, and SQLite. I got support on finishing and making more user experience based app.",
    name: "Aansh Tech",
    title: "Mid-level (Feb 2020 - June 2023)",
  },
  {
    quote:
      "Transitioning into the senior role at Infinity, I autonomously managed projects, overseeing design, frontend coding, and collaborating with two senior developers. This elevated responsibility allowed me to embody the essence of seniority, steering projects from conception to execution in React Native and web environments. With adeptness in React Native and web technologies, I navigated complexities, ensuring seamless integration and top-notch deliverables, exemplifying the quintessential role of a senior developer.",
    name: "Infinity Tech",
    title: "Senior (Aug 2023 - April 2024)",
  },
  {
    quote:
      "As a co-founder of Graphene Foil Tech, I spearhead our remote operations, orchestrating strategic planning, technology implementation, and team coordination. My responsibilities span from conceptualizing innovative solutions to managing development cycles and ensuring seamless deployment. Leveraging cutting-edge technologies, I drive product development, market positioning, and scalability initiatives, embodying an entrepreneurial spirit while fostering a culture of innovation and excellence within our startup ecosystem.",
    name: "Graphene Foil Tech",
    title: "Co Founder (2024 and on)",
  },
];
