import { makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Typing from "react-typing-animation";
import { contrastBlack } from "../../utils/textContrast";
import { getAge } from "../../utils/utils";

export interface HeaderProps {}

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    height: "50%",
    fontSize: "8vh",
    fontFamily: "bungee",
    textAlign: "center",
    filter: `drop-shadow(5px 5px 0px ${theme.palette.secondary.main})`,
    "&:hover": {
      filter: `drop-shadow(5px 5px 0px ${theme.palette.primary.main})`,
    },
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  title: {
    textAlign: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
}));

export default function Header(props: HeaderProps) {
  const styles = useStyles();

  return (
    <div>
      <Typing>
        <Typography className={styles.text}>
          Hello! <br /> My name is Joshua Slaar!
        </Typography>
      </Typing>
      <h1 className={styles.title}>
        Student - Developer - {getAge()} years old - Germany
      </h1>
    </div>
  );
}
