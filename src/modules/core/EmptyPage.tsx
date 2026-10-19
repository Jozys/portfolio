import { Box, Container, Paper, Typography, useTheme } from "@mui/material";
import { useLanguage } from "../../language/hooks";

export default function EmptyPage() {
  const { language } = useLanguage();
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "80vh",
        py: { xs: 6, md: 10 },
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 640,
            mx: "auto",
            textAlign: "center",
            background: theme.surfaces.card,
            backdropFilter: "blur(12px)",
            border: `1px solid ${theme.borders.subtle}`,
            borderRadius: 2.5,
            p: { xs: 3, sm: 4 },
          }}
        >
          <Typography
            component="h1"
            sx={{
              color: theme.palette.error.main,
              fontSize: "clamp(1.75rem, 1.2rem + 2vw, 2.5rem)",
              lineHeight: 1.15,
              fontWeight: 800,
              mb: 2.5,
              fontFamily: "Titillium Web, sans-serif",
            }}
          >
            {language.notFound.title}
          </Typography>

          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: 17,
              lineHeight: 1.65,
              mb: 2,
            }}
          >
            {language.notFound.description}
          </Typography>

          <Box
            component="p"
            sx={{
              display: "inline-block",
              m: "8px 0 0 0",
              px: 2.25,
              py: 1,
              borderRadius: 1,
              background: theme.palette.secondary.main,
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 700,
              fontFamily: "Titillium Web, sans-serif",
            }}
          >
            {language.notFound.code}
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
