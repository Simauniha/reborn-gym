import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "./AdminSidebar.jsx";
import AdminTopbar from "./AdminTopbar.jsx";
import AdminHome from "../AdminPages/AdminHome.jsx";
import ManageUsers from "../AdminPages/ManageUsers.jsx";
import Reports from "../AdminPages/Reports.jsx";
import Settings from "../AdminPages/Settings.jsx";

const AdminDashboard = () => {
  const admin = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        <AdminTopbar admin={admin} />
        <div className="p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<AdminHome />} />
            <Route path="/users" element={<ManageUsers />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
