import React, { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "../pages/home/Home";
import EmptyPage from "./EmptyPage";
import Footer from "./Footer";
import Header from "./Header";

const Projects = React.lazy(() => import("../pages/projects/Projects"));
const About = React.lazy(() => import("../pages/about/About"));
const ProjectDetails = React.lazy(
  () => import("../pages/projectDetails/ProjectDetails"),
);

// Secret UI5 showcase — lazily loaded so the (heavy) SAP UI5 bundle only ships
// to visitors who discover the hidden "/ui5" route.
const UI5Showcase = React.lazy(() => import("../ui5/components/UI5Showcase"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
    if (pathname.startsWith("/projects")) {
      return "projects";
    }
    if (pathname.startsWith("/me") || pathname.startsWith("/about")) {
      return "me";
    }
    return "home";
  };

  return (
    <>
      <ScrollToTop />
      {!isUI5 && (
        <Header
          currentTab={getCurrentTabFromPathname(pathname)}
          tabs={["home", "projects", "me"]}
        />
      )}
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/me" element={<About />} />
        <Route path="/about" element={<Navigate to="/me" replace />} />

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
