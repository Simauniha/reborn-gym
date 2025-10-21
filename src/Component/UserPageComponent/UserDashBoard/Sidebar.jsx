import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Home, User, Settings, LogOut } from "lucide-react";

const Sidebar = ({ onLogout }) => {
  const navigate = useNavigate();

  // Handle logout and redirect
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
    if (onLogout) onLogout();
  };

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white flex flex-col justify-between shadow-xl">
      {/* Top Section */}
      <div>
        <h1 className="text-center text-3xl font-bold py-6 tracking-wide border-b border-gray-800">
          Reborn Gym
        </h1>

        <nav className="mt-6 flex flex-col space-y-3 px-6">
          <NavLink
            to="/userDashboard"
            className={({ isActive }) =>
              `flex items-center gap-3 text-lg font-medium py-2 px-3 rounded-md transition-all ${
                isActive ? "bg-gray-800 text-red-400" : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            <Home size={20} />
            Home
          </NavLink>

          <NavLink
            to="/userDashboard/profile"
            className={({ isActive }) =>
              `flex items-center gap-3 text-lg font-medium py-2 px-3 rounded-md transition-all ${
                isActive ? "bg-gray-800 text-red-400" : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            <User size={20} />
            Profile
          </NavLink>

          <NavLink
            to="/userDashboard/settings"
            className={({ isActive }) =>
              `flex items-center gap-3 text-lg font-medium py-2 px-3 rounded-md transition-all ${
                isActive ? "bg-gray-800 text-red-400" : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            <Settings size={20} />
            Settings
          </NavLink>
        </nav>
      </div>

      {/* Bottom Logout Section */}
      <div className="px-6 mb-8">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg shadow-md transition-all"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
