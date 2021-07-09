import { makeStyles, Theme, Typography } from "@material-ui/core";
import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@material-ui/lab";
import React from "react";
import Typing from "react-typing-animation";
import Image from "../../assets/image.png";
import Image2 from "../../assets/image2.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    fontSize: "8vh",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  info_text: {
    fontSize: "2.5vh",
    color: "#fff",
    textAlign: "center",
    width: window.innerWidth * 0.3,
    overflowWrap: "break-word",
  },
  title: {
    textAlign: "center",
    alignSelf: "center",
  },
  image: {
    transform: "scale(0.95) rotate(-0.025turn) translate(-10%, -10%)",
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
    <div>
      <Typing>
        <Typography className={styles.text}>
          Hello! My name is Joshua Slaar!
        </Typography>
      </Typing>

      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <h3 className={styles.title}> Who am I?</h3>
            <Typography className={styles.info_text}>
              I am a 17 year old student, who likes doing sport, developing, and
              reading books. I also love exploring the surroundings of my
              hometown in Northrhine-Westphalia in Germany.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent>
            <img
              src={Image}
              height="466vh"
              width="746vw"
              alt="Img not found"
              className={styles.image}
            ></img>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineContent>
            <h3 className={styles.title}> My life </h3>
            <Typography className={styles.info_text}>
              I love going outside and talking walks with my dog Simba through
              the forest in my hometown Brochterbeck. Also I cycle much with my
              bike through the countryside. Meeting friends and spending time
              with them is another thing i like doing in my freetime. In
              addition to that I am also member of the youth fire brigade in
              Tecklenburg.
            </Typography>
          </TimelineContent>
          <TimelineSeparator></TimelineSeparator>

          <TimelineOppositeContent>
            <img
              height="466vh"
              width="746vw"
              className={styles.image_left}
              alt="Img not found"
              src={Image2}
            ></img>
          </TimelineOppositeContent>
        </TimelineItem>
        <TimelineItem key="teckdigital">
          <TimelineOppositeContent>
            <h3 className={styles.title}> TECKdigital </h3>
            <Typography className={styles.info_text}>
              {" "}
              Since December 2019 I am a member of the at the begin of 2019
              founded student company{" "}
              <a href="http://teckdigital.de" className={styles.info_text}>
                TECKdigital
              </a>
              . At TECKdigital I worked on the{" "}
              <a href="/projects#teckboard" className={styles.projectLink}>
                TECKboard
              </a>
              . By working there I got more knowledge about working in a team
              and informatic in general.
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator></TimelineSeparator>
          <TimelineContent>
            <img
              height="466vh"
              width="746vw"
              className={styles.image_right}
              alt="Img not found"
              src="https://asc-images.imgix.net/2021/5/7/172b0bbf-eb3e-4ce3-818e-c25fadd3c4d3.jpeg?w=2048&auto=format"
            ></img>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
