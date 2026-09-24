import { Box, Typography, useTheme } from "@mui/material";
import { getProjectTitle } from "../../../../../data/Projects";
import { Project } from "../../../../../data/types/Project";
import { useLanguage } from "../../../../../language/hooks";

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
      </Box>
    </Box>
  );
}
