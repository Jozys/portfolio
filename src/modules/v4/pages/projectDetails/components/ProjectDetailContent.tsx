import { OpenInNew } from "@mui/icons-material";
import { Box, Button, Paper, Stack, Typography, useTheme } from "@mui/material";
import {
  formatProjectYears,
  getLabel,
  getProjectDescription,
  getProjectDetails,
} from "../../../../../data/Projects";
import { Project } from "../../../../../data/types/Project";
import { useLanguage } from "../../../../../language/hooks";
import ProjectTechnologieList from "./ProjectTechnologieList";

export interface ProjectDetailContentProps {
  project: Project;
}

export default function ProjectDetailContent(props: ProjectDetailContentProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { project } = props;
  const { language } = useLanguage();
  const details = getProjectDetails(project, language);
  const t = language.v4?.projects;

  /* const cardBg = isDark
    ? "rgba(255, 255, 255, 0.03)"
    : "rgba(255, 255, 255, 0.85)"; */
  const cardBorder = isDark
    ? "1px solid rgba(255, 255, 255, 0.08)"
    : "1px solid rgba(0, 0, 0, 0.06)";

  return (
    <Box sx={{ mt: 6, pb: 6 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 2fr" },
          gap: 5,
        }}
      >
        <Stack spacing={2.5}>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              fontFamily: "Titillium Web, sans-serif",
            }}
          >
            {t.projectData}
          </Typography>

          {project.years && (
            <Box
              sx={{
                borderTop: `2px solid ${theme.palette.primary.main}`,
                pt: 1.5,
              }}
            >
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: 12 }}
              >
                {t?.timeline}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  mt: 0.5,
                }}
              >
                {formatProjectYears(project.years)}
              </Typography>
            </Box>
          )}

          {details?.category && (
            <Box
              sx={{
                borderTop: `1px solid ${
                  isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"
                }`,
                pt: 1.5,
              }}
            >
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: 12 }}
              >
                {t?.category}
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 700,
                  mt: 0.5,
                }}
              >
                {details.category}
              </Typography>
            </Box>
          )}

          {project.links && Object.keys(project.links).length > 0 && (
            <Box
              sx={{
                borderTop: `1px solid ${
                  isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"
                }`,
                pt: 1.5,
              }}
            >
              <Typography
                sx={{ color: theme.palette.text.secondary, fontSize: 12 }}
              >
                {t?.links}
              </Typography>
              <Stack
                gap={1}
                sx={{
                  mt: 1,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 1,
                }}
              >
                {Object.entries(project.links).map(([key, link]) => (
                  <Button
                    key={key}
                    startIcon={
                      typeof link.icon === "string" ? (
                        <img
                          height={20}
                          src={link.icon}
                          alt={getLabel(link.label, language) || key}
                        />
                      ) : (
                        link.icon
                      )
                    }
                    color="secondary"
                    variant="outlined"
                    size="small"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<OpenInNew fontSize="small" />}
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: 12,
                      color: theme.palette.text.primary,
                      borderRadius: 1.5,
                    }}
                  >
                    {getLabel(link.label, language) || key}
                  </Button>
                ))}
              </Stack>
            </Box>
          )}
        </Stack>

        <Box>
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: 22, md: 28 },
              fontWeight: 800,
              fontFamily: "Titillium Web, sans-serif",
            }}
          >
            {t.projectDescription}
          </Typography>
          <Typography
            sx={{
              color: theme.palette.text.secondary,
              fontSize: 16,
              lineHeight: 1.8,
              mt: 2,
            }}
          >
            {getProjectDescription(project, language)}
          </Typography>
        </Box>
      </Box>

      <ProjectTechnologieList project={project} />

      {project.detailImages && project.detailImages.length > 0 && (
        <Box sx={{ mt: 8 }}>
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                fontFamily: "Titillium Web, sans-serif",
              }}
            >
              {t?.gallerySection}
            </Typography>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: 24, md: 30 },
                fontWeight: 800,
                fontFamily: "Titillium Web, sans-serif",
                mt: 0.5,
              }}
            >
              {t?.galleryTitle}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md:
                  project.detailImages.length === 1 ? "1fr" : "repeat(2, 1fr)",
              },
              gap: 3,
            }}
          >
            {project.detailImages.map((imgNode, idx) => (
              <Paper
                key={idx}
                elevation={isDark ? 4 : 1}
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  border: cardBorder,
                  background: isDark
                    ? "rgba(0,0,0,0.3)"
                    : "rgba(240,244,248,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                  minHeight: 280,
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                  "& img": {
                    maxWidth: "100%",
                    maxHeight: 380,
                    objectFit: "contain",
                    borderRadius: 2,
                    filter: isDark
                      ? "drop-shadow(0 8px 16px rgba(0,0,0,0.6))"
                      : "drop-shadow(0 6px 12px rgba(0,0,0,0.1))",
                  },
                }}
              >
                {typeof imgNode === "string" ? (
                  <img src={imgNode} alt={`Project detail ${idx + 1}`} />
                ) : (
                  imgNode
                )}
              </Paper>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
