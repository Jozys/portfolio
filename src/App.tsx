import { StyledEngineProvider } from "@mui/material";
import "./App.css";
import LanguageProvider from "./language/hooks/LanguageProvider";
import Router from "./modules/core/components/Router";
import ThemeProvider from "./theme/hooks";

function App() {
  return (
    <StyledEngineProvider injectFirst>
        <LanguageProvider>
          <ThemeProvider>
            <Router />
          </ThemeProvider>
        </LanguageProvider>
    
    </StyledEngineProvider>
  );
}

export default App;
