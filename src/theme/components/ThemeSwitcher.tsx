import SettingsSwitch from "../../modules/core/components/SettingsSwitch";
import { useThemeSwitch } from "../hooks/index";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function ThemeSwitcher(): JSX.Element {
  const { isThemeDark, toggleTheme } = useThemeSwitch();

  const themeOptions = [
    {
      value: "light",
      label: "Light",
      icon: <Brightness7Icon fontSize="small" />,
    },
    {
      value: "dark",
      label: "Dark",
      icon: <Brightness4Icon fontSize="small" />,
    },
  ];

  return (
    <SettingsSwitch
      currentValue={isThemeDark ? "dark" : "light"}
      options={themeOptions}
      onChange={(value) => {
        if (
          (value === "dark" && !isThemeDark) ||
          (value === "light" && isThemeDark)
        ) {
          toggleTheme();
        }
      }}
      label="Theme"
      ariaLabel="Select theme"
    />
  );
}
