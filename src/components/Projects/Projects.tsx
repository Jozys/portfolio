import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import Tilt from "react-parallax-tilt";
import Typing from "react-typing-animation";
import DevLights from "../../assets/devlights.png";
import TECKboardApp from "../../assets/teckboard_app.png";
import { contrastBlack } from "../../utils/textContrast";
import Skills from "../Skills";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    fontSize: "8vh",
    fontFamily: "bungee",
    textAlign: "center",
    filter: `drop-shadow(5px 5px 0px ${theme.palette.secondary.main})`,
    "&:hover": {
      filter: `drop-shadow(5px 5px 0px ${theme.palette.primary.main})`,
    },
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  title: {
    textAlign: "center",
    alignSelf: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    textDecorationLine: "none",
  },
  image: {
    borderRadius: 15,
  },
  tilt: {
    width: "75%",
    height: "auto",
    transform: "rotate(0.025turn) translate(0%, 10%)",
  },
  tiltLeft: {
    width: "75%",
    height: "auto",
    transform: "rotate(-0.025turn) translate(20%, 10%)",
  },
  info_text: {
    fontSize: "2.5vh",
    textAlign: "center",
    width: window.innerWidth * 0.3,
    overflowWrap: "break-word",
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
  return (
    <div>
      <Typing>
        <Typography className={styles.header}> I developed... </Typography>
      </Typing>
      <Timeline align="alternate">
        <TimelineItem key="teckboard">
          <TimelineOppositeContent>
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
              TECKboard is a realtime information system that two friends of
              mine, Timo Peters and Yannick Hahn, developed. I spend really much
              hours developing a smartphone application for this realtime
              information system. By using the principe learning by doing, I
              learned much about planing, developing and communicating with the
              two developers of this system.
              <br />
              <a
                rel="noreferrer"
                href="/project/teckboard"
                target="_self"
                className={styles.info_text}
              >
                Learn more
              </a>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent>
            <div className={styles.tilt}>
              <Tilt className={styles.tilt} tiltReverse>
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
                ... DevLights
              </h1>
            </a>
            <Typography className={styles.info_text}>
              DevLights are the smart home LED Stripes for Developers. Together
              with two friends of mine, Jaan Springer and Timo Peters, we
              developed these lights during our project course informatic at
              Graf-Adolf-Gymnasium. From begin we learned new programming
              languages like C++ and worked at Hard and Software.{" "}
              <a
                rel="noreferrer"
                href="/project/devlights"
                target="_self"
                className={styles.info_text}
              >
                Learn more
              </a>
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              className={styles.button}
              onClick={() => window.open("/devlights.pdf", "_blank")}
            >
              READ DOCUMENTATION
            </Button>
          </TimelineContent>
          <TimelineSeparator />
          <TimelineOppositeContent>
            <div className={styles.tiltLeft}>
              <Tilt className={styles.tiltLeft}>
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
