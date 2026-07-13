import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black custom-navbar py-3 px-100">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="./reborn-wbg.png" className="logo" alt="logo" />
          <p className="fitness">REBORN</p>
                
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 menu-item">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                <strong>Home</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <strong>About</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
                <strong>Services</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Schedule">
                <strong>Schedule</strong>
              </Link></li>
                <li className="nav-item">
              <Link className="nav-link" to="/Gallery">
                <strong>Gallery</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <strong>Contact</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                <strong>Blog</strong>
              </Link>
            </li>
           
            {/* Membership Button */}
            <li className="nav-item ms-3">
              <Link
                className="nav-link btn nav-last-hover-button px-3 hover-button mb-1"
                to="/register"
              >
                <p className="btn-text">BECOME A MEMBER</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
   
  );
};

export default Navbar;
