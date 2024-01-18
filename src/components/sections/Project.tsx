import React from "react";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";

interface ProjectProps {
  projectId: number;
  title: string;
  technologies: string;
  descriptions: string[];
  images: string[];
}

export function Project({
  projectId,
  title,
  technologies,
  descriptions,
  images,
}: ProjectProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const isProjectIdEven = projectId % 2 === 0;
  return (
    <div
      ref={ref}
      className={`flex rounded-lg container mx-auto bg-gray-800 p-4 lg:w-3/4 mt-5 opacity-0 animate__animated ${
        inView && isProjectIdEven
          ? "opacity-100 animate__fadeInRight"
          : "opacity-100 animate__fadeInLeft"
      }`}
    >
      {isProjectIdEven && (
        <>
          <div className="text-white w-1/2">
            <p className="text-2xl"> {title} </p>
            <p className="text-lg text-gray-500"> {technologies} </p>
            <div>
              <ul>
                {descriptions.map((description) => (
                  <li className="pt-6 text-sm"> {description} </li>
                ))}
              </ul>
            </div>
          </div>
          <Carousel
            infiniteLoop={true}
            className="text-center pl-7 pt-7 pr-7 w-1/2 border-l border-gray-700"
            renderItem={(item, options) => (
              <div
                className={`carousel-item ${
                  options?.isSelected ? "selected" : ""
                }`}
              >
                <div className="rounded-lg">{item}</div>
              </div>
            )}
          >
            {images.map((image) => (
              <div key={image}>
                <img src={image} alt={image} />
              </div>
            ))}
          </Carousel>
        </>
      )}
      {!isProjectIdEven && (
        <>
          <Carousel
            infiniteLoop={true}
            className="text-center pl-7 pt-7 pr-7 w-1/2 border-r border-gray-700"
            renderItem={(item, options) => (
              <div
                className={`carousel-item ${
                  options?.isSelected ? "selected" : ""
                }`}
              >
                <div className="rounded-lg">{item}</div>
              </div>
            )}
          >
            {images.map((image) => (
              <div key={image}>
                <img src={image} alt={image} />
              </div>
            ))}
          </Carousel>
          <div className="text-white m-5 w-1/2">
            <p className="text-2xl"> {title} </p>
            <p className="text-lg text-gray-500"> {technologies} </p>
            <div>
              <ul>
                {descriptions.map((description) => (
                  <li className="pt-6 text-sm"> {description} </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Project;
