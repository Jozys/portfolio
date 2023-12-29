import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
  InputBase
} from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
import { useLanguage } from "../LanguageProvider";
import { Language } from "../LanguageProvider/LanguageProvider";

const CustomizedInputBase = styled(InputBase)(() => ({
  '& .MuiInputBase-input': {
    border: "none",
    '&:focus': {
      border: "none"
    },
  },

}));

export default function LanguageSwitch() {
  const theme = useTheme();
  const { languages, language, languageType, changeLanguage } = useLanguage();

  return (
    <FormControl sx={{ m: 1, minWidth:  80}} size="small">
      <InputLabel id="languageLabel" title="Language"></InputLabel>
      <Select
        labelId="languageLabel"
        value={languageType as Language}
        //@ts-ignore
        renderValue={() => <p style={{textAlign: "center"}}>{language.languageInfo[languageType]}</p>}
        onChange={(e) => changeLanguage(e.target.value as string as Language)}
        input={<CustomizedInputBase />}
      >
        {languages.map((l) => (
          <MenuItem value={l}>
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
