import { Theme, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CodeOutlined, HomeOutlined, Warning } from "@mui/icons-material/";
import React from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import { contrastBlack } from "../../utils/textContrast";
import DevLights from "../DevLights";
import Footer from "../Footer";
import Home from "../Home";
import Projects from "../Projects";
import TECKboard from "../TECKboard";
import ThemeSwitcher from "../ThemeSwitcher";
import LanguageChoose from "../LanguageChoose";

const PREFIX = "Router";

const classes = {
  navBarContainer: `${PREFIX}-navBarContainer`,
  navBar: `${PREFIX}-navBar`,
  themeSwitcher: `${PREFIX}-themeSwitcher`,
  icon: `${PREFIX}-icon`,
  warning: `${PREFIX}-warning`,
  warningIcon: `${PREFIX}-warningIcon`,
  text: `${PREFIX}-text`,
};

const StyledRouter = styled("div")(({ theme }: { theme: Theme }) => ({
  [`& .${classes.navBarContainer}`]: {
    display: "flex",
    flex: 1,
    alignSelf: "center",
    alignItems: "space-between",
  },

  [`& .${classes.navBar}`]: {
    alignContent: "space-between",
    display: "flex",
    flex: 6,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },

  [`& .${classes.themeSwitcher}`]: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },

  [`& .${classes.icon}`]: {
    color: contrastBlack(theme.palette.primary.main) ? "#000" : "#fff",
  },

  [`& .${classes.warning}`]: {
    height: window.innerHeight * 0.5,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  [`& .${classes.warningIcon}`]: {
    alignSelf: "center",
    color: contrastBlack(theme.palette.primary.main) ? "#000" : "#fff",
  },

  [`& .${classes.text}`]: {
    marginLeft: 10,
    fontSize: 25,
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
}));

export interface RouterProps {}
export default function Router(props: RouterProps): JSX.Element {
  return (
    <StyledRouter>
      <BrowserRouter>
        <nav className={classes.navBarContainer}>
          <ul className={classes.navBar}>
            <Link to="/home">
              <HomeOutlined fontSize="large" className={classes.icon} />
            </Link>
            <Link to="/projects">
              <CodeOutlined fontSize="large" className={classes.icon} />
            </Link>
            <ThemeSwitcher />
          </ul>
          <LanguageChoose />
        </nav>

        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home">
            <Home />
          </Route>
          <Redirect exact from="/projects" to="/projects/home" />
          <Route path="/projects/home">
            <Projects />
          </Route>
          <Route exact path="/project/teckboard">
            <TECKboard />
          </Route>
          <Route exact path="/project/devlights">
            <DevLights />
          </Route>

          <Route>
            <div className={classes.warning}>
              <Warning fontSize="large" className={classes.warningIcon} />
              <Typography className={classes.text}>
                404 | page not found
              </Typography>
            </div>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </StyledRouter>
  );
}
