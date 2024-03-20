"use client";
import { motion } from "framer-motion";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
// import Image from "next/image";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import { Topbar } from "./components/topbar";
import { Spotlight } from "./components/Spotlight";
import Card from "./components/Card";
import { projects } from "./data/projects";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Topbar />
      <main className="mx-auto px-[20px] max-w-[950px]">
        {/* spotlight */}
        <div className="mt-[50px] h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden  md:mt-[50px]">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="pb-[20px] text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 sm:pb-[44px]">
              Danny <br /> Garcia
            </h1>
            <p className="pb-[20px] mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto sm:pb-[44px]">
              <span className="text-cyan-300">Front End Engineer </span>
              and <span className="text-cyan-300">Designer</span> with a passion
              for building accessible apps thats users love.
            </p>
            <div className="pt-[50px] mx-auto rounded-full w-60 h-60 overflow-hidden ">
              <img src="meDesktop.jpg" className="mt-[-200px]" />
            </div>
          </div>
        </div>
        {/* spotlight */}

        {/* Projects */}

        <section>
          <h3 className="mb-8 text-3xl py-1 ">Projects</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => {
              return <Card key={project.id} project={project} />;
            })}
          </div>
        </section>

        {/* About Me */}
        <section className="mt-[64px] grid sm:grid-cols-2 sm:items-center">
          <div>
            <h3 className="mb-8 text-3xl py-1 ">About Me</h3>
            <p className="mb-12">
              Hey, I'm Danny. I graduated from{" "}
              <span className="text-cyan-300">UC Berkeley</span> in 2021 with a
              degree in Cognitive Science.
            </p>
            <p>
              Other than coding, I am really into self-improvement. I love
              reading and working out. I'm also a huge Batman fan.
            </p>
          </div>
          <div className=" bg-green-500 pt-[50px] mx-auto rounded-2xl w-60 h-60 overflow-hidden ">
            <img src="\IMG_0899.PNG" className="mt-[-200px]" />
          </div>
        </section>

        {/* links */}
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a
            href="https://www.linkedin.com/in/daniel-g-7490a8230/"
            target="_blank"
          >
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/dgarcia1724" target="_blank">
            <AiFillGithub />
          </a>
        </div>
        {/* links */}
      </main>
    </div>
  );
}
