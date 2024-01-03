import React, { useState } from "react";
import { FiAlignRight } from "react-icons/fi";
import resume from "../assets/Resume-5.pdf";

function Navbar() {
  const navLinks = [
    "Home",
    "About",
    "Work Experience",
    "Projects",
    "Contact Me",
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className="border-gray-200 bg-gray-800 shadow-lg shadow-gray-700 py-3 w-full">
        <div className="flex pl-8 pt-2">
          <a
            className="text-lg lg:text-2xl text-white pt-2 pb-2 lg:pt-3 lg:pb-3"
            href="/"
          >
            Ethan Ford
          </a>
          <div className="absolute right-0 mt-3 pr-3">
            <label
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FiAlignRight />
            </label>
            <ul
              className={`bg-gray-900 text-white rounded-md p-2 ${
                isMenuOpen ? "" : "hidden"
              }`}
            >
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white ml-auto text-md hidden lg:block">
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
              href={resume}
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
