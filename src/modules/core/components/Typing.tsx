import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Theme, styled, useTheme } from "@mui/material/styles";
import { contrastBlack } from "../../../modules/core/utils/textContrast";
import { useMediaQuery } from "@mui/material";

export interface TypingProps {
  text: string;
}

const PREFIX = "Typing";

const classes = {
  root: `${PREFIX}-root`,
  text: `${PREFIX}-text`,
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
}));

export default function Typing(props: TypingProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Responsive Breakpoints für verschiedene Geräte
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  // Responsive Schriftgröße bestimmen
  const fontSize = isMobile ? "1.5rem" : isTablet ? "1.75rem" : "2.5rem";

  return (
    <Root className={classes.root}>
      <TypeAnimation
        wrapper="span"
        className={classes.text}
        style={{
          fontSize,
        }}
        sequence={[props.text]}
        speed={isMobile ? 75 : 50}
      />
    </Root>
  );
}
