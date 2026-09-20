import React from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import DevLights from "../../devlights/components/DevLights";
import Home from "../../home/components/Home";
import Projects from "../../projects/components/Projects";
import TECKboard from "../../teckdigital/components/TECKboard";
import V4Footer from "../../v4/core/Footer";
import Header from "../../v4/core/Header";
import Footer from "../components/Footer";
import EmptyPage from "../design-system/EmptyPage";
import Menu from "./Menu";
// Temporary imports for v4 routes
import HomeV4 from "../../v4/pages/home/Home";
import ProjectsV4 from "../../v4/pages/projects/Projects";
import ProjectDetails from "../../v4/pages/projectDetails/ProjectDetails";

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

  const getCurrentTabFromPathname = (
    pathname: string,
  ): "home" | "projects" | "me" => {
    switch (pathname) {
      case "/v4/home":
        return "home";
      case "/v4/projects":
      case "/v4/projects/home":
        return "projects";
      case "/v4/me":
        return "me";
      default:
        return "home";
    }
  };

  return (
    <>
      {!isUI5 &&
        (pathname.includes("v4") ? (
          <Header
            currentTab={
              getCurrentTabFromPathname(pathname) as "home" | "projects" | "me"
            }
            tabs={["home", "projects", "me"]}
          />
        ) : (
          <Menu />
        ))}
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

        {/** Starting a v4 version of this project */}
        <Route path="/v4" element={<Navigate to="/v4/home" replace />} />
        <Route path="/v4/home" element={<HomeV4 />} />

        <Route path="/v4/projects" element={<ProjectsV4 />} />
        <Route path="/v4/projects/:id" element={<ProjectDetails />} />

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
      {!isUI5 && (pathname.includes("v4") ? <V4Footer /> : <Footer />)}
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
