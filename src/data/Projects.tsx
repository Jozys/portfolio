import { Article } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ConcertHistory from "../assets/projects/concertHistory/ConcertHistory_Mockup.png";
import DBDelay from "../assets/projects/dbDelay/DB_Delay_Mockup.png";
import DevLightsApp from "../assets/projects/devlights/devlights.png";
import DevLights from "../assets/projects/devlights/devlights.svg";
import MoveTopiaApp from "../assets/projects/moveTopia/MoveTopia_Mockup.png";
import SensorationLogo from "../assets/projects/sensoration/Sensoration_Logo.png";
import Sensoration from "../assets/projects/sensoration/Sensoration_Mockup.png";
import SimpleQ from "../assets/projects/simpleQ/SimpleQ_Mockup.png";
import TECKboard from "../assets/projects/teckboard/Logo_TB.svg";
import TECKboardApp from "../assets/projects/teckboard/teckboard_app.png";
import AppleAppStore from "../assets/technologies/AppleAppStore.png";
import GooglePlayIcon from "../assets/technologies/GooglePlay.png";
import { Language } from "../language";
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
    years: "2019 - 2022",
    image: TECKboardApp,
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
    description: "projects.main.devlight.description",
    years: "2020 - 2021",
    image: DevLightsApp,
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
        label: "Documentation",
        icon: <img height={"24px"} src={DevLights} alt="DevLights Icon" />,
      },
    },
  },
  simpleQ: {
    name: "projects.main.simpleQ.title",
    description: "projects.main.simpleQ.description",
    years: "2023",
    image: SimpleQ,
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
        icon: (
          <img
            height="24px"
            src="https://simpleq.joshua.slaar.de/favicon.ico"
            alt="SimpleQ Demo"
          />
        ),
      },
      documentation: {
        url: "https://github.com/SE-TINF22B2/SimpleQ/wiki",
        label: "Documentation",
      },
    },
  },
  dbDelay: {
    name: "projects.main.dbDelay.title",
    description: "projects.main.dbDelay.description",
    years: "2024 - Now",
    image: DBDelay,
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
    name: "projects.main.concertHistory.title",
    description: "projects.main.concertHistory.description",
    image: ConcertHistory,
    years: "2024",
    technologies: [getTechnology("jetpackCompose"), getTechnology("kotlin")!],
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
    name: "projects.main.moveTopia.title",
    description: "projects.main.moveTopia.description",
    years: "2024 - 2025",
    image: MoveTopiaApp,
    technologies: [getTechnology("flutter"), getTechnology("dart")!],
    links: {
      github: {
        url: "https://github.com/ScreepCode/MoveTopia",
        label: "GitHub",
        icon: <GitHubIcon />,
      },
      playStore: {
        url: "https://play.google.com/store/apps/details?id=de.buseslaar.movetopia",
        label: "",
        icon: (
          <img height={"24px"} src={GooglePlayIcon} alt="GooglePlay Icon" />
        ),
      },
      appStore: {
        url: "https://testflight.apple.com/join/1MYANqEt",
        label: "",
        icon: <img height={"24px"} src={AppleAppStore} alt="App Store Icon" />,
      },
      documentation: {
        url: "https://niklas-buse.de/project/movetopia",
        label: "Documentation",
        icon: <Article />,
      },
    },
  },
  sensoration: {
    name: "projects.main.sensoration.title",
    description: "projects.main.sensoration.description",
    image: Sensoration,
    years: "2025",
    technologies: [getTechnology("kotlin")!, getTechnology("jetpackCompose")!],
    links: {
      github: {
        url: "https://github.com/Jozys/Sensoration",
        label: "GitHub",
        icon: <GitHubIcon />,
      },
      documentation: {
        url: "https://github.com/Jozys/Sensoration/wiki",
        label: "Documentation",
        icon: SensorationLogo,
      },
    },
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
  language: Language
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
  language: Language
): string => {
  if (project.name) {
    return getNestedValue(language, project.name) || project.name;
  }
  return project.name;
};

/**
 * Returns an array of all projects defined in the projects object.
 * @returns An array of all projects.
 */
export const getAllProjects = (): Project[] => {
  return Object.values(projects);
};
