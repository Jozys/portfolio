import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import LanguageProvider from "./language/hooks/LanguageProvider";
import Router from "./modules/core/Router";
import ThemeProvider from "./theme/hooks";
import ProjectsProvider from "./modules/hooks/projects/ProjectsProvider";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <LanguageProvider>
        <ThemeProvider>
          <ProjectsProvider>
            <Router />
          </ProjectsProvider>
        </ThemeProvider>
      </LanguageProvider>
    </StyledEngineProvider>
  );
}

export default App;
