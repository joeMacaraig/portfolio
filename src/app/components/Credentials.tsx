"use client";

import React from "react";
import { credentials } from "../lib/data";

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="h-full md:h-[100vh] max-w-6xl mx-auto border p-6"
    >
      <div className="flex flex-col">
        <h1 className="py-4 text-3xl">
          <span className="font-incon text-violet-400">03. </span>
          Credentials
        </h1>
      </div>
      {/* {credentials.map((items, index) => (
        <div className="grid grid-cols-9">
          {index % 2 == 0 ? (
            <>
              <div className="col-span-4 w-full h-full ">
                <div className="w-full h-full bg-gray- rounded-md p-2 md:pl-4">
                  <h1 className="text-white text-xl font-medium py-2">{items.title}</h1>
                  <p className="text-gray-100 sm:text-sm text-xs">
                    {items.description}
                  </p>
                </div>
              </div>
              <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-black"></div>
                <div className="absolute p-2 text-3xl rounded-full bg-black z-10 text-white text-center">
                  {items.icon}
                </div>
              </div>
              <div className="col-span-4 w-full h-full"></div>
            </>
          ) : (
            <>
              <div className="col-span-4 w-full h-full"></div>
              <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                <div className="h-full w-1 bg-black"></div>
                <div className="absolute p-2 text-3xl rounded-full bg-black z-10 text-white text-center">
                  {items.icon}
                </div>
              </div>
              <div className="col-span-4 w-full h-full ">
                <div className="w-full h-full bg-black rounded-md p-2 md:pl-4">
                  <h1 className="text-white text-xl font-medium py-2">{items.title}</h1>
                  <p className="text-gray-100 sm:text-sm text-xs">
                    {items.description}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      ))} */}
    </section>
  );
}
