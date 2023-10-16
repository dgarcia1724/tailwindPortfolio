import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
// import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons">dannyg</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              {/* <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li> */}
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Danny Garcia
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">
              Based in California, I'm a front-end developer passionate about
              building accessible web apps that users love.
            </p>
          </div>
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
          <div className="mb-10 relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <img src="meDesktop.jpg" className="mt-[-200px]" />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">My Skills</h3>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img className="mx-auto" src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <h4 className="py-4 text-teal-600">UI / UX</h4>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Prototyping</p>
              <p className="text-gray-800 py-1">User Testing</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img className="mx-auto" src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Code Your Dream Project
              </h3>
              <h4 className="py-4 text-teal-600">Front End Dev</h4>
              <p className="text-gray-800 py-1">HTML / CSS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <img
                className="mx-auto"
                src={consulting}
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Cognitive Science Degree from UC Berkeley
              </h3>
              <h4 className="py-4 text-teal-600">Teamwork</h4>
              <p className="text-gray-800 py-1">Public Speaking</p>
              <p className="text-gray-800 py-1">Always Learning</p>
              <p className="text-gray-800 py-1">Problem Solving</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a href="https://designofinal.netlify.app/" target="_blank">
                <img
                  src="/Screenshot 2023-10-16 050015.png"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://dgarcia1724.github.io/Photosnap-multi-page-website/index.html"
                target="_blank"
              >
                <img
                  src="/Screenshot 2023-10-16 045756.png"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://www.behance.net/gallery/143472421/Peak-Sports-Streaming-App"
                target="_blank"
              >
                <img
                  src="/Screenshot 2023-10-16 045017.png"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://www.behance.net/gallery/143394551/Paw-Pal"
                target="_blank"
              >
                <img
                  src="/Screenshot 2023-10-16 044811.png"
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
