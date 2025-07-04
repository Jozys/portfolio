import { useState, useEffect } from "react";
import { Theme, styled, useTheme } from "@mui/material/styles";
import { contrastBlack } from "../../../modules/core/utils/textContrast";
import { useMediaQuery } from "@mui/material";

export interface TypingProps {
  text: string;
  speed?: number;
}

const PREFIX = "Typing";

const classes = {
  root: `${PREFIX}-root`,
  text: `${PREFIX}-text`,
  cursor: `${PREFIX}-cursor`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`&.${classes.root}`]: {
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  [`& .${classes.text}`]: {
    height: "25%",
    width: "100%",
    display: "block",
    fontFamily: "bungee",
    textAlign: "center",
    filter: `drop-shadow(5px 5px 0px ${theme.palette.secondary.main})`,
    "&:hover": {
      filter: `drop-shadow(5px 5px 0px ${theme.palette.primary.main})`,
    },
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    whiteSpace: "pre-line",
    wordBreak: "break-all",
  },
  [`& .${classes.cursor}`]: {
    display: "inline-block",
    width: "3px",
    height: "1em",
    backgroundColor: contrastBlack(theme.palette.background.default)
      ? "#000"
      : "#fff",
    marginLeft: "2px",
    animation: "blink 1s step-end infinite",
    "@keyframes blink": {
      "0%, 100%": { opacity: 1 },
      "50%": { opacity: 0 },
    },
  },
}));

export default function Typing({ text, speed = 50 }: TypingProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const fontSize = isMobile ? "1.5rem" : isTablet ? "1.75rem" : "2.5rem";

  const adjustedSpeed = isMobile ? speed * 1.5 : speed;

  useEffect(() => {
    setDisplayedText("");
    setIndex(0);
    setIsComplete(false);
  }, [text]);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, adjustedSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [index, text, adjustedSpeed]);

  return (
    <Root className={classes.root}>
      <span className={classes.text} style={{ fontSize }}>
        {displayedText}
        {!isComplete && <span className={classes.cursor}></span>}
      </span>
    </Root>
  );
}
