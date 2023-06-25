import { InputLabel, MenuItem, Select, useTheme } from "@material-ui/core";
import React from "react";
import { useLanguage } from "../LanguageProvider";
import { Language } from "../LanguageProvider/LanguageProvider";

export default function LanguageChoose() {
  const theme = useTheme();
  const { languages, language, languageType, changeLanguage } = useLanguage();

  React.useEffect(() => {
    console.log(languageType);
  }, [languageType]);

  return (
    <div
      style={{
        alignSelf: "center",
        marginLeft: theme.spacing(4),
        marginRight: theme.spacing(4),
      }}
    >
      <InputLabel id="languageLabel" title="Language"></InputLabel>
      <Select
        variant="outlined"
        labelId="languageLabel"
        value={languageType as Language}
        onChange={(e) => changeLanguage(e.target.value as string as Language)}
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
    </div>
  );
}
