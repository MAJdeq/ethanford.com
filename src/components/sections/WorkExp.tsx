import React from "react";
import { useInView } from "react-intersection-observer";
import { LibraryBig, Briefcase } from "lucide-react";

function WorkExp() {
  const [ref, inView] = useInView();

  interface Job {
    companyName: string;
    role: string;
    datesWorked: string;
    description: string;
  }

  const jobs: Job[] = [
    {
      companyName: "Dixie Primary Care",
      role: "Billing Assistant",
      datesWorked: "Summer 2021-Summer 2023",
      description:
        "I processed and submitted medical insurance claims, ensured compliance with coding and billing guidelines, leading to a high claims acceptance rate. I contacted clients to address outstanding balances, negotiated payment arrangements, and met collection goals while maintaining positive client relations. I kept up-to-date with healthcare billing regulations, regularly updated coding knowledge (ICD-10, CPT), and ensured billing documentation met industry standards.",
    },
    {
      companyName: "Ace Martial Arts",
      role: "Youth MMA Instructor",
      datesWorked: "Summer 2022-Summer 2023",
      description:
        "I mentored and guided young students through structured MMA training programs, helping them build physical fitness, self-confidence, and respect for others. I provided high-quality instruction in MMA techniques, prioritizing safety and discipline while teaching striking, grappling, and self-defense skills. I instilled values like discipline, sportsmanship, and perseverance, aiding students in their development as both martial artists and responsible individuals.",
    },
  ];

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
            <img
              src="../../../src/assets/usu.png"
              alt="Cool Zoro"
              className=" scale-75"
            />
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
            <img
              src="../../../src/assets/aceMartialArts.png"
              className="scale-75"
            />
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
            <img src="../../../src/assets/dpc.png" className="scale-75" />
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
            <img src="../../../src/assets/thunder.png" className=" scale-75" />
          </div>
        </li>
      </ol>
    </div>
  );
}
export default WorkExp;
