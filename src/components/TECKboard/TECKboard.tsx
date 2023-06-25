import { makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Typing from "react-typing-animation";
import { contrastBlack } from "../../utils/textContrast";
import Tilt from "react-parallax-tilt";
import TECKLogo from "../../assets/Logo_TB.svg";
import TECKIcon from "../../assets/Rounded_Logo.svg";
import App from "../../assets/teckboard_app.png";
import Content from "../Content";
import TECKdigital from "../../assets/teckdigital.webp";
import OldBoard from "../../assets/firstTECKboard.png";
import NewBoard from "../../assets/newBoard.png";
import { useLanguage } from "../LanguageProvider";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    fontSize: "8vh",
    fontFamily: "bungee",
    textAlign: "center",
    filter: `drop-shadow(5px 5px 0px ${theme.palette.secondary.main})`,
    "&:hover": {
      filter: `drop-shadow(5px 5px 0px ${theme.palette.primary.main})`,
    },
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  teckboard_container: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(8),
  },
  teckboardHeader: {
    flex: 1,
    background: "#172b4d",
    display: "flex",
    alignItems: "center",
  },
  teckboard: {
    position: "relative",
    flex: 10,
    background: "#F1F1F1aa",
    display: "flex",
  },
  teckboardTitle: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    flex: 1,
  },
  iconLeft: {
    flex: 1,
  },
  iconRight: {
    flex: 1,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",

    alignContent: "center",
  },
  textInnerContainer: {
    alignSelf: "center",
    flex: 1,
    width: "50%",
  },
  title: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    textAlign: "center",
  },
  text: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    fontSize: "2.5vh",
    textAlign: "center",
  },
  imagesContainer: {
    width: window.innerWidth,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  singleImage: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },
  subTitle: {
    textAlign: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  link: {
    "&:link": {
      color: theme.palette.secondary.main,
    },
    "&:visited": {
      color: theme.palette.secondary.main,
    },
  },
}));

export interface TECKboardProps {}
export default function TECKboard(props: TECKboardProps) {
  const styles = useStyles();
  const { language } = useLanguage();
  return (
    <div>
      <Typing>
        <Typography className={styles.header}>
          {language.projects.teckboard.title}
        </Typography>
      </Typing>

      <div className={styles.teckboard_container}>
        <div className={styles.teckboardHeader}>
          <img
            alt="TECKboard Logo"
            className={styles.iconLeft}
            height={25}
            width={25}
            src={TECKLogo}
            draggable={false}
          />
          <Typography className={styles.teckboardTitle}>Test</Typography>
          <img
            alt="TECKboard Logo"
            className={styles.iconRight}
            height={25}
            width={25}
            src={TECKIcon}
            draggable={false}
          />
        </div>
        <div className={styles.teckboard}>
          <Content
            value={language.projects.teckboard.content}
            height={250}
            width={400}
            parent={styles.teckboard}
            type="text"
            x={200}
            y={100}
            bounds="parent"
            defaultPosition={{ x: 100, y: 100 }}
          />
          <Content
            value={TECKdigital}
            parent={styles.teckboard}
            lockAspectRatio
            height={200}
            width={"auto"}
            bounds="parent"
            x={1000}
            y={50}
            type="image"
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textInnerContainer}>
          <h1 className={styles.title}>
            {language.projects.teckboard.projectDescription.title}
          </h1>

          <Typography className={styles.text}>
            {language.projects.teckboard.projectDescription.description}
          </Typography>
        </div>
      </div>
      <div className={styles.imagesContainer}>
        <div className={styles.singleImage}>
          <Tilt style={{ display: "flex", justifyContent: "center" }}>
            <img
              draggable={false}
              style={{ borderRadius: 12, alignSelf: "center" }}
              src={OldBoard}
              height="auto"
              width="70%"
              alt="The first version of TECKboards"
            ></img>
          </Tilt>
          <Typography className={styles.subTitle}>
            The first version of the TECKboard, which was created in 2019
          </Typography>
        </div>
        <div className={styles.singleImage}>
          <Tilt
            style={{ display: "flex", justifyContent: "center" }}
            tiltReverse
          >
            <img
              draggable={false}
              style={{ borderRadius: 12, alignSelf: "center" }}
              src={NewBoard}
              height="auto"
              width="70%"
              alt="The second version of TECKboards"
            ></img>
          </Tilt>
          <Typography className={styles.subTitle}>
            The second version of the TECKboard, which was created in 2020, and
            is now used in our school
          </Typography>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textInnerContainer}>
          <Typography className={styles.text}>
            {language.projects.teckboard.appDescription[0]}
          </Typography>
        </div>
      </div>

      <div className={styles.imagesContainer}>
        <div className={styles.singleImage}>
          <Tilt style={{ display: "flex", justifyContent: "center" }}>
            <img
              draggable={false}
              style={{ borderRadius: 12, alignSelf: "center" }}
              //   src={App}
              height="auto"
              width="25%"
              alt="The first version of TECKboards mobile application (currently not available)"
            ></img>
          </Tilt>
          <Typography className={styles.subTitle}>
            The first version of the TECKboard mobile application
          </Typography>
        </div>
        <div className={styles.singleImage}>
          <Tilt
            style={{ display: "flex", justifyContent: "center" }}
            tiltReverse
          >
            <img
              draggable={false}
              style={{ borderRadius: 12, alignSelf: "center" }}
              src={App}
              height="auto"
              width="25%"
              alt="The released version of TECKboards mobile application"
            ></img>
          </Tilt>
          <Typography className={styles.subTitle}>
            The current version of the mobile application (v.1.1.8)
          </Typography>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textInnerContainer}>
          <Typography className={styles.text}>
            {language.projects.teckboard.reactNative.start}{" "}
            <a className={styles.link} href="https://reactnative.dev">
              React Native
            </a>
            {language.projects.teckboard.reactNative.end}
          </Typography>
        </div>
      </div>
    </div>
  );
}
