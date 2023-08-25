import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: "Salman" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>Hello {user.name}</h2>
          <button onClick={() => logout()}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <button onClick={() => login()}>login</button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
