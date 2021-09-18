import React from "react";

import "./Top.css";

const Top = () => {
  return (
    <div className="top">
      <div className="infobox">
        <div className="leftsquare">
          <h1>Text</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className="contactbtn">
            <h1>Contact Me</h1>
          </div>
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
