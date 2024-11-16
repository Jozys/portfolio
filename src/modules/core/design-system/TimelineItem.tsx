import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { styled, Typography } from "@mui/material";
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
};

const StyledCustomTimelineItem = styled(TimelineItem)(({ theme }) => ({
  marginTop: theme.spacing(2),
  [`& .${classes.root}`]: {
    margin: theme.spacing(8),
    flex: 2,
  },
  [`& .${classes.textContainer}`]: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  [`& .${classes.title}`]: {
    fontFamily: "bungee",
    textAlign: "center",
    alignSelf: "center",
    width: "50%",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },

  [`& .${classes.text}`]: {
    fontSize: "2.0vh",
    width: window.innerWidth < 1000 ? "80%" : "50%",
    textAlign: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  [`& .${classes.textItem}`]: {
    flex: 5,
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    textAlign: "center",
  },

  [`& .${classes.tilt}`]: {
    width: "auto",
    height: "auto",
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
}));

export interface TimelineItemProps {
  key: string;
  title?: string;
  description: string | React.ReactNode;
  image?: string;
  imageStyle?: React.CSSProperties;
  rotateImage?: boolean;
  direction: "normal" | "opposite";
  textChildren?: React.ReactNode;
  useDot?: boolean;
  containerStyle?: React.CSSProperties;
}

export default function CustomizedTimelineItem(props: TimelineItemProps) {
  return <CustomTimelineItem {...props} />;
}

function CustomTimelineItem(props: TimelineItemProps) {
  if (window.innerWidth >= 1000) {
    return (
      <StyledCustomTimelineItem style={{ ...props.containerStyle }}>
        <TimelineOppositeContent className={classes.textItem}>
          <TextContent {...props} />
        </TimelineOppositeContent>
        {props.useDot && (
          <TimelineSeparator>
            <TimelineDot />
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
                ...props.containerStyle,
              }
            : { ...props.containerStyle }
        }
      >
        {props.useDot && (
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
        )}
        <TimelineContent className={classes.textItem}>
          <TextContent {...props} />
        </TimelineContent>

        {props.image != null && (
          <TimelineContent sx={{ flex: 5 }}>
            <ImageContent {...props} />
          </TimelineContent>
        )}
      </StyledCustomTimelineItem>
    );
  }
}

function TextContent(props: Partial<TimelineItemProps>) {
  return (
    <div className={classes.textContainer}>
      <h1 className={classes.title}>{props.title}</h1>
      <Typography className={classes.text}>{props.description}</Typography>
      {props.textChildren}
    </div>
  );
}

function ImageContent(props: Partial<TimelineItemProps>) {
  return (
    <Tilt tiltReverse className={classes.tilt}>
      <img
        style={{
          borderRadius: 10,
          transform: props.rotateImage
            ? props.direction === "normal"
              ? "rotate(0.025turn) translate(0%, 10%)"
              : "rotate(-0.025turn) translate(20%, 10%"
            : undefined,
        }}
        height={props.imageStyle?.height ?? "50%"}
        width={props.imageStyle?.width ?? "50%"}
        src={props.image}
        alt={props.title}
      />
    </Tilt>
  );
}
