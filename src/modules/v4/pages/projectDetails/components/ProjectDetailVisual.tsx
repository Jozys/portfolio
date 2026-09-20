import { Box, Paper, useTheme } from "@mui/material";
import { Project } from "../../../../../data/types/Project";

export default function ProjectDetailVisual({ project }: { project: Project }) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Paper
      elevation={isDark ? 6 : 2}
      sx={{
        mt: 5,
        borderRadius: 3,
        overflow: "hidden",
        border: `1px solid ${
          isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"
        }`,
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
          background: isDark
            ? "radial-gradient(circle, rgba(255,255,255,0.06) 0%, rgba(20,10,35,0.6) 100%)"
            : "radial-gradient(circle, rgba(18,138,142,0.06) 0%, rgba(240,244,248,0.85) 100%)",
          borderBottom: `1px solid ${
            isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
          }`,
          p: 2,
        }}
      >
        {typeof project.image === "string" ? (
          <Box
            component="img"
            src={project.image}
            alt={project.name}
            sx={{
              maxWidth: "100%",
              maxHeight: 160,
              objectFit: "contain",
              transition: "transform 0.35s ease",
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
              transition: "transform 0.35s ease",
            }}
          >
            {project.image}
          </Box>
        )}
      </Box>
    </Paper>
  );
}
