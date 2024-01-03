import React, { useEffect, useState } from "react";
import { GiFallingBomb } from "react-icons/gi";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <div className="container flex mx-auto justify-center items-center h-screen w-screen">
        <div
          ref={ref}
          className={`lg:flex lg:mr-auto lg:ml-auto lg:max-w-6xl lg:p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 animate__animated ${
            inView ? "opacity-100 animate__fadeIn" : ""
          }`}
          style={{ height: "lg:75vh" }}
        >
          <div className="lg:w-1/2">
            <div className="p-5 lg:items-start">
              <h5
                ref={ref}
                className={`mb-2 text-5xl lg:text-6xl mt-1 font-bold tracking-tight text-gray-900 dark:text-white animate__animated ${
                  inView ? "opactiy-100 animate__fadeInLeft" : ""
                }`}
              >
                Full Stack Web Developer & Software Engineer
              </h5>
              <div
                ref={ref}
                className={` bg-gray-900 p-2 mt-1 lg:mt-5 rounded-lg font-mono lg:text-md animate__animated ${
                  inView ? "opactiy-100 animate__fadeInUp" : ""
                }`}
              >
                <div className="flex">
                  <span className="lg:text-md text-gray-500">&gt; </span>
                  <span className=" pl-2 text-purple-400 inline">import</span>
                  <span className="pl-2 text-yellow-500 inline">&#123;</span>
                  <span className="pl-2 text-blue-300 inline"> React </span>
                  <span className="pl-2 text-yellow-500 inline">&#125;</span>
                  <span className=" pl-2 text-purple-400 inline">from</span>
                  <span className=" pl-2 text-orange-300 inline">"react"</span>
                  <span className="text-white inline">;</span>
                </div>
                <div className="flex">
                  <span className="text-md text-gray-500">&gt; </span>
                  <span className=" pl-2 text-purple-400 inline">
                    export default
                  </span>
                  <span className="text-md text-blue-500 inline pl-2">
                    {" "}
                    function{" "}
                  </span>
                  <span className="text-md text-yellow-100 inline pl-2">
                    Welcome
                  </span>
                  <span className="text-md text-yellow-500">()</span>
                  <span className="text-md text-yellow-500 pl-2"> &#123; </span>
                </div>
                <div className="flex">
                  <span className="text-md text-gray-500">&gt; </span>
                  <span className="text-md text-purple-400 pl-5 inline">
                    {" "}
                    return &#40;
                  </span>
                </div>
                <div className="text-md text-gray-500">
                  <span className="text-md text-gray-500">&gt; </span>
                  <span className="text-md text-gray-500 pl-8">&lt;&gt; </span>
                </div>
                <div className="text-md text-gray-500">
                  <span className="text-md text-gray-500">&gt; </span>
                  <span className="pl-10 text-md text-gray-500">&lt;</span>
                  <span className="text-md text-blue-500">h1</span>
                  <span className="text-md text-gray-500">&gt; </span>
                </div>
                <div>
                  <div className="text-md text-white pl-16">
                    <span className="text-md">
                      {" "}
                      Welcome to my website! If you want to reach out to me, go
                      ahead and click the "Contact Me" section of the navbar and
                      send me an email. Have fun!
                    </span>
                  </div>
                </div>

                <div className="text-md text-gray-500">
                  <span className="text-md text-gray-500">&gt; </span>
                  <span className="pl-10 text-md text-gray-500">&lt;/</span>
                  <span className="text-md text-blue-500">h1</span>
                  <span className="text-md text-gray-500">&gt; </span>
                </div>
                <div className="text-md text-gray-500">
                  <span className="text-md text-gray-500">&gt; </span>
                  <span className="text-md text-gray-500 pl-8">&lt;/&gt;</span>
                </div>
                <div>
                  <span className="text-md text-gray-500">&gt; </span>
                  <span className="text-md text-purple-400 pl-4">&#41; </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:w-1/2 lg:flex lg:justify-end">
            <h1>
              <GiFallingBomb
                className="w-full max-w-md text-white text-right pr-10 pt-8"
                size={490}
              />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
