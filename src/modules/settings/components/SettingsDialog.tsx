import { Divider, Menu, MenuItem } from "@mui/material";
import LanguageSwitch from "../../../language/components/LanguageSwitch";
import ThemeSwitcher from "../../../theme/components/ThemeSwitcher";

export default function SettingsMenu(props: {
  handleClose: () => void;
  anchorElement: HTMLDivElement | undefined;
}) {
  return (
    <Menu
      sx={{ mt: "45px" }}
      anchorEl={props.anchorElement}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      disableScrollLock
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(props.anchorElement)}
      onClose={props.handleClose}
    >
      <MenuItem>
        <LanguageSwitch />
      </MenuItem>
      <Divider />
      <MenuItem>
        <ThemeSwitcher />
      </MenuItem>
    </Menu>
  );
}
