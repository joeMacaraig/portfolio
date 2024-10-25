"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { links } from "../lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const MobileNavLink = ({
  title,
  link,
  index,
}: {
  title: string;
  link: string;
  index: number;
}) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-5xl uppercase z-10">
      <Link href={link} className="font-incon">
        <span className="text-violet-500">0{index + 1}.</span>
        {title}
      </Link>
    </motion.div>
  );
};

export default function Navbar() {
  const [scrolling, setScrolling] = useState(true);
  const [open, setOpen] = useState(false);

  const handleResume = (path: string) => {
    window.open(path, "_blank");
  };

  const menuVars = {
    initial: {
      scaleX: 0,
      originX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleX: 0,
      originX: 0,
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

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
      className={`sticky top-0 w-full bg-transparent text-white transition-transform duration-300 backdrop-blur-xl py-4 px-6 z-20 ${
        open ? "" : `${scrolling ? "" : "-translate-y-full"}`
      }`}
    >
      {/* non-mobile */}
      <div className="hidden lg:flex items-center justify-between ">
        <div className="text-2xl font-medium font-incon tracking-tighter">
          <Link href={links[0]}>JosephBryanMacaraig.</Link>
        </div>
        <ul className="flex items-center gap-6 text-gray-300 font-incon tracking-wide">
          {links.slice(1).map((link, index) => (
            <li
              key={index}
              className="hover:text-violet-400 last:border last:px-4 last:py-2 last:hover:rounded-xl last:hover:text-white duration-300 ease-in-out"
            >
              <Link href={link.hash} className="">
                <span className="text-violet-400 font-incon">
                  0{index + 1}.{" "}
                </span>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile */}
      <div className="flex lg:hidden justify-between items-center overscroll-none">
        <Link href={links[0]} className="text-2xl font-incon font-medium">
          JBM.
        </Link>
        <button onClick={() => setOpen(!open)}>
          <AiOutlineMenu className="text-2xl hover:scale-110 duration-300 ease-in-out text-white" />
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed left-0 top-0 w-full h-[100vh] origin-top bg-black text-white p-6 z-10"
            >
              <div className="flex h-full flex-col">
                <div className="flex justify-between">
                  <Link
                    href="/"
                    className="text-2xl font-incon font-bold"
                    onClick={() => setOpen(!open)}
                  >
                    JBM.
                  </Link>
                  <div
                    className="cursor-pointer text-md"
                    onClick={() => setOpen(!open)}
                  >
                    <AiOutlineClose className="text-2xl hover:text-red-500 duration-300 ease-in-out" />
                  </div>
                </div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="flex flex-col h-full justify-center font-lora gap-4 "
                >
                  {links.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="overflow-hidden font-medium"
                        onClick={() => setOpen(!open)}
                      >
                        <MobileNavLink
                          title={item.name}
                          link={item.hash}
                          index={index}
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
