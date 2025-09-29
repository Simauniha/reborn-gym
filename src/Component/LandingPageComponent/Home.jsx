import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Home.css";
import About from "./about"
const Home = () => {
  return (
    <>
   
      <div className="img-conatainer">
        <nav className="navbar navbar-expand-lg navbar-dark py-3 px-100">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="./rebprn.jpg" className="logo" alt="logo" />
              <p className="fitness">FITNESS</p>
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

            <div className="collapse navbar-collapse " id="navbarNav" >
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
                  </Link>
                </li>

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
                <li className="nav-item">
                  <Link className="nav-link" to="/careers">
                    <strong>Careers</strong>
                  </Link>
                </li>

                {/* Read More button at end */}
                <li className="nav-item ms-3">
                  <Link
                    className="nav-link btn nav-last-hover-button px-3 hover-button mb-1"
                    to="/membership"
                  >
                    <p className="btn-text">BECOME A MEMBER</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="row">
          <div className="col-sm-6">
            <div className="line-classn hi"></div>
            <h1 className="hi">
              Build Perfect body
              <br /> Shape for good and
              <br /> Healthy life.
            </h1>
            <Link
              className="hi btn nav-last-hover-button ml-5 hover-button mt-4"
              to="/membership"
            >
              <p className="btn-text">BECOME A MEMBER</p>
            </Link>
          </div>
          <div className="col-sm-6"></div>
        </div>
      </div>
       <About></About>
    </>
  );
};

export default Home;
