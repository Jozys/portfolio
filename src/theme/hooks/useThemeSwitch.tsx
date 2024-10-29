
import React from 'react';
import {
    ThemeSwitchContext,
} from './ThemeProvider';

export default function useThemeSwitch() {
    return React.useContext<{ isThemeDark: boolean, toggleTheme: () => void; }>(ThemeSwitchContext);
}