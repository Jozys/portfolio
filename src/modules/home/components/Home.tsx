import { Box, styled, useTheme } from "@mui/material";
import { useRef } from "react";
import { useLanguage } from "../../../language/hooks";
import Header from "../../core/components/Header";
import { ScrollDownButton } from "../../core/design-system/ScrollDownButton";
import StatusCard from "../StatusCard";
import HomeTimeline from "./HomeTimeline";

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
  [`&.${classes.header}`]: {
    flex: 10,
  },
  [`&.${classes.boxContainer}`]: {
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
          <ScrollDownButton componentRef={timelineRef} />
        </Box>
      </TitleBoxContainer>
      <Box ref={timelineRef}>
        <HomeTimeline />
      </Box>
    </StyledHome>
  );
}
