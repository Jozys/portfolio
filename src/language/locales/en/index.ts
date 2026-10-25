import { getAge } from "../../../utils/utils";
import { Language } from "../../index";

export const language: Language = {
  header: {
    themeToggleLight: "Switch to light mode",
    themeToggleDark: "Switch to dark mode",
    languageToggle: "Zu Deutsch wechseln",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    tabs: {
      home: "Home",
      projects: "Projects",
      me: "About me",
    },
  },
  footer: {
    subtitle:
      "Software Engineer at SAP in Walldorf • Focused on Full Stack & Artificial Intelligence.",
    socialTitle: "Connect & Socials",
    privacyPolicy: "Privacy Policy",
  },
  home: {
    greeting: "Hello",
    name: "My name is Joshua!",
    subtitle: `Developer - ${getAge()} years old - Germany`,
    me: {
      title: "Who am I?",
      description:
        "I work as a Software Engineer at SAP in Walldorf, focusing on artificial intelligence and modern full-stack development. Outside of coding, I enjoy working out, spending time outdoors in nature, reading books, and traveling across Germany and Europe by train.",
    },
    sap: {
      title: "SAP SE",
      description:
        "Since October 2025, I have been working as a Software Engineer at SAP SE in Walldorf. There, I initially worked on the UI5 framework and now focus on developing web applications leveraging Artificial Intelligence.",
    },
    teckdigital: {
      title: "TECKdigital",
      description:
        "In December 2019, I joined the student company **[TECKdigital](https://teckdigital.de)**, which was founded in early 2019. At TECKdigital, I worked on the **[TECKboards](/projects/teckboard)**, gaining extensive practical experience in software development and teamwork.",
    },
    dhbw: {
      title: "Student@DHBW",
      description: `From September 2022 until the end of September 2025, I was a dual student in Computer Science at SAP in Walldorf and at the Baden-Württemberg Cooperative State University Karlsruhe (DHBW Karlsruhe).`,
    },
    action: {
      explore: "Explore selected work",
      contact: "Start a conversation",
    },
    portrait: {
      statusTitle: "Software Engineer @ SAP",
      statusDescription: "Walldorf • Full Stack & AI",
    },
    history: {
      subtitle: "Background & Journey",
      title: "Experience & Studies",
      sapTags: ["SAP", "Walldorf", "Germany"],
      dhbwTags: ["Dual Study", "SAP", "DHBW"],
      teckdigitalTags: [
        "Mobile Apps",
        "Software Development",
        "Web Development",
      ],
    },
    status: {
      title: "Current status",
      description: "Location, current role, and engineering focus.",
    },
  },
  status: {
    currentWork: {
      name: "Current Work",
      description: "SAP@Walldorf, Germany.",
    },
    currentFocus: {
      name: "Current Focus",
      description: "Artificial Intelligence and Full-Stack Development.",
    },
    location: {
      name: "Location",
      description: "Wiesloch, Germany.",
    },
  },
  projects: {
    main: {
      title: "I developed...",
      documentation: "Documentation",
      filter: {
        all: "All projects",
      },
      teckboard: {
        title: "TECKboards",
        shortDescription:
          "TECKboard is a digital real-time information system by the student company TECKdigital, for which I developed the companion smartphone application.",
        description: `TECKboard is a digital real-time information system, originally developed by two friends of mine, [Timo Peters](https://tipela.de) and [Yannik Hahn](https://h4hn.de), and realized as part of TECKdigital. I dedicated a lot of time to building a smartphone application for the existing system. Following a learning-by-doing approach, I learned a great deal about project planning, software development, and collaborating in a team.`,
      },
      devlight: {
        title: "DevLights",
        shortDescription:
          "DevLights are smart home LED strips for developers, which I built together with two friends.",
        description: `DevLights are smart home LED strips for developers. Together with my friends Jaan Springer and [Timo Peters](https://tipela.de), I developed these LED strips during our computer science project course at Graf-Adolf-Gymnasium. Along the way, we learned new technologies across both hardware and software development, such as the C++ programming language and designing custom PCBs for the LED controller.`,
        readDoc: "READ PAPER",
      },
      simpleQ: {
        title: "SimpleQ",
        shortDescription:
          "SimpleQ is a web application that allows users to ask and answer questions with the support of AI and the community.",
        description: `SimpleQ is a web application developed as part of a project at DHBW Karlsruhe that enables users to ask and answer questions supported by AI and the community. 
          In our Software Engineering module, we went through the entire product development lifecycle. Together with four other students, I accompanied the application from the initial idea and conception to its implementation.
          Through this project, I gained valuable experience in collaboration and task coordination with new team members, working together with [Benjamin](https://benniloidl.de), Tom, Leonard, and Manuel to bring the application to life.`,
      },
      dbDelay: {
        title: "DB Delay",
        shortDescription:
          "DB Delay is an application for collecting personal statistics on train journeys, especially with Deutsche Bahn.",
        description: `DB Delay is a personal application for recording and analyzing travel information with (Deutsche) Bahn. I developed it out of personal interest to document and analyze my own travel experiences. The application makes it possible to track and evaluate delays, travel times, and other relevant data. Built with React, it offers a user-friendly interface for visualizing the collected statistics.
          The backend is implemented in NestJS and uses a MySQL database to store trip information. For user management, a Keycloak server is used to ensure secure authentication and authorization.`,
      },
      concertHistory: {
        title: "Concert History",
        shortDescription:
          "Concert History is a native Android app that allows concertgoers to document the concerts they attend and access them anytime on the go.",
        description: `Concert History is a native Android app that allows concertgoers to document the concerts they attend and access them anytime on their mobile devices. I developed the app together with [Niklas Buse](https://niklas-buse.de) as part of the "Design of Mobile Applications" module at DHBW Karlsruhe.
          Built in Kotlin with Jetpack Compose, it features a modern user interface for viewing attended concerts, as well as searching and favoriting artists and shows. It uses the setlist.fm API to retrieve concert information. Since adding attended concerts is not supported via the public API, the app operates in read-only mode.`,
        betaTest: "Beta Test",
      },
      moveTopia: {
        title: "MoveTopia",
        shortDescription:
          "MoveTopia is an innovative fitness tracking app that helps users effectively track and document their training progress.",
        description: `MoveTopia is an innovative fitness tracking app that helps users effectively track and document their training progress. 
          I developed the app together with [Niklas Buse](https://niklas-buse.de) as part of our research project at DHBW Karlsruhe. 
          It offers a user-friendly interface to record workouts and visualize progress, combining functional activity tracking with thoughtful gamification elements to boost motivation for regular exercise. MoveTopia turns tracking fitness goals into an enjoyable and structured experience.`,
        playStore: "Play Store",
        appStore: "App Store",
      },
      sensoration: {
        title: "Sensoration",
        shortDescription:
          "Sensoration is an Android app for the distributed collection and visualization of sensor data.",
        description: `Sensoration is an Android app that I developed together with Tom Schütt as part of the "Distributed Systems" module at DHBW Karlsruhe. It enables the collection and visualization of sensor data across distributed Android devices. 
          Built in Kotlin with Jetpack Compose, the app features a modern user interface that allows viewing live sensor data and comparing readings across different devices. 
          Supported sensors include accelerometer, barometric pressure, gravity, full-scale decibel measurement, and significant pitch detection.`,
      },
      learnMore: "Learn more",
    },
    backToProjects: "Back to all projects",
    now: "Now",
    projectData: "Project Data",
    timeline: "Timeline",
    links: "Links & Resources",
    gallerySection: "Gallery",
    galleryTitle: "Insights & Screenshots",
    galleryEnlargeImage: "Enlarge image",
    lightboxClose: "Close detail view",
    lightboxPrev: "Previous image",
    lightboxNext: "Next image",
    lightboxSelectImage: "Select image",
    projectDescription: "Project Description",
    category: "Category",
    technologies: {
      title: "Architecture & Technology Stack",
      frontend: "Frontend",
      backend: "Backend",
      mobile: "Mobile",
      database: "Database",
      hardware: "Hardware",
      devops: "DevOps",
      other: "Other",
    },
  },
  milestones: {
    work_sap: {
      title: "Software Engineer",
      description:
        "Software Engineer at SAP SE in Walldorf, Germany. Focused on Full-Stack Development with Artificial Intelligence.",
      location: "SAP SE, Walldorf, Germany",
      badge: "Current Role",
    },
    study: {
      title: "Dual Study Program in Computer Science (B.Sc.)",
      description:
        "Dual study program in Computer Science in cooperation with SAP SE at the Baden-Württemberg Cooperative State University (DHBW) Karlsruhe. Gained a strong foundation in theoretical and practical computer science, combined with rotations across various development teams.",
      location: "DHBW Karlsruhe, Karlsruhe, Germany",
      badge: "Bachelor of Science",
    },
    school: {
      company: {
        title: "TECKdigital",
        description:
          "Through my involvement in the student company TECKdigital, I gained extensive practical experience in software development. I contributed to various projects, including the development of digital information boards (TECKboards) for schools, continuously expanding my practical engineering skills.",
        location: "Tecklenburg, NRW, Germany",
        badge: "Student Company",
      },
      abitur: {
        title: "Abitur",
        description:
          "Graduated from high school with advanced courses in Mathematics and Computer Science. By that time, I had already gained valuable experience through the student company and personal projects, which provided a strong foundation for my university studies.",
        location: "Graf-Adolf-Gymnasium, Tecklenburg, NRW",
        badge: "Abitur",
      },
    },
  },
  about: {
    me: {
      title: "About me",
      description: `I am Joshua Slaar, a **{{age}}-year-old** software engineer based in Germany. My passion for technology sparked in high school through self-driven projects and joining the student company **[TECKdigital](https://teckdigital.de)**. Following my dual studies in computer science at SAP and DHBW Karlsruhe, I now work as a software engineer at **SAP SE in Walldorf**.

Outside of programming, I enjoy spending time outdoors — whether walking and hiking around the Karlsruhe area and the Black Forest or exploring the region by bike. I also love spending time with friends, traveling by train across Germany and Europe, and regularly visiting my hometown of Brochterbeck in North Rhine-Westphalia.`,
      shortDescription:
        "Software Engineer at SAP in Walldorf passionate about modern web technologies, artificial intelligence, and software architecture.",
    },
    skills: {
      title: "Skills & Expertise",
      subtitle: "Technologies & Tools",
      description:
        "An overview of programming languages, frameworks, databases, and development tools I have worked with.",
    },
    quickFacts: {
      education: {
        label: "Education",
        title: "B.Sc. Computer Science",
        description: "DHBW Karlsruhe, Germany (2022 - 2025)",
      },
      work: {
        label: "Work",
        title: "Software Engineer",
        description: "SAP, Walldorf, Germany (2025 - present)",
      },
      location: {
        label: "Location & Origin",
        title: "Wiesloch & Brochterbeck",
        description: "Baden-Württemberg & North Rhine-Westphalia, Germany",
      },
      interests: {
        label: "Interests",
        title: "Sports, Travel & Technology",
        description:
          "Sports activities, traveling through Germany and Europe, and technological developments and innovations.",
      },
    },
  },
  notFound: {
    title: "This content was not found",
    description:
      "The requested page does not exist, has been moved, or is unavailable at this address.",
    code: "Error Code: 404",
  },
  ui5: {
    backToPortfolio: "Back to portfolio",
    tagline: "Built with OpenUI5 — Secret Mode 🛠️",
  },
  privacy: {
    title: "Privacy Policy",
    subtitle:
      "Information on the processing of personal data when visiting this website in accordance with Art. 13 GDPR.",
    lastUpdated: "Last updated: October 2026",
    defaultHostingProvider: "an external hosting provider",
    sections: [
      {
        title: "1. Controller",
        content: `The controller responsible for data processing on this website within the meaning of the General Data Protection Regulation (GDPR) is:

**Joshua Slaar**  
Email: [{{email}}]({{mailHref}})`,
      },
      {
        title: "2. Hosting (VPS) & DNS Resolution (Cloudflare)",
        content: `**Hosting and Server Log Files:** This website is operated on a self-managed virtual private server (VPS) provided by **{{hostingProvider}}** with a server location in **Germany (EU)** (under a data processing agreement pursuant to Art. 28 GDPR). When you visit or interact with this website, your browser connects directly to this web server. In doing so, technically required connection data (such as IP address, date and time of the request, requested URL, HTTP status code, and browser/operating system information) is processed to deliver the website and ensure system security. Server log files are stored for a maximum of 7 days and then automatically deleted.

**DNS-Only Management via Cloudflare:** Exclusively for domain name resolution (translating the domain name into the server's IP address), I use the authoritative nameservers of **Cloudflare, Inc.** in **"DNS Only"** mode. **No HTTP/HTTPS website traffic** is routed through Cloudflare, and no requests are sent to Cloudflare when you interact with the website. Only during the initial DNS lookup (which is typically performed by your internet service provider's DNS resolver) does Cloudflare process technical DNS query data (requested domain name, timestamp, DNS record type, and the IP address of the querying DNS resolver) and evaluate it statistically in **Cloudflare DNS Analytics** ([Cloudflare's Privacy Policy](https://www.cloudflare.com/privacypolicy/)).

**Purpose and Legal Basis:** This processing is carried out for the technical provision of the website, IT security, and reliable domain availability based on my legitimate interest pursuant to **Art. 6(1)(f) GDPR**.`,
      },
      {
        title: "3. Local Storage & Local Fonts",
        content: `This website does **not use any tracking, analytics, or marketing cookies** and does not use external web analytics services.

To remember your explicitly selected display preferences, this website only uses your browser's **Local Storage**:

- **\`isDark\`**: Stores your preference for the light or dark color theme.
- **\`language\`**: Stores your selected language preference (\`de\` or \`en\`).

These values remain strictly local in your browser, are never transmitted to any server, and can be cleared at any time via your browser settings. Storage is based on **Sec. 25(2) No. 2 TDDDG** and **Art. 6(1)(f) GDPR** to provide a user-friendly website experience.

All fonts and icons used on this website are bundled locally; visiting this website does not establish any connection to external font servers (such as Google Fonts).`,
      },
      {
        title: "4. Contact via Email & External Links",
        content: `**Contact via Email:** When you contact me by email, the information you provide (in particular your email address, name, and message content) will be processed solely for the purpose of handling your inquiry (legal basis: **Art. 6(1)(f) GDPR** or **Art. 6(1)(b) GDPR** for pre-contractual inquiries). The data will be deleted as soon as your inquiry has been fully processed and provided no statutory retention obligations apply.

**External Links:** This website contains links to external third-party websites (e.g., GitHub, LinkedIn, Instagram, or project links). A connection to the respective destination server is only established when you actively click on an external link; the privacy policies of the respective operator apply there.`,
      },
      {
        title: "5. Your Rights as a Data Subject",
        content: `Insofar as personal data is processed during your visit or when contacting me, you have the right to **access** (Art. 15), **rectification** (Art. 16), **erasure** (Art. 17), **restriction of processing** (Art. 18), **data portability** (Art. 20), and **objection** (Art. 21 GDPR) in accordance with statutory provisions (in particular taking into account **Art. 11 GDPR** where identifying you solely from technical connection data is not possible). You also have the **right to lodge a complaint** with a data protection supervisory authority (Art. 77 GDPR).`,
      },
    ],
  },
};
export default language;
