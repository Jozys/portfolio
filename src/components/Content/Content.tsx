import { makeStyles, Theme, Typography, useTheme } from "@material-ui/core";
import React from "react";
import { Props, Rnd } from "react-rnd";

const useStyles = makeStyles((theme: Theme) => ({
  textContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  textHeader: {
    height: 20,
    backgroundColor: "#192C4C",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
  },
  textBody: {
    flex: 4,
    backgroundColor: "#F9A041",
    borderBottomLeftRadius: theme.shape.borderRadius,
    borderBottomRightRadius: theme.shape.borderRadius,
  },
  text: {
    margin: theme.spacing(1),
    fontFamily: "Open Sans",
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
  const styles = useStyles();
  return (
    <Rnd
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
            className={styles.textContainer}
          >
            <div className={styles.textHeader} />
            <div className={styles.textBody}>
              <Typography contentEditable className={styles.text}>
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
    </Rnd>
  );
}
