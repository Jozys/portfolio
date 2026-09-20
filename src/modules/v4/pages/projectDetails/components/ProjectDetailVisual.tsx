import { Box, Paper, useTheme } from "@mui/material";
import { Project } from "../../../../../data/types/Project";

export default function ProjectDetailVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Details can have multiple images, but for the visual header, we will use the first one if available, otherwise fallback to the main image.
  const image =
    project.detailImages && project.detailImages.length > 0
      ? project.detailImages[0]
      : project.image;

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
          minHeight: compact ? 180 : 360,
          maxHeight: compact ? 220 : 500,
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
          p: compact ? 2 : 4,
        }}
      >
        {typeof image === "string" ? (
          <Box
            component="img"
            src={image}
            alt={project.name}
            sx={{
              maxWidth: "100%",
              maxHeight: compact ? 160 : 380,
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
              transform: compact ? "scale(0.85)" : "scale(1.1)",
              transition: "transform 0.35s ease",
            }}
          >
            {image}
          </Box>
        )}
      </Box>
    </Paper>
  );
}
