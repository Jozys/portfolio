import React from "react";
import { ProjectsContext, ProjectsContextType } from "./ProjectsContext";

export default function useProjects(): ProjectsContextType {
  const context = React.useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
}
