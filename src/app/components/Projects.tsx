import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, moreProjects } from "../lib/data";

export default function Projects() {
  return (
    <section id="projects" className="h-full max-w-6xl mx-auto p-4">
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
              <div className="flex flex-col gap-4 z-10 text-blue-500">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl uppercase font-medium">
                    {items.title}.
                  </h1>
                  <h1>{items.date}</h1>
                </div>
                <p>{items.description}</p>
                <div className="flex flex-row flex-wrap">
                  {items.skills.map((item) => (
                    <div className="bg-white text-black rounded-full px-4 py-2 m-1">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-full bg-white overflow-hidden">
                <Image
                  src={items.image}
                  alt={items.title}
                  width={100}
                  height={100}
                  layout="responsive"
                  className="hover:scale-125 duration-500 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* additonal projects */}
      <div className="flex flex-col text-center gap-4">
        <h1 className="text-2xl font-medium">Additional Projects</h1>
        <div className="grid grid-cols-2 gap-4">
          {moreProjects?.map((items) => (
            <div className="flex flex-col p-4 border rounded">
              <div className="flex gap-2 items-center">
                <Link
                  href={items.github}
                  className="bg-white p-4 rounded-full"
                ></Link>
                <div>{items.title}</div>
                <div className="flex flex-grow justify-end">{items.date}</div>
              </div>
              <div>{items.description}</div>
              <div className="flex items-center gap-2">
                {items.skills.map((item) => (
                  <div>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
