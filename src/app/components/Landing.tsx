"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <section
      id="home"
      className="h-full sm:h-[80vh] max-w-6xl mx-auto border p-6 scroll-mt-[100rem]"
    >
      <motion.div
        className="h-full flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="py-2 text-3xl font-incon">Hello, my name is </p>
        <p className="py-2 text-7xl font-poppins">Joseph Bryan Macaraig.</p>
        <p className="py-2 text-gray-400 hover:text-black text-6xl font-poppins">
          I build websites and applications.
        </p>
        <p className="py-2 text-gray-400 hover:text-black text-lg w-4/5 text-center font-poppins">
          I am a full-stack developer, I love turning ideas into functional
          websites and applications. With expertise in both frontend and backend
          development, I enjoy creating seamless user experiences.
        </p>
        <div className="flex items-center gap-6 py-2">
          <button className="border border-violet-400 px-6 py-2 rounded-md tracking-wider">
            About Me
          </button>
          <button className="border border-violet-400 px-6 py-2 rounded-md tracking-wider">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}
