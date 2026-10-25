import { getAge } from "../../../utils/utils";
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
    privacyPolicy: "Datenschutzerklärung",
  },
  home: {
    greeting: "Hallo",
    name: "Ich bin Joshua!",
    subtitle: `Entwickler - ${getAge()} Jahre alt - Deutschland`,
    me: {
      title: "Wer bin ich?",
      description:
        "Aktuell arbeite ich als Software Engineer bei der SAP in Walldorf mit Fokus auf Künstliche Intelligenz und moderne Full-Stack-Entwicklung. Abseits vom Code treibe ich gerne Sport, bin viel in der Natur unterwegs, lese Bücher oder reise mit der Bahn durch Deutschland und Europa.",
    },
    sap: {
      title: "SAP SE",
      description:
        "Seit Oktober 2025 bin ich als Software Engineer bei der SAP SE in Walldorf tätig. Dort habe ich zunächst am UI5-Framework mitgewirkt und entwickle heute Webanwendungen mit Fokus auf die Nutzung von Künstlicher Intelligenz.",
    },
    teckdigital: {
      title: "TECKdigital",
      description:
        "Ab Dezember 2019 war ich Teil der im Frühjahr 2019 gegründeten Schülerfirma **[TECKdigital](https://teckdigital.de)**. Dort habe ich unter anderem an den **[TECKboards](/projects/teckboard)** gearbeitet und dabei wertvolle praktische Erfahrungen in der Informatik sowie in der Teamarbeit gesammelt.",
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
      title: "Erfahrung & Studium",
      sapTags: ["SAP", "Walldorf", "Deutschland"],
      dhbwTags: ["Duales Studium", "SAP", "DHBW"],
      teckdigitalTags: ["Mobile Apps", "Softwareentwicklung", "Webentwicklung"],
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
      description: "Künstliche Intelligenz und Full-Stack-Entwicklung.",
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
          "TECKboard ist ein digitales Echtzeit-Informationssystem der Schülerfirma TECKdigital, für das ich die zugehörige Smartphone-Anwendung entwickelt habe.",
        description: `TECKboard ist ein digitales Echtzeit-Informationssystem, ursprünglich von zwei Freunden von mir, [Timo Peters](https://tipela.de) und [Yannik Hahn](https://h4hn.de), entwickelt und im Rahmen von TECKdigital umgesetzt. Ich selbst habe viel Zeit darauf verwendet, eine Smartphone-Anwendung für das bestehende System zu entwickeln. Nach dem Prinzip „Learning by Doing“ habe ich dabei viel über Planung, Entwicklung und die Zusammenarbeit im Team gelernt.`,
      },
      devlight: {
        title: "DevLights",
        shortDescription:
          "DevLights sind Smart-Home-LED-Streifen für Entwickler, die ich gemeinsam mit zwei Freunden realisiert habe.",
        description: `DevLights sind Smart-Home-LED-Streifen für Entwickler. Zusammen mit meinen Freunden Jaan Springer und [Timo Peters](https://tipela.de) habe ich diese im Rahmen eines Projektkurses Informatik am Graf-Adolf-Gymnasium entwickelt.
                 Dabei haben wir neue Technologien im Bereich der Hardware- und Softwareentwicklung kennengelernt, wie zum Beispiel die Programmiersprache C++ und das Entwerfen eigener Platinen für die LED-Steuerung.`,
        readDoc: "FACHARBEIT LESEN",
      },
      simpleQ: {
        title: "SimpleQ",
        shortDescription:
          "SimpleQ ist eine Webanwendung, mit der Nutzer unterstützt durch KI und die Community Fragen stellen und beantworten können.",
        description: `SimpleQ ist eine im Rahmen eines Projekts an der DHBW Karlsruhe entwickelte Webanwendung, die es ermöglicht, Fragen zu stellen und mithilfe von KI sowie der Community zu beantworten. 
          Im Modul Software Engineering wurde dabei der gesamte Prozess der Produktentwicklung durchlaufen. Zusammen mit vier anderen Studierenden habe ich die Anwendung von der Idee über die Konzeption bis hin zur Umsetzung begleitet.
          Durch das Projekt konnte ich gemeinsam mit [Benjamin](https://benniloidl.de), Tom, Leonard und Manuel wertvolle Erfahrungen in der Zusammenarbeit und Aufgabenkoordination mit neuen Teammitgliedern sammeln.`,
      },
      dbDelay: {
        title: "DB Delay",
        shortDescription:
          "DB Delay ist eine Anwendung zur Erfassung persönlicher Statistiken über Reisen mit der (Deutschen) Bahn.",
        description: `DB Delay ist eine persönliche Anwendung zur Erfassung und Analyse von Reiseinformationen mit der (Deutschen) Bahn. Diese habe ich aus eigenem Interesse entwickelt, um meine eigenen Reiseerfahrungen zu dokumentieren und zu analysieren. Die Anwendung ermöglicht es, Verspätungen, Reisezeiten und andere relevante Daten zu erfassen und auszuwerten. Sie wurde in React entwickelt und bietet eine benutzerfreundliche Oberfläche zur Visualisierung der gesammelten Daten.
          Das Backend wurde in NestJS umgesetzt und nutzt eine MySQL-Datenbank zur Speicherung der Reiseinformationen. Zur Nutzerverwaltung wird ein Keycloak-Server eingesetzt, der eine sichere Authentifizierung und Autorisierung der Nutzer gewährleistet.`,
      },
      concertHistory: {
        title: "Concert History",
        shortDescription:
          "Concert History ist eine native Android-App zur Dokumentation besuchter Konzerte, um jederzeit mobil darauf zugreifen zu können.",
        description: `Concert History ist eine native Android-App, die es Konzertgängern ermöglicht, ihre besuchten Konzerte zu dokumentieren und jederzeit mobil darauf zuzugreifen. Die App habe ich im Rahmen des Moduls „Entwurf mobiler Applikationen“ an der DHBW Karlsruhe zusammen mit [Niklas Buse](https://niklas-buse.de) entwickelt.
          Sie wurde in Kotlin mit Jetpack Compose umgesetzt und bietet eine moderne Benutzeroberfläche, um besuchte Konzerte einzusehen, Künstler und Konzerte zu favorisieren und zu suchen. Dabei nutzt sie die API von setlist.fm, um Konzertinformationen abzurufen. Die App ist als Read-Only-Anwendung konzipiert, da das Eintragen besuchter Konzerte über die öffentliche Schnittstelle nicht möglich ist.`,
        betaTest: "Beta testen",
      },
      moveTopia: {
        title: "MoveTopia",
        shortDescription:
          "MoveTopia ist eine innovative Fitness-Tracking-App, die Nutzern hilft, ihre Trainingsfortschritte effektiv zu verfolgen und zu dokumentieren.",
        description: `MoveTopia ist eine innovative Fitness-Tracking-App, die Nutzern hilft, ihre Trainingsfortschritte effektiv zu verfolgen und zu dokumentieren. 
          Die App habe ich zusammen mit [Niklas Buse](https://niklas-buse.de) im Rahmen unserer Studienarbeit an der DHBW Karlsruhe entwickelt. 
          Sie bietet eine benutzerfreundliche Oberfläche, um Trainingsdaten zu erfassen und Fortschritte zu visualisieren, und kombiniert funktionales Aktivitäts-Tracking mit durchdachten Gamification-Elementen, um die Motivation für regelmäßige Bewegung zu fördern. MoveTopia macht das Verfolgen von Fitnesszielen so zu einem angenehmen und strukturierten Erlebnis.`,
        playStore: "Play Store",
        appStore: "App Store",
      },
      sensoration: {
        title: "Sensoration",
        shortDescription:
          "Sensoration ist eine Android-App zur verteilten Erfassung und Visualisierung von Sensordaten.",
        description: `Sensoration ist eine Android-App, die ich im Rahmen meines Studiums an der DHBW im Modul „Verteilte Systeme“ gemeinsam mit Tom Schütt entwickelt habe. Sie ermöglicht es, Sensordaten von verteilten Android-Geräten zu sammeln und zu visualisieren. 
          Die App wurde in Kotlin mit Jetpack Compose umgesetzt und bietet eine moderne Benutzeroberfläche. Es ist möglich, die Sensordaten live einzusehen und einen Überblick über die Unterschiede der verschiedenen Geräte zu erhalten. 
          Dabei werden folgende Sensoren unterstützt: Beschleunigungssensor, Luftdruck, Schwerkraft, Messung des Dezibel-Vollskalenwerts sowie der signifikanten Tonhöhe.`,
      },
      learnMore: "Erfahre mehr",
    },
    backToProjects: "Zurück zu allen Projekten",
    now: "Heute",
    projectData: "Projektdaten",
    projectDescription: "Projektbeschreibung",
    timeline: "Zeitraum",
    links: "Links & Ressourcen",
    gallerySection: "Galerie",
    galleryTitle: "Einblicke & Screenshots",
    galleryEnlargeImage: "Bild vergrößern",
    lightboxClose: "Detailansicht schließen",
    lightboxPrev: "Vorheriges Bild",
    lightboxNext: "Nächstes Bild",
    lightboxSelectImage: "Bild auswählen",
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
        "Duales Studium der Informatik in Kooperation mit der SAP SE an der Dualen Hochschule Baden-Württemberg (DHBW) Karlsruhe. Fundierte Einblicke in die theoretische und praktische Informatik, direkt verknüpft mit Praxiseinsätzen in verschiedenen Entwicklungsteams.",
      location: "DHBW Karlsruhe, Karlsruhe, Deutschland",
      badge: "Bachelor of Science",
    },
    school: {
      company: {
        title: "TECKdigital",
        description:
          "Durch meine Mitarbeit in der Schülerfirma TECKdigital konnte ich vielfältige praktische Erfahrungen in der Softwareentwicklung sammeln. Ich habe an verschiedenen Projekten mitgewirkt, darunter die Entwicklung der digitalen Infotafeln (TECKboards) für Schulen, und mein Wissen in der Praxis kontinuierlich vertieft.",
        location: "Tecklenburg, NRW, Deutschland",
        badge: "Schülerfirma",
      },
      abitur: {
        title: "Abitur",
        description:
          "Mit den Leistungskursen Mathematik und Informatik habe ich die Schule erfolgreich abgeschlossen. Bereits während der Schulzeit konnte ich durch die Schülerfirma und eigene Projekte viel Praxiserfahrung sammeln, die mir im anschließenden Studium zugutekam.",
        location: "Graf-Adolf-Gymnasium, Tecklenburg, NRW",
        badge: "Abitur",
      },
    },
  },
  about: {
    me: {
      title: "Über mich",
      description: `Ich bin Joshua Slaar, ein **{{age}} Jahre** alter Software Engineer aus Deutschland. Meine Begeisterung für die Softwareentwicklung begann bereits während der Schulzeit mit ersten eigenen Projekten und meiner Mitarbeit in der Schülerfirma **[TECKdigital](https://teckdigital.de)**. Nach meinem dualen Studium der Informatik bei SAP und an der DHBW Karlsruhe arbeite ich heute als Software Engineer bei der **SAP SE in Walldorf**.

Neben dem Entwickeln bin ich gerne draußen in der Natur unterwegs – sei es bei Spaziergängen und Wanderungen im Raum Karlsruhe und im Schwarzwald oder auf Fahrradtouren durch die Region. Zudem verbringe ich sehr gerne Zeit mit Freunden, reise mit der Bahn durch Deutschland und Europa und besuche regelmäßig meine Heimat Brochterbeck in Nordrhein-Westfalen.`,
      shortDescription:
        "Software Engineer bei SAP in Walldorf mit Begeisterung für moderne Web-Technologien und Software-Architektur.",
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
          "Sportliche Aktivitäten, Reisen durch Deutschland und Europa sowie technologische Entwicklungen und Innovationen.",
      },
    },
  },
  notFound: {
    title: "Dieser Inhalt wurde nicht gefunden",
    description:
      "Die aufgerufene Seite existiert nicht, wurde verschoben oder ist unter dieser Adresse nicht verfügbar.",
    code: "Fehlercode: 404",
  },
  ui5: {
    backToPortfolio: "Zurück zum Portfolio",
    tagline: "Gebaut mit OpenUI5 — Secret Mode 🛠️",
  },
  privacy: {
    title: "Datenschutzerklärung",
    subtitle:
      "Informationen zur Verarbeitung personenbezogener Daten beim Besuch dieser Website gemäß DSGVO.",
    lastUpdated: "Stand: Oktober 2026",
    defaultHostingProvider: "einem externen Hosting-Dienstleister",
    sections: [
      {
        title: "1. Verantwortlicher",
        content: `Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:

**Joshua Slaar**  
E-Mail: [{{email}}]({{mailHref}})`,
      },
      {
        title: "2. Hosting (VPS) & DNS-Namensauflösung (Cloudflare)",
        content: `**Hosting und Server-Logfiles:** Diese Website wird auf einem selbst verwalteten virtuellen Server (VPS) bei **{{hostingProvider}}** mit Serverstandort in **Deutschland (EU)** betrieben (auf Grundlage eines Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO). Wenn Sie diese Website aufrufen oder mit ihr interagieren, stellt Ihr Browser eine direkte Verbindung zu diesem Webserver her. Dabei werden technisch notwendige Verbindungsdaten (z. B. IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene URL, HTTP-Statuscode sowie Browsertyp und Betriebssystem) zur Auslieferung der Website sowie zur Gewährleistung der Systemsicherheit verarbeitet. Die Server-Logfiles werden für maximal 7 Tage gespeichert und anschließend automatisch gelöscht.

**Reine DNS-Verwaltung über Cloudflare (DNS Only):** Für die reine Namensauflösung der Domain (Übersetzung des Domainnamens in die IP-Adresse des Servers) nutze ich die autoritativen Nameserver der **Cloudflare, Inc.** im Modus **„DNS Only“**. Es wird **kein HTTP-/HTTPS-Datenverkehr** Ihrer Website-Besuche über Cloudflare geleitet; bei der Interaktion mit der Website werden keinerlei Anfragen an Cloudflare gesendet. Lediglich bei der initialen DNS-Abfrage (die in der Regel über den DNS-Resolver Ihres Internetanbieters erfolgt) werden technisch bedingte DNS-Anfragedaten (angefragter Domainname, Anfragezeitpunkt, DNS-Record-Typ sowie die IP-Adresse des anfragenden DNS-Resolvers) verarbeitet und in **Cloudflare DNS Analytics** statistisch ausgewertet ([Datenschutzerklärung von Cloudflare](https://www.cloudflare.com/de-de/privacypolicy/)).

**Zweck und Rechtsgrundlage:** Die Verarbeitung erfolgt zur technischen Bereitstellung der Website, zur IT-Sicherheit und zur zuverlässigen Erreichbarkeit der Domain auf Grundlage meines berechtigten Interesses gemäß **Art. 6 Abs. 1 lit. f DSGVO**.`,
      },
      {
        title: "3. Lokale Speicherung (Local Storage) & lokale Schriftarten",
        content: `Diese Website verwendet **keine Tracking-, Analyse- oder Marketing-Cookies** und setzt keine externen Web-Analytics-Dienste ein.

Lediglich zur Speicherung Ihrer ausdrücklich gewählten Darstellungseinstellungen nutzt die Website den lokalen Speicher (**Local Storage**) Ihres Browsers:

- **\`isDark\`**: Speichert Ihre Auswahl für das helle oder dunkle Farbschema (Light / Dark Mode).
- **\`language\`**: Speichert Ihre gewählte Spracheinstellung (\`de\` oder \`en\`).

Diese Werte verbleiben ausschließlich lokal in Ihrem Browser, werden nicht an Server übertragen und können jederzeit über die Browser-Einstellungen gelöscht werden. Die Speicherung erfolgt auf Grundlage von **§ 25 Abs. 2 Nr. 2 TDDDG** bzw. **Art. 6 Abs. 1 lit. f DSGVO** zur nutzerfreundlichen Bereitstellung der Website.

Alle verwendeten Schriftarten und Icons sind lokal in die Website eingebunden; beim Seitenaufruf findet keine Verbindung zu externen Schriftarten-Diensten (wie etwa Google Fonts) statt.`,
      },
      {
        title: "4. Kontaktaufnahme & externe Links",
        content: `**Kontaktaufnahme per E-Mail:** Wenn Sie mich per E-Mail kontaktieren, werden Ihre übermittelten Angaben (insbesondere Ihre E-Mail-Adresse, Ihr Name und der Inhalt Ihrer Nachricht) ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet (Rechtsgrundlage: **Art. 6 Abs. 1 lit. f DSGVO** bzw. bei vorvertraglichen Anfragen **Art. 6 Abs. 1 lit. b DSGVO**). Die Daten werden gelöscht, sobald Ihre Anfrage abschließend bearbeitet wurde und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.

**Externe Links:** Diese Website enthält Links zu externen Websites Dritter (z. B. GitHub, LinkedIn, Instagram oder Projektseiten). Erst wenn Sie aktiv auf einen solchen externen Link klicken, wird eine Verbindung zum jeweiligen Zielserver hergestellt; für die dortige Datenverarbeitung gelten die Datenschutzbestimmungen des jeweiligen Betreibers.`,
      },
      {
        title: "5. Ihre Rechte als betroffene Person",
        content: `Soweit im Rahmen Ihres Besuchs oder einer Kontaktaufnahme personenbezogene Daten verarbeitet werden, stehen Ihnen nach Maßgabe der gesetzlichen Bestimmungen (insbesondere unter Berücksichtigung von **Art. 11 DSGVO**, sofern eine Identifizierung Ihrer Person anhand rein technischer Verbindungsdaten nicht möglich ist) die Rechte auf **Auskunft** (Art. 15), **Berichtigung** (Art. 16), **Löschung** (Art. 17), **Einschränkung der Verarbeitung** (Art. 18), **Datenübertragbarkeit** (Art. 20) sowie **Widerspruch** (Art. 21 DSGVO) zu. Zudem besteht ein **Beschwerderecht** bei einer Datenschutz-Aufsichtsbehörde (Art. 77 DSGVO).`,
      },
    ],
  },
};
export default language;
