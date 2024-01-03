import React, { useState } from "react";
<<<<<<< HEAD
import resume from "../assets/Resume-5.pdf";
import { Menu } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the dropdown menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

=======
import {FiAlignRight} from "react-icons/fi";
import resume from "../assets/Resume-5.pdf";

function Navbar() {
  const navLinks = ["Home", "About", "Work Experience", "Projects", "Contact Me"];
  const[isMenuOpen, setIsMenuOpen] = useState(false);
>>>>>>> c3c6edbe204b5ef309ac12c196f9e509be309822
  return (
    <>
      <nav className="border-gray-200 bg-gray-800 shadow-lg shadow-gray-700 py-3 w-full">
        <div className="flex pl-8 pt-2">
          <a className="text-lg lg:text-2xl text-white pt-2 pb-2 lg:pt-3 lg:pb-3" href="/">
            Ethan Ford
          </a>
<<<<<<< HEAD
          <div className="relative lg:hidden ml-auto">
            <button
              className="btn btn-ghost text-white text-right pt-3 pr-3 ml-auto hover:scale-105"
              onClick={toggleMenu}
            >
              <Menu />
            </button>
            <ul
              className={`z-20 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-lg bg-gray-900 text-white w-52 absolute right-0 transform transition-transform${
                isMenuOpen
                  ? "block scale-y-100 opacity-100"
                  : "hidden scale-y-0 opacity-0"
              }`}
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#workexp">Work Exp</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href={resume} download="Ethan Ford's Resume">
                  Resume
                </a>
              </li>
=======
          <div className="absolute right-0 mt-3 pr-3">
            <label className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <FiAlignRight />
            </label>
            <ul className={`bg-gray-900 text-white rounded-md p-2 ${
              isMenuOpen ? "" : "hidden"
            }`}>
              {navLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
>>>>>>> c3c6edbe204b5ef309ac12c196f9e509be309822
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