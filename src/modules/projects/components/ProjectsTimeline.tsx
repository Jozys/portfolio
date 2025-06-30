import { Timeline } from "@mui/lab";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useLanguage } from "../../../language/hooks";
import CustomTimelineItem from "../../core/design-system/TimelineItem";
import TimelineButton from "../design-system/TimelineButton";

import React from "react";
import {
  getAllProjects,
  getLabel,
  getProjectDescription,
  getProjectTitle,
} from "../../../data/Projects";
import { Project } from "../../../data/types/Project";
import { Technologies } from "../../core/components/Technologies";
export default function ProjectsTimeline() {
  const { language } = useLanguage();
  const projects = getAllProjects();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Timeline position={window.innerWidth < 1000 ? "left" : "alternate"}>
      {projects.map((project: Project, index) => (
        <CustomTimelineItem
          key={project.name}
          title={getProjectTitle(project, language)}
          description={getProjectDescription(project, language)}
          image={project.image}
          direction={index % 2 === 0 ? "normal" : "opposite"}
          useDot={!isMobile}
          dotContent={
            project.years ? (
              <Typography padding={2} fontWeight={"bold"} textAlign={"center"}>
                {project.years}
              </Typography>
            ) : undefined
          }
        >
          <AdditionalProjectInformation project={project} />
          {isMobile && (
            // Show years in a circle on mobile
            <Box
              sx={{
                mt: 4,
                backgroundColor: theme.palette.primary.main,
                borderRadius: "50%",
                paddingY: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography fontWeight={"bold"}>{project.years}</Typography>
            </Box>
          )}
        </CustomTimelineItem>
      ))}
    </Timeline>
  );
}

function AdditionalProjectInformation(props: { project: Project }) {
  const { project } = props;
  const theme = useTheme();
  const { language } = useLanguage();

  const projectButton = (project: Project): React.ReactNode[] => {
    return Object.keys(project.links).map((linkKey, linkIndex) => {
      const link = project.links[linkKey];
      return (
        <TimelineButton
          key={`${project.name}-link-${linkIndex}`}
          onClick={() => {
            window.open(
              link.url,
              link.disableOpenInNewTab ? "_self" : "_blank"
            );
          }}
          title={getLabel(link.label, language)}
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
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Technologies technologies={project.technologies} />
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap", // Erlaubt Umbruch bei vielen Buttons
          gap: theme.spacing(2), // Optional: Fügt Abstand zwischen den Buttons hinzu
        }}
      >
        {projectButton(project)}
      </div>
    </div>
  );
}
