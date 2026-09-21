import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import { useLanguage } from "../../../../../language/hooks";
import { Project, TechnologyType } from "../../../../../data/types/Project";
import TechnologyButton from "../../../core/Technology";
import { Layers } from "@mui/icons-material";

export interface ProjectTechnologieListProps {
  project: Project;
}

const techCategoryOrder: TechnologyType[] = [
  TechnologyType.Frontend,
  TechnologyType.Backend,
  TechnologyType.Mobile,
  TechnologyType.Database,
  TechnologyType.Hardware,
  TechnologyType.DevOps,
  TechnologyType.Other,
];

export default function ProjectTechnologieList(
  props: ProjectTechnologieListProps,
) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { language, languageType } = useLanguage();
  const { project } = props;

  const cardBg = isDark
    ? "rgba(255, 255, 255, 0.03)"
    : "rgba(255, 255, 255, 0.85)";
  const cardBorder = isDark
    ? "1px solid rgba(255, 255, 255, 0.08)"
    : "1px solid rgba(0, 0, 0, 0.06)";

  const groupedTechnologies = useMemo(() => {
    const map = new Map<TechnologyType, typeof project.technologies>();
    project.technologies.forEach((tech) => {
      const type = tech.type || TechnologyType.Other;
      if (!map.has(type)) {
        map.set(type, []);
      }
      map.get(type)!.push(tech);
    });
    return techCategoryOrder
      .filter((type) => map.has(type))
      .map((type) => ({
        type,
        label: type.toString(),
        technologies: map.get(type)!,
      }));
  }, [project.technologies, languageType]);

  const getGroupLabel = (type: TechnologyType) => {
    switch (type) {
      case TechnologyType.Frontend:
        return language.v4?.projects?.technologies?.frontend;
      case TechnologyType.Backend:
        return language.v4?.projects?.technologies?.backend;
      case TechnologyType.Mobile:
        return language.v4?.projects?.technologies?.mobile;
      case TechnologyType.Database:
        return language.v4?.projects?.technologies?.database;
      case TechnologyType.Hardware:
        return language.v4?.projects?.technologies?.hardware;
      case TechnologyType.DevOps:
        return language.v4?.projects?.technologies?.devops;
      case TechnologyType.Other:
        return language.v4?.projects?.technologies?.other;
    }
  };

  return (
    <div>
      {groupedTechnologies.length > 0 && (
        <Box sx={{ mt: 8 }}>
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: 24, md: 30 },
                fontWeight: 800,
                fontFamily: "Titillium Web, sans-serif",
                mt: 0.5,
              }}
            >
              {language.v4?.projects?.technologies.title}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: `repeat(${Math.min(groupedTechnologies.length, 3)}, 1fr)`,
              },
              gap: 3,
            }}
          >
            {groupedTechnologies.map((group) => (
              <Paper
                key={group.type}
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  background: cardBg,
                  border: cardBorder,
                  backdropFilter: "blur(12px)",
                }}
              >
                <Stack
                  direction="row"
                  spacing={1.5}
                  alignItems="center"
                  sx={{ mb: 2 }}
                >
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      borderRadius: 1.5,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isDark
                        ? "rgba(34, 193, 195, 0.15)"
                        : "rgba(18, 138, 142, 0.1)",
                      color: isDark
                        ? "rgba(34, 193, 195, 1)"
                        : "rgba(18, 138, 142, 1)",
                    }}
                  >
                    <Layers fontSize="small" />
                  </Box>
                  <Typography
                    sx={{
                      color: theme.palette.text.primary,
                      fontSize: 15,
                      fontWeight: 700,
                      fontFamily: "Titillium Web, sans-serif",
                    }}
                  >
                    {getGroupLabel(group.type) || group.label}
                  </Typography>
                </Stack>

                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {group.technologies.map((tech) => (
                    <TechnologyButton
                      key={tech.name}
                      technology={tech}
                      showName
                      variant="text"
                    />
                  ))}
                </Stack>
              </Paper>
            ))}
          </Box>
        </Box>
      )}
    </div>
  );
}
