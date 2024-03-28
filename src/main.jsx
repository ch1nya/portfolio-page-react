import React from "react";
import { createRoot } from "react-dom";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter basename='/portfolio-page-react'>
        <App />
    </BrowserRouter>
);
