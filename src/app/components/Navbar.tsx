"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "../lib/data";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(true);
  useEffect(() => {
    let prevScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrolledDown = prevScroll < currentScroll;
      setScrolling(!scrolledDown);
      prevScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleResume = () => {
    window.open("/SWE_RESUME.pdf", "_blank");
  };

  return (
    <nav
      className={`sticky top-0 w-full flex items-center justify-between bg-transparent text-white transition-transform duration-300 backdrop-blur-xl py-4 px-6 z-20 ${
        scrolling ? "" : "-translate-y-full"
      }`}
    >
      <div className="text-2xl font-medium font-incon tracking-tighter">
        <Link href={links[0]}>JosephBryanMacaraig.</Link>
      </div>
      <ul className="flex items-center gap-6 text-gray-300 font-incon tracking-wide">
        {links.slice(1).map((link, index) => (
          <li className="hover:text-violet-400">
            <Link key={index} href={link.hash}>
              <span className="text-violet-400 font-incon">0{index + 1}. </span>
              {link.name}
            </Link>
          </li>
        ))}
        <li className="">
          <button
            onClick={handleResume}
            className="border border-violet-400 px-4 py-2 rounded-md tracking-wider"
          >
            Resume
          </button>
        </li>
      </ul>
      {/* <ul className="flex flex-col h-screen w-2/3 sm:w-1/2 border-white border-r text-white fixed left-0 top-0 bg-violet-700 z-10">
        <li className="text-2xl font-medium tracking-tight p-4">
          <Link href={links[0]}>JosephBryanMacaraig.</Link>
        </li>
        {links.slice(1).map((link, index) => (
          <Link key={index} href={link.hash}>
            <li className="hover:bg-violet-500 hover:text-white duration-500 ease-in-out text-xl p-4 border-b">
              {link.name}
            </li>
          </Link>
        ))}
        <li className="text-xl p-4 border-b hover:bg-violet-500 hover:text-white duration-500 ease-in-out">
          <button onClick={handleResume} className="w-full text-start">
            Resume
          </button>
        </li>
      </ul> */}
    </nav>
  );
}
