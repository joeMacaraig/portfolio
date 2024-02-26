"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { motion } from "framer-motion";

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
        <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2">
          <div className="w-[90%]">
            <p className="mb-6">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vulputate sapien nec sagittis aliquam malesuada bibendum.
              Venenatis cras sed felis eget velit aliquet. Erat imperdiet sed
              euismod nisi porta lorem mollis aliquam. Id leo in vitae turpis
              massa sed elementum. Morbi leo urna molestie at. Senectus et netus
              et malesuada fames ac turpis. Sed vulputate odio ut enim. Volutpat
              est velit egestas dui id ornare arcu odio ut. Cras pulvinar mattis
              nunc sed blandit. At quis risus sed vulputate odio ut. Mauris
              ultrices eros in cursus turpis massa tincidunt dui ut. Duis
              ultricies lacus sed turpis tincidunt id.
            </p>
            <p className="mb-6">
              Suspendisse potenti nullam ac tortor vitae purus. Adipiscing elit
              ut aliquam purus sit. Senectus et netus et malesuada fames ac
              turpis egestas. Suspendisse in est ante in nibh. Ornare lectus sit
              amet est placerat in egestas erat imperdiet. Senectus et netus et
              malesuada fames ac turpis. Id semper risus in hendrerit gravida.
              Adipiscing enim eu turpis egestas pretium aenean pharetra magna
              ac. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Eget
              gravida cum sociis natoque penatibus. Pellentesque massa placerat
              duis ultricies lacus sed turpis. Massa enim nec dui nunc. Feugiat
              nisl pretium fusce id velit. In fermentum et sollicitudin ac orci
              phasellus. Orci a scelerisque purus semper eget duis at tellus.
            </p>
          </div>
          <div className="flex items-center flex-col mt-10">
            <div className="mb-4 flex">
              <div className="h-80 w-80 rounded flex flex-1 items-center justify-center border border-violet-400 overflow-hidden">
                <Image
                  src="/joe.jpeg"
                  alt="joe"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://www.linkedin.com/in/joseph-macaraig/"
                className="p-5 text-violet-400 shadow-lg shadow-violet-500 hover:text-white hover:bg-violet-500 hover:-translate-y-2 duration-300 ease-in-out border border-violet-400 rounded-full flex items-center justify-center transition"
              >
                <SlSocialLinkedin size={24} />
              </Link>
              <Link
                href="https://github.com/joeMacaraig"
                className="p-5 text-violet-400 shadow-lg shadow-violet-500 hover:text-white hover:bg-violet-500 hover:-translate-y-2 duration-300 ease-in-out border border-violet-400 rounded-full flex items-center justify-center transition"
              >
                <FiGithub size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/josephmacaroni14/"
                className="p-5 text-violet-400 shadow-lg shadow-violet-500 hover:text-white hover:bg-violet-500 hover:-translate-y-2 duration-300 ease-in-out border border-violet-400 rounded-full flex items-center justify-center transition"
              >
                <FaInstagram size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
