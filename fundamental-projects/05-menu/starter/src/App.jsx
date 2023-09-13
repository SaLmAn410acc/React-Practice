import { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "./data.js";

const newCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(data);
  const [Category, setCategory] = useState(newCategories);

  const selectCategory = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories category={Category} selectCategory={selectCategory} />
        <Menu menu={menu} />
      </section>
    </main>
  );
};
export default App;
