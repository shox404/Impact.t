import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App";

import "./global.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
