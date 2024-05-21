import Hero from "@/components/home/hero";
import { Lamp } from "@/components/home/zen";
import Summary from "@/components/home/summary";
import { WorkedOffices } from "@/components/home/worked_office";
import { ProfileLinks } from "@/components/home/link";
import { Skills } from "@/components/home/skills";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="w-[100vw]">
        <Hero />
        <Summary />
        <WorkedOffices />
        <Lamp />
        <Skills />
        <ProfileLinks />
      </div>
    </main>
  );
}
