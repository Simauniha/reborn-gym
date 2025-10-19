import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const active = (path) => location.pathname === path ? "bg-blue-600 text-white" : "text-gray-700";

  return (
    <div className="w-64 h-screen bg-white shadow-lg p-4 flex flex-col">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Admin Panel</h2>
      <nav className="flex flex-col gap-3">
        <Link to="/adminDashboard" className={`p-2 rounded ${active("/adminDashboard")}`}>🏠 Dashboard</Link>
        <Link to="/adminDashboard/users" className={`p-2 rounded ${active("/adminDashboard/users")}`}>👥 Manage Users</Link>
        <Link to="/adminDashboard/reports" className={`p-2 rounded ${active("/adminDashboard/reports")}`}>📊 Reports</Link>
        <Link to="/adminDashboard/settings" className={`p-2 rounded ${active("/adminDashboard/settings")}`}>⚙️ Settings</Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
