import React from "react";
import * as ReactDOM from 'react-dom/client';
import Home from "./views/Home/Home";
import "assets/styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  
);
