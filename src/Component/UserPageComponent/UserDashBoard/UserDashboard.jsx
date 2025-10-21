import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import DashboardHome from "../userPages/DashboardHome.jsx";
import Profile from "../userPages/Profile.jsx";
import Settings from "../userPages/Settings.jsx";
import Footer from "../../LandingPageComponent/Footer.jsx";

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <>
      <div className="flex h-screen bg-black text-white">
        <Sidebar onLogout={handleLogout} />

        <div className="flex flex-col flex-1 overflow-hidden">
          <Topbar user={user} />
          <div className="p-6 overflow-y-auto flex-1">
            <Routes>
              <Route path="/" element={<DashboardHome />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
      <div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default UserDashboard;
