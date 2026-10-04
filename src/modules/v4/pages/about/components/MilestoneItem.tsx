import { Box, Chip, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Milestone } from "../../../../../data/types/Milestone";
import { formatProjectYears } from "../../../../../utils/utils";

export interface MilestoneItemProps {
  milestone: Milestone;
}
export default function MilestoneItem(props: MilestoneItemProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
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
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: "#fff",
          display: "grid",
          placeItems: "center",
          boxShadow: `0 0 0 4px ${
            isDark ? "rgba(20, 10, 35, 1)" : "rgba(248, 250, 252, 1)"
          }, 0 0 12px ${theme.palette.primary.main}88`,
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
          background: isDark
            ? "rgba(35, 18, 65, 0.7)"
            : "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(12px)",
          border: `1px solid ${theme.background.border}`,
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: isDark
              ? "0 12px 30px rgba(0,0,0,0.4)"
              : "0 12px 28px rgba(18,138,142,0.12)",
            borderColor: isDark
              ? "rgba(34, 193, 195, 0.4)"
              : "rgba(18, 138, 142, 0.35)",
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
              background: isDark
                ? "rgba(34, 193, 195, 0.18)"
                : "rgba(18, 138, 142, 0.12)",
              color: theme.palette.secondary.main,
            }}
          />
          {props.milestone.badge && (
            <Chip
              label={props.milestone.badge}
              size="small"
              sx={{
                borderRadius: 1,
                fontSize: 11,
                fontWeight: 700,
                background: isDark
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.05)",
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
          {props.milestone.title}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.secondary.main,
            fontWeight: 400,
            fontSize: { xs: 14, sm: 16 },
          }}
        >
          {props.milestone.location}
        </Typography>
        <Typography
          sx={{
            color: theme.palette.text.secondary,
            fontSize: 14,
            lineHeight: 1.65,
            mt: 1.5,
          }}
        >
          {props.milestone.description}
        </Typography>
      </Paper>
    </Box>
  );
}
