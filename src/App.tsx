import React from "react";
import "./App.css";
import Router from "./components/Router";
import ThemeProvider from "./components/ThemeProvider";
import LanguageProvider from "./components/LanguageProvider/LanguageProvider";

function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <LanguageProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
