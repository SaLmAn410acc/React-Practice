import prod1 from "../../../images/product-1.png";
import cross from "../../../images/cross.svg";

import { productsData } from "../../../../data";

const Explore = () => {
  return (
    <section className="explore-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="left-explore">
              <h2>Crafted with excellent material.</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <a href="#">Explore</a>
            </div>
          </div>
          <ExploreProduct />;
        </div>
      </div>
    </section>
  );
};

const ExploreProduct = () => {
  return (
    <>
      {productsData.map((prod) => {
        const { name, img, price } = prod;
        return (
          <div className="col-md-3" key={name}>
            <a href="#" className="exp-prod-btn">
              <img src={img} alt="" className="img-fluid prod-image" />
              <h3 className="prod-title">{name}</h3>
              <strong>${price}</strong>
              <span className="cross-sign">
                <img src={cross} alt="" />
              </span>
            </a>
          </div>
        );
      })}
    </>
  );
};

export default Explore;
