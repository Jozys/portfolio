import NestJS from "../assets/nestjs.svg";
import JavaScript from "../assets/javascript.svg";
import Flutter from "../assets/flutter.svg";
import JetpackCompose from "../assets/jetpack-compose.png";
import { Technology } from "../types/Project";

const technologies: Record<string, Technology> = {
  react: {
    name: "React",
    icon: "https://reactjs.org/favicon.ico",
    link: "https://reactjs.org/",
    color: "#61DAFB",
  },
  typescript: {
    name: "TypeScript",
    icon: "https://www.typescriptlang.org/favicon.ico",
    link: "https://www.typescriptlang.org/",
    color: "#3178C6",
  },
  javaScript: {
    name: "JavaScript",
    icon: JavaScript,
    link: "https://developer.mozilla.org/de/docs/Web/JavaScript",
    color: "#F7DF1E",
  },
  mui: {
    name: "Material UI",
    icon: "https://mui.com/favicon.ico",
    link: "https://mui.com/",
    color: "#0081CB",
  },
  vite: {
    name: "Vite",
    icon: "https://vitejs.dev/logo.svg",
    link: "https://vitejs.dev/",
    color: "#646CFF",
  },
  java: {
    name: "Java",
    icon: "https://www.java.com/favicon.ico",
    link: "https://www.java.com/",
    color: "#007396",
  },
  nodejs: {
    name: "Node.js",
    icon: "https://nodejs.org/favicon.ico",
    link: "https://nodejs.org/",
    color: "#339933",
  },
  jetpackCompose: {
    name: "Jetpack Compose",
    icon: JetpackCompose,
    link: "https://developer.android.com/jetpack/compose",
    color: "#03DAC5",
  },
  reactNative: {
    name: "React Native",
    icon: "https://reactnative.dev/img/favicon.ico",
    link: "https://reactnative.dev/",
    color: "#61DAFB",
  },
  flutter: {
    name: "Flutter",
    icon: Flutter,
    link: "https://flutter.dev/",
    color: "#02569B",
  },
  nestJS: {
    name: "NestJS",
    icon: NestJS,
    link: "https://nestjs.com/",
    color: "#E0234E",
  },
  php: {
    name: "PHP",
    icon: "https://www.php.net/favicon.ico",
    link: "https://www.php.net/",
    color: "#777BB4",
  },
  cpp: {
    name: "C++",
    icon: "https://isocpp.org/favicon.ico",
    link: "https://isocpp.org/",
    color: "#00599C",
  },
};

export const getTechnology = (name: string): Technology | undefined => {
  return technologies[name];
};

export const getTechnologies = (): Technology[] => {
  return Object.values(technologies);
};
