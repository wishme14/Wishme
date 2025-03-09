import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [isAppsOpen, setIsAppsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleApps = () => {
    setIsAppsOpen(!isAppsOpen);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
  };

  return (
    <footer className="footer py-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* Left Section */}
        <div className="mb-2 mb-md-0 footer-left text-muted">
             &copy; by <strong>Wish Me</strong>
        </div>
        
        {/* Middle Section: Navigation Links & Dropdowns */}
        <div className="d-flex flex-wrap justify-content-center mb-2 mb-md-0 footer-middle">
          <Link to="/about" className="footer-link small-gap">About</Link>
          <Link to="/helpcenter" className="footer-link small-gap">Help Center</Link>
          
          {/* Apps Dropdown */}
          <div className="dropdown small-gap">
            <Link
              to=""
              className="dropdown-toggle footer-dropdown-toggle footer-link"
              id="appsDropdown"
              data-bs-toggle="dropdown"
              aria-expanded={isAppsOpen}
              onClick={toggleApps}
            >
              Apps{" "}
              <i className={`fa-solid fa-chevron-up dropdown-icon ${isAppsOpen ? "rotate" : ""}`}></i>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="appsDropdown">
              <li>
                <Link className="dropdown-item" to="/ios">
                  <i className="fa-brands fa-apple me-2"></i> iOS
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/android">
                  <i className="fa-brands fa-android me-2"></i> Android
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Dropdown */}
          <div className="dropdown small-gap">
            <Link
              href=""
              className="dropdown-toggle footer-dropdown-toggle footer-link"
              id="resourcesDropdown"
              data-bs-toggle="dropdown"
              aria-expanded={isResourcesOpen}
              onClick={toggleResources}
            >
              Resources{" "}
              <i className={`fa-solid fa-chevron-up dropdown-icon ${isResourcesOpen ? "rotate" : ""}`}></i>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="resourcesDropdown">
              <li>
                <Link className="dropdown-item" to="/faq">
                  <i className="fa-solid fa-question me-2"></i> FAQ
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/privacy" className="footer-link small-gap">Privacy</Link>
          <Link to="/terms" className="footer-link small-gap">Terms</Link>
        </div>
        
        {/* Right Section: Icons */}
        <div className="footer-right">
          <Link to="https://x.com/" target="_blank" className="footer-link small-gap">
            <i className="fa-solid fa-xmark"></i>
          </Link>
          <Link to="https://www.instagram.com/" target="_blank" className="footer-link small-gap">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to="https://www.youtube.com/" target="_blank" className="footer-link small-gap">
            <i className="fa-brands fa-youtube"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;