import React from "react";
import "./App.css";
import Router from "./modules/core/components/Router";
import LanguageProvider from "./language/hooks/LanguageProvider";
import { StyledEngineProvider } from "@mui/material";
import ThemeProvider from "./theme/hooks";

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
