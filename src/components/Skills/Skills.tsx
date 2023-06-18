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
import { language } from "../../language/en";

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

export default function Skills(): JSX.Element {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <h1 className={styles.text}> {language.projects.main.skills.title} </h1>
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
        {language.projects.main.skills.description}
      </Typography>
    </div>
  );
}
