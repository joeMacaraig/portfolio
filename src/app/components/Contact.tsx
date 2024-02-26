"use client";
import React from "react";
import toast from "react-hot-toast";
import { sendEmail } from "../lib/sendEmail";

export default function Contact() {
  return (
    <section id="contact" className="h-full max-w-6xl mx-auto p-6">
      <div className="flex items-center text-4xl gap-2">
        <span className="font-incon text-violet-400">05. </span>
        <h1 className="py-4">Contact Me</h1>
        <div className="animate-wiggle">👋🏽</div>
      </div>
      <div className="">
        <p className="mt-6 font-medium text-gray-400 text-lg">
          I am currently looking to grow my career and I am open to new
          opportunities. Please contact me directly at{" "}
          <a className="underline" href="mailto:jbmacaraig14@gmail.com">
            jbmacaraig14@gmail.com
          </a>{" "}
          or through the form below. Feel free to direct message me on{" "}
          <a
            className="underline"
            href="https://www.instagram.com/josephmacaroni14/"
          >
            instagram.
          </a>
        </p>
      </div>
      <div>
        <form
          className="mt-10 flex flex-col dark:text-black"
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <input
            className="h-14 px-4 rounded border dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
          <textarea
            className="h-52 my-3 rounded border p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <div className="w-full">
            <button
              className=" bg-violet-500 hover:bg-violet-400 text-white px-6 py-2 rounded w-full"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
