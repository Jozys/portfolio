import { Code, School, WorkOutlined } from "@mui/icons-material";
import { Milestone } from "./types/Milestone";
import { Language } from "../language";
import { getNestedValue } from "../utils/utils";

export const milestones: Record<string, Milestone> = {
  work_sap: {
    period: {
      start: 2025,
      end: 9999,
    },
    badge: "milestones.work_sap.badge",
    description: "milestones.work_sap.description",
    title: "milestones.work_sap.title",
    icon: <WorkOutlined fontSize="small" />,
    location: "milestones.work_sap.location",
  },
  study: {
    period: {
      start: 2022,
      end: 2025,
    },
    badge: "milestones.study.badge",
    description: "milestones.study.description",
    icon: <School fontSize="small" />,
    location: "milestones.study.location",
    title: "milestones.study.title",
  },
  school_company: {
    period: {
      start: 2019,
      end: 2022,
    },
    badge: "milestones.school.company.badge",
    description: "milestones.school.company.description",
    icon: <Code fontSize="small" />,
    location: "milestones.school.company.location",
    title: "milestones.school.company.title",
  },
  school: {
    period: {
      start: 2014,
      end: 2022,
    },
    badge: "milestones.school.abitur.badge",
    description: "milestones.school.abitur.description",
    icon: <School fontSize="small" />,
    location: "milestones.school.abitur.location",
    title: "milestones.school.abitur.title",
  },
};

export const getMilestones = (): Milestone[] => {
  return Object.values(milestones).sort(
    (a, b) => b.period.start - a.period.start,
  );
};

export const getMilestoneTitle = (
  milestone: Milestone,
  language: Language,
): string => {
  if (milestone.title) {
    return getNestedValue(language, milestone.title) || milestone.title;
  }
  return milestone.title;
};

export const getMilestoneDescription = (
  milestone: Milestone,
  language: Language,
): string => {
  if (milestone.description) {
    return (
      getNestedValue(language, milestone.description) || milestone.description
    );
  }
  return milestone.description;
};

export const getMilestoneLocation = (
  milestone: Milestone,
  language: Language,
): string => {
  if (milestone.location) {
    return getNestedValue(language, milestone.location) || milestone.location;
  }
  return milestone.location;
};

export const getMilestoneBadge = (
  milestone: Milestone,
  language: Language,
): string => {
  if (milestone.badge) {
    return getNestedValue(language, milestone.badge) || milestone.badge;
  }
  return milestone.badge;
};
