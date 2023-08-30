import prod1 from "../../../images/product-1.png";
import cross from "../../../images/cross.svg";

const Explore = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">1</div>
        <div className="col-md-3">
          <div>
            <a href="#" className="exp-prod-btn">
              <img src={prod1} alt="" />
              <h3>Nordic Chair</h3>
              <strong>$40.00</strong>
              <span className="cross-sign">
                <img src={cross} alt="" />
              </span>
            </a>
          </div>
        </div>
        <div className="col-md-3">3</div>
        <div className="col-md-3">4</div>
      </div>
    </div>
  );
};

export default Explore;
