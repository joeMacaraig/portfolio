//icons
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import {
  FaGoogle,
  FaRunning,
  FaLinkedin,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

import { SiIbm } from "react-icons/si";
import { GiRead, GiBasketballBall, GiGolfFlag } from "react-icons/gi"; //read, basketball

export const icons = [
  {
    icon: React.createElement(FaLinkedin),
    link: "https://www.linkedin.com/in/joseph-macaraig/",
    platform: "Linkedin",
    username: "Joseph Bryan Macaraig",
    color: "text-blue-500",
  },
  {
    icon: React.createElement(FaGithubSquare),
    link: "https://github.com/joeMacaraig",
    platform: "Github",
    username: "joeMacaraig",
    color: "text-gray-500",
  },
  {
    icon: React.createElement(FaInstagramSquare),
    link: "https://www.instagram.com/josephmacaraig14/",
    platform: "Instagram",
    username: "josephmacaraig14",
    color: "text-purple-500",
  },
];

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Credentials", hash: "#credentials" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
  {
    name: "Resume",
    hash: "https://docs.google.com/document/d/1D5JxkNK9Vf1IGYFSmV5mTRh3COlm23xnrUeC-LOodjA/edit?tab=t.0",
  },
] as const;

export const hobbies = [
  {
    title: "running",
    icon: React.createElement(FaRunning),
  },
  {
    title: "basketball",
    icon: React.createElement(GiBasketballBall),
  },
  {
    title: "golfing",
    icon: React.createElement(GiGolfFlag),
  },
  {
    title: "read",
    icon: React.createElement(GiRead),
  },
] as const;

export const credentials = [
  {
    title: "Bachelor’s Degree in Computer Science",
    description:
      "First generation graduate at California State University, San Bernardino.",
    icon: React.createElement(LuGraduationCap),
    date: "May 2023.",
    link: "",
  },
  {
    title: "Google IT Support Professional Certificate",
    description:
      "IT support program, developed by Google, covers troubleshooting, customer service, networking, operating systems, system administration, and security, and includes hands-on labs",
    icon: React.createElement(FaGoogle),
    date: "Dec 2023.",
    link: "https://www.coursera.org/account/accomplishments/specialization/3RTMZY8TC9YL?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
  {
    title: "IBM Full Stack Software Developer Professional Certificate",
    description:
      "Full Stack Software Developer program, developed by IBM, covers front-end, back-end, and cloud development, and includes hand-on labs.",
    icon: React.createElement(SiIbm),
    date: "July 2024.",
    link: "https://www.coursera.org/account/accomplishments/specialization/XSNGMB5QPQQV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
  },
] as const;

export const skills = [
  "HTML / CSS",
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
  "PostgreSQL",
  "Git",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Prisma",
  "IBM Cloud",
  "AWS",
  "MacOS",
  "WindowOS",
  "Linux",
] as const;

export const projects = [
  {
    title: "CarexCell",
    description:
      "A Health Management System that is an intuitive and user-friendly platform that helps schedule and manage healthcare appointments. This application allows users to efficiently create, update, and cancel appointments.",
    image: "/assets/carexcell.png",
    date: "2024",
    github: "https://github.com/joeMacaraig/hms",
    link: "https://carexcell.vercel.app/",
    skills: ["Next.js", "React.js", "Tailwindcss", "Appwrite"],
  },
  {
    title: "LiveDocs",
    description:
      "Your Go-To Collaborative Editor. Unlock the full power of collaboration with our game-changing editor! No more juggling between files or waiting for feedback—now you and your team can create, edit, and refine content together in real time. With dynamic live updates and instant comments.",
    image: "/assets/jbmlivedocs.png",
    date: "2024",
    github: "https://github.com/joeMacaraig/live-docs",
    link: "https://jbmlivedocs.vercel.app/",
    skills: ["Next.js", "React.js", "Tailwindcss", "Clerk", "Sentry"],
  },
  {
    title: "PalasadePrintingSupply",
    description:
      "Palasade Printing Supply offers personalized printing and embroidery services, focusing on crafting unique products that reflect individual or brand identities. From shirts to accessories, they aim to turn creative ideas into tangible art. Originating from an in-house solution, the company has evolved into a full-fledged business serving diverse industries.",
    image: "/assets/palasadeprintingsupply.png",
    date: "2024",
    github: "https://github.com/joeMacaraig/palasadeprintingsupply",
    link: "https://palasadeprintingsupply.vercel.app/",
    skills: ["Next.js", "React.js", "Resend", "Tailwindcss"],
  },
  {
    title: "RetroSoleHub",
    description:
      "A sleek and efficient shoe reselling platform designed for sneaker enthusiasts and collectors,built using the MERN stack (MongoDB, Express, React.js, Node.js). The goal of RetroSoleHub is to provide a seamless marketplace for buyers to browse the limited-edition shoes and see what the store holds.",
    image: "/assets/rsh.jpeg",
    date: "2023",
    github: "https://github.com/joeMacaraig/retrosolehub/tree/v1",
    link: "https://github.com/joeMacaraig/retrosolehub/tree/v1",
    skills: ["React.js", "Node.js", "MongoDB", "Express", "Postman"],
  },
];
