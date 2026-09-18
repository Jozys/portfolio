import { createTheme } from "@mui/material";
import "@fontsource/bungee";
import "@fontsource/titillium-web";
import "@fontsource/open-sans";

const theme = (dark: boolean) => {
  return createTheme({
    palette: {
      primary: {
        main: dark ? "rgba(50, 0, 83, 1)" : "rgba(18, 138, 142, 1)",
      },
      secondary: {
        main: dark ? "rgba(34,193,195,1)" : "rgba(50, 0, 83, 1)",
      },
      background: {
        paper: dark ? "#5CCCCC" : "#ffffff",
        default: dark ? "#281547" : "#f8fafc",
      },
      text: {
        primary: dark ? "#fff" : "#111827",
        secondary: dark ? "#fdfdfd" : "#4b5563",
        disabled: dark ? "#b0b0b0" : "#9ca3af",
      },

      mode: dark ? "dark" : "light",
    },
    gradients: {
      background: {
        default: dark
          ? "linear-gradient(90deg, rgba(50, 0, 83, 1) 0%, rgba(9, 9, 121, 1) 100%)"
          : "linear-gradient(135deg, rgba(34, 193, 195, 0.14) 0%, rgba(248, 250, 252, 0.95) 50%, rgba(50, 0, 83, 0.08) 100%)",
      },
      footer: {
        default: dark
          ? "linear-gradient(0deg, rgba(75,155,155,0.8) 0%, rgba(135,195,175,0.7) 100%)"
          : "linear-gradient(90deg, rgba(18, 138, 142, 0.9) 0%, rgba(50, 0, 83, 0.9) 100%)",
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
