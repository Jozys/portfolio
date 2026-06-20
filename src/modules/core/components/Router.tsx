import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Projects from "../../projects/components/Projects";
import EmptyPage from "../design-system/EmptyPage";
import Menu from "./Menu";
import Home from "../../home/components/Home";
import DevLights from "../../devlights/components/DevLights";
import TECKboard from "../../teckdigital/components/TECKboard";
import React from "react";

export default function Router() {
  return (
    <BrowserRouter>
      <Menu />
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

        <Route path="*" element={<EmptyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
