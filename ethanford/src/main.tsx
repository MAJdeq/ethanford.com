import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import WorkExp from "./WorkExp";
import Projects from "./Projects";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <WorkExp />
  </React.StrictMode>
);
