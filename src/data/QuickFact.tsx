import {
  Interests,
  LocationOn,
  School,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { QuickFact } from "./types/QuickFact";
import { Language } from "../language";
import { getNestedValue } from "../utils/utils";

const quickFacts: Record<string, QuickFact> = {
  education: {
    icon: <School fontSize="small" />,
    title: "about.quickFacts.education.title",
    description: "about.quickFacts.education.description",
    label: "about.quickFacts.education.label",
  },
  work: {
    icon: <WorkOutlineOutlined fontSize="small" />,
    title: "about.quickFacts.work.title",
    description: "about.quickFacts.work.description",
    label: "about.quickFacts.work.label",
  },
  location: {
    icon: <LocationOn fontSize="small" />,
    title: "about.quickFacts.location.title",
    description: "about.quickFacts.location.description",
    label: "about.quickFacts.location.label",
  },
  interests: {
    icon: <Interests fontSize="small" />,
    title: "about.quickFacts.interests.title",
    description: "about.quickFacts.interests.description",
    label: "about.quickFacts.interests.label",
  },
};

export function getAllQuickFacts(): QuickFact[] {
  return Object.values(quickFacts);
}

export function getQuickFactByKey(key: string): QuickFact | undefined {
  return quickFacts[key];
}

export function getQuickFactLabel(
  quickFact: QuickFact,
  language: Language,
): string {
  if (quickFact.label) {
    return getNestedValue(language, quickFact.label) || quickFact.label;
  }
  return quickFact.label;
}

export function getQuickFactTitle(
  quickFact: QuickFact,
  language: Language,
): string {
  if (quickFact.title) {
    return getNestedValue(language, quickFact.title) || quickFact.title;
  }
  return quickFact.title;
}

export function getQuickFactDescription(
  quickFact: QuickFact,
  language: Language,
): string {
  if (quickFact.description) {
    return (
      getNestedValue(language, quickFact.description) || quickFact.description
    );
  }
  return quickFact.description;
}
