import { Article } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ConcertHistoryLogo from "../assets/projects/concertHistory/ConcertHistory.svg";
import ConcertHistoryApp from "../assets/projects/concertHistory/ConcertHistory_Mockup.png";
import DB_Delays_Light from "../assets/projects/dbDelay/db_delays_light.webp";
import DB_Journey_Light from "../assets/projects/dbDelay/db_journeys_light.webp";
import DB_Record_Light from "../assets/projects/dbDelay/db_record_light.webp";
import DB_Statistics_Light from "../assets/projects/dbDelay/db_statistics_light.webp";
import DBDelay from "../assets/projects/dbDelay/dbDelay.ico";
import DevLightsApp from "../assets/projects/devlights/devlights.png";
import DevLights from "../assets/projects/devlights/devlights.svg";
import MoveTopiaApp from "../assets/projects/moveTopia/MoveTopia_Mockup.png";
import MoveTopia from "../assets/projects/moveTopia/MT_ICON.png";
import SensorationLogo from "../assets/projects/sensoration/Sensoration_Logo.png";
import SensorationApp from "../assets/projects/sensoration/Sensoration_Mockup.png";
import SimpleQLogo from "../assets/projects/simpleQ/simpleQ.ico";
import SimpleQWebsite from "../assets/projects/simpleQ/SimpleQ_Mockup.png";
import FirstTECKboard from "../assets/projects/teckboard/firstTECKboard.png";
import TECKboard from "../assets/projects/teckboard/Logo_TB.svg";
import SecondTECKboard from "../assets/projects/teckboard/newBoard.png";
import TECKboardApp from "../assets/projects/teckboard/teckboard_app.png";
import AppleAppStore from "../assets/technologies/AppleAppStore.png";
import GooglePlayIcon from "../assets/technologies/GooglePlay.png";
import { Language, V4ProjectDetail } from "../language";
import { getNestedValue } from "../utils/utils";
import { getTechnology } from "./Technologies";
import { Project } from "./types/Project";

/**
 * Represents all projects with their details.
 * An Example representation of a project:
 * ```typescript
 *  { 
    *  example: {
        name: "Example Project", // This should be a translation key, e.g., "projects.main.example.title"
        description: "This is an example project description.", // This should be a translation key, e.g., "projects.main.example.description"
        image: <img src="https://example.com/image.png" alt="Example Project" />,
        technologies: [
          getTechnology("<technology>")!,
          getTechnology("typescript")!,
          getTechnology("mui")!,
        ],
        links: {
          github: {
            url: "",
          },
        },
  },
}
 * ```
 */
