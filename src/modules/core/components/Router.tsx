import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Footer from "../components/Footer";
import Projects from "../../projects/components/Projects";
import EmptyPage from "../design-system/EmptyPage";
import Menu from "./Menu";
import Home from "../../home/components/Home";
import DevLights from "../../devlights/components/DevLights";
import TECKboard from "../../teckdigital/components/TECKboard";

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
        <Route exact path="/projects/teckboard">
          <TECKboard />
        </Route>
        <Route exact path="/projects/devlights">
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
