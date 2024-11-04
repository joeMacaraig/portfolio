import React from "react";
import { skills } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="h-full w-full">
      <div className="max-w-6xl mx-auto py-6 px-4">
        <h1 className="text-2xl md:text-4xl mb-4">
          <span className="font-incon text-violet-400">02. </span>Skills
        </h1>
        <div className="flex items-center justify-center flex-wrap gap-2">
          {skills.map((items, index) => (
            <div
              key={index}
              className="border border-violet-500 shadow-md shadow-violet-500 rounded px-2 py-1 md:px-4 md:py-2 m-1  font-medium hover:animate-bounce ease-in-out duration-300 hover:cursor-pointer"
            >
              <div className="animate-none">{items}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
