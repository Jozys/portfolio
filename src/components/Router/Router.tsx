import { makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "../Home";
import {
  HomeOutlined,
  FaceOutlined,
  CodeOutlined,
  Warning,
} from "@material-ui/icons/";
import Projects from "../Projects";
import Me from "../Me";
import { contrastBlack } from "../../utils/textContrast";
import ThemeSwitcher from "../ThemeSwitcher";
import Footer from "../Footer";
import ProjectRouter from "./ProjectRouter";

const useStyles = makeStyles((theme: Theme) => ({
  navBarContainer: {
    display: "flex",
    flex: 1,
    alignSelf: "center",
    alignItems: "space-between",
  },
  navBar: {
    alignContent: "space-between",
    display: "flex",
    flex: 6,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  themeSwitcher: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
  icon: {
    color: contrastBlack(theme.palette.primary.main) ? "#000" : "#fff",
  },
  warning: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  warningIcon: {
    alignSelf: "center",
  },
  text: {
    marginLeft: 10,
    fontSize: 25,
    color: contrastBlack(theme.palette.background.default) ? "#000" : "#fff",
  },
}));

export interface RouterProps {}
export default function Router(props: RouterProps): JSX.Element {
  const styles = useStyles();
  return (
    <BrowserRouter>
      <nav className={styles.navBarContainer}>
        <ul className={styles.navBar}>
          <Link to="/home">
            <HomeOutlined fontSize="large" className={styles.icon} />
          </Link>
          <Link to="/projects/home">
            <CodeOutlined fontSize="large" className={styles.icon} />
          </Link>
          <ThemeSwitcher />
        </ul>
      </nav>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/projects/">
          <ProjectRouter />
        </Route>
        <Route>
          <div className={styles.warning}>
            <Warning fontSize="large" className={styles.warningIcon} />
            <Typography className={styles.text}>
              404 | page not found
            </Typography>
          </div>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
