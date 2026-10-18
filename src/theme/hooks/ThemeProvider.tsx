import React from "react";
import { Theme, ThemeProvider as MaterialProvider } from "@mui/material";
import { default as myTheme } from "../interface/theme";

export interface ThemeProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ThemeSwitchContext = React.createContext<{
  isThemeDark: boolean;
  toggleTheme: () => void;
}>({
  isThemeDark: true,
  toggleTheme: () => {},
});

export default function ThemeProvider(props: ThemeProviderProps) {
  const { children } = props;
  const getUserDefaultTheme = (): boolean => {
    return window
      ? window?.matchMedia("(prefers-color-scheme: dark)")?.matches
      : false;
  };

  const [isDark, setIsDark] = React.useState<boolean>(
    localStorage.getItem("isDark")
      ? localStorage.getItem("isDark") === "true"
        ? true
        : false
      : getUserDefaultTheme(),
  );
  const [theme, setTheme] = React.useState<Theme>(myTheme(isDark));

  React.useEffect(() => {
    const bg = theme.gradients.background.default;
    const bgColor = theme.palette.background.default;

    // Apply the gradient (background-image) first, then set backgroundColor as a solid underlay
    // for semi-transparent gradient stops, fallback rendering, and rubber-band overscroll canvas.
    document.documentElement.style.background = bg;
    document.documentElement.style.backgroundColor = bgColor;
    document.body.style.background = bg;
    document.body.style.backgroundColor = bgColor;

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", bgColor);
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    localStorage.setItem("isDark", JSON.stringify(nextIsDark));
    setIsDark(nextIsDark);
    setTheme(myTheme(nextIsDark));
  };
  return (
    <ThemeSwitchContext.Provider value={{ isThemeDark: isDark, toggleTheme }}>
      <MaterialProvider theme={theme}>{children}</MaterialProvider>
    </ThemeSwitchContext.Provider>
  );
}
