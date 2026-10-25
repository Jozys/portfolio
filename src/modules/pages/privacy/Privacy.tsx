import { Box, Chip, Container, Paper, Stack, Typography, useTheme } from "@mui/material";
import { useLanguage } from "../../../language/hooks";
import FormattedText from "../../../components/FormattedText";

export default function Privacy() {
  const theme = useTheme();
  const { language } = useLanguage();

  const rawMail = import.meta.env.VITE_USER_MAIL || "mailto:info@example.com";
  const mailHref = rawMail.startsWith("mailto:") ? rawMail : `mailto:${rawMail}`;
  const emailDisplay = rawMail.replace(/^mailto:/i, "");
  const hostingProvider =
    import.meta.env.VITE_HOSTING_PROVIDER?.trim() ||
    language.privacy.defaultHostingProvider;

  return (
    <Box sx={{ flex: 1 }}>
      <Box sx={{ minHeight: "calc(100vh - 70px)", position: "relative" }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Chip
              label={language.privacy.lastUpdated}
              size="small"
              sx={{
                fontWeight: 700,
                fontSize: 12,
                borderRadius: 1.5,
                mb: 2,
                background: theme.surfaces.chip,
                color: theme.palette.text.secondary,
                border: `1px solid ${theme.borders.subtle}`,
              }}
            />
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
              {language.privacy.title}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontSize: { xs: 16, md: 18 },
                maxWidth: 720,
                lineHeight: 1.65,
              }}
            >
              {language.privacy.subtitle}
            </Typography>
          </Box>

          <Stack spacing={3.5}>
            {language.privacy.sections.map((section) => (
              <Paper
                key={section.title}
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 4 },
                  borderRadius: 2.5,
                  background: theme.surfaces.card,
                  backdropFilter: "blur(12px)",
                  border: `1px solid ${theme.borders.subtle}`,
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 800,
                    fontSize: { xs: 18, sm: 21 },
                    fontFamily: "Titillium Web, sans-serif",
                    mb: 2,
                  }}
                >
                  {section.title}
                </Typography>
                <FormattedText
                  content={section.content}
                  values={{
                    email: emailDisplay,
                    mailHref,
                    hostingProvider,
                  }}
                />
              </Paper>
            ))}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

