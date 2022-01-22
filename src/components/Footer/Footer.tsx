import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Theme, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import DevLights from "../../assets/devlights.svg";
import TECKboard from "../../assets/Logo_TB.svg";
import Schulapp from "../../assets/schulapp.png";
import Timo from "../../assets/timo.svg";
import H4hn from "../../assets/h4hn.svg";
import TECKdigital from "../../assets/teckdigital.svg";

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    backgroundColor: theme.palette.secondary.main,
    height: 500,
    clipPath:
      "polygon(50% 0%, 83% 12%, 100% 43%, 100% 100%, 68% 100%, 29% 100%, 0 100%, 0% 3%, 18% 12%);",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  container: {
    flex: 6,
    alignContent: "space-around",
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
    fontSize: "4vh",
    color: "#fff",
    fontWeight: "bold",
  },
  left: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  middle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },
  button: {
    height: "5vh",
    fontSize: "1.75vh",
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

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Typography className={styles.text}>Contact</Typography>
          <Button
            size="large"
            onClick={() => window.open("https://github.com/Jozys", "_blank")}
            className={styles.button}
            startIcon={<GitHubIcon fontSize="inherit" />}
          >
            Jozys
          </Button>
          <Button
            onClick={() => window.open("https://twitter.com/Jozys04", "_blank")}
            className={styles.button}
            startIcon={<TwitterIcon fontSize="inherit" />}
          >
            Jozys04
          </Button>
          <Button
            size="large"
            onClick={() =>
              window.open("https://www.instagram.com/jozys_04/", "_blank")
            }
            className={styles.button}
            startIcon={<InstagramIcon fontSize="inherit" />}
          >
            Jozys04
          </Button>
          <Button
            size="large"
            onClick={() => window.open("mailto:slaar@teckdigital.de", "_blank")}
            className={styles.button}
            startIcon={<MailIcon fontSize="inherit" />}
          >
            Mail
          </Button>
          <Button
            onClick={() => window.open("https://discord.com/app")}
            className={styles.button}
            startIcon={<FontAwesomeIcon icon={faDiscord} fontSize="inherit" />}
          >
            Jozys#0704
          </Button>
        </div>
        <div className={styles.middle}>
          <Typography className={styles.text}> Others </Typography>
          <Button
            style={{ color: "#fff", fontSize: "1.75h" }}
            startIcon={
              <img alt="Timo_Logo" height={40} width={40} src={Timo} />
            }
            onClick={() => window.open("https://tpausl.netlify.app")}
          >
            Timo
          </Button>
          <Button
            style={{ color: "#fff", fontSize: "1.75h" }}
            startIcon={
              <img alt="H4hn_Logo" height={40} width={40} src={H4hn} />
            }
            onClick={() => window.open("https://h4hn.de")}
          >
            Yannik
          </Button>
          <Button
            style={{ color: "#fff", fontSize: "1.75h" }}
            startIcon={
              <img
                alt="TECKdigital_Logo"
                height={40}
                width={40}
                src={TECKdigital}
              />
            }
            onClick={() => window.open("http://teckdigital.de/")}
          >
            TECKdigital
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
            onClick={() => window.open("/project/schulapp", "_self")}
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
          © Copyright {new Date().getFullYear()} Joshua Slaar
        </Typography>
      </div>
    </div>
  );
}
