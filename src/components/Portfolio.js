import React from "react";
import "./Portfolio.css";
import house1 from "./images/foliohouse1.jpg";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <img src={house1} alt="" />
      <div className="information">
        <h1>Text Text Text </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In volutpat
          interdum mi, non lacinia mauris ullamcorper ut. Phasellus tempor
          placerat arcu, in mattis mi condimentum vitae. Ut in sem mollis,
          volutpat metus vel, malesuada est. <br />
          In mattis fermentum enim quis ullamcorper. Praesent consectetur
          vestibulum varius. Nunc hendrerit sed felis vitae semper. <br />
          Cras sagittis semper suscipit. Suspendisse blandit, neque cursus
          vulputate consequat, ex metus tempor tellus, at accumsan nisl ipsum
          eget tortor. Nullam eget semper lorem.
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
