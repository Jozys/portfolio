import {
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import Tilt from "react-parallax-tilt";
import { styled, Typography } from "@mui/material";
import React from "react";
import { contrastBlack } from "../../../modules/core/utils/textContrast";

const PREFIX = "CustomTimelineItem";

const classes = {
  root: `${PREFIX}-root`,
  text: `${PREFIX}-text`,
  title: `${PREFIX}-title`,
  item: `${PREFIX}-item`,
  textItem: `${PREFIX}-textItem`,
};

const StyledCustomTimelineItem = styled("div")(({ theme }) => ({
  [`&.${classes.root}`]: {
    flex: 3,
  },
  [`& .${classes.item}`]: {
    margin: theme.spacing(8),
    flex: 2,
    alignItems: "center",
  },
  [`& .${classes.title}`]: {
    fontFamily: "bungee",
    textAlign: "center",
    alignSelf: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  [`& .${classes.text}`]: {
    fontSize: "2.0vh",
    textAlign: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  [`& .${classes.textItem}`]: {
    flex: 5,
    justifyItems: "center",
  },
}));

export interface TimelineItemProps {
  key: string;
  title: string;
  description: string | React.ReactNode;
  image: string;
  imageStyle?: React.CSSProperties;
  rotateImage?: boolean;
  direction: "normal" | "opposite";
  textChildren?: React.ReactNode;
}

export default function CustomizedTimelineItem(props: TimelineItemProps) {
  if (props.direction === "normal") {
    return <CustomTimelineItem {...props} />;
  } else {
    return <OppositeCustomTimelineItem {...props} />;
  }
}

function CustomTimelineItem(props: TimelineItemProps) {
  return (
    <StyledCustomTimelineItem className={classes.item}>
      <TimelineItem className={classes.item} key={props.key}>
        <TimelineOppositeContent className={classes.textItem}>
          <div
            style={{ width: "50%", display: "flex", flexDirection: "column" }}
          >
            <h1 className={classes.title}>{props.title}</h1>

            <Typography className={classes.text}>
              {props.description}
            </Typography>
            {props.textChildren}
          </div>
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ flex: 1 }} />
        <TimelineContent sx={{ flex: 5 }}>
          <Tilt
            style={{
              width: "auto",
              height: "auto",

              flex: 1,
            }}
          >
            <img
              style={{
                borderRadius: 10,
                transform: props.rotateImage
                  ? "rotate(0.025turn) translate(0%, 10%)"
                  : undefined,
              }}
              height={props.imageStyle?.height ?? "65%"}
              width={props.imageStyle?.width ?? "65%"}
              src={props.image}
              alt={props.title}
            />
          </Tilt>
        </TimelineContent>
      </TimelineItem>
    </StyledCustomTimelineItem>
  );
}

function OppositeCustomTimelineItem(props: TimelineItemProps) {
  return (
    <StyledCustomTimelineItem className={classes.item}>
      <TimelineItem key={props.key} className={classes.item}>
        <TimelineOppositeContent sx={{ flex: 5 }}>
          <Tilt
            style={{
              width: "auto",
              height: "auto",
            }}
          >
            <img
              style={{
                borderRadius: 10,
                transform: props.rotateImage
                  ? "rotate(-0.025turn) translate(20%, 10%)"
                  : undefined,
              }}
              height={props.imageStyle?.height ?? "65%"}
              width={props.imageStyle?.width ?? "65%"}
              src={props.image}
              alt={props.title}
            />
          </Tilt>
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ flex: 1 }} />

        <TimelineContent className={classes.textItem}>
          <div style={{ width: "50%" }}>
            <h1 className={classes.title}>{props.title}</h1>
            <Typography className={classes.text}>
              {props.description}
            </Typography>
            {props.textChildren}
          </div>
        </TimelineContent>
        <TimelineSeparator />
      </TimelineItem>
    </StyledCustomTimelineItem>
  );
}
