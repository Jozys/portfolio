export interface StatusInformationLocale {
  name: string;
  description: string;
}

export interface StatusInformation extends StatusInformationLocale {
  icon: React.ReactNode;
}
