export type Language = {
    languageInfo: {
        de: string;
        en: string;
    }
    home: {
        greeting: string;
        name: string;
        subtitle: string;
        me: Info,
        life: Info,
        teckdigital: {
            title: string;
            description: {
                start: string;
                middle: string;
                end: string;
            }
        },
        dhbw: Info
    };
    projects: {
        main: {
            title: string;
            teckboard: Info;
            devlight: Info & { readDoc: string };
            skills: Info;
            learnMore: string;
        },
        devlight: {
            title: string;
            subtitle: string;
            ledstrip: {
                color: string;
                validity: string;
                restart: string;
            };
            summary: string;
            openSourceNotice: string;
            github: string;
            projectTimelineTitle: string;
            projectTimeline: string[];
            last: string;
        },
        teckboard: {
            title: string;
            content: string;
            projectDescription: Info;
            imageInfo: string[];
            appDescription: string[],
            reactNative: {
                start: string;
                end: string;
            }
        }
    },
    footer: {
        contact: string;
        others: string;
        projects: string;
    }
}

export type Info = {
    title: string;
    description: string;
}