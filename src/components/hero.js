import React from "react";
import "./hero.css";
import ReviewCard from "./ReviewCard";

const hero = () => {
  return (
    <div className="heroMain">
      <ReviewCard
        name="Jess"
        revcontent="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem aspernatur perspiciatis consequatur tempore ut dolorum sequi harum nulla cumque perferendis?ui harum nulla cumque perferendis?ui harum nulla cumque perferendis?ui harum nulla cumque perferendis?ui harum nulla cumque perferendis?ui harum nulla cumque perferendis?ui harum nulla cumque perferendis?ui harum nulla cumque perferendis?"
      />
      <ReviewCard name="Jimmy" revcontent="This is a test" />
      <ReviewCard name="Test" revcontent="This is a test" />
    </div>
  );
};

export default hero;
