import { Theme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { contrastBlack } from "../../utils/textContrast";
import { useThemeSwitch } from "../ThemeProvider";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    transition: `color 300ms ease-in-out`,
  },
}));
export default function ThemeSwitcher(): JSX.Element {
  const { isThemeDark, toggleTheme } = useThemeSwitch();

  const styles = useStyles();
  return (
    <div style={{ transition: "color 300ms" }} onClick={toggleTheme}>
      {isThemeDark ? (
        <Brightness4Icon fontSize="large" className={styles.icon} />
      ) : (
        <Brightness7Icon fontSize="large" className={styles.icon} />
      )}
    </div>
  );
}
