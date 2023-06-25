import { makeStyles, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@material-ui/lab";
import { useLanguage } from "../LanguageProvider";

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
  const { language } = useLanguage();
  const { devlight } = language.projects;
  return (
    <div className={styles.container}>
      <Typography className={styles.text}>
        {devlight.projectTimelineTitle}
      </Typography>
      <Timeline className={styles.timeline} align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={styles.timelineContent}>
            <Typography className={styles.timelineText}>
              {devlight.projectTimeline[0]}
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
              {devlight.projectTimeline[1]}
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
              {devlight.projectTimeline[2]}
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
              {devlight.projectTimeline[3]}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
