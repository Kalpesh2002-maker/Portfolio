import { useEffect, useState } from "react";
import About from "./components/About";
import AnimatedBackground from "./components/AnimatedBackground";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>

  {/* 🌈 Animated Background */}
  <AnimatedBackground />

  {/* 🌐 Main Content */}
  <div className="relative z-10 min-h-screen
  bg-white/80 text-black
  dark:bg-black/80 dark:text-white
  backdrop-blur transition-colors duration-300">

    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <Footer />

  </div>
</div>

  );
}
