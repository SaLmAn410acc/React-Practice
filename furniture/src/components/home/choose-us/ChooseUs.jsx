import React from "react";
import chooseUs from "../../../images/why-choose-us-img.jpg";

import truck from "../../../images/truck.svg";
import bag from "../../../images/bag.svg";
import support from "../../../images/support.svg";
import returnImg from "../../../images/return.svg";

const ChooseUs = () => {
  return (
    <section className="choose-us">
      <div className="container">
        <div className="row">
          <div className="col-md-7 choose-us-heading">
            <h2>Why Choose Us</h2>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="row">
              <DeliveryFeature name="Fast & Free Shipping" img={truck} />
              <DeliveryFeature name="Easy to Shop" img={bag} />
              <DeliveryFeature name="24/7 Support" img={support} />
              <DeliveryFeature name="Hassle Free Returns" img={returnImg} />
            </div>
          </div>
          <div className="col-md-5 choose-us-img">
            <img src={chooseUs} alt="" className="img-fluid " />
          </div>
        </div>
      </div>
    </section>
  );
};

const DeliveryFeature = ({ name, img }) => {
  return (
    <div className="col-md-6 choose-us-feature">
      <div className="shipping-icons">
        <img src={img} alt="" />
      </div>
      <h3>{name}</h3>
      <p>
        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
        Aliquam vulputate.
      </p>
    </div>
  );
};

export default ChooseUs;
