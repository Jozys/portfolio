import React from "react";
import { ProjectsContext, ProjectsContextType } from "./ProjectsContext";

export default function useProjects() {
  const context = React.useContext(ProjectsContext);
  return context as ProjectsContextType;
}
