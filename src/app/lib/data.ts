//icons
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaGoogle } from "react-icons/fa";
import { SiIbm } from "react-icons/si";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Credentials", hash: "#credentials" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
] as const;

export const credentials = [
  {
    title: "Bachelor’s Degree in Computer Science",
    description:
      "First generation graduate at California State University, San Bernardino. Relevant Courses: Data Structures and Algorithms, Artificial Intelligence, Machine Learning, Databases, Web Development, Software Design and Development, Operating Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023.",
  },
  {
    title: "Google IT Support Professional Certificate",
    description:
      "IT support program, developed by Google, that covers troubleshooting, customer service, networking, operating systems, system administration, and security, and includes hands-on labs",
    icon: React.createElement(FaGoogle),
    date: "Dec 2023.",
  },
  {
    title: "IBM Full Stack Software Developer Professional Certificate",
    description:
      "Full Stack Software Developer program, developed by IBM, that covers front-end, back-end, and cloud development, and includes hand-on labs.",
    icon: React.createElement(SiIbm),
    date: "Present.",
  },
] as const;

export const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "Python",
  "C/C++",
  "C#",
  "React",
  "React Native",
  "Expo",
  "Node.js",
  "Express",
  "Next.js",
  "REST API",
  "Redux",
  "Django",
  "MongoDB",
  "SQL",
  "NoSQL",
  "Git",
  "AWS",
  "Docker",
  "GraphQL",
  "Prisma",
] as const;

export const projects = [
  {
    title: "RetroSoleHub",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "url",
    date: "2023",
    skills: ["React.js", "Node.js", "MongoDB", "Express", "Postman"],
  },
  {
    title: "Visuals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "url",
    date: "2024",
    skills: ["Next.js", "Tailwindcss"],
  },
  {
    title: "Generator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "url",
    date: "2024",
    skills: ["Next.js", "React.js"],
  },
  {
    title: "PalasadePrintingSupply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "url",
    date: "2024",
    skills: ["Next.js", "Resend", "Tailwindcss"],
  },
  {
    title: "Face Recognition",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "url",
    date: "2023",
    skills: ["Python", "Numpy"],
  },
];
