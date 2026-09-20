import { Box, Stack, Typography, useTheme } from "@mui/material";
import {
  formatProjectYears,
  getProjectDescription,
  getProjectTitle,
} from "../../../../../data/Projects";
import { Project } from "../../../../../data/types/Project";
import { useLanguage } from "../../../../../language/hooks";
import TechnologyButton from "../../../core/Technology";

export interface ProjectDetailHeaderProps {
  project: Project;
}

export default function ProjectDetailHeader(props: ProjectDetailHeaderProps) {
  const { project } = props;
  const theme = useTheme();
  const { language } = useLanguage();
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
        gap: { xs: 4, md: 6 },
        alignItems: "center",
        mt: 3,
      }}
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
          {project.years ? `• ${formatProjectYears(project.years)}` : ""}
        </Typography>
        <Typography
          component="h1"
          sx={{
            color: theme.palette.text.primary,
            fontSize: { xs: "2.5rem", md: "4.2rem" },
            lineHeight: 1.05,
            letterSpacing: "-.04em",
            fontWeight: 800,
            mt: 1,
            fontFamily: "Titillium Web, sans-serif",
          }}
        >
          {getProjectTitle(project, language)}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            fontSize: { xs: 17, md: 19 },
            lineHeight: 1.6,
            mt: 2.5,
            maxWidth: 600,
          }}
        >
          {getProjectDescription(project, language)}
        </Typography>
      </Box>
      <Stack sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }} gap={2}>
        {project.technologies.map((technology) => (
          <TechnologyButton
            key={technology.name}
            technology={technology}
            showName
          />
        ))}
      </Stack>
    </Box>
  );
}
