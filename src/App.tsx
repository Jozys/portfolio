import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import LanguageProvider from "./language/hooks/LanguageProvider";
import Router from "./modules/core/components/Router";
import ThemeProvider from "./theme/hooks";
import React from "react";

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
