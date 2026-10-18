import React from "react";
import { ProjectsContext } from "./ProjectsContext";
import { Project } from "../../../data/types/Project";
import {
  projects as initialProjects,
  sortProjects,
} from "../../../data/Projects";

export default function ProjectsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [projects, setProjects] =
    React.useState<Record<string, Project>>(initialProjects);

  const getProjectById = React.useCallback(
    (id: string): Project | undefined => {
      const found =
        projects[id] ||
        projects[
          Object.keys(projects).find((key) => projects[key].route === id) || ""
        ];
      if (!found || found.disable) {
        return undefined;
      }
      return found;
    },
    [projects],
  );

  const sortedProjects = React.useMemo(() => {
    return sortProjects(Object.values(projects));
  }, [projects]);

  const getProjects = React.useCallback((): Project[] => {
    return sortedProjects;
  }, [sortedProjects]);

  return (
    <ProjectsContext.Provider
      value={{ projects, setProjects, getProjectById, getProjects }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}
