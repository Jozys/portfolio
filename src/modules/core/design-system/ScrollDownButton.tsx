import { Box, Fade, IconButton, useTheme } from "@mui/material";
import getContrastTextColor from "../utils/textContrast";
import { ArrowDownward } from "@mui/icons-material";

export interface ScrollDownProps {
  componentRef: React.RefObject<HTMLDivElement>;
}

export function ScrollDownButton(props: ScrollDownProps) {
  const theme = useTheme();
  const scrollToComponent = () => {
    props.componentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Fade in={true} timeout={1500}>
      <Box>
        <IconButton
          aria-label="scroll down"
          onClick={scrollToComponent}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: getContrastTextColor(theme.palette.primary.main),
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              transform: "translateY(5px)",
            },
            transition: "transform 0.3s ease-in-out, background-color 0.3s",
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": {
                transform: "translateY(0)",
              },
              "40%": {
                transform: "translateY(-10px)",
              },
              "60%": {
                transform: "translateY(-5px)",
              },
            },
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            height: "48px",
            width: "48px",
          }}
        >
          <ArrowDownward fontSize="large" />
        </IconButton>
        <Box
          component="span"
          sx={{
            display: "block",
            mt: 1,
            color: theme.palette.text.primary,
            fontSize: "0.8rem",
            fontWeight: "medium",
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
