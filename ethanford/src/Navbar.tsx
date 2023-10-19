import React from "react";
function Navbar() {
  return (
    <>
      <nav className="border-gray-200 bg-gray-800 shadow-lg shadow-gray-700 py-5">
        <div className="flex pl-8 pt-2">
          <a className="text-xl text-white font-bold pt-2" href="/">
            ETHAN FORD
          </a>
          <div className=" text-white ml-auto">
            <a
              className="text-md mr-3 transition-transform transform hover:text-gray-400 transition duration-100 ease-in"
              href="/"
            >
              Home
            </a>
            <a
              className="text-md mr-3 transition-transform transform hover:text-gray-400 transition duration-100 ease-in"
              href="/"
            >
              Work Exp
            </a>
            <a
              className="text-md mr-11 transition-transform transform hover:text-gray-400 transition duration-100 ease-in"
              href="/"
            >
              Projects
            </a>
            <a
              className="text-white mr-4"
              href="../src/assets/Resume-5.pdf"
              download="Ethan Ford's Resume"
            >
              <button className="bg-gray-700 text-lg rounded-md hover:bg-gray-900 font-semibold transition-transform transform hover:scale-105 p-3">
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
