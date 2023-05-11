import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import Typing from "react-typing-animation";
import { contrastBlack } from "../../utils/textContrast";
import DevLightsTimeline from "../DevLightsTimeline";
import LEDStrip from "../LEDStrip";
import DevLight from "../../assets/devlight.jpg";
import Tilt from "react-parallax-tilt";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headerContainer: {
    display: "flex",
    width: "100%",
  },
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
  devlightContainer: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  devlight: {
    width: "50%",
  },
  headerRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    flex: 6,
  },
  image: {
    borderRadius: 12,
    alignSelf: "center",
  },
  strip: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    fontSize: "2em",
    textAlign: "center",
  },
}));

export default function DevLights() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.devlightContainer}>
          <Tilt className={styles.devlight}>
            <img
              alt="Logo of DevLights"
              className={styles.image}
              src={DevLight}
              width={"auto"}
              height="auto"
            ></img>
          </Tilt>
        </div>
        <div className={styles.headerRight}>
          <Typing>
            <Typography className={styles.header}> DevLights </Typography>
          </Typing>
          <Typography className={styles.text}>
            The smart home LED stripes for developers
          </Typography>

          <div className={styles.strip}>
            <LEDStrip />
          </div>
        </div>
      </div>

      <Typography className={styles.text}>
        <br />
        The project is open source. It can be viewed on GitHub.
      </Typography>
      <Button
        size="large"
        onClick={() =>
          window.open("https://github.com/ProjektDevLights", "_blank")
        }
        endIcon={<GitHubIcon fontSize="inherit" />}
      >
        Visit Project Devlights on GitHub
      </Button>

      <DevLightsTimeline />

      <Typography>
        All in all developing this project over a year in school was a quite
        good expercience
      </Typography>
    </div>
  );
}
