import { Box, Typography, useTheme } from "@mui/material";
import { useLanguage } from "../../../../../language/hooks";

export default function AboutMeHeading() {
  const theme = useTheme();
  const { language } = useLanguage();
  return (
    <Box sx={{ mb: { xs: 8, md: 12 } }}>
      <Typography
        component="h1"
        sx={{
          color: theme.palette.text.primary,
          fontSize: { xs: "2.2rem", sm: "3rem", md: "3.6rem" },
          fontWeight: 800,
          fontFamily: "Titillium Web, sans-serif",
          mt: 0.5,
          mb: 2,
          lineHeight: 1.1,
        }}
      >
        {language.about.me.title}
      </Typography>
      <Typography
        sx={{
          color: theme.palette.text.secondary,
          fontSize: { xs: 16, md: 18 },
          maxWidth: 720,
          lineHeight: 1.65,
          mb: 6,
        }}
      >
        {language.about.me.shortDescription}
      </Typography>
    </Box>
  );
}
