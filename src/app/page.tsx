import Image from "next/image";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Credentials from "./components/Credentials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Skills />
      <Credentials />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
