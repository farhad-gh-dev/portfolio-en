import { useEffect, useState } from "react";
import { projectsData, ProjectsDataType } from "../../Data/Projects";

export const useProjectsData = () => {
  const [loadedProjects, setLoadedProjects] = useState<ProjectsDataType>([]);

  const loadMoreProjectsHandler = () => {
    if (loadedProjects.length + 3 < projectsData.length) {
      setLoadedProjects(projectsData.slice(0, loadedProjects.length + 3));
    } else if (loadedProjects.length === projectsData.length) {
      return;
    } else {
      setLoadedProjects(projectsData);
    }
  };

  useEffect(() => {
    setLoadedProjects(projectsData.slice(0, 3));
  }, []);

  return {
    loadedProjects,
    loadMoreProjectsHandler,
  };
};
