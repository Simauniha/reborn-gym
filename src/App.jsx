import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Component/LandingPageComponent/Navbar";
import About from "./Component/LandingPageComponent/about";
import Service from "./Component/LandingPageComponent/service";
import Footer from "./Component/LandingPageComponent/footer";
import Home from "./Component/LandingPageComponent/Home";
import Blog from "./Component/LandingPageComponent/Blog";
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Component/LandingPageComponent/Register";
import "./App.css";
import Login from "./Component/LandingPageComponent/Login";
import Schedule from "./Component/LandingPageComponent/Schedule";
import Contact from "./Component/LandingPageComponent/Contact"
import Home1 from "./Component/LandingPageComponent/Home1"
import NotFound from "./Component/LandingPageComponent/NotFound";

function App() {
  const location = useLocation()
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"))
    setUserData(user)
  }, [location])
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/membership" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home1" element={<Home1 />} />
        <Route path="/login" element={<Login />} />

        {/* {User Route} */}
        {userData?.userType == "user" && <>
          <Route path="/userDashboard" element={<UserDashboard />} />
        </>}

        {/* {Admin Route} */}
        {userData?.userType == "admin" && <>
          <Route path="/adminDashboard" element={<AdminDashboard />} />
        </>}

        <Route path="*" element={<NotFound/>} />

      </Routes>
    </>
  );
}

export default App;
