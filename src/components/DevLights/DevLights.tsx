import { makeStyles, Theme, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import Typing from "react-typing-animation";
import { contrastBlack } from "../../utils/textContrast";
import LEDStrip from "../LEDStrip";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
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
  strip: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
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

export default function DevLights() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Typing>
        <Typography className={styles.header}> DevLights </Typography>
      </Typing>
      <div className={styles.strip}>
        <LEDStrip />
      </div>
      <Typography className={styles.text}>
        DevLights are the smart home LED Stripes for Developers.
      </Typography>

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
              would be able to control LED stripes.
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
              the server. The hardware was at first very difficult to built
              because the most of use had a very good knowledge in working with
              the two components used here and the electricity we needed to get
              the LED strip working.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
