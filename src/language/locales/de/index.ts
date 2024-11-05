import { getAge } from "../../utils/getAge";
import { Language } from "../../index";

export const language: Language = {
  languageInfo: {
    de: "🇩🇪",
    en: "🇬🇧",
  },
  home: {
    greeting: "Hallo",
    name: "Ich bin Joshua Slaar!",
    subtitle: `Student - Entwickler - ${getAge()} Jahre alt - Deutschland`,
    me: {
      title: "Wer bin ich",
      description: `Ich bin ein ${getAge()} Jahre alter Student, der gerne Sport macht, entwickelt, und Bücher liest. Aktuell studiere ich Informatik in Karlsruhe und arbeite bei der SAP in Walldorf, Baden-Württemberg.`,
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
      description: `Seit September 2022 bin ich dualer Student der Informatik bei der SAP in Walldorf und an der Dualen Hochschule Baden-Württemberg in Karlsruhe.`,
    },
  },
  projects: {
    main: {
      title: "Entwickelt hab ich...",
      teckboard: {
        title: "... TECKboards",
        description: `TECKboard ist ein digitales Echtzeit-Informationssystem, was zwei Freunde von mir, Timo Peters und Yannik Hahn, entwickelt haben. 
          Ich selber habe viel Zeit aufgebracht eine Smartphone Anwendung für das bestehende System zu entwickeln. 
          Mittels des Prinzips "Learning by Doing" erlernte ich viele Dinge im Bereich Planung, Entwicklung und Kommunikation mit andereren Entwicklern.`,
      },
      devlight: {
        title: "... DevLights",
        description: `DevLights sind Smart Home  LED Streifen für Entwickler. Zusammen mit zwei Freunden von mir, Jaan Springer und Timo Peters, 
                entwickelten wir unsere eigenen Smart Home  LED Streifen im Zuge eines Projektkurses Informatik am Graf-Adolf-Gymnasium.
                 Dadurch lernten wir neue Techniken im Bereich Hardware und Software Entwicklung kennen, zum Beispiel die Programmiersprache C++. `,
        readDoc: "DOKUMENTATION LESEN",
      },
      simpleQ: {
        title: "... SimpleQ",
        description: `SimpleQ ist eine im Zuge eines Projektes an der DHBW Karlsruhe entwickelte Webanwendung, die es ermöglicht, Fragen zu stellen und zu beantworten. 
          Dabei wurde im Fach Software Engineering der gesamte Prozess der Entwicklung eines Produktes durchgearbeitet. 
          Dieses Projekt ermöglichte es mit Personen, mit denen man vorher wenig gemeinsam gearbeitet hat, wertvolle Erfahrungen über Zusammenarbeit und Koordination von Aufgaben zu lernen.`,
      },
      dbDelay: {
        title: "... DB Delay",
        description: `DB Delay ist eine Anwendung, welche ich privat entwickelt habe, um persönliche Statistiken über Reisen mit der (Deutschen) Bahn zu sammeln. 
          Dabei werden Fahrplandaten der Deutschen Bahn zusammen mit eigenen Daten in einer Datenbank gespeichert und ausgewertet.
          Die Anwendung wurde in TypeScript mit NestJS und React entwickelt. 
          Sie hat selbst nichts mit der Deutschen Bahn zu tun, sondern ist eine rein private Anwendung.`,
      },
      skills: {
        title: "Meine Skills",
        description: `Hier sieht man alle Programmiersprachen und Frameworks, die ich bereits benutzt habe.
                Aktuell sind meine Kenntnisse vor allem in der Java und JavaScript Entwicklung sehr gut. 
                Entwickelt hab ich bisher viel mit React für Frontend und NestJS für Backend Anwendungen. 
                Zudem habe ich gute Kenntnisse in HTML5 und CSS3. Das meiste davon hab ich mir selber beigebracht, abgesehen von Java, da dies in der Schule gelehrt wurde. 
                In der Zukunft möchte ich noch weitere Frameworks und Programmiersprachen erlernen. 
                Mein Ziel dabei bleibt immer was neues zu lernen`,
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
                Nachdem wir diese abgegeben hatten und eine kleine Präsentation vor unseren Lehrkräften hatten, bekamen wir die Noten für das Projekt. 
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
                Diese App wurde dann 2021 veröffentlich und kann in den gängigen Stores von Google und Apple heruntergeladen werden.`,
      },
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
