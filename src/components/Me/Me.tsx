import { makeStyles, Typography } from "@material-ui/core";
import Typing from "react-typing-animation";
import React from "react";

const useStyles = makeStyles(() => ({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
}));

export interface MeProps {}
export default function Me(props: MeProps): JSX.Element {
  const styles = useStyles();
  return (
    <div>
      <Typography className={styles.text}>
        Here you will find something about me
      </Typography>
    </div>
  );
}
