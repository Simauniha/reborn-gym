import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Component/LandingPageComponent/Navbar";
import About from "./Component/LandingPageComponent/About";
import Service from "./Component/LandingPageComponent/Service";
import Footer from "./Component/LandingPageComponent/Footer";
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
import UserDashboard from "./Component/UserPageComponent/UserDashBoard/UserDashboard";
import AdminDashboard from "./Component/AdminPageComponent/AdminDashboard/AdminDashboard"
import "./App.css";
function App() {
  return (
    <>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/home1" element={<Home1 />} />

        <Route path="/userDashboard/*" element={<UserDashboard />} />

        <Route path="/adminDashboard/*" element={<AdminDashboard />} />

      </Routes>
    </>
  );
}

export default App;
