import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import blogHome from "../../assets/blogStatus.png";
import addBlog from "../../assets/addBlog.png";
import Project from "./Project";
import order from "../../assets/order.png";
import history from "../../assets/history.png";
import confirmation from "../../assets/confirmation.png";
import cart from "../../assets/cart.png";

function Projects() {
  const projects = [
    <Project
      projectId={1}
      title="Grog Blog"
      technologies="Django | React.js | TailwindCSS"
      descriptions={[
        "Ability for authorized users to create, edit, and delta blog posts; markdown support for pretty text format in blog content",
        "User registration and login system for personalized experiences; role-based admin control to manage role permissions",
        "An admin dashboard with content management capabilities; easy to use tools for managing users, posts, and comments",
      ]}
      images={[blogHome, addBlog]}
    />,
    <Project
      projectId={2}
      title="Drone Cones"
      technologies="Django | Bootstrap"
      descriptions={[
        "Contributed to designing an intuitive and user-friendly interface for the order page, ensuring a seamless experience for customers when placing ice cream orders via the application",
        "The orders page seamlessly integrates with the application's database, where information about available ice cream products is stored. This database serves as a central repository for product details, including names, descriptions, images, and prices",
        "Users can access their order history through the application, allowing them to review past purchases, track delivery statuses, and refer to previous order details. This feature enhances user experience by providing a convenient way to revisit and reorder favorite items",
      ]}
      images={[order, history, confirmation, cart]}
    />,
  ];
  return (
    <>
      <div id="projects" className="p-5">
        {projects}
      </div>
    </>
  );
}

export default Projects;
