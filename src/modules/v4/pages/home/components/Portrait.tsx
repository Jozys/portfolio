import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export interface PortraitProps {
  image: string;
  statusTitle: string;
  statusDescription: string;
}

export default function Portrait(props: PortraitProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 320, md: 440 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: { xs: "6% 6% 2% 6%", md: "2% 6% 2% 6%" },
          borderRadius: 4,
          background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
          opacity: isDark ? 0.6 : 0.45,
          transform: "rotate(4deg)",
          filter: "blur(2px)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: { xs: "3% 8% 6% 3%", md: "0 8% 4% 1%" },
          borderRadius: 4,
          background: theme.palette.primary.main,
          opacity: isDark ? 0.35 : 0.25,
          transform: "rotate(-3deg)",
        }}
      />
      <Paper
        elevation={isDark ? 10 : 4}
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: 380,
          borderRadius: 3.5,
          overflow: "hidden",
          background: isDark
            ? "rgba(35, 18, 65, 0.9)"
            : "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          border: `1px solid ${
            isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)"
          }`,
          boxShadow: isDark
            ? "0 20px 50px rgba(0,0,0,0.6)"
            : "0 16px 40px rgba(18,138,142,0.14)",
        }}
      >
        <Box
          component="img"
          src={props.image}
          alt="Joshua Slaar"
          sx={{
            width: "100%",
            height: { xs: 330, md: 400 },
            objectFit: "cover",
            display: "block",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            left: 16,
            right: 16,
            p: 2,
            borderRadius: 2,
            background: isDark
              ? "rgba(20, 10, 35, 0.88)"
              : "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(16px)",
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)"
            }`,
            boxShadow: isDark
              ? "0 8px 24px rgba(0,0,0,0.5)"
              : "0 8px 24px rgba(0,0,0,0.08)",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 10px #10b981",
                flexShrink: 0,
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: 13,
                  color: theme.palette.text.primary,
                  lineHeight: 1.2,
                }}
              >
                {props.statusTitle}
              </Typography>
              <Typography
                sx={{
                  fontSize: 11,
                  color: theme.palette.text.secondary,
                  mt: 0.3,
                }}
              >
                {props.statusDescription}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
}
