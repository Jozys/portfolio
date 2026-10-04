import { ArrowOutward } from "@mui/icons-material";
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
  getProjectShortDescription,
  getProjectTitle,
} from "../../../../data/Projects";
import { Project } from "../../../../data/types/Project";
import { useLanguage } from "../../../../language/hooks";
import TechnologyButton from "../../../core/Technology";
import ProjectVisualHeader from "./ProjectVisualHeader";
import { formatProjectYears } from "../../../../utils/utils";

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  const theme = useTheme();
  const { language, languageType } = useLanguage();
  const description = getProjectShortDescription(project, language);

  return (
    <Paper
      elevation={0}
      onClick={onOpen}
      sx={{
        borderRadius: 2.5,
        overflow: "hidden",
        background: theme.surfaces.card,
        backdropFilter: "blur(12px)",
        border: `1px solid ${theme.borders.subtle}`,
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: theme.shadowsGlow.cardHover,
          borderColor: theme.borders.glow,
          cursor: "pointer",
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
            sx={{
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              gap: 1.5,
            }}
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
                  background: theme.surfaces.chip,
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

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              mt: 2.5,
            }}
          >
            {project.technologies.slice(0, 4).map((technology) => (
              <TechnologyButton
                size="small"
                key={technology.name}
                technology={technology}
                showName
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
