import { makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import Typing from "react-typing-animation";
import { contrastBlack } from "../../utils/textContrast";
import LEDStrip from "../LEDStrip";

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
  strip: {
    display: "flex",
    justifyContent: "center",
  },
}));

export interface DevLightsProps {}
export default function DevLights(props: DevLightsProps) {
  const styles = useStyles();
  return (
    <div>
      <Typing>
        <Typography className={styles.header}> DevLights </Typography>
      </Typing>
      <div className={styles.strip}>
        <LEDStrip />
      </div>
      <Typography>
        DevLights are the smart home LED Stripes for Developers.
      </Typography>
    </div>
  );
}
