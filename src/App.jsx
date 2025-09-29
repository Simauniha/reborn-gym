import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Component/LandingPageComponent/Navbar";
import About from "./Component/LandingPageComponent/about";
import Service from "./Component/LandingPageComponent/service";
import Footer from "./Component/LandingPageComponent/footer";
import Home from "./Component/LandingPageComponent/Home";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
