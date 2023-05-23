import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";
import Typing from "react-typing-animation";
import { contrastBlack } from "../../utils/textContrast";
import DevLightsTimeline from "../DevLightsTimeline";
import LEDStrip from "../LEDStrip";
import DevLight from "../../assets/devlight.jpg";
import Tilt from "react-parallax-tilt";
import DevLightsImageCarousel from "../DevLightsImageCarousel/DevLightsImageCarousel";

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
  introText: {
    width: "75%",
    display: "flex",
    flex: 7,
  },
  devlightContainer: {
    flex: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  devlight: {
    width: "50%",
  },
  carousel: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(4),
    flex: 1,
  },
  image: {
    borderRadius: 12,
    alignSelf: "center",
    zIndex: -1,
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
      <div className={styles.devlightContainer}>
        <div>
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
      <div className={styles.carousel}>
        <DevLightsImageCarousel />
      </div> 
      <div className={styles.introText}>
        <Typography className={styles.text}>
          DevLights are self-programmed smart home led stripes using the WS2812B chip for controlling the stripes. <br/>
          There is a backend server developed with NestJS and MongoDB, a smartphone and desktop application for the management.
        </Typography>
      </div>

      

      {/* <Typography className={styles.text}>
        <br />
        The project is open source. It can be viewed on GitHub.
      </Typography> */}
      {/* <Button
        size="large"
        onClick={() =>
          window.open("https://github.com/ProjektDevLights", "_blank")
        }
        endIcon={<GitHubIcon fontSize="inherit" />}
      >
        Visit Project Devlights on GitHub
      </Button> */}

    
      <DevLightsTimeline />
      

      {/* <Typography >
        All in all developing this project over a year in school was a quite
        good expercience.
        <br />
        The project is still on GitHub and theoretically everyone can use this system at theirs home
      </Typography> */}
    </div>
  );
}
