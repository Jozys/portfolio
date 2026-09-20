/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { useLanguage } from "../../../../language/hooks";
import useProjects from "../../hooks/projects/useProjects";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";

export default function Projects() {
  const theme = useTheme();
  const { language } = useLanguage();
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
              component="h1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: "2.4rem", md: "4rem" },
                lineHeight: 1.05,
                fontWeight: 800,
                fontFamily: "Titillium Web, sans-serif",
              }}
            >
              {language.projects.main.title}
            </Typography>
          </Box>
        </Stack>
        <ProjectFilter
          filter={filter}
          label={language.projects.main.filter.all}
          setFilter={(newFilter) => setFilter(newFilter)}
        />
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
