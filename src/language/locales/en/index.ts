import { getAge } from "../../utils/getAge";
import { Language } from "../../index";

export const language: Language = {
  languageInfo: {
    de: "🇩🇪",
    en: "🇬🇧",
  },
  home: {
    greeting: "Hello",
    name: "My name is Joshua Slaar!",
    subtitle: `Student - Developer - ${getAge()} years old - Germany`,
    me: {
      title: "Who am I",
      description: `I am a ${getAge()} year old student, who likes doing sport, developing, and reading books. Currently I study informatics in Karlsruhe and work at SAP in Walldorf, Baden-Württemberg Germany.`,
    },
    life: {
      title: "My Life",
      description: ` I like to go outside to walk around the Karlsruhe area or towards the Black Forest. I also enjoy cycling through the regions. Additionally, I love meeting friends to spend time with them. Furthermore, I enjoy traveling by train through Germany and Europe. I also regularly visit my hometown Brochterbeck in North Rhine-Westphalia.`,
    },
    teckdigital: {
      title: "TECKdigital",
      description: {
        start: `Since December 2019 I am a member of student company `,
        middle: `This company was founed in the beginning of 2019 and I joined them
                a few months after that. At TECKdigital I worked on the `,
        end: `. By working there I got more knowledge about working in a team
                and informatic in general.`,
      },
    },
    dhbw: {
      title: "Student@DHBW",
      description: `Since September 2022 I am a Vocational Training Student of Applied Computer Science at SAP in Walldorf.
            Therefore I work there at SAP and study at the Baden-Wuerttemberg Cooperative State University Karlsruhe (DHBW Karlsruhe).`,
    },
  },
  status: {
    currentWork: {
      name: "Current Work",
      description: "SAP@Walldorf, Germany.",
    },
    currentFocus: {
      name: "Current Focus",
      description: "Studying at DHBW Karlsruhe, Germany.",
    },
    location: {
      name: "Location",
      description: "Karlsruhe, Germany.",
    },
  },
  projects: {
    main: {
      title: "I developed...",
      teckboard: {
        title: "TECKboards",
        description: `TECKboard is a digital real time information system that two friends of mine,Timo Peters and Yannik Hahn", developed. I spend really much hours developing a smartphone application for this system. By using the principe learning by doing, I learned much about planing, developing and communicating with the two developers of this system.`,
      },
      devlight: {
        title: "DevLights",
        description: `DevLights are the smart home LED Stripes for Developers. Together
                with two friends of mine, Jaan Springer and Timo Peters, we
                developed these lights during our project course informatic at
                Graf-Adolf-Gymnasium. From begin we learned new programming
                languages like C++ and worked at Hard and Software. `,
        readDoc: "READ DOCUMENTATION",
      },
      simpleQ: {
        title: "SimpleQ",
        description: `SimpleQ is a web application developed as part of a project at DHBW Karlsruhe, which allows asking and answering questions. 
        In the Software Engineering course, the entire process of product development was worked through. 
        This project made it possible to gain valuable experiences in collaboration and task coordination with people with whom I had previously worked little.`,
      },
      dbDelay: {
        title: "DB Delay",
        description: `DB Delay is an application that I developed privately to collect personal statistics about travels using railways, especially using the German state-owned Deutsche Bahn. 
        Timetable data from the Deutsche Bahn is stored and evaluated in a database together with manually entered data. The application was developed in TypeScript with NestJS and React. 
        It has nothing to do with the Deutsche Bahn itself but is purely a private application.`,
      },
      concertHistory: {
        title: "Concert History",
        description:
          'ConcertHistory is a native Android app that allows concertgoers to document the concerts they attend and access them at any time on their mobile devices. I developed the app as part of the module "Design of mobile applications" at the DHBW Karlsruhe together with Niklas Buse.',
      },
      moveTopia: {
        title: "MoveTopia",
        description:
          "MoveTopia is an innovative fitness tracking app that helps users effectively track and document their training progress. I developed the app together with Niklas Buse as part of a project at DHBW Karlsruhe. It offers a user-friendly interface to record training data and visualize progress.",
      },
      sensoration: {
        title: "Sensoration",
        description: `Sensoration is an Android app that was developed by me together with Tom Schütt as part of the "Distributed Systems" module at DHBW. It enables the collection and visualization of sensor data from distributed Android devices. 
          The app was developed in Kotlin with Jetpack Compose and offers a modern user interface.`,
      },
      skills: {
        title: "My skills",
        description: `This overview shows all programming languages and frameworks with which I am well or reasonably familiar.
                      My main experience has expanded from Java and JavaScript or TypeScript to frameworks for frontend development such as React and for backend development such as NestJS.
                      I have also gained experience in app development with React Native, Jetpack Compose, and Flutter.
                      I also have some knowledge in hardware development with C++ and the ESP8266 microcontroller.
                      My knowledge of databases ranges from MongoDB, MySQL to PostgreSQL.
                      My knowledge of programming languages and frameworks does not stand still, but I always try to keep learning.`,
      },
      learnMore: "Learn more",
    },
    devlight: {
      title: "DevLights",
      subtitle: "The smart home LED stripes for developers",
      ledstrip: {
        color: "Type color here",
        validity: "Only valid HEX or RGB colors supported",
        restart: "Restart random color",
      },
      github: "Visit Project Devlights on GitHub",
      summary: `DevLights are self-programmed smart home led stripes using the WS2812B chip for controlling the stripes. ${"\n\n"}
            There is a backend server developed with NestJS and MongoDB, a smartphone and desktop application for the management.`,
      openSourceNotice:
        "The project is open source. It can be viewed on GitHub.",
      projectTimelineTitle: "Project timeline",
      projectTimeline: [
        `In the year 2020 two friends of mine and me together decided to
                take a part of a project class that was offered by our school.
                After some ideas, brainstorming and discarding ideas which
                wouldn't fit the requirements, we decided to build a project that
                would be able to control LED stripes. The only requirements given
                by our school was that the project needed to include
                microcontrollers, so it cannot just be a simple website for
                example.`,
        ` In the first weeks we decided which hardware and software we would
                use at developing our project. We decided to use a BTF Lightning
                LED strip together with a ESP8266 Wifi Module as the hardware. For
                the server, which is running in the middle of hardware and user
                (software) connection, we decided to use a Raspberry Pi as
                hardware. The API should be written with NestJS in TypeScript and the ESP8266 with C++.`,
      ],
      last: `All in all developing this project over a year in school was a quite
            good expercience.
            The project is still on GitHub and theoretically everyone can use this system at theirs home.
            If you want to learn more, you can look at my term paper, which is only available in German.`,
    },
    teckboard: {
      title: "TECKboard",
      content:
        "TECKboard is a real time digital information system. It gives the ability to create individual boards for specific groups, so that everyone just gets the information they need and are allowed to see. In the background there is a secure user and invite system for convenient user management",
      projectDescription: {
        title: "How TECKboards have been developed",
        description: `The first idea for the TECKboards came from the student council of
                my school, the Graf-Adolf-Gymnasium, to replace the old analog
                information system of our school. The first version of the
                TECKboards was created in 2019. In the last two years the system has
                been developed further and further. At the end of 2019 I started
                developing a mobile application for our system. The mobile
                application was released in 2021 and can be downloaded in the known
                app stores of Apple and Google.`,
      },
      imageInfo: [],
      appDescription: [
        `  After publishing the app, it was
            used by the students and the teachers of our school, the
            Graf-Adolf-Gymnasium in Tecklenburg, North-Rhine-Westphalia.`,
      ],
      reactNative: {
        start: `The App was first developed with Android studio in Java. In March
                2020 we decided to develope directly for Android and iOS. For this
                we choose`,
        end: `, a multiplatform app developement framework.`,
      },
    },
  },
  footer: {
    contact: "Contact",
    others: "Others",
    projects: "Projects",
  },
  notFound: {
    title: "This content was not found",
  },
};
export default language;
