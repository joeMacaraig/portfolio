import React from "react";
import { skills } from "../lib/data";

export default function Skills() {
  return (
    <section id="skills" className="h-full max-w-6xl mx-auto border p-6">
      <div className="">
        <h1 className="text-3xl mb-4">
          <span className="font-incon text-violet-400">02. </span>Skills
        </h1>
        <div className="flex items-center justify-center flex-wrap gap-2">
          {skills.map((items, index) => (
            <div key={index} className="border rounded-full px-4 py-2 m-1">
              {items}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
