import { createMuiTheme, createTheme } from "@material-ui/core";
import "@fontsource/bungee";

const defaultTheme = (dark: boolean) =>
  createMuiTheme({ palette: { type: dark ? "dark" : "light" } });

const theme = (dark: boolean) => {
  console.log(dark ? "#4b5261" : "#dedede");
  return createTheme({
    palette: {
      primary: {
        main: dark ? "#281547" : "#f26005",
      },
      secondary: {
        main: dark ? "#f26005" : "#281547",
      },
      background: {
        default: dark ? "#281547" : "#dedede",
        paper: dark ? "#281547" : "#dedede",
      },
      text: {
        primary: dark ? "#fff" : "#000",
        secondary: dark ? "#fdfdfd" : "#0d0d0d",
      },

      type: dark ? "dark" : "light",
    },
  });
};
export default theme;
