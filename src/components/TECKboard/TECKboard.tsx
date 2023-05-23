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
}));

export interface TECKboardProps {}
export default function TECKboard(props: TECKboardProps) {
  const styles = useStyles();
  return (
    <div>
      <Typing>
        <Typography className={styles.header}> TECKboard </Typography>
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
            value={
              "TECKboard is a real time digital information system. It gives the ability to create individual boards for specific groups, so that everyone just gets the information they need and are allowed to see. In the background there is a secure user and invite system for convenient user management"
            }
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
          <h1 className={styles.title}> How TECKboards have been developed </h1>

          <Typography className={styles.text}>
            The first idea for the TECKboards came from the student council of
            my school, the Graf-Adolf-Gymnasium, to replace the old analog
            information system of our school. The first version of the
            TECKboards was created in 2019. In the last two years the system has
            been developed further and further. At the end of 2019 I started
            developing a mobile application for our system. The mobile
            application was released in 2021 and can be downloaded in the known
            app stores of Apple and Google.
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
            The mobile application evolved from the first version developed for
            Android only in 2019 to the released version in the known app stores
            for Google and Apple in 2021. The mobile application is currently
            used by the students and the teachers of our school, the
            Graf-Adolf-Gymnasium in Tecklenburg, North-Rhine-Westphalia.
          </Typography>
        </div>
      </div>

      <div className={styles.imagesContainer}>
        <div className={styles.singleImage}>
          <Tilt style={{ display: "flex", justifyContent: "center" }}>
            <img
              draggable={false}
              style={{ borderRadius: 12, alignSelf: "center" }}
              src={App}
              height="auto"
              width="25%"
              alt="The first version of TECKboards mobile application"
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
              The App was first developed with Android studio in Java. In March 2020 we decided to develope directly for Android and iOS.
              For this we choose <a href="https://reactnative.dev">React Native</a>, a multiplatform app developement framework.
            </Typography>
        </div>
      </div>
    </div>
  );
}
