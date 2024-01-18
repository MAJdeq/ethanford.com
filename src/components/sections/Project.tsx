import React from "react";
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
  const isProjectIdEven = projectId % 2 === 0;
  console.log(projectId);

  return (
    <div className="flex rounded-lg container mx-auto bg-gray-800 p-4 w-3/4 mt-5">
      {isProjectIdEven && (
        <>
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
