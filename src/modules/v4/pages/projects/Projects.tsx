/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React, { useMemo, useState } from "react";
import useProjects from "../../hooks/projects/useProjects";
import { useLanguage } from "../../../../language/hooks";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  const theme = useTheme();
  const { languageType } = useLanguage();
  const { getProjects } = useProjects();
  const projects = getProjects();
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) =>
      p.technologies.some(
        (t) => t.type?.toLowerCase() === filter.toLowerCase(),
      ),
    );
  }, [projects, filter]);
  return (
    <Box sx={{ minHeight: "calc(100vh - 70px)", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ md: "flex-end" }}
          gap={3}
        >
          <Box>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                fontFamily: "Titillium Web, sans-serif",
              }}
            >
              {languageType === "de" ? "Ausgewählte Arbeiten" : "Selected work"}
            </Typography>
            <Typography
              component="h1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: "2.4rem", md: "4rem" },
                lineHeight: 1.05,
                letterSpacing: "-.04em",
                fontWeight: 800,
                mt: 1,
                fontFamily: "Titillium Web, sans-serif",
              }}
            >
              {languageType === "de"
                ? "Mit Konzept & Leidenschaft."
                : "Built with intent."}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 380,
              lineHeight: 1.6,
              fontSize: 15,
            }}
          >
            {languageType === "de"
              ? "Eine strukturierte Übersicht realisierter Anwendungen, Tools und Systeme für Web, Mobile und IoT."
              : "A structured showcase of developed applications, tools, and systems across web, mobile, and IoT."}
          </Typography>
        </Stack>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 3.5,
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              onOpen={() => {
                console.log("open", project.name);
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
