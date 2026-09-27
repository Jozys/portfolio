import React from "react";
import { QuickFact } from "../../../../../data/types/QuickFact";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { useLanguage } from "../../../../../language/hooks";
import {
  getQuickFactDescription,
  getQuickFactLabel,
  getQuickFactTitle,
} from "../../../../../data/QuickFact";

export default function QuickFactCard(props: QuickFact) {
  const { icon, label } = props;
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { language } = useLanguage();
  return (
    <Paper
      key={label}
      sx={{
        p: 2.5,
        borderRadius: 2,
        background: theme.background.card,
        border: `1px solid ${theme.background.border}`,
        borderLeft: `3px solid ${theme.palette.secondary.main}`,
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: isDark
            ? "0 8px 24px rgba(0,0,0,0.3)"
            : "0 8px 20px rgba(0,0,0,0.06)",
        },
      }}
    >
      <Stack
        sx={{ flexDirection: "row", alignItems: "center", gap: 2, mb: 0.8 }}
      >
        <Box sx={{ color: theme.palette.secondary.main }}>{icon}</Box>
        <Typography
          sx={{
            fontSize: 11,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: ".08em",
            color: theme.palette.text.secondary,
          }}
        >
          {getQuickFactLabel(props, language)}
        </Typography>
      </Stack>
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: 15,
          color: theme.palette.text.primary,
        }}
      >
        {getQuickFactTitle(props, language)}
      </Typography>
      <Typography
        sx={{
          fontSize: 12,
          color: theme.palette.text.secondary,
          mt: 0.3,
        }}
      >
        {getQuickFactDescription(props, language)}
      </Typography>
    </Paper>
  );
}
