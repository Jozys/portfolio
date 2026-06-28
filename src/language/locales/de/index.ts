import { getAge } from "../../utils/getAge";
import { Language } from "../../index";

export const language: Language = {
  languageInfo: {
    de: "🇩🇪 Deutsch",
    en: "🇬🇧 Englisch",
  },
  home: {
    greeting: "Hallo",
    name: "Ich bin Joshua Slaar!",
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
      description: {
        start: `Seit Dezember 2019 bin ich Teil der Schülerfirma `,
        middle: `Diese Schülerfirma wurde im Frühjahr 2019 gegründet, und ich trat einige Monate später bei. Bei TECKdigital arbeite ich an den `,
        end: `. Durch das Arbeiten dort lernte ich mehr über Informatik und das Arbeiten im Team.`,
      },
    },
    dhbw: {
      title: "Student@DHBW",
      description: `Von September 2022 bis Ende September 2025 war ich dualer Student der Informatik bei der SAP in Walldorf und an der Dualen Hochschule Baden-Württemberg in Karlsruhe.`,
    },
  },
  status: {
    currentWork: {
      name: "Aktuelle Arbeit",
      description: "SAP@Walldorf, Deutschland.",
    },
    currentFocus: {
      name: "Aktueller Fokus",
      description: "Künstliche Intelligenz und Full Stack Entwicklung",
    },
    location: {
      name: "Standort",
      description: "Wiesloch, Deutschland.",
    },
  },
  projects: {
    main: {
      title: "Ich habe entwickelt...",
      readMore: "Mehr lesen",
      teckboard: {
        title: "TECKboards",
        description: `TECKboard ist ein digitales Echtzeit-Informationssystem, das zwei Freunde von mir, Timo Peters und Yannik Hahn, entwickelt haben. Ich selbst habe viel Zeit darauf verwendet, eine Smartphone-Anwendung für das bestehende System zu entwickeln. Durch das Prinzip 'Learning by Doing' habe ich viel über Planung, Entwicklung und die Zusammenarbeit mit anderen Entwicklern gelernt.`,
      },
      devlight: {
        title: "DevLights",
        description: `DevLights sind Smart Home LED-Streifen für Entwickler. Zusammen mit zwei Freunden, Jaan Springer und Timo Peters, haben wir im Rahmen eines Projektkurses Informatik am Graf-Adolf-Gymnasium unsere eigenen Smart Home LED-Streifen entwickelt.
                 Dadurch haben wir neue Techniken im Bereich Hardware- und Softwareentwicklung kennengelernt, zum Beispiel die Programmiersprache C++. `,
        readDoc: "FACHARBEIT LESEN",
      },
      simpleQ: {
        title: "SimpleQ",
        description: `SimpleQ ist eine im Rahmen eines Projekts an der DHBW Karlsruhe entwickelte Webanwendung, die es ermöglicht, Fragen zu stellen und zu beantworten. 
          Im Fach Software Engineering wurde der gesamte Prozess der Produktentwicklung durchlaufen. 
          Dieses Projekt ermöglichte es, mit Personen zusammenzuarbeiten, mit denen man vorher wenig Kontakt hatte, und wertvolle Erfahrungen über Zusammenarbeit und Aufgabenkoordination zu sammeln.`,
      },
      dbDelay: {
        title: "DB Delay",
        description: `DB Delay ist eine Anwendung, die ich privat entwickelt habe, um persönliche Statistiken über Reisen mit der (Deutschen) Bahn zu sammeln. 
          Dabei werden Fahrplandaten der Deutschen Bahn zusammen mit eigenen Daten in einer Datenbank gespeichert und ausgewertet.
          Die Anwendung wurde in TypeScript mit NestJS und React entwickelt. 
          Sie hat selbst nichts mit der Deutschen Bahn zu tun, sondern ist eine rein private Anwendung.`,
      },
      concertHistory: {
        title: "Concert History",
        description:
          'ConcertHistory ist eine native Android-App, die es Konzertgängern ermöglicht, ihre besuchten Konzerte zu dokumentieren und jederzeit mobil darauf zuzugreifen. Die App habe ich Rahmen des Modules "Entwurf mobiler Applikationen" an der DHBW Karlsruhe zusammen mit Niklas Buse entwickelt.',
      },
      moveTopia: {
        title: "MoveTopia",
        description:
          "MoveTopia ist eine innovative Fitness-Tracking-App, die Nutzern hilft, ihre Trainingsfortschritte effektiv zu verfolgen und zu dokumentieren. Die App habe ich zusammen mit Niklas Buse im Rahmen unserer Studienarbeit an der DHBW Karlsruhe entwickelt. Sie bietet eine benutzerfreundliche Oberfläche, um Trainingsdaten zu erfassen und Fortschritte zu visualisieren.",
      },
      sensoration: {
        title: "Sensoration",
        description: `Sensoration ist eine Android-App, die im Rahmen des Studiums an der DHBW im Modul "Verteilte Systeme" von mir zusammen mit Tom Schütt entwickelt wurde. Diese ermöglicht es, Sensordaten von verteilten Android-Geräten zu sammeln und zu visualisieren. 
          Die App wurde in Kotlin mit Jetpack Compose entwickelt und bietet eine moderne Benutzeroberfläche.`,
      },
      skills: {
        title: "Meine Skills",
        description: `Diese Übersicht zeigt alle Programmiersprachen und Frameworks, mit denen ich gut oder einigermaßen vertraut bin. 
        Meine Haupterfahrungen erweiterten sich von Java und JavaScript bzw. TypeScript hinzu Frameworks zur Frontend-Entwicklung wie React und zur Backend-Entwicklung wie NestJS.         
        Zudem sammelte ich Erfahrungen in der App-Entwicklung mit React Native, Jetpack Compose und Flutter.
        Ich habe auch einige Kenntnisse in der Hardware-Entwicklung mit C++ und dem ESP8266 Mikrocontroller.
        Mein Wissen über Datenbanken erstreckt sich von MongoDB, MySQL bis hin zu PostgreSQL.
        Dabei bleibt mein Wissen über die Programmiersprachen und Frameworks nicht stehen, sondern ich versuche immer weiter dazuzulernen.
        `,
      },

      learnMore: "Erfahre mehr",
    },
    devlight: {
      title: "DevLights",
      subtitle: "Die Smart Home  LED Streifen für Entwickler",
      ledstrip: {
        color: "Tippe hier eine Farbe ein.",
        validity: "Es werden nur HEX or RGB unterstützt",
        restart: "Farbwechsel neustarten",
      },
      github: "Programmcode anschauen auf GitHub",
      summary: `DevLights sind selbst entwickelte Smart Home  LED Streifen, die den WS2812B Chip für die einzelne Ansteuerung der Lichter benutzen.
            Gleichzeitig dient eine eigens designte Platine mit ESP8266 Wifi Modul zur Kommunikation mit dem Backend.
            Das Backend stellt ein NestJS Server mit MongoDB, es exisitiert eine Smartphone, sowie eine Desktop Anwendung für die Steuerung.`,
      evolution: {
        title: "Der Werdegang der DevLights",
        description:
          "Die Entwicklung von DevLights begann 2020, als ich das Projekt zusammen mit zwei Freunden, Jaan Springer und Timo Peters, startete. Wir begannen mit der Entwicklung im Projektkurs am Graf-Adolf-Gymnasium in Tecklenburg, Nordrhein-Westfalen. In einem Jahr Entwicklungszeit lernten wir viel über Programmierung, Hardware- und Softwareentwicklung.",
      },
      openSourceNotice:
        "Das Projekt ist Open Source. Der Code kann angeschaut werden auf GitHub.",
      projectTimelineTitle: "Projektablauf",
      projectTimeline: [
        `2020 habe ich mich zusammen mit zwei Freunden entschieden, an meiner Schule den Projektkurs Informatik zu wählen. 
                Nachdem wir einige Zeit überlegt hatten, was genau wir entwickeln wollen würden, 
                entschieden wir uns unsere eigenen kontrollierbaren LED-Streifen zu entwickeln. 
                Seitens der Schule gab es nur eine Vorgabe, das Projekt musste Mikrocontroller enthalten.`,
        `Zunächst mussten wir entscheiden welche Technologien wir im Bereich Hard- und Software benutzen wollen.
                Letztendlich entschieden wir uns für BTF-Lightning LED-Streifen mit WS2812B Modul und einem ESP8266 Wifi Microcontroller auf der Hardwareseite. 
                Der Server, welcher die Kommunikation zwischen LED-Streifen und Nutzereingaben regeln sollten,
                sollte zudem auf einem Raspberry Pi laufen. . Die API-Schnittstelle sollte in TypeScript mit NestJS und der ESP8266 in C++ programmiert werden.`,
        `Nachdem entschieden war was für Technologien verwendet werden, fing das Entwickeln an.
                Zunächst begannen wir mit dem LED-Streifen und dem Server.
                Als schwierig gestaltete es, einen funktionierenden Prototyp mit einer Verbindung vom LED-Streifen zum ESP8266 herzustellen, 
                da unterschiedliche Spannungen verwendet werden. Aus dem Prototyp wurde später eine eigene Platine.`,
        `Ein Jahr lang dauerte die Entwicklung von der Hardware und den Software Beispielen,
                drei Stück sind es am Ende geworden, eine Smartphone-App, eine Desktop-App und eine Modifikation für das Spiel Minecraft.
                Für das gesamte Projekt mussten wir eine Facharbeit verfassen, um das entwickelte zu präsentieren. 
                Nachdem  wir diese abgegeben hatten und eine kleine Präsentation vor unseren Lehrkräften hatten, bekamen wir die Noten für das Projekt. 
                Diese waren die Bestnote (15 Punkte).`,
      ],
      last: `Insgesamt war dieses Projekt eine sehr gute Lernerfahrung und auch notentechnisch sehr gut.
            Aktuell ist es immer noch einsehr, ich selbst verwende es noch aktiv und theoretisch könnte es jeder verwenden.
            Detailliertere Informationen können in meiner Facharbeit nachgelesen werden. `,
    },
    teckboard: {
      title: "TECKboard",
      content: `Das TECKboard ist ein digitales Informationssystem mit dem Fokus auf übersichtliche Bereitstellung von Informationen für einzelne Nutzergruppen. `,
      projectDescription: {
        title: "Wie TECKboards entstanden",
        description: `Die erste Idee für die TECKboards kam durch einen Wunsch der Schülervertretung des Graf Adolf Gymnasiums, die die alten analogen Infotafeln ersetzen wollten.
                Die erste Version der Boards wurde 2019 erstellt und im Verlaufe der Zeit immer weiter verbessert. 
                Im selben Jahr der ersten Version startete ich damit eine mobile Anwendung für die TECKboards zu entwickeln.
                Diese App wurde dann 2021 veröffentlicht und konnte bis 2023 in den gängigen Stores von Google und Apple heruntergeladen werden.`,
      },
      mobileEvolution: "Die Evolution der TECKboard App",
      evolution: "Die Evolution der TECKboards",
      imageInfo: [],
      appDescription: [
        `Nachdem diese veröffentlicht wurde, wurde die App von Schülern der Oberstufe und Lehrern am Graf Adolf Gymnasium genutzt.
        Das Feedback zur App von den Schülern war sehr positiv, da sie die App als sehr hilfreich empfanden. 
        Die Fähigkeit Informationen der Lehrkräfte und der Schule schnell und einfach zu erhalten, war ein großer Vorteil.
        Zudem bot die Anwendung noch eine Anzeige des Vertretungsplans des jeweiligen Tages.`,
      ],
      reactNative: {
        start: `Zunächst wurde die App nur für Android in Android Studio mit Java entwickelt. Im März 2020 wurde dann entschieden direkt für Android und iOS zu entwickeln mit `,
        end: `, ein Framework zur Multiplattform App Entwicklung.`,
      },
    },
  },
  footer: {
    contact: "Kontakt",
    others: "Andere",
    projects: "Projekte",
  },
  notFound: {
    title: "Dieser Inhalt wurde nicht gefunden",
  },
};
export default language;
