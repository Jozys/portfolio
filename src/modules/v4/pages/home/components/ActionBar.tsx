import { ArrowForward, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import { useLanguage } from "../../../../../language/hooks";

export interface ActionBarProps {
  onNavigateToProjects?: () => void;
}

export default function ActionBar(props: ActionBarProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { language } = useLanguage();

  const githubUrl =
    import.meta.env.VITE_USER_GITHUB || "https://github.com/Jozys";
  const linkedinUrl =
    import.meta.env.VITE_USER_LINKEDIN ||
    "https://www.linkedin.com/in/joshua-slaar-00346424b/";
  const mailUrl = import.meta.env.VITE_USER_MAIL || "mailto:joshua@slaar.de";

  return (
    <Box sx={{ mt: 4 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems={{ sm: "center" }}
      >
        <Button
          variant="contained"
          onClick={props.onNavigateToProjects}
          endIcon={<ArrowForward />}
          sx={{
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            color: "#fff",
            px: 3,
            py: 1.4,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 700,
            fontSize: 15,
            boxShadow: `0 8px 24px ${
              isDark ? "rgba(0,0,0,0.4)" : "rgba(18,138,142,0.25)"
            }`,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: `0 12px 28px ${
                isDark ? "rgba(0,0,0,0.5)" : "rgba(18,138,142,0.35)"
              }`,
            },
          }}
        >
          {language.v4.home.action.explore}
        </Button>
        <Button
          variant="outlined"
          href={mailUrl}
          sx={{
            borderColor: isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.2)",
            color: theme.palette.text.primary,
            px: 3,
            py: 1.4,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 700,
            fontSize: 15,
            transition: "border-color 0.2s ease, background 0.2s ease",
            "&:hover": {
              borderColor: theme.palette.primary.main,
              background: isDark
                ? "rgba(255,255,255,0.04)"
                : "rgba(0,0,0,0.03)",
            },
          }}
        >
          {language.v4.home.action.contact}
        </Button>

        <Stack
          direction="row"
          spacing={1}
          sx={{ pt: { xs: 1, sm: 0 }, pl: { sm: 1 } }}
        >
          <Tooltip title="GitHub">
            <IconButton
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"
                }`,
                color: theme.palette.text.primary,
                p: 1.1,
                transition: "all 0.2s ease",
                "&:hover": {
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <GitHub fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                border: `1px solid ${
                  isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"
                }`,
                color: theme.palette.text.primary,
                p: 1.1,
                transition: "all 0.2s ease",
                "&:hover": {
                  color: theme.palette.primary.main,
                  borderColor: theme.palette.primary.main,
                  transform: "translateY(-2px)",
                },
              }}
            >
              <LinkedIn fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Box>
  );
}
