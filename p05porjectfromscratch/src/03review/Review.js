import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const maxIndex = people.length>0?people.length-1:0;
  const decreIndex = () => {
    if (index >= 1) {
      setIndex(index - 1);
    } else {
      setIndex(0);
    }
  };

  const increIndex = () => {
    if (!people || maxIndex === 0 || index >= maxIndex) {
      setIndex(index);
    } else {
      setIndex(index + 1);
    }
  };

  const randomIndex = ()=>{
    let rdIndex = Math.floor(Math.random() *  (maxIndex+1));
    setIndex(rdIndex);
  }


  return (
    <>
      <div className="review">
        <h2>{name}</h2>
        <div className="img-container">
          <img
            src={image}
            className="person-img"
            alt={name}
          ></img>
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button onClick={() => decreIndex()} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={() => increIndex()} className="next-btn">
            <FaChevronRight />
          </button>
        </div>
        <button onClick={() => randomIndex()} className="random-btn">
            Random
          </button>
      </div>
    </>
  );
};

export default Review;
