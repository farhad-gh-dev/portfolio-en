import React from "react";
import { useProjectsData } from "./useProjectsData";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects: React.FC = () => {
  const { loadedProjects, allProjectsLoaded, loadMoreProjectsHandler } = useProjectsData();

  return (
    <div className="section projects" id="projects">
      <div
        className="section-title text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <h2>My Projects</h2>
      </div>

      <div className="projects-container">
        {loadedProjects.length !== 0
          ? loadedProjects.map((project, index) => {
              const isLeftSided = index % 2 === 0;

              return (
                <ProjectCard
                  key={project.title}
                  projectData={project}
                  isLeftSided={isLeftSided}
                />
              );
            })
          : null}
      </div>

      {!allProjectsLoaded ? (<div
        className="load-button-container text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <button
          onClick={loadMoreProjectsHandler}
          className="load-button mt-1 sm:mt-0 lg:mt-10 capitalize pt-1 pb-2 px-3 sm:px-6 border sm:border-2 border-black hover:bg-black hover:text-white"
        >
          show more projects
        </button>
      </div>) : null}
    </div>
  );
};

export default Projects;
