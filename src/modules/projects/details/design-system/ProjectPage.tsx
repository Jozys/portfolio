import { Box, Container, Theme, Typography, keyframes } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { ReactNode } from "react";
import { Technology } from "../../../../data/types/Project";
import { Technologies } from "../../../core/components/Technologies";
import Typing from "../../../core/components/Typing";
import { ScrollDownButton } from "../../../core/design-system/ScrollDownButton";

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

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
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        theme.palette.mode === "dark"
          ? "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)"
          : "radial-gradient(circle, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
      opacity: 0.5,
      pointerEvents: "none",
      zIndex: 0,
    },
  },

  [`& .${classes.heroSection}`]: {
    marginBottom: theme.spacing(6),
    padding: theme.spacing(2),
    position: "relative",
    zIndex: 1,
  },

  [`& .${classes.textContainer}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    position: "relative",
    zIndex: 1,
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
    position: "relative",
    zIndex: 1,
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

const DecorativeAccent = styled(Box)(({ theme }) => ({
  position: "absolute",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  opacity: 0.15,
  pointerEvents: "none",
  borderRadius: theme.spacing(2),
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
      <DecorativeAccent
        sx={{
          width: { xs: "60px", sm: "80px", md: "120px" },
          height: { xs: "60px", sm: "80px", md: "120px" },
          top: { xs: "5%", md: "8%" },
          right: { xs: "5%", md: "10%" },
          animation: `${slideInRight} 1s ease-out`,
        }}
      />
      <DecorativeAccent
        sx={{
          width: { xs: "40px", sm: "60px", md: "80px" },
          height: { xs: "40px", sm: "60px", md: "80px" },
          bottom: { xs: "20%", md: "25%" },
          left: { xs: "5%", md: "8%" },
          animation: `${slideInLeft} 1.2s ease-out`,
        }}
      />
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
