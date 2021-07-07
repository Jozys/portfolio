import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
}));

export interface ProjectsProps {}
export default function Projects(props: ProjectsProps): JSX.Element {
  const styles = useStyles();
  return (
    <div>
      <Typography className={styles.text}>
        Here you will find something about my projects{" "}
      </Typography>
    </div>
  );
}
