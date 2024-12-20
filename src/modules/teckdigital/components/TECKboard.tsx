import { Theme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tilt from "react-parallax-tilt";
import OldBoard from "../../../assets/firstTECKboard.png";
import NewBoard from "../../../assets/newBoard.png";
import App from "../../../assets/teckboard_app.png";
import { useLanguage } from "../../../language/hooks";
import Typing from "../../core/components/Typing";
import { contrastBlack } from "../../core/utils/textContrast";
import MockTECKboard from "./MockTECKboard";

const PREFIX = "TECKboard";

const classes = {
  textContainer: `${PREFIX}-textContainer`,
  textInnerContainer: `${PREFIX}-textInnerContainer`,
  title: `${PREFIX}-title`,
  text: `${PREFIX}-text`,
  imagesContainer: `${PREFIX}-imagesContainer`,
  singleImage: `${PREFIX}-singleImage`,
  subTitle: `${PREFIX}-subTitle`,
  link: `${PREFIX}-link`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`& .${classes.textContainer}`]: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },

  [`& .${classes.textInnerContainer}`]: {
    alignSelf: "center",
    flex: 1,
    width: "50%",
  },

  [`& .${classes.title}`]: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    textAlign: "center",
  },

  [`& .${classes.text}`]: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    fontSize: "2.0vh",
    textAlign: "center",
  },

  [`& .${classes.imagesContainer}`]: {
    width: window.innerWidth,
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  [`& .${classes.singleImage}`]: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
  },

  [`& .${classes.subTitle}`]: {
    textAlign: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
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

export default function TECKboard() {
  const { language } = useLanguage();
  return (
    <Root>
      <Typing text={language.projects.teckboard.title}></Typing>

      <MockTECKboard />

      <div className={classes.textContainer}>
        <div className={classes.textInnerContainer}>
          <h1 className={classes.title}>
            {language.projects.teckboard.projectDescription.title}
          </h1>

          <Typography className={classes.text}>
            {language.projects.teckboard.projectDescription.description}
          </Typography>
        </div>
      </div>
      <div className={classes.imagesContainer}>
        <div className={classes.singleImage}>
          <Tilt style={{ display: "flex", justifyContent: "center" }}>
            <img
              draggable={false}
              style={{ borderRadius: 12, alignSelf: "center" }}
              src={OldBoard}
              height="auto"
              width="70%"
              alt="The first version of TECKboards"
            ></img>
          </Tilt>
          <Typography className={classes.subTitle}>
            The first version of the TECKboard, which was created in 2019
          </Typography>
        </div>
        <div className={classes.singleImage}>
          <Tilt
            style={{ display: "flex", justifyContent: "center" }}
            tiltReverse
          >
            <img
              draggable={false}
              style={{ borderRadius: 12, alignSelf: "center" }}
              src={NewBoard}
              height="auto"
              width="70%"
              alt="The second version of TECKboards"
            ></img>
          </Tilt>
          <Typography className={classes.subTitle}>
            The second version of the TECKboard, which was created in 2020, and
            is now used in our school
          </Typography>
        </div>
      </div>

      <div className={classes.imagesContainer}>
        <div className={classes.singleImage}>
          <Tilt style={{ display: "flex", justifyContent: "center" }}>
            <img
              draggable={false}
              style={{ borderRadius: 12, alignSelf: "center" }}
              //   src={App}
              height="auto"
              width="25%"
              alt="The first version of TECKboards mobile application (currently not available)"
            ></img>
          </Tilt>
          <Typography className={classes.subTitle}>
            The first version of the TECKboard mobile application
          </Typography>
        </div>
        <div className={classes.singleImage}>
          <Tilt
            style={{ display: "flex", justifyContent: "center" }}
            tiltReverse
          >
            <img
              draggable={false}
              style={{ borderRadius: 12, alignSelf: "center" }}
              src={App}
              height="auto"
              width="25%"
              alt="The released version of TECKboards mobile application"
            ></img>
          </Tilt>
          <Typography className={classes.subTitle}>
            The current version of the mobile application (v.1.1.8)
          </Typography>
        </div>
      </div>
      <div className={classes.textContainer}>
        <div className={classes.textInnerContainer}>
          <Typography className={classes.text}>
            {language.projects.teckboard.reactNative.start}{" "}
            <a className={classes.link} href="https://reactnative.dev">
              React Native
            </a>
            {language.projects.teckboard.reactNative.end}
          </Typography>
        </div>
      </div>

      <div className={classes.textContainer}>
        <div className={classes.textInnerContainer}>
          <Typography className={classes.text}>
            {language.projects.teckboard.appDescription[0]}
          </Typography>
        </div>
      </div>
    </Root>
  );
}
