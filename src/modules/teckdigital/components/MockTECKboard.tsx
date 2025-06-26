import { styled, Theme, Typography } from "@mui/material";
import TECKLogo from "../../../assets/projects/teckboard/Logo_TB.svg";
import TECKIcon from "../../../assets/projects/teckboard/Rounded_Logo.svg";
import TECKdigital from "../../../assets/teckdigital/teckdigital.webp";
import { useLanguage } from "../../../language/hooks";
import Content from "../design-system/Content";

const PREFIX = "TECKboard";

const classes = {
  root: `${PREFIX}-root`,
  teckboardHeader: `${PREFIX}-teckboardHeader`,
  teckboard: `${PREFIX}-teckboard`,
  teckboardTitle: `${PREFIX}-teckboardTitle`,
  icon: `${PREFIX}-icon`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`& .${classes.root}`]: {
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(8),
  },
  [`& .${classes.teckboardHeader}`]: {
    flex: 1,
    background: "#172b4d",
    display: "flex",
    alignItems: "center",
  },

  [`& .${classes.teckboard}`]: {
    position: "relative",
    flex: 12,
    background: "#F1F1F1aa",
    display: "flex",
  },

  [`& .${classes.teckboardTitle}`]: {
    textAlign: "center",
    fontSize: 24,
    color: "#fff",
    flex: 1,
  },

  [`& .${classes.icon}`]: {
    flex: 1,
  },
}));

export default function MockTECKboard() {
  const { language } = useLanguage();

  const calculatePosition = (x: number, y: number) => {
    return {
      x: window.innerWidth * (x / 100),
      y: window.innerHeight * (y / 100),
    };
  };
  return (
    <Root>
      <div className={classes.root}>
        <div className={classes.teckboardHeader}>
          <img
            alt="TECKboard Logo"
            className={classes.icon}
            height={25}
            width={25}
            src={TECKLogo}
            draggable={false}
          />
          <Typography className={classes.teckboardTitle}>Test</Typography>
          <img
            alt="TECKboard Logo"
            className={classes.icon}
            height={25}
            width={25}
            src={TECKIcon}
            draggable={false}
          />
        </div>
        <div className={classes.teckboard}>
          <Content
            value={language.projects.teckboard.content}
            height={"auto"}
            width={"70%"}
            parent={classes.teckboard}
            type="text"
            {...calculatePosition(10, 10)}
            bounds="parent"
            style={{ padding: 10 }}
          />
          <Content
            value={TECKdigital}
            parent={classes.teckboard}
            lockAspectRatio
            height={200}
            width={"auto"}
            bounds="parent"
            {...calculatePosition(50, 10)}
            type="image"
          />
        </div>
      </div>
    </Root>
  );
}
