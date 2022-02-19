import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import Typing from "react-typing-animation";
import { contrastBlack } from "../../utils/textContrast";
import DevLightsTimeline from "../DevLightsTimeline";
import LEDStrip from "../LEDStrip";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  strip: {
    display: "flex",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
  },
}));

export default function DevLights() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <Typing>
        <Typography className={styles.header}> DevLights </Typography>
      </Typing>
      <div className={styles.strip}>
        <LEDStrip />
      </div>
      <Typography className={styles.text}>
        DevLights are the smart home LED Stripes for Developers.
        <br />
        <br />
        The project is open source. It can be viewed on GitHub.
      </Typography>
      <Button
        size="large"
        onClick={() =>
          window.open("https://github.com/ProjektDevLights", "_blank")
        }
        startIcon={<GitHubIcon fontSize="inherit" />}
      >
        Projekt DevLights
      </Button>
      <DevLightsTimeline />
    </div>
  );
}
