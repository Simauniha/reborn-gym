import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserCircle,
} from "react-icons/fa";

import { GiWeightLiftingUp } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";

function Sidebar() {
  const navItems = [
    { to: "home", icon: <FaHome />, label: "Home" },
    { to: "profile", icon: <FaUserCircle />, label: "Profile" },
    { to: "exercise", icon: <GiWeightLiftingUp />, label: "Exercise" },
    { to: "diet_plan", icon: <MdRestaurantMenu />, label: "Diet Plan" },
    { to: "analysis", icon: <BsGraphUpArrow />, label: "Analysis" },
    { to: "setting", icon: <IoSettingsSharp />, label: "Setting" },
  ];
  
  return (
    <aside id="sidebar" className="sidebar-fixed">
      <div className="sidebar-logo">
        <NavLink to="/userDashboard/home" className="logo-link">
          <img src="/reborn-wbg.png" alt="reborn" />
        </NavLink>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((it) => (
            <li key={it.to}>
              <NavLink
                to={`/userDashboard/${it.to}`}
                className={({ isActive }) =>
                  isActive ? "nav-link2 active" : "nav-link2"
                }
              >
                <span className="nav-icon">{it.icon}</span>
                <span className="nav-text">{it.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
