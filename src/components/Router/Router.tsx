import { makeStyles, Typography } from "@material-ui/core";
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

const useStyles = makeStyles(() => ({
  navBar: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  icon: {
    color: "#fff",
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
    fontWeight: "bold",
  },
}));

export interface RouterProps {}
export default function Router(props: RouterProps): JSX.Element {
  const styles = useStyles();
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <div className={styles.navBar}>
            <Link to="/home">
              <HomeOutlined fontSize="large" className={styles.icon} />
            </Link>
            <Link to="/projects">
              <CodeOutlined fontSize="large" className={styles.icon} />
            </Link>
            <Link to="/me">
              <FaceOutlined fontSize="large" className={styles.icon} />
            </Link>
          </div>
        </ul>
      </nav>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/me">
          <Me />
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
    </BrowserRouter>
  );
}
