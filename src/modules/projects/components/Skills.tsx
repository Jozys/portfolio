import {
  faCss3,
  faHtml5,
  faJava,
  faJsSquare,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Theme, Typography } from "@mui/material";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import CPP from "../../../assets/cpp.svg";
import MongoDB from "../../../assets/mongodb.svg";
import NestJS from "../../../assets/nestjs.svg";
import TypeScript from "../../../assets/typescript.svg";

import { contrastBlack } from "../../../modules/core/utils/textContrast";
import { useLanguage } from "../../../language/hooks/index";

const PREFIX = "Skills";

const classes = {
  root: `${PREFIX}-root`,
  iconContainer: `${PREFIX}-iconContainer`,
  text: `${PREFIX}-text`,
  info_text: `${PREFIX}-info_text`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(6),
  },

  [`& .${classes.iconContainer}`]: {
    height: 100,
    width: "60%",
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-around",
    alignItems: "center",
    justifySelf: "center",
  },

  [`& .${classes.text}`]: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },

  [`& .${classes.info_text}`]: {
    fontSize: "2.5vh",
    width: window.innerWidth * 0.4,
    overflowWrap: "break-word",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
}));

export default function Skills(): JSX.Element {
  const { language } = useLanguage();
  const theme = useTheme();
  return (
    <Root className={classes.root}>
      <h1 className={classes.text}> {language.projects.main.skills.title} </h1>
      <div className={classes.iconContainer}>
        <FontAwesomeIcon size="2x" icon={faJava as IconProp} color="#EA2D2E" />
        <FontAwesomeIcon
          size="2x"
          icon={faJsSquare as IconProp}
          color={"#EFD81D"}
        />
        <img alt="MongDB Logo" height={30} width={30} src={TypeScript} />
        <FontAwesomeIcon
          size="2x"
          icon={faReact as IconProp}
          color={theme.palette.secondary.main}
        />
        <FontAwesomeIcon
          size="2x"
          icon={faNodeJs as IconProp}
          color="#43853D"
        />
        <FontAwesomeIcon size="2x" icon={faHtml5 as IconProp} color="#DD4B25" />
        <FontAwesomeIcon size="2x" icon={faCss3 as IconProp} color="#2861EE" />
        <img alt="NestJS Logo" height={30} width={30} src={NestJS} />
        <img alt="MongDB Logo" height={30} width={30} src={MongoDB} />
        <img alt="MongDB Logo" height={30} width={30} src={CPP} />
      </div>

      <Typography className={classes.info_text}>
        {language.projects.main.skills.description}
      </Typography>
    </Root>
  );
}
