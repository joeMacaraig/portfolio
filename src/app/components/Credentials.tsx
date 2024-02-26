"use client";

import React from "react";
import { credentials } from "../lib/data";

export default function Credentials() {
  return (
    <section id="credentials" className="h-full max-w-6xl mx-auto p-4">
      <div className="flex flex-col">
        <h1 className="py-4 text-4xl">
          <span className="font-incon text-violet-400">03. </span>
          Credentials
        </h1>
        <div className="flex flex-col justify-center sm:grid sm:grid-cols-3 gap-4 h-full py-4">
          {credentials?.map((items, index) => (
            <div className="border relative w-full p-4 flex flex-col gap-2 rounded-xl border-violet-500">
              <h1 className="w-[85%] font-bold text-lg">
                {items.title}
                <span className="text-sm font-thin mx-2">{items.date}</span>
              </h1>
              <h1 className="absolute top-0 right-0 p-4 text-3xl">
                {items.icon}
              </h1>
              <p className="">{items.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
