import { useState } from "react";
import { useTheme } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SettingsDialog from "./SettingsDialog";
import { contrastBlack } from "../../core/utils/textContrast";
export default function Settings(): JSX.Element {
  const [anchorElement, setAnchorElement] = useState<
    HTMLDivElement | undefined
  >(undefined);

  const theme = useTheme();

  return (
    <>
      <SettingsIcon
        sx={{
          color: contrastBlack(theme.palette.background.default)
            ? "#000"
            : "#fff",
        }}
        onClick={(event) => {
          setAnchorElement(event.currentTarget ?? null);
        }}
        style={{ cursor: "pointer" }}
      />
      <SettingsDialog
        anchorElement={anchorElement}
        handleClose={() => setAnchorElement(undefined)}
      />
    </>
  );
}
