import React from "react";
import { projects } from "../lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="h-full max-w-6xl mx-auto p-4"
    >
      <div className="flex flex-col gap-4">
        <h1 className="py-4 text-4xl">
          <span className="font-incon text-violet-400">04. </span>
          Projects
        </h1>
        <div className="flex flex-col gap-2">
          {projects.map((items, index) => (
            <div
              key={index}
              className="border border-violet-400 rounded-lg px-4 py-2 m-2 grid grid-cols-2 gap-4"
            >
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl uppercase font-medium">{items.title}.</h1>
                  <h1>{items.date}</h1>
                </div>
                <p>{items.description}</p>
                <div className="flex flex-row flex-wrap">
                  {items.skills.map((items) => (
                    <div className="bg-white text-black rounded-full px-4 py-2 m-1">
                      {items}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-full bg-white"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
