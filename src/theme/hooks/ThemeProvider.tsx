import React from "react";
import { ThemeProvider as MaterialProvider } from "@mui/material";
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
    return typeof window !== "undefined"
      ? window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false
      : false;
  };

  const [isDark, setIsDark] = React.useState<boolean>(() => {
    const saved = localStorage.getItem("isDark");
    if (saved !== null) {
      return saved === "true";
    }
    return getUserDefaultTheme();
  });

  const theme = React.useMemo(() => myTheme(isDark), [isDark]);

  React.useEffect(() => {
    // Listen to system theme changes if user hasn't explicitly set a preference
    if (localStorage.getItem("isDark") !== null) return;

    const mediaQuery = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mediaQuery) return;

    const handler = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("isDark") !== null) return;
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener?.("change", handler);
    return () => mediaQuery.removeEventListener?.("change", handler);
  }, []);

  React.useEffect(() => {
    const bg = theme.gradients.background.default;
    const bgColor = theme.palette.background.default;

    // Apply the gradient (background-image) first, then set backgroundColor as a solid underlay
    // for semi-transparent gradient stops, fallback rendering, and rubber-band overscroll canvas.
    document.documentElement.style.background = bg;
    document.documentElement.style.backgroundColor = bgColor;
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    document.body.style.background = bg;
    document.body.style.backgroundColor = bgColor;

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", bgColor);
    }
  }, [theme, isDark]);

  const toggleTheme = React.useCallback(() => {
    setIsDark((prev) => {
      const nextIsDark = !prev;
      localStorage.setItem("isDark", JSON.stringify(nextIsDark));
      return nextIsDark;
    });
  }, []);

  const contextValue = React.useMemo(
    () => ({ isThemeDark: isDark, toggleTheme }),
    [isDark, toggleTheme],
  );

  return (
    <ThemeSwitchContext.Provider value={contextValue}>
      <MaterialProvider theme={theme}>{children}</MaterialProvider>
    </ThemeSwitchContext.Provider>
  );
}
