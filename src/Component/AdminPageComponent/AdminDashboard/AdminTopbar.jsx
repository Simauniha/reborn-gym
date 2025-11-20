import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaBell, FaUser } from "react-icons/fa";
import "../../../Styles/UserDashboard.css";

function AdminTopbar({ admin }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="search-box">
          <input type="text" placeholder="Search" id="search" />
        </div>
      </div>

      <div className="topbar-right">
        <ul className="top-icons list-inline">
          <li>
            <Link to="/adminDashboard/email">
              <FaEnvelope size={20} color="black" />
            </Link>
          </li>
          <li>
            <Link to="/adminDashboard/notifications" className="icon-info">
              <FaBell size={20} color="black" />
            </Link>
          </li>

          <li className="dropdown user-dropdown">
            <Link to="#" className="user-icon">
              <FaUser size={20} color="black" />
            </Link>
            <div className="dropdown-menu">
              <div className="navbar-content">
                <span>{admin?.name || "Admin"}</span>
                <p className="text-muted small">{admin?.email || "admin@email.com"}</p>
                <div className="divider" />
                <Link to="/adminDashboard" className="btn active view">View Profile</Link>
              </div>
            </div>
          </li>

          <li>
            <button className="log-out" onClick={handleLogout}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AdminTopbar;