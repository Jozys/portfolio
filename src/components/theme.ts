import { createTheme } from "@material-ui/core";
import "@fontsource/bungee";
import "@fontsource/titillium-web";
import "@fontsource/open-sans";

const theme = (dark: boolean) => {
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
    typography: {
      fontFamily: ["Titillium Web", "Bungee", "Open Sans"].join(","),
      allVariants: {
        fontFamily: "Titillium Web",
        fontWeight: "normal",
        color: dark ? "#fff" : "#000",
      },
    },
  });
};
export default theme;
