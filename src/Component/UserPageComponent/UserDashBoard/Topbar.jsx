import React from "react";
import { LogOut } from "lucide-react";

const Topbar = ({ user, onLogout }) => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-md border-b border-gray-800 py-4 px-6 flex justify-between items-center">
      <h3 className="text-xl font-semibold tracking-wide">
        Welcome,{" "}
        <span className="text-red-500">
          {user?.user_name || user?.name || "Champion"}
        </span>{" "}
        👋
      </h3>

      <button
        onClick={onLogout}
        className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg shadow transition-all duration-300"
      >
        <LogOut size={18} /> Logout
      </button>
    </div>
  );
};

export default Topbar;
