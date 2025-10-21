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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Top Navigation (Sidebar-style) */}
      <Sidebar />

      {/* Welcome / Topbar Section */}
      <Topbar user={user} onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserDashboard;
