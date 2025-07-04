import {
  styled,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
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
    height: "auto",
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
  },
  [`& .${classes.teckboardHeader}`]: {
    flex: "0 0 auto",
    background: "#172b4d",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1, 1, 0, 0),
  },

  [`& .${classes.teckboard}`]: {
    position: "relative",
    flex: 1,
    background: "#F1F1F1aa",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    overflow: "auto",
    borderRadius: theme.spacing(0, 0, 1, 1),
  },

  [`& .${classes.teckboardTitle}`]: {
    textAlign: "center",
    fontSize: "1.25rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
    },
    color: "#fff",
    flex: 1,
  },

  [`& .${classes.icon}`]: {
    flex: "0 0 auto",
    maxHeight: 25,
    width: "auto",
    margin: theme.spacing(0, 1),
  },
}));

export default function MockTECKboard() {
  const { language } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const calculatePosition = (x: number, y: number) => {
    return {
      x: isMobile ? Math.min(x, 5) : window.innerWidth * (x / 100),
      y: isMobile ? y * 0.8 : window.innerHeight * (y / 100),
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
            width={isMobile ? "95%" : "70%"}
            parent={classes.teckboard}
            type="text"
            {...calculatePosition(isMobile ? 2.5 : 10, isMobile ? 2.5 : 10)}
            bounds="parent"
            style={{
              padding: isMobile ? 8 : 16,
              fontSize: isMobile ? "0.9rem" : "1rem",
              touchAction: isMobile ? "pan-y" : "none",
              WebkitOverflowScrolling: isMobile ? "touch" : "auto",
            }}
          />
          <Content
            value={TECKdigital}
            parent={classes.teckboard}
            lockAspectRatio
            height={isMobile ? 150 : 200}
            width={"auto"}
            style={{
              padding: isMobile ? 8 : 16,
              fontSize: isMobile ? "0.9rem" : "1rem",
              touchAction: isMobile ? "pan-y" : "none",
              WebkitOverflowScrolling: isMobile ? "touch" : "auto",
            }}
            bounds="parent"
            {...calculatePosition(isMobile ? 5 : 50, isMobile ? 300 : 10)}
            type="image"
          />
        </div>
      </div>
    </Root>
  );
}
