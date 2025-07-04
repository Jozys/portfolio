import SettingsSwitch from "../../../modules/core/components/SettingsSwitch";
import { useLanguage } from "../../hooks";
import { Language } from "../../hooks/LanguageProvider";
import TranslateIcon from "@mui/icons-material/Translate";

export default function LanguageSwitch() {
  const { languages, language, languageType, changeLanguage } = useLanguage();

  const languageOptions = languages.map((lang: Language) => ({
    value: lang,
    //@ts-ignore
    label: language.languageInfo[lang] || lang,
  }));

  return (
    <SettingsSwitch
      currentValue={languageType}
      options={languageOptions}
      onChange={(value) => changeLanguage(value as Language)}
      label="Language"
      mainIcon={<TranslateIcon fontSize="small" />}
      ariaLabel="Select language"
    />
  );
}
