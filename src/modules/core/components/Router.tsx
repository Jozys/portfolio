import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DevLights from "../../../components/DevLights";
import Footer from "../components/Footer";
import Projects from "../../projects/components/Projects";
import TECKboard from "../../../components/TECKboard";
import EmptyPage from "../design-system/EmptyPage";
import Menu from "./Menu";
import Home from "../../home/components/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Menu />
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
          <EmptyPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
