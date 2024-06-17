/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/coder-desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Nodelink2.0",
    description:
      "Dynamic social networking application focused on personal growth for learners and growth seekers.",
    url: "https://github.com/UdityaRaj11/Nodelink2.0",
  },
  {
    title: "SkimLit",
    description: "An NLP model to make reading medical abstracts easier.",
    url: "",
  },
  {
    title: "ThriftyU",
    description: "A Smart E-wallet for students to spend being thrifty.",
    url: "https://github.com/UdityaRaj11/ThriftyU",
  },
  {
    title: "MyBooka",
    description: "A simple Book Renting application",
    url: "https://github.com/UdityaRaj11/MyBooka",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "left", padding: "1.5rem 5.3rem", maxWidth: "60%" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "1rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img className="image" src={image} alt={imageAltText} />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", textAlign: "left" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
