/**
 * Represents a project with its details.
 * @typedef {Object} Project
 * @property {string} name - The name of the project.
 * @property {string} description - A brief description of the project.
 * @property {React.ReactNode} image - The image associated with the project.
 * @property {Technology[]} technologies - An array of technologies used in the project.
 * @property {Object} links - An object containing various links related to the project.
 * 
 * An Example representation of a project:
 * ```typescript
 *  example: {
    name: "Example Project",
    description: "This is an example project description.",
    image: <img src="https://example.com/image.png" alt="Example Project" />,
    technologies: [
      getTechnology("<technology>")!,
      getTechnology("typescript")!,
      getTechnology("mui")!,
    ],
    links: {
      github: {
        url: "",
      },
    },
  },
 * ```
 */
export interface Project {
  name: string;
  description: string | React.ReactNode;
  image: React.ReactNode;
  technologies: Technology[];
  links: {
    [key: string]: Link;
    // Allow additional links
  };
}

export interface Link {
  url: string;
  icon?: string | React.ReactNode; // Optional icon URL for the link
  label: string; // Label for the link, e.g., "GitHub", "Demo"
}

export interface Technology {
  name: string;
  icon: string; // URL to the icon image
  link?: string; // Optional link to the technology's website or documentation
  color?: string; // Optional color for the technology
}
