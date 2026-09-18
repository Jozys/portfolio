import {
  Box,
  Button,
  Chip,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  formatProjectYears,
  getProjectDescription,
  getProjectTitle,
} from "../../../../../data/Projects";
import { Project } from "../../../../../data/types/Project";
import { useLanguage } from "../../../../../language/hooks";
import ProjectVisualHeader from "./ProjectVisualHeader";
import { ArrowOutward } from "@mui/icons-material";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { language, languageType } = useLanguage();
  const description = getProjectDescription(project, language);

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 2.5,
        overflow: "hidden",
        background: isDark
          ? "rgba(35, 18, 65, 0.7)"
          : "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${
          isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)"
        }`,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: isDark
            ? "0 16px 36px rgba(0, 0, 0, 0.5)"
            : "0 14px 32px rgba(18, 138, 142, 0.14)",
          borderColor: isDark
            ? "rgba(34, 193, 195, 0.4)"
            : "rgba(18, 138, 142, 0.35)",
        },
      }}
    >
      <Box>
        <ProjectVisualHeader
          image={project.image}
          name={project.name}
          compact
        />
        <Box sx={{ p: 3 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="start"
            gap={2}
          >
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 800,
                fontSize: 21,
                fontFamily: "Titillium Web, sans-serif",
              }}
            >
              {getProjectTitle(project, language)}
            </Typography>
            {project.years && (
              <Chip
                label={formatProjectYears(
                  project.years,
                  languageType === "de" ? "Heute" : "Now",
                )}
                size="small"
                sx={{
                  fontSize: 11,
                  fontWeight: 600,
                  borderRadius: 1,
                  background: isDark
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(0,0,0,0.05)",
                  color: theme.palette.text.secondary,
                }}
              />
            )}
          </Stack>

          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: 14,
              lineHeight: 1.6,
              mt: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </Typography>

          <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mt: 2.5 }}>
            {project.technologies.slice(0, 4).map((technology) => (
              <Chip
                key={technology.name}
                label={technology.name}
                size="small"
                sx={{
                  borderRadius: 1,
                  fontWeight: 600,
                  fontSize: 11,
                  background: isDark
                    ? "rgba(34, 193, 195, 0.12)"
                    : "rgba(18, 138, 142, 0.08)",
                  color: isDark
                    ? "rgba(34, 193, 195, 1)"
                    : "rgba(18, 138, 142, 1)",
                  border: `1px solid ${
                    isDark
                      ? "rgba(34, 193, 195, 0.25)"
                      : "rgba(18, 138, 142, 0.2)"
                  }`,
                }}
              />
            ))}
          </Stack>
        </Box>
      </Box>

      <Box sx={{ px: 3, pb: 2.5, pt: 0 }}>
        <Button
          onClick={onOpen}
          endIcon={<ArrowOutward />}
          sx={{
            px: 0,
            color: theme.palette.text.primary,
            textTransform: "none",
            fontWeight: 800,
            fontSize: 14,
            "&:hover": {
              background: "transparent",
              color: theme.palette.secondary.main,
            },
          }}
        >
          {language.projects.main.learnMore}
        </Button>
      </Box>
    </Paper>
  );
}
