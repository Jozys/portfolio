import { ArrowDownward } from "@mui/icons-material";
import { alpha, Box, Fade, IconButton, useTheme } from "@mui/material";

export interface ScrollDownProps {
  componentRef: React.RefObject<HTMLDivElement | null>;
}

export function ScrollDownButton(props: ScrollDownProps) {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const scrollToComponent = () => {
    props.componentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fade in={true} timeout={1500}>
      <Box>
        <IconButton
          onClick={scrollToComponent}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              transform: "translateY(3px)",
            },
            transition: "transform 0.25s ease-in-out, background-color 0.25s",
            boxShadow: isDark
              ? `0px 4px 16px ${alpha(theme.palette.secondary.main, 0.35)}`
              : `0px 4px 12px ${alpha(theme.palette.primary.main, 0.3)}`,
            height: "48px",
            width: "48px",
          }}
        >
          <ArrowDownward fontSize="medium" />
        </IconButton>
        <Box
          component="span"
          sx={{
            display: "block",
            mt: 1,
            color: theme.palette.text.secondary,
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {"Scroll Down"}
        </Box>
      </Box>
    </Fade>
  );
}
