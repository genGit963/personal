"use client";
import { HoverEffect } from "../ui/card-hover-effect";

export function ProfileLinks() {
  return (
    <div className="max-w-5xl mx-auto px-8 h-auto mb-5">
        <h1 className="text-4xl text-center">My Track Record Profiles</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Github",
    description:
      "I'm well-versed in GitHub, proficient in collaboration, and adept at managing complex version controls and numerous contributor branches tangled spaghetti. I don't adhere to conventional methods; I strive for unique, innovative approaches.",
    link: "https://github.com/genGit963?tab=repositories",
  },
  {
    title: "Linkedin",
    description:
      "Find me on LinkedIn, where I consistently highlight exemplary commits that showcase my skills and contributions. My posts reflect a robust track record of experience, meticulous improvements, and innovative contributions.",
    link: "https://www.linkedin.com/in/mahesh-bogati-540066262/",
  },
  {
    title: "npmjs.com",
    description:
      "In the realm of npm, I engineer intricate reactjs and nextjs components, curated within my npm repository. My mission? Igniting developer evolution and fostering a robust ecosystem of support and collaboration.",
    link: "https://www.npmjs.com/~gennpm963",
  },
];
