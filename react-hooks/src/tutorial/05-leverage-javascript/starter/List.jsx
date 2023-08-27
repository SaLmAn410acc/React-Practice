import { people } from "../../../data";
import React, { useState } from "react";
import Person from "./Person";

const List = () => {
  const [person, setPerson] = useState(people);

  return (
    <div>
      {person.map((user) => {
        return <Person key={user.name} {...user}></Person>;
      })}
    </div>
  );
};

export default List;
