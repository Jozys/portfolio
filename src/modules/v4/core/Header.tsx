import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useThemeSwitch } from "../../../theme/hooks";
import { useLanguage } from "../../../language/hooks";
import Logo from "./Logo";
import { Brightness4, Brightness7, Language } from "@mui/icons-material";

export type Tabs = "home" | "projects" | "me";

export interface HeaderProps {
  currentTab?: Tabs;
  tab?: Tabs;
  onChange?: (tab: Tabs) => void;
}

export default function Header({ onChange }: HeaderProps = {}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { isThemeDark, toggleTheme } = useThemeSwitch();
  const { language, languageType, changeLanguage } = useLanguage();

  return (
    <Box
      sx={{
        borderBottom: `1px solid ${
          isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"
        }`,
        background: isDark
          ? "rgba(40, 21, 71, 0.75)"
          : "rgba(255, 255, 255, 0.85)",
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(16px)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 70,
          gap: 2,
        }}
      >
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ cursor: "pointer" }}
          onClick={() => onChange?.("home")}
        >
          <Logo />
          <Box>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 800,
                letterSpacing: ".06em",
                fontSize: 14,
                fontFamily: "Titillium Web, sans-serif",
              }}
            >
              JOSHUA SLAAR
            </Typography>
          </Box>
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip
            title={
              isThemeDark
                ? language.v4.header.themeToggleLight
                : language.v4.header.themeToggleDark
            }
          >
            <IconButton
              size="small"
              onClick={toggleTheme}
              sx={{
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"
                }`,
                color: theme.palette.text.primary,
              }}
            >
              {isThemeDark ? (
                <Brightness7 fontSize="small" />
              ) : (
                <Brightness4 fontSize="small" />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title={language.v4.header.languageToggle}>
            <Button
              size="small"
              startIcon={<Language fontSize="small" />}
              onClick={() =>
                changeLanguage(languageType === "de" ? "en" : "de")
              }
              sx={{
                color: theme.palette.text.primary,
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"
                }`,
                fontWeight: 700,
                fontSize: 12,
                px: 1.2,
                minWidth: "auto",
                textTransform: "uppercase",
              }}
            >
              {languageType}
            </Button>
          </Tooltip>
        </Stack>
      </Container>
    </Box>
  );
}

/* function PrototypeHeader({
  view,
  onChange,
}: {
  view: PrototypeView;
  onChange: (view: PrototypeView) => void;
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { isThemeDark, toggleTheme } = useThemeSwitch();
  const { languageType, changeLanguage } = useLanguage();

  return (
    <Box
      sx={{
        borderBottom: `1px solid ${
          isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)"
        }`,
        background: isDark
          ? "rgba(40, 21, 71, 0.75)"
          : "rgba(255, 255, 255, 0.85)",
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "blur(16px)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: 70,
          gap: 2,
        }}
      >
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          sx={{ cursor: "pointer" }}
          onClick={() => onChange("home")}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: 1.5,
              display: "grid",
              placeItems: "center",
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              color: "#fff",
              fontWeight: 800,
              fontSize: 14,
              boxShadow: `0 4px 12px ${
                isDark ? "rgba(0,0,0,0.4)" : "rgba(18,138,142,0.25)"
              }`,
            }}
          >
            JS
          </Box>
          <Box>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 800,
                letterSpacing: ".06em",
                fontSize: 14,
                fontFamily: "Titillium Web, sans-serif",
              }}
            >
              JOSHUA SLAAR
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.secondary,
                fontSize: 11,
                lineHeight: 1,
              }}
            >
              v4 design prototype
            </Typography>
          </Box>
        </Stack>

        <Tabs
          value={view}
          onChange={(_, next) => onChange(next)}
          textColor="primary"
          indicatorColor="primary"
          sx={{
            display: { xs: "none", md: "flex" },
            minHeight: 70,
            "& .MuiTab-root": {
              minHeight: 70,
              fontWeight: 700,
              fontSize: 14,
              textTransform: "none",
              color: theme.palette.text.secondary,
              "&.Mui-selected": {
                color: theme.palette.primary.main,
              },
            },
          }}
        >
          <Tab value="home" label="Home" />
          <Tab
            value="projects"
            label={languageType === "de" ? "Projekte" : "Projects"}
          />
          <Tab
            value="detail"
            label={languageType === "de" ? "Detailansicht" : "Case Study"}
          />
        </Tabs>

        <Stack direction="row" spacing={1} alignItems="center">
          <Tooltip
            title={
              isThemeDark ? "Zum Light Mode wechseln" : "Zum Dark Mode wechseln"
            }
          >
            <IconButton
              size="small"
              onClick={toggleTheme}
              sx={{
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"
                }`,
                color: theme.palette.text.primary,
              }}
            >
              {isThemeDark ? (
                <Brightness7 fontSize="small" />
              ) : (
                <Brightness4 fontSize="small" />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip
            title={
              languageType === "de"
                ? "Switch to English"
                : "Zu Deutsch wechseln"
            }
          >
            <Button
              size="small"
              startIcon={<LanguageIcon fontSize="small" />}
              onClick={() =>
                changeLanguage(languageType === "de" ? "en" : "de")
              }
              sx={{
                color: theme.palette.text.primary,
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"
                }`,
                fontWeight: 700,
                fontSize: 12,
                px: 1.2,
                minWidth: "auto",
                textTransform: "uppercase",
              }}
            >
              {languageType}
            </Button>
          </Tooltip>

          <Button
            component={RouterLink}
            to="/home"
            size="small"
            variant="text"
            sx={{
              display: { xs: "none", sm: "inline-flex" },
              color: theme.palette.text.secondary,
              fontSize: 12,
              textTransform: "none",
              "&:hover": { color: theme.palette.primary.main },
            }}
          >
            {languageType === "de"
              ? "Zurück zum Portfolio"
              : "Back to live site"}
          </Button>
        </Stack>
      </Container>
    </Box>
  );
/*}*/
