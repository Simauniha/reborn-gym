import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Component/LandingPageComponent/Navbar";
import About from "./Component/LandingPageComponent/about";
import Service from "./Component/LandingPageComponent/service";
import Footer from "./Component/LandingPageComponent/footer";
import Home from "./Component/LandingPageComponent/Home";
import Blog from "./Component/LandingPageComponent/Blog";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/css/bootstrap.min.css";
// import Membership from "./Component/LandingPageComponent/membership"
import Login from "./Component/LandingPageComponent/Login";
import "./App.css";   //dfyfdg
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/membership" element={<Login />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
