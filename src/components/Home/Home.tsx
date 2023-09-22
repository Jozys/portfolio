import { Theme, Typography } from "@mui/material";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import Tilt from "react-parallax-tilt";
import { HashLink as Link } from "react-router-hash-link";
import Brochterbeck from "../../assets/brochterbeck.jpg";
import DHBW from "../../assets/DHBW_Logo.svg";
import Me from "../../assets/me.jpg";
import TECKdigital from "../../assets/teckdigital.webp";
import { contrastBlack } from "../../utils/textContrast";
import Header from "../Header";
import { useLanguage } from "../LanguageProvider";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    flex: 10,
  },
  div: {
    flex: 3,
  },
  skill: {
    flex: 3,
  },
  item: {
    margin: theme.spacing(8),
    flex: 2,
  },
  text: {
    fontSize: "6vh",
    fontFamily: "bungee",
    textAlign: "center",
    filter: `drop-shadow(5px 5px 0px ${theme.palette.secondary.main})`,
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  info_text: {
    fontSize: "2.0vh",
    textAlign: "center",
    width: window.innerWidth * 0.3,
    overflowWrap: "break-word",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  tilt: {
    width: "auto",
    height: "auto",
    transform: "rotate(0.025turn) translate(0%, 10%)",
  },
  tiltLeft: {
    width: "auto",
    height: "auto",
    transform: "rotate(-0.025turn) translate(20%, 10%)",
  },
  title: {
    fontFamily: "bungee",
    textAlign: "center",
    alignSelf: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  image: {
    borderRadius: 10,
  },
  image_left: {
    borderRadius: 10,
  },
  image_right: {
    borderRadius: 10,
  },
  projectLink: {
    color: "#fb6340",
    fontWeight: "bold",
    textDecorationLine: "none",
  },
}));

export default function Home(): JSX.Element {
  const styles = useStyles();
  const { language } = useLanguage();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>

      <Timeline position="alternate" className={styles.div}>
        <TimelineItem className={styles.item}>
          <TimelineOppositeContent>
            <h1 className={styles.title}>{language.home.me.title}</h1>
            <Typography className={styles.info_text}>
              {language.home.me.description}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent>
            <Tilt className={styles.tilt} tiltReverse>
              <img
                draggable={false}
                src={Me}
                height="65%"
                width="65%"
                alt="Thats me! In 2019 in Egypt"
                className={styles.image}
              ></img>
            </Tilt>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={styles.item}>
          <TimelineContent>
            <h1 className={styles.title}>{language.home.life.title}</h1>
            <Typography className={styles.info_text}>
              {language.home.life.description}
            </Typography>
          </TimelineContent>
          <TimelineSeparator></TimelineSeparator>

          <TimelineOppositeContent>
            <Tilt tiltReverse className={styles.tiltLeft}>
              <img
                draggable={false}
                height="60%"
                width="60%"
                className={styles.image_left}
                alt="forest"
                src={Brochterbeck}
              ></img>
            </Tilt>
          </TimelineOppositeContent>
        </TimelineItem>
        <TimelineItem key="teckdigital" className={styles.item}>
          <TimelineOppositeContent>
            <h1 className={styles.title}>TECKdigital </h1>
            <Typography className={styles.info_text}>
              {language.home.teckdigital.description.start}
              <a href="http://teckdigital.de" className={styles.info_text}>
                TECKdigital
              </a>
              {". "}
              {language.home.teckdigital.description.middle}
              <Link to="/projects#teckboard" className={styles.projectLink}>
                TECKboard
              </Link>
              {language.home.teckdigital.description.end}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent>
            <Tilt className={styles.tilt} tiltReverse>
              <img
                draggable={false}
                height="75%"
                width="75%"
                className={styles.image_right}
                alt="TECKdigital"
                src={TECKdigital}
              ></img>
            </Tilt>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={styles.item}>
          <TimelineContent>
            <h1 className={styles.title}> {language.home.dhbw.title} </h1>
            <Typography className={styles.info_text}>
              {language.home.dhbw.description}
            </Typography>
          </TimelineContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineOppositeContent>
            <Tilt tiltReverse className={styles.tiltLeft}>
              <img
                draggable={false}
                height="60%"
                width="60%"
                className={styles.image_left}
                alt="dhbw logo"
                src={DHBW}
              ></img>
            </Tilt>
          </TimelineOppositeContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
