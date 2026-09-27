import { Box, Paper, Typography, useTheme } from "@mui/material";
import { getAllQuickFacts } from "../../../../../data/QuickFact";
import { useLanguage } from "../../../../../language/hooks";
import QuickFactCard from "./QuickFactCard";

export default function QuickFacts() {
  const theme = useTheme();
  const { language } = useLanguage();

  const quickFacts = getAllQuickFacts();
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 4 },
          borderRadius: 2.5,
          background: theme.background.card,
          backdropFilter: "blur(12px)",
          border: `1px solid ${theme.background.border}`,
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 15, sm: 16 },
            lineHeight: 1.75,
            color: theme.palette.text.secondary,
          }}
        >
          {language.about.quickFacts.heading}
        </Typography>
      </Paper>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: 2,
        }}
      >
        {quickFacts.map((fact, index) => (
          <QuickFactCard key={index} {...fact} />
        ))}
      </Box>
    </Box>
  );
}
