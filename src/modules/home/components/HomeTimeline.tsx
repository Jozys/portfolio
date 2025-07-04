import styled from "@emotion/styled";
import { Timeline } from "@mui/lab";
import { Theme, useMediaQuery, useTheme } from "@mui/material";
import DHBW from "../../../assets/life/DHBW_Logo.svg";
import Schwarzwald from "../../../assets/life/schwarzwald.jpg";
import { useLanguage } from "../../../language/hooks";
import { contrastBlack } from "../../../modules/core/utils/textContrast";
import CustomTimelineItem from "../../core/design-system/TimelineItem";

const PREFIX = "HomeTimeline";

const classes = {
  root: `${PREFIX}-root`,
  projectLink: `${PREFIX}-linkText`,
  info_text: `${PREFIX}-info_text`,
};

const StyledHomeTimeline = styled("div")(({ theme }: { theme: Theme }) => ({
  [`&.${classes.root}`]: {
    flex: 3,
  },
  [`& .${classes.projectLink}`]: {
    color: "#fb6340",
    fontWeight: "bold",
    textDecorationLine: "none",
  },
  [`& .${classes.info_text}`]: {
    fontSize: "2.0vmin",
    textAlign: "center",
    width: "30%",
    overflowWrap: "break-word",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
}));

export default function HomeTimeline() {
  const { language } = useLanguage();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <StyledHomeTimeline theme={theme}>
      <Timeline position={isMobile ? "left" : "alternate"}>
        <CustomTimelineItem
          title={language.home.dhbw.title}
          description={language.home.dhbw.description}
          image={DHBW}
          direction="opposite"
          key="DHBW"
        />
        <CustomTimelineItem
          key="Life"
          description={language.home.life.description}
          title={language.home.life.title}
          direction="normal"
          image={Schwarzwald}
        />
      </Timeline>
    </StyledHomeTimeline>
  );
}
