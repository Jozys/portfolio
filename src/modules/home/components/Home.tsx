import { Box, Fade, IconButton, styled, useTheme } from "@mui/material";
import { useRef } from "react";
import Header from "../../core/components/Header";
import { useLanguage } from "../../../language/hooks";
import HomeTimeline from "./HomeTimeline";
import StatusCard from "../StatusCard";
import { ArrowDownward } from "@mui/icons-material";
import getContrastTextColor from "../../core/utils/textContrast";

const PREFIX = "Home";

const classes = {
  container: `${PREFIX}-container`,
  header: `${PREFIX}-header`,
  div: `${PREFIX}-div`,
  boxContainer: `${PREFIX}-boxContainer`,
};

const StyledHome = styled("div")(() => ({
  [`&.${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  [`& .${classes.header}`]: {
    flex: 10,
  },
  [`&. ${classes.boxContainer}`]: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignContent: "space-between",
    position: "relative",
    overflowX: "hidden",
  },
}));

const TitleBoxContainer = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignContent: "space-between",
  position: "relative",
  overflowX: "hidden",
}));

export default function Home() {
  const { language } = useLanguage();

  const theme = useTheme();

  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollToTimeline = () => {
    timelineRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <StyledHome className={classes.container}>
      <TitleBoxContainer className={classes.boxContainer}>
        <Box
          sx={{
            flexGrow: 0.9,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Header
            title={`${language.home.greeting}\n${language.home.name}`}
            subTitle={language.home.subtitle}
            showAvatar={true}
          />

          <StatusCard />
        </Box>

        <Box
          sx={{
            position: "absolute",
            bottom: theme.spacing(8),
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
            zIndex: 10,
          }}
        >
          <Fade in={true} timeout={1500}>
            <Box>
              <IconButton
                aria-label="scroll down"
                onClick={scrollToTimeline}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: getContrastTextColor(theme.palette.primary.main),
                  "&:hover": {
                    backgroundColor: theme.palette.primary.dark,
                    transform: "translateY(5px)",
                  },
                  transition:
                    "transform 0.3s ease-in-out, background-color 0.3s",
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
        </Box>
      </TitleBoxContainer>
      <Box ref={timelineRef}>
        <HomeTimeline />
      </Box>
    </StyledHome>
  );
}
