import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  InputBase,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Language } from "../../hooks/LanguageProvider";
import { useLanguage } from "../../hooks";

const CustomizedInputBase = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    border: "none",
    "&:focus": {
      border: "none",
    },
  },
}));

export default function LanguageSwitch() {
  const { languages, language, languageType, changeLanguage } = useLanguage();

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }} size="small">
      <InputLabel id="languageLabel" title="Language"></InputLabel>
      <Select
        labelId="languageLabel"
        value={languageType as Language}
        //@ts-ignore
        renderValue={() => (
          <div>
            <p style={{ textAlign: "center" }}>
              {
                //@ts-ignore
                language.languageInfo[languageType]
              }
            </p>
          </div>
        )}
        onChange={(e) => changeLanguage(e.target.value as string as Language)}
        input={<CustomizedInputBase />}
      >
        {languages.map((l: Language) => (
          <MenuItem key={l} value={l}>
            {
              //@ts-ignore
              language.languageInfo[l]
            }
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
