import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PortfolioSite from "./PortfolioSite";
import { Analytics } from "@vercel/analytics/next"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PortfolioSite />
    <Analytics />
  </React.StrictMode>
);
