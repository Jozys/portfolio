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
    surfaces: {
      card: string;
      cardSubtle: string;
      glass: string;
      glassStrong: string;
      chip: string;
      hover: string;
    };
    borders: {
      subtle: string;
      strong: string;
      glow: string;
    };
    shadowsGlow: {
      card: string;
      cardHover: string;
      buttonGlow: string;
      buttonHoverGlow: string;
    };
    gradients: {
      background: {
        default: string;
      };
      footer: {
        default: string;
      };
      visualHeader: string;
      primary: string;
    };
  }
  interface ThemeOptions {
    background?: {
      card?: string;
      border?: string;
    };
    surfaces?: {
      card?: string;
      cardSubtle?: string;
      glass?: string;
      glassStrong?: string;
      chip?: string;
      hover?: string;
    };
    borders?: {
      subtle?: string;
      strong?: string;
      glow?: string;
    };
    shadowsGlow?: {
      card?: string;
      cardHover?: string;
      buttonGlow?: string;
      buttonHoverGlow?: string;
    };
    gradients?: {
      background?: {
        default?: string;
      };
      footer?: {
        default?: string;
      };
      visualHeader?: string;
      primary?: string;
    };
  }
}

const theme = (dark: boolean) => {
  const surfaces = {
    card: dark ? "rgba(35, 18, 65, 0.7)" : "rgba(255, 255, 255, 0.85)",
    cardSubtle: dark ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.6)",
    glass: dark ? "rgba(35, 18, 65, 0.7)" : "rgba(255, 255, 255, 0.85)",
    glassStrong: dark ? "rgba(40, 21, 71, 0.85)" : "rgba(255, 255, 255, 0.92)",
    chip: dark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)",
    hover: dark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)",
  };

  const borders = {
    subtle: dark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.08)",
    strong: dark ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.16)",
    glow: dark ? "rgba(34, 193, 195, 0.4)" : "rgba(15, 118, 110, 0.35)",
  };

  const shadowsGlow = {
    card: dark
      ? "0 12px 30px rgba(0, 0, 0, 0.4)"
      : "0 10px 24px rgba(15, 118, 110, 0.1)",
    cardHover: dark
      ? "0 16px 36px rgba(0, 0, 0, 0.5)"
      : "0 14px 32px rgba(15, 118, 110, 0.16)",
    buttonGlow: dark
      ? "0 8px 24px rgba(0, 0, 0, 0.4)"
      : "0 8px 24px rgba(15, 118, 110, 0.25)",
    buttonHoverGlow: dark
      ? "0 12px 28px rgba(0, 0, 0, 0.5)"
      : "0 12px 28px rgba(15, 118, 110, 0.35)",
  };

  const gradients = {
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
    visualHeader: dark
      ? "radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, rgba(20, 10, 35, 0.6) 100%)"
      : "radial-gradient(circle, rgba(15, 118, 110, 0.06) 0%, rgba(240, 244, 248, 0.85) 100%)",
    primary: dark
      ? "linear-gradient(135deg, rgba(50, 0, 83, 1) 0%, rgba(34, 193, 195, 1) 100%)"
      : "linear-gradient(135deg, #0f766e 0%, #581c87 100%)",
  };

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
      success: {
        main: "#10b981",
        light: "#34d399",
        dark: "#059669",
        contrastText: "#ffffff",
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
      card: surfaces.card,
      border: borders.subtle,
    },
    surfaces,
    borders,
    shadowsGlow,
    gradients,
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
