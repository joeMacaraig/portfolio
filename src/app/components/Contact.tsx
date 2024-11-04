"use client";

import React from "react";
import Link from "next/link";
import { icons } from "../lib/data";

export default function Contact() {
  return (
    <section id="contact" className="h-full max-w-6xl mx-auto p-6 space-y-4">
      <div className="flex items-center text-2xl md:text-4xl gap-2">
        <span className="font-incon text-violet-400">05. </span>
        <h1 className="py-4">Contact Me</h1>
        <div className="animate-wiggle">👋🏽</div>
      </div>
      <p className="mt-6 text-gray-400 md:text-lg text-center">
        I am currently looking to grow my career and I am open to new
        opportunities. Feel free to reach out to me through any of these
        platforms.
      </p>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-8 sm:items-center">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
          {icons.map((item, key) => (
            <Link
              key={key}
              href={item.link}
              className={`hover:scale-110 duration-300 ease-in-out flex gap-2 items-center group`}
            >
              <div className={`text-4xl md:text-6xl`}>{item.icon}</div>
              <div>
                <p className="font-light text-gray-400 text-sm">
                  {item.platform}
                </p>
                <h1 className="font-bold text-sm">{item.username}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
