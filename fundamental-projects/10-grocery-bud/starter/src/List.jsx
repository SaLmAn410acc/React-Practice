import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, setList, setAlert, editItem }) => {
  const handleDelete = (id) => {
    const newItems = items.filter((item) => {
      return item.id != id;
    });

    setList(newItems);
    setAlert({ show: true, msg: "Item Deleted", type: "danger" });
  };

  return (
    <div className="grocery-list">
      {items.map((item) => {
        return (
          <article className="grocery-item" key={item.id}>
            <p className="title">{item.title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(item.id, item.title)}
              >
                <FaEdit />
              </button>

              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
