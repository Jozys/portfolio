import CPP from "../assets/technologies/cpp.ico";
import CSS from "../assets/technologies/CSS.png";
import Dart from "../assets/technologies/Dart_Logo.svg";
import Docker from "../assets/technologies/docker.ico";
import Flutter from "../assets/technologies/flutter.svg";
import Java from "../assets/technologies/java.ico";
import JavaScript from "../assets/technologies/javascript.svg";
import Jenkins from "../assets/technologies/jenkins.ico";
import JetpackCompose from "../assets/technologies/jetpack-compose.png";
import Kotlin from "../assets/technologies/Kotlin_Logo.svg";
import MongoDB from "../assets/technologies/mongodb.ico";
import MUI from "../assets/technologies/mui.ico";
import MySQL from "../assets/technologies/MySQL.png";
import NestJS from "../assets/technologies/nestjs.svg";
import NodeJS from "../assets/technologies/nodejs.png";
import PHP from "../assets/technologies/php.ico";
import React from "../assets/technologies/react.ico";
import ReactNative from "../assets/technologies/reactNative.ico";
import TypeScript from "../assets/technologies/typescript.ico";
import Vite from "../assets/technologies/vite.svg";
import { Technology } from "../types/Project";
import { TechnologyType } from "./types/Project";

const technologies: Record<string, Technology> = {
  react: {
    name: "React",
    icon: React,
    link: "https://reactjs.org/",
    color: "#61DAFB",
    type: TechnologyType.Frontend,
  },
  typescript: {
    name: "TypeScript",
    icon: TypeScript,
    link: "https://www.typescriptlang.org/",
    color: "#3178C6",
    type: TechnologyType.Backend,
  },
  javaScript: {
    name: "JavaScript",
    icon: JavaScript,
    link: "https://developer.mozilla.org/de/docs/Web/JavaScript",
    color: "#F7DF1E",
    type: TechnologyType.Frontend,
  },
  html: {
    name: "HTML",
    icon: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
    link: "https://developer.mozilla.org/de/docs/Web/HTML",
    color: "#E34F26",
    type: TechnologyType.Frontend,
  },
  css: {
    name: "CSS",
    icon: CSS,
    link: "https://developer.mozilla.org/de/docs/Web/CSS",
    color: "#1572B6",
    type: TechnologyType.Frontend,
  },
  mui: {
    name: "Material UI",
    icon: MUI,
    link: "https://mui.com/",
    color: "#0081CB",
    type: TechnologyType.Frontend,
  },
  vite: {
    name: "Vite",
    icon: Vite,
    link: "https://vitejs.dev/",
    color: "#646CFF",
    type: TechnologyType.Frontend,
  },
  java: {
    name: "Java",
    icon: Java,
    link: "https://www.java.com/",
    color: "#007396",
    type: TechnologyType.Backend,
  },
  nodejs: {
    name: "Node.js",
    icon: NodeJS,
    link: "https://nodejs.org/",
    color: "#339933",
    type: TechnologyType.Backend,
  },
  jetpackCompose: {
    name: "Jetpack Compose",
    icon: JetpackCompose,
    link: "https://developer.android.com/jetpack/compose",
    color: "#03DAC5",
    type: TechnologyType.Mobile,
  },
  reactNative: {
    name: "React Native",
    icon: ReactNative,
    link: "https://reactnative.dev/",
    color: "#61DAFB",
    type: TechnologyType.Mobile,
  },
  flutter: {
    name: "Flutter",
    icon: Flutter,
    link: "https://flutter.dev/",
    color: "#02569B",
    type: TechnologyType.Mobile,
  },
  nestJS: {
    name: "NestJS",
    icon: NestJS,
    link: "https://nestjs.com/",
    color: "#E0234E",
    type: TechnologyType.Backend,
  },
  php: {
    name: "PHP",
    icon: PHP,
    link: "https://www.php.net/",
    color: "#777BB4",
    type: TechnologyType.Backend,
  },
  cpp: {
    name: "C++",
    icon: CPP,
    link: "https://isocpp.org/",
    color: "#00599C",
    type: TechnologyType.Hardware,
  },
  dart: {
    name: "Dart",
    icon: Dart,
    link: "https://dart.dev/",
    color: "#00B4AB",
    type: TechnologyType.Mobile,
  },
  kotlin: {
    name: "Kotlin",
    icon: Kotlin,
    link: "https://kotlinlang.org/",
    color: "#7F52FF",
    type: TechnologyType.Mobile,
  },
  mongoDB: {
    name: "MongoDB",
    icon: MongoDB,
    link: "https://www.mongodb.com/",
    color: "#47A248",
    type: TechnologyType.Database,
  },
  mySQL: {
    name: "MySQL",
    icon: MySQL,
    link: "https://www.mysql.com/",
    color: "#4479A1",
    type: TechnologyType.Database,
  },
  docker: {
    name: "Docker",
    icon: Docker,
    link: "https://www.docker.com/",
    color: "#2496ED",
    type: TechnologyType.DevOps,
  },
  jenkins: {
    name: "Jenkins",
    icon:Jenkins,
    link: "https://www.jenkins.io/",
    color: "#D24939",
    type: TechnologyType.DevOps,
  },
};

export const getTechnology = (name: string): Technology | undefined => {
  return technologies[name];
};

export const getTechnologies = (): Technology[] => {
  return Object.values(technologies);
};

export const getTechnologiesByType = (type: TechnologyType): Technology[] => {
  const typeString = type.toLowerCase();
  return Object.values(technologies).filter(
    (tech: Technology) => tech.type?.toLowerCase() === typeString
  );
};
