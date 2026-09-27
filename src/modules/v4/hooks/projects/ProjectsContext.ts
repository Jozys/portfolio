import React from "react";
import { Project } from "../../../../data/types/Project";

export interface ProjectsContextType {
  projects: Record<string, Project>;
  setProjects: (projects: Record<string, Project>) => void;
  getProjects: () => Project[];
  getProjectById: (id: string) => Project | undefined;
}
export const ProjectsContext = React.createContext<ProjectsContextType | null>(
  null,
);
