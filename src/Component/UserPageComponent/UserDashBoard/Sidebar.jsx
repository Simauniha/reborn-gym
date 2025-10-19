import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const active = (path) => location.pathname === path ? "bg-blue-600 text-white" : "text-gray-700";

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">User Dashboard</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/userDashboard" className={`p-2 rounded ${active("/userDashboard")}`}>🏠 Home</Link>
        <Link to="/userDashboard/profile" className={`p-2 rounded ${active("/userDashboard/profile")}`}>👤 Profile</Link>
        <Link to="/userDashboard/settings" className={`p-2 rounded ${active("/userDashboard/settings")}`}>⚙️ Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
