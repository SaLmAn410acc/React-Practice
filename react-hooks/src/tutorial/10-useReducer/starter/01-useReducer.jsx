import React, { useReducer } from "react";
import { data } from "../../../data";

const reducer = (state, action) => {
  if (action.type === "remove_id") {
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  if (action.type === "clear_list") {
    return { ...state, people: [] };
  }
  if (action.type === "reset_list") {
    return { ...state, people: data };
  }
};

const ReducerBasics = () => {
  let initialState = {
    people: data,
  };

  // const [people, setPeople] = React.useState(data);

  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    console.log(id);
    dispatch({ type: "remove_id", payload: id });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };

  const clearItems = () => {
    dispatch({ type: "clear_list" });
  };

  const resetList = () => {
    dispatch({ type: "reset_list" });
  };

  return (
    <div>
      {state.people.map((user) => {
        const { id, name } = user;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length >= 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearItems}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset list
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
