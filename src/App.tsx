import React, { useEffect } from "react";
import Aos from "aos";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./Style/app.scss";
import "aos/dist/aos.css";

const App: React.FC = () => {
  // For reveal animations
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1400,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
