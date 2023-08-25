import { useState } from "react";

const ToggleChallenge = () => {
  const [val, setVal] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          val ? setVal(false) : setVal(true);
        }}
        className="btn"
      >
        Toggle
      </button>
      {val ? <h2>Login</h2> : <h2>Logout</h2>}
    </div>
  );
};

export default ToggleChallenge;
