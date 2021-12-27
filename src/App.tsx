import React from "react";
import "./App.css";
import Router from "./components/Router";
import ThemeProvider from "./components/ThemeProvider";

function App() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
