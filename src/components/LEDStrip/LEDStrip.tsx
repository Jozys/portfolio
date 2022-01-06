import {
  makeStyles,
  Theme,
  Input,
  FormControl,
  FormHelperText,
  InputLabel,
  Button,
} from "@material-ui/core";
import React from "react";
import Circle from "../Circle";
import tinycolor from "tinycolor2";
import { Alert } from "@material-ui/lab";
import Snackbar from "../Snackbar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  stripContainer: {
    display: "flex",
    width: "90%",
    height: 150,
    alignItems: "center",
  },
}));

export interface LEDStripProps {}
export default function LEDStrip(props: LEDStripProps) {
  const [color, setColor] = React.useState<string>("#00ff6a");
  const [intervalId, setIntervalId] = React.useState<NodeJS.Timeout>();

  const [visible, setVisible] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("");
  const inputRef = React.useRef<HTMLInputElement>();
  const calculateLength = (): number => {
    return Math.round((window.innerWidth * 0.9) / 20);
  };
  const [length, setLength] = React.useState<number>(calculateLength());

  const handleResize = (e: UIEvent) => {
    setLength(calculateLength());
  };

  const start = () => {
    let id = setInterval(function () {
      console.log("interval");
      setColor(tinycolor.random().toHexString());
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

  const styles = useStyles();
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
        clearInterval(intervalId as NodeJS.Timeout);
        setIntervalId(undefined);
        setColor(inputRef.current?.value ?? "#00ff6a");
      } else {
        if (inputRef.current) {
          //inputRef.current.blur();
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
    <div className={styles.root}>
      <div className={styles.stripContainer}>{renderItems()}</div>
      <div>
        <FormControl>
          <InputLabel>Type color here</InputLabel>
          <Input
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
            Only valid HEX or RGB values
          </FormHelperText>
        </FormControl>
        {!intervalId ? (
          <Button onClick={() => start()}>Restart Random Color</Button>
        ) : null}
      </div>
      <Snackbar
        message={message}
        onClose={handleClose}
        open={visible}
        severity="error"
      />
    </div>
  );
}
