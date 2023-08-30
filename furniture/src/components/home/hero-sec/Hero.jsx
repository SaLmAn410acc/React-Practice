import couch from "../../../images/couch.png";

const Hero = () => {
  return (
    <section className="hero-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="left-sec-hero">
              <h1>Modern Interior Design Studio</h1>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div>
                <a href="#">Shop Now</a>
                <a href="#">Explore</a>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="right-sec-hero">
              <img src={couch} className="right-sec-hero-img" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
