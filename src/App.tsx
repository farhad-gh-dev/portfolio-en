import React, { useEffect } from "react";
import Aos from "aos";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import "./Style/app.scss";
import "aos/dist/aos.css";

const App: React.FC = () => {
  // For reveal animations
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
