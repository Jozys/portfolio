import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { useLanguage } from "../LanguageProvider";
const PREFIX = "DevLightsTimeline";

const classes = {
  container: `${PREFIX}-container`,
  text: `${PREFIX}-text`,
  timelineContent: `${PREFIX}-timelineContent`,
  timelineText: `${PREFIX}-timelineText`,
  timeline: `${PREFIX}-timeline`,
};

const Root = styled("div")(({ theme }) => ({
  [`&.${classes.container}`]: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  [`& .${classes.text}`]: {
    fontSize: "3vh",
  },

  [`& .${classes.timelineContent}`]: {
    width: "50%",
  },

  [`& .${classes.timelineText}`]: {
    lineBreak: "auto",
  },

  [`& .${classes.timeline}`]: {
    display: "flex",
    alignContent: "center",
    width: "70%",
  },
}));

export interface DevLightsTimelineProps {}
export default function DevLightsTimeline(props: DevLightsTimelineProps) {
  const { language } = useLanguage();
  const { devlight } = language.projects;
  return (
    <Root className={classes.container}>
      <Typography className={classes.text}>
        {devlight.projectTimelineTitle}
      </Typography>
      <Timeline className={classes.timeline} position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className={classes.timelineContent}>
            <Typography className={classes.timelineText}>
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
            <Typography className={classes.timelineText}>
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
            <Typography className={classes.timelineText}>
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
            <Typography className={classes.timelineText}>
              {devlight.projectTimeline[3]}
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Root>
  );
}
