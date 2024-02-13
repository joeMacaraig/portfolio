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
      "First generation graduate at California State University, San Bernardino",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023",
  },
  {
    title: "Google IT Suppoer Professional Certificate",
    description: "IT support program, developed by Google, that covers troubleshooting, customer service, networking, operating systems, system administration, and security, and includes hands-on labs",
    icon: React.createElement(FaGoogle),
    date: "Dec 2023",
  },
  {
    title: "IBM Full Stack Software Developer Professional Certificate",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(SiIbm),
    date: "2023 - present",
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
] as const;
