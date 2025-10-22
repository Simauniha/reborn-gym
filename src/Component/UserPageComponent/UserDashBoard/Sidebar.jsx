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
    <>
    <nav className=" user-nav flex flex-col gap-3">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className=" admin col-sm-4">
  
      {/* Top Section */}
    
          <div  className="admin-logo"><img src="rebprn.jpg"></img></div>
        <h1 className="user-title">
          Reborn Gym
        </h1></div>



        <div className="col-sm-4">
          <ul className="user-nav list-unstyled d-flex gap-5">
      <li className="user-list">  <NavLink
            to="/userDashboard"
            className={({ isActive }) =>
              ` home-list flex items-center gap-3 text-lg font-medium py-2 px-3 rounded-md transition-all ${
                isActive ? "bg-gray-800 text-red-400" : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            <Home size={20} />
            Home
          </NavLink></li>  

      <li className="user-list">    <NavLink
            to="/userDashboard/profile"
            className={({ isActive }) =>
              ` profile-list2  flex items-center gap-3 text-lg font-medium py-2 px-3 rounded-md transition-all ${
                isActive ? "bg-gray-800 text-red-400" : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            <User size={20} />
            Profile
          </NavLink></li> 

     <li className="user-list">     <NavLink
            to="/userDashboard/settings"
            className={({ isActive }) =>
              `setting-list3 flex items-center gap-3 text-lg font-medium py-2 px-3 rounded-md transition-all ${
                isActive ? "bg-gray-800 text-red-400" : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            <Settings size={20} />
            Settings
          </NavLink></li>
          </ul>
       
      </div>

      {/* Bottom Logout Section */}
      <div className="">
        <button
          onClick={handleLogout}
          className=" userlogout-btn"
        >
         
      <h1>Logout</h1>    
        </button>
      </div>
    
    </div>

    </nav>
    </>
  );
};

export default Sidebar;
