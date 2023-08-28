import user from "../../../images/user.svg";
import cart from "../../../images/cart.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg nav-bg">
      <div className="container">
        <a className="navbar-brand" href="#">
          Furni.
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
          <span className="navbar-toggler-icon"></span>
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
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only ">(current)</span>
            </a>
          </li>
          <li className="nav-item different">
            <a className="nav-link" href="#">
              Shop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Services
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              Blog
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>

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
