import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkedIn, Search, TrainOutlined } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";
import { Theme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import DevLights from "../../../assets/projects/devlights/devlights.svg";
import TECKboard from "../../../assets/projects/teckboard/Logo_TB.svg";
import { useLanguage } from "../../../language/hooks/index";
import CustomFooterButton from "../design-system/CustomFooterButton";

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
    //@ts-ignore
    background: theme.gradients.footer.default,
    clipPath:
      "polygon(50% 0%, 83% 12%, 100% 43%, 100% 100%, 68% 100%, 29% 100%, 0 100%, 0% 10%, 18% 12%);",
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

export default function Footer() {
  const { language } = useLanguage();
  return (
    <Root className={classes.root}>
      <div className={classes.container}>
        <div className={classes.left}>
          <Typography className={classes.text}>
            {language.footer.contact}
          </Typography>

          <CustomFooterButton
            text="Jozys"
            href={import.meta.env.VITE_USER_GITHUB}
            startIcon={<GitHubIcon fontSize="inherit" />}
          />
          <CustomFooterButton
            text="Joshua Slaar"
            href={import.meta.env.VITE_USER_LINKEDIN}
            startIcon={<LinkedIn fontSize="inherit" />}
          />
          <CustomFooterButton
            text="Jozys04"
            href={import.meta.env.VITE_USER_INSTAGRAM}
            startIcon={<InstagramIcon fontSize="inherit" />}
          />
          <CustomFooterButton
            text="Jozys"
            href={import.meta.env.VITE_USER_MAIL}
            startIcon={<MailIcon fontSize="inherit" />}
          />
          <CustomFooterButton
            text="@jozys"
            href={import.meta.env.VITE_USER_DISCORD}
            startIcon={
              <FontAwesomeIcon
                icon={faDiscord as IconProp}
                fontSize="inherit"
              />
            }
          />
        </div>

        <div className={classes.left}>
          <Typography className={classes.text}>
            {" "}
            {language.footer.projects}{" "}
          </Typography>
          <CustomFooterButton
            href={import.meta.env.VITE_TECKBOARD_LINK}
            text="TECKboard"
            startIcon={
              <img
                alt="TECKboard Logo"
                height={30}
                width={30}
                src={TECKboard}
              />
            }
          />

          <CustomFooterButton
            href={import.meta.env.VITE_DEVLIGHTS_LINK}
            text="DevLights"
            startIcon={
              <img
                alt="DevLights Logo"
                height={30}
                width={30}
                src={DevLights}
              />
            }
          />
          <CustomFooterButton
            href={import.meta.env.VITE_SIMPLEQ_LINK}
            text="SimpleQ"
            startIcon={<Search fontSize="inherit" />}
          />
          <CustomFooterButton
            href={import.meta.env.VITE_DB_DELAY_LINK}
            text="DB Delay"
            startIcon={<TrainOutlined fontSize="inherit" />}
          />
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
