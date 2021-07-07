import { makeStyles, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import Typing from "react-typing-animation";
import Image from "../../assets/image.png";

const useStyles = makeStyles(() => ({
  text: {
    fontSize: "8vh",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  info_text: {
    fontSize: "2vh",
    color: "#fff",
    textAlign: "center",
    width: window.innerWidth * 0.3,
    overflowWrap: "break-word",
  },
  title: {
    textAlign: "center",
    alignSelf: "center",
  },
  image: {
    transform: "scale(0.95) rotate(-0.025turn) translate(-50%, -20%)",
  },
}));

export interface HomeProps {}
export default function Home(props: HomeProps): JSX.Element {
  const styles = useStyles();
  return (
    <div>
      <Typing>
        <Typography className={styles.text}>
          Hello! My name is Joshua Slaar!
        </Typography>
      </Typing>

      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <h3 className={styles.title}> Who am I?</h3>
            <Typography className={styles.info_text}>
              I am a 17 year old student, who likes doing sport, developing, and
              reading books. In my freetime I often take a walk with my dog and
              cycle through the surroundings of my hometown in
              Northrhine-Westphalia.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent>
            <img
              src={Image}
              height="466px"
              width="746px"
              alt="Img not found"
              className={styles.image}
            ></img>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent>
            <h3 className={styles.title}> My life </h3>
            <Typography className={styles.info_text}> {"<text>"} </Typography>
          </TimelineContent>
          <TimelineSeparator></TimelineSeparator>

          <TimelineOppositeContent>
            <h3 className={styles.title}> I am a placeholder</h3>
          </TimelineOppositeContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
