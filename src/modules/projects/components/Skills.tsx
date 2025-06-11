import { Chip, Grid, Paper, Theme, Typography, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import { getTechnologiesByType } from "../../../data/Technologies";
import { TechnologyType } from "../../../data/types/Project";
import { useLanguage } from "../../../language/hooks/index";
import { contrastBlack } from "../../../modules/core/utils/textContrast";

const PREFIX = "Skills";

const classes = {
  root: `${PREFIX}-root`,
  iconContainer: `${PREFIX}-iconContainer`,
  skillContainer: `${PREFIX}-skillContainer`,
  categoryContainer: `${PREFIX}-categoryContainer`,
  categoryTitle: `${PREFIX}-categoryTitle`,
  techItem: `${PREFIX}-techItem`,
  text: `${PREFIX}-text`,
  info_text: `${PREFIX}-info_text`,
};

const Root = styled("div")(({ theme }: { theme: Theme }) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(6),
    width: "100%",
  },

  [`& .${classes.iconContainer}`]: {
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  [`& .${classes.skillContainer}`]: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: theme.spacing(3),
    width: "90%",
    maxWidth: "1200px",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
    },
  },

  [`& .${classes.categoryContainer}`]: {
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.03)",
    boxShadow: "0 3px 5px rgba(0,0,0,0.1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
    },
  },

  [`& .${classes.categoryTitle}`]: {
    color: theme.palette.secondary.main,
    borderBottom: `1px solid ${theme.palette.divider}`,
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    fontSize: "1.2rem",
  },

  [`& .${classes.techItem}`]: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(0.5),
    padding: theme.spacing(1),
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(245, 245, 245, 0.9)",
    borderRadius: theme.spacing(1),
    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.05)",
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255, 255, 255, 0.15)"
          : "rgba(255, 255, 255, 0.85)",
    },
  },

  [`& .${classes.text}`]: {
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    marginBottom: theme.spacing(2),
  },

  [`& .${classes.info_text}`]: {
    fontSize: "1.1rem",
    width: window.innerWidth < 1000 ? "90%" : "70%",
    maxWidth: "800px",
    overflowWrap: "break-word",
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
    textAlign: "center",
    marginTop: theme.spacing(4),
  },
}));

export default function Skills(): JSX.Element {
  const { language } = useLanguage();
  const technologyTypes = Object.keys(TechnologyType) as Array<
    keyof typeof TechnologyType
  >;
  const theme = useTheme();

  // Funktion zum Übersetzen der Technologietypen
  const getCategoryTitle = (techType: string): string => {
    // Hier können Sie die Übersetzungen aus Ihrer Sprachdatei verwenden
    // Falls keine Übersetzung vorhanden ist, wird der Typ formatiert angezeigt
    const typeKey = `projects.technologies.categories.${techType.toLowerCase()}`;
    return language[typeKey] || formatTechType(techType);
  };

  // Formatiert den Technologietyp für eine schönere Anzeige
  const formatTechType = (techType: string): string => {
    return techType
      .replace(/([A-Z])/g, " $1")
      .trim()
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <Root className={classes.root}>
      <Typography variant="h3" className={classes.text}>
        {language.projects.main.skills.title}
      </Typography>

      <div className={classes.skillContainer}>
        {technologyTypes.map((techType) => {
          const technologies = getTechnologiesByType(TechnologyType[techType]);
          if (technologies.length === 0) return null;

          return (
            <Paper
              elevation={0}
              className={classes.categoryContainer}
              key={techType}
            >
              <Typography className={classes.categoryTitle}>
                {getCategoryTitle(techType)}
              </Typography>

              <Grid container spacing={1}>
                {technologies.map((tech) => (
                  <Grid item key={tech.name}>
                    <Chip
                      avatar={
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          style={{ width: 24, height: 24, padding: 2 }}
                        />
                      }
                      label={
                        <Typography
                          style={{
                            color: tech.color || "inherit",
                            filter:
                              theme.palette.mode === "light"
                                ? "contrast(0.5)"
                                : "none",
                          }}
                          variant="body2"
                        >
                          {tech.name}
                        </Typography>
                      }
                      className={classes.techItem}
                      onClick={() => tech.link && window.open(tech.link)}
                      style={{
                        color: tech.color || "inherit",
                        filter:
                          theme.palette.mode === "light"
                            ? "contrast(1.2)"
                            : "none",
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          );
        })}
      </div>

      <Typography className={classes.info_text}>
        {language.projects.main.skills.description}
      </Typography>
    </Root>
  );
}
