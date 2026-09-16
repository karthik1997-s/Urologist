import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import App from "./App";
import AboutPage from "./pages/AboutPage";
import ConditionsPage from "./pages/ConditionsPage";
import ConditionPage from "./pages/ConditionPage";
import TreatmentsPage from "./pages/TreatmentsPage";
import TreatmentPage from "./pages/TreatmentPage";
import EducationPage from "./pages/EducationPage";
import EducationArticlePage from "./pages/EducationArticlePage";
import ResearchPage from "./pages/ResearchPage";

import "./index.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<App />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/conditions"
          element={<ConditionsPage />}
        />

        <Route
          path="/conditions/:slug"
          element={<ConditionPage />}
        />

        <Route
          path="/treatments"
          element={<TreatmentsPage />}
        />

        <Route
          path="/treatments/:slug"
          element={<TreatmentPage />}
        />

        <Route
          path="/education"
          element={<EducationPage />}
        />

        <Route
          path="/education/:slug"
          element={<EducationArticlePage />}
        />

        <Route
          path="/patient-education"
          element={<EducationPage />}
        />

        <Route
          path="/research"
          element={<ResearchPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);