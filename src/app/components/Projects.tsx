import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/data";
export default function Projects() {
  return (
    <section id="projects" className="h-full max-w-6xl mx-auto p-4">
      <div className="flex flex-col gap-4">
        <h1 className="py-4 text-2xl md:text-4xl">
          <span className="font-incon text-violet-400">04. </span>
          Projects
        </h1>
        <div className="flex flex-col gap-2">
          {projects.map((items, index) => (
            <div
              key={index}
              className="border border-violet-400 my-2 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4"
            >
              <div className="flex flex-col justify-between gap-4 p-4 z-10">
                <div className="flex justify-between items-center">
                  <Link
                    href={items.link}
                    className="text-lg sm:text-2xl uppercase font-bold hover:opacity-75"
                  >
                    {items.title}.
                  </Link>
                  <h1 className="font-light">{items.date}</h1>
                </div>
                <p className="text-justify text-sm sm:text-base">
                  {items.description}
                </p>
                <div className="flex flex-row flex-wrap gap-2">
                  {items.skills.map((item, index) => (
                    <div
                      key={index}
                      className="text-white rounded-full px-2 py-1 md:px-4 md:py-2 text-sm md:text-base"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-full bg-white overflow-hidden">
                <Link href={items.link}>
                  <Image
                    src={items.image}
                    alt={items.title}
                    width={100}
                    height={100}
                    layout="responsive"
                    className="hover:scale-125 duration-500 ease-in-out"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="text-gray-400">
            For additonal projects, visit my github:{" "}
            <Link
              href="https://github.com/joeMacaraig"
              className="underline hover:text-white duration-300"
            >
              @joeMacaraig
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
