import { alpha, Box, Stack, useTheme } from "@mui/material";
import { getMilestones } from "../../../../data/Milestone";
import MilestoneItem from "./MilestoneItem";

export default function Milestones() {
  const milestones = getMilestones();
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", pl: { xs: 3, md: 4 } }}>
      <Box
        sx={{
          position: "absolute",
          top: 24,
          bottom: 24,
          left: { xs: 11, md: 15 },
          width: 2,
          background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 80%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
          borderRadius: 1,
        }}
      />
      <Stack spacing={4}>
        {milestones.map((milestone, index) => (
          <MilestoneItem key={index} milestone={milestone} />
        ))}
      </Stack>
    </Box>
  );
}
