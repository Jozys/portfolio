import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "../components/Footer";
import Projects from "../../projects/components/Projects";
import EmptyPage from "../design-system/EmptyPage";
import Menu from "./Menu";
import Home from "../../home/components/Home";
import DevLights from "../../devlights/components/DevLights";
import TECKboard from "../../teckdigital/components/TECKboard";
import React from "react";

// Secret UI5 showcase — lazily loaded so the (heavy) SAP UI5 bundle only ships
// to visitors who discover the hidden "/ui5" route.
const UI5Showcase = React.lazy(
  () => import("../../ui5/components/UI5Showcase"),
);

const UI5_PATH = "/ui5";

function UI5LoadingFallback() {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      Loading UI5...
    </div>
  );
}

function AppShell() {
  const { pathname } = useLocation();
  // The UI5 showcase renders as a full-screen Fiori takeover, so the regular
  // MUI menu and footer are hidden while it is active.
  const isUI5 = pathname === UI5_PATH;

  return (
    <>
      {!isUI5 && <Menu />}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/projects"
          element={<Navigate to="/projects/home" replace />}
        />
        <Route path="/projects/home" element={<Projects />} />
        <Route path="/projects/teckboard" element={<TECKboard />} />
        <Route path="/projects/devlights" element={<DevLights />} />

        <Route
          path={UI5_PATH}
          element={
            <React.Suspense fallback={<UI5LoadingFallback />}>
              <UI5Showcase />
            </React.Suspense>
          }
        />

        <Route path="*" element={<EmptyPage />} />
      </Routes>
      {!isUI5 && <Footer />}
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
