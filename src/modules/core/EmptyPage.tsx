import { Box, Typography, useTheme } from "@mui/material";
import { Warning } from "@mui/icons-material";
import { useLanguage } from "../../language/hooks";

export default function EmptyPage() {
  const { language } = useLanguage();
  const theme = useTheme();
  return (
    <Box
      sx={{
        minHeight: "80vh",
        py: { xs: 6, md: 10 },
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Warning
        fontSize="large"
        sx={{
          alignSelf: "center",
          color: theme.palette.text.secondary,
        }}
      />
      <Typography
        sx={{
          ml: 1.25,
          fontSize: "6vmin",
          color: theme.palette.text.secondary,
        }}
      >
        404 | {language.notFound.title}
      </Typography>
    </Box>
  );
}
