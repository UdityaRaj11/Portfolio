import React from "react";

import image from "../images/education.jpg";
const imageAltText = "desktop with books and laptop";

const Education = () => {
  return (
    <section id="education">
      <h2 style={{ textAlign: "left", padding: "1.5rem 5.3rem", maxWidth: "60%" }}>Where I learn</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", left: "40%" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            className="image"
            src={image}
            style={{ animation: "1s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="edcontainer">
          <div style={{ maxWidth: "70%", alignSelf: "center", textAlign: "left" }} className="box">
            <h3>B.Tech. in Computer Science and Engineering</h3>
            <h4>2021 - 2025</h4>
            <h4>Siksha {"'O'"} Anusandhan University</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
