import user from "../../../images/user.svg";
import cart from "../../../images/cart.svg";

import { linksData } from "../../../../data";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-bg">
      <div className="container">
        <a className="navbar-brand" href="#">
          Furni
          <span>.</span>
        </a>
        <button
          className="navbar-toggler"
          color="white"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon my-toggler"></span>
        </button>

        <NavbarLinks />
      </div>
    </nav>
  );
};

const NavbarLinks = () => {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav  ml-auto">
          {linksData.map((link, index) => {
            return (
              <li className="nav-item active" key={index}>
                <a className="nav-link" href="#">
                  {link.name}{" "}
                  {index == 0 ? (
                    <span className="sr-only ">(current)</span>
                  ) : null}
                </a>
              </li>
            );
          })}

          <div className="nav-last-items">
            <li>
              <a className="nav-link" href="#">
                <img src={user} alt="" />
              </a>
            </li>

            <li>
              <a className="nav-link" href="#">
                <img src={cart} alt="" />
              </a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
