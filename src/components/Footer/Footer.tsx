import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Theme, Typography } from "@material-ui/core";
import { LinkedIn } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/styles";
import TECKboard from "../../assets/Logo_TB.svg";
import DevLights from "../../assets/devlights.svg";
import H4hn from "../../assets/h4hn.svg";
import TECKdigital from "../../assets/teckdigital.svg";
import Timo from "../../assets/timo_logo.svg";

const useStyles = makeStyles((theme: Theme) => ({
  background: {
    height: window.innerHeight * 0.5,
    backgroundColor: theme.palette.secondary.main,
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
    fontSize: "1.65vh",
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

export interface FooterProps { }
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
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/joshua-slaar-00346424b/",
                "_blank"
              )
            }
            className={styles.button}
            startIcon={<LinkedIn fontSize="inherit" />}
          >
            Joshua Slaar
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
            onClick={() => window.open("mailto:joshua@slaar.de", "_blank")}
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
            onClick={() => window.open("https://tipela.de")}
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
          <Typography className={styles.text}> Projects </Typography>
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
