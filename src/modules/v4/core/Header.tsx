import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useThemeSwitch } from "../../../theme/hooks";
import { useLanguage } from "../../../language/hooks";
import Logo from "./Logo";
import { Brightness4, Brightness7, Language } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export type Tabs = "home" | "projects" | "me";

export interface HeaderProps {
  currentTab?: Tabs;
  tabs: Tabs[];
  onChange?: (tab: Tabs) => void;
}

export default function Header(props: HeaderProps) {
  const { currentTab, tabs, onChange } = props;
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { isThemeDark, toggleTheme } = useThemeSwitch();
  const { language, languageType, changeLanguage } = useLanguage();
  const navigate = useNavigate();

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
          onClick={() => {
            navigate("/v4");
          }}
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

        <Tabs
          value={currentTab}
          onChange={(_, next) => {
            if (onChange) {
              onChange(next);
            }
          }}
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
                color: theme.palette.secondary.main,
              },
            },
          }}
        >
          {tabs.map((tab) => (
            <Tab
              onClick={() => {
                navigate(`/v4/${tab}`);
              }}
              key={tab}
              value={tab}
              label={language.v4.header.tabs[tab]}
            />
          ))}
        </Tabs>

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
