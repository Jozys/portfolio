import React from "react";
import { Theme, ThemeProvider as MaterialProvider } from "@material-ui/core";
import { default as myTheme } from "../theme";

export interface ThemeProviderProps {
    children: React.ReactNode | React.ReactNodeArray;
}

export const ThemeSwitchContext = React.createContext<{ isThemeDark: boolean, toggleTheme: () => void; }>({
    isThemeDark: true,
    toggleTheme: () => { },
});

export default function ThemeProvider(props: ThemeProviderProps) {
    const { children } = props;
    //@ts-ignore
    const [isDark, setIsDark] = React.useState<boolean>(localStorage.getItem('isDark')
        ? localStorage.getItem('isDark')
        : true);
    const [theme, setTheme] = React.useState<Theme>(myTheme(isDark));

    React.useEffect(() => {
        document.body.style.backgroundColor = theme.palette.background.default;
    }, []);

    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark));
        console.log(!isDark);

        const newTheme = myTheme(!isDark);
        setTheme(newTheme);
        setIsDark(!isDark);
        document.body.style.backgroundColor = newTheme.palette.background.default;
    };
    return (
        <ThemeSwitchContext.Provider value={{ isThemeDark: isDark, toggleTheme }}>
            <MaterialProvider theme={theme}>
                {children}
            </MaterialProvider>
        </ThemeSwitchContext.Provider>
    )

}