export const projects: Record<string, Project> = {
  teckboard: {
    name: "projects.main.teckboard.title",
    description: "projects.main.teckboard.description",
    route: "teckboard",
    years: { start: 2019, end: 2022 },
    image: TECKboard,
    detailImages: [
      TECKboardApp,
      <img key="first" src={FirstTECKboard} alt="First TECKboard" />,
      <img key="second" src={SecondTECKboard} alt="Second TECKboard" />,
    ],
    technologies: [
      getTechnology("react")!,
      getTechnology("javaScript")!,
      getTechnology("typescript")!,
      getTechnology("php")!,
      getTechnology("reactNative")!,
    ],
    links: {
      demo: {
        url: "https://teckboard.teckdigital.de",
        label: "Demo",
        icon: <img src={TECKboard} height="24px" />,
      },
    },
  },
  devlight: {
    name: "projects.main.devlight.title",
    route: "devlight",
    description: "projects.main.devlight.description",
    years: { start: 2020, end: 2021 },
    image: DevLights,
    detailImages: [DevLightsApp],
    technologies: [
      getTechnology("cpp")!,
      getTechnology("typescript")!,
      getTechnology("nestJS")!,
      getTechnology("mongoDB")!,
    ],
    links: {
      github: {
        url: "https://github.com/ProjektDevLights/",
        label: "GitHub",
        icon: <GitHubIcon />,
      },
      documentation: {
        url: `/devlights.pdf`,
        label: "projects.main.devlight.readDoc",
        icon: <img height={"24px"} src={DevLights} alt="DevLights Icon" />,
      },
    },
  },
  simpleQ: {
    route: "simpleq",
    name: "projects.main.simpleQ.title",
    description: "projects.main.simpleQ.description",
    years: { start: 2023 },
    image: SimpleQLogo,
    detailImages: [SimpleQWebsite],
    technologies: [
      getTechnology("react")!,
      getTechnology("typescript")!,
      getTechnology("vite")!,
      getTechnology("nestJS")!,
      getTechnology("mySQL")!,
    ],
    links: {
      github: {
        url: "https://github.com/Jozys/SimpleQ",
        label: "GitHub",
        icon: <GitHubIcon />,
      },
      demo: {
        url: "https://simpleq.joshua.slaar.de",
        label: "Demo",
        icon: <img height="24px" src={SimpleQLogo} alt="SimpleQ Demo" />,
      },
      documentation: {
        url: "https://github.com/SE-TINF22B2/SimpleQ/wiki",
        label: "projects.main.documentation",
      },
    },
  },
  dbDelay: {
    route: "dbdelay",
    name: "projects.main.dbDelay.title",
    description: "projects.main.dbDelay.description",
    years: { start: 2024, end: 2026 },
    image: DBDelay,
    detailImages: [
      <img key="light" src={DB_Delays_Light} alt="DB Delays" />,
      <img key="journey" src={DB_Journey_Light} alt="DB Journey" />,
      <img key="record" src={DB_Record_Light} alt="DB Record" />,
      <img key="statistics" src={DB_Statistics_Light} alt="DB Statistics" />,
    ],
    technologies: [
      getTechnology("react")!,
      getTechnology("typescript")!,
      getTechnology("mui")!,
      getTechnology("nestJS")!,
      getTechnology("mySQL")!,
      getTechnology("docker")!,
    ],
    links: {
      demo: {
        url: "https://bahn.joshua.slaar.de",
        label: "Demo",
        icon: (
          <img
            src="https://bahn.joshua.slaar.de/favicon.ico"
            alt="DB Delay Demo"
            height={"24px"}
          />
        ),
      },
    },
  },
  concertHistory: {
    route: "concerthistory",
    name: "projects.main.concertHistory.title",
    description: "projects.main.concertHistory.description",
    detailImages: [ConcertHistoryApp],
    image: ConcertHistoryLogo,
    years: { start: 2024 },
    technologies: [getTechnology("jetpackCompose")!, getTechnology("kotlin")!],
    links: {
      github: {
        url: "https://github.com/ScreepCode/ConcertHistory",
        label: "GitHub",
        icon: <GitHubIcon />,
      },
      playStore: {
        url: "https://groups.google.com/g/concert-history-beta",
        label: "",
        icon: (
          <img height={"24px"} src={GooglePlayIcon} alt="GooglePlay Icon" />
        ),
      },
    },
  },
  moveTopia: {
    route: "movetopia",
    name: "projects.main.moveTopia.title",
    description: "projects.main.moveTopia.description",
    years: { start: 2024, end: 2025 },
    image: MoveTopia,
    detailImages: [MoveTopiaApp],
    technologies: [getTechnology("flutter")!, getTechnology("dart")!],
    links: {
      github: {
        url: "https://github.com/ScreepCode/MoveTopia",
        label: "GitHub",
        icon: <GitHubIcon />,
      },
      playStore: {
        url: "https://play.google.com/store/apps/details?id=de.buseslaar.movetopia",
        label: "projects.main.moveTopia.playStore",
        icon: (
          <img height={"24px"} src={GooglePlayIcon} alt="GooglePlay Icon" />
        ),
      },
      appStore: {
        url: "https://testflight.apple.com/join/1MYANqEt",
        label: "projects.main.moveTopia.appStore",
        icon: <img height={"24px"} src={AppleAppStore} alt="App Store Icon" />,
      },
      documentation: {
        url: "https://niklas-buse.de/project/movetopia",
        label: "projects.main.documentation",
        icon: <Article />,
      },
    },
  },
  sensoration: {
    route: "sensoration",
    name: "projects.main.sensoration.title",
    description: "projects.main.sensoration.description",
    image: SensorationLogo,
    detailImages: [SensorationApp],
    years: { start: 2025 },
    technologies: [getTechnology("kotlin")!, getTechnology("jetpackCompose")!],
    links: {
      github: {
        url: "https://github.com/Jozys/Sensoration",
        label: "GitHub",
        icon: <GitHubIcon />,
      },
      documentation: {
        url: "https://github.com/Jozys/Sensoration/wiki",
        label: "projects.main.documentation",
        icon: SensorationLogo,
      },
    },
  },
  shakeIT: {
    route: "shakeit",
    name: "projects.main.shakeIT.title",
    description: "projects.main.shakeIT.description",
    years: { start: 2026 },
    image: "ShakeIT",
    detailImages: ["ShakeITApp"],
    technologies: [getTechnology("react")!, getTechnology("java")!],
  },
};

