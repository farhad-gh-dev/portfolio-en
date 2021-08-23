import React from "react";
import { skillsData } from "../../Data/Skills";
import "./skills.scss";

const Skills: React.FC = () => {
  return (
    <section className="section skills" id="skills">
      <div
        className="section-title text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h2>My Skills</h2>
      </div>
      <div className="skills-cards-container grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7">
        {skillsData.map((s, index) => {
          return (
            <div
              key={s.title}
              title={s.title}
              className="skill-card relative"
              style={{ borderColor: s.color ? s.color : "#000000" }}
              data-aos="fade-up"
              data-aos-delay={`${100 * index}`}
              data-aos-duration="700"
            >
              <img src={s.icon} alt={s.title} className="skill-icon absolute" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
