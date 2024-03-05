"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { motion } from "framer-motion";
import { hobbies } from "../lib/data";

export default function About() {
  return (
    <motion.section
      id="about"
      className="h-full max-w-6xl mx-auto p-6"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="flex flex-col">
        <h1 className="py-4 text-4xl">
          <span className="font-incon text-violet-400">01. </span>
          About Me
        </h1>
        <div className="grid grid-cols-2 mt-10 ">
          <div className="flex flex-col gap-4">
            <p className="indent-6 text-justify">
              I'm not just someone who writes code—I'm a problem solver, a
              creative thinker, and a tech enthusiast. I love diving into
              complex challenges and architecting solutions that deliver
              exceptional user experiences. Whether it's crafting sleek
              front-end interfaces or designing robust back-end systems, I
              thrive on the opportunity to blend creativity with technical
              expertise. But what truly drives me is the chance to collaborate
              and innovate alongside other developers.
            </p>{" "}
            <p className="indent-6 text-justify">
              {" "}
              In essence, I'm not just passionate about software development—I'm
              passionate about the people, the projects, and the possibilities
              that come with it. And I'm excited to embark on this journey of
              continuous learning, growth, and innovation with like-minded
              individuals who share my vision for building a better digital
              future.
            </p>
            <div className="text-lg">
              <p className="mb-5 font-medium">Hobbies:</p>
              <div className="grid grid-cols-2 gap-4">
                {hobbies.map((item) => (
                  <div className="flex items-center gap-2">
                    <div>{item.icon}</div>
                    <div>{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col gap-4">
            {/* photo */}
            <div className="flex">
              <div className="h-80 w-80 flex flex-1 items-center justify-center border rounded-full border-violet-400 overflow-hidden">
                <Image
                  src="/joe.jpeg"
                  alt="joe"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
            </div>
            {/* about me */}
            <div className="text-center">
              <h1 className="text-lg font-bold">Joseph Bryan</h1>
              <p className="font-light text-lg">Full Stack Software Engineer</p>
            </div>
            {/* icons */}
            <div className="flex gap-6">
              <Link
                href="https://www.linkedin.com/in/joseph-macaraig/"
                className="p-5 text-violet-400 shadow-lg shadow-violet-500 hover:text-white hover:bg-violet-500 hover:-translate-y-2 duration-300 ease-in-out border border-violet-400 rounded flex items-center justify-center transition"
              >
                <SlSocialLinkedin size={24} />
              </Link>
              <Link
                href="https://github.com/joeMacaraig"
                className="p-5 text-violet-400 shadow-lg shadow-violet-500 hover:text-white hover:bg-violet-500 hover:-translate-y-2 duration-300 ease-in-out border border-violet-400 rounded flex items-center justify-center transition"
              >
                <FiGithub size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/josephmacaroni14/"
                className="p-5 text-violet-400 shadow-lg shadow-violet-500 hover:text-white hover:bg-violet-500 hover:-translate-y-2 duration-300 ease-in-out border border-violet-400 rounded flex items-center justify-center transition"
              >
                <FaInstagram size={24} />
              </Link>
            </div>
            {/* hobbies */}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
