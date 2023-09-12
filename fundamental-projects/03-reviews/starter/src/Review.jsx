import React, { useState } from "react";

import reviews from "./data";

import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  let [index, setIndex] = useState(0);

  const { name, job, image, text } = reviews[index];

  const nextPerson = () => {
    setIndex(index++);
    if (index > reviews.length - 1) {
      setIndex(0);
    }
    reviews[index];
  };

  const prevPerson = () => {
    setIndex(index--);
    if (index < 0) {
      const newLength = reviews.length - 1;
      setIndex(newLength);
    }
    reviews[index];
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    setIndex(randomNumber);
    reviews[index];
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          surprise me
        </button>
      </article>
    </main>
  );
};

export default Review;
