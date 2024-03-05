//icons
import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaGoogle, FaRunning, FaDumbbell } from "react-icons/fa";
import { SiIbm } from "react-icons/si";
import { GiRead, GiBasketballBall } from "react-icons/gi"; //read, basketball

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Skills", hash: "#skills" },
  { name: "Credentials", hash: "#credentials" },
  { name: "Projects", hash: "#projects" },
  { name: "Contact", hash: "#contact" },
] as const;

export const hobbies = [
  {
    title: "run / hike",
    icon: React.createElement(FaRunning),
  },
  {
    title: "play basketball",
    icon: React.createElement(GiBasketballBall),
  },
  {
    title: "lift weights",
    icon: React.createElement(FaDumbbell),
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
    title: "Visuals",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/v.jpeg",
    date: "2024",
    github: "https://github.com/joeMacaraig/visuals-app",
    link: "",
    skills: ["Next.js", "Tailwindcss"],
  },
  {
    title: "Generator",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/pps.jpeg",
    date: "2024",
    github: "https://github.com/joeMacaraig/generator-app",
    link: "",
    skills: ["Next.js", "React.js"],
  },
  {
    title: "PalasadePrintingSupply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/pps.jpeg",
    date: "2024",
    github: "https://github.com/joeMacaraig/pps",
    link: "",
    skills: ["Next.js", "Resend", "Tailwindcss"],
  },
  {
    title: "RetroSoleHub",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/rsh.jpeg",
    date: "2023",
    github: "",
    link: "",
    skills: ["React.js", "Node.js", "MongoDB", "Express", "Postman"],
  },
];

export const moreProjects = [
  {
    title: "Face Recognition",
    description: "Utilized OpenCV ",
    date: "2023",
    github: "https://github.com/joeMacaraig/Face-Recognition",
    skills: ["Python"],
  },
  {
    title: "Webscraper",
    description: "Something",
    date: "2023",
    github: "https://github.com/joeMacaraig/palasade-webscraper",
    skills: ["Python"],
  },
  {
    title: "CRUD API",
    description: "Something",
    date: "2023",
    github: "",
    skills: ["Javascript", "Node.js", "Express", "MongoDB", "Postman"],
  },
  {
    title: "Face Recognition",
    description: "Utilized OpenCV ",
    date: "2023",
    github: "",
    skills: ["Python"],
  },
  {
    title: "Webscraper",
    description: "Something",
    date: "2023",
    github: "",
    skills: ["Python"],
  },
  {
    title: "CRUD API",
    description: "Something",
    date: "2023",
    github: "",
    skills: ["Javascript", "Node.js", "Express", "MongoDB", "Postman"],
  },
  {
    title: "Face Recognition",
    description: "Utilized OpenCV ",
    date: "2023",
    github: "",
    skills: ["Python"],
  },
  {
    title: "Webscraper",
    description: "Something",
    date: "2023",
    github: "",
    skills: ["Python"],
  },
  {
    title: "CRUD API",
    description: "Something",
    date: "2023",
    github: "",
    skills: ["Javascript", "Node.js", "Express", "MongoDB", "Postman"],
  },
  {
    title: "Face Recognition",
    description: "Utilized OpenCV ",
    date: "2023",
    github: "",
    skills: ["Python"],
  },
  {
    title: "Webscraper",
    description: "Something",
    date: "2023",
    github: "",
    skills: ["Python"],
  },
  {
    title: "CRUD API",
    description: "Something",
    date: "2023",
    github: "",
    skills: ["Javascript", "Node.js", "Express", "MongoDB", "Postman"],
  },
];
