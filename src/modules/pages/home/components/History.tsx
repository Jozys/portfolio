import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import DHBW from "../../../../assets/life/DHBW_Logo.svg";
import Schwarzwald from "../../../../assets/life/schwarzwald.jpg";
import Teckdigital from "../../../../assets/teckdigital/teckdigital.webp";
import { useLanguage } from "../../../../language/hooks";
import HistoryCard from "./HistoryCard";

export interface HistoryProps {
  title?: string;
  subTitle?: string;
  description?: string;
  children?: React.ReactNode;
}

export default function History({ title, subTitle, children }: HistoryProps) {
  const theme = useTheme();
  const { language } = useLanguage();

  const sectionSubtitle = subTitle ?? language.home.history.subtitle;
  const sectionTitle = title ?? language.home.history.title;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 9 },
        borderTop: `1px solid ${theme.borders.subtle}`,
        background: theme.surfaces.cardSubtle,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          sx={{
            mb: 4.5,
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { md: "flex-end" },
            gap: 2,
          }}
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
              <HistoryCard
                image={DHBW}
                imageAlt="DHBW Karlsruhe"
                badge="2022 - 2025"
                invertImageOnDark
                title={language.home.dhbw.title}
                description={language.home.dhbw.description}
                tags={language.home.history.dhbwTags}
              />

              <HistoryCard
                image={Teckdigital}
                imageAlt="TECKdigital"
                badge="2019 - 2022"
                title={language.home.teckdigital.title}
                description={language.home.teckdigital.description}
                tags={language.home.history.teckdigitalTags}
              />

              <HistoryCard
                image={Schwarzwald}
                imageAlt="Schwarzwald"
                imageVariant="banner"
                title={language.home.life.title}
                description={language.home.life.description}
                tags={language.home.history.lifeTags}
              />
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export { HistoryCard };
