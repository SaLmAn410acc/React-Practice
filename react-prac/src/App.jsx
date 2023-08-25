import { useState } from "react";
import { data } from "./data";

function App() {
  const [people, setPeople] = useState(data);

  const deletePeople = (id) => {
    // console.log(id);
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    console.log(newPeople);
    setPeople(newPeople);
  };

  return (
    <>
      <div className="container ">
        {people.map((person) => {
          const { name, id } = person;
          return (
            <div key={id}>
              <h1>{name}</h1>
              <button
                className="btn btn-primary"
                onClick={() => deletePeople(id)}
              >
                Remove It!
              </button>
            </div>
          );
        })}

        <button
          type="button"
          className="btn btn-primary my-3"
          onClick={() => {
            setPeople([]);
          }}
        >
          Remove All
        </button>
      </div>
    </>
  );
}

export default App;
