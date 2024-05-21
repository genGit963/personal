"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import img from "../../assets/IMG_2886.jpg";

export function Skills() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 opacity-1">
          <p className="text-zinc-700">Product Tab</p>
          <TabContents />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-zinc-700">Services tab</p>
          <TabContents />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-zinc-700">Playground tab</p>
          <TabContents />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-zinc-700">Content tab</p>
          <TabContents />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-zinc-700">Random tab</p>
          <TabContents />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const TabContents = () => {
  return (
    <div className="bg-black opacity-100 text-xl font-normal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius est corporis
      minima quod ipsam quae, quis exercitationem eligendi obcaecati ab nulla,
      possimus mollitia atque! Dolor animi asperiores earum placeat aut!
      <br />
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt ea
      nostrum aliquid doloremque minima ipsum facere blanditiis alias,
      asperiores delectus excepturi omnis illum quo quos provident corrupti.
      Facilis, alias ut?
      <br />
      Minim id id occaecat ea commodo culpa ut. Labore deserunt deserunt
      excepteur dolor esse minim nisi consequat exercitation enim tempor nulla.
      Tempor mollit amet ipsum dolor aute ea quis sunt ipsum dolore sint
      aliquip. Occaecat exercitation cupidatat ullamco consequat elit et. Ut
      consequat aliquip reprehenderit fugiat. Nostrud est dolore amet velit eu{" "}
      <br />
      sit. Commodo quis magna reprehenderit elit in duis. Fugiat fugiat aliqua
      excepteur ipsum ex. Nisi velit qui exercitation qui. Exercitation culpa
      amet amet incididunt ipsum est sint qui sit quis cillum incididunt eu.
      Eiusmod deserunt magna ullamco quis culpa mollit Lorem magna fugiat essebr
      <br />
    </div>
  );
};
