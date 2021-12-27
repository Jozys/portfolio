import { makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Typing from "react-typing-animation";
import { contrastBlack } from "../../utils/textContrast";
import Tilt from "react-parallax-tilt";
import TECKLogo from "../../assets/Logo_TB.svg";
import TECKIcon from "../../assets/Rounded_Logo.svg";
import Content from "../Content";
import Image2 from "../../assets/image2.jpg";
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
    display: "flex",
    flexDirection: "column",

    padding: theme.spacing(8),
    height: "135vh",
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
    fontFamily: "Open Sans",
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
    width: "50%",
    alignSelf: "center",
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
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: theme.spacing(4),
  },
  singleImage: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  subTitle: {
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
            value={Image2}
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
        <div className={styles.textContainer}>
          <h1 className={styles.title}> How TECKboards have been developed </h1>

          <Typography className={styles.text}>
            The first idea for the TECKboards came from the student council of
            my school, the Graf-Adolf-Gymnasium, to replace the old analog
            information system of our school. The first version of the
            TECKboards was created in 2019. In the last two years the system has
            been developed further and further. A mobile application, which I
            developed,
          </Typography>

          <Typography>At the end</Typography>
        </div>
        <div className={styles.imagesContainer}>
          <div className={styles.singleImage}>
            <Tilt>
              <img
                style={{ borderRadius: 12 }}
                src={OldBoard}
                height="auto"
                width="70%"
                alt="The first version of TECKboards"
              ></img>
            </Tilt>
            <Typography className={styles.subTitle}>
              The first version of the TECKboard
            </Typography>
          </div>
          <div className={styles.singleImage}>
            <Tilt tiltReverse>
              <img
                style={{ borderRadius: 12 }}
                src={NewBoard}
                height="auto"
                width="70%"
                alt="The second version of TECKboards"
              ></img>
            </Tilt>
            <Typography className={styles.subTitle}>
              The second version of the TECKboard
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
