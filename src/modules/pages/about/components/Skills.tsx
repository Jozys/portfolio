import { Box, Paper, Typography, useTheme } from "@mui/material";
import { useLanguage } from "../../../../language/hooks";
import { getTechnologies } from "../../../../data/Technologies";
import TechnologyGroupGrid from "../../../core/TechnologyGroupGrid";

export interface SkillsProps {
  wrapInCard?: boolean;
}

export default function Skills({ wrapInCard = false }: SkillsProps) {
  const theme = useTheme();
  const { language } = useLanguage();
  const technologies = getTechnologies();

  const content = (
    <Box>
      <Paper
        elevation={0}
        sx={{
          mt: 6,
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          background: theme.background.card,
          backdropFilter: "blur(16px)",
          border: `1px solid ${theme.background.border}`,
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography
            sx={{
              color: "text.secondary",
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              fontFamily: "Titillium Web, sans-serif",
            }}
          >
            {language.about.skills.subtitle}
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "text.primary",
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontWeight: 800,
              fontFamily: "Titillium Web, sans-serif",
              mt: 0.5,
            }}
          >
            {language.about.skills.title}
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: 620,
              fontSize: 15,
              lineHeight: 1.6,
              mt: 1,
            }}
          >
            {language.about.skills.description}
          </Typography>
        </Box>

        <TechnologyGroupGrid technologies={technologies} />
      </Paper>
    </Box>
  );

  if (wrapInCard) {
    return (
      <Paper
        elevation={0}
        sx={{
          mt: { xs: 8, md: 12 },
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          background: theme.background.card,
          backdropFilter: "blur(16px)",
          border: `1px solid ${theme.background.border}`,
        }}
      >
        {content}
      </Paper>
    );
  }

  return <Box sx={{ mt: { xs: 8, md: 12 } }}>{content}</Box>;
}
