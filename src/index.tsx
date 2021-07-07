import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { SidebarProvider } from "./contexts/SidebarContext";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
