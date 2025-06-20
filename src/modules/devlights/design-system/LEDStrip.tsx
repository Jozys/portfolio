import {
  Input,
  FormControl,
  FormHelperText,
  InputLabel,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import tinycolor from "tinycolor2";
import { useLanguage } from "../../../language/hooks";
import Circle from "../../core/design-system/Circle";
import Snackbar from "../../core/design-system/Snackbar";
const PREFIX = "LEDStrip";

const classes = {
  root: `${PREFIX}-root`,
  stripContainer: `${PREFIX}-stripContainer`,
  button: `${PREFIX}-button`,
};

const Root = styled("div")(() => ({
  [`&.${classes.root}`]: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  [`& .${classes.stripContainer}`]: {
    display: "flex",
    width: "100%",
    height: 75,
    alignItems: "center",
    justifyContent: "center",
  },

  [`& .${classes.button}`]: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function LEDStrip() {
  const [color, setColor] = React.useState<string>("#00ff6a");
  const [intervalId, setIntervalId] = React.useState<NodeJS.Timeout>();

  const [visible, setVisible] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const calculateLength = (): number => {
    return Math.round((window.innerWidth * 0.5) / 20);
  };
  const [length, setLength] = React.useState<number>(calculateLength());
  const { language } = useLanguage();

  const handleResize = () => {
    setLength(calculateLength());
  };

  const start = () => {
    const id = setInterval(function () {
      const newColor = tinycolor.random().toHexString();
      // to handle user input in the color input, only update the input, if the activeElement is not the input
      if (document.activeElement !== inputRef.current && inputRef.current) {
        inputRef.current.value = newColor;
      }
      setColor(newColor);
    }, 5000);

    setIntervalId(id);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    start();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderItems = () => {
    const items = [];
    for (let i = 0; i < length; i++) {
      items.push(<Circle color={color} key={i} />);
    }
    return items;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      if (tinycolor(inputRef.current?.value).isValid()) {
        if (intervalId) {
          clearTimeout(intervalId);
          clearInterval(intervalId);
          setIntervalId(undefined);
        }
        setColor(inputRef.current?.value ?? "#00ff6a");
      } else {
        if (inputRef.current) {
          inputRef.current.value = color;
        }
        setVisible(true);
        setMessage("Invalid color provided");
      }
    }
  };

  const handleClose = () => {
    setVisible(false);
    setMessage("");
  };

  return (
    <Root className={classes.root}>
      <div className={classes.stripContainer}>{renderItems()}</div>
      <div>
        <FormControl>
          <InputLabel>{language.projects.devlight.ledstrip.color}</InputLabel>
          <Input
            key={"color_input"}
            inputRef={inputRef}
            defaultValue={color}
            endAdornment={
              <Circle
                color={
                  document.activeElement !== inputRef.current ||
                  !inputRef.current?.value
                    ? color ?? "#00ff6a"
                    : inputRef.current?.value
                }
              />
            }
            onKeyPress={handleKeyPress}
          />
          <FormHelperText id={"hex-info-text"}>
            {language.projects.devlight.ledstrip.validity}
          </FormHelperText>
        </FormControl>
        {!intervalId ? (
          <Button className={classes.button} onClick={() => start()}>
            {language.projects.devlight.ledstrip.restart}
          </Button>
        ) : null}
      </div>
      <Snackbar
        message={message}
        onClose={handleClose}
        open={visible}
        severity="error"
      />
    </Root>
  );
}
