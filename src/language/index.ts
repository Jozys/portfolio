import { StatusInformationLocale } from "../data/types/StatusInformation";

export type Language = {
  languageInfo: {
    de: string;
    en: string;
  };
  home: {
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
  };
  status: {
    currentWork: StatusInformationLocale;
    currentFocus: StatusInformationLocale;
    location: StatusInformationLocale;
  };
  projects: {
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
  };
  milestones: {
    work_sap: Milestone;
    study: Milestone;
    school: {
      company: Milestone;
      abitur: Milestone;
    };
  };
  about: {
    me: Info;
    skills: {
      title: string;
      subtitle: string;
      description: string;
    };
    quickFacts: {
      heading: string;
      education: V4QuickFact;
      work: V4QuickFact;
      location: V4QuickFact;
      interests: V4QuickFact;
    };
  };
  notFound: {
    title: string;
  };
  ui5: {
    backToPortfolio: string;
    tagline: string;
  };
  v4: V4Language;
};

export type V4QuickFact = {
  title: string;
  description: string;
  label: string;
};

export type V4ProjectFeature = {
  title: string;
  description: string;
};

export type V4ProjectStat = {
  label: string;
  value: string;
};

export type V4ProjectDetail = {
  category?: string;
  role?: string;
  statusText?: string;
  features?: V4ProjectFeature[];
  challenges?: string;
  learnings?: string;
  stats?: V4ProjectStat[];
};

export type V4Projects = {
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
    [key: string]: V4ProjectDetail;
  };
};

export type V4Language = {
  header: {
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
  home: {
    action: {
      explore: string;
      contact: string;
    };
    portrait: {
      statusTitle: string;
      statusDescription: string;
    };
    history: {
      subtitle: string;
      title: string;
      description: string;
      dhbwTags: string[];
      teckdigitalTags: string[];
      lifeTags: string[];
    };
    status: {
      title: string;
      description: string;
    };
  };
  footer: {
    subtitle: string;
    socialTitle: string;
  };
  projects: V4Projects;
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