/**
 * Get the project description based on the provided language object.
 * @param project - The project object containing the description.
 * @param language - The language object containing translations.
 * @return The project description as a string or React node.
 */
export const getProjectDescription = (
  project: Project,
  language: Language,
): string | React.ReactNode => {
  if (project.description) {
    return (
      getNestedValue(language, project.description.toString()) ||
      project.description
    );
  }
  return project.description;
};

/**
 * Get the project title based on the provided language object.
 * @param project - The project object containing the name.
 * @param language - The language object containing translations.
 * @returns The project title as a string. Either the translated title or the original name if no translation is found.
 */
export const getProjectTitle = (
  project: Project,
  language: Language,
): string => {
  if (project.name) {
    return getNestedValue(language, project.name) || project.name;
  }
  return project.name;
};

export const getLabel = (label: string, language: Language): string => {
  if (label) {
    return getNestedValue(language, label) || label;
  }
  return label;
};

export const getProjectById = (id: string): Project | undefined => {
  return projects[id];
};

/**
 * Returns the rich detail data for a project from the i18n v4 structure.
 */
export const getProjectDetails = (
  project: Project,
  language: Language,
): V4ProjectDetail | undefined => {
  const detailsMap = language.v4?.projects?.details;
  if (!detailsMap) return undefined;
  if (detailsMap[project.route]) return detailsMap[project.route];
  const lower = project.route.toLowerCase();
  for (const [key, value] of Object.entries(detailsMap)) {
    if (key.toLowerCase() === lower) return value;
  }
  return undefined;
};

/**
 * Formats a project's years range into a readable string (e.g., "2024 - Now", "2023").
 */
export const formatProjectYears = (
  years?: { start: number; end?: number },
  nowLabel: string = "Now",
): string => {
  if (!years) return "";
  if (!years.end || years.end === years.start) {
    return `${years.start}`;
  }
  if (years.end >= 9999) {
    return `${years.start} - ${nowLabel}`;
  }
  return `${years.start} - ${years.end}`;
};

/**
 * Sorts an array of projects from newest to oldest.
 * Primary: start year descending (newest start first)
 * Secondary: end year descending (most active/recent end first)
 */
export const sortProjects = (projectList: Project[]): Project[] => {
  return [...projectList].sort((a, b) => {
    const startA = a.years?.start ?? 0;
    const endA = a.years?.end ?? startA;

    const startB = b.years?.start ?? 0;
    const endB = b.years?.end ?? startB;

    if (startB !== startA) {
      return startB - startA;
    }
    return endB - endA;
  });
};

/**
 * Returns a sorted array of all projects defined in the projects object.
 * @returns An array of all projects sorted from newest to oldest.
 */
export const getAllProjects = (): Project[] => {
  return sortProjects(Object.values(projects));
};
