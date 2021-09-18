import React from "react";
import "./ReviewCard.css";

const ReviewCard = (props) => {
  return (
    <div className="card">
      <div className="bubbles">
        <svg
          width="473"
          height="134"
          viewBox="0 0 473 134"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              d="M0 15C0 6.71573 6.71573 0 15 0H450C458.284 0 465 6.71573 465 15V93C465 101.284 458.284 108 450 108H15C6.71574 108 0 101.284 0 93V15Z"
              fill="white"
            />
            <path d="M61 124L47.1436 100H74.8564L61 124Z" fill="white" />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="473"
              height="134"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="4" dy="6" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="circles">
        <div className="circle1">
          <svg
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="32.5" cy="32.5" r="32.5" fill="#727272" />
          </svg>
        </div>
      </div>
      <div className="name">
        <p> - {props.name}</p>
      </div>
      <div className="quotemark">
        <h1>“</h1>
      </div>
      <div className="revcontent">
        <p>{props.revcontent}</p>
      </div>
      {/* <div className="avatar"></div>
        <div className="name">
          <h1>Name SecondName</h1>
        </div>
        <div className="reviewtext">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            excepturi!
          </p>
        </div> */}
    </div>
  );
};

export default ReviewCard;
