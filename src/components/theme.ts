import { createTheme } from "@material-ui/core";
import "@fontsource/bungee";
import "@fontsource/titillium-web";
import "@fontsource/open-sans";

const theme = (dark: boolean) => {
  return createTheme({
    palette: {
      primary: {
        main: dark ? "rgba(50, 0, 83, 1)" : "rgba(34,193,195,1)",
      },
      secondary: {
        main: dark ? "rgba(34,193,195,1)" : "rgba(50, 0, 83, 1)",
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
    //@ts-ignore
    gradients: {
      background: {
        default: dark
          ? "linear-gradient(90deg, rgba(50, 0, 83, 1) 0%, rgba(9, 9, 121, 1) 100%)"
          : "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,253,158,1) 100%)",
      },
      footer: {
        default: dark
          ? "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,253,158,1) 100%)"
          : "linear-gradient(90deg, rgba(50, 0, 83, 1) 0%, rgba(9, 9, 121, 1) 100%)",
      },
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
