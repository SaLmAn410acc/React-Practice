import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, remTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <article className="single-tour">
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>

        <button className="delete-btn" onClick={() => remTour(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
