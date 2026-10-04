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
      <Box
        sx={{
          width: compact ? 104 : 180,
          height: compact ? 104 : 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.35s ease",
          filter: isDark
            ? "drop-shadow(0 10px 20px rgba(0,0,0,0.5))"
            : "drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
          "&:hover": {
            transform: "scale(1.06)",
          },
          "& > img, & > svg": {
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          },
        }}
      >
        {typeof image === "string" ? (
          <Box
            component="img"
            src={image}
            alt={name}
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              borderRadius: 2,
              objectFit: "contain",
            }}
          />
        ) : (
          image
        )}
      </Box>
    </Box>
  );
}
