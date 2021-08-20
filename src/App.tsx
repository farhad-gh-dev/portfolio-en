import React, { useEffect } from "react";
import Aos from "aos";
import Header from "./Components/Header/Header";
import Skills from "./Components/Skills/Skills";
import "./Style/app.scss";
import "aos/dist/aos.css";

const App: React.FC = () => {
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
      <div className="h-40 w-full">test</div>;
    </div>
  );
};

export default App;
