import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsBrowserEdge } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-hero py-5">
      <div className="container content">
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div>
            <div className="footer-title">COMPANY</div>
            <ul className="list-unstyled mt-5">
              <li className="mb-2">
                <a className="footer-link" href="#">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a className="footer-link" href="#">
                  Company
                </a>
              </li>
              <li className="mb-2">
                <a className="footer-link" href="#">
                  Press & Blog
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Privacy Policy
                 
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-title">OPEN HOURS</div>
            <ul className="list-unstyled mt-5">
              <li className="mb-2">
                <a className="footer-link" href="#">
                  Monday 11am-7pm
                </a>
              </li>
              <li className="mb-2">
                <a className="footer-link" href="#">
                  Tuesday-Friday 11am-8pm
                </a>
              </li>
              <li className="mb-2">
                <a className="footer-link" href="#">
                  Saturday 10am-6pm
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Sunday 11am-6pm
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-title">RESOURCES</div>
            <ul className="list-unstyled mt-5">
              <li className="mb-2">
                <a className="footer-link" href="#">
                  Home Insurance
                </a>
              </li>
              <li className="mb-2">
                <a className="footer-link" href="#">
                  Travel Insurance
                </a>
              </li>
              <li className="mb-2">
                <a className="footer-link" href="#">
                  Car Insurance
                </a>
              </li>
              <li className="mb-2">
                <a className="footer-link" href="#">
                  Business Insurance
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Heal Insurance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-logo">
              <img src="../../public/images/reborn.jpg" alt="logo" />
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


