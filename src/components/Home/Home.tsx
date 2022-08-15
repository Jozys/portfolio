import { makeStyles, Theme, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import Tilt from "react-parallax-tilt";
import { HashLink as Link } from "react-router-hash-link";
import Image2 from "../../assets/image2.jpg";
import Me from "../../assets/me.jpg";
import { contrastBlack } from "../../utils/textContrast";
import { getAge } from "../../utils/utils";
import Header from "../Header";

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
    fontSize: "8vh",
    fontFamily: "bungee",
    textAlign: "center",
    filter: `drop-shadow(5px 5px 0px ${theme.palette.secondary.main})`,
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  info_text: {
    fontSize: "2.5vh",
    textAlign: "center",
    width: window.innerWidth * 0.3,
    overflowWrap: "break-word",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  tilt: {
    marginTop: "5vh",
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
    transform: "scale(0.95) rotate(0.015turn) translate(-20%, -10%)",
    borderRadius: 10,
  },
  image_left: {
    transform: "scale(0.95) rotate(-0.025turn)",
    borderRadius: 10,
  },
  image_right: {
    transform: "rotate(0.025turn) translate(-10%, -10%)",
    borderRadius: 10,
  },
  projectLink: {
    color: "#fb6340",
    fontWeight: "bold",
    textDecorationLine: "none",
  },
}));

export interface HomeProps {}
export default function Home(props: HomeProps): JSX.Element {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Header />
      </div>

      <Timeline align="alternate" className={styles.div}>
        <TimelineItem className={styles.item}>
          <TimelineOppositeContent>
            <h1 className={styles.title}> Who am I?</h1>
            <Typography className={styles.info_text}>
              I am a {getAge()} year old student, who likes doing sport,
              developing, and reading books. Currently I am study informatics in
              Karlsruhe and work at SAP in Walldorf, Baden-Württemberg Germany.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent>
            <Tilt className={styles.tilt} tiltReverse>
              <img
                src={Me}
                height="65%"
                width="65%"
                alt="Thats me!"
                className={styles.image}
              ></img>
            </Tilt>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className={styles.item}>
          <TimelineContent>
            <h1 className={styles.title}> My life </h1>
            <Typography className={styles.info_text}>
              I love going outside and taking walks at my hometown Brochterbeck
              in North-Rhine-Westphalia. Also I cycle much with my bike through
              the countryside.Its also very important to me to meet friends and
              spending time with them reguarly.
            </Typography>
          </TimelineContent>
          <TimelineSeparator></TimelineSeparator>

          <TimelineOppositeContent>
            <Tilt className={styles.tiltLeft}>
              <img
                height="60%"
                width="60%"
                className={styles.image_left}
                alt="forest"
                src={Image2}
              ></img>
            </Tilt>
          </TimelineOppositeContent>
        </TimelineItem>
        <TimelineItem key="teckdigital" className={styles.item}>
          <TimelineOppositeContent>
            <h1 className={styles.title}>TECKdigital </h1>
            <Typography className={styles.info_text}>
              Since December 2019 I am a member of the at the begin of 2019
              founded student company{" "}
              <a href="http://teckdigital.de" className={styles.info_text}>
                TECKdigital
              </a>
              . At TECKdigital I worked on the{" "}
              <Link to="/projects#teckboard" className={styles.projectLink}>
                TECKboard
              </Link>
              . By working there I got more knowledge about working in a team
              and informatic in general.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent>
            <Tilt className={styles.tilt} tiltReverse>
              <img
                height="75%"
                width="75%"
                className={styles.image_right}
                alt="TECKdigital"
                src="https://asc-images.imgix.net/2021/5/7/172b0bbf-eb3e-4ce3-818e-c25fadd3c4d3.jpeg?w=2048&auto=format"
              ></img>
            </Tilt>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
