import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuthStore } from "../../store/AuthStore";

const Navbar = () => {
  const navigate = useNavigate();
  const {setIsLogged}=useAuthStore()
  const token = localStorage.getItem("token");

  const redirectToHomePage = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="text-decoration-none">
          <a className="navbar-brand fs-3 text-white">Foodie</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <HashLink smooth to="/#hero" className="nav-link active mr-lg-2">
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#working" className="nav-link mr-lg-2">
                  How it works
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#delivery" className="nav-link mr-lg-2">
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/explore" className="nav-link mr-lg-2">
                  Explore
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#why" className="nav-link mr-lg-2">
                  Why
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#testimonials" className="nav-link mr-lg-2">
                  FAQs
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth to="/#fav" className="nav-link mr-lg-2">
                  Favourites
                </HashLink>
              </li>
            </ul>
            {token ? (
              <button
                style={{ color: "white" }}
                className="logout ms-auto btn btn-outline-danger rounded-pill px-4 py-1"
                onClick={redirectToHomePage}
              >
                Logout
              </button>
            ) : (
              <button className="ms-auto btn rounded-pill px-4 py-1 text-white" style={{ backgroundColor: "orangered" }}>
                <Link to="/login" className="text-decoration-none text-white">
                  Login
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
