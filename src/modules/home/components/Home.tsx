import { Box, styled, keyframes, Container, Divider } from "@mui/material";
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

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

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

const TitleBoxContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignContent: "space-between",
  position: "relative",
  overflowX: "hidden",
  padding: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4),
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage:
      theme.palette.mode === "dark"
        ? "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
        : "radial-gradient(circle, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
    backgroundSize: "30px 30px",
    opacity: 0.5,
    pointerEvents: "none",
  },
}));

const DecorativeAccent = styled(Box)(({ theme }) => ({
  position: "absolute",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  opacity: 0.15,
  pointerEvents: "none",
  borderRadius: theme.spacing(2),
}));

const ContentWrapper = styled(Box)(() => ({
  animation: `${fadeInUp} 0.8s ease-out`,
}));

const AccentDivider = styled(Divider)(({ theme }) => ({
  margin: `${theme.spacing(2)} auto`,
  maxWidth: "200px",
  height: "3px",
  borderRadius: "3px",
  background: `linear-gradient(90deg, transparent, ${theme.palette.primary.main}, ${theme.palette.secondary.main}, transparent)`,
  animation: `${slideInLeft} 1s ease-out`,
}));

export default function Home() {
  const { language } = useLanguage();

  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <StyledHome className={classes.container}>
      <TitleBoxContainer className={classes.boxContainer}>
        {/* Decorative geometric accents */}
        <DecorativeAccent
          sx={{
            width: { xs: "60px", sm: "80px", md: "120px" },
            height: { xs: "60px", sm: "80px", md: "120px" },
            top: { xs: "5%", md: "8%" },
            right: { xs: "5%", md: "10%" },
            animation: `${slideInRight} 1s ease-out`,
          }}
        />
        <DecorativeAccent
          sx={{
            width: { xs: "40px", sm: "60px", md: "80px" },
            height: { xs: "40px", sm: "60px", md: "80px" },
            bottom: { xs: "20%", md: "25%" },
            left: { xs: "5%", md: "8%" },
            animation: `${slideInLeft} 1.2s ease-out`,
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            flex: 0.7,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: { xs: 1, md: 2 },
              py: { xs: 4, sm: 6, md: 8 },
            }}
          >
            <ContentWrapper>
              <Header
                title={`${language.home.greeting}\n${language.home.name}`}
                subTitle={language.home.subtitle}
                showAvatar={true}
              />
            </ContentWrapper>

            <AccentDivider />

            <ContentWrapper sx={{ animationDelay: "0.3s" }}>
              <StatusCard />
            </ContentWrapper>
          </Box>

          <Box
            sx={{
              pb: { xs: 2, md: 2 },
              pt: { xs: 0, md: 0 },
              textAlign: "center",
              display: { xs: "none", md: "block" },
            }}
          >
            <Box
              sx={{
                display: "inline-block",
                animation: `${float} 3s ease-in-out infinite`,
              }}
            >
              <ScrollDownButton
                //@ts-ignore
                componentRef={timelineRef}
              />
            </Box>
          </Box>
        </Container>
      </TitleBoxContainer>
      <Box ref={timelineRef}>
        <HomeTimeline />
      </Box>
    </StyledHome>
  );
}
