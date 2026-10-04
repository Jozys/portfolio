import { Box, Typography, useTheme } from "@mui/material";
import { useLanguage } from "../../../../language/hooks";
import { Project } from "../../../../data/types/Project";
import TechnologyGroupGrid from "../../../core/TechnologyGroupGrid";

export interface ProjectTechnologieListProps {
  project: Project;
}

export default function ProjectTechnologieList(
  props: ProjectTechnologieListProps,
) {
  const theme = useTheme();
  const { language } = useLanguage();
  const { project } = props;

  if (!project.technologies || project.technologies.length === 0) {
    return null;
  }

  return (
    <Box sx={{ mt: 8 }}>
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontSize: { xs: 24, md: 30 },
            fontWeight: 800,
            fontFamily: "Titillium Web, sans-serif",
            mt: 0.5,
          }}
        >
          {language.projects?.technologies.title}
        </Typography>
      </Box>

      <TechnologyGroupGrid technologies={project.technologies} />
    </Box>
  );
}
