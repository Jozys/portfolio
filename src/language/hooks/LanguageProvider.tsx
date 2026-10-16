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
  changeLanguage: (_: Language) => void;
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
    if (typeof window === "undefined") return "en";
    const language = window.navigator?.language?.split("-")[0] as Language;
    if (languages.includes(language)) {
      return language;
    }

    return "en"; // default to English if no match found
  };

  const getLanguage = (type: Language): LanguageObjType => {
    switch (type) {
      case "de":
        return de;
      case "en":
        return en;
      default:
        return en;
    }
  };

  const [languageType, setLanguageType] = React.useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("language") as Language;
      if (saved && languages.includes(saved)) {
        return saved;
      }
    }
    return getUserDefaultLanguage();
  });

  const language = React.useMemo(
    () => getLanguage(languageType),
    [languageType],
  );

  React.useEffect(() => {
    document.documentElement.lang = languageType;
  }, [languageType]);

  const changeLanguage = React.useCallback((newLanguageType: Language) => {
    localStorage.setItem("language", newLanguageType);
    setLanguageType(newLanguageType);
  }, []);

  const contextValue = React.useMemo(
    () => ({ changeLanguage, language, languageType, languages }),
    [changeLanguage, language, languageType],
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
