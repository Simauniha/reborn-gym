import { NavLink } from "react-router-dom";
import { FaHome, FaUsers } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import "../../../Styles/UserDashboard.css";
import { Link, useNavigate } from "react-router-dom";

function AdminSidebar() {
  const navItems = [
    { to: "", icon: <FaHome />, label: "Home" },
    { to: "users", icon: <FaUsers />, label: "Edit Users" },
    { to: "reports", icon: <BsGraphUpArrow />, label: "Reports" },
    { to: "settings", icon: <IoSettingsSharp />, label: "Settings" },
  ];

  return (
    <aside id="admin-sidebar" className="sidebar-fixed">
      <div className="sidebar-logo">
        <NavLink to="/adminDashboard" className="logo-link">
          <img src="/reborn-wbg.png" alt="reborn" />
        </NavLink>
      </div>

      <nav className="sidebar-nav">
        <ul>
          {navItems.map((it) => (
            <li key={it.to}>
              <NavLink
                to={`/adminDashboard/${it.to}`}
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

export default AdminSidebar;
