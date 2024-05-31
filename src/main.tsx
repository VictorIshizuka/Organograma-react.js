import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProviderCollaborator } from "./common/context/useContextCollaborator.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderCollaborator>
      <App />
    </ProviderCollaborator>
  </React.StrictMode>
);
