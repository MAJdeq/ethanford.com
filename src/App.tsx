import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import WorkExp from "./components/sections/WorkExp";
import Projects from "./components/sections/Projects";
import ContactMe from "./components/sections/ContactMe";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <WorkExp />
      <ContactMe />
    </>
  );
}

export default App;
