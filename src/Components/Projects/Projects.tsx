import React from "react";
import { useProjectsData } from "./useProjectsData";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects: React.FC = () => {
  const { loadedProjects, loadMoreProjectsHandler } = useProjectsData();

  return (
    <div className="section projects" id="projects">
      <div
        className="section-title text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h2>My Skills</h2>
      </div>

      <div className="projects-container">
        {loadedProjects.length !== 0
          ? loadedProjects.map((project, index) => {
              const isLeftSided = index % 2 == 0;

              return (
                <ProjectCard projectData={project} isLeftSided={isLeftSided} />
              );
            })
          : null}
      </div>

      <div className="load-button-container text-center">
        <button
          onClick={loadMoreProjectsHandler}
          className="load-button mt-1 sm:mt-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          show more projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
