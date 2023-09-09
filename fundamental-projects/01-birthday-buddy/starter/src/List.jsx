import React from "react";

const List = ({ people }) => {
  console.log(people);
  return (
    <>
      {people.map((user) => {
        return (
          <article key={user.id} className="person">
            <img src={user.image} alt="" />
            <div>
              <h4>{user.name}</h4>
              <p>{user.age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
