import { StatusInformationLocale } from "../data/types/StatusInformation";

export type HeaderLocale = {
  themeToggleLight: string;
  themeToggleDark: string;
  languageToggle: string;
  openMenu: string;
  closeMenu: string;
  nav: {
    home: string;
    projects: string;
    about: string;
  };
  tabs: {
    home: string;
    projects: string;
    me: string;
  };
};

export type FooterLocale = {
  subtitle: string;
  socialTitle: string;
};

export type HomeActionLocale = {
  explore: string;
  contact: string;
};

export type HomePortraitLocale = {
  statusTitle: string;
  statusDescription: string;
};

export type HomeHistoryLocale = {
  subtitle: string;
  title: string;
  description: string;
  dhbwTags: string[];
  teckdigitalTags: string[];
  lifeTags: string[];
};

export type HomeStatusLocale = {
  title: string;
  description: string;
};

export type HomeLocale = {
  greeting: string;
  name: string;
  subtitle: string;
  me: Info;
  life: Info;
  teckdigital: {
    title: string;
    description: {
      start: string;
      middle: string;
      end: string;
    };
  };
  dhbw: Info;
  action: HomeActionLocale;
  portrait: HomePortraitLocale;
  history: HomeHistoryLocale;
  status: HomeStatusLocale;
};

export type QuickFactLocale = {
  title: string;
  description: string;
  label: string;
};

export type ProjectFeatureLocale = {
  title: string;
  description: string;
};

export type ProjectStatLocale = {
  label: string;
  value: string;
};

export type ProjectDetailLocale = {
  category?: string;
  role?: string;
  statusText?: string;
  features?: ProjectFeatureLocale[];
  challenges?: string;
  learnings?: string;
  stats?: ProjectStatLocale[];
};

export type ProjectsLocale = {
  main: {
    title: string;
    description: string;
    documentation: string;
    filter: {
      all: string;
    };
    readMore: string;
    teckboard: Info;
    devlight: Info & { readDoc: string };
    simpleQ: Info;
    dbDelay: Info;
    concertHistory: Info & { betaTest: string };
    moveTopia: Info & { playStore: string; appStore: string };
    sensoration: Info;
    learnMore: string;
  };
  projectData: string;
  projectDescription: string;
  timeline: string;
  links: string;
  gallerySection: string;
  galleryTitle: string;
  category: string;
  technologies: {
    title: string;
    frontend: string;
    backend: string;
    mobile: string;
    database: string;
    hardware: string;
    devops: string;
    other: string;
  };
  details?: {
    [key: string]: ProjectDetailLocale;
  };
};

export type AboutLocale = {
  me: Info;
  skills: {
    title: string;
    subtitle: string;
    description: string;
  };
  quickFacts: {
    heading: string;
    education: QuickFactLocale;
    work: QuickFactLocale;
    location: QuickFactLocale;
    interests: QuickFactLocale;
  };
};

export type MilestonesLocale = {
  work_sap: Milestone;
  study: Milestone;
  school: {
    company: Milestone;
    abitur: Milestone;
  };
};

export type Milestone = {
  title: string;
  description: string;
  location: string;
  badge?: string;
};

export type Info = {
  title: string;
  shortDescription?: string;
  description: string;
};

export type Language = {
  languageInfo: {
    de: string;
    en: string;
  };
  header: HeaderLocale;
  footer: FooterLocale;
  home: HomeLocale;
  status: {
    currentWork: StatusInformationLocale;
    currentFocus: StatusInformationLocale;
    location: StatusInformationLocale;
  };
  projects: ProjectsLocale;
  milestones: MilestonesLocale;
  about: AboutLocale;
  notFound: {
    title: string;
  };
  ui5: {
    backToPortfolio: string;
    tagline: string;
  };
};

// Aliases for seamless migration
export type V4ProjectDetail = ProjectDetailLocale;
export type V4QuickFact = QuickFactLocale;
export type V4Projects = ProjectsLocale;
