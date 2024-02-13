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

  return (
    <nav
      className={`sticky top-0 w-full flex items-center justify-between bg-transparent text-white px-6 py-4 transition-transform duration-300 backdrop-blur-xl z-20 ${
        scrolling ? "" : "-translate-y-full"
      }`}
    >
      <div className="text-2xl font-bold">
        <Link href={links[0]}>Logo</Link>
      </div>
      <ul className="flex items-center gap-6 text-gray-300 font-incon tracking-wide">
        {links.slice(1).map((link, index) => (
          <li className="hover:text-violet-400">
            <Link key={index} href={link.hash}>
              <span className="text-violet-400">0{index + 1}. </span>
              {link.name}
            </Link>
          </li>
        ))}
        <li className="border border-violet-400 px-4 py-2 rounded-md tracking-wider">
          Resume
        </li>
      </ul>
    </nav>
  );
}
