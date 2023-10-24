import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { PiBooksDuotone } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
import { SlUserFollow } from "react-icons/sl";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useState } from "react";
import { VscPinned } from "react-icons/vsc";
import { GoVerified } from "react-icons/go";
import { BsDot } from "react-icons/bs";
import zorocool from "../../assets/zorocool.png";
import businesspic from "../../assets/business pic.jpeg";

function Home() {
  const [ref, inView] = useInView();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div id="about" className="flex flex-col bg-gray-500">
      <div className="flex-grow">
        <div className="mb-4 flex items-start">
          <div
            ref={ref}
            className={`opacity-0 ml-12 mt-0 pt-8 animate__animated ${
              inView ? "opactiy-100 animate__fadeInLeft" : ""
            }`}
            style={{ marginLeft: "9rem" }}
          >
            <img src={zorocool} alt="Roronoa Zoro" />
          </div>
          <div
            className="h-auto w-5/6 mt-12 ml-12 mr-16"
            style={{ marginRight: "3rem", marginLeft: "7rem" }}
          >
            <div
              ref={ref}
              className={`opacity-0 bg-white border w-3/4 mt-5 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate__animated ${
                inView ? "opacity-100 animate__fadeInRight" : ""
              }`}
              style={{ marginLeft: "3.5rem" }}
            >
              <div className="flex flex-col items-start p-6">
                <img
                  className="w-24.5 h-24 mb-3 mt-3 rounded-full shadow-lg"
                  src={businesspic}
                  alt="Ethan Image"
                />
                <div>
                  <h1 className="text-xl text-white pt-1 font-semibold inline">
                    @MAJdeq
                  </h1>
                  <GoVerified
                    className=" text-white inline pl-2 pb-1"
                    size={25}
                  />
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <PiBooksDuotone className="inline pb-1 pr-1" size={16} />
                  Computer Science Student @ USU
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <CiLocationOn className="inline pb-1 pr-1" size={17} />
                  Logan, UT, USA{" "}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  <LiaBirthdayCakeSolid
                    className="inline pb-1 pr-1"
                    size={17}
                  />
                  Joined April 4, 2003
                </span>
                <div className="flex w-full block justify-between">
                  <div className="mt-2">
                    <div>
                      <span className="text-sm text-white">
                        0
                        <span className=" text-sm inline text-gray-400 pl-1">
                          Following
                        </span>
                      </span>
                      <span className=" pl-5 inline text-sm text-white">
                        32.6M{" "}
                        <span className="text-sm inline text-gray-400 pl-1">
                          Followers
                        </span>
                      </span>
                    </div>
                  </div>
                  <button
                    className={`inline items-end text-white font-bold p-2.5 rounded-full ${
                      isClicked
                        ? "bg-gray-600 hover:bg-gray-700 transition-transform transform hover:scale-105"
                        : "bg-blue-500 hover:bg-blue-600 transition-transform transform hover:scale-105"
                    }`}
                    onClick={handleClick}
                  >
                    {isClicked ? (
                      <>
                        Following{" "}
                        <IoCheckmarkCircleSharp
                          className="pb-1 inline"
                          size={24}
                        />{" "}
                      </>
                    ) : (
                      <>
                        Follow
                        <SlUserFollow className="pb-1 pl-2 inline" size={24} />
                      </>
                    )}
                  </button>
                </div>
                <div className="border-b border-0.5 w-full border-gray-600 my-4"></div>
                <div className="text-sm text-gray-400">
                  <VscPinned className="pr-1 pb-1 inline" size={17} />
                  Pinned
                </div>
                <div className="w-full block">
                  <div className="flex">
                    <img
                      className="w-12 h-11 mb-3 mt-3 rounded-md shadow-lg inline"
                      src={businesspic}
                      alt="Ethan image"
                    />
                    <div className="inline-block h-1/2 pt-1 pl-3">
                      <h2 className="text-white inline">@MAJdeq</h2>
                      <GoVerified
                        className="text-white inline pl-1 pb-1"
                        size={20}
                      />
                      <span className="text-sm text-gray-400 pb-2 inline pl-2">
                        @EthanFord <BsDot className="inline" size={15} /> 2h
                      </span>
                      <div className="pt-1 text-white text-md">
                        <h1>
                          Hi! I am currently studying Computer Science at Utah
                          State University. As a developer, I'm striving to
                          learn as much as possible, while injecting parts of
                          myself into my projects (surgically).
                        </h1>
                        <h1 className="pt-2">
                          As far as my passions go, I love to program, exercise,
                          hangout with friends, and relax after a long days
                          work. My hobbies include gaming, watching anime (One
                          Piece), and upgrading my PC!
                        </h1>
                        <h1 className="pt-2">
                          Feel free to contact me to discuss new opportunities.
                          Have fun exploring my portfolio!
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
