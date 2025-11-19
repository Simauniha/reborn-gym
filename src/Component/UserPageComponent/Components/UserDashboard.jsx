import "../../../Styles/UserDashboard.css"
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// Pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Exercise from "../pages/Exercise";
import DietPlan from "../pages/Diet_Plan";
import Analysis from "../pages/Analysis";
import Setting from "../pages/Setting";

function UserDashboard() {
  return (
    <div className="dashboard-root">
      <Sidebar />

      <div className="main-content">
        <Topbar />
        <div className="content-container">

          {/* Dashboard Pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/diet_plan" element={<DietPlan />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
