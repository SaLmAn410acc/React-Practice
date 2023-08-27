import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  return (
    <div>
      <form className="form">
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            onChange={handleInput}
            value={user.name}
            name="name"
            className="form-input"
            id="name"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            onChange={handleInput}
            value={user.email}
            name="email"
            className="form-input"
            id="email"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            onChange={handleInput}
            value={user.password}
            name="password"
            className="form-input"
            id="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
