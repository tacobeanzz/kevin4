import React from "react";
import { Card } from "./Card";
import "./hero.css";
// import ReviewCard from "./ReviewCard";

const hero = () => {
  return (
    <div className="heroMain">
      <Card
        name="Test"
        job="Software Engineer"
        content="Lorem ipsum, dolor sitquam molestiae assumenda unde, vitae exercitationem?"
      />
      <Card
        name="Test"
        job="Software Engineer"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam aliquam molestiae assumenda unde, vitae exercitationem?"
      />
      <Card
        name="Test"
        job="Software Engineer"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam aliquam molestiae assumenda unde, vitae exercitationem?"
      />
    </div>
  );
};

export default hero;
