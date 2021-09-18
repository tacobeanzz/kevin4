import React from "react";
import "./Card.css";
import profileimg1 from "./images/anna.jpg";
export const Card = (props) => {
  return (
    <div className="card">
      <div className="container container--testimonials">
        <div class="testimonial">
          <p class="testimonial__text">{props.content}</p>

          <div class="testimonial__details">
            <div class="testimonial__img">
              <img src={profileimg1} alt="Timmy Dicki" />
            </div>
            <div class="testimonial__info">
              <h4 class="testimonial__name">{props.name}</h4>
              <h5 class="testimonial__job">{props.job}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
