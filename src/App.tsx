import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import WorkExp from "./components/sections/WorkExp";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <WorkExp />
    </>
  );
}

export default App;
