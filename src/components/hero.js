import React from "react";
import "./hero.css";

const hero = () => {
  return (
    <div className="heroMain">
      <div className="comments">
        <div className="comment bubble">
          <p>
            This is a comment Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.
          </p>
          <div className="avatars">
            <div className="avatar circle">
              <p>- Name SecondName</p>
            </div>
          </div>
        </div>

        <div className="comment bubble">
          <p>This is a comment Lorem ipsum dolor sit, amet consectetur ad</p>
          <div className="avatars">
            <div className="avatar circle">
              <p>- Name SecondName</p>
            </div>
          </div>
        </div>

        <div className="comment bubble">
          <p>
            This is a comment Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Laborum, temporibus? Laborum, temporibus? Laborum,
            temporibus? Laborum, temporibus? Laborum, temporibus? Laborum,
            temporibus? Laborum, temporibus?
          </p>
          <div className="avatars">
            <div className="avatar circle">
              <p>- Name SecondName</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="avatars">
        <div className="avatar circle">
          <p>- Name SecondName</p>
        </div>
        <div className="avatar circle">
          <p>- Name SecondName</p>
        </div>
        <div className="avatar circle">
          <p>- Name SecondName</p>
        </div>
      </div> */}
    </div>
  );
};

export default hero;
