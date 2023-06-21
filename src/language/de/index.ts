import { getAge } from "../../utils/utils";
import { Language } from "../index";

export const language: Language = {
    home: {
        greeting: "Hallo",
        name: "Ich bin Joshua Slaar!",
        subtitle: `Student - Entwickler - ${getAge()} Jahre alt - Deutschland`,
        me: {
            title: "Wer bin ich",
            description: `Ich bin ein ${getAge()} Jahre alter Student, der gerne Sport macht, entwickelt, und Bücher liest. Aktuell studiere ich Informatik in Karlsruhe und arbeite bei der SAP in Walldorf, Baden-Württemberg.`
        },
        life: {
            title: "Mein Leben",
            description: `Ich mag es nach draußen zu gehen, um zum Beispiel in meiner Heimatstadt Brochterbeck in Nordrhein-Westfalen spazieren zu gehen. Ebenfalls fahre ich gerne mit dem Rad durch die Region.
            Zudem treffe ich mich sehr gerne mit Freunden, um mit diesen Zeit zu verbringen.`,

        },
        teckdigital: {
            title: "TECKdigital",
            description: ``,
        },
        dhbw: {
            title: "Student@DHBW",
            description: `Seit September 2022 bin ich dualer Student der Informatik bei der SAP in Walldorf und an der Dualen Hochschule Baden-Württemberg in Karlsruhe`,
        }
    },
    projects: {
        main: {
            title: "Entwickelt hab ich...",
            teckboard: {
                title: "... TECKboards",
                description: "TECKboard ist ein digitales Echtzeit-Informationssystem was zwei Freunde von mir, Timo Peters und Yannik Hahn, entwickelt haben. Ich selber habe viel Zeit aufgebraucht eine Smartphone Anwendung für das bestehende System zu entwickeln. Mittels des Prinzips \"Learning by Doing\" erlernte ich viele Dinge im Bereich Planung, Entwicklung und Kommunikation mit andereren Entwicklern.",
            },
            devlight: {
                title: "... DevLights",
                description: "DevLights sind SmartHome LED Streifen für Entwickler. Zusammen mit zwei Freunden von mir, Jaan Springer und Timo Peters entwickelten wir unsere eigenen SmartHome LED Streifen im Zuge eines Projektkurses Informatik am Graf-Adolf-Gymnasium. Dadurch lernten wir neue Techniken im Bereich Hardware und Software Entwicklung kennen, zum Beispiel C++."
            },
            skills: {
                title: "Meine Skills",
                description: `Hier sieht man alle Programmiersprachen und Frameworks, die ich bereits benutzt habe.
                Aktuell sind meine Kenntnisse vor allem in der Java und JavaScript sehr gut. 
                Entwickelt hab ich bisher viel mit React für Frontend und NestJS für Backend Anwendungen. 
                Zudem habe ich gute Kenntnisse in HTML5 und CSS3. Das meiste davon hab ich mir selber beigebracht, abgesehen von Java, da dies in der Schule gelehrt wurde. 
                In der Zukunft möchte ich noch weitere Frameworks und Programmiersprachen erlernen. 
                Mein Ziel dabei bleibt immer was neues zu lernen`,
            }
        },
        devlight: {
            title: "DevLights",
            subtitle: "Die SmartHome LED Streifen für Entwickler",
            ledstrip: {
                color: "Tippe hier eine Farbe",
                validity: "Unterstützt nur valide HEX oder RGB Farben",
                restart: "Neustart Farbwechsel"
            },
            github: "Programmcode anschauen auf GitHub",
            summary: `DevLights sind selbst entwickelte SmartHome LED Streifen, die den WS2812B Chip für die einzelne Ansteuerung der Lichter benutzen
            Das Backend stellt ein NestJS Server mit MongoDB, es exisitiert eine Smartphone, sowie eine Desktop Anwendung für die Steuerung.`,
            openSourceNotice: "Das Projekt ist Open Source. Es kann angeschaut werden auf GitHub.",
            projectTimeline: [],
            last: `Insgesamt war dieses Projekt eine sehr gute Lernerfahrung und auch notentechnisch sehr gut.
            Aktuell ist es immer noch einsehr, ich selbst verwende es noch aktiv und theoretisch könnte es jeder verwenden`
        },
        teckboard: {
            title: "TECKboard",
            content: "TECKboard is a real time digital information system. It gives the ability to create individual boards for specific groups, so that everyone just gets the information they need and are allowed to see. In the background there is a secure user and invite system for convenient user management",
            projectDescription: {
                title: "Wie TECKboards entstanden",
                description: `Die erste Idee für die TECKboards kam durch einen Wunsch der Schülervertretung des Graf Adolf Gymnasiums, die die alten analogen Infotafeln ersetzen wollten.
                Die erste Version der Boards wurde 2019 erstellt und im Verlaufe der Zeit immer weiter verbessert. 
                Im selben Jahr der ersten Version startete ich damit eine mobile Anwendung für die TECKboards zu entwickeln.
                Diese App wurde dann 2021 veröffentlich und kann in den gängigen Stores von Google und Apple heruntergeladen werden.`,
            },
            imageInfo: [],
            appDescription: [`Die App entwickelte sich von einer zunächst in 2019 nur für Android entwickelten zu der heutigen App in 2021. Heute wird die App von Schülern und Lehrern am Graf Adolf Gymnasium genutzt.`],
        }
    },
    footer: {
        contact: "Kontakt",
        others: "Andere",
        projects: "Freunde"
    }
}