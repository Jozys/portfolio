import {
  faCss3,
  faHtml5,
  faJava,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Theme, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import CPP from "../../assets/cpp.svg";
import MongoDB from "../../assets/mongodb.svg";
import NestJS from "../../assets/nestjs.svg";
import { contrastBlack } from "../../utils/textContrast";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(6),
  },
  iconContainer: {
    height: 100,
    width: "60%",
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    justifySelf: "center",
  },
  text: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  info_text: {
    fontSize: "2.5vh",
    width: window.innerWidth * 0.4,
    overflowWrap: "break-word",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
}));

export interface SkillsProps {}
export default function Skills(props: SkillsProps): JSX.Element {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <h1 className={styles.text}> My skills </h1>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon size="2x" icon={faJava} color="#EA2D2E" />
        <FontAwesomeIcon size="2x" icon={faJsSquare} color={"#EFD81D"} />
        <FontAwesomeIcon size="2x" icon={faReact} color={"#62DAFB"} />
        <FontAwesomeIcon size="2x" icon={faNodeJs} color="#43853D" />
        <FontAwesomeIcon size="2x" icon={faHtml5} color="#DD4B25" />
        <FontAwesomeIcon size="2x" icon={faCss3} color="#2861EE" />
        <img alt="NestJS Logo" height={30} width={30} src={NestJS} />
        <img alt="MongDB Logo" height={30} width={30} src={MongoDB} />
        <img alt="MongDB Logo" height={30} width={30} src={CPP} />
      </div>

      <Typography className={styles.info_text}>
        Above you see all the programming languages and frameworks I am familiar
        with. My experiences in Java and JavaScript are very good, the React,
        for frontend applications and Nest.js, for backend applications,
        framework experience is also very good. {"\n"}I have particular
        experience at HTML5 and CSS3. {"\n"}
        Allmost everything I have learned by myself, except from Java, I learned
        Java in school. I want to learn more languages, frameworks and tools in
        the future. My goal is to always achieve and learn more in my career.
      </Typography>
    </div>
  );
}
