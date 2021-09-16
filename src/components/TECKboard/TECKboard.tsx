import { makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Typing from "react-typing-animation";
import { contrastBlack } from "../../utils/textContrast";
import TECKLogo from "../../assets/Logo_TB.svg";
import TECKIcon from "../../assets/Rounded_Logo.svg";
import Content from "../Content";
import Image2 from "../../assets/image2.jpg";

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
    height: "800px",
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
              "TECKboard is a realtime information system. Place and Size of contents are free choice, you can drag and drop them on the position you want. "
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
            height={"358"}
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
            TECKboards was created
          </Typography>
        </div>
      </div>
    </div>
  );
}
