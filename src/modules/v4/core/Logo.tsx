import { Box, useTheme } from "@mui/material";
import React from "react";

export default function Logo() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <Box
      sx={{
        width: 36,
        height: 36,
        borderRadius: 1.5,
        display: "grid",
        placeItems: "center",
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        color: "#fff",
        fontWeight: 800,
        fontSize: 14,
        boxShadow: `0 4px 12px ${
          isDark ? "rgba(0,0,0,0.4)" : "rgba(18,138,142,0.25)"
        }`,
      }}
    >
      JS
    </Box>
  );
}
