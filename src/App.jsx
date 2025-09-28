import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import About from "./Component/LandingPageComponent/about";
import Service from "./Component/LandingPageComponent/service";
import Footer from "./Component/LandingPageComponent/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// zs;ldmfgklf,
function App() {
  return (
    <Router>
      <div>
        {/* Simple Navbar for navigation */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">MyApp</Link>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/service">Service</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/footer">Footer</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<h1 className="text-center mt-5">Welcome to My App 🚀</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
