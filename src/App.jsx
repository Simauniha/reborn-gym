import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Component/LandingPageComponent/Navbar";
import About from "./Component/LandingPageComponent/about";
import Service from "./Component/LandingPageComponent/service";
import Footer from "./Component/LandingPageComponent/footer";
import Home from "./Component/LandingPageComponent/Home";
import Blog from "./Component/LandingPageComponent/Blog";
import Gallery from "./Component/LandingPageComponent/Gallery";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Component/LandingPageComponent/Register";
import "./App.css";   
import Login from "./Component/LandingPageComponent/Login";
import Schedule from "./Component/LandingPageComponent/Schedule";
import Contact from "./Component/LandingPageComponent/Contact"
import Home1 from "./Component/LandingPageComponent/Home1"
import "./App.css";  
function App() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Schedule" element={<Schedule/>} />
          <Route path="/Contact" element={<Contact/>} />
           <Route path="/Home1" element={<Home1/>} />
          <Route path="/login" element={<Login />} />
           <Route path="/Gallery" element={<Gallery/>} />
        </Routes>
     
    </>
  );
}

export default App;
