
import { NavLink,Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar () {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link  className="logo navbar-brand" to="home">
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="menu navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );

}
