import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useLanguage } from "../../../language/hooks";
import Logo from "./Logo";

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { language } = useLanguage();

  const githubUrl = import.meta.env.VITE_USER_GITHUB || "https://github.com/";
  const linkedinUrl =
    import.meta.env.VITE_USER_LINKEDIN || "https://www.linkedin.com/";
  const instagramUrl =
    import.meta.env.VITE_USER_INSTAGRAM || "https://www.instagram.com/";
  const mailUrl = import.meta.env.VITE_USER_MAIL || "mailto:info@example.com";

  const socialLinks = [
    { label: "GitHub", icon: <GitHub fontSize="small" />, url: githubUrl },
    {
      label: "LinkedIn",
      icon: <LinkedIn fontSize="small" />,
      url: linkedinUrl,
    },
    {
      label: "Instagram",
      icon: <Instagram fontSize="small" />,
      url: instagramUrl,
    },
    { label: "E-Mail", icon: <Email fontSize="small" />, url: mailUrl },
  ];
  return (
    <Box
      component="footer"
      sx={{
        borderTop: `1px solid ${
          isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"
        }`,
        background: isDark
          ? "rgba(20, 10, 35, 0.65)"
          : "rgba(255, 255, 255, 0.75)",
        backdropFilter: "blur(16px)",
        py: { xs: 5, md: 7 },
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1.2fr 0.8fr" },
            gap: 4,
            alignItems: "center",
          }}
        >
          <Box>
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Logo />
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: 16,
                  fontFamily: "Titillium Web, sans-serif",
                  color: theme.palette.text.primary,
                }}
              >
                JOSHUA SLAAR
              </Typography>
            </Stack>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontSize: 13,
                mt: 1.5,
                maxWidth: 440,
                lineHeight: 1.6,
              }}
            >
              {language.v4.footer.subtitle}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontSize: 12,
                mt: 2,
                opacity: 0.8,
              }}
            >
              © {new Date().getFullYear()} Joshua Slaar
            </Typography>
          </Box>

          <Box sx={{ justifySelf: { sm: "end" } }}>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                fontFamily: "Titillium Web, sans-serif",
                mb: 1.5,
                textAlign: { sm: "right" },
              }}
            >
              {language.v4.footer.socialTitle}
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent={{ sm: "flex-end" }}
            >
              {socialLinks.map((item) => (
                <Tooltip key={item.label} title={item.label}>
                  <IconButton
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="medium"
                    sx={{
                      color: theme.palette.text.primary,
                      border: `1px solid ${
                        isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"
                      }`,
                      background: isDark
                        ? "rgba(255,255,255,0.04)"
                        : "rgba(255,255,255,0.6)",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        color: theme.palette.primary.main,
                        transform: "translateY(-2px)",
                        background: isDark
                          ? "rgba(34,193,195,0.12)"
                          : "rgba(18,138,142,0.08)",
                      },
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
