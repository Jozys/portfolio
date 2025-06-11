import { contrastBlack } from "../../../modules/core/utils/textContrast";
import {
  Avatar,
  Theme,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Typing from "../../../modules/core/components/Typing";
import styled from "@emotion/styled";
import Me from "../../../assets/me.jpg";

export interface HeaderProps {
  title: string;
  subTitle?: string;
  showAvatar?: boolean;
}

const PREFIX = "Header";
const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  avatar: `${PREFIX}-avatar`,
  textContainer: `${PREFIX}-textContainer`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", // Center content by default
    width: "100%",
    padding: theme.spacing(2),

    // Responsive layout - switch to column on small screens
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(2),
    },
  },
  [`&.${classes.title}`]: {
    textAlign: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",

    // Responsive font sizes
    fontSize: "2.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
      textAlign: "center", // Center text on small screens
    },
  },
  [`& .${classes.avatar}`]: {
    width: "10vw",
    height: "10vw",
    maxWidth: "150px", // Limit maximum size
    maxHeight: "150px",
    minWidth: "80px", // Ensure minimum size
    minHeight: "80px",
    borderRadius: "50%",
    marginTop: theme.spacing(1),
    boxShadow: `0px 0px 10px ${theme.palette.primary.main}`,
    transition: "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out",
    "&:hover": {
      boxShadow: `0px 0px 20px ${theme.palette.primary.main}`,
      transform: "scale(1.05)",
    },

    // Adjust size on mobile
    [theme.breakpoints.down("sm")]: {
      width: "25vw",
      height: "25vw",
    },
  },
  [`& .${classes.textContainer}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: theme.spacing(4),

    // Remove margin on mobile and use full width
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "100%",
    },
  },
}));

export default function Header(props: HeaderProps) {
  const theme = useTheme();
  // Detect screen size for conditional rendering
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Root className={classes.root} theme={theme}>
      {props.showAvatar && (
        <Avatar className={classes.avatar} src={Me} alt="Profile picture" />
      )}

      <div className={classes.textContainer}>
        <Typing text={props.title} />
        {props.subTitle && (
          <Typography
            variant={isMobile ? "h5" : "h4"}
            className={classes.title}
            sx={{
              mt: 1,
              fontWeight: "medium",
              overflowWrap: "break-word",
              wordBreak: "break-word",
            }}
          >
            {props.subTitle}
          </Typography>
        )}
      </div>
    </Root>
  );
}
