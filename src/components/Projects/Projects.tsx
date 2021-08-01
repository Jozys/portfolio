import { Button, makeStyles, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import Typing from "react-typing-animation";
import TECKboardApp from "../../assets/teckboard_app.png";
import DevLights from "../../assets/devlights.png";
import { HashLink as Link } from 'react-router-hash-link';
//@ts-ignore
import PDF from "../../assets/facharbeit.pdf";

const useStyles = makeStyles(() => ({
  text: {
    fontSize: "8vh",
    fontWeight: "bold",
    alignSelf: "flex-start",
    textAlign: "center"
  },
  title: {
    textAlign: "center",
    alignSelf: "center",
    textDecorationLine: "none",
  },
  image: {
    borderRadius: 15,
    transform: "rotate(0.025turn) translate(-100%, 10%)",
  },
  image_left: {
    transform: "rotate(-0.025turn) translate(100%, 10%)",
  },
  info_text: {
    fontSize: "2.5vh",
    textAlign: "center",
    width: window.innerWidth * 0.3,
    overflowWrap: "break-word",
  },
  button: {
    alignSelf: "flex-start",
    alignItems: "center",
  },
  item: {
    alignContent: "center",
    alignItems: "center",
  },
}));

export interface ProjectsProps { }
export default function Projects(props: ProjectsProps): JSX.Element {
  const styles = useStyles();
  return (
    <div>
      <Typing>
        <Typography className={styles.text}>
          The projects I developed!
        </Typography>
      </Typing>
      <Timeline align="alternate">
        <TimelineItem key="teckboard">
          <TimelineOppositeContent>
            <a
              id="user-content-teckboard"
              className={styles.title}
              href={"#teckboard"}
            >
              <h3 id="teckboard" about="TECKboard" className={styles.title}>
                TECKboards
              </h3>
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
                href="https://teckboard.de"
                target="_blank"
                className={styles.info_text}
              >
                {" "}
                Learn more
              </a>
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent>
            <img
              height="65%"
              width="auto"
              className={styles.image}
              src={TECKboardApp}
              alt="TECKboard App"
            ></img>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent className={styles.item}>
            <h3 className={styles.title}> DevLights </h3>
            <Typography className={styles.info_text}>
              DevLights are the smart home LED Stripes for Developers. Together
              with two friends of mine, Jaan Springer and Timo Peters, we
              developed these lights during our project course informatic at
              Graf-Adolf-Gymnasium. From begin we learned new programming
              languages like C++ and worked at Hard and Software.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              className={styles.button}
              onClick={() => window.open(PDF, "_blank")}
            >
              READ DOCUMENTATION
            </Button>
          </TimelineContent>
          <TimelineSeparator />
          <TimelineOppositeContent>
            <img
              height="65%"
              width="auto"
              className={styles.image_left}
              alt="DevLights App"
              src={DevLights}
            />
          </TimelineOppositeContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
