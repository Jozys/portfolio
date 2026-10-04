import { Box, Chip, Stack, useTheme } from "@mui/material";
import { TechnologyType } from "../../../../data/types/Project";
import { getCategoryIcon } from "../../../core/TechnologyGroupGrid";

export interface ProjectFilterProps {
  filter: string;
  setFilter: (filter: string) => void;
  label: string;
}

export default function ProjectFilter(props: ProjectFilterProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        flexWrap: "wrap",
        alignItems: "center",
        mt: 5,
        mb: 4,
      }}
    >
      <Chip
        label={props.label}
        clickable
        color={props.filter === "all" ? "secondary" : "default"}
        variant={props.filter === "all" ? "filled" : "outlined"}
        onClick={() => props.setFilter("all")}
        sx={{ fontWeight: 700 }}
      />
      {[
        TechnologyType.Frontend,
        TechnologyType.Backend,
        TechnologyType.Mobile,
        TechnologyType.Hardware,
      ].map((type) => (
        <Chip
          key={type}
          label={type.charAt(0).toUpperCase() + type.slice(1)}
          clickable
          color={props.filter === type ? "secondary" : "default"}
          variant={props.filter === type ? "filled" : "outlined"}
          icon={
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 1.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {getCategoryIcon(type)}
            </Box>
          }
          onClick={() => props.setFilter(type)}
          sx={{
            fontWeight: 600,
            textTransform: "capitalize",
            borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.12)",
          }}
        />
      ))}
    </Stack>
  );
}
