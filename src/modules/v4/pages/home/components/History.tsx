import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import DHBW from "../../../../../assets/life/DHBW_Logo.svg";
import Schwarzwald from "../../../../../assets/life/schwarzwald.jpg";
import Teckdigital from "../../../../../assets/teckdigital/teckdigital.webp";
import { useLanguage } from "../../../../../language/hooks";
import HistoryCard from "./HistoryCard";

export interface HistoryProps {
  title?: string;
  subTitle?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function History({
  title,
  subTitle,
  description,
  children,
}: HistoryProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { language } = useLanguage();

  const sectionSubtitle = subTitle ?? language.v4.home.history.subtitle;
  const sectionTitle = title ?? language.v4.home.history.title;
  const sectionDescription =
    description ?? language.v4.home.history.description;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        borderTop: `1px solid ${
          isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
        }`,
        background: isDark
          ? "rgba(255, 255, 255, 0.02)"
          : "rgba(255, 255, 255, 0.4)",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ md: "flex-end" }}
          gap={2}
          sx={{ mb: 4.5 }}
        >
          <Box>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                fontFamily: "Titillium Web, sans-serif",
              }}
            >
              {sectionSubtitle}
            </Typography>
            <Typography
              component="h2"
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: "2rem", md: "2.6rem" },
                fontWeight: 800,
                fontFamily: "Titillium Web, sans-serif",
                mt: 0.5,
              }}
            >
              {sectionTitle}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 420,
              fontSize: 15,
              lineHeight: 1.6,
            }}
          >
            {sectionDescription}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 3.5,
          }}
        >
          {children ? (
            children
          ) : (
            <>
              {/* Station 1: DHBW / SAP */}
              <HistoryCard
                image={DHBW}
                imageAlt="DHBW Karlsruhe"
                badge="2022 - 2025"
                invertImageOnDark
                title={language.home.dhbw.title}
                description={language.home.dhbw.description}
                tags={language.v4.home.history.dhbwTags}
              />

              {/* Station 2: TECKdigital */}
              <HistoryCard
                image={Teckdigital}
                imageAlt="TECKdigital"
                badge="2019 - 2022"
                title={language.home.teckdigital.title}
                description={`${language.home.teckdigital.description.start}TECKdigital. ${language.home.teckdigital.description.middle}TECKboards${language.home.teckdigital.description.end}`}
                tags={language.v4.home.history.teckdigitalTags}
              />

              {/* Station 3: Leben & Ausgleich */}
              <HistoryCard
                image={Schwarzwald}
                imageAlt="Schwarzwald"
                imageVariant="banner"
                title={language.home.life.title}
                description={language.home.life.description}
                tags={language.v4.home.history.lifeTags}
              />
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export { HistoryCard };
