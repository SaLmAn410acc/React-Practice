import { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";
import uuid from "react-uuid";

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setalert] = useState({ show: false, msg: "", type: "" });

  useEffect(() => {
    const timer = setTimeout(
      () => setalert({ show: false, msg: "", type: "" }),
      3000
    );
    return () => clearTimeout(timer);
  }, [alert]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setalert({ show: true, msg: "Empty Value!!", type: "danger" });
      console.log("empty value");
      //alert
    } else if (name && isEditing) {
      const newItem = list.map((item) => {
        if (item.id === editId) {
          item.title = name;
        }

        return item;
      });

      setList(newItem);
      setIsEditing(false);
      setEditId(null);
      setName("");

      setalert({ show: true, msg: "Item Updated!!", type: "success" });
      console.log("edit item");
    } else {
      // console.log("add value");

      const newItem = { id: new Date().getTime().toString(), title: name };
      // console.log(newItem);
      setList([...list, newItem]);
      setName("");

      setalert({ show: true, msg: "Item added!!!", type: "success" });
      // console.log(alert);
    }

    // console.log(item);
    // console.log("submit form!!!");
  };

  const handleClearBtn = () => {
    setList([]);
    setalert({ show: true, msg: "List Empty", type: "danger" });
  };

  const editItem = (id, title) => {
    setIsEditing(true);
    setEditId(id);
    setName(title);
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert alert={alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            id="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>

      {list.length > 0 && (
        <div className="grocery-container">
          <List
            items={list}
            setList={setList}
            setAlert={setalert}
            editItem={editItem}
          />
          <button className="clear-btn" onClick={handleClearBtn}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default App;
