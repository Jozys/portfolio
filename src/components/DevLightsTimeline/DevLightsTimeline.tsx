import { makeStyles, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  text: {
    fontSize: "3vh",
  },
  timelineContent: {
    width: "50%",
  },
  timelineText: {
    lineBreak: "auto",
  },
  timeline: {
    display: "flex",
    alignContent: "center",
    width: "70%",
  },
}));

export interface DevLightsTimelineProps {}
export default function DevLightsTimeline(props: DevLightsTimelineProps) {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Typography className={styles.text}>Project timeline</Typography>
      <Timeline className={styles.timeline} align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={styles.timelineContent}>
            <Typography className={styles.timelineText}>
              In the year 2020 two friends of mine and me together decided to
              take a part of a project class that was offered by our school.
              After some ideas, brainstorming and discarding ideas which
              wouldn't fit the requirements, we decided to build a project that
              would be able to control LED stripes. The only requirements given
              by our school was that the project needed to include
              microcontrollers, so it cannot just be a simple website for
              example.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={styles.timelineText}>
              In the first weeks we decided which hardware and software we would
              use at developing our project. We decided to use a BTF Lightning
              LED strip together with a ESP8266 Wifi Module as the hardware. For
              the server, which is running in the middle of hardware and user
              (software) connection, we decided to use a Raspberry Pi as
              hardware.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={styles.timelineText}>
              After deciding which hardware and software we would use the
              developing started. We started developing with the led strip and
              the server. Developing a working prototype of the ESP and the led
              stripe was a little difficult because they needed different
              voltages to function normally. But during the development we came
              up with solutions to get a working prototype. This prototype
              developed later to a self-designed circuit board.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className={styles.timelineText}>
              Over one year we developed the hardware, the backend (raspberry pi
              with an api server running) and three frontend examples
              (smartphone application, desktop app, and a minecraft mod).
              <br />
              During the project we had to create a term paper to present what
              we had done and how get things working. Also we had to present to
              the project to our teachers. After submitting the term paper and
              presentation, we got our grades for the project. Our grades were
              the best.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
