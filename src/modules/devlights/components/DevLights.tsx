import { Button, Theme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import { contrastBlack } from "../../core/utils/textContrast";
import { useLanguage } from "../../../language/hooks";
import LEDStrip from "../design-system/LEDStrip";
import Typing from "../../core/components/Typing";
import DevLightsImageCarousel from "./DevLightsImageCarousel";
import DevLightsTimeline from "./DevLightsTimeline";

const PREFIX = "DevLights";

const classes = {
  container: `${PREFIX}-container`,
  introText: `${PREFIX}-introText`,
  devlightContainer: `${PREFIX}-devlightContainer`,
  devlight: `${PREFIX}-devlight`,
  carousel: `${PREFIX}-carousel`,
  image: `${PREFIX}-image`,
  strip: `${PREFIX}-strip`,
  text: `${PREFIX}-text`,
  summary: `${PREFIX}-summary`,
  link: `${PREFIX}-link`,
};

const StyledDevLights = styled("div")(({ theme }: { theme: Theme }) => ({
  [`&.${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  [`& .${classes.introText}`]: {
    width: "75%",
    display: "flex",
    flex: 7,
  },

  [`& .${classes.devlightContainer}`]: {
    flex: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  [`& .${classes.devlight}`]: {
    width: "50%",
  },

  [`& .${classes.carousel}`]: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(4),
    flex: 1,
  },

  [`& .${classes.image}`]: {
    borderRadius: 12,
    alignSelf: "center",
    zIndex: -1,
  },

  [`& .${classes.strip}`]: {
    display: "flex",
    justifyContent: "center",
  },

  [`& .${classes.text}`]: {
    fontSize: "2em",
    textAlign: "center",
  },

  [`& .${classes.summary}`]: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    fontSize: "2.5vh",
    textAlign: "center",
  },

  [`& .${classes.link}`]: {
    "&:link": {
      color: theme.palette.secondary.main,
    },
    "&:visited": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function DevLights() {
  const { language } = useLanguage();
  return (
    <StyledDevLights className={classes.container}>
      <div className={classes.devlightContainer}>
        <div>
          <Typing text={language.projects.devlight.title}></Typing>
          <Typography className={classes.text}>
            {language.projects.devlight.subtitle}
          </Typography>

          <div className={classes.strip}>
            <LEDStrip />
          </div>
        </div>
      </div>
      <div className={classes.carousel}>
        <DevLightsImageCarousel />
      </div>
      <div className={classes.introText}>
        <Typography className={classes.text}>
          {language.projects.devlight.summary}
        </Typography>
      </div>

      <Typography className={classes.text}>
        <br />
        {language.projects.devlight.openSourceNotice}
      </Typography>
      <Button
        size="large"
        onClick={() =>
          window.open("https://github.com/ProjektDevLights", "_blank")
        }
        endIcon={<GitHubIcon fontSize="inherit" />}
      >
        {language.projects.devlight.github}
      </Button>

      <DevLightsTimeline />

      <div className={classes.introText}>
        <Typography className={classes.summary}>
          {language.projects.devlight.last}
          <a className={classes.link} href="/devlights.pdf" target="_blank">
            Link
          </a>
        </Typography>
      </div>
    </StyledDevLights>
  );
}
