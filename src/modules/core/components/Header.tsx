import React from "react";
import { contrastBlack } from "../../../modules/core/utils/textContrast";
import { Theme } from "@mui/material";
import Typing from "../../../modules/core/components/Typing";
import { makeStyles } from "@mui/styles";

export interface HeaderProps {
  title: string;
  subTitle?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    textAlign: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
}));

export default function Header(props: HeaderProps) {
  const styles = useStyles();
  return (
    <div>
      <Typing text={props.title} />
      {props.subTitle && <h1 className={styles.title}>{props.subTitle}</h1>}
    </div>
  );
}
