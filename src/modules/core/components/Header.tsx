import { contrastBlack } from "../../../modules/core/utils/textContrast";
import { Avatar, Theme, Typography, useTheme } from "@mui/material";
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
    justifyContent: "space-around",

    width: "100%",
  },
  [`&.${classes.title}`]: {
    textAlign: "center",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
  [`& .${classes.avatar}`]: {
    width: "10vw",
    height: "10vw",
    borderRadius: "50%",
    marginTop: "2vh",
    boxShadow: `0px 0px 10px ${theme.palette.primary.main}`,
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: `0px 0px 20px ${theme.palette.primary.main}`,
    },
  },
  [`& .${classes.textContainer}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "2vw",
  },
}));

export default function Header(props: HeaderProps) {
  const theme = useTheme();
  return (
    <Root className={classes.root} theme={theme}>
      {props.showAvatar && (
        <Avatar className={classes.avatar} src={Me}></Avatar>
      )}

      <div className={classes.textContainer}>
        <Typing text={props.title} />
        <Typography textAlign={"center"} className={classes.title}>
          {props.subTitle && (
            <h1 className={classes.title}>{props.subTitle}</h1>
          )}
        </Typography>
      </div>
    </Root>
  );
}
