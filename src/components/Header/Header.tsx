import { Theme, Typography } from "@mui/material";
import { contrastBlack } from "../../utils/textContrast";
import { useLanguage } from "../LanguageProvider";
import React from "react";
import { makeStyles } from "@mui/styles";
import Typing from "../Typing";

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
    whiteSpace: "pre-line",
  },
  title: {
    textAlign: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
}));

export default function Header(props: HeaderProps) {
  const styles = useStyles();
  const { language } = useLanguage();

  const string = `${language.home.greeting}\n${language.home.name}`;
  console.log(string);
  return (
    <div>
      <Typing text={string} />
      {/* <Typing>
        <Typography className={styles.text}>
          {language.home.greeting} <br /> {language.home.name}
        </Typography>
      </Typing> */}
      <h1 className={styles.title}>{language.home.subtitle}</h1>
    </div>
  );
}
