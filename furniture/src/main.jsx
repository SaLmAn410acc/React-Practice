import ReactDOM from "react-dom/client";
import Navbar from "./components/home/navbar";

import "/style.css";
import Hero from "./components/home/hero-sec/Hero";

import Explore from "./components/home/explore";
import ChooseUs from "./components/home/choose-us";
import Information from "./components/home/information/Information";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Navbar />
    <Hero />
    <Explore />
    <ChooseUs />
    <Information />
  </>
);
