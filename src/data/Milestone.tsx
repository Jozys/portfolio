import { Code, School, WorkOutlined } from "@mui/icons-material";
import { Milestone } from "./types/Milestone";

export const milestones: Record<string, Milestone> = {
  work_sap: {
    period: {
      start: 2025,
      end: 9999,
    },
    badge: "milestones.work.sap.badge",
    description: "milestones.work.sap.description",
    title: "milestones.work.sap.title",
    icon: <WorkOutlined fontSize="small" />,
    location: "milestones.work.sap.location",
  },
  study: {
    period: {
      start: 2022,
      end: 2025,
    },
    badge: "Bachelor of Science",
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
