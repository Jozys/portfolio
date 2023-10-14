import { Theme, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Props, Rnd } from "react-rnd";

const PREFIX = "Content";

const classes = {
  textContainer: `${PREFIX}-textContainer`,
  textHeader: `${PREFIX}-textHeader`,
  textBody: `${PREFIX}-textBody`,
  text: `${PREFIX}-text`,
};

const StyledRnd = styled(Rnd)(({ theme }: { theme: Theme }) => ({
  [`& .${classes.textContainer}`]: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },

  [`& .${classes.textHeader}`]: {
    height: 20,
    backgroundColor: "#192C4C",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
  },

  [`& .${classes.textBody}`]: {
    flex: 4,
    backgroundColor: "#F9A041",
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
  },

  [`& .${classes.text}`]: {
    border: "none",
    margin: theme.spacing(1),
    fontFamily: "Open Sans",
    zIndex: 10,
  },
}));

export interface ContentProps extends Partial<Props> {
  type: "text" | "image";
  value: string;
  height: number | string;
  width: number | string;
  parent?: string;
  x?: number;
  y?: number;
}
export default function Content(props: ContentProps) {
  const { type, value, height, width, ...rest } = props;
  const [draggableHeight, setHeight] = React.useState<number | string>(height);
  const [draggableWidth, setWidth] = React.useState<number | string>(width);
  const theme = useTheme();

  return (
    <StyledRnd
      bounds={`${props.parent ?? "parent"}`}
      default={{ x: props.x ?? 0, y: props.y ?? 0, width, height }}
      onResize={(e: any, dir, ref: HTMLElement, d, position) => {
        setHeight(ref.style.height);
        setWidth(ref.style.width);
      }}
      {...rest}
    >
      {type === "text" ? (
        <div style={{ height: draggableHeight, width: draggableWidth }}>
          <div
            style={{ height: draggableHeight, width: draggableWidth }}
            className={classes.textContainer}
          >
            <div className={classes.textHeader} />
            <div className={classes.textBody}>
              <Typography
                draggable={false}
                contentEditable
                className={classes.text}
              >
                {value}
              </Typography>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            height: draggableHeight,
            width: draggableWidth,
            borderRadius: theme.shape.borderRadius,
          }}
        >
          <img
            draggable={false}
            src={value}
            height={draggableHeight}
            width={draggableWidth}
            alt={value}
          />
        </div>
      )}
    </StyledRnd>
  );
}
