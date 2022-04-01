import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PageNumberContext from "./context/PageNumberContext";

ReactDOM.render(
  <React.StrictMode>
    <PageNumberContext>
      <App />
    </PageNumberContext>
  </React.StrictMode>,
  document.getElementById("root")
);
