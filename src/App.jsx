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
import {
  IoAccessibility,
  IoAccessibilitySharp,
  IoLogoCss3,
  IoLogoFigma,
  IoLogoFirebase,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoSass,
} from "react-icons/io5";
import {
  SiGithub,
  SiLinkedin,
  SiReactquery,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Contact } from "./components/Contact";
import { Toaster } from "react-hot-toast";

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

        <section id="projects">
          <h3 className="mb-8 text-3xl py-1 ">Projects</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => {
              return <Card key={project.id} project={project} />;
            })}
          </div>
        </section>

        {/* About Me */}
        <section
          id="aboutMe"
          className="mt-[64px] grid sm:grid-cols-2 sm:items-center"
        >
          <div>
            <h3 className="mb-8 text-3xl py-1 ">About Me</h3>
            <p className="mb-12">
              Hey, I'm Danny. I graduated from{" "}
              <span className="text-cyan-300">UC Berkeley</span> in 2021 with a
              degree in Cognitive Science.
            </p>
            <p>
              Other than coding, I am really into self-improvement. I love
              cooking and working out. I'm also a huge Batman fan.
            </p>
          </div>
          <div className="pt-[50px] mx-auto rounded-2xl w-60 h-60 overflow-hidden ">
            <img src="\IMG_0899.PNG" className="mt-[-200px]" />
          </div>
        </section>

        {/* My Toolkit */}
        <section className="mt-[64px]">
          <h3 className="mb-8 text-3xl py-1 ">My Toolkit</h3>
          <section className="grid grid-cols-3 gap-4 items-center justify-center justify-items-center sm:grid-cols-4">
            {/* Accessibility */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <IoAccessibilitySharp color="black" size={32} />
              </div>
              <p>Accessibility</p>
            </div>
            {/* Figma */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <IoLogoFigma color="black" size={32} />
              </div>
              <p>Figma</p>
            </div>
            {/* CSS3 */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <IoLogoCss3 color="black" size={32} />
              </div>
              <p>CSS3</p>
            </div>
            {/* HTML5 */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <IoLogoHtml5 color="black" size={32} />
              </div>
              <p>HTML5</p>
            </div>
            {/* JS */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <IoLogoJavascript color="black" size={32} />
              </div>
              <p>Javascript</p>
            </div>
            {/* React */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <IoLogoReact color="black" size={32} />
              </div>
              <p>React</p>
            </div>
            {/* Reactquery */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <SiReactquery color="black" size={32} />
              </div>
              <p>Reactquery</p>
            </div>
            {/* Redux */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <SiRedux color="black" size={32} />
              </div>
              <p>Redux</p>
            </div>
            {/* Tailwind */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <SiTailwindcss color="black" size={32} />
              </div>
              <p>Tailwind</p>
            </div>
            {/* Styledcomponents */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <SiStyledcomponents color="black" size={32} />
              </div>
              <p className="text-center">Styled Components</p>
            </div>
            {/* Sass */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <IoLogoSass color="black" size={32} />
              </div>
              <p>Sass</p>
            </div>
            {/* Typescript */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-[64px] w-[64px] bg-white rounded-full grid place-items-center">
                <SiTypescript color="black" size={32} />
              </div>
              <p>Typescript</p>
            </div>

            {/* END OF SECTION */}
          </section>
        </section>

        <Toaster position="top-center" />

        {/* Contact */}
        <section id="contact" className="mt-[64px]">
          <h3 className="mb-8 text-3xl py-1 ">Contact</h3>
          <div className="mb-8 flex justify-center items-center gap-16 md:gap-[240px]">
            <a
              href="https://www.linkedin.com/in/daniel-g-7490a8230/"
              target="_blank"
            >
              <SiLinkedin color="white" size={32} />
            </a>
            <a href="https://github.com/dgarcia1724" target="_blank">
              <SiGithub color="white" size={32} />
            </a>
          </div>
          <section>
            <Contact />
          </section>
        </section>
      </main>
    </div>
  );
}
