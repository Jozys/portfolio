import { makeStyles, Theme } from "@material-ui/core";
import React from "react";
import "./App.css";
import Router from "./components/Router";
import { default as myTheme } from "./components/theme";
import ThemeProvider from "./components/ThemeProvider";

function App() {




  return (
    <>

      <ThemeProvider>

        <Router />
      </ThemeProvider>

    </>
  );
}

export default App;
