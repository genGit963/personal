"use client";

import Image from "next/image";
import { Tabs } from "../ui/tabs";
import img from "../../assets/IMG_2886.jpg";

export function Skills() {
  const tabs = [
    {
      title: "Client",
      value: "frontend",
      content: (
        <div
          className="w-full m-auto overflow-hidden relative h-auto bg-black-200 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700
         to-violet-900 opacity-1"
        >
          <p className="text-zinc-700">Frontend</p>
          <div className="bg-black-200 text-white-200 p-8 border border-gray-800 rounded-lg opacity-100 text-xl font-normal">
            <ul className="list-disc text-[16px]">
              <li>
                React.js :{" "}
                <span className="text-teal-400">
                  Since {new Date().getFullYear() - 2018} years
                </span>
              </li>
              <li>
                Next.js :{" "}
                <span className="text-teal-400">
                  Since {new Date().getFullYear() - 2022} years
                </span>
              </li>
              <li>
                UI/UX :{" "}
                <span className="text-teal-400">
                  Material-UI, Tailwindcss, SCSS/SASS
                </span>
              </li>
              <li>
                State Management :{" "}
                <span className="text-teal-400">Redux, Zustand</span>
              </li>
              <li>
                API handling : <span className="text-teal-400">Axios</span>
              </li>
              <li>React vite-bundling power</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Server",
      value: "backend",
      content: (
        <div className="w-full overflow-hidden relative h-auto bg-black-200 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-zinc-700">Backend</p>
          <div className="bg-black-200 text-white-200 p-8 border border-gray-800 rounded-lg opacity-100 text-xl font-normal">
            <ul className="list-disc text-[16px]">
              <li>
                MERN Stack :{" "}
                <span className="text-teal-400">
                  Since {new Date().getFullYear() - 2020} years
                </span>
              </li>
              <li>
                Node.js :{" "}
                <span className="text-teal-400">
                  Since {new Date().getFullYear() - 2020} years
                </span>
              </li>
              <li>
                Express.js :{" "}
                <span className="text-teal-400">Server Management</span>
              </li>
              <li>RESTful API</li>
              <li>
                Postman, Thunderclient :{" "}
                <span className="text-teal-400">API testing</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "DB",
      value: "Database",
      content: (
        <div
          className="w-full m-auto overflow-hidden relative h-auto bg-black-200 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700
         to-violet-900 opacity-1"
        >
          <p className="text-zinc-700">Database</p>
          <div className="bg-black-200 text-white-200 p-8 border border-gray-800 rounded-lg opacity-100 text-xl font-normal">
            <ul className="list-disc text-[16px]">
              <li>
                SQL: <span className="text-teal-400">MySQL, postgreSQL</span>
              </li>
              <li>
                NoSQL: <span className="text-teal-400">MongoDB</span>
              </li>
              <li>
                Local_handling: <span className="text-teal-400">SQLite</span>
              </li>
              <li>
                Distributed Database:{" "}
                <span className="text-teal-400">
                  Cassandra, Redis, Hadoop, Google Big Table #Looking to explore
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "RN",
      value: "react-native",
      content: (
        <div className="w-full overflow-hidden relative h-auto bg-black-200 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="text-zinc-700">React-Native</p>
          <div className="bg-black-200 text-white-200 p-8 border border-gray-800 rounded-lg opacity-100 text-xl font-normal">
            <ul className="list-disc text-[16px]">
              <li>
                React-Native Rendering :{" "}
                <span className="text-teal-400">
                  Since {new Date().getFullYear() - 2022} years
                </span>
              </li>
              <li>
                App Route :{" "}
                <span className="text-teal-400">React Navigation</span>
              </li>
              <li>
                UI/UX :{" "}
                <span className="text-teal-400">
                  React Native Paper, Tailwindcss
                </span>
              </li>
              <li>
                State Management :{" "}
                <span className="text-teal-400">
                  Redux, Zustand, Async-Store
                </span>
              </li>
              <li>
                Features and Styling :{" "}
                <span className="text-teal-400">
                  Anything as per requirement
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "</>",
      value: "Coding",
      content: (
        <div
          className="w-full m-auto overflow-hidden relative h-auto bg-black-200 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700
         to-violet-900 opacity-1"
        >
          <p className="text-zinc-700">Coding and Design</p>
          <div className="bg-black-200 text-white-200 p-8 border border-gray-800 rounded-lg opacity-100 text-xl font-normal">
            <ul className="list-disc text-[16px]">
              <li>
                Any Design : <span className="text-teal-400">Figma</span>
              </li>
              <li>
                Scripting Langauge :{" "}
                <span className="text-teal-400">JS and TS</span>
              </li>
              <li>
                General Language :{" "}
                <span className="text-teal-400">Python, C++/C</span>
              </li>
              <li>
                Markup/Styling :{" "}
                <span className="text-teal-400">HTML5, CSS5 SCCSS/SASS</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "DS",
      value: "Data-Science",
      content: (
        <div
          className="w-full m-auto overflow-hidden relative h-auto bg-black-200 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700
         to-violet-900 opacity-1"
        >
          <p className="text-zinc-700">Data Science</p>
          <div className="bg-black-200 text-white-200 p-8 border border-gray-800 rounded-lg opacity-100 text-xl font-normal">
            <ul className="list-disc text-[16px]">
              <li>
                Analysis :{" "}
                <span className="text-teal-400">
                  NumPy, SciPy, Panda, Seaborn, Matplotlib
                </span>
              </li>
              <li>
                Machine Learning :{" "}
                <span className="text-teal-400">
                  Deep Learning, Neural Network, Reinforcement Learning
                </span>
              </li>
              <li>
                Model:{" "}
                <span className="text-teal-400">
                  Scikit-learn, Tensor-flow, Keras, Py-Torch, etc
                </span>
              </li>
              <li>
                Other AI:{" "}
                <span className="text-teal-400">
                  openCV, Expert System, Speech Model, etc
                </span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div
      id="skills"
      className="h-[100vh] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40"
    >
      <h1 className="text-teal-200 mt-6 mx-5 text-center text-[18px] font-semibold sm:text-[24px]">
        I m proficient in{" "}
      </h1>
      <div className="h-[0.5px] w-[100%] border border-gray-700 mb-8 mt-1 mx-4" />
      <Tabs tabs={tabs} />
    </div>
  );
}
