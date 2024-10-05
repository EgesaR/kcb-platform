"use client"
import Image from "next/image";
import { useEffect } from "react";

import Hero from "../components/Portifolio/Hero";
import { motion } from "framer-motion"
import AOS from "aos"
import "aos/dist/aos.css"



const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function Home() {
  useEffect(() => {
    AOS.init({

    })
  },[])
  return (
    <div className="font-[family-name:var(--font-geist-sans)] w-full h-screen">
      <div className="flex flex-col gap-5">
        <Hero>
          <div className="w-full h-full bg-green-800 rounded-3xl flex justify-center items-center flex-col">
            <h1 className="text-2xl text-center text-slate-200 font-bold sm:text-4xl animate-fade-up animate-once animate-duration-700 animate-delay-1000">
              Motto: &quot;Discipline and Hardwork&quot;
            </h1>
            <h3 className="mt-3 animate-fade-up animate-once animate-duration-1000 animate-delay-[1000ms]">
              Greetings to you and greetings to you all
            </h3>
          </div>
        </Hero>
        <Hero>
          <div className="h-full w-[45%] flex flex-col justify-center">
            <h1 className="text-2xl font-semibold mb-8 animate-fade-up animate-once animate-duration-700 animate-delay-1000">
              WELCOME TO THE HILL OF THE INTELLUAL HORIZONS PLATFORM.
            </h1>
            <h1 className="text-xl font-semibold animate-fade-up animate-once animate-duration-700 animate-delay-1000">
              VISION:
            </h1>
            <p className="text-sm mb-4 animate-fade-down animate-once animate-duration-700 animate-delay-1000">
              old sho of the whomsimziuqimmizqohdgeyuiomzoxjeuhixcdfwqwsj
            </p>
            <h3 className="text-xl font-semibold animate-fade-up animate-once animate-duration-700 animate-delay-1000">
              MISSION:
            </h3>
            <p className="mb-4 animate-fade-down animate-once animate-duration-700 animate-delay-1000">
              old sho of the whomsimziuqimmizqohdgeyuiomzoxjeuhixcdfwqwsj
            </p>
            <h4 className="text-xl font-semibold animate-fade-up animate-once animate-duration-700 animate-delay-1000">
              CORE VALUES:
            </h4>
            <p className="mb-4 animate-fade-down animate-once animate-duration-700 animate-delay-1000">
              old she
            </p>
          </div>
          <div className="flex h-full w-[55%] items-center justify-center">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TG6I-bbD3yxPd5W6GEU1u36Q6SRAjDSvFQ&s"
              alt="Image 1"
              width={500}
              height={500}
              className="h-[65%] w-[65%] rounded-2xl animate-fade-left animate-once animate-duration-700 animate-delay-1000"
            />
          </div>
        </Hero>
        <motion.ul
          initial={{ "--rotate": "0deg" } as any}
          animate={{ "--rotate": "360deg" } as any}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <li style={{ transform: "rotate(var(--rotate))" }} />
          <li style={{ transform: "rotate(var(--rotate))" }} />
          <li style={{ transform: "rotate(var(--rotate))" }} />
        </motion.ul>
        Hello World
        <motion.svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            stroke="#ff0055"
            variants={draw}
            custom={1}
          />
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="170"
            x2="360"
            y2="30"
            stroke="#00cc88"
            variants={draw}
            custom={2.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="30"
            rx="20"
            stroke="#0099ff"
            variants={draw}
            custom={3}
          />
          <motion.circle
            cx="100"
            cy="300"
            r="80"
            stroke="#0099ff"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="230"
            x2="360"
            y2="370"
            stroke="#ff0055"
            custom={3}
            variants={draw}
          />
          <motion.line
            x1="220"
            y1="370"
            x2="360"
            y2="230"
            stroke="#ff0055"
            custom={3.5}
            variants={draw}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="230"
            rx="20"
            stroke="#00cc88"
            custom={4}
            variants={draw}
          />
          <motion.circle
            cx="100"
            cy="500"
            r="80"
            stroke="#00cc88"
            variants={draw}
            custom={3}
          />
          <motion.line
            x1="220"
            y1="430"
            x2="360"
            y2="570"
            stroke="#0099ff"
            variants={draw}
            custom={4}
          />
          <motion.line
            x1="220"
            y1="570"
            x2="360"
            y2="430"
            stroke="#0099ff"
            variants={draw}
            custom={4.5}
          />
          <motion.rect
            width="140"
            height="140"
            x="410"
            y="430"
            rx="20"
            stroke="#ff0055"
            variants={draw}
            custom={5}
          />
        </motion.svg>
        <div className="h-[25rem] bg-red-500 w-full">
          <div data-aos="fade-up">Content to animate</div>
        </div>
      </div>
    </div>
  );
}
