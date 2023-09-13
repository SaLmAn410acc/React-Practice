import React from "react";

const Categories = ({ category, selectCategory }) => {
  return (
    <div className="btn-container">
      {category.map((btn, index) => {
        return (
          <button
            type="button"
            className="btn"
            key={index}
            onClick={() => selectCategory(btn)}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
