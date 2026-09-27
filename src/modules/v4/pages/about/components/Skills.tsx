import { Box, Chip, Paper, Typography, useTheme } from "@mui/material";
import { useLanguage } from "../../../../../language/hooks";
import { TechnologyType } from "../../../../../data/types/Project";
import { getTechnologiesByType } from "../../../../../data/Technologies";

export default function Skills() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { language } = useLanguage();

  const technologyTypes = Object.keys(TechnologyType) as Array<
    keyof typeof TechnologyType
  >;

  const getCategoryTitle = (techType: string): string => {
    // Get the translation key for the technology type
    const typeKey = `projects.technologies.categories.${techType.toLowerCase()}`;
    //@ts-ignore
    return language[typeKey] || formatTechType(techType);
  };

  const formatTechType = (techType: string): string => {
    return techType
      .replace(/([A-Z])/g, " $1")
      .trim()
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          background: theme.background.card,
          backdropFilter: "blur(16px)",
          border: `1px solid ${theme.background.border}`,
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              color: "text.secondary",
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              fontFamily: "Titillium Web, sans-serif",
            }}
          >
            {language.about.skills.subtitle}
          </Typography>
          <Typography
            component="h2"
            sx={{
              color: "text.primary",
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              fontWeight: 800,
              fontFamily: "Titillium Web, sans-serif",
              mt: 0.5,
            }}
          >
            {language.about.skills.title}
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              maxWidth: 580,
              fontSize: 14,
              lineHeight: 1.6,
              mt: 1,
            }}
          >
            {language.about.skills.description}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(auto-fill, minmax(250px, 1fr))",
                md: "repeat(auto-fill, minmax(300px, 1fr))",
              },
              gap: 3,
              mt: 4,
              mb: 4,
              width: "100%",
            }}
          >
            {technologyTypes.map((techType) => {
              const technologies = getTechnologiesByType(
                TechnologyType[techType],
              );
              if (technologies.length === 0) return null;

              return (
                <Paper
                  key={techType}
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 1,
                    bgcolor: isDark
                      ? "rgba(255, 255, 255, 0.05)"
                      : "rgba(0, 0, 0, 0.03)",
                    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.15)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "secondary.main",
                      borderBottom: 1,
                      borderColor: "divider",
                      pb: 1,
                      mb: 2,
                      fontWeight: 600,
                      fontSize: "1.2rem",
                    }}
                  >
                    {getCategoryTitle(techType)}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                    }}
                  >
                    {technologies.map((tech) => (
                      <Chip
                        key={tech.name}
                        avatar={
                          <Box
                            component="img"
                            src={tech.icon}
                            alt={tech.name}
                            sx={{ width: 24, height: 24, p: "2px" }}
                          />
                        }
                        label={
                          <Typography
                            variant="body2"
                            sx={{
                              color: tech.color || "inherit",
                              filter: isDark ? "none" : "contrast(0.5)",
                            }}
                          >
                            {tech.name}
                          </Typography>
                        }
                        onClick={() =>
                          tech.link &&
                          window.open(
                            tech.link,
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          m: 0.5,
                          p: 1,
                          bgcolor: isDark
                            ? "rgba(255, 255, 255, 0.08)"
                            : "rgba(245, 245, 245, 0.9)",
                          borderRadius: 1,
                          color: tech.color || "inherit",
                          filter: isDark ? "none" : "contrast(1.2)",
                          cursor: tech.link ? "pointer" : "default",
                          transition: "transform 0.2s, background-color 0.2s",
                          "&:hover": {
                            transform: "scale(1.05)",
                            bgcolor: isDark
                              ? "rgba(255, 255, 255, 0.15)"
                              : "rgba(255, 255, 255, 0.85)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              );
            })}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
