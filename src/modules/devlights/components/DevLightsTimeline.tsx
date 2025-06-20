import { Timeline } from "@mui/lab";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLanguage } from "../../../language/hooks";
import CustomizedTimelineItem from "../../core/design-system/TimelineItem";
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
  },
}));

export default function DevLightsTimeline() {
  const { language } = useLanguage();
  const { devlight } = language.projects;
  return (
    <Root className={classes.container}>
      <Typography className={classes.text}>
        {devlight.projectTimelineTitle}
      </Typography>
      <Timeline
        className={classes.timeline}
        position={window.innerWidth < 1000 ? "right" : "alternate"}
      >
        {devlight.projectTimeline.map((item: string, index: number) => (
          <CustomizedTimelineItem
            key={`devlight-timeline-item-${index}`}
            description={item}
            direction={index % 2 === 0 ? "normal" : "opposite"}
            useDot={true}
          />
        ))}
      </Timeline>
    </Root>
  );
}
