import Hero from "@/components/home/hero";
import Summary from "@/components/home/summary";
import { WorkedOffices } from "@/components/home/worked_office";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-[100vw]">
        <Hero />
        <Summary />
        <WorkedOffices />
      </div>
    </main>
  );
}
