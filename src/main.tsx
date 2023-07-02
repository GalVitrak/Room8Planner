import React from "react";
import ReactDOM from "react-dom/client";
import MainLayout from "./Components/LayoutArea/MainLayout/MainLayout";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </React.StrictMode>
);
