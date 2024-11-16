import styled from "@emotion/styled";
import { Timeline } from "@mui/lab";
import { Theme, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import Schwarzwald from "../../../assets/schwarzwald.jpg";
import DHBW from "../../../assets/DHBW_Logo.svg";
import Me from "../../../assets/me.jpg";
import TECKdigital from "../../../assets/teckdigital.webp";
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
  return (
    <StyledHomeTimeline theme={theme}>
      <Timeline position={window.innerWidth < 1000 ? "left" : "alternate"}>
        <CustomTimelineItem
          key="Me"
          description={language.home.me.description}
          direction="normal"
          imageStyle={{ height: "65%", width: "70%" }}
          title={language.home.me.title}
          image={Me}
        />
        <CustomTimelineItem
          key="Life"
          description={language.home.life.description}
          title={language.home.life.title}
          direction="opposite"
          image={Schwarzwald}
        />
        <CustomTimelineItem
          key="TECKdigital"
          description={
            <>
              {language.home.teckdigital.description.start}
              <a href="http://teckdigital.de" className={classes.info_text}>
                TECKdigital
              </a>
              {". "}
              {language.home.teckdigital.description.middle}
              <Link to="/projects#teckboard" className={classes.projectLink}>
                TECKboard
              </Link>
              {language.home.teckdigital.description.end}
            </>
          }
          title="TECKdigital"
          direction="normal"
          image={TECKdigital}
        />
        <CustomTimelineItem
          title={language.home.dhbw.title}
          description={language.home.dhbw.description}
          image={DHBW}
          direction="opposite"
          key="DHBW"
        />
      </Timeline>
    </StyledHomeTimeline>
  );
}
