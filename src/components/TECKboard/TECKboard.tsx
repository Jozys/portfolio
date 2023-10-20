import { Theme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import Typing from "../Typing";
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

const PREFIX = "TECKboard";

const classes = {
  teckboard_container: `${PREFIX}-teckboard_container`,
  teckboardHeader: `${PREFIX}-teckboardHeader`,
  teckboard: `${PREFIX}-teckboard`,
  teckboardTitle: `${PREFIX}-teckboardTitle`,
  iconLeft: `${PREFIX}-iconLeft`,
  iconRight: `${PREFIX}-iconRight`,
  textContainer: `${PREFIX}-textContainer`,
  textInnerContainer: `${PREFIX}-textInnerContainer`,
  title: `${PREFIX}-title`,
  text: `${PREFIX}-text`,
  imagesContainer: `${PREFIX}-imagesContainer`,
  singleImage: `${PREFIX}-singleImage`,
  subTitle: `${PREFIX}-subTitle`,
  link: `${PREFIX}-link`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`& .${classes.teckboard_container}`]: {
    height: "60vh",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(8),
  },

  [`& .${classes.teckboardHeader}`]: {
    flex: 1,
    background: "#172b4d",
    display: "flex",
    alignItems: "center",
  },

  [`& .${classes.teckboard}`]: {
    position: "relative",
    flex: 10,
    background: "#F1F1F1aa",
    display: "flex",
  },

  [`& .${classes.teckboardTitle}`]: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    flex: 1,
  },

  [`& .${classes.iconLeft}`]: {
    flex: 1,
  },

  [`& .${classes.iconRight}`]: {
    flex: 1,
  },

  [`& .${classes.textContainer}`]: {
    display: "flex",
    flexDirection: "column",

    alignContent: "center",
  },

  [`& .${classes.textInnerContainer}`]: {
    alignSelf: "center",
    flex: 1,
    width: "50%",
  },

  [`& .${classes.title}`]: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    textAlign: "center",
  },

  [`& .${classes.text}`]: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    fontSize: "2.5vh",
    textAlign: "center",
  },

  [`& .${classes.imagesContainer}`]: {
    width: window.innerWidth,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  [`& .${classes.singleImage}`]: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },

  [`& .${classes.subTitle}`]: {
    textAlign: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },

  [`& .${classes.link}`]: {
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
  const { language } = useLanguage();
  return (
    <Root>
      <Typing text={language.projects.teckboard.title}></Typing>

      <div className={classes.teckboard_container}>
        <div className={classes.teckboardHeader}>
          <img
            alt="TECKboard Logo"
            className={classes.iconLeft}
            height={25}
            width={25}
            src={TECKLogo}
            draggable={false}
          />
          <Typography className={classes.teckboardTitle}>Test</Typography>
          <img
            alt="TECKboard Logo"
            className={classes.iconRight}
            height={25}
            width={25}
            src={TECKIcon}
            draggable={false}
          />
        </div>
        <div className={classes.teckboard}>
          <Content
            value={language.projects.teckboard.content}
            height={250}
            width={400}
            parent={classes.teckboard}
            type="text"
            x={200}
            y={100}
            bounds="parent"
            defaultPosition={{ x: 100, y: 100 }}
          />
          <Content
            value={TECKdigital}
            parent={classes.teckboard}
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
      <div className={classes.textContainer}>
        <div className={classes.textInnerContainer}>
          <h1 className={classes.title}>
            {language.projects.teckboard.projectDescription.title}
          </h1>

          <Typography className={classes.text}>
            {language.projects.teckboard.projectDescription.description}
          </Typography>
        </div>
      </div>
      <div className={classes.imagesContainer}>
        <div className={classes.singleImage}>
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
          <Typography className={classes.subTitle}>
            The first version of the TECKboard, which was created in 2019
          </Typography>
        </div>
        <div className={classes.singleImage}>
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
          <Typography className={classes.subTitle}>
            The second version of the TECKboard, which was created in 2020, and
            is now used in our school
          </Typography>
        </div>
      </div>
      <div className={classes.textContainer}>
        <div className={classes.textInnerContainer}>
          <Typography className={classes.text}>
            {language.projects.teckboard.appDescription[0]}
          </Typography>
        </div>
      </div>

      <div className={classes.imagesContainer}>
        <div className={classes.singleImage}>
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
          <Typography className={classes.subTitle}>
            The first version of the TECKboard mobile application
          </Typography>
        </div>
        <div className={classes.singleImage}>
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
          <Typography className={classes.subTitle}>
            The current version of the mobile application (v.1.1.8)
          </Typography>
        </div>
      </div>
      <div className={classes.textContainer}>
        <div className={classes.textInnerContainer}>
          <Typography className={classes.text}>
            {language.projects.teckboard.reactNative.start}{" "}
            <a className={classes.link} href="https://reactnative.dev">
              React Native
            </a>
            {language.projects.teckboard.reactNative.end}
          </Typography>
        </div>
      </div>
    </Root>
  );
}
