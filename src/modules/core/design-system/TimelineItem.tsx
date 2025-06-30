import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import {
  Paper,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Tilt from "react-parallax-tilt";
import { contrastBlack } from "../../../modules/core/utils/textContrast";

const PREFIX = "CustomTimelineItem";

const classes = {
  root: `${PREFIX}-root`,
  textContainer: `${PREFIX}-textContainer`,
  text: `${PREFIX}-text`,
  title: `${PREFIX}-title`,
  item: `${PREFIX}-item`,
  textItem: `${PREFIX}-textItem`,
  tilt: `${PREFIX}-tilt`,
  card: `${PREFIX}-card`,
  imageContainer: `${PREFIX}-imageContainer`,
};

const StyledCustomTimelineItem = styled(TimelineItem)(({ theme }) => ({
  marginTop: theme.spacing(2),
  [`& .${classes.root}`]: {
    margin: theme.spacing(8),
    flex: 2,
  },
  [`& .${classes.textContainer}`]: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
  },
  [`& .${classes.title}`]: {
    fontFamily: "bungee",
    textAlign: "center",
    alignSelf: "center",
    width: "100%",
    marginBottom: theme.spacing(2),
    color: contrastBlack(theme.palette.background.paper) ? "#000" : "#fff",
  },
  [`& .${classes.text}`]: {
    fontSize: "2.0vh",
    width: "100%",
    textAlign: "center",
    color: contrastBlack(theme.palette.background.paper) ? "#000" : "#fff",
  },
  [`& .${classes.textItem}`]: {
    flex: 5,
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
  },
  [`& .${classes.tilt}`]: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
  },
  [`& .${classes.card}`]: {
    padding: theme.spacing(3),
    borderRadius: theme.spacing(2),
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    background: theme.palette.background.paper,
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: `0 12px 30px rgba(0, 0, 0, 0.15), 0 0 0 2px ${theme.palette.primary.main}88`,
    },
    overflow: "hidden",
    width: "100%",
    maxWidth: theme.breakpoints.down("sm") ? "85%" : "90%",
    minHeight: "400px",
  },
  [`& .${classes.imageContainer}`]: {
    overflow: "hidden",
    borderRadius: theme.spacing(1),
    marginTop: theme.spacing(2),
    textAlign: "center",
    maxWidth: theme.breakpoints.down("sm") ? "85%" : "90%",
    minHeight: theme.breakpoints.up("sm") ? "400px" : "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export interface TimelineItemProps {
  key: string;
  title?: string | React.ReactNode;
  description: string | React.ReactNode;
  image?: string | React.ReactNode;
  imageStyle?: React.CSSProperties;
  rotateImage?: boolean;
  direction: "normal" | "opposite";
  children?: React.ReactNode;
  useDot?: boolean;
  dotContent?: React.ReactNode;
  containerStyle?: React.CSSProperties;
}

export default function CustomizedTimelineItem(props: TimelineItemProps) {
  return <CustomTimelineItem {...props} />;
}

function CustomTimelineItem(props: TimelineItemProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!isMobile) {
    return (
      <StyledCustomTimelineItem style={{ ...props.containerStyle }}>
        <TimelineOppositeContent className={classes.textItem}>
          <Paper className={classes.card} elevation={0}>
            <TextContent {...props} />
          </Paper>
        </TimelineOppositeContent>
        {props.useDot && (
          <TimelineSeparator>
            <TimelineDot color="primary">{props.dotContent}</TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
        )}
        <TimelineContent sx={{ flex: 5 }}>
          <ImageContent {...props} />
        </TimelineContent>
      </StyledCustomTimelineItem>
    );
  } else {
    return (
      <StyledCustomTimelineItem
        style={
          props.image != null
            ? {
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%",
                ...props.containerStyle,
              }
            : { ...props.containerStyle }
        }
      >
        {props.useDot && (
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
        )}
        <Paper className={classes.card} elevation={0}>
          <TimelineContent
            className={[classes.imageContainer, classes.textItem].join(" ")}
            style={{ ...props.containerStyle }}
          >
            {props.image != null && <ImageContent {...props} />}
            <TextContent {...props} />
          </TimelineContent>
        </Paper>
      </StyledCustomTimelineItem>
    );
  }
}

function TextContent(props: Partial<TimelineItemProps>) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className={classes.textContainer}>
      <h1 className={classes.title}>{props.title}</h1>
      <Typography className={classes.text}>{props.description}</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          justifyContent: "space-around",
          alignContent: "center",
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

function ImageContent(props: Partial<TimelineItemProps>) {
  return (
    <div className={classes.imageContainer}>
      <Tilt
        tiltReverse
        className={classes.tilt}
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            textAlign: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {typeof props.image === "string" ? (
            <img
              style={{
                borderRadius: 10,
                maxWidth: "100%",
                maxHeight: "400px",
                objectFit: "contain",
                ...props.imageStyle,
              }}
              src={props.image}
              alt={props.title?.toString()}
            />
          ) : (
            props.image
          )}
        </div>
      </Tilt>
    </div>
  );
}
