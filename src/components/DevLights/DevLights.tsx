import { Button, makeStyles, Theme, Typography } from "@material-ui/core";
import Typing from "react-typing-animation";
import { contrastBlack } from "../../utils/textContrast";
import DevLightsImageCarousel from "../DevLightsImageCarousel/DevLightsImageCarousel";
import DevLightsTimeline from "../DevLightsTimeline";
import LEDStrip from "../LEDStrip";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useLanguage } from "../LanguageProvider";

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
  summary: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    fontSize: "2.5vh",
    textAlign: "center",
  },
  link: {
    "&:link": {
      color: theme.palette.secondary.main,
    },
    "&:visited": {
      color: theme.palette.secondary.main,
    },
  },
}));

export default function DevLights() {
  const styles = useStyles();
  const { language } = useLanguage();
  return (
    <div className={styles.container}>
      <div className={styles.devlightContainer}>
        <div>
          <Typing>
            <Typography className={styles.header}>
              {language.projects.devlight.title}
            </Typography>
          </Typing>
          <Typography className={styles.text}>
            {language.projects.devlight.subtitle}
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
          {language.projects.devlight.summary}
        </Typography>
      </div>

      <Typography className={styles.text}>
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

      <div className={styles.introText}>
        <Typography className={styles.summary}>
          {language.projects.devlight.last}
          <a className={styles.link} href="/devlights.pdf" target="_blank">
            Link
          </a>
        </Typography>
      </div>
    </div>
  );
}
