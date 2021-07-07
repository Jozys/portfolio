import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
}));

export interface HomeProps {}
export default function Home(props: HomeProps): JSX.Element {
  const styles = useStyles();
  return (
    <div>
      <Typography className={styles.text}>
        Hello! My name is Joshua Slaar!
      </Typography>
    </div>
  );
}
