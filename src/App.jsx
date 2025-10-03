import { useState, useEffect } from "react";
import "./styles.css";

// Composants
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(true); // ✅ Dark mode activé par défaut

  // Toggle dark mode
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const sections = ["hero", "about", "skills", "projects", "experience", "contact"];

  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} sections={sections} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
