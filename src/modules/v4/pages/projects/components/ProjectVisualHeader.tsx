import { Box, useTheme } from "@mui/material";

export default function ProjectVisualHeader({
  image,
  name,
  compact = false,
}: {
  image: string | React.ReactNode;
  name: string;
  compact?: boolean;
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
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
          alt={name}
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
  );
}
