import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProgramProvider } from "./context/ProgramProvider.jsx";
import { NewsProvider } from "./context/NewsProvider.jsx";
import { TipsProvider } from "./context/TipsProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ProgramProvider>
    <NewsProvider>
      <TipsProvider>
        <App />
      </TipsProvider>
    </NewsProvider>
  </ProgramProvider>
  // </React.StrictMode>
);
