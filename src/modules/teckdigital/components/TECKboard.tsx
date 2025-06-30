import {
  Box,
  Container,
  Grid,
  Paper,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Tilt from "react-parallax-tilt";
import OldBoard from "../../../assets/projects/teckboard/firstTECKboard.png";
import NewBoard from "../../../assets/projects/teckboard/newBoard.png";
import App from "../../../assets/projects/teckboard/teckboard_app.png";
import { useLanguage } from "../../../language/hooks";
import Typing from "../../core/components/Typing";
import MockTECKboard from "./MockTECKboard";

const PREFIX = "TECKboard";

const classes = {
  textContainer: `${PREFIX}-textContainer`,
  textInnerContainer: `${PREFIX}-textInnerContainer`,
  title: `${PREFIX}-title`,
  text: `${PREFIX}-text`,
  imagesContainer: `${PREFIX}-imagesContainer`,
  singleImage: `${PREFIX}-singleImage`,
  subTitle: `${PREFIX}-subTitle`,
  link: `${PREFIX}-link`,
  section: `${PREFIX}-section`,
  sectionTitle: `${PREFIX}-sectionTitle`,
  heroSection: `${PREFIX}-heroSection`,
  root: `${PREFIX}-root`,
  imageTitle: `${PREFIX}-imageTitle`,
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

  [`& .${classes.imagesContainer}`]: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: theme.spacing(3),
    marginBottom: theme.spacing(6),

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  [`& .${classes.singleImage}`]: {
    flex: 1,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0 6px 12px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 12px 24px rgba(0,0,0,0.12)",
    },
  },

  [`& .${classes.imageTitle}`]: {
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    color: theme.palette.primary.main,
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
export default function TECKboard() {
  const { language } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Root className={classes.root}>
      <Box className={classes.heroSection}>
        <Box textAlign="center" mb={4}>
          <Typing text={language.projects.teckboard.title} />
        </Box>

        <MockTECKboard />
      </Box>

      <Container maxWidth="lg">
        <Box className={classes.section}>
          <Typography variant="h4" className={classes.sectionTitle}>
            {language.projects.teckboard.projectDescription.title}
          </Typography>

          <Typography className={classes.text}>
            {language.projects.teckboard.projectDescription.description}
          </Typography>
        </Box>

        {/* Evolution der TECKboard */}
        <Box className={classes.section}>
          <Typography variant="h5" className={classes.sectionTitle}>
            {language.projects.teckboard.evolution}
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} className={classes.singleImage}>
                <Typography variant="h6" className={classes.imageTitle}>
                  First Version (2019)
                </Typography>

                <Tilt
                  tiltMaxAngleX={isMobile ? 5 : 10}
                  tiltMaxAngleY={isMobile ? 5 : 10}
                  scale={1.05}
                  transitionSpeed={1500}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    component="img"
                    src={OldBoard}
                    alt="The first version of TECKboards"
                    sx={{
                      borderRadius: 2,
                      width: "100%",
                      maxWidth: "350px",
                      height: "auto",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    }}
                    draggable={false}
                  />
                </Tilt>

                <Typography className={classes.subTitle}>
                  The first version of the TECKboard, created in 2019
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={0} className={classes.singleImage}>
                <Typography variant="h6" className={classes.imageTitle}>
                  Current Version (2020)
                </Typography>

                <Tilt
                  tiltMaxAngleX={isMobile ? 5 : 10}
                  tiltMaxAngleY={isMobile ? 5 : 10}
                  tiltReverse
                  scale={1.05}
                  transitionSpeed={1500}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    component="img"
                    src={NewBoard}
                    alt="The second version of TECKboards"
                    sx={{
                      borderRadius: 2,
                      width: "100%",
                      maxWidth: "350px",
                      height: "auto",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    }}
                    draggable={false}
                  />
                </Tilt>

                <Typography className={classes.subTitle}>
                  The current version, deployed in our school since 2020
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box className={classes.section}>
          <Typography variant="h5" className={classes.sectionTitle}>
            {language.projects.teckboard.mobileEvolution}
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper elevation={0} className={classes.singleImage}>
                <Typography variant="h6" className={classes.imageTitle}>
                  Prototype Version
                </Typography>

                <Tilt
                  tiltMaxAngleX={isMobile ? 5 : 10}
                  tiltMaxAngleY={isMobile ? 5 : 10}
                  scale={1.05}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    sx={{
                      width: "30%",
                      height: "400px",
                      backgroundColor: "rgba(200,200,200,0.2)",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography variant="body2" color="textSecondary">
                      Image not available
                    </Typography>
                  </Box>
                </Tilt>

                <Typography className={classes.subTitle}>
                  The first prototype of the mobile application
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={0} className={classes.singleImage}>
                <Typography variant="h6" className={classes.imageTitle}>
                  Released Version (v.1.1.8)
                </Typography>

                <Tilt
                  tiltMaxAngleX={isMobile ? 5 : 10}
                  tiltMaxAngleY={isMobile ? 5 : 10}
                  tiltReverse
                  scale={1.05}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Box
                    component="img"
                    src={App}
                    alt="The released version of TECKboards mobile application"
                    sx={{
                      borderRadius: 2,
                      width: "auto",
                      height: "400px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    }}
                    draggable={false}
                  />
                </Tilt>

                <Typography className={classes.subTitle}>
                  The current version of the mobile application (v.1.1.8)
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        <Box className={classes.section}>
          <Box
            mb={2}
            pb={2}
            borderBottom={`1px solid ${theme.palette.divider}`}
          >
            <Typography className={classes.text}>
              {language.projects.teckboard.reactNative.start}{" "}
              <a
                className={classes.link}
                href="https://reactnative.dev"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Native
              </a>
              {language.projects.teckboard.reactNative.end}
            </Typography>
          </Box>

          <Typography className={classes.text}>
            {language.projects.teckboard.appDescription[0]}
          </Typography>
        </Box>
      </Container>
    </Root>
  );
}
