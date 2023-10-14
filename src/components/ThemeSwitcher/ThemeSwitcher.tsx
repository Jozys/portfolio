import { Theme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { contrastBlack } from "../../utils/textContrast";
import { useThemeSwitch } from "../ThemeProvider";
const PREFIX = "ThemeSwitcher";

const classes = {
  icon: `${PREFIX}-icon`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`& .${classes.icon}`]: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    transition: `color 300ms ease-in-out`,
  },
}));

export default function ThemeSwitcher(): JSX.Element {
  const { isThemeDark, toggleTheme } = useThemeSwitch();

  return (
    <Root style={{ transition: "color 300ms" }} onClick={toggleTheme}>
      {isThemeDark ? (
        <Brightness4Icon fontSize="large" className={classes.icon} />
      ) : (
        <Brightness7Icon fontSize="large" className={classes.icon} />
      )}
    </Root>
  );
}
