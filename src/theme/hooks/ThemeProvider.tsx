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
      : getUserDefaultTheme()
  );
  const [theme, setTheme] = React.useState<Theme>(myTheme(isDark));

  React.useEffect(() => {
    document.body.style.background = theme.gradients.background.default;
  }, [theme.gradients.background.default]);

  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));

    const newTheme = myTheme(!isDark);
    setTheme(newTheme);
    setIsDark(!isDark);
    document.body.style.backgroundColor = newTheme.palette.background.default;
  };
  return (
    <ThemeSwitchContext.Provider value={{ isThemeDark: isDark, toggleTheme }}>
      <MaterialProvider theme={theme}>{children}</MaterialProvider>
    </ThemeSwitchContext.Provider>
  );
}
