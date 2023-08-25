import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)} className="btn">
        Toggle
      </button>
      {toggle && <SecondComponent></SecondComponent>}
    </div>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    console.log("from useEffect");
  }, []);

  return <h1>Hello Bro!</h1>;
};

export default CleanupFunction;
