import { Button, Theme, Typography, useTheme } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import RedditIcon from "@material-ui/icons/Reddit";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import TECKboard from "../../assets/Logo_TB.svg";
import DevLights from "../../assets/devlights.svg";
import Schulapp from "../../assets/schulapp.png";
import { contrastBlack } from "../../utils/textContrast";

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    backgroundColor: theme.palette.secondary.main,
    height: 400,
    clipPath:
      "polygon(50% 0%, 83% 12%, 100% 43%, 100% 100%, 68% 100%, 29% 100%, 0 100%, 0% 43%, 17% 12%);",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    flex: 4,
    alignItems: "center",
    height: "100%",
    display: "flex",
    width: "100%",
  },
  backgroundColor: {
    backgroundColor: theme.palette.primary.main,
  },
  text: {
    display: "flex",
    flex: 1,
    textAlign: "end",
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },
  middle: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },
  button: {
    flex: 1,
    width: "25%",
    color: "#fff",
  },
  image: {
    alignSelf: "center",
  },
  copyrightContainer: {
    flex: 1,
    justifySelf: "start",
  },
  copyrightText: {
    verticalAlign: "top",
    color: "#fff",
  },
}));

export interface FooterProps {}
export default function Footer(props: FooterProps) {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.left}>
          <img
            height="30%"
            width="20%"
            className={styles.image}
            alt="test"
            src="https://dev.teckboard.de/storage/f605f813-171b-47b3-985a-8b3377e33fd8.gif"
          ></img>
        </div>
        <div className={styles.middle}>
          <Typography className={styles.text}>Contact</Typography>
          <Button
            onClick={() => window.open("https://github.com/Jozys", "_blank")}
            className={styles.button}
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
          <Button
            onClick={() => window.open("https://twitter.com/Jozys04", "_blank")}
            className={styles.button}
            startIcon={<TwitterIcon />}
          >
            Twitter
          </Button>
          <Button
            onClick={() =>
              window.open("https://reddit.com/u/Jozys04", "_blank")
            }
            className={styles.button}
            startIcon={<RedditIcon />}
          >
            Reddit
          </Button>
          <Button
            onClick={() => window.open("mailto:slaar@teckdigital.de", "_blank")}
            className={styles.button}
            startIcon={<MailIcon />}
          >
            Mail
          </Button>
        </div>
        <div className={styles.left}>
          <Typography className={styles.text}> Project Links </Typography>
          <Button
            className={styles.button}
            onClick={() => window.open("https://teckboard.de", "_blank")}
            startIcon={
              <img
                alt="TECKboard Logo"
                height={30}
                width={30}
                src={TECKboard}
              />
            }
          >
            TECKboard
          </Button>
          <Button
            className={styles.button}
            onClick={() =>
              window.open("https://github.com/ProjektDevLights", "_blank")
            }
            startIcon={
              <img
                alt="DevLights Logo"
                height={30}
                width={30}
                src={DevLights}
              />
            }
          >
            DevLights
          </Button>
          <Button
            className={styles.button}
            onClick={() => window.open("/projects/schulapp", "_self")}
            startIcon={
              <img alt="Schulapp Logo" height={30} width={30} src={Schulapp} />
            }
          >
            SchulApp
          </Button>
        </div>
      </div>
      <div className={styles.copyrightContainer}>
        <Typography className={styles.copyrightText}>
          © Copyright 2021 Joshua Slaar
        </Typography>
      </div>
    </div>
  );
}
