import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { styled } from "@mui/material/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Theme, Typography } from "@mui/material";
import { LinkedIn } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import TECKboard from "../../../assets/Logo_TB.svg";
import DevLights from "../../../assets/devlights.svg";
import H4hn from "../../../assets/h4hn.svg";
import TECKdigital from "../../../assets/teckdigital.svg";
import Timo from "../../../assets/timo_logo.svg";
import { useLanguage } from "../../../language/hooks/index";

const PREFIX = "Footer";

const classes = {
  root: `${PREFIX}-root`,
  container: `${PREFIX}-container`,
  backgroundColor: `${PREFIX}-backgroundColor`,
  text: `${PREFIX}-text`,
  left: `${PREFIX}-left`,
  middle: `${PREFIX}-middle`,
  button: `${PREFIX}-button`,
  image: `${PREFIX}-image`,
  copyrightContainer: `${PREFIX}-copyrightContainer`,
  copyrightText: `${PREFIX}-copyrightText`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`&.${classes.root}`]: {
    height: window.innerHeight * 0.5,
    background: theme.palette.secondary.main,
    clipPath:
      "polygon(50% 0%, 83% 12%, 100% 43%, 100% 100%, 68% 100%, 29% 100%, 0 100%, 0% 3%, 18% 12%);",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  [`& .${classes.container}`]: {
    flex: 6,
    alignContent: "space-around",
    alignItems: "center",
    height: "100%",
    display: "flex",
    width: "100%",
  },

  [`& .${classes.text}`]: {
    display: "flex",
    flex: 1,
    textAlign: "end",
    fontSize: "4vh",
    color: "#fff",
    fontWeight: "bold",
  },

  [`& .${classes.left}`]: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  [`& .${classes.middle}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
  },

  [`& .${classes.button}`]: {
    height: "5vh",
    fontSize: "1.65vh",
    width: "25%",
    color: "#fff",
  },

  [`& .${classes.image}`]: {
    alignSelf: "center",
  },

  [`& .${classes.copyrightContainer}`]: {
    flex: 1,
    justifySelf: "start",
  },

  [`& .${classes.copyrightText}`]: {
    verticalAlign: "top",
    color: "#fff",
  },
}));

export interface FooterProps {}
export default function Footer(props: FooterProps) {
  const { language } = useLanguage();
  return (
    <Root className={classes.root}>
      <div className={classes.container}>
        <div className={classes.left}>
          <Typography className={classes.text}>
            {language.footer.contact}
          </Typography>
          <Button
            size="large"
            onClick={() => window.open("https://github.com/Jozys", "_blank")}
            className={classes.button}
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
            className={classes.button}
            startIcon={<LinkedIn fontSize="inherit" />}
          >
            Joshua Slaar
          </Button>
          <Button
            size="large"
            onClick={() =>
              window.open("https://www.instagram.com/jozys_04/", "_blank")
            }
            className={classes.button}
            startIcon={<InstagramIcon fontSize="inherit" />}
          >
            Jozys04
          </Button>
          <Button
            size="large"
            onClick={() => window.open("mailto:joshua@slaar.de", "_blank")}
            className={classes.button}
            startIcon={<MailIcon fontSize="inherit" />}
          >
            Mail
          </Button>
          <Button
            onClick={() => window.open("https://discord.com/app")}
            className={classes.button}
            startIcon={
              <FontAwesomeIcon
                icon={faDiscord as IconProp}
                fontSize="inherit"
              />
            }
          >
            Jozys#0704
          </Button>
        </div>
        <div className={classes.middle}>
          <Typography className={classes.text}>
            {language.footer.others}
          </Typography>
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
        <div className={classes.left}>
          <Typography className={classes.text}>
            {" "}
            {language.footer.projects}{" "}
          </Typography>
          <Button
            className={classes.button}
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
            className={classes.button}
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
      <div className={classes.copyrightContainer}>
        <Typography className={classes.copyrightText}>
          © Copyright {new Date().getFullYear()} Joshua Slaar
        </Typography>
      </div>
    </Root>
  );
}
