import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
  alpha,
} from "@mui/material";
import { useThemeSwitch } from "../../theme/hooks";
import { useLanguage } from "../../language/hooks";
import Logo from "./Logo";
import {
  Brightness4,
  Brightness7,
  CloseRounded,
  HomeRounded,
  Language,
  MenuRounded,
  PersonOutlineRounded,
  WorkOutlineRounded,
} from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export type Tabs = "home" | "projects" | "me";

export interface HeaderProps {
  currentTab?: Tabs;
  tabs: Tabs[];
  onChange?: (tab: Tabs) => void;
}

const TAB_ICONS: Partial<Record<Tabs, React.ReactElement>> = {
  home: <HomeRounded fontSize="small" />,
  projects: <WorkOutlineRounded fontSize="small" />,
  me: <PersonOutlineRounded fontSize="small" />,
};

export default function Header(props: HeaderProps) {
  const { currentTab, tabs, onChange } = props;
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { isThemeDark, toggleTheme } = useThemeSwitch();
  const { language, languageType, changeLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isDesktop && mobileOpen) {
      setMobileOpen(false);
    }
  }, [isDesktop, mobileOpen]);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const SECRET_CLICK_THRESHOLD = 5;
  const SECRET_CLICK_WINDOW_MS = 800;
  const clickCount = React.useRef(0);
  const lastClick = React.useRef(0);

  const handleTabClick = (tab: Tabs) => {
    navigate(`/${tab}`);
    if (onChange) {
      onChange(tab);
    }
    setMobileOpen(false);
  };

  const handleLogoClick = (event: React.MouseEvent) => {
    const now = Date.now();
    clickCount.current =
      now - lastClick.current < SECRET_CLICK_WINDOW_MS
        ? clickCount.current + 1
        : 1;
    lastClick.current = now;

    if (clickCount.current >= SECRET_CLICK_THRESHOLD) {
      event.preventDefault();
      clickCount.current = 0;
      navigate("/ui5");
      setMobileOpen(false);
      return;
    }

    navigate("/home");
    setMobileOpen(false);
  };

  return (
    <Box
      sx={{
        borderBottom: `1px solid ${theme.borders.subtle}`,
        background: theme.surfaces.glassStrong,
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
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Stack
          sx={{
            cursor: "pointer",
            flexDirection: "row",
            gap: 1.5,
            alignItems: "center",
          }}
          onClick={handleLogoClick}
        >
          <Logo />
          <Box>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 800,
                letterSpacing: ".06em",
                fontSize: { xs: 13, sm: 14 },
                fontFamily: "Titillium Web, sans-serif",
                whiteSpace: "nowrap",
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
                handleTabClick(tab);
              }}
              key={tab}
              value={tab}
              label={language.header.tabs[tab]}
            />
          ))}
        </Tabs>

        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: { xs: 0.75, sm: 1 },
          }}
        >
          <Tooltip
            title={
              isThemeDark
                ? language.header.themeToggleLight
                : language.header.themeToggleDark
            }
          >
            <IconButton
              size="small"
              onClick={toggleTheme}
              sx={{
                border: `1px solid ${theme.borders.subtle}`,
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

          <Tooltip title={language.header.languageToggle}>
            <Button
              size="small"
              startIcon={<Language fontSize="small" />}
              onClick={() =>
                changeLanguage(languageType === "de" ? "en" : "de")
              }
              sx={{
                color: theme.palette.text.primary,
                border: `1px solid ${theme.borders.subtle}`,
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

          <IconButton
            size="small"
            onClick={handleDrawerToggle}
            aria-label={
              mobileOpen
                ? language.header.closeMenu
                : language.header.openMenu
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            sx={{
              display: { xs: "inline-flex", md: "none" },
              border: `1px solid ${theme.borders.subtle}`,
              color: theme.palette.text.primary,
            }}
          >
            {mobileOpen ? (
              <CloseRounded fontSize="small" />
            ) : (
              <MenuRounded fontSize="small" />
            )}
          </IconButton>
        </Stack>
      </Container>

      <Drawer
        id="mobile-nav-drawer"
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        ModalProps={{
          keepMounted: true,
          disableRestoreFocus: true,
        }}
        slotProps={{
          paper: {
            sx: {
              width: { xs: "85vw", sm: 320 },
              maxWidth: 340,
              background: theme.surfaces.glassStrong,
              backdropFilter: "blur(20px)",
              borderLeft: `1px solid ${theme.borders.subtle}`,
              boxShadow: isDark
                ? "-4px 0 24px rgba(0, 0, 0, 0.5)"
                : "-4px 0 24px rgba(0, 0, 0, 0.08)",
              p: 2.5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
          },
        }}
      >
        <Box>
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              pb: 2,
              mb: 1.5,
              borderBottom: `1px solid ${theme.borders.subtle}`,
            }}
          >
            <Stack
              sx={{
                cursor: "pointer",
                flexDirection: "row",
                gap: 1.5,
                alignItems: "center",
              }}
              onClick={handleLogoClick}
            >
              <Logo />
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
            </Stack>

            <IconButton
              size="small"
              onClick={() => setMobileOpen(false)}
              aria-label={language.header.closeMenu}
              sx={{
                border: `1px solid ${theme.borders.subtle}`,
                color: theme.palette.text.primary,
              }}
            >
              <CloseRounded fontSize="small" />
            </IconButton>
          </Stack>

          <List
            component="nav"
            aria-label="Mobile Navigation"
            disablePadding
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              pt: 1,
            }}
          >
            {tabs.map((tab) => {
              const isSelected = currentTab === tab;
              return (
                <ListItem key={tab} disablePadding>
                  <ListItemButton
                    onClick={() => handleTabClick(tab)}
                    aria-current={isSelected ? "page" : undefined}
                    sx={{
                      borderRadius: 2,
                      py: 1.25,
                      px: 2,
                      background: isSelected
                        ? alpha(theme.palette.secondary.main, isDark ? 0.16 : 0.12)
                        : "transparent",
                      border: `1px solid ${
                        isSelected
                          ? alpha(theme.palette.secondary.main, isDark ? 0.4 : 0.35)
                          : "transparent"
                      }`,
                      color: isSelected
                        ? theme.palette.secondary.main
                        : theme.palette.text.primary,
                      transition: "all 0.2s ease-in-out",
                      "&:hover": {
                        background: theme.surfaces.hover,
                      },
                    }}
                  >
                    {TAB_ICONS[tab] && (
                      <ListItemIcon
                        sx={{
                          minWidth: 36,
                          color: isSelected
                            ? theme.palette.secondary.main
                            : theme.palette.text.secondary,
                        }}
                      >
                        {TAB_ICONS[tab]}
                      </ListItemIcon>
                    )}
                    <ListItemText
                      primary={language.header.tabs[tab]}
                      slotProps={{
                        primary: {
                          sx: {
                            fontSize: 15,
                            fontWeight: isSelected ? 700 : 500,
                            letterSpacing: ".02em",
                            color: isSelected
                              ? theme.palette.secondary.main
                              : theme.palette.text.primary,
                          },
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
