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
      concertHistory: Info;
      moveTopia: Info & { playStore: string; appStore: string };
      sensoration: Info;
      skills: Info;
      learnMore: string;
    };
    devlight: {
      title: string;
      subtitle: string;
      ledstrip: {
        color: string;
        validity: string;
        restart: string;
      };
      summary: string;
      evolution: {
        title: string;
        description: string;
      };
      openSourceNotice: string;
      github: string;
      projectTimelineTitle: string;
      projectTimeline: string[];
      last: string;
    };
    teckboard: {
      title: string;
      content: string;
      projectDescription: Info;
      evolution: string;
      mobileEvolution: string;
      imageInfo: string[];
      appDescription: string[];
      reactNative: {
        start: string;
        end: string;
      };
    };
  };
  footer: {
    contact: string;
    others: string;
    projects: string;
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

export type Info = {
  title: string;
  description: string;
};
