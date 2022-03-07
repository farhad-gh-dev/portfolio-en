import React from "react";
import AboutImage from "../../Assets/about.jpg";
import "./about.scss";

const About: React.FC = () => {
  return (
    <div className="section about" id="about">
      <div
        className="section-title text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h2>About Me</h2>
      </div>
      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="image-container relative" data-aos="fade-right">
            <img src={AboutImage} alt="about" className="back-image w-full" />
          </div>
        </div>
        <div className="text-area">
          <p
            className="first-paragraph"
            data-aos="fade-right"
            data-aos-delay="250"
          >
            Until a few month ago, I was a Front-End Dev at <span>QLindex</span>
            , but currently I am looking for an opportunity to enhance my
            skills, test my limits and work on interfaces that make people
            excited.
          </p>
          <p data-aos="fade-left" data-aos-delay="250">
            It was about a year and a half ago I chose my path to be a front-end
            developer, I spent my time learning, working with different
            frameworks like <span>React</span>, <span>Angular</span> and{" "}
            <span>Vue</span> and decided to choose React as my main framework
            and to get reaaally good at it.
          </p>
          <p data-aos="fade-right" data-aos-delay="250">
            since then I have been learning trending technologies and tools to
            make the best possible experience for users.
          </p>
          <p className="projects-link" data-aos="fade-up" data-aos-delay="250">
            - Want to work together?{" "}
            <a href="mailto:farhad.dev.contact@gmail.com">contact me</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
