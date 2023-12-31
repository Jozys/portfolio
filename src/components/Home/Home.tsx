import { Theme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
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
const PREFIX = "Home";

const classes = {
  root: `${PREFIX}-root`,
  header: `${PREFIX}-header`,
  div: `${PREFIX}-div`,
  skill: `${PREFIX}-skill`,
  item: `${PREFIX}-item`,
  text: `${PREFIX}-text`,
  info_text: `${PREFIX}-info_text`,
  tilt: `${PREFIX}-tilt`,
  tiltLeft: `${PREFIX}-tiltLeft`,
  title: `${PREFIX}-title`,
  image: `${PREFIX}-image`,
  image_left: `${PREFIX}-image_left`,
  image_right: `${PREFIX}-image_right`,
  projectLink: `${PREFIX}-projectLink`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  [`& .${classes.header}`]: {
    flex: 10,
  },
  [`& .${classes.div}`]: {
    flex: 3,
  },
  [`& .${classes.skill}`]: {
    flex: 3,
  },
  [`& .${classes.item}`]: {
    margin: theme.spacing(8),
    flex: 2,
  },
  [`& .${classes.text}`]: {
    fontSize: "6vh",
    fontFamily: "bungee",
    textAlign: "center",
    filter: `drop-shadow(5px 5px 0px ${theme.palette.secondary.main})`,
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  [`& .${classes.info_text}`]: {
    fontSize: "2.0vh",
    textAlign: "center",
    width: window.innerWidth * 0.3,
    overflowWrap: "break-word",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  [`& .${classes.tilt}`]: {
    width: "auto",
    height: "auto",
    transform: "rotate(0.025turn) translate(0%, 10%)",
  },
  [`& .${classes.tiltLeft}`]: {
    width: "auto",
    height: "auto",
    transform: "rotate(-0.025turn) translate(20%, 10%)",
  },
  [`& .${classes.title}`]: {
    fontFamily: "bungee",
    textAlign: "center",
    alignSelf: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  [`& .${classes.image}`]: {
    borderRadius: 10,
  },
  [`& .${classes.image_left}`]: {
    borderRadius: 10,
  },
  [`& .${classes.image_right}`]: {
    borderRadius: 10,
  },
  [`& .${classes.projectLink}`]: {
    color: "#fb6340",
    fontWeight: "bold",
    textDecorationLine: "none",
  },
}));

export default function Home(): JSX.Element {
  const { language } = useLanguage();
  return (
    <Root className={classes.root}>
      <div className={classes.header}>
        <Header />
      </div>

      <Timeline position="alternate" className={classes.div}>
        <TimelineItem className={classes.item}>
          <TimelineOppositeContent>
            <h1 className={classes.title}>{language.home.me.title}</h1>
            <Typography className={classes.info_text}>
              {language.home.me.description}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent>
            <Tilt className={classes.tilt} tiltReverse>
              <img
                draggable={false}
                src={Me}
                height="65%"
                width="65%"
                alt="Thats me! In 2023 in Paris, France"
                className={classes.image}
              ></img>
            </Tilt>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={classes.item}>
          <TimelineContent>
            <h1 className={classes.title}>{language.home.life.title}</h1>
            <Typography className={classes.info_text}>
              {language.home.life.description}
            </Typography>
          </TimelineContent>
          <TimelineSeparator></TimelineSeparator>

          <TimelineOppositeContent>
            <Tilt tiltReverse className={classes.tiltLeft}>
              <img
                draggable={false}
                height="60%"
                width="60%"
                className={classes.image_left}
                alt="forest"
                src={Brochterbeck}
              ></img>
            </Tilt>
          </TimelineOppositeContent>
        </TimelineItem>
        <TimelineItem key="teckdigital" className={classes.item}>
          <TimelineOppositeContent>
            <h1 className={classes.title}>TECKdigital </h1>
            <Typography className={classes.info_text}>
              {language.home.teckdigital.description.start}
              <a href="http://teckdigital.de" className={classes.info_text}>
                TECKdigital
              </a>
              {". "}
              {language.home.teckdigital.description.middle}
              <Link to="/projects#teckboard" className={classes.projectLink}>
                TECKboard
              </Link>
              {language.home.teckdigital.description.end}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent>
            <Tilt className={classes.tilt} tiltReverse>
              <img
                draggable={false}
                height="75%"
                width="75%"
                className={classes.image_right}
                alt="TECKdigital"
                src={TECKdigital}
              ></img>
            </Tilt>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={classes.item}>
          <TimelineContent>
            <h1 className={classes.title}> {language.home.dhbw.title} </h1>
            <Typography className={classes.info_text}>
              {language.home.dhbw.description}
            </Typography>
          </TimelineContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineOppositeContent>
            <Tilt tiltReverse className={classes.tiltLeft}>
              <img
                draggable={false}
                height="60%"
                width="60%"
                className={classes.image_left}
                alt="dhbw logo"
                src={DHBW}
              ></img>
            </Tilt>
          </TimelineOppositeContent>
        </TimelineItem>
      </Timeline>
    </Root>
  );
}
