import { Box, Paper, useTheme } from "@mui/material";
import { getAllQuickFacts } from "../../../../data/QuickFact";
import { useLanguage } from "../../../../language/hooks";
import { getAge } from "../../../../utils/utils";
import FormattedText from "../../../../components/FormattedText";
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
        <FormattedText
          content={language.about.me.description}
          values={{ age: getAge() }}
        />
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
