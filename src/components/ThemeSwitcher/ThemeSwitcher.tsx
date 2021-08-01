import React from "react";
import { useThemeSwitch } from "../ThemeProvider";
import { MorphReplace } from "react-svg-morph";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { makeStyles, Theme } from "@material-ui/core";
import { contrastBlack } from "../../utils/textContrast";

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
}));
export default function ThemeSwitcher(): JSX.Element {
  const { isThemeDark, toggleTheme } = useThemeSwitch();

  const styles = useStyles();
  return (
    <div onClick={toggleTheme}>
      {isThemeDark ? (
        <Brightness4Icon fontSize="large" className={styles.icon} />
      ) : (
        <Brightness7Icon fontSize="large" className={styles.icon} />
      )}
    </div>
  );
}
