import React from "react";
import ReactDOM from "react-dom/client";
import { MouseFollower } from "react-mouse-follower";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MouseFollower />
    <App />
  </React.StrictMode>
);
