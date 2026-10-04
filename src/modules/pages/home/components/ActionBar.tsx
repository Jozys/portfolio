import { ArrowForward, GitHub, LinkedIn } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Tooltip,
  useTheme,
} from "@mui/material";
import { useLanguage } from "../../../../language/hooks";

export interface ActionBarProps {
  onNavigateToProjects?: () => void;
}

export default function ActionBar(props: ActionBarProps) {
  const theme = useTheme();
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
        sx={{ alignItems: { sm: "center" } }}
      >
        <Button
          variant="contained"
          onClick={props.onNavigateToProjects}
          endIcon={<ArrowForward />}
          sx={{
            background: theme.gradients.primary,
            color: "#fff",
            px: 3,
            py: 1.4,
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 700,
            fontSize: 15,
            boxShadow: theme.shadowsGlow.buttonGlow,
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: theme.shadowsGlow.buttonHoverGlow,
            },
          }}
        >
          {language.home.action.explore}
        </Button>
        <Button
          variant="outlined"
          href={mailUrl}
          sx={{
            borderColor: theme.borders.strong,
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
              background: theme.surfaces.hover,
            },
          }}
        >
          {language.home.action.contact}
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
                border: `1px solid ${theme.borders.subtle}`,
                color: theme.palette.text.primary,
                p: 1.1,
                transition: "all 0.2s ease",
                "&:hover": {
                  color: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
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
                border: `1px solid ${theme.borders.subtle}`,
                color: theme.palette.text.primary,
                p: 1.1,
                transition: "all 0.2s ease",
                "&:hover": {
                  color: theme.palette.secondary.main,
                  borderColor: theme.palette.secondary.main,
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
