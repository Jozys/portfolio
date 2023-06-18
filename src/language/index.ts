export type Language = {
    home: {
        greeting: string;
        name: string;
        subtitle: string;
        me: Info,
        life: Info,
        teckdigital: Info,
        dhbw: Info
    };
    projects: {
        main: {
            title: string;
            teckboard: Info;
            devlight: Info;
            skills: Info;
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
            projectTimeline: string[];
            last: string;
        },
        teckboard: {
            title: string;
            content: string;
            projectDescription: Info;
            imageInfo: string[];
            appDescription: string[]
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