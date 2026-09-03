import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import AboutPage from "./pages/AboutPage";
import ConditionPage from "./pages/ConditionPage";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <BrowserRouter>
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
          path="/conditions/:slug"
          element={<ConditionPage />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);