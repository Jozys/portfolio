import { Timeline } from "@mui/lab";
import { IconButton, useTheme } from "@mui/material";
import { useLanguage } from "../../../language/hooks";
import CustomTimelineItem from "../../core/design-system/TimelineItem";
import TimelineButton from "../design-system/TimelineButton";

import { Project } from "../../../data/types/Project";
import {
  getAllProjects,
  getProjectDescription,
  getProjectTitle,
} from "../../../data/Projects";
import React from "react";
export default function ProjectsTimeline() {
  const { language } = useLanguage();
  const projects = getAllProjects();

  return (
    <Timeline position={window.innerWidth < 1000 ? "left" : "alternate"}>
      {projects.map((project: Project, index) => (
        <CustomTimelineItem
          key={project.name}
          title={getProjectTitle(project, language)}
          description={getProjectDescription(project, language)}
          image={project.image}
          direction={index % 2 === 0 ? "normal" : "opposite"}
          useDot={true}
        >
          <AdditionalProjectInformation project={project} />
        </CustomTimelineItem>
      ))}
    </Timeline>
  );
}

function AdditionalProjectInformation(props: { project: Project }) {
  const { project } = props;
  const theme = useTheme();

  const projectButton = (project: Project): React.ReactNode[] => {
    return Object.keys(project.links).map((linkKey, linkIndex) => {
      const link = project.links[linkKey];
      return (
        <TimelineButton
          key={`${project.name}-link-${linkIndex}`}
          onClick={() => {
            window.open(link.url);
          }}
          title={link.label}
          icon={
            link.icon ? (
              typeof link.icon === "string" ? (
                <img
                  src={link.icon}
                  alt={link.label}
                  height={24}
                  width={"auto"}
                />
              ) : (
                link.icon
              )
            ) : null
          }
        />
      );
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(2),
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {project.technologies.map((tech, techIndex) => (
          <IconButton
            key={`${project.name}-tech-${techIndex}`}
            onClick={() => {
              if (tech.link) {
                window.open(tech.link);
              }
            }}
            style={{
              margin: theme.spacing(0.5),
              color: tech.color || "inherit",
            }}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              height={24}
              width={"auto"}
              style={{ filter: tech.color ? `invert(${tech.color})` : "none" }}
            />
          </IconButton>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          //justifyContent: "space-around", // Fügt space-around hinzu
          //width: "100%", // Stellt sicher, dass die volle Breite genutzt wird
          flexWrap: "wrap", // Erlaubt Umbruch bei vielen Buttons
          gap: theme.spacing(2), // Optional: Fügt Abstand zwischen den Buttons hinzu
        }}
      >
        {projectButton(project)}
      </div>
    </div>
  );
}
