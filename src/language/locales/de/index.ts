import { getAge } from "../../utils/getAge";
import { Language } from "../../index";

export const language: Language = {
  header: {
    themeToggleLight: "Zum Light Mode wechseln",
    themeToggleDark: "Zum Dark Mode wechseln",
    languageToggle: "Switch to English",
    openMenu: "Navigation öffnen",
    closeMenu: "Navigation schließen",
    tabs: {
      home: "Home",
      projects: "Projekte",
      me: "Über mich",
    },
  },
  footer: {
    subtitle:
      "Software Engineer bei SAP in Walldorf • Fokus auf Full Stack & Künstliche Intelligenz.",
    socialTitle: "Social & Kontakt",
  },
  home: {
    greeting: "Hallo",
    name: "Ich bin Joshua!",
    subtitle: `Entwickler - ${getAge()} Jahre alt - Deutschland`,
    me: {
      title: "Wer bin ich",
      description: `Ich bin ein ${getAge()} Jahre alter Entwickler, der gerne Sport macht, entwickelt, und Bücher liest. Aktuell arbeite ich als Software Engineer bei der SAP in Walldorf mit Fokus auf Künstliche Intelligenz und Full Stack Entwicklung.`,
    },
    life: {
      title: "Mein Leben",
      description: `Ich mag es nach draußen zu gehen, um im Raum Karlsruhe, oder Richtung Schwarzwald durch die Region zu spazieren. Ebenfalls fahre ich gerne mit dem Rad durch die Regionen.
      Zudem treffe ich mich sehr gerne mit Freunden, um mit diesen Zeit zu verbringen. Weiter fahre ich auch gerne mit der Bahn durch Deutschland und Europa. Auch meine eigentliche Heimat Brochterbeck in Nordrhein-Westfalen besuche ich regelmäßig.`,
    },
    teckdigital: {
      title: "TECKdigital",
      description:
        "Seit Dezember 2019 bin ich Teil der Schülerfirma **[TECKdigital](https://teckdigital.de)**. Diese Schülerfirma wurde im Frühjahr 2019 gegründet, und ich trat einige Monate später bei. Bei TECKdigital arbeite ich an den **TECKboards**. Durch das Arbeiten dort lernte ich mehr über Informatik und das Arbeiten im Team.",
    },
    dhbw: {
      title: "Student@DHBW",
      description: `Von September 2022 bis Ende September 2025 war ich dualer Student der Informatik bei der SAP in Walldorf und an der Dualen Hochschule Baden-Württemberg in Karlsruhe.`,
    },
    action: {
      explore: "Arbeiten entdecken",
      contact: "Kontakt aufnehmen",
    },
    portrait: {
      statusTitle: "Software Engineer @ SAP",
      statusDescription: "Walldorf • Full Stack & AI",
    },
    history: {
      subtitle: "Werdegang & Stationen",
      title: "Erfahrung, Studium & Leben",
      dhbwTags: ["Duales Studium", "SAP", "DHBW"],
      teckdigitalTags: [
        "Mobile Apps",
        "Softwareentwicklung",
        "Webentwicklung",
      ],
      lifeTags: ["Outdoor", "Schwarzwald", "Reisen"],
    },
    status: {
      title: "Aktueller Status",
      description: "Standort, Tätigkeit und technische Schwerpunkte.",
    },
  },
  status: {
    currentWork: {
      name: "Aktuelle Arbeit",
      description: "SAP@Walldorf, Deutschland.",
    },
    currentFocus: {
      name: "Aktueller Fokus",
      description: "Künstliche Intelligenz und Full Stack Entwicklung.",
    },
    location: {
      name: "Standort",
      description: "Wiesloch, Deutschland.",
    },
  },
  projects: {
    main: {
      title: "Ich habe entwickelt...",
      filter: {
        all: "Alle Projekte",
      },
      documentation: "Dokumentation",
      teckboard: {
        title: "TECKboards",
        shortDescription:
          "TECKboard ist ein digitales Echtzeit-Informationssystem, das von zwei Freunden entwickelt wurde, und ich habe eine Smartphone-Anwendung dafür entwickelt.",
        description: `TECKboard ist ein digitales Echtzeit-Informationssystem, das zwei Freunde von mir, [Timo Peters](https://tipela.de) und [Yannik Hahn](https://h4hn.de), entwickelt haben. Ich selbst habe viel Zeit darauf verwendet, eine Smartphone-Anwendung für das bestehende System zu entwickeln. Durch das Prinzip 'Learning by Doing' habe ich viel über Planung, Entwicklung und die Zusammenarbeit mit anderen Entwicklern gelernt.`,
      },
      devlight: {
        title: "DevLights",
        shortDescription:
          "DevLights sind Smart Home LED-Streifen für Entwickler, die ich zusammen mit zwei Freunden entwickelt habe.",
        description: `DevLights sind Smart Home LED-Streifen für Entwickler. Zusammen mit zwei Freunden, Jaan Springer und [Timo Peters](https://tipela.de), haben wir im Rahmen eines Projektkurses Informatik am Graf-Adolf-Gymnasium unsere eigenen Smart Home LED-Streifen entwickelt.
                 Dadurch haben wir neue Techniken im Bereich Hardware- und Softwareentwicklung kennengelernt, zum Beispiel die Programmiersprache C++. `,
        readDoc: "FACHARBEIT LESEN",
      },
      simpleQ: {
        title: "SimpleQ",
        shortDescription:
          "SimpleQ ist eine Webanwendung, die es ermöglicht, Fragen zu stellen und zu beantworten, mit Unterstützung von KI und der Community.",
        description: `SimpleQ ist eine im Rahmen eines Projekts an der DHBW Karlsruhe entwickelte Webanwendung, die es ermöglicht, Fragen zu stellen und zu beantworten. 
          Im Fach Software Engineering wurde der gesamte Prozess der Produktentwicklung durchlaufen. 
          Dieses Projekt ermöglichte es, mit Personen zusammenzuarbeiten, mit denen man vorher wenig Kontakt hatte, und wertvolle Erfahrungen über Zusammenarbeit und Aufgabenkoordination zu sammeln.`,
      },
      dbDelay: {
        title: "DB Delay",
        shortDescription:
          "DB Delay ist eine Anwendung zur Sammlung von persönlichen Statistiken über Reisen mit der (Deutschen) Bahn.",
        description: `DB Delay ist eine Anwendung, die ich privat entwickelt habe, um persönliche Statistiken über Reisen mit der (Deutschen) Bahn zu sammeln. 
          Dabei werden Fahrplandaten der Deutschen Bahn zusammen mit eigenen Daten in einer Datenbank gespeichert und ausgewertet.
          Die Anwendung wurde in TypeScript mit NestJS und React entwickelt. 
          Sie hat selbst nichts mit der Deutschen Bahn zu tun, sondern ist eine rein private Anwendung.`,
      },
      concertHistory: {
        title: "Concert History",
        shortDescription:
          "Concert History ist eine native Android-App zur Dokumentation von besuchten Konzerten, um jederzeit mobil darauf zuzugreifen.",
        description:
          'ConcertHistory ist eine native Android-App, die es Konzertgängern ermöglicht, ihre besuchten Konzerte zu dokumentieren und jederzeit mobil darauf zuzugreifen. Die App habe ich Rahmen des Modules "Entwurf mobiler Applikationen" an der DHBW Karlsruhe zusammen mit [Niklas Buse](https://niklas-buse.de) entwickelt.',
        betaTest: "Beta Testen",
      },
      moveTopia: {
        title: "MoveTopia",
        shortDescription:
          "MoveTopia ist eine innovative Fitness-Tracking-App, die Nutzern hilft, ihre Trainingsfortschritte effektiv zu verfolgen und zu dokumentieren.",
        description:
          "MoveTopia ist eine innovative Fitness-Tracking-App, die Nutzern hilft, ihre Trainingsfortschritte effektiv zu verfolgen und zu dokumentieren. Die App habe ich zusammen mit [Niklas Buse](https://niklas-buse.de) im Rahmen unserer Studienarbeit an der DHBW Karlsruhe entwickelt. Sie bietet eine benutzerfreundliche Oberfläche, um Trainingsdaten zu erfassen und Fortschritte zu visualisieren.",
        playStore: "Play Store",
        appStore: "App Store",
      },
      sensoration: {
        title: "Sensoration",
        shortDescription:
          "Sensoration ist eine Android-App zur verteilten Sammlung und Visualisierung von Sensordaten.",
        description: `Sensoration ist eine Android-App, die im Rahmen des Studiums an der DHBW im Modul "Verteilte Systeme" von mir zusammen mit Tom Schütt entwickelt wurde. Diese ermöglicht es, Sensordaten von verteilten Android-Geräten zu sammeln und zu visualisieren. 
          Die App wurde in Kotlin mit Jetpack Compose entwickelt und bietet eine moderne Benutzeroberfläche.`,
      },
      learnMore: "Erfahre mehr",
    },
    projectData: "Projektdaten",
    projectDescription: "Projektbeschreibung",
    timeline: "Zeitraum",
    links: "Links & Ressourcen",
    gallerySection: "Galerie",
    galleryTitle: "Einblicke & Screenshots",
    category: "Kategorie",
    technologies: {
      title: "Architektur & Technologie-Stack",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      database: "Datenbank",
      hardware: "Hardware",
      devops: "DevOps",
      other: "Andere",
    },
  },
  milestones: {
    work_sap: {
      title: "Software Engineer",
      description:
        "Software Engineer bei der SAP in Walldorf. Dabei liegt mein Fokus auf der Entwicklung moderner Webanwendungen und Künstlicher Intelligenz.",
      location: "SAP SE, Walldorf, Deutschland",
      badge: "Aktuelle Rolle",
    },
    study: {
      title: "Duales Studium Informatik (B.Sc.)",
      description:
        "Duales Studium der Informatik in Kooperation mit der SAP SE an der Dualen Hochschule Baden-Württemberg (DHBW) Karlsruhe. Einblicke in verschiedene theoretische Inhalte der Informatik und praxisnahe Verknüpfung durch verschiedene Entwicklungsteams.",
      location: "DHBW Karlsruhe, Karlsruhe, Deutschland",
      badge: "Bachelor of Science",
    },
    school: {
      company: {
        title: "TECKdigital",
        description:
          "Durch meine Mitarbeit in der Schülerfirma TECKdigital konnte ich viele praktische Erfahrungen in der Softwareentwicklung sammeln. Ich habe an verschiedenen Projekten gearbeitet, darunter die Entwicklung der digitalen Infotafeln, TECKboards, für Schulen. Diese Projekte haben mir geholfen, meine Fähigkeiten in der Softwareentwicklung zu verbessern und mein Wissen in diesem Bereich zu erweitern.",
        location: "Tecklenburg, NRW, Deutschland",
        badge: "Schülerfirma",
      },
      abitur: {
        title: "Abitur",
        description:
          "Mit den Leistungskursen Mathematik und Informatik habe ich erfolgreich die Schule abgeschlossen. Zu dem Zeitpunk hab ich bereits durch die Schülerfirma und private Projekte viel praxisnahes gelernt, was ich für mein Studium nutzen konnte.",
        location: "Graf-Adolf-Gymnasium, Tecklenburg, NRW",
        badge: "Abitur",
      },
    },
  },
  about: {
    me: {
      title: "Über mich",
      description: `Ich bin Joshua Slaar, ein **{{age}} Jahre** alter Software Engineer aus Deutschland. Meine Begeisterung für Softwareentwicklung begann während der Schulzeit mit ersten eigenen Projekten und der Gründung der Schülerfirma **[TECKdigital](https://teckdigital.de)**. Nach dem erfolgreichen dualen Studium der Informatik bei SAP und an der DHBW Karlsruhe arbeite ich heute als Software Engineer bei der **SAP SE in Walldorf**.

Neben dem Entwickeln schätze ich den aktiven Ausgleich in der Natur — beim Radfahren in der Region, Wandern im Schwarzwald, auf Reisen per Bahn durch Europa oder beim Besuch meiner Heimat Brochterbeck in NRW.`,
      shortDescription:
        "Software Engineer bei SAP in Walldorf mit Begeisterung für moderne Web-Technologien, Künstliche Intelligenz und durchdachte Software-Architektur.",
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technologien & Werkzeuge",
      description:
        "Eine Übersicht über Programmiersprachen, Frameworks, Datenbanken und Entwicklungswerkzeuge, mit denen ich bisher gearbeitet habe.",
    },
    quickFacts: {
      education: {
        label: "Bildung",
        title: "B.Sc. Informatik",
        description: "DHBW Karlsruhe, Deutschland (2022 - 2025)",
      },
      work: {
        label: "Beruf",
        title: "Software Engineer",
        description: "SAP, Walldorf, Deutschland (2025 - heute)",
      },
      location: {
        label: "Standort & Herkunft",
        title: "Wiesloch & Brochterbeck",
        description: "Baden-Württemberg & Nordrhein-Westfalen, Deutschland",
      },
      interests: {
        label: "Interessen",
        title: "Sport, Reisen & Technik",
        description:
          "Sportliche Aktivitäten, Reisen durch Deutschland und Europa, sowie technologische Entwicklungen und Innovationen",
      },
    },
  },
  notFound: {
    title: "Dieser Inhalt wurde nicht gefunden",
  },
  ui5: {
    backToPortfolio: "Zurück zum Portfolio",
    tagline: "Gebaut mit Open UI5 — Secret Mode 🛠️",
  },
};
export default language;
