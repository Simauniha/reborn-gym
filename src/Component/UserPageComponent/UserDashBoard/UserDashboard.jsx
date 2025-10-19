import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import Topbar from "./Topbar.jsx";
import DashboardHome from "../userPages/DashboardHome.jsx";
import Profile from "../userPages/Profile.jsx";
import Settings from "../userPages/Settings.jsx";

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <Topbar user={user} />
        <div className="p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
