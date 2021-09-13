import React from "react";

import "./Top.css";
import KLogo from "./images/K_LogoWhite.png";

const Top = () => {
  return (
    <div className="top">
      <div className="header">
        <div className="logo">
          <img src={KLogo} alt="Logo" />
        </div>
        <div className="menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="infobox">
        <div className="leftsquare">
          <h1>Text</h1>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="squares">
          <div className="square1">1</div>
          <div className="square2">2</div>
          <div className="square3">3</div>
          <div className="square4">4</div>
        </div>
      </div>
    </div>
  );
};

export default Top;
