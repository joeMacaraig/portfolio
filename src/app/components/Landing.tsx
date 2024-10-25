"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Landing() {
  return (
    <section
      id="home"
      className="h-[82vh] max-w-6xl mx-auto p-6 scroll-mt-[100rem]"
    >
      <motion.div
        className="h-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="">
          <p className="py-2 relative text-2xl sm:text-4xl font-incon font-medium">
            Hello, my name is
          </p>
          <p className="py-2 text-4xl sm:text-7xl font-poppins">Joseph Bryan Macaraig.</p>
          <p className="py-2 text-gray-400 text-4xl sm:text-6xl font-poppins">
            I build {/* I build websites and applications. */}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "websites. ",
                1000,
                "applications.",
                1000,
                "platforms.",
                1000,
                "software.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="inline-block text-3xl sm:text-6xl"
              repeat={Infinity}
            />
          </p>
          <p className="py-2 text-gray-400 text-sm sm:text-lg sm:w-4/5 font-poppins text-justify">
            I am a full-stack developer, I love turning ideas into functional
            websites and applications. With expertise in both frontend and
            backend development, I enjoy creating seamless user experiences.
          </p>
          <div className="flex items-center gap-6 py-2">
            <Link
              className="border border-violet-500 hover:bg-violet-400 px-4 py-2 md:px-8 md:py-4 rounded-md tracking-wider text-sm font-bold"
              href="#about"
            >
              About Me 
            </Link>
            <Link
              className="border border-violet-500 hover:bg-violet-400 px-4 py-2 md:px-8 md:py-4 rounded-md tracking-wider text-sm font-bold"
              href="#contact"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
