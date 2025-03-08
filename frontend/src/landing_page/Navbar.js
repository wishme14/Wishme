import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const prevScrollPos = useRef(0); // Use a ref instead of state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      // Show navbar if scrolling up or near the top
      setVisible(prevScrollPos.current > currentScrollPos || currentScrollPos < 10);
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // No dependencies needed because ref updates don't trigger re-renders

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className={`custom-navbar bg-white shadow-sm py-2 ${
        visible ? "sticky-top" : "navbar-hidden"
      }`}
    >
      <div className="container-fluid custom-container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-auto d-none d-md-flex align-items-center gap-3 navbar-left">
            <Link to="/faq" className="nav-link hover-effect">
              FAQ
            </Link>
            <Link to="/wallofgrat" className="nav-link hover-effect">
              Wall of <i className="fa-solid fa-heart heart-icon"></i>
            </Link>
            <div className="dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle hover-effect"
                id="resourcesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={toggleDropdown}
              >
                Resources{" "}
                <i
                  className={`fa-solid fa-chevron-up dropdown-icon ${
                    isDropdownOpen ? "rotate" : ""
                  }`}
                ></i>
              </Link>
              <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
                <li>
                  <Link className="dropdown-item" to="/helpcenter">
                    <i className="fa-solid fa-circle-question me-2"></i>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/ios">
                    <i className="fa-brands fa-apple me-2"></i>
                    iOS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/android">
                    <i className="fa-brands fa-android me-2"></i>
                    Android
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Center Section: Brand/Logo */}
          <div className="col text-center">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center justify-content-center"
            >
              <img
                src="/media/images/wishme-logo.png"
                alt="Wish Me Logo"
                className="brand-logo me-2"
              />
              <span className="brand-text">Wish Me</span>
            </Link>
          </div>

          {/* Right Section */}
          <div className="col-auto d-flex align-items-center gap-3 navbar-right">
            <div className="position-relative d-none d-md-block search-container">
              <input
                type="text"
                placeholder="Search creators"
                className="search-input"
              />
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
            </div>
            <Link to="/login" className="login-link hover-effect">
              Log in
            </Link>
            <Link to="/signup">
              <button type="button" className="signup-btn hover-effect">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;