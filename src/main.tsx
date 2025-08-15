import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";               // <- LATAA TAILWINDIN
import PortfolioSite from "./PortfolioSite"; // tai: import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PortfolioSite />               {/* tai <App /> */}
  </React.StrictMode>
);
