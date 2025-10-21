import React from "react";
import { NavLink } from "react-router-dom";
import { Home, User, Settings } from "lucide-react";

const Sidebar = () => {
  return (
    <nav className="w-full bg-black text-white shadow-lg border-b border-gray-800 px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold tracking-wide text-red-500">Reborn Gym</h1>

      <div className="flex gap-8 text-lg">
        <NavLink
          to="/userDashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-red-500 transition ${
              isActive ? "text-red-500" : ""
            }`
          }
        >
          <Home size={20} /> Home
        </NavLink>

        <NavLink
          to="/userDashboard/profile"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-red-500 transition ${
              isActive ? "text-red-500" : ""
            }`
          }
        >
          <User size={20} /> Profile
        </NavLink>

        <NavLink
          to="/userDashboard/settings"
          className={({ isActive }) =>
            `flex items-center gap-2 hover:text-red-500 transition ${
              isActive ? "text-red-500" : ""
            }`
          }
        >
          <Settings size={20} /> Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Sidebar;
