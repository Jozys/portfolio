import React from "react";
import { ProjectsContext } from "./ProjectsContext";
import { Project } from "../../../../data/types/Project";
import { projects as initialProjects } from "../../../../data/Projects";

export default function ProjectsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projects, setProjects] = React.useState<Record<string, Project>>({});

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    console.log(initialProjects);
    setProjects(initialProjects);
  };

  const getProjectById = (id: string): Project | undefined => {
    return projects[id];
  };

  const getProjects = (): Project[] => {
    return Object.values(projects);
  };

  return (
    <ProjectsContext.Provider
      value={{ projects, setProjects: () => {}, getProjectById, getProjects }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}
