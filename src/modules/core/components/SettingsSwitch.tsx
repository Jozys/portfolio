import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputBase,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { contrastBlack } from "../utils/textContrast";

const CustomizedInputBase = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    border: "none",
    "&:focus": {
      border: "none",
    },
  },
}));

interface SettingsOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface SettingsSwitchProps {
  currentValue: string;
  options: SettingsOption[];
  onChange: (value: string) => void;
  mainIcon?: React.ReactNode;
  label?: string;
  ariaLabel?: string;
}

export default function SettingsSwitch({
  currentValue,
  options,
  onChange,
  label,
  ariaLabel,
  mainIcon,
}: SettingsSwitchProps) {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    onChange(event.target.value as string);
  };

  return (
    <FormControl fullWidth variant="standard">
      {label && <InputLabel id={`${label}-label`} title={label}></InputLabel>}

      <Select
        labelId={`${label}-label`}
        value={currentValue}
        onChange={handleChange}
        input={<CustomizedInputBase />}
        aria-label={ariaLabel || label}
        renderValue={() => (
          <Typography
            sx={{
              textAlign: "center",
              padding: 0,
              color: contrastBlack(theme.palette.background.paper)
                ? "#000"
                : "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {mainIcon}
            {options.find((opt) => opt.value === currentValue)?.icon}
            {options.find((opt) => opt.value === currentValue)?.label}
          </Typography>
        )}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{
              color: contrastBlack(theme.palette.background.paper)
                ? "#000"
                : "#fff",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            {option.icon}
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
