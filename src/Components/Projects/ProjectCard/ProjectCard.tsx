import React from "react";
import { ProjectType } from "../../../Data/Projects";
import "./project-card.scss";

interface Props {
  projectData: ProjectType;
  isLeftSided?: boolean;
}

const ProjectCard: React.FC<Props> = ({
  projectData,
  isLeftSided = "true",
}) => {
  return (
    <div
      key={projectData.title}
      className={`project-card relative grid grid-cols-1 lg:grid-cols-2${
        isLeftSided ? " left" : " right"
      }`}
    >
      <div className={`${isLeftSided ? " lg:order-1" : " lg:order-2"}`}>
        <div className="project-image-container relative">
          <img
            src={projectData.desktopScreenshot}
            alt={projectData.title}
            className="desktop-screenshot w-full rounded sm:rounded-lg lg:rounded-xl"
          />
          <img
            src={projectData.mobileScreenshot}
            alt={projectData.title}
            className="mobile-screenshot absolute bottom-0"
          />
        </div>
      </div>
      <div
        className={`project-text-area${
          isLeftSided ? " lg:order-2" : " lg:order-1"
        }`}
      >
        <div
          className={`project-title${
            isLeftSided ? " text-left" : " text-right lg:text-left"
          }`}
        >
          <h3>
            {projectData.title.split(" ").map((word) => {
              return (
                <React.Fragment>
                  <span>{word}</span>{" "}
                </React.Fragment>
              );
            })}
          </h3>
        </div>
        <div className="description">
          <p>{projectData.description}</p>
        </div>
        <div className="project-details">
          <p>
            <span>Date.</span> {projectData.date}
          </p>
          <p>
            <span>Skills.</span> {projectData.skills}
          </p>
          <p>
            <span>Technologies.</span> {projectData.technologies}
          </p>
        </div>

        <div className="project-links">
          <a href={projectData.demoLink}>live view</a>
          <a href={projectData.githubRepoLink}>Git repository</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
