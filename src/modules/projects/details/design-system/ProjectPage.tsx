import { Box, Container, Theme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { ReactNode } from "react";
import { Technology } from "../../../../data/types/Project";
import { Technologies } from "../../../core/components/Technologies";
import Typing from "../../../core/components/Typing";
import { ScrollDownButton } from "../../../core/design-system/ScrollDownButton";

const PREFIX = "ProjectPage";

const classes = {
  root: `${PREFIX}-root`,
  heroSection: `${PREFIX}-heroSection`,
  textContainer: `${PREFIX}-textContainer`,
  textInnerContainer: `${PREFIX}-textInnerContainer`,
  title: `${PREFIX}-title`,
  text: `${PREFIX}-text`,
  section: `${PREFIX}-section`,
  sectionTitle: `${PREFIX}-sectionTitle`,
  subTitle: `${PREFIX}-subTitle`,
  link: `${PREFIX}-link`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`&.${classes.root}`]: {
    width: "100%",
    overflowX: "hidden",
    paddingBottom: theme.spacing(8),
  },

  [`& .${classes.heroSection}`]: {
    marginBottom: theme.spacing(6),
    padding: theme.spacing(2),
  },

  [`& .${classes.textContainer}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(4),
  },

  [`& .${classes.textInnerContainer}`]: {
    width: "100%",
    maxWidth: "800px",
    padding: theme.spacing(0, 2),
  },

  [`& .${classes.title}`]: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    fontSize: "2rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.75rem",
    },
  },

  [`& .${classes.text}`]: {
    color: theme.palette.text.secondary,
    fontSize: "1.1rem",
    lineHeight: 1.6,
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
  },

  [`& .${classes.subTitle}`]: {
    marginTop: theme.spacing(2),
    fontSize: "0.9rem",
    color: theme.palette.text.secondary,
    fontStyle: "italic",
  },

  [`& .${classes.link}`]: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    borderBottom: `1px solid ${theme.palette.secondary.main}`,
    transition: "opacity 0.2s",
    "&:hover": {
      opacity: 0.8,
    },
  },

  [`& .${classes.section}`]: {
    marginBottom: theme.spacing(6),
  },

  [`& .${classes.sectionTitle}`]: {
    position: "relative",
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(3),
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "60px",
      height: "3px",
      background: theme.palette.primary.main,
    },
  },
}));

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
  variant?: "h4" | "h5" | "h6";
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  children,
  variant = "h5",
}) => (
  <Box className={classes.section}>
    <Typography variant={variant} className={classes.sectionTitle}>
      {title}
    </Typography>
    {children}
  </Box>
);

export const TextSection: React.FC<{ text: string | string[] }> = ({
  text,
}) => (
  <Typography className={classes.text}>
    {Array.isArray(text)
      ? text.map((paragraph, i) => (
          <React.Fragment key={i}>
            {paragraph}
            {i < text.length - 1 && <Box mt={2} />}
          </React.Fragment>
        ))
      : text}
  </Typography>
);

interface ProjectPageProps {
  title: string;
  technologies?: Technology[];
  hero: ReactNode;
  projectDescription?: {
    title: string;
    description: string | string[];
    ref: React.RefObject<HTMLDivElement>;
  };
  sections?: {
    title: string;
    variant?: "h4" | "h5" | "h6";
    content: ReactNode;
  }[];
  footer?: ReactNode;
}

export default function ProjectPage({
  title,
  technologies,
  hero,
  projectDescription,
  sections = [],
  footer,
}: ProjectPageProps) {
  return (
    <Root className={classes.root}>
      <Box className={classes.heroSection}>
        <Box textAlign="center" mb={4}>
          <Typing text={title} />
        </Box>

        {hero}

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          {projectDescription?.ref && (
            <ScrollDownButton componentRef={projectDescription?.ref} />
          )}
        </div>
      </Box>

      <Container ref={projectDescription?.ref} maxWidth="lg">
        {projectDescription && (
          <ProjectSection title={projectDescription.title} variant="h4">
            <TextSection text={projectDescription.description} />
            {technologies && <Technologies technologies={technologies} />}
          </ProjectSection>
        )}

        {sections.map((section, index) => (
          <ProjectSection
            key={`section-${index}`}
            title={section.title}
            variant={section.variant}
          >
            {section.content}
          </ProjectSection>
        ))}

        {footer && <Box className={classes.section}>{footer}</Box>}
      </Container>
    </Root>
  );
}

export { classes, ProjectSection };
