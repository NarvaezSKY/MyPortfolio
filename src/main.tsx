import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import { App } from "./app/shared/router";
import { BrowserRouter } from "react-router-dom";
import './config/i18next.config'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <App />
    </BrowserRouter>
  </StrictMode>
);
