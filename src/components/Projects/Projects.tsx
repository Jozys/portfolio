import { Button, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import Tilt from "react-parallax-tilt";
import Typing from "react-typing-animation";
import DevLights from "../../assets/devlights.png";
import TECKboardApp from "../../assets/teckboard_app.png";
import { contrastBlack } from "../../utils/textContrast";
import Skills from "../Skills";
import { useLanguage } from "../LanguageProvider";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    fontSize: "6vh",
    fontFamily: "bungee",
    textAlign: "center",
    filter: `drop-shadow(5px 5px 0px ${theme.palette.secondary.main})`,
    "&:hover": {
      filter: `drop-shadow(5px 5px 0px ${theme.palette.primary.main})`,
    },
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  title: {
    fontSize: "4vh",
    textAlign: "center",
    alignSelf: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    textDecorationLine: "none",
  },
  image: {
    borderRadius: 15,
    overflow: "hidden",
  },
  teckboard: {
    display: "flex",
  },
  tb_info: {
    flex: 1,
  },
  tilt: {
    width: "50%",
    height: "auto",
    transform: "rotate(0.025turn) translate(0%, 10%)",
  },
  tiltLeft: {
    width: "50%",
    height: "auto",
    transform: "rotate(-0.025turn) translate(20%, 10%)",
  },
  info_text: {
    fontSize: "2.0vh",
    textAlign: "center",
    width: window.innerWidth * 0.3,
    overflowWrap: "normal",
    textOverflow: "",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  button: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
  },
}));

export interface ProjectsProps {}
export default function Projects(props: ProjectsProps): JSX.Element {
  const styles = useStyles();
  const { language } = useLanguage();

  return (
    <div>
      <Typing>
        <Typography className={styles.header}>
          {" "}
          {language.projects.main.title}{" "}
        </Typography>
      </Typing>
      <Timeline position="alternate">
        <TimelineItem key="teckboard" className={styles.teckboard}>
          <TimelineOppositeContent className={styles.tb_info}>
            <a
              id="user-content-teckboard"
              className={styles.title}
              href={"#teckboard"}
            >
              <h1 id="teckboard" about="TECKboard" className={styles.title}>
                ... TECKboards
              </h1>
            </a>

            <Typography className={styles.info_text}>
              {language.projects.main.teckboard.description}
              <a
                rel="noreferrer"
                href="/project/teckboard"
                target="_self"
                className={styles.info_text}
              >
                {language.projects.main.learnMore}
              </a>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent className={styles.tb_info}>
            <div className={styles.tilt}>
              <Tilt tiltReverse>
                <img
                  height="50%"
                  width="50%"
                  className={styles.image}
                  src={TECKboardApp}
                  alt="TECKboard App"
                ></img>
              </Tilt>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent className={styles.item}>
            <a
              id="user-content-devlights"
              className={styles.title}
              href={"#devlights"}
            >
              <h1 id="devlights" about="DevLights" className={styles.title}>
                {language.projects.main.devlight.title}
              </h1>
            </a>
            <Typography className={styles.info_text}>
              {language.projects.main.devlight.description}
              <a
                rel="noreferrer"
                href="/project/devlights"
                target="_self"
                className={styles.info_text}
              >
                {language.projects.main.learnMore}
              </a>
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              className={styles.button}
              onClick={() => window.open("/devlights.pdf", "_blank")}
            >
              {language.projects.main.devlight.readDoc}
            </Button>
          </TimelineContent>
          <TimelineSeparator />
          <TimelineOppositeContent>
            <div className={styles.tiltLeft}>
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
    </div>
  );
}
