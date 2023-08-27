import { useState } from "react";

import { data } from "../../../data";

const UserChallenge = () => {
  const [user, setUser] = useState("");
  const [people, setPeople] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) return;

    const newUser = { id: people.length + 1, name: user };
    const updatedUser = [...people, newUser];
    setPeople(updatedUser);
    setUser("");
  };

  const handleRemove = (id) => {
    const newUsers = people.filter((user) => {
      return user.id !== id;
    });
    setPeople(newUsers);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            id="name"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>Users</h1>
      {people.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => handleRemove(user.id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
