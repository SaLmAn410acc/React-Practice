import React from "react";

import grid1 from "../../../images/img-grid-1.jpg";
import grid2 from "../../../images/img-grid-2.jpg";
import grid3 from "../../../images/img-grid-3.jpg";

const Information = () => {
  return (
    <section className="info-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="info-left-sec">
              <img src={grid1} alt="" className="img-fluid info-left-img1" />
              <img src={grid3} alt="" className="img-fluid info-left-img2" />
              <img src={grid2} alt="" className="img-fluid info-left-img3" />
            </div>
          </div>

          <div className="col-md-5">
            <div className="info-right-sec">
              <h2>We Help You Make Modern Interior Design</h2>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada
              </p>
              <ul>
                <div className="row">
                  <div className="col-md-6">
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  </div>
                  <div className="col-md-6">
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  </div>
                  <div className="col-md-6">
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  </div>
                  <div className="col-md-6">
                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
