import React from "react";

function Navbar() {
  return (
    <>
      <nav className="border-gray-200 bg-gray-800 shadow-lg shadow-gray-700 py-3">
        <div className="flex pl-8 pt-2">
          <a className="text-2xl text-white pt-3 pb-3" href="/">
            Ethan Ford
          </a>
          <div className="text-white ml-auto text-md">
            <a
              href="#home"
              className="text-md mr-5 hover:text-gray-400 duration-200 ease-in"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-md mr-5 hover:text-gray-400 duration-200 ease-in"
            >
              About Me
            </a>
            <a
              href="#workexp"
              className="text-md mr-5 hover:text-gray-400 duration-200 ease-in"
            >
              Work Exp
            </a>
            <a
              href="#projects"
              className="text-md mr-11 hover:text-gray-400 duration-200 ease-in"
            >
              Projects
            </a>
            <a
              className="text-white mr-4"
              href="../src/assets/Resume-5.pdf"
              download="Ethan Ford's Resume"
            >
              <button className="bg-gray-700 text-lg rounded-md hover:bg-gray-900 font-semibold transition-transform transform hover:scale-105 p-4 relative">
                Resume
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
