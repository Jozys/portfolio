import { Box, Paper, useTheme } from "@mui/material";
import { getProjectTitle } from "../../../../data/Projects";
import { Project } from "../../../../data/types/Project";
import { useLanguage } from "../../../../language/hooks";

export default function ProjectDetailVisual({ project }: { project: Project }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { language } = useLanguage();

  return (
    <Paper
      elevation={isDark ? 6 : 2}
      sx={{
        mt: 5,
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
        border: `1px solid ${theme.borders.subtle}`,
      }}
    >
      <Box
        sx={{
          minHeight: 180,
          maxHeight: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          background: theme.gradients.visualHeader,
          borderBottom: `1px solid ${theme.borders.subtle}`,
          p: 2,
        }}
      >
        {typeof project.image === "string" ? (
          <Box
            component="img"
            src={project.image}
            alt={getProjectTitle(project, language)}
            sx={{
              maxWidth: "100%",
              maxHeight: 160,
              objectFit: "contain",
              filter: isDark
                ? "drop-shadow(0 10px 20px rgba(0,0,0,0.5))"
                : "drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
            }}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transform: "scale(1.1)",
            }}
          >
            {project.image}
          </Box>
        )}
      </Box>
    </Paper>
  );
}
