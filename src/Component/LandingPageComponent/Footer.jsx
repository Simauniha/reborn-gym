import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-hero py-5">
      <div className="container content">
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div>
            <div className="footer-title">COMPANY</div>
            <ul className="list-unstyled mt-5">
              <li className="mb-2">
                <Link className="footer-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link" to="/services">
                  Service
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/Gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-title">OPEN HOURS</div>
            <ul className="list-unstyled mt-5">
              <li className="mb-2">
                <Link className="footer-link" to="#">
                  Monday 11am-7pm
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link" to="#">
                  Tuesday-Friday 11am-8pm
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link" to="#">
                  Saturday 10am-6pm
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Sunday 11am-6pm
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-title">RESOURCES</div>
            <ul className="list-unstyled mt-5">
              <li className="mb-2">
                <Link className="footer-link" to="#">
                  Home Insurance
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link" to="#">
                  Travel Insurance
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link" to="#">
                  Car Insurance
                </Link>
              </li>
              <li className="mb-2">
                <Link className="footer-link" to="#">
                  Business Insurance
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Heal Insurance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-logo">
           
              <h1 className="footer-head">FITNESS</h1>
            
            <p className="para">
              The trade war currently ensuing between the US and several nations
              around the globe, most fiercely with...
            </p>
            </div>
            <div className="footer-icon d-flex">
              <FaFacebook  />
             <FaInstagram />
             <BsBrowserEdge />
             <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="copyright text-center">
          <small>
            Copyright ©2025 All rights reserved | This template is made with ❤️
            by <span className="text-danger">Colorlib</span>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


