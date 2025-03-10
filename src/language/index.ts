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
  projects: {
    main: {
      title: string;
      teckboard: {
        title: string;
        description: {
          start: string;
          name1: string;
          middle: string;
          name2: string;
          end: string;
        };
      };
      devlight: Info & { readDoc: string };
      simpleQ: Info;
      dbDelay: Info;
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
};

export type Info = {
  title: string;
  description: string;
};
