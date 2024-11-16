import React from "react";
import { Language as LanguageObjType } from "../../language";
import de from "../locales/de";
import en from "../locales/en";
export interface LanguageProviderProps {
  children: React.ReactNode | React.ReactNode[];
}

export const languages = ["de", "en"];
export type Language = (typeof languages)[number];

export type LanguageContextType = {
  languageType: Language;
  language: LanguageObjType;
  changeLanguage: (language: Language) => void;
  languages: typeof languages;
};

export const LanguageContext = React.createContext<LanguageContextType>({
  languageType: "en",
  language: en,
  changeLanguage: () => null,
  languages: [],
});

export default function LanguageProvider(props: LanguageProviderProps) {
  const { children } = props;

  // default/fallback language
  const getUserDefaultLanguage = (): Language => {
    return window.navigator.language.split("-")[0] as Language;
  };

  const [languageType, setLanguageType] = React.useState<Language>(
    getUserDefaultLanguage()
  );
  const [language, setLanguage] = React.useState<LanguageObjType>(en);

  const getLanguage = (languageType: Language) => {
    switch (languageType) {
      case "de":
        return de;
      case "en":
        return en;
      default:
        return en;
    }
  };

  React.useEffect(() => {
    let language = localStorage.getItem("language");
    if (!language?.length) {
      let defaultLanguage = (getUserDefaultLanguage() as Language) ?? "en";
      localStorage.setItem(
        "language",
        (getUserDefaultLanguage() as Language) ?? "en"
      );
      setLanguageType(defaultLanguage);
      setLanguage(getLanguage(defaultLanguage));
    } else {
      setLanguage(getLanguage(language as Language));
      setLanguageType(language as Language);
    }
  }, []);

  const changeLanguage = (newLanguageType: Language, mount = false) => {
    localStorage.setItem("language", newLanguageType);
    setLanguageType(newLanguageType);

    setLanguage(getLanguage(newLanguageType));
    // reload typing animation to new language
    // TODO find a better way for that
    if (document.URL.endsWith("home") && !mount) {
      window.location.reload();
    }
  };
  return (
    <LanguageContext.Provider
      value={{ changeLanguage, language, languageType, languages }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
