import { createTheme } from "@mui/material";
import "@fontsource/bungee";
import "@fontsource/titillium-web";
import "@fontsource/open-sans";

declare module "@mui/material/styles" {
  interface Theme {
    background: {
      card: string;
      border: string;
    };
    gradients: {
      background: {
        default: string;
      };
      footer: {
        default: string;
      };
    };
  }
  interface ThemeOptions {
    background?: {
      card?: string;
      border?: string;
    };
    gradients?: {
      background?: {
        default?: string;
      };
      footer?: {
        default?: string;
      };
    };
  }
}

const theme = (dark: boolean) => {
  return createTheme({
    palette: {
      primary: {
        main: dark ? "rgba(50, 0, 83, 1)" : "#0f766e",
        contrastText: "#ffffff",
      },
      secondary: {
        main: dark ? "rgba(34, 193, 195, 1)" : "#581c87",
        contrastText: dark ? "#180828" : "#ffffff",
      },
      background: {
        paper: dark ? "#1e1138" : "#ffffff",
        default: dark ? "#281547" : "#f8fafc",
      },
      text: {
        primary: dark ? "#ffffff" : "#111827",
        secondary: dark ? "#cbd5e1" : "#374151",
        disabled: dark ? "#64748b" : "#9ca3af",
      },

      mode: dark ? "dark" : "light",
    },
    background: {
      card: dark ? "rgba(20, 10, 35, 0.4)" : "rgba(255, 255, 255, 0.6)",
      border: dark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
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
          : "linear-gradient(90deg, rgba(15, 118, 110, 0.9) 0%, rgba(88, 28, 135, 0.9) 100%)",
      },
    },
    typography: {
      fontFamily: ["Titillium Web", "Bungee", "Open Sans"].join(","),
      allVariants: {
        fontFamily: "Titillium Web",
        fontWeight: "normal",
      },
    },
  });
};
export default theme;
