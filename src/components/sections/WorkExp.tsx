import React from "react";
import { useInView } from "react-intersection-observer";
import { LibraryBig, Briefcase } from "lucide-react";
import usu from "../../assets/usu.png";
import ace from "../../assets/aceMartialArts.png";
import dpc from "../../assets/dpc.png";
import dhills from "../../assets/thunder.png";

function WorkExp() {
  const [ref, inView] = useInView();

  return (
    <div
      id="workexp"
      ref={ref}
      className={`flex items-start justify-center h-full opacity-0 animate__animated ${
        inView ? "opactiy-100 animate__fadeIn" : ""
      }`}
    >
      <ol
        className="relative border-l border-gray-200 dark:border-gray-700 items-center justify-center w-1/2 ml-16"
        style={{ marginLeft: "15rem" }}
      >
        <li
          className={
            "mb-10 ml-4 bg-gray-800 rounded-lg p-3 mt-10 w-3/4 flex items-center"
          }
        >
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-black dark:bg-gray-700"></div>
          <LibraryBig className="text-white" />
          <div className="ml-2 w-1/2">
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2025
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Expected Graduation Date
            </h3>
            <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
              Anticipated graduation date @ Utah State University
            </p>
          </div>
          <div className="w-1/2">
            <img src={usu} alt="Cool Zoro" className=" scale-75" />
          </div>
        </li>
        <li className="mb-10 ml-4 bg-gray-800 rounded-lg p-3 w-3/4 flex items-center">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Briefcase className="text-white" />
          <div className="ml-2 w-1/2">
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Summer 2022 - Summer 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Ace Martial Arts
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Youth MMA Instructor in Saint George, Utah
            </p>
          </div>
          <div className="w-1/2">
            <img src={ace} className="scale-75" />
          </div>
        </li>
        <li className="ml-4 bg-gray-800 rounded-lg w-3/4 p-3 flex items-center">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <Briefcase className="text-white" />
          <div className="ml-2 w-1/2">
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Summer 2021 - Summer 2023
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Dixie Primary Care
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Billing Assistant in Saint George, Utah
            </p>
          </div>
          <div className="w-1/2">
            <img src={dpc} className="scale-75" />
          </div>
        </li>
        <li className="mb-10 ml-4 bg-gray-800 rounded-lg p-3 mt-10  w-3/4 flex items-center">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <LibraryBig className="text-white" />
          <div className="ml-2 w-1/2">
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2021
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              High School Graduation Date
            </h3>
            <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
              Graduation date @ Desert Hills High School
            </p>
          </div>
          <div className="w-1/2">
            <img src={dhills} className=" scale-75" />
          </div>
        </li>
      </ol>
    </div>
  );
}
export default WorkExp;
