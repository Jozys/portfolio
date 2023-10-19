import { Button, Theme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import Tilt from "react-parallax-tilt";
import DevLights from "../../assets/devlights.png";
import TECKboardApp from "../../assets/teckboard_app.png";
import { contrastBlack } from "../../utils/textContrast";
import Skills from "../Skills";
import { useLanguage } from "../LanguageProvider";
import Typing from "../Typing";

const PREFIX = "Projects";

const classes = {
  title: `${PREFIX}-title`,
  image: `${PREFIX}-image`,
  teckboard: `${PREFIX}-teckboard`,
  tb_info: `${PREFIX}-tb_info`,
  tilt: `${PREFIX}-tilt`,
  tiltLeft: `${PREFIX}-tiltLeft`,
  info_text: `${PREFIX}-info_text`,
  button: `${PREFIX}-button`,
  item: `${PREFIX}-item`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`& .${classes.title}`]: {
    fontSize: "4vh",
    textAlign: "center",
    alignSelf: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    textDecorationLine: "none",
  },

  [`& .${classes.image}`]: {
    borderRadius: 15,
    overflow: "hidden",
  },

  [`& .${classes.teckboard}`]: {
    display: "flex",
  },

  [`& .${classes.tb_info}`]: {
    flex: 1,
  },

  [`& .${classes.tilt}`]: {
    width: "50%",
    height: "auto",
    transform: "rotate(0.025turn) translate(0%, 10%)",
  },

  [`& .${classes.tiltLeft}`]: {
    width: "50%",
    height: "auto",
    transform: "rotate(-0.025turn) translate(20%, 10%)",
  },

  [`& .${classes.info_text}`]: {
    fontSize: "2.0vh",
    textAlign: "center",
    width: window.innerWidth * 0.3,
    overflowWrap: "normal",
    textOverflow: "",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },

  [`& .${classes.button}`]: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  [`& .${classes.item}`]: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
}));

export interface ProjectsProps {}
export default function Projects(props: ProjectsProps): JSX.Element {
  const { language } = useLanguage();

  return (
    <Root>
      <Typing text={language.projects.main.title} />
      <Timeline position="alternate">
        <TimelineItem key="teckboard" className={classes.teckboard}>
          <TimelineOppositeContent className={classes.tb_info}>
            <a
              id="user-content-teckboard"
              className={classes.title}
              href={"#teckboard"}
            >
              <h1 id="teckboard" about="TECKboard" className={classes.title}>
                ... TECKboards
              </h1>
            </a>

            <Typography className={classes.info_text}>
              {language.projects.main.teckboard.description}
              <a
                rel="noreferrer"
                href="/project/teckboard"
                target="_self"
                className={classes.info_text}
              >
                {language.projects.main.learnMore}
              </a>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent className={classes.tb_info}>
            <div className={classes.tilt}>
              <Tilt tiltReverse>
                <img
                  height="50%"
                  width="50%"
                  className={classes.image}
                  src={TECKboardApp}
                  alt="TECKboard App"
                ></img>
              </Tilt>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent className={classes.item}>
            <a
              id="user-content-devlights"
              className={classes.title}
              href={"#devlights"}
            >
              <h1 id="devlights" about="DevLights" className={classes.title}>
                {language.projects.main.devlight.title}
              </h1>
            </a>
            <Typography className={classes.info_text}>
              {language.projects.main.devlight.description}
              <a
                rel="noreferrer"
                href="/project/devlights"
                target="_self"
                className={classes.info_text}
              >
                {language.projects.main.learnMore}
              </a>
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={() => window.open("/devlights.pdf", "_blank")}
            >
              {language.projects.main.devlight.readDoc}
            </Button>
          </TimelineContent>
          <TimelineSeparator />
          <TimelineOppositeContent>
            <div className={classes.tiltLeft}>
              <Tilt tiltReverse>
                <img
                  height="50%"
                  width="50%"
                  alt="DevLights App"
                  src={DevLights}
                />
              </Tilt>
            </div>
          </TimelineOppositeContent>
        </TimelineItem>
      </Timeline>
      <Skills />
    </Root>
  );
}
