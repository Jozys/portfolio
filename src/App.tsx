import React from "react";
import "./App.css";
import Router from "./components/Router";
import ThemeProvider from "./components/ThemeProvider";
import LanguageProvider from "./components/LanguageProvider/LanguageProvider";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <div style={{ height: "100%", width: "100%" }}>
        <LanguageProvider>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </LanguageProvider>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
