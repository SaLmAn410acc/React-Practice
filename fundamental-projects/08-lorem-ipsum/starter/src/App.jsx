import { useState } from "react";

import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let amount = parseInt(count);

    if (amount < 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }

    setText(data.splice(0, amount));
  };

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input value={count} onChange={(e) => setCount(e.target.value)} />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((txt, index) => {
          return <p key={index}>{txt}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
