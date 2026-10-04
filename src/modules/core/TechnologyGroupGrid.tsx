import React, { useMemo } from "react";
import {
  alpha,
  Box,
  Paper,
  Stack,
  SxProps,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import {
  CloudQueue,
  Code,
  Layers,
  Memory,
  Smartphone,
  Storage,
  Terminal,
} from "@mui/icons-material";
import { useLanguage } from "../../language/hooks";
import { Technology, TechnologyType } from "../../data/types/Project";
import TechnologyButton from "./Technology";

export const techCategoryOrder: TechnologyType[] = [
  TechnologyType.Frontend,
  TechnologyType.Backend,
  TechnologyType.Mobile,
  TechnologyType.Database,
  TechnologyType.Hardware,
  TechnologyType.DevOps,
  TechnologyType.Other,
];

export function getCategoryIcon(type: TechnologyType): React.ReactNode {
  switch (type) {
    case TechnologyType.Frontend:
      return <Code fontSize="small" />;
    case TechnologyType.Backend:
      return <Terminal fontSize="small" />;
    case TechnologyType.Mobile:
      return <Smartphone fontSize="small" />;
    case TechnologyType.Database:
      return <Storage fontSize="small" />;
    case TechnologyType.Hardware:
      return <Memory fontSize="small" />;
    case TechnologyType.DevOps:
      return <CloudQueue fontSize="small" />;
    default:
      return <Layers fontSize="small" />;
  }
}

export function getTechnologyTypeLabel(
  type: TechnologyType,
  language: ReturnType<typeof useLanguage>["language"],
): string {
  const labelMap: Record<TechnologyType, string | undefined> = {
    [TechnologyType.Frontend]: language.projects?.technologies?.frontend,
    [TechnologyType.Backend]: language.projects?.technologies?.backend,
    [TechnologyType.Mobile]: language.projects?.technologies?.mobile,
    [TechnologyType.Database]: language.projects?.technologies?.database,
    [TechnologyType.Hardware]: language.projects?.technologies?.hardware,
    [TechnologyType.DevOps]: language.projects?.technologies?.devops,
    [TechnologyType.Other]: language.projects?.technologies?.other,
  };
  return labelMap[type] || type.charAt(0).toUpperCase() + type.slice(1);
}

export interface TechnologyCategoryCardProps {
  type: TechnologyType;
  technologies: Technology[];
  title?: string;
  icon?: React.ReactNode;
  sx?: SxProps<Theme>;
}

export function TechnologyCategoryCard({
  type,
  technologies,
  title,
  icon,
  sx,
}: TechnologyCategoryCardProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { language } = useLanguage();

  const displayTitle = title || getTechnologyTypeLabel(type, language);
  const displayIcon = icon ?? getCategoryIcon(type);
  const iconColor = isDark
    ? theme.palette.secondary.main
    : theme.palette.primary.main;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 3,
        background: theme.surfaces.cardSubtle,
        border: `1px solid ${theme.borders.subtle}`,
        backdropFilter: "blur(12px)",
        transition:
          "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: theme.shadowsGlow.cardHover,
          borderColor: theme.borders.glow,
        },
        ...sx,
      }}
    >
      <Stack
        direction="row"
        spacing={1.5}
        sx={{ alignItems: "center", mb: 2 }}
      >
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: 1.5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: alpha(iconColor, isDark ? 0.15 : 0.1),
            color: iconColor,
          }}
        >
          {displayIcon}
        </Box>
        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontSize: 15,
            fontWeight: 700,
            fontFamily: "Titillium Web, sans-serif",
          }}
        >
          {displayTitle}
        </Typography>
      </Stack>

      <Stack
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap", gap: 1 }}
      >
        {technologies.map((tech) => (
          <TechnologyButton
            key={tech.name}
            technology={tech}
            showName
          />
        ))}
      </Stack>
    </Paper>
  );
}

export interface TechnologyGroupGridProps {
  technologies: Technology[];
  columns?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
  gridSx?: SxProps<Theme>;
}

export default function TechnologyGroupGrid({
  technologies,
  columns,
  gridSx,
}: TechnologyGroupGridProps) {
  const { languageType } = useLanguage();

  const groupedTechnologies = useMemo(() => {
    const map = new Map<TechnologyType, Technology[]>();
    technologies.forEach((tech) => {
      const type = tech.type || TechnologyType.Other;
      if (!map.has(type)) {
        map.set(type, []);
      }
      map.get(type)!.push(tech);
    });
    return techCategoryOrder
      .filter((type) => map.has(type) && map.get(type)!.length > 0)
      .map((type) => ({
        type,
        technologies: map.get(type)!,
      }));
  }, [technologies, languageType]);

  if (groupedTechnologies.length === 0) {
    return null;
  }

  const defaultColumnsMd = Math.min(groupedTechnologies.length, 3);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: `repeat(${columns?.xs ?? 1}, 1fr)`,
          sm: `repeat(${columns?.sm ?? 2}, 1fr)`,
          md: `repeat(${columns?.md ?? defaultColumnsMd}, 1fr)`,
          ...(columns?.lg ? { lg: `repeat(${columns.lg}, 1fr)` } : {}),
        },
        gap: 3,
        ...gridSx,
      }}
    >
      {groupedTechnologies.map((group) => (
        <TechnologyCategoryCard
          key={group.type}
          type={group.type}
          technologies={group.technologies}
        />
      ))}
    </Box>
  );
}
