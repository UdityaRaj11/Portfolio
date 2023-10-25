import React from "react";

import image from "../images/education.jpg";
const imageAltText = "desktop with books and laptop";

const Education = () => {
  return (
    <section id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", left: "40%" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="edcontainer">
          <div style={{ maxWidth: "70%", alignSelf: "center" }} className="box">
            <h3>BTech in Computer Science and Engineering</h3>
            <h4>2021 - 2025</h4>
            <h4>Institute of Technical Education and Research, IN</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
