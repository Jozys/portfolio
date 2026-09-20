import React from "react";
import { useParams } from "react-router-dom";
import useProjects from "../../hooks/projects/useProjects";
import { Box, Button, Container, useTheme } from "@mui/material";
import { useLanguage } from "../../../../language/hooks";
import { ArrowBack } from "@mui/icons-material";
import ProjectDetailHeader from "./components/ProjectDetailHeader";
import EmptyPage from "../../../core/design-system/EmptyPage";
import ProjectDetailVisual from "./components/ProjectDetailVisual";
import ProjectDetailContent from "./components/ProjectDetailContent";

export default function ProjectDetails() {
  const route = useParams<{ id: string }>();
  const project = useProjects().getProjectById(route.id || "");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { language } = useLanguage();
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: "calc(100vh - 70px)", py: { xs: 6, md: 10 } }}>
      {project ? (
        <Container maxWidth="lg">
          <Button
            startIcon={<ArrowBack />}
            onClick={() => window.history.back()}
            sx={{
              color: theme.palette.text.secondary,
              textTransform: "none",
              px: 0,
              fontWeight: 700,
              "&:hover": { color: theme.palette.primary.main },
            }}
          >
            Go Back
          </Button>
          <ProjectDetailHeader project={project} />
          <ProjectDetailVisual project={project} />
          <ProjectDetailContent project={project} />
        </Container>
      ) : (
        <EmptyPage />
      )}
    </Box>
  );
}
