import { Box, Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { getAllStatusInformations } from "../../../../../data/StatusInformation";
import { StatusInformation } from "../../../../../data/types/StatusInformation";
import { useLanguage } from "../../../../../language/hooks";
import StatusItem from "./StatusItem";

export interface StatusProps {
  title?: string;
  description?: string;
  items?: StatusInformation[];
  children?: React.ReactNode;
}

export default function Status({
  title,
  description,
  items,
  children,
}: StatusProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { language } = useLanguage();

  const sectionTitle = title ?? language.v4.home.status.title;
  const sectionDescription = description ?? language.v4.home.status.description;

  const statusItems = items ?? getAllStatusInformations();

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 8 },
        borderTop: `1px solid ${
          isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
        }`,
        background: isDark
          ? "rgba(20, 10, 35, 0.4)"
          : "rgba(255, 255, 255, 0.6)",
        backdropFilter: "blur(12px)",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 2.5fr" },
            gap: 4,
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: theme.palette.secondary.main,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                fontFamily: "Titillium Web, sans-serif",
              }}
            >
              {sectionTitle}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontSize: 14,
                mt: 0.5,
              }}
            >
              {sectionDescription}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              gap: 3,
            }}
          >
            {children
              ? children
              : statusItems.map((item, index) => (
                  <StatusItem key={item.name || index} item={item} />
                ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export { StatusItem };
