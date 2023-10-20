import React from "react";
import { DiGithubBadge } from "react-icons/di";
import { CiLocationOn } from "react-icons/ci";
import { BsLinkedin } from "react-icons/bs";
import { useInView } from "react-intersection-observer";

function Home() {
  const [ref, inView] = useInView();
  return (
    <div id="about" className="flex flex-col bg-gray-500">
      <div className="flex-grow">
        <div className="mb-4 flex items-start">
          <div
            ref={ref}
            className={`ml-12 mt-0 pt-3 scale-90 animate__animated ${
              inView ? "animate__fadeInLeft" : ""
            }`}
            style={{ marginLeft: "6.5rem" }}
          >
            <img src="../src/assets/zorocool.png" alt="Zoro" />
          </div>
          <div
            className="h-auto w-full mt-12 ml-12 mr-16"
            style={{ marginRight: "6rem" }}
          >
            <div
              ref={ref}
              className={`bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate__animated ${
                inView ? "animate__fadeInRight" : ""
              }`}
              style={{ marginLeft: "6rem" }}
            >
              <div className="flex justify-end pr-5 pt-5 text-white">
                <a
                  className="pr-2 hover:text-gray-400 duration-200 ease-in"
                  href="https://github.com/MAJdeq"
                >
                  <DiGithubBadge size={25} />
                </a>
                <a
                  className="pr-4 pt-1 hover:text-gray-400 duration-200 ease-in"
                  href="https://www.linkedin.com/in/ethan-ford-a5413b23b/"
                >
                  <BsLinkedin size={18} />
                </a>
              </div>
              <div className="flex flex-col items-start p-6">
                <img
                  className="w-24.5 h-24 mb-3 mt-3 rounded-full shadow-lg"
                  src="../src/assets/business pic.jpeg"
                  alt="Ethan image"
                />
                <h1 className="text-xl text-white">@MAJdeq</h1>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Computer Science Student @ USU
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Logan, UT, USA{" "}
                  <CiLocationOn className="inline pb-1" size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
