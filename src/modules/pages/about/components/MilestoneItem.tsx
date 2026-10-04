import { alpha, Box, Chip, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Milestone } from "../../../../data/types/Milestone";
import { formatProjectYears } from "../../../../utils/utils";
import { useLanguage } from "../../../../language/hooks";
import {
  getMilestoneBadge,
  getMilestoneDescription,
  getMilestoneLocation,
  getMilestoneTitle,
} from "../../../../data/Milestone";

export interface MilestoneItemProps {
  milestone: Milestone;
}
export default function MilestoneItem(props: MilestoneItemProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { language } = useLanguage();
  return (
    <Box sx={{ position: "relative", pl: { xs: 3, md: 4 } }}>
      <Box
        sx={{
          position: "absolute",
          left: { xs: -32, md: -36 },
          top: 18,
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: theme.gradients.primary,
          color: "#fff",
          display: "grid",
          placeItems: "center",
          boxShadow: `0 0 0 4px ${theme.palette.background.default}, 0 0 12px ${alpha(theme.palette.primary.main, 0.55)}`,
          zIndex: 2,
          padding: 1,
        }}
      >
        {props.milestone.icon}
      </Box>

      <Paper
        sx={{
          p: { xs: 3, sm: 3.5 },
          borderRadius: 2.5,
          background: theme.surfaces.card,
          backdropFilter: "blur(12px)",
          border: `1px solid ${theme.borders.subtle}`,
          transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: theme.shadowsGlow.cardHover,
            borderColor: theme.borders.glow,
          },
        }}
      >
        <Stack
          sx={{
            gap: 1,
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            flexWrap: "wrap",
            mb: 1.5,
          }}
        >
          <Chip
            label={formatProjectYears(props.milestone.period)}
            size="small"
            sx={{
              fontWeight: 800,
              fontSize: 12,
              borderRadius: 1,
              background: alpha(theme.palette.secondary.main, isDark ? 0.18 : 0.12),
              color: theme.palette.secondary.main,
            }}
          />
          {props.milestone.badge && (
            <Chip
              label={getMilestoneBadge(props.milestone, language)}
              size="small"
              sx={{
                borderRadius: 1,
                fontSize: 11,
                fontWeight: 700,
                background: theme.surfaces.chip,
                color: theme.palette.text.primary,
              }}
            />
          )}
        </Stack>

        <Typography
          sx={{
            color: theme.palette.text.primary,
            fontWeight: 800,
            fontSize: { xs: 18, sm: 20 },
            fontFamily: "Titillium Web, sans-serif",
          }}
        >
          {getMilestoneTitle(props.milestone, language)}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 400,
            fontSize: { xs: 14, sm: 16 },
          }}
        >
          {getMilestoneLocation(props.milestone, language)}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            fontSize: 14,
            lineHeight: 1.65,
            mt: 1.5,
          }}
        >
          {getMilestoneDescription(props.milestone, language)}
        </Typography>
      </Paper>
    </Box>
  );
}
