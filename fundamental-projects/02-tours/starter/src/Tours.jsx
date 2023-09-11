import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, remTour }) => {
  // const { id, image, info, name, price } = tours;
  return (
    <section>
      <div className="title">
        <h2>Tours</h2>
        <div className="underline"></div>
      </div>

      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} remTour={remTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
