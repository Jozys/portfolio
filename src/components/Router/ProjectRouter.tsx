import { makeStyles, Theme, Typography, useTheme } from "@material-ui/core";
import { Warning } from "@material-ui/icons";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { contrastBlack } from "../../utils/textContrast";
import Footer from "../Footer";
import Projects from "../Projects";
import TECKboard from "../TECKboard";

const useStyles = makeStyles((theme: Theme) => ({
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
    fontWeight: "bold",
  },
}));

export default function ProjectRouter(): JSX.Element {
  const styles = useStyles();
  const theme = useTheme();
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/projects" to="/projects/home" />
        <Route exact path="/projects/home">
          <Projects />
        </Route>
        <Route exact path="/projects/teckboard">
          <TECKboard />
        </Route>
        <Route path="/projects/devlights">
          <p> Not implemented yet</p>
        </Route>
        <Route>
          <div className={styles.warning}>
            <Warning
              htmlColor={
                contrastBlack(theme.palette.background.default)
                  ? "#000"
                  : "#fff"
              }
              fontSize="large"
              className={styles.warningIcon}
            />
            <Typography className={styles.text}>
              404 | page not found
            </Typography>
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
