import React from "react";
import { ProjectsContext } from "./ProjectsContext";
import { Project } from "../../../../data/types/Project";
import {
  projects as initialProjects,
  sortProjects,
} from "../../../../data/Projects";

export default function ProjectsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projects, setProjects] =
    React.useState<Record<string, Project>>(initialProjects);

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setProjects(initialProjects);
  };

  const getProjectById = (id: string): Project | undefined => {
    return projects[id];
  };

  const sortedProjects = React.useMemo(() => {
    return sortProjects(Object.values(projects));
  }, [projects]);

  const getProjects = React.useCallback((): Project[] => {
    return sortedProjects;
  }, [sortedProjects]);

  return (
    <ProjectsContext.Provider
      value={{ projects, setProjects: () => {}, getProjectById, getProjects }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}
