import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
  </React.StrictMode>
);
