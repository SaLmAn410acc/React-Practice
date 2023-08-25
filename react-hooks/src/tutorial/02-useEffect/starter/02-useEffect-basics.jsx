import { useState } from "react";

import { useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // const sayHello = () => {
  //   console.log("hello there");
  // };

  // sayHello();
  console.log(value);
  useEffect(() => {
    console.log("from useEffect");
  }, []);

  return (
    <div>
      <h1>value : {value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue((value) => {
            return value + 1;
          });
        }}
      >
        click me
      </button>
    </div>
  );
};
export default UseEffectBasics;
