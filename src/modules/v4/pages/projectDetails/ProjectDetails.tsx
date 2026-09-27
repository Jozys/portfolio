import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Container, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import EmptyPage from "../../../core/design-system/EmptyPage";
import useProjects from "../../hooks/projects/useProjects";
import ProjectDetailContent from "./components/ProjectDetailContent";
import ProjectDetailHeader from "./components/ProjectDetailHeader";
import ProjectDetailVisual from "./components/ProjectDetailVisual";
import React from "react";

export default function ProjectDetails() {
  const route = useParams<{ id: string }>();
  const project = useProjects().getProjectById(route.id || "");

  const theme = useTheme();

  React.useEffect(() => {
    // Scroll to top when the project changes
    window.scrollTo(0, 0);
  }, [route.id]);

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
              "&:hover": { color: theme.palette.secondary.main },
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
