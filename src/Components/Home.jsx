/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowPng from "../images/down-arrow.png";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/me-working.jpeg";

const imageAltText = "An Adult working on something while looking down at a screen.";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "12rem", left: "4.2rem", width: "17rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img 
          src={arrowPng}
          style={{
            bottom: "0rem",
            height: "1.5rem",
            width: "2.5rem",
            animation: "1s ease-out 0s 1 slideInUp",
          }}
          alt={imageAltText}
        />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
