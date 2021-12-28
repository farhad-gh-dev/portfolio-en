import React from "react";
import { ProjectType } from "../../../Data/Projects";
import "./project-card.scss";
import ProjectCardImage from "./ProjectCardImage";

interface Props {
  projectData: ProjectType;
  isLeftSided?: boolean;
}

const ProjectCard: React.FC<Props> = ({ projectData, isLeftSided = true }) => {
  return (
    <div
      key={projectData.title}
      className={`project-card relative grid grid-cols-1 lg:grid-cols-2${
        isLeftSided ? " left" : " right"
      }`}
    >
      <div className={`${isLeftSided ? " lg:order-1" : " lg:order-2"}`}>
        <ProjectCardImage
          isLeftSided={isLeftSided}
          desktopImageSrc={projectData.desktopScreenshot}
          mobileImageSrc={projectData.mobileScreenshot}
          imageAlt={projectData.title}
        />
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
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3>
            {projectData.title.split(" ").map((word) => {
              return (
                <React.Fragment key={word}>
                  <span className="custom-primary-font">{word}</span>{" "}
                </React.Fragment>
              );
            })}
          </h3>
        </div>
        <div className="description" data-aos="fade-right" data-aos-delay="350">
          <p>{projectData.description}</p>
        </div>
        <div
          className="project-details"
          data-aos="fade-left"
          data-aos-delay="450"
        >
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

        <div className="project-links" data-aos="fade-up" data-aos-delay="500">
          <a href={projectData.demoLink} target="_blank" rel="noreferrer">
            live view
          </a>
          <a href={projectData.githubRepoLink} target="_blank" rel="noreferrer">
            Git repository
          </a>
        </div>
      </div>
      <div
        className={`bottom-border absolute bottom-0${
          isLeftSided ? " left-0" : " right-0"
        }`}
        data-aos={`${isLeftSided ? "fade-left" : "fade-right"}`}
      ></div>
    </div>
  );
};

export default ProjectCard;